const express = require('express');
const router = express.Router();
const fs = require('fs');
const db = require('./community.json');
const path = require('path');

lsitItem = [ 
  {
    "CommunityName": "pakistan",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  },
  {
    "CommunityName": "countriew",
    "DomainName": "ARB.1",
    "CommunityUrl": "http://lorempixel.com/200/200/"
  }
];
function getAllUserCommunities(req, res) {

      // fs.readFile(path.resolve(__dirname, "./community.json"), 'utf-8', (err, data) => {
      //   if (err){ throw err };
      //   res.send(data);
      // });

    
      res.send((lsitItem))
  }


module.exports = { getAllUserCommunities };
