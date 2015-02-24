$(document).ready(function() {
    var navItems = {
        "Home": "index.html",
        "Best Page Ever!!": "standaard.html",
        "Reference": "reference.html",
        "Flickr": "flickr.html"
    };
    $.each(navItems, function(title, href) {
        $("#navlist").append("<li><a href=\"" + href + "\">" + title + "</a></li>");
    });
});