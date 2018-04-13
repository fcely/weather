


var user_object= require("./user_object.js")
var admin_object=require("./admin_object.js")

var user= process.argv[2]
var location = process.argv[3]


if (user!="admin"){


var user_constructor= new user_object(user,location)

user_constructor.weather()

} else { console.log("welcome admin")

var admin_constructor= new admin_object()

admin_constructor.read_file()


}

