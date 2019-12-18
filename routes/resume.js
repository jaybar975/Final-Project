var express = require('express');
var router = express.Router();


const resume = {
    "basics": {
      "name": "Justin Aybar",
      "label": "Web Developer/Student",
      "picture": "",
      "email": "justinaybar242253@gmail.com",
      "phone": "(623) 203-4235",
      "website": "#",
      "summary": "",
      "location": {
        "address": "2927 West Wayne Lane",
        "postalCode": "AZ 85086",
        "city": "Anthem",
        "countryCode": "US",
        "region": "Arizona"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "JustinAybar_",
        "url": "http://twitter.com/JustinAybar_"
      }]
    },
    "work": [{
      "company": "Jack in the Box",
      "position": "Cashier/Drive-Thru",
      "website": "https://locations.jackinthebox.com/us/az/anthem/39526-n-gavilan-peak-pkwy",
      "startDate": "July 25th, 2019 ",
      "endDate": "Still Employed",
      "summary": "Description...",
      "company": "Fry's Food Store",
      "position": "Courtesy Clerk",
      "website": "#",
      "startDate": "August, 2018",
      "endDate": "April 21st, 2019",
      "summary": "Description...",
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "website": "http://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description...",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ]
    }],
    "education": [{
      "institution": "Western Maricopa Educational Center",
      "area": "Web Development",
      "studyType": "Certifications/Learn how to Code!",
      "startDate": "August 1st, 2018",
      "endDate": "Still Attending",
      "gpa": "3.0",
      "courses": [
        "C-101-102 and C-201-202 "
      ]
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Student",
      "keywords": [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "ECMA Script 6",
        "AJAX",
        "Node.js",
        "Mongo",
        "REACT"
      ]
    }],
    "languages": [{
      "language": "English",
      "fluency": "Native speaker"
    }],
    "interests": [{
      "name": "Basketball",
      "keywords": [
        "National Basketball Association",
        "College Basketball"
      ]
    }],
    "references": [{
      "name": "",
      "reference": "Reference..."
    }]
  };


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume', 
    { 
      title: 'Resume',
      name: resume.basics.name,
      data: resume
    }
  );
});

module.exports = router;
