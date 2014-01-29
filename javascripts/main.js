// initialize video.js
var video = videojs('video');

// creating sample thumbnails
var rel_content_1 = document.createElement('div');
var a1 = document.createElement('a');
var p1 = document.createElement('p');
p1.innerHTML = "Video JS Website, For All Your HTML5 Needs.... AND MORE!";
a1.href = "http://www.videojs.com/";
a1.appendChild(p1);
rel_content_1.appendChild(a1);

var rel_content_2 = document.createElement('div');
var a2 = document.createElement('a');
var p2 = document.createElement('p');
p2.innerHTML = "This Man Found a LinkBait LinkBait. You Won't Believe What the LinkBait Did Next!";
a2.href = "http://www.youtube.com/watch?v=6k3--GPk-l4";
a2.appendChild(p2);
rel_content_2.appendChild(a2);

var next_video = document.createElement('div');
var a3 = document.createElement('a');
var p3 = document.createElement('p');
p3.innerHTML = "ABOUT TO GO HERE!!";
a3.href = "http://www.youtube.com/watch?v=KAv500Q6bfA";
a3.appendChild(p3);
next_video.appendChild(a3);

// Asynchronous functions
function getRelatedContent(callback) {
  var list = [];
  list.push(rel_content_1);
  list.push(rel_content_2);

  setTimeout(function(){
    callback(list);
  }, 0);
}

function getNextVid(callback) {
  setTimeout(function(){
    callback(next_video);
  }, 0);
}