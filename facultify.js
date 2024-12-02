var count = 0;
var match = ["05","09","22","26","27","29","35","62","66","69","35","46","49","85"];
var list = [
"Agricultural and Environmental Sciences",
"Animal Sciences",
"Biosciences Central",
"Food, Nutrition and Dietetics",
"Microbiology, Brewing and Biotechnology",
"Plant and Crop Sciences",
"Chemistry",
"Computer Science Dept",
"Horizon",
"Mathematical Sciences Dept",
"Pharmacy Dept",
"Physics and Astronomy Dept",
"Psychology Dept",
"Science Central Dept",
"Digital Research Service Central",
"Global Engagement Support",
"Governance and Executive Support",
"Knowledge Exchange and Business Engagement",
"Reearch Operations",
"Research and Innovation Central",
"Research and Innovation Strategy",
"Vice Chancellor's Office Central Dept",
"Nanoscale and Microscale Research Centre"
];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,2);
  var newCode = $(this).text();
  if (match.includes(costCode) || list.includes(newCode)) {
    $(this).parents(".record").css("background-color","LightGreen");
    count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".record").each( function() {
  if ($(this).css("background-color")=="rgb(144, 238, 144)") {
    console.log($(this).css("background-color"));
  } else {
    $(this).css("display","none");
  });

$(".brand").text("Science Contracts (" + count + ")");
