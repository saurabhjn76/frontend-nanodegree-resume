/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name ="Saurabh Jain";
 var role="Programmer , Sports enthusiast"

 /*var formattedName=HTMLheaderName.replace("%data%",name);
 $("#header").prepend(formattedName);
  var formattedRole=HTMLheaderRole.replace("%data%",role);
 $("#header").prepend(formattedRole);*/

 var bio={
 	"name":name,
 	"role":role,
 	"contacts":{
 		"mobile":"+91-9868043072",
 		"email":"saurabhjn76@gmail.com",
 		"github":"saurabhjn76",
 		"twitter":"@saurabhjn76",
 		"location":"noida",
 	},
 	"welcomeMessage":"lorem ipsum blah blah.....",
 	"skills":["multitasking","foody","Sportsperson","coder"],
 	"bioPic":"images/fry.jpg"

 };
 //$("#main").preappend(bio.name);
 var work={};
 work.position="Student";
 var education={};
 education["name"]="Indian Institute of Information Technology,Vadodara";
 education["years"]="2014-2018";
 education["city"]="Ghandhinagar";
$("#main").preappend(work["position"]);
$("#main").preappend(education.name);
var projects{
	"title":"Race the Car"
};

