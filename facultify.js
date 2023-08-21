var count = 0;
var match = ["05*","09*","22*","26*","27*","29*","35*","62*","66*","69*","35*","46*","4981*","85*"];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,5);
  if (match.includes(costCode) && $(this).text().substring(0,4)!="4982") {
    count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".brand").text("Science Contracts (" + count + ")");
