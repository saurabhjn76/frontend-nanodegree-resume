
var replaceData = function (data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};
var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};
var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

 var bio={
 	"name":"Saurabh Jain",
 	"role":"Programmer , Sports enthusiast",
 	"contacts":{
 		"mobile":"<a href='tel:91-9868043072'>91-9868043072</a>",
 		"email":"<a href='mailto:saurabhjn76@gmail.com'>saurabhjn76@gmail.com</a>",
 		"github":"<a href=https://github.com/saurabhjn76>saurabhjn76</a>",
 		"twitter":"<a href=https://twitter.com/saurabhjn76>@saurabhjn76</a>",
 		"location":"<a href='#'>Noida</a>",
 	},
 	"welcomeMessage":"I am a fellow programmer from Delhi, India.I love playing badminton, chess ,table-tennis,reading quora.I have diverse interests and would love to grow in multiple directions and try different things.",
 	"skills":["Multitasking","Sportsperson",'HTML5/CSS3', 'C/C++',
              'Python', 'JavaScript', 'Java', 'GNU Octave', 'Linux',
              'GitHub', 'MATLAB'],
 	"bioPic":"images/15e6.jpg",
 	'display':function () {

  	var name = replaceData(bio.name, HTMLheaderName);
    var role = replaceData(bio.role, HTMLheaderRole);
    $('#header').prepend(role).prepend(name);
    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
     $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').append(replaceData(bio.bioPic, HTMLbioPic))
                .append(replaceData(bio.welcomeMessage, HTMLwelcomeMsg))
                .append(HTMLskillsStart);
     appendListOfObjects(bio.skills, '#skills', HTMLskills, '%data%');


		 		
 	}

 };
bio.display();

var education ={
 	"schools":[
 	{
 		"name":"Kendriya Vidyalaya",
 		"location":"Shimla",
 		"degree":"Primary School",
 		"dates":2004,
 		"url":"http://www.kvjakhoohillsshimla.com",
 	},
 	{
 		"name":"Kendriya Vidyalaya",
 		"location":"Noida",
 		"degree":"High School",
 		"dates":2012,
 		"major":"Science with Information Practices",
 		"url":"http://www.kvnoida.edu.in"
 	},
 	{
 		"name":"Indian Institute of Information Technology Vadodara",
 		"location":"Gandhinagar",
 		"degree":"Btech",
 		"major":["CS"],
 		"dates":2014,
 		"url":"http://www.iiitvadodara.ac.in"
 	}
 	],
 	"onlinecourses":[
 		{
 			"name":"Android Nanodegree Course",
 			"location":"Udacity",
 			"degree":"Nanodegree",
 			"dates":2016,
 			"url":"https://www.udacity.com"
 		}
 	],
 	'display': function (){
 		for(var i in education.schools)
 		{
 			$('#education').append(replaceData(i, HTMLschoolStart));
 			var id='#school-entry-'+i;
 			//console.log(id);
 			var school=education.schools[i];
 			//console.log(school.dates);
 			$(id).append((replaceData(school.name, HTMLschoolName) + replaceData(school.degree, HTMLschoolDegree))
           .replace('#', school.url))
           .append(replaceData(school.dates, HTMLschoolDates))
           .append(replaceData(school.location, HTMLschoolLocation))
           .append(replaceData(school.major, HTMLschoolMajor));
 		}
 		$('#education').append(replaceData(i,HTMLonlineClasses));
 		for( var i in education.onlinecourses)
 		{
 			//console.log(i);
 			$('#education').append(replaceData(i, HTMLonlineStart));
      		var id = '#online-entry-' + i;
 			HTMLonlineTitle.replace('#', education.onlinecourses[i].url);
 			$(id).append(replaceData(education.onlinecourses[i].name,HTMLonlineTitle) + replaceData(education.onlinecourses[i].location,HTMLonlineSchool));
 			$(id).append(replaceData(education.onlinecourses[i].dates, HTMLonlineDates))
           .append(replaceData(education.onlinecourses[i].url, HTMLonlineURL).replace('#', education.onlinecourses[i].url));

 			//for(var j in )
 		}

 	}
 };
 education.display();
 var projects={

 	"projects":[{
 		"title":"Race_the_car",
 		"dates":2015,
 		"description":"An exciting strategy board game created on python,as a part of learning project." +  
		" More like a shorter version of chess, where one needs to stay focussed ,anticipate the other player moves and cover all the tracks.",
 		"images":[
 		"images/screenshot01.png",
 		"images/screenshot02.png",
 		"images/screenshot03.png"
 		]
 		
 	}
 	],
 	'display': function() {
 	   		for (var i in this.projects) {
    	  	$('#projects').append(replaceData(i, HTMLprojectStart));
      		var id = '#project-entry-' + i;
      		var project = this.projects[i];
      		//replace('#', 'https://github.com/saurabhjn76/Race-the-car');
      		$(id).append(replaceData(project.title, HTMLprojectTitle).replace('#', 'https://github.com/saurabhjn76/Race-the-car'))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription))
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
 };
 projects.display();


 var work={
 	"jobs":[
 	{
 		"employer":"JENESYS",
 		"title":"Student",
 		"dates":"2013",
 		"description":"JENESYS, Japan - East Asia Network of Exchange for Students and Youths.",
 		"location":"Japan"
 	}],
 	'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(replaceData(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((replaceData(job.employer, HTMLworkEmployer) + replaceData(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(replaceData(job.dates, HTMLworkDates))
           .append(replaceData(job.location, HTMLworkLocation))
           .append(replaceData(job.description, HTMLworkDescription));
    }
  }
 };
 work.display();

 //-------------------------------------------------------------
 $('#mapDiv').append(googleMap);

 function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

 
