$(document).ready(function() {
    var navItems = {
        "Home": "index.html",
        "Best Page Ever!!": "standaard.html",
        "Reference": "reference.html",
        "Flickr": "flickr.html"
    };
    var curPath = $(location).attr("pathname");
    $.each(navItems, function(title, href) {
        if (!curPath.match(new RegExp(href + "$"))) {
            $("#navlist").append("<li><a href=\"" + href + "\">" + title + "</a></li>");
        } else {
            $("#navlist").append("<li class=\"nolink\">" + title + "</li>");
        }
    });
});