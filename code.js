$( document ).ready(function() {
    $(".button").on("click", function() {
        var value = encodeURIComponent($("input").val()); // encodeURIComponent lets input with spaces, e.g. "new york", work.
        function makeSrc(center) {
            return "https://maps.googleapis.com/maps/api/staticmap?center=" + center + "&zoom=10&size=600x300";
        }
        var center = $("input").val();
        var link=makeSrc(center);

        var img="<img src="+'"'+link+"\"/>";

        $(".map").html(img);
        
    });
    
    function makeSrc(center){
        return "i am a beautiful " + center + " teapot!";
    }
});
