import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calvin-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
dummy = [{
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'http://image.tmdb.org/t/p/w300//mBLhvwcILzeyCXmRX30Eogkz7F3.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},
{
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr.',
'poster_path': 'http://image.tmdb.org/t/p/w300//mBLhvwcILzeyCXmRX30Eogkz7F3.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'Beauty and the Beast',
'overview': 'A live-action adaptation of Disneys version of the classicBeauty and the Beast',
'poster_path': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEyUfPSIFSp5Vt75bhjqmF8pO26z7S8Nwv96S8QROx6j7RGzJ-efZ',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'http://image.tmdb.org/t/p/w300//mBLhvwcILzeyCXmRX30Eogkz7F3.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'The Fault in Our Stars',
'overview': 'Despite the tumor-shrinking medical miracle that has bought her a few years, en a patient named Augustus Waters.',
'poster_path': 'http://image.tmdb.org/t/p/w300//sc6XLX6J714LDkVV3Ys3clgypQS.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'App And Activity',
'overview': 'Tap Personal info & privacy Activity controls Web & App Activity. If you turn the switch on, you cadevice is saved.',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',

},

{
'title': 'Laddie',
'overview': 'Profile of the producer and former studio head of 20th Century Fox in the 1970s, Alan Ladd Jr',
'poster_path': 'http://image.tmdb.org/t/p/w300//mBLhvwcILzeyCXmRX30Eogkz7F3.jpg',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'Video Example',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
'poster_path': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEyUfPSIFSp5Vt75bhjqmF8pO26z7S8Nwv96S8QROx6j7RGzJ-efZ',
},

{
'title': 'Beauty and the Beast',
'overview': 'A live-action adaptation of Disneys version of the classicBeauty and the Beast',
'poster_path': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEyUfPSIFSp5Vt75bhjqmF8pO26z7S8Nwv96S8QROx6j7RGzJ-efZ',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
},

{
'title': 'Beauty and the Beast',
'overview': 'A live-action adaptation of Disneys version of the classicBeauty and the Beast',
'poster_path': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEyUfPSIFSp5Vt75bhjqmF8pO26z7S8Nwv96S8QROx6j7RGzJ-efZ',
'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g',
}
];
  constructor() { }

  ngOnInit() {
  }

}
