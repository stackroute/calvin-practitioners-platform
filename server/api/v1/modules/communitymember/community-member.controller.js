const request = require('superagent');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';
const communityServices = require('./community-member.service');
const async = require('async');
const jwt = require('jsonwebtoken');
const config = require('../common/config');
const path = require('path');
const url = require('url');
const nodemailer = require('nodemailer');

function getCommunityMembers(domain, callback) {
    // Call communities service to get all the templates
    const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
    request.get(url)
    .end((err, res) => {
        if (err) {
            //   console.log('Error in API to get community templates, error: ', err);
            return callback(err);
        }
        return callback(null, res.body);
    });
}


const cartoons = {
    Members:
    [
    {
        username: 'Aravindh',
        domain: 'Wipro',
        role: 'Digital-Developer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Keerthi',
        domain: 'ewewewe',
        role: 'Digital-Developer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Aswini',
        domain: 'ewewe',
        role: 'Digital-Developer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Suresh',
        domain: 'Wipro',
        role: 'Digital-Developer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Ashok',
        domain: 'Wipro',
        role: 'Digital-Developer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Karthikeyan',
        domain: 'Wipro',
        role: 'Digital-Manager',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'AnithaJaganathan',
        domain: 'Wipro',
        role: 'Digital-Retainer',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Basavaraj',
        domain: 'Wipro',
        role: 'Digital-Mentor',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Sagaar',
        domain: 'Wipro',
        role: 'Digital-Mentor',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Nelanjan',
        domain: 'Wipro',
        role: 'Digital-Mentor',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
        username: 'Himani',
        domain: 'Wipro',
        role: 'Digital-Mentor',
        photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    ],
};


function getMembers(member, done) {
    return done(null, cartoons);
}

function getMembersDetails(member, done) {
    let i = 0;
    while (i < cartoons.Members.length) {
        if (member === cartoons.Members[i].username) {
            const decoratedMember = {
                username: cartoons.Members[i].username,
                name: cartoons.Members[i].domain,
                avatar: cartoons.Members[i].photo,
            };
            return done(null, decoratedMember);
        }
        i++;
    }
    return done('Username not present', null);
}
function postMember(domain, inviteBody, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
  request
  .post(url)
  .send(inviteBody)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}

function verifyInviteeToken(inviteetoken, done) {
    jwt.verify(inviteetoken, config.appConstants.secret, (err, decodedData) => {
        if (err) {
            return done(err);
        }
        return done(null, decodedData);
    });
}

function postMemberInvite(url, domain, type, inviteBody, done) {
    communityServices.memberInvitation(domain, type, inviteBody, (err, res) => {
        if (err) {
            return done(err);
        }
        
        if (res.message === 'Inserted') {
            inviteBody.invitee.forEach((data) => {
                // console.log("invitation", data);
                let payload = {
                    domain: domain,
                    invitee: data.email,
                    role: data.role
                }
                const token = generateToken(payload)
                const link = generateLink(token);
                sendInvitationMail(data, link, done);
            }, this);
            
            function generateToken(payload) {
                return jwt.sign(payload, config.appConstants.secret, { expiresIn: config.appConstants.expiryTime });  
                           
            }
            

            function generateLink(token){
                return `https://calvin-pages.stackroute.in/api/v1/invite/recipient/${token}`;
            }
            
            function sendInvitationMail(data, link, callback) {      
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true, // secure:true for port 465, secure:false for port 587
                    auth: {
                        user: 'thecalvinapp',
                        pass: 'June@2017'
                    }
                });
                
                // setup email data with unicode symbols
                let mailOptions = {
                    from: 'thecalvinapp@gmail.com', // sender address
                    to: data.email, // list of receivers
                    subject: 'Hello from calvin app and tool', // Subject line
                    text: 'You are invited to calvin community', // plain text body
                    html: `<b>Please join calvin by clicking on this link </b>${link}`
                };
                
                transporter.verify(function(error, success) {
                    if (error) {
                        // console.log("Error in verifyication of mail transporter ", error);
                        callback(error);
                        return
                    } else {
                        // console.log('Server is ready to take our messages');
                        // send mail with defined transport object
                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                // console.log("Error in sending invitaiton mail ", error);
                                callback(error.Error);
                                return;
                            }
                            // console.log('Message %s sent', info.messageId);
                            callback(null, info);
                            return;
                        });
                    }
                    
                });
            }
        }
    });
}

function deleteMember(domain, data, callback) {
    const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
    request.delete(url)
    .send(data)
    .end((err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.body);
    });
}
function updateMember(domain,person,role,done) {
   async.waterfall([
       acceptMembership.bind(null,domain,person),
       addNewMember.bind(null, domain, person, role)
   ], (err, res) => {
   })
}

function acceptMembership(domain,person,done) {
   // Call communities service to get all the templates
   console.log("Inside controller")
  const url = `${BASE_COMMUNITY_SERVICE_URL}/memberrequests/invite/${domain}/person/${person}`;
  request
 .patch(url) // query string
 .end((err, res) => {
   if (err) {
      done(err);
   }
    done(null, res);
 });
}

function addNewMember(domain, person, role, res, done) {
  let inviteArr=[];
  inviteArr.push({"role": role,"username": person});
  console.log("inviteArr",inviteArr);

  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
  
  request
  .post(url)
  .send(inviteArr)
  .end((err, res) => {
    if (err) {
    //   console.log("error in adding new members ", err);
      return done(err);      
    }
    return done(null, res.body);
  });
  
}
function deleteRequest(domain, person, callback) {
    const url = `${BASE_COMMUNITY_SERVICE_URL}/memberrequests/${domain}/person/${person}`;
    request.delete(url)
    .send(data)
    .end((err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.body);
    });
}

module.exports = {
    verifyInviteeToken,
    getMembers,
    getMembersDetails,
    postMemberInvite,
    getCommunityMembers,
    deleteMember,
    postMember,
    updateMember,
    deleteRequest
};

