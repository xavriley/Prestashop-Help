/* Author: http://jplayer.org/ */
$(document).ready(function(){
 $("#jquery_jplayer_1").jPlayer({
 ready: function () {
 $(this).jPlayer("setMedia", {
 mp3: "/media/mysound.mp4",
 oga: "/media/mysound.ogg"
 });
 },
 swfPath: "/js/mylibs/",
 supplied: "mp3"
 });
 });

