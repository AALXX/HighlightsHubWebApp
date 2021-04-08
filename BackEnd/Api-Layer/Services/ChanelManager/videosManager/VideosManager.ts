import connection from "../../DatabaseConnection/GetDatabaseConnection"


export function GetChanelVids(PrivateChanelToken:any,callback:any) {

    const GetVideosWithChanelTokenSqlQuerry = `SELECT * FROM videos WHERE ChanelToken="${PrivateChanelToken}"`;

    connection.query(GetVideosWithChanelTokenSqlQuerry, (err:any, rows:any) => {
        if (err) {
            console.log(err)
            return;
        }

        const Videos = rows.map((row:any)=>{
            return {
                VideoName: row.VideoName,
                VideoToken: row.VideoToken
            }
        })

        callback(null,Videos)
        
    })
    
}