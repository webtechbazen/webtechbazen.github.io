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
    $("#largeImage img").fadeIn(1000);
}

function largeImageClick() {
    $("#largeImage").fadeOut(1000);
    $("#largeImage img").fadeOut(500);
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
            if (json.photos.photo.length == 0) {
                galleryAdd("<p>No results found...</p>");
            } else {
                $.each(json.photos.photo, function(index, photo) {
                    galleryAdd(makeImg(makePhotoUrl(photo), photo.title));
                });
                $("#gallery img").click(imageClick);
            }
        },
        error: function(errormsg) {
            galleryClear();
            galleryAdd("Error:" + errormsg);
        }
    });
}
$(document).ready(function() {
    $("#searchButton").click(searchPhotos);
    $("#flickrForm").submit(function(event) {
        event.preventDefault();
        searchPhotos();
    });
    $("#largeImage").click(largeImageClick);
    $("#searchQuery").val("coral reef");
    searchPhotos();
});