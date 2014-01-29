// Sync or Async, you decide.
function getRelatedContent(callback) {
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.innerHTML = "So Cool You'll HAVE to Click This!";
    div.appendChild(p);
    setTimeout(function(){
        // Needs an array
        callback([div]);
    }, 0);
}

function getNextVid(callback) {
    var div = document.createElement('div');
    var anchor = document.createElement('a');
    anchor.innerHTML = "Users will be taken to the VideoJS website after 10 seconds!"
    anchor.href = "http://www.videojs.com/"
    div.appendChild(anchor)
    setTimeout(function(){
        callback(div);
    }, 0);
}

var video = videojs('video');
video.endcard({
    getRelatedContent: getRelatedContent,
    getNextVid: getNextVid    //uncomment this for auto-playing video
})