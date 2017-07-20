const events={
  actortype:[
          'Application',
'Group',
'Organization',
'Person',
'Service'
  ],
  objecttype:[
      'Article',
'Audio',
'Document',
'Event','Image',
'Note',
'Page','Place',
'Profile',
'Relationship',
'Tombstone','Video'
  ],
  activitytype:[
      'Accept','Add','Announce','Arrive','Block','Create','Delete','Dislike','Flag','Follow','Ignore','Invite','Join'
,'Leave','Like','Listen','Move','Offer','Question','Reject','Read','Remove','TentativeReject','TentativeAccept','Travel',
'Undo',
'Update',
'View',
  ]
  }



function getEvents(done){
    return done(null,events)
}



module.exports=
{
    getEvents,
}