import connection from '../DatabaseConnection/GetDatabaseConnection';
import { GetUserPrivateAndPublicInformationsByToken } from "../ManageUserAccount/GetUserAcount"

const CheckIfTheRequestIsVallid = (VideoToken: String, UserToken: String, CommentText: String) => {
  if (VideoToken === "" || UserToken === "" || CommentText === "") {
    return false;
  }
  return true;
}


export const InsertCommentToDatabase = (req: any, res: any) => {
  const InsertCommentIntoDataBaseQuerry = `INSERT INTO comments (CommentContent, UserName, VideoToken, RespondToUserToken, Date) VALUES (?,?,?,?,?)`;
  let datetime = new Date();

  GetUserPrivateAndPublicInformationsByToken(req.body.UserToken, (err: boolean, UserInfos: any) => {

    if (CheckIfTheRequestIsVallid(req.body.VideoTokenm, req.body.UserToken, req.body.CommentText)) {
      connection.query(InsertCommentIntoDataBaseQuerry, [req.body.CommentText, UserInfos.PublicAccountInfos[0].AccountName, req.body.VideoToken, null, datetime], (err, rows) => {
        if (err) {
          console.log(err)
        }
        res.json([
          {
            UserName: UserInfos.PublicAccountInfos[0].AccountName,
            CommentContent:req.body.CommentText
          },
        ]);
      })
    }
  })
}

export const GetVideoComments = (req: any, res: any) => {
  if (req.body.VideoToken !== "" && req.body.VideoToken !== null) {
    const GetVideoComments = `SELECT * FROM comments WHERE VideoToken="${req.body.VideoToken}"`
    connection.query(GetVideoComments, (err: any, rows: any) => {
      if (err) {
        console.log(err);
        return;
      }
      const VideoComment = rows.map((row: any) => {
        return {
          UserName: row.UserName,
          CommentContent: row.CommentContent
        }
      })
      res.json(VideoComment);
    })
  }
}

export default { GetVideoComments, InsertCommentToDatabase }