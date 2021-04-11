import connection from "../DatabaseConnection/GetDatabaseConnection"


//* Check if use has liked the vide and lik the video function
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

//* Binary Search if UserId is in Array
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

//* Check if the video Exists

// TODO get video from db if it not exists return to fornt-end
const CheckIfTheVideoExists = async(VideoToken: string) => {
    const CheckIfthevideoEXiststsQuerryString = `SELECT * FROM  videos WHERE VideoToken="${VideoToken}"`;

    const QS = await connection.query(CheckIfthevideoEXiststsQuerryString)
    console.log(QS.values)
    
}


//* Get user and Video Id from db
const GetUserAndVideoID = (UserToken: any, VideoToken: any, callback: any) => {

    console.log(CheckIfTheVideoExists(VideoToken))

    const getUserIdQuerryString = `SELECT * FROM users WHERE Token="${UserToken}"; SELECT * FROM videos WHERE VideoToken="${VideoToken}";`
    connection.query(getUserIdQuerryString, (err: any, rows: any) => {
        if (err) {
            console.log(err)
        } else {
            //*Parse rows from database
            let User = JSON.parse(JSON.stringify(rows[0]))
            let Video = JSON.parse(JSON.stringify(rows[1]))


            if (User !== undefined || Object.keys(User).length !== 0 || Video !== undefined || Object.keys(Video).length !== 0) {
                //* pack userId and VideoId To be sendTo callback
                const data = {
                    idVideo: User[0].idUsers,
                    idUsers: Video[0].idVideo
                }
                callback(null, data)
            } else {
                callback("there was a error", null)
            }

        }
    })
}


//* Check if user liked the Video
export const HasUserLikedTheVideo = (req: any, res: any) => {

    if (req.body.UserToken != null && req.body.VideoToken != null) {
        GetUserAndVideoID(req.body.UserToken, req.body.VideoToken, function (err: any, data: any) {
            if (err) {
                console.log(err);
                console.log("Mysql error, check your query");
            } else {

                CheckIfTheVideoISLikedByUSer(data.idVideo, data.idUsers, function (err: any, UserLikedBool: boolean) {
                    if (err) {
                        console.log(err)
                    } else {
                        if (UserLikedBool === true) {
                            res.json([{
                                HasUserLiked: true
                            }]);
                        } else {
                            res.json([{
                                HasUserLiked: false
                            }]);
                        }
                    }
                });
            }
        })
    }
}

//* Like video by token function
export const LikeTheVideoFunc = (req: any, res: any) => {
    GetUserAndVideoID(req.body.UserToken, req.body.VideoToken, function (err: any, data: any) {
        if (err) {
            console.log(err);
            console.log("Mysql error, check your query");
            res.end();
        } else {

            CheckIfTheVideoISLikedByUSer(data.idVideo, data.idUsers, function (err: any, UserLikedBool: boolean) {
                if (err) {
                    console.log(err)
                } else {
                    //* Check if User Has already Liked The video
                    if (UserLikedBool === true) {
                        const UnlikeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes-${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM video_class WHERE (IdVideo=${data.idVideo} AND UserId=${data.idUsers});`
                        connection.query(UnlikeVideoSqlQuerry, (err: any) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            res.end();
                        })

                    } else {
                        const UdpateVideoLikesSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes+${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO video_class(IdVideo,UserId) VALUES(?, ?);`
                        connection.query(UdpateVideoLikesSqlQuerry, [data.idVideo, data.idUsers], (err: any) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            res.end();
                        })
                    }
                }
            });
        }
    })
}

//* GetVideoPublicData
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

export default { GetVideoData, LikeTheVideoFunc, HasUserLikedTheVideo };