function galleryAdd(content) {
    $("#gallery").append("<li>" + content + "</li>");
}

function galleryClear() {
    $("#gallery").empty();
}

function makePhotoUrl(photo) {
    return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
}

function makeImg(src, alt) {
    return "<img src=\"" + src + "\" alt=\"" + alt + "\" width=\"200\" height=\"200\">";
}

function imageClick() {
    $("#largeImage").html("<img src=\"" + $(this).attr("src") + "\" alt=\"" + $(this).attr("alt") + "\">");
    $("#largeImage").fadeIn(800);
}

function largeImageClick() {
    $("#largeImage").fadeOut(800);
}

function searchPhotos() {
    $.ajax({
        url: "https://api.flickr.com/services/rest",
        jsonpCallback: "jsonFlickrApi",
        dataType: "jsonp",
        data: {
            api_key: "fb89457280d11f1976477658e52fb9ea",
            method: "flickr.photos.search",
            format: "json",
            sort: "interestingness-desc",
            text: $("#searchQuery").val()
        },
        success: function(json) {
            galleryClear();
            var id = 0;
            $.each(json.photos.photo, function(index, photo) {
                galleryAdd(makeImg(makePhotoUrl(photo), photo.title));
            });
            $("#gallery img").click(imageClick);
        },
        error: function(errormsg) {
            galleryClear();
            galleryAdd("Error:" + errormsg);
        }
    });
}
$(document).ready(function() {
    $("#searchButton").click(searchPhotos);
    $("#largeImage").click(largeImageClick);
    $("#searchQuery").val("coral reef");
    searchPhotos();
});