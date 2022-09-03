$("h1").addClass("big-title margin-50");
$("button").text("<em>Hey</em>");
$("button").click(function() {
    $("h1").css("color", "green");
});
$(document).keypress(function(e) {
    $("h1").text(e.key);
    console.log(e.key);
    }
);