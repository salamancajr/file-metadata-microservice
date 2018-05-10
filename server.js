const express = require("express")
var app = express()
var multer = require("multer")
var upload = multer({dest:"uploads/"})


app.get("/", (req, res)=>{
 
    res.sendFile(__dirname+"/views/index.html")
});

app.post("/fileupload", upload.single("avatar"), (req, res)=>{
     
   var size = req.file.size
   
    res.end(JSON.stringify({size: size}))
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
