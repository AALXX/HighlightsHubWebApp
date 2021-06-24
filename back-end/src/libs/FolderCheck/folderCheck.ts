import fs from "fs";
import hat from "hat";

//*It checks if folder to be searhed has been created and if yes it gives other name
const CreateChanelFolder = (FolderToBeChechPath: string, callback:any) => {
    fs.access(FolderToBeChechPath, function(err) {
    if (err && err.code === 'ENOENT') {
      //*Folder doesen't exist
      fs.mkdirSync(FolderToBeChechPath);
      callback(FolderToBeChechPath)
    } else {
      
      //*Fodler exist
      let newFolderToBeChechPath = `../videos/${hat()}/`;
      CreateChanelFolder(newFolderToBeChechPath, () =>{}); 
    }
  });
};

const tets = (prop:string) => {
  return prop;
}

export default {
  CreateChanelFolder,
  tets
};