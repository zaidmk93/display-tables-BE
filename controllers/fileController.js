const { fileNameExist } = require('../services/tablesFilesService');

exports.fileList = function(req, res, next) {
  try {
     const testFolder = './tables_files/';
     const fs = require('fs');
     const filesArr = [];
   
     fs.readdir(testFolder, (err, files) => {
       files.forEach(file => {
         filesArr.push(file);
       });
       res.send({filesArr});
     });

    } catch (err) {
      res.status(500).send('Something broke or File does not exist!')
    }
   
   }


exports.tablesList = async function(req, res, next) {

  try {
    const fs = require('fs');
    const path = require('path');
    const fileName = req.query.fileName;

    let rawdata = fs.readFileSync(path.resolve(__dirname, '../tables_files/' + fileName));
    let tables = JSON.parse(rawdata);
  
    res.send(tables);
  } catch (err) {
    res.status(500).send('Something broke or File does not exist!')
  }

}