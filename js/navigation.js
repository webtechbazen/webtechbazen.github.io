$(document).ready(function() {
    var navItems = {
        "Home": "index.html",
        "Standardisation": "standard.html",
        "Correct HTML": "correct.html",
        "Parsing": "parsing.html",
        "Flickr": "flickr.html",
        "Flot": "flot.html",
        "Sitemap": "sitemap.html"
    };
    var curPath = $(location).attr("pathname");
    $.each(navItems, function(title, href) {
        if ((href == "index.html" && curPath.match(new RegExp("/$"))) || curPath.match(new RegExp(href + "$"))) {
            $("#navlist").append("<li class=\"nolink\">" + title + "</li>");
        } else {
            $("#navlist").append("<li><a href=\"" + href + "\">" + title + "</a></li>");
        }
    });
});
$(window).scroll(function() {
    var top = $(window).scrollTop() - 50;
    var fadePos = $("#navigation").position().top + $("#navigation").outerHeight(true) / 2;
    var opacity = top < fadePos ? 1 - (top / (fadePos - 44)) : 0;
    $("#title").stop(true, true).fadeTo(0, opacity);
});