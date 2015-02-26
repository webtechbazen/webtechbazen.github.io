$(document).ready(function() {
    $.plot($.("#g"), [
        [
            [0, 0],
            [1, 1],
            [2, 2]
        ]
    ], lines: {
        show: true,
        fill: true
    });
});