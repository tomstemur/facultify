var count = 0;
var match = ["25","03","34","36","37","40","48","38","62","66","69","85"];
var list = [
"Centre for Health Informatics",
"Health Sciences Dept",
"Injury, Recovery and Inflammational Sciences",
"Life Sciences",
"Life Sciences Dept",
"Life Span and Population Health",
"Medicine",
"Medicine and Health Sciences",
"Medicine and Health Sciences Central Dept",
"Medicine Central",
"Mental Health and Clinical Neurosciences",
"Nottingham Clinical Trials Unit",
"PRIMIS",
"Translational Medical Sciences",
"Veterinary Medicine and Science Dept",
"Digital Research Service Central",
"Global Engagement Support",
"Governance and Executive Support",
"Knowledge Exchange and Business Engagement",
"Reearch Operations",
"Research and Innovation Central",
"Research and Innovation Strategy",
"Vice Chancellor's Office Central Dept",
"Education Centre",
"Digital Research Service"
];

$(".popupcardhover").each( function() {
  var costCode = $(this).text().substring(0,2);
  var newCode = $(this).text();
  if (match.includes(costCode) || list.includes(newCode)) {
    $(this).parents(".record").css("background-color","rgb(0, 0, 1)");
    count++;
  } else if (!isNaN(costCode)) {
    $(this).parents(".record").css("display","none");
  }
});

$(".record").each( function() {
  if ($(this).css("background-color")=="rgb(0, 0, 1)") {
    console.log($(this).css("background-color"));
  } else {
    $(this).css("display","none");
  }
  });

$(".brand").text("MHS Contracts (" + count + ")");
