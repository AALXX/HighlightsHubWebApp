import connection from "../DatabaseConnection/GetDatabaseConnection"


//Check if use has liked the vide and lik the video function
const CheckIfTheVideoISLikedByUSer = (VideoId: number, userId: number, callback: any) => {
    const GetUserIdAndVideoId = `SELECT * FROM video_class WHERE IdVideo="${VideoId}"`

    connection.query(GetUserIdAndVideoId, (err: any, rows: any) => {
        if (err) {
            console.log(err);
        }

        const UserThatLikedThevideo = rows.map((row: any) => {
            return {
                UserId: row.UserId
            };
        })
        let UserLiked = false;

        let UserThatLikedVideoIdsSorted = UserThatLikedThevideo.sort(function (a: any, b: any) {
            return a.UserId - b.UserId
        })
        UserLiked = BinarySearchAlgorythmIfUserLiked(userId, UserThatLikedVideoIdsSorted)
        callback(null, UserLiked)
    })
}

//Binary Search if UserId is in Array
function BinarySearchAlgorythmIfUserLiked(UserId: number, UserIdsArray: any) {
    let lower = 0;
    let upper = UserIdsArray.length - 1;


    while (lower <= upper) {
        const middle = Math.floor((upper + lower) / 2);
        if (UserIdsArray[middle].UserId === UserId) {
            return true;
        }
        if (UserId > UserIdsArray[middle].UserId) {
            lower = middle + 1
        } else {
            upper = middle - 1;
        }
    }

    return false;
}

function GetUserAndVideoID(UserToken: any, VideoToken: any, callback: any) {
    const getUserIdQuerryString = `SELECT * FROM users WHERE Token="${UserToken}"; SELECT * FROM videos WHERE VideoToken="${VideoToken}";`
    connection.query(getUserIdQuerryString, (err: any, rows: any) => {
        if (err) {
            console.log(err)
        } else {
            callback(null, rows)
        }
    })
}

const LikeTheVideo = (req: any) => {
    GetUserAndVideoID(req.body.UserToken, req.body.VideoToken, function (err: any, data: any) {
        if (err) {
            console.log(err);
            console.log("Mysql error, check your query");
        } else {
            let User = JSON.parse(JSON.stringify(data[0]))
            let Video = JSON.parse(JSON.stringify(data[1]))

            CheckIfTheVideoISLikedByUSer(Video[0].idVideo, User[0].idUsers, function (err: any, UserLikedBool: boolean) {
                if (err) {
                    console.log(err)
                } else {

                    if (UserLikedBool === true) {

                        const UnlikeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes-${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM video_class WHERE (IdVideo=${Video[0].idVideo} AND UserId=${User[0].idUsers});`
                        connection.query(UnlikeVideoSqlQuerry, (err: any) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                        })

                    } else {
                        const UdpateVideoLikesSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes+${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO video_class(IdVideo,UserId) VALUES(?, ?);`

                        connection.query(UdpateVideoLikesSqlQuerry, [Video[0].idVideo, User[0].idUsers], (err: any) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                        })
                    }
                }
            });
        }
    })
}

export const LikeTheVideoFunc = (req: any, res: any) => {
    if (req.params.name == "like-a-video") {
        LikeTheVideo(req)
        res.end()
    }

    if (req.params.name == "has-user-liked-video") {
        if (req.body.UserToken != null && req.body.VideoToken != null) {
            GetUserAndVideoID(req.body.UserToken, req.body.VideoToken, function (err: any, data: any) {
                if (err) {
                    console.log(err);
                    console.log("Mysql error, check your query");
                } else {
                    let User = JSON.parse(JSON.stringify(data[0]))
                    let Video = JSON.parse(JSON.stringify(data[1]))

                    CheckIfTheVideoISLikedByUSer(Video[0].idVideo, User[0].idUsers, function (err: any, UserLikedBool: boolean) {
                        if (err) {
                            console.log(err)
                        } else {
                            if (UserLikedBool === true) {
                                res.json([{
                                    HasUserLiked: true
                                }]);
                                res.end()
                            } else {
                                res.json([{
                                    HasUserLiked: false
                                }]);
                                res.end()
                            }
                        }
                    });
                }
            })
        } 
    }
}

//GetVideoPublicData

export const GetVideoData = (VideoToken: any, res: any) => {
    const GetVideoDataSqlQuerryString = `SELECT * FROM videos WHERE VideoToken="${VideoToken}"`

    connection.query(GetVideoDataSqlQuerryString, (err: any, rows: any) => {
        if (err) {
            console.log(err)
        }

        const PublicVideoData = rows.map((row: any) => {
            return {
                VideoName: row.VideoName,
                VideoLikes: row.VideoLikes
            }
        })

        res.json(PublicVideoData)
        
    })
}

export default { GetVideoData, LikeTheVideoFunc};