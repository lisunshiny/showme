$(function() {
    
    $("button").on("click", function() {
        var value = encodeURIComponent($("input").val());
        var link = makeSrc(value);
        var img = "<img src=" + link + ">";
        
        $(".map-wrapper").html(img);
    });
    
    function makeSrc(center) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + center + "&zoom=10&size=600x300";
    };
})