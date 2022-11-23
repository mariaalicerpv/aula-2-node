var http = require("http");     
                                
var n = require("./primeiromodulo");    

var dia = require("./moduloData.js");

http.createServer(function (req, res){
    res.writeHead(200, {"content-type": "text/html"}) 
    res.write("<h2> teste </h2>");
    res.write(" esta é a segunda criação de servidor local que é feita <br/>")
    res.write(Date());
    res.write("<br/>")
    res.write(n.nome());
    res.write("<br/>")
    res.write(dia.diaDaSemana());
    res.end(" <h2> boa tarde! </h2> ");

    

}).listen(2000);   