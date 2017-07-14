

function createGroup(communityDoamin, body, done) {
    const addUserGroup = `https://discourse.example.com/admin/groups`;
    request
        .post(addUserGroup)
        .send(body) 
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            return done(null, res.body);
        });
}

module.exports = {

}