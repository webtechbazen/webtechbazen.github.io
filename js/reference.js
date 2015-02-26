function referenceAdd(refId, url) {
    $("#references").append("<li><a class=\"reference\" href=\"#" + refId + "\"><b>^</b></a> <a class=\"external\" href=\"" + url + "\">" + url + "</a></li>");
}
$(document).ready(function() {
    var refCount = 1;
    $("#content a").each(function() {
        var href = $(this).attr("href");
        if (href.charAt(0) != '#') {
            var refId = "ref-" + refCount++;
            $(this).prop("id", refId);
            referenceAdd(refId, href, $(this).text());
        }
    });
});