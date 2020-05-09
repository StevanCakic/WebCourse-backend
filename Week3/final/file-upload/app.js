const express = require('express');
const upload = require("express-fileupload");

const app = express();
app.use(upload())

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
})

app.post('/upload', function(req, res) {
  
  console.log(req.files);

  if(req.files.upfile){

    const file = req.files.upfile;
    const name = file.name;
    const type = file.mimetype;

    const uploadpath = __dirname + '/uploads/' + name;

    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        res.send('Done! Uploading files')
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})

// make server listen on port 3000
app.listen(3000, () => {
  console.log("Server Started at port 3000");
}); 

