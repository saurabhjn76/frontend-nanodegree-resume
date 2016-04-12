
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
 		"location":"<a href='#'>noida</a>",
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
 		"major":"Science with Inforamtion Practices",
 		"url":"http://www.kvnoida.edu.in"
 	},
 	{
 		"name":"Indian Institute of Information Technology Vadodara",
 		"location":"Ghandhinagar",
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
      		$(id).append(replaceData(project.title, HTMLprojectTitle))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
 };
 projects.display();

/*
 var work={
 	"jobs":[
 	{
 		"employer":"lorem ipsum",
 		"title":"lorem  ipsum",
 		"dates":"2015",
 		"description":"sds dd addsf dddddasdd dsdddd sad sd d  ds "
 	}]
 };
 //$("#main").preappend(bio.name);
 

 for(job in work.jobs)
 {
 	$("#workExperience").append(HTMLWorkStart);

 	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
 	var formattedEmployerTitle=formattedEmployer+formattedTitle;
 	$(".work-entry:last").append(formattedEmployerTitle);

 	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);
 	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
 	$(".work-entry:last").append(formattedDescription);
 }

 for(project in projects.projects){
 	$("#projects").append(HTMLprojectStart);

 	var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
 	$(".project-entry:last").append(formattedTitle);
 	var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
 	$(".project-entry:last").append(formattedDates;
 	var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
 	$(".project-entry:last").append(formattedDescription);

 	if(projects.projects[project].images.length > 0)
 	{
 		for(image in projects.projects[project].images)
 		{
 			var fromattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
 			$(".project-entry:last").append(fromattedImage);
 		}
 	}

 }
 */
