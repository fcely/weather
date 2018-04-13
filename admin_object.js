
var fs= require("fs")




function admin_object ()  {
 
    this.read_file= function(){
           
        fs.readFile("log.txt", "utf8", function(error, data) {
            if (error) {
              return console.log(error);
            }
            
            var dataArr = data.split(",");
             console.log(data);
        })    
    }   
}

module.exports = admin_object
