## VideoJS End Cards

Simple, customizable end card solution for VideoJS.


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
        callback([el])
    }, 0);
}
var video = videojs('video');
video.endcard({
    getRelatedContent: getRelatedContent
})
</script>
```

Also, `example.html` is a more detailed demo.

## Styling

Check out `videojs.endcard.less` for ideas on how to style the endcard. The default id's are in the options.

## Options

* `getRelatedContent` : Required for display of related content. It must invoke the callback function, the first argument, in order to work.
* `getNextVid` : Required for autoplaying video. It must invoke the callback function, the first argument, in order to work.
* `related` : id for the end card. Default = "player-endcard"
* `related` : id for div containing related content thumbnails. Default = "related-content"
* `next` : id for div containing the thumbnail for the upcoming video. Default = "next-video"
* `count` : number of seconds until the next video. Default = 10
* `counter` : id for the countdown number. Default = "counter"
* `countdown` : id for the div containing the countdown. Default = "countdown"
* `countdown_text` : text displayed for the countdown. Default = "Next video in:"
