(function(){

	let adData = [ 

	{
		"logo" : "slidemobilelogo.png",
		"header" : "Lorem ipsum dolor sit amet",
		"summary" : "adipiscing elit. Vivamus tincidunt egestas est, a euismod elit dictum quis",
		"desk_img" : "set01_01_desktop.jpg", 
		"mobile_img" : "set01_01_mobile.jpg"
	},
	{

		"logo" : "slidemobilelogo.png",
		"header" : "Phasellus dictum varius erat",
		"summary" : "Etiam lorem justo, malesuada eu est et, ultricies feugiat enim",
		"desk_img" : "set01_02_desktop.jpg", 
		"mobile_img" : "set01_02_mobile.jpg"
	},
	{

		"logo" : "slidemobilelogo.png",
		"header" : "Orci varius natoque penatibus",
		"summary" : "et magnis dis parturient montes, nascetur ridiculus mus",
		"desk_img" : "set01_03_desktop.jpg", 
		"mobile_img" : "set01_03_mobile.jpg"
	},
	{

		"logo" : "slidemobilelogo.png",
		"header" : "Quisque egestas enim sed nisl",
		"summary" : "varius, quis eleifend urna faucibus. Nullam in mi facilisis, interdum",
		"desk_img" : "set01_04_desktop.jpg", 
		"mobile_img" : "set01_04_mobile.jpg"
	},
	{

		"logo" : "slidemobilelogo.png",
		"header" : "Aliquam erat volutpat",
		"summary" : "Vivamus scelerisque sollicitudin enim",
		"desk_img" : "set01_05_desktop.jpg", 
		"mobile_img" : "set01_05_mobile.jpg"
	}

	]

	var artTag = document.querySelector('.ad-container');
	var highLight = document.querySelector('.ad-highlight');
	var rightArrow = document.querySelector('#arrow-right');
	var leftArrow = document.querySelector('#arrow-left');
	var hiddenArrow = document.querySelector('hide-arrow');
	var browserWidth = window.innerWidth;

	function imageArtData(){

		for(let i = 0 ; i < adData.length ; i++){

			if( browserWidth <= 1020){
				deskImg = adData[i]['mobile_img'];
				console.log("Mobile size");
			}else{
				deskImg = adData[i]['desk_img'];
				console.log("Desktop");
			}
	
			let createArt = document.createElement('article');
			artTag.appendChild(createArt);
			var getArt = document.querySelectorAll("article");
			//artTag.style.backgroundImage="url(images/"+deskImg+")";
			//art

			for(let j = 0; j < getArt.length; j++){
				var artName = getArt[j];
				let classAdded = getArt[j].className="ad-slide";
			}
			
			artName.style.backgroundImage = "url(images/"+deskImg+")";
			artName.style.backgroundSize = "cover";

		}

		console.log(adData);
		console.log(getArt[1]);
		

	}

	var count = 0; 
	console.log(count);

	function arrowClick(){
		rightArrow.addEventListener("click",function(){
			//alert('you clicked left Arrow');
			//console.log(adData.length);

			if(leftArrow.classList = 'hide-arrow' ){
				leftArrow.classList.remove('hide-arrow');
				leftArrow.classList.add('click-able');
				highLight.classList.add('stop-point');
			}

			if(count < adData.length ){
				count += 1; 
			}  else{
				console.log('Youve reach the end ');
				rightArrow.className= "hide-arrow";
			}
			
			console.log(count);
			
			console.log(adData.length);

			/*for(let i = 0 ; i < adData.length; i++ ){
				console.log(i++);	
			}*/
		});


		leftArrow.addEventListener("click",function(){
			//alert('you clicked left Arrow');
			//console.log(adData.length);

				if(rightArrow.classList = 'hide-arrow' ){
					rightArrow.classList.remove('hide-arrow');
					rightArrow.classList.add('click-able');
				}

				if(count > 1){
					count -= 1; 
				}else{
					leftArrow.className= "hide-arrow";
					highLight.classList.remove('stop-point');
					console.log('Youve reached the beginning ');
				}
			
			console.log(count);
			
			//console.log(adData.length);

			/*for(let i = 0 ; i < adData.length; i++ ){
				console.log(i++);	
			}*/
		});
	}

	arrowClick();



	
	/*var browserResize = window.addEventListener("resize", function(){

		var browserWidth = window.innerWidth;
		if( browserWidth <= 1020){
			console.log("Mobile size");
		}else{
			console.log("Desktop");
		}

		console.log(browserWidth);
		
	});*/


	imageArtData();

})();