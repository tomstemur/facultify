var count = 0;
var match = ["25","03","34","36","37","40","48","38","62","66","69","85"];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,2);
  if (match.includes(costCode)) {
    $(this).parents(".record").css("background-color","LightBlue");
    count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".brand").text("MHS Contracts (" + count + ")");
