$( document ).ready(function() {
    console.log( "ready!" );
    $(".button").on("click", function() {
        console.log("hi");
        var value = encodeURIComponent($("input").val()); // encodeURIComponent lets input with spaces, e.g. "new york", work.
        function makeSrc(center) {
            return "https://maps.googleapis.com/maps/api/staticmap?center=" + center + "&zoom=10&size=600x300";
        }
        var link=makeSrc(center);
    
        var img="<img src="+link+">";
    
        $(".map").append(img);
        
    });
    
    function makeSrc(center){
        return "i am a beautiful " + center + " teapot!";
    }
});
