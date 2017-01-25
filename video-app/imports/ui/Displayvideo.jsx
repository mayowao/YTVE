/* From Youtube iFrame API exmple*/
/*Change css? so that is aligned with layout of website when called*/
/*Need to assign changeable components? so that a entire callback? is stored with gives video playing instructions*/

<div id="ytplayer"></div>

<script>
  /* Load the IFrame Player API code asynchronously.*/ 
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  /* Replace the 'ytplayer' element with an <iframe> and */ 
  /* YouTube player after the API code downloads. */
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'M7lc1UVf-VE'
    });
  }
</script>


/*For an IFrame embed, the YouTube video ID for the video that you want to load is specified in the IFrame's src URL.*/

/*https://www.youtube.com/embed/VIDEO_ID*/
/*If you are using the YouTube Data API (v3), you can programmatically construct these URLs by retrieving video IDs from search results, */
/*playlist item resources, video resources, or other resources. */
/*After obtaining a video ID, replace the VIDEO_ID text in the URLs above with that value to create the player URL.*/
