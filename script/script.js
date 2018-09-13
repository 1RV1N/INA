var tl = new TimelineLite;

tl.to(".box",0.5,{
	x:600,
	y:234,
	borderRadius:20,
	backgroundColor:"rgb(13,234,45)",
	ease: Power1.easeIn
})
.to(".box",2,{
	height:300,
	width:300,
	x:600,
	y:34,
	borderRadius:60,
	backgroundColor:"rgb(213,34,45)",
	ease: Power2.ease
})
.to(".box",1,{
	scaleX:0.6,
	scaleY:0.6,
	x:600,
	y:34,
	borderRadius:50,
	backgroundColor:"rgb(213,34,45)",
	ease: Back.easeOut.config(5)
})
.from(".circle", 1, {
		opacity: 0,
		left:200
});;