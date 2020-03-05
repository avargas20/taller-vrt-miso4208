function randomPalette(){
  var colors = [];

  for(var i=0; i<5;i++){
    color = Math.floor(Math.random() * 360)/360;
    rgb = hslToRgb(color,0.8,0.5);
    console.log(rgb)
    colors.push("#"+rgbToHex(Math.floor(rgb[0]))+rgbToHex(Math.floor(rgb[1]))+rgbToHex(Math.floor(rgb[2])));
  }

  setColors(colors);
  generateRules(colors);
}

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function setColors(colors){
  var element = document.querySelectorAll(".color-view");
   
    for(var i=0; i<element.length;i++){
      element[i].style.backgroundColor = colors[i];
    }
}

function generateRules(colors){
  var rules =".website-background{ color: "+colors[0]+";} \n"+
             ".element-text{ color: "+colors[1]+";}\n"+
             ".element-border{ border-color: "+colors[2]+";}\n"+
             ".element-background{ background-color: "+colors[3]+";}\n"+
             ".header{ color: "+colors[4]+";}\n";
 $("#css-rules").val(rules);
}

function clean(){
  var colors = ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
  
  setColors(colors);
  generateRules(colors);
}