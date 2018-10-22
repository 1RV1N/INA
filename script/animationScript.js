var touche=0;
var actionEnCour=0;
var premiereAction = 0;
var lastKeypress = 0;

document.addEventListener('keydown',function(e){
		/*if(tl.progress() == 1){
			alert ("test");
		}*/

		const keyPress = event.keyCode;
		var rnd = 0;
		var animation=false;

		if (touche==0 || touche != keyPress){
			touche=keyPress;
		}
		if (touche != 0 && touche==68){
			animation=true;
		}

		if(premiereAction == 0 || tl.progress() >= 1){
			premiereAction = 1;
			lastKeypress = keyPress;

			if (keyPress == 68){
				rnd  = 1;
				tl.to("#div1",0.5,{
			  		left:"+=500",
			  		ease: Power1.easeIn
				});
			}else if(keyPress == 90){
				tl.to("#div1",0.5,{
					backgroundColor:'blue',
				});
			}else if(keyPress == 81){
				tl.to("#div1",0.5,{
					left:"-=500",
			  		ease: Power1.easeIn
				});
			}else if(keyPress == 83){
				tl.to("#div1",1,{
					left:"-=200",
				});
			}


			document.getElementById('result').innerText=`animation = ${animation} | keyPress = ${keyPress} | rnd = ${rnd} | dernière touche appuyé = ${lastKeypress} | premiereAction = ${premiereAction}` ;


		}else{

			if(keyPress == 90  ){
				tl.to("#div1",0.5,{
					backgroundColor:'red',
				});
			}else if(keyPress == 83 && lastKeypress == 68  ){
				tl.to("#div1",0.1,{
					top:"+=100",
			  		ease: Power1.easeIn
				}).to("#div1",0.1,{
					top:"-=100",
			  		ease: Power1.easeIn
			  	});
			}

			$('#result2').text('lastKeypress = '+ lastKeypress+' | premiereAction = '+premiereAction ) ;
		}
});