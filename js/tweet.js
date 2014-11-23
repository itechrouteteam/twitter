$( document ).ready(function() {
   $('#tweetpost').on('click',function(){
       tweet=$('#tweettext').val();
       $div="<div style=\"margin: 5%\">"+tweet+"</div>";
       $('#tweetwall').prepend($div);
   });
});