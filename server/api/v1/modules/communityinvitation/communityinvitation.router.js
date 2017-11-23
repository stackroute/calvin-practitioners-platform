const router = require('express').Router();
const authCtrl = require('../authentication/auth.controller');
const communityMember = require('./../communitymember/community-member.controller');
const config = require('../common/config');

router.get('/recipient/:token', (req, res, next) => {

    const userToken = req.cookies.currentUser;
    console.log('inside router');
    //Is the user logged in or not 
    if (userToken) {
         console.log('already login')
        //If logged in user, user is already a member of calvin
        //Check if the logged in user and the invitee are one and the same, if not same reject the request with a error
        authCtrl.verifyToken(userToken, (err, decoded) => {
            if (err) {
                res.clearCookie(config.cookie.user);
                res.clearCookie(config.cookie.userCommunity);
                res.status(401).json({ error: ' Session Timeout... Please login again' });
                return;
            } else {
                //User logged already
                //Verify invitee and current logged in user are one and the same or not. 
                //It has to be same
                req.user = decoded;
                communityMember.verifyInviteeToken(req.params.token, (err, inviteeDetail) => {
                    if(err) {
                        console.log("Invalid or expired invtee token recieved..!")
                        res.redirect('/#/app/communityinvite/invalid');
                        return;
                    }

                    console.log("Processing invitation for ", inviteeDetail);

                    //Its Valid invitee token
                    console.log('inviteeDetail.domain',inviteeDetail.domain)
                    if(req.user.username === inviteeDetail.invitee) {
                        //current user is the invitee
                        //Take him to the accept/reject page
                        // Community, Role, Who invited
                        res.redirect(`/#/app/communityinvite/invitation/${inviteeDetail.domain}/${inviteeDetail.role}`);
                        //res.redirect(`/api/v1/communityMembers/communityinvite/${inviteeDetail.domain}`);
                        return;
                    } else {
                        console.log("Cross user invitation acceptance handled..!");
                        //invalid invite or cross user invitation 
                        res.redirect('/#/app/communityinvite/invalid');
                        return;
                    }
                });
            }
        });
    } else {
         console.log('inside new user')
        //invitee is not a logged in user, redirect for login
        //Also pass the details of invitation
        res.clearCookie(config.cookie.user);
        res.clearCookie(config.cookie.userCommunity);
        return res.redirect(`/#/login`);
    }
});

module.exports = router;
