var tl = new TimelineLite;

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

function destruct($idDiv){

  var rl = new TimelineLite;

  rl.to($idDiv,0.1,{
    scale:0.4,
    display:"none",
  });

}
function stun($idDiv){

  var sl = new TimelineLite;

  sl.to($idDiv,0.1,{
    left:'+=50',
    ease: Power1.easeIn
  });

}
function eject($idDiv){

  var il = new TimelineLite;

  il.to($idDiv,0.1,{
    left:'+=50',
  }).to($idDiv,0.1,{
    left:'+=1050',
    ease: Power1.easeIn
  });
}


window.setInterval(function() {

    // $('#result').text(collision($('#div1'), $('#div2')));

    if (collision($('#div1'), $('#div2'))==true){
      destruct('#div2');
    }


}, 200);