function randomPalette(){
  var colors = [];

  for(var i=0; i<5;i++){
    color = Math.floor(Math.random() * 360)/360;
    rgb = hslToRgb(color,0.5,0.5);
    colors.push(rgbToHex(Math.floor(rgb[0]),Math.floor(rgb[1]),Math.floor(rgb[2])));
  }

  generateRules(colors);
}

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

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
  generateRules(colors);
}