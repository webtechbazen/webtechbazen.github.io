$(document).ready(function() {
    var datasets = {
        "google": {
            label: "Google",
            data: [
                [1, 103],
                [2, 74],
                [3, 118],
                [4, 190],
                [5, 86],
                [6, 127],
                [7, 60],
                [8, 180],
                [9, 145],
                [10, 146]
            ]
        },
        "yahoo": {
            label: "Yahoo",
            data: [
                [1, 97],
                [2, 95],
                [3, 78],
                [4, 134],
                [5, 121],
                [6, 91],
                [7, 126],
                [8, 145],
                [9, 133],
                [10, 118]
            ]
        },
        "msn live": {
            label: "MSN Live",
            data: [
                [1, 54],
                [2, 102],
                [3, 78],
                [4, 59],
                [5, 122],
                [6, 79],
                [7, 76],
                [8, 100],
                [9, 128],
                [10, 88]
            ]
        },
        "ask": {
            label: "Ask",
            data: [
                [1, 98],
                [2, 99],
                [3, 81],
                [4, 94],
                [5, 63],
                [6, 112],
                [7, 105],
                [8, 82],
                [9, 43],
                [10, 89]
            ]
        }
    };
    // hard-code color indices to prevent them from shifting as
    // countries are turned on/off
    var i = 0;
    $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
    });
    // insert checkboxes 
    var choiceContainer = $("#flot-choices");
    $.each(datasets, function(key, val) {
        choiceContainer.append("<br/><input type='checkbox' name='" + key + "' checked='checked' id='id" + key + "'></input>" + "<label for='id" + key + "'>" + val.label + "</label>");
    });
    choiceContainer.find("input").click(plotAccordingToChoices);

    function plotAccordingToChoices() {
        var data = [];
        choiceContainer.find("input:checked").each(function() {
            var key = $(this).attr("name");
            if (key && datasets[key]) {
                data.push(datasets[key]);
            }
        });
        if (data.length > 0) {
            $.plot("#flot-graph", data, {
                yaxis: {
                    min: 0
                },
                xaxis: {
                    tickDecimals: 0
                }
            });
        }
    }
    plotAccordingToChoices();
});