var count = 0;
var match = ["21","24","01","11","12","14","15","16","18","19","28","31","62","66","69","Fa","Sc"];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,2);
  if (match.includes(costCode)) {
    $(this).parents(".record").css("background-color","LightBlue");
    count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".brand").text("Arts and Social Sci Contracts (" + count + ")");
