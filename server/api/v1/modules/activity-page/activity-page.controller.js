const memberControler = require('../members/members.controller');

const arr = {
  Tools: [
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'sports.cricket.sachin.fans',
        name: 'Fans of Sachin - God of cricket',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyCYituHy0U24-UskCeehz5aW_0X0kAHxBAsJkBzsB2acaLIC',
        visibility: ' Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'Himani',
        name: 'Nitin Joshi',
        avatar: 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'Quora',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: ' http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'Nitin posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'Nitin asked what is the use of becoming fullstack programmer',
        actions: [
          {
            buttons: 'Answer',
            link: 'http://cdn.deccanchronicle.com/sites/default/files/mediaimages/gallery/2013/Nov/sachinbanner.jpg',
          },
        ],
        embeds: [
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer',
            title: 'How to be a fullstack programmer',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'Engineering.programmers.bangalore',
        name: 'Programmers in bangalore',
        avatar: 'http://www.improgrammer.net/wp-content/uploads/2014/08/article.jpg',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'Nelanjan',
        name: 'Rajeshwari',
        avatar: 'http://shaebaxter.com/wp-content/uploads/2012/07/is-your-web-copy-boring.jpg',
      },
      tool: {
        toolid: 'discussions.yammer',
        name: 'Yammer',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://yammer.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'rajeshwari posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'rajeshwari asked something about actitylogs',
        actions: [
          {
            buttons: 'Answer',
            link: 'http://www.improgrammer.net/wp-content/uploads/2014/08/article.jpg',
          },
        ],
        embeds: [
          {
            link: 'https://imasters.com/wp-content/uploads/sites/24/2016/09/9_computer-programmer.jpg',
            title: 'How to use activity cards in activity page?',

          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'Programmers community',
        name: 'wipro-programmers',
        avatar: 'http://freedomainavatar.com/wp-content/uploads/2016/04/4-300x206.jpg',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'geethanehru@gmail.com',
        name: 'Geetha Nehru',
        avatar: 'https://s-media-cache-ak0.pinimg.com/736x/f1/8b/0e/f18b0e857944883c889e63561cb26abb.jpg',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'Quora',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'geetha posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'geetha asked how to use patch method',
        actions: [
          {
            buttons: 'Answer',
            link: 'https://imasters.com/wp-content/uploads/sites/24/2016/09/9_computer-programmer.jpg',
          },
        ],
        embeds: [
          {
            link: 'https://imasters.com/wp-content/uploads/sites/24/2016/09/9_computer-programmer.jpg',
            title: 'how to use patch method',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'Teacher community',
        name: 'Students-teachers association',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AilWmWZDZY9iKbVUVzpO5fAT9Gyssrg3sOTVA7nz8xtwDliV',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'saransri95@gmail.com',
        name: 'saranya babu',
        avatar: 'https://cdn.vox-cdn.com/thumbor/x58bYtjAuglgOnzp2sRV7QEyBa0=/3x0:1591x893/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55248791/xboxliveavatarsnew.0.png',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'github',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'saranya posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'saranya asked how to compare string value with json objects',
        actions: [
          {
            buttons: 'Answer',
            link: 'http://www.outlookindia.com/public/uploads/newsimages/teachers_saris20151006.jpg',
          },
        ],
        embeds: [
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer',
            title: 'how to compare string value with json objects',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'stock market',
        name: 'Stock-market in India',
        avatar: 'https://www.verisign.com/en_US/resources/img/domains_grow-portfolio.jpg',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'renukanrj@gmail.com',
        name: 'renuka nagaraj',
        avatar: 'http://nick.mtvnimages.com/nick/video/images/avatar/avatar-206-full-episode-16x9.jpg',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'stock-market',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'Renuka posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'Renuka asked what is registered share',
        actions: [
          {
            buttons: 'Answer',
            link: 'http://static-news.moneycontrol.com/static-mcnews/2017/03/stocks_BSE_Nifty_Sensex__stocks_stock_market_1280-378x213.jpg',
          },
        ],
        embeds: [
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer',
            title: 'What is registered share?',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'cricket club',
        name: 'Fans of Sachin - God of cricket',
        avatar: 'http://nakulsoft.com/wp-content/uploads/2015/05/domainname1.jpg',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'nitin_godfather3423@gmail.com',
        name: 'Nitin Joshi',
        avatar: 'http://www.buddypoke.com/img/mytalkingavatar.png',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'Quora',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'Nitin posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'Nitin asked what is the use of becoming fullstack programmer',
        actions: [
          {
            buttons: 'Answer',
            link: 'https://www.globalcricketcommunity.com/images/Rohit-Mahadik-Graphics/Sri-Cricket-Club/Sri-Cricket-Club-GCC.png',
          },
        ],
        embeds: [
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer',
            title: 'How to be a fullstack programmer',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
    {
      activityEventId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      community: {
        domain: 'Actors',
        name: 'Fans of Sachin - God of cricket',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Aspire_Academy_Logo_White.png',
        visibility: 'Public',
        url: 'http://calvin.com/community/sports.cricket.sachin.fans',
      },
      member: {
        username: 'nitin_godfather3423@gmail.com',
        name: 'Nitin Joshi',
        avatar: 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png',
      },
      tool: {
        toolid: 'discussions.quora',
        name: 'Quora',
        avatar: 'https://cdn3.iconfinder.com/data/icons/ultimate-social/150/36_quora-256.png',
        baseurl: 'http://quora.com',
      },
      activity: {
        eventType: 'new_question',
        actionUrl: 'https://www.quora.com/',
      },
      message: {
        text: 'Nitin posted a [what is the use of becoming fullstack programmer](http://quora.com/nitin_godfather3423/qs/3ioewksd)',
        title: 'Nitin asked what is the use of becoming fullstack programmer',
        actions: [
          {
            buttons: 'Answer',
            link: 'http://www.gilmorenews.com/uploads/2016/02/Gilmore-Girls-Revival-Actors-15th.jpg',
          },
        ],
        embeds: [
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer',
            title: 'How to be a fullstack programmer',
          },
          {
            link: 'http://dzone.com/howto-be-a-fullstackprogrammer.jpg',
          },
        ],
      },
    },
  ],
};

const tempStorage = { 
  'memberDetails':[]
}

function retrieveAllPosters(req, res) {
  retrieveMemberDetails();
  res.json(arr);
}

function retrieveMemberDetails (){
  let i = 0;
  while(i < arr.Tools.length){
    memberControler.getMembersDetails(arr.Tools[i].member.username, (err, res) => {
      if(res){
        tempStorage['memberDetails'].push(res)
      }
    });
    i++;
  }
  console.log(tempStorage)
}

module.exports =
{
  retrieveAllPosters,
  retrieveMemberDetails,
};