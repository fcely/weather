


var weather= require("weather-js")
var fs= require("fs")
//var user= process.argv[2]
//var location = process.argv[3]


//console.log(user)
//console.log(location)



function user_object (user,location)  {
 
    this.user=user,
    this.location=location,
    this.date=new Date(),
    this.weather= function(){

        weather.find({search: location, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
           
            console.log(JSON.stringify(result, null, 2));
          });
          
          
          
          fs.appendFile("log.txt", "Name:" + user +", Location" + location +", Date:" + new Date() +"\r\n", function(err) {
          
              // If an error was experienced we say it.
              if (err) {
                console.log(err);
              }  
              // If no error is experienced, we'll log the phrase "Content Added" to our node console.
              else {
                console.log("Content Added!");
              }
            
          })




    }   
}


module.exports = user_object

//var constructor= new user_object(user,location)

////constructor.weather()