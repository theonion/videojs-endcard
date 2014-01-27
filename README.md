## VideoJS End Cards

Simple, customizable end card solution for VideoJS.



This plugin adds an end card container, which shows/hides based on the VideoJS's `playing` and `ended` events. By implementing the `getRelatedContent` function, it can display thumbnails for content your users might be interested in, and you can implement the `getNextVid` function to drive your users to a page after `x` amount of seconds.

The plugin is unopiniated on what kind of markup your thumbnails have - it just takes whatever you give it and appends it to the corresponding container div.

Fork the repo and take a look!

## Example
```js
<script src="http://vjs.zencdn.net/4.0/video.js"></script>
<script src='videojs.endcard.js'></script>
<script>
// Sync or Async, you decide.
function getRelatedContent(callback) {
    var el = document.createElement('p');
    el.innerHTML = "So Cool You'll HAVE to Click This!"
    setTimeout(function(){
        // Needs an array
        callback([el])
    }, 0);
}

function getNextVid(callback) {
    var anchor = document.createElement('a');
    anchor.innerHTML = "Users will be taken to the VideoJS website after 10 seconds!"
    anchor.href = "http://www.videojs.com/"
    setTimeout(function(){
        callback(anchor)
    }, 0);
}

var video = videojs('video');
video.endcard({
    getRelatedContent: getRelatedContent,
    getNextVid: getNextVid
})
</script>
```

Also, `example.html` is a more detailed demo.


## Styling

Check out `videojs.endcard.less` for ideas on how to style the endcard. The default id's are in the options.


## Options

* `getRelatedContent` : **Required** for display of related content. It must invoke the callback function, which takes an **array of DOM Elements** and appends them to the "related-content" container.
* `getNextVid` : **Required** for autoplaying video. It must invoke the callback function, which takes a **single DOM Element** and appends it to the "next-video" container. When the countdown ends, the user is taken to the **first** anchor href that is found in the DOM Element passed to the callback function.
* `endcard` : id for the end card. Default = "player-endcard"
* `related` : id for div containing related content thumbnails. Default = "related-content"
* `next` : id for div containing the thumbnail for the upcoming video. Default = "next-video"
* `count` : number of seconds until the next video. Default = 10
* `counter` : id for the countdown number. Default = "counter"
* `countdown` : id for the div containing the countdown. Default = "countdown"
* `countdown_text` : text displayed for the countdown. Default = "Next video in:"
