var count = 0;
var match = ["05","09","22","26","27","29","35","62","66","69","35","46","49","85"];

document.getElementById(".popupcardhover").each( function() {
  var costCode = document.getElementById(this).text().substring(0,2);
  if (match.includes(costCode) && document.getElementById(this).text().substring(0,4)!="4982") {
    count++;
  } else if (!isNaN(costCode)) {
    document.getElementById(this).parents(".record").css("display","none");
  }
});

document.getElementById(".brand").text("Science Contracts (" + count + ")");
