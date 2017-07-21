const activities = [
    {
        '@context': 'https://www.w3.org/ns/activitystreams',
        id: '5c1b474a-ee1b-4e62-8749-6f91114245d8',
        type: 'Create',
        name: 'Discussion on standard learning environments',
        actor:
        {
            type: 'Link',
            name: 'calvin',
            href: '',
            mediaType: 'image/svg+xml'
        },
        object:
        {
            type: 'Article',
            name: 'Discussion on standard learning environments',
            href: '',
            mediaType: 'image/svg+xml'
        },
        target:
        {
            type: 'Group',
            name: 'rd.burman.fans',
            content: '',
            url: 'http://calvin-pages.stackroute.in/#/app/communityDashboard/${domainName}'
        },
        context:
        {
            type: 'Link',
            name: 'discourse',
            href: 'http://discourse.calvin.stackroute.in/',
            mediaType: 'image/svg+xml'
        }
    }
]

// get all the activities according to member Name
 function getMemberActivities(done) {   
   return done(null, activities);
 }

module.exports = { getMemberActivities };