'use strict';

var fs = require('fs');
var path = require('path');

// exporting the function for swagger
module.exports = {
    getImage: getImage
};

function getImage(req, res){
    var url = req.swagger.params.url.value;
    // fs.readFile('uploads/file.png', 'utf8', function(err, contents) {
    //     //console.log(contents)
    //     console.log(path.resolve('uploads/file.png'))
    //     res.sendFile(path.resolve('uploads/file.png'))
    // });

    // gets the file name from url
    var fileName = url.split('/').pop();
    console.log('uploads/'+fileName)
    
    var path1 = path.resolve('uploads/'+fileName);
    console.log(path1)
    try {
        //if (fs.existsSync(path1)) {
          //file exists
          res.sendFile(path1)
        //}
    }catch(err) {
        console.log('not found')
        res.status(404)
        res.send('file not found')
    }
}