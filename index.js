console.log("bot starting");

var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

// A user stream
var stream = T.stream('user');

// When someone follows the user
stream.on('follow', followed);

// In this callback we can see the name and screen name
function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt('.@' + screenName + ' Thank you for the follow');
  console.log('I was followed by: ' + name + ' ' + screenName);
}
function tweetIt(txt) {
  var tweet = {
    status: txt
  }
  T.post('statuses/update', tweet, tweeted);
  function tweeted(err, data, response) {
    if(err) {
      console.log("didnt work");
    }else {
      console.log("success");
}
}
}

// T.post('statuses/update', { status: 'I am tweeting via the API!' }, tweeted);
// function tweeted(err, data, response) {
//   if(err) {
//     console.log("didnt work");
//   }else {
//     console.log("success");
//   }
// }
