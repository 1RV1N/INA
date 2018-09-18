






document.addEventListener('keydown',function(e){

		const keyPress = event.keyCode;
		var rnd = 0;

		if (keyPress == 68){
			rnd  = 1;
			tl.to("#div1",0.5,{
		  		left:"+=500",
		  		ease: Power1.easeIn
			});
			while(rnd==1){
				tl.to("#div1",0.5,{
			  		backgroundColor:'blue',
				});
				rnd++;
			}
		}else if (keyPress == 81){
			tl.to("#div1",0.5,{
		  		left:"-=500",
		  		ease: Power1.easeIn
			});
		}else if(keyPress == 90){
			tl.to("#div1",0.5,{
				backgroundColor:'blue',
			});
		}else if(keyPress == 83){
			alert ('valeur rnd = ' + rnd)
		}else{
			alert ('touche :' + keyPress)
		}

		

		window.setInterval(function() {

    
			$('#result').text(rnd);
			    

			}, 200);

});