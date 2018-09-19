var touche=0;

document.addEventListener('keydown',function(e){

		const keyPress = event.keyCode;
		var rnd = 0;
		var animation=false;

		if (touche==0 || touche != keyPress){
			touche=keyPress;
			animation=false;
		}
		if (touche > 0 && touche==68){
			animation=true;
		}

		//alert(animation);
		//alert("je passe au début");

		if (keyPress == 68){
			rnd  = 1;
			tl.to("#div1",0.5,{
		  		left:"+=500",
		  		ease: Power1.easeIn
			});
			
			
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
			//alert ('touche :' + keyPress)
			
			//alert ('animation :' + animation)
			if(keyPress ==  65 && animation==true){
				tl.to("#div1",0.5,{
					backgroundColor:'blue',
				});
			}
			animation=false;

		}

		while(rnd ==1 ){
				
				if(touche ==  65){
					tl.to("#div1",0.5,{
			  			backgroundColor:'blue',
					});
				}
				rnd++;
			}
		
$('#result').text('animation = '+ animation +' | keyPress = '+ keyPress + ' | rnd = ' + rnd) ;

		/*window.setInterval(function() {

    
			$('#result').text(animation +'keyPress = '+ keyPress + 'rnd = ' + rnd) ;
			    

			}, 200);*/

});