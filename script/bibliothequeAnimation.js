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