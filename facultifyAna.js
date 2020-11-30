var count = 0;
var match = ["25","03","36","37","40","45","48","38","62","66","69"];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,2);
  if (match.includes(costCode)) {
     count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".brand").text("MHS + Eng Contracts (" + count + ")");