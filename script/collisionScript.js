
var non = "ca touche pas";
var oui = "Oui ca touche aussi"

function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      
      var b1 = y1 + h1;
      
      var r1 = x1 + w1;
      
      
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      
      var b2 = y2 + h2;
      
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false ;
      return true ;
    }


window.setInterval(function() {
    $('#result').text(collision($('#div1'), $('#div2')));
    if (collision($('#div1'), $('#div2'))==true){
      document.getElementById("div1").style.color = "blue";
    }else{
      document.getElementById("div1").style.color = "black";
    };

}, 200);


var tl = new TimelineLite;

tl.to("#div1",5,{
  x:600,
  y:34,
  borderRadius:20,
  ease: Power1.easeIn
})
.to("#div1",2,{
  x:600,
  y:34,
  borderRadius:60,
  ease: Power2.ease
});