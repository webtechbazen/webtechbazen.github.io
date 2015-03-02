$(document).ready(function() {
    $("#sitemap li").each(function() {
        if (!$(this).attr("class")) {
            $(this).attr("class", "item");
        }
    });
    $("#sitemap li.expandable").addClass("collapsed");
    $("#sitemap li.expandable").children().hide();
    $("#sitemap li.expandable").click(function(event) {
        event.stopPropagation();
        if ($(this).is(".collapsed")) {
            $(this).children().slideDown();
            $(this).removeClass("collapsed");
            $(this).addClass("expanded");
        } else {
            $(this).children().slideUp();
            $(this).removeClass("expanded");
            $(this).addClass("collapsed");
        }
    });
});