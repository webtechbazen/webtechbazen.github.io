$(document).ready(function() {
    var navItems = {
        "Home": "index.html",
        "Best Page Ever!!": "standaard.html",
        "Reference": "reference.html",
        "Flickr": "flickr.html"
    };
    var curPath = $(location).attr("pathname");
    $.each(navItems, function(title, href) {
        if (curPath.match(new RegExp(href + "$"))) {
            $("#navlist").append("<li class=\"nolink\">" + title + "</li>");
        } else {
            $("#navlist").append("<li><a href=\"" + href + "\">" + title + "</a></li>");
        }
    });
});
$(window).scroll(function() {
    var top = $(window).scrollTop();
    var fadePos = $(".navigation").position().top;
    var opacity = top < fadePos ? 1 - (top / fadePos) : 0;
    $(".title").stop(true, true).fadeTo(0, opacity);
});