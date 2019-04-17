'use strict';

var util = require('util');
var fs = require('fs');
var fileType = require('file-type');
var crypto = require('crypto');
//var baseUrl = 'http://159.8.160.5:10010/file/';

// exporting the function for swagger
module.exports = {
    imageUpload: imageUpload
};

// defining the swagger function
function imageUpload(req, res){
    //file = req.swagger.params.image || 'stranger';
    //console.log(req.file)   
    var file = req.swagger.params.image.value;
    
    // getting the file extension
    var fileExtension = fileType(file.buffer)['ext']

    // getting the file name randomized sha1
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var fileName = crypto.createHash('sha1').update(file.buffer).digest('hex');
    console.log(fileName)   
    //console.log(fileName)
    // saving the file
    fs.writeFile('uploads/'+fileName+'.'+fileExtension,file.buffer, function(err){
        if(err) {
            return console.log(err);
        }
        console.log('saved file')
    })
    //console.log(file);
    //console.log(fileType(file.buffer))
    let baseUrl = req.protocol + '://'+req.get('host')+'/file/'
    var url = (baseUrl+fileName+"."+fileExtension)
    res.json({message: 'succesfully generated url', url: url});
}