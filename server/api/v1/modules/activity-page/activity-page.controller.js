const arr = {
  "Tools":[{
'contentType':'image',   
'title': 'teach',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'http://medicorerecruiting.com/uploads/images/doctors-home.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},
{
'contentType':'video',  
'title': 'jerry',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr.',
'poster_path': 'http://ecx.images-amazon.com/images/I/51qNA-UwmIL._SX258_BO1,204,203,200_.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'contentType':'link',
'title': 'harry',
'overview': 'A live-action adaptation of Disneys version of the classicBeauty and the Beast',
'poster_path': 'http://healthypractice.in/wp-content/uploads/2017/05/doctors-community.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
  'contentType':'markdown',
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'https://blog.equinix.com/wp-content/uploads/2015/07/Graph2-7-6.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
  'contentType':'text',
'title': 'The Fault in Our Stars',
'overview': 'Despite the tumor-shrinking medical miracle that has bought her a few years, en a patient named Augustus Waters.',
'poster_path': 'http://ecx.images-amazon.com/images/I/51qNA-UwmIL._SX258_BO1,204,203,200_.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
  'contentType':'image',
'title': 'App And Activity',
'overview': 'Tap Personal info & privacy Activity controls Web & App Activity. If you turn the switch on, you cadevice is saved.',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',

},

{
'contentType':'image',
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRws7mQDNmWo81XBKAgJvSrBCyjBP6ZFCuSx9RfG5QM-cXw1xom',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'contentType':'image',
'title': 'Video Example',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
'poster_path': 'https://qph.ec.quoracdn.net/main-qimg-7c60ce68379e79e2f379783d460e0323',
}
]
 }
function retrieveAllPosters(req,res){
 
    
    res.json(arr);
    
 };


module.exports=
{
 retrieveAllPosters:retrieveAllPosters
};