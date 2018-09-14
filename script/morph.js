


// var svg = document.getElementById("cups");
// var s = Snap(svg);

// var simpleCup = Snap.select('#simple-cup');
// var fancyCup = Snap.select('#fancy-cup');

// var simpleCupPoints = simpleCup.node.getAttribute('d');
// var fancyCupPoints = fancyCup.node.getAttribute('d');


// var toFancy = function(){
//   simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);  
// }

// var toSimple = function(){
//   simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy); 
// }

// toSimple();


// var svg = document.getElementById("Calque_1");
// var s = Snap(svg);

// var simpleCup = Snap.select('#forme1');
// var fancyCup = Snap.select('#forme2');

// var simpleCupPoints = simpleCup.node.getAttribute('d');
// var fancyCupPoints = fancyCup.node.getAttribute('d');


// var toFancy = function(){
//   simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);  
// }

// var toSimple = function(){
//   simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy); 
// }


// toSimple();





// var simpleCupPoints = simpleCup.node.getAttribute('d');
// var fancyCupPoints = fancyCup.node.getAttribute('d');


// var toFancy = function(){
//   simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);  
// }

// var toSimple = function(){
//   simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy); 
// }


// toSimple();
// 

var tl = new TimelineLite;

tl.to("#expression2",0.01,{
	opacity:0,
	delay:3
})
.to("#expression1",0.01,{
	opacity:1,
})
.to("#expression1",0.01,{
	opacity:0,
	delay:0.9,
	
})
.to("#expression2",0.01,{
	opacity:1
});


