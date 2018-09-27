var touche=0;
var actionEnCour=0;
var premiereAction = 0;
var derniereAction = 0;

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

		if(premiereAction == 0 || tl.progress() >= 0.99){
			premiereAction = 1;

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

			$('#result').text('animation = '+ animation +' | keyPress = '+ keyPress + ' | rnd = ' + rnd + ' | dernière touche appuyé =  '+ derniereAction) ;
		}else{
			derniereAction = keyPress;

		}
});