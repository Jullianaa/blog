//console.log("Hello world!");
var http = require("http");
var fs = require("fs");
var url = require("url");

/*function heandleResponsable (req, res) {
    res.write("Hello World!");
    res.end();

})
http.createServer(heandleResponsable).listen(3000);
*/

http.createServer(function (req, res) {
    //res.write("Hello World!");
    var query = url.parse(req.url);

    var filename = "." + query.pathname;

    //file system
    fs.readFile(filename, function(error, data){
        if(error)    
            res.write("error 404");
        else
            res.write(data) 
        
        res.end();
        
    })

}).listen(3000);



