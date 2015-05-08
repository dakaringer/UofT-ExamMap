function populate (year, tt) {
    $.getJSON("/timetable/" + tt + ".json", function(json) {
        var r = new Array();
        var j = -1;
        $.each(json, function(key, val) {
            r[++j] = '<tr class="exam">';
            var x = "";
            if (val.section != "*EXAM CANCELLED*") {
                if (val.examDate.split(" ")[2] == "APR") {
                    var m = 04;
                }
                else {
                    var m = 12;
                }
                var d = val.examDate.split(" ")[1];
                var add = 12;
                if (val.examTime.split(" ")[0] == "AM"){
                    add = 0;
                }
                var t1 = parseInt(val.examTime.split(" ")[1]) + add;
                var t2 = parseInt(val.examTime.split(" ")[3]) + add;

                url = "?utz=-240&uln=en-US&vjs=1.5&e[0][date_start]="+encodeURIComponent(year +"-"+m+"-"+d+" "+t1+":00:00") +"&e[0][date_end]="+encodeURIComponent(year +"-"+m+"-"+d+" "+t2+":00:00")+"&e[0][timezone]="+ encodeURIComponent("America/Toronto")+"&e[0][title]="+ encodeURIComponent(val.course +" Exam")+"&e[0][description]="+  encodeURIComponent(val.course +" Exam")+"&e[0][location]="+ encodeURIComponent(val.location);
                x = "<span class=\"addtocalendar atc-style-menu-wb\">" +
                    "<a class=\"atcb-link\" tabindex=\"1\">Add to Calendar</a>" +
                    "<ul class=\"atcb-list\">" +
                        "<li class=\"atcb-item\"><a class=\"atcb-item-link\" href=\"http://addtocalendar.com/atc/ical"+url+"\" target=\"_blank\">iCalendar</a></li>" +
                        "<li class=\"atcb-item\"><a class=\"atcb-item-link\" href=\"http://addtocalendar.com/atc/google"+url+"\" target=\"_blank\">Google Calendar</a></li>" +
                    "</ul>" +
                    "</span>";
            }
            r[++j] = '<td class="course">'+val.course+'</td>';
            if (val.section) {
                if (val.section != "*EXAM CANCELLED*") {
                    r[++j] = '<td class="section">'+val.section+'</td>';
                }
                else {
                    r[++j] = '<td class="section"><b>EXAM CANCELLED</b></td>';
                }
            }
            else {
                r[++j] = '<td></td>';
            }
            r[++j] = '<td class="date">'+val.examDate+'</td>';
            r[++j] = '<td class="time">'+val.examTime+'</td>';
            r[++j] = '<td class="location">'+val.location+'</td>';
            r[++j] = '<td class="cal">'+x+'</td>';
            r[++j] = '</tr>';
        })
        $('.list').html(r.join(''));
        $(".m1").css("width", $(".course").width() + 10);
        $(".m2").css("width", $(".section").width() + 10);
        $(".m3").css("width", $(".date").width() + 10);
        $(".m4").css("width", $(".time").width() + 10);
        $(".m5").css("width", $(".location").width() + 10);
        $(".m6").css("width", $(".cal").width() + 10);
    });
}


$(".canvas").click(function () {
    "use strict";
    $(".navbar-toggle").blur();
});


$(window).resize(function() { 
    $(".m1").css("width", $(".course").width() + 10);
    $(".m2").css("width", $(".section").width() + 10);
    $(".m3").css("width", $(".date").width() + 10);
    $(".m4").css("width", $(".time").width() + 10);
    $(".m5").css("width", $(".location").width() + 10);
    $(".m6").css("width", $(".cal").width() + 10);
});

var toggle = false;
$(document).on('click', function(e) {
    if ( $(e.target).closest('.navbar-toggle').length ) {
        if (toggle) {
            $(".navmenu-fixed-left").animate({left: "-300px"});
            toggle = false;
        }
        else {
            $(".navmenu-fixed-left").animate({left: "0px"});
            toggle = true;
        }
    }else if ( ! $(e.target).closest('.navmenu').length ) {
        $(".navmenu-fixed-left").animate({left: "-300px"});
        toggle = false;
    }
});