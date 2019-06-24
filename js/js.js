(function(){

	//Setup variables to grab elements in the DOM needed for the slider
	var artTag = document.querySelector('.ad-container');
	var highLight = document.querySelector('.ad-highlight');
	var rightArrow = document.querySelector('#arrow-right');
	var leftArrow = document.querySelector('#arrow-left');
	var hiddenArrow = document.querySelector('hide-arrow');

	//Set up variable to track browser width.
	var browserWidth = window.innerWidth;

	var count = 0; 


	//store Ad slide data in an array Object
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

	// Loop through Ad DATA / Check Browser size / Set Ad image variable based on browser size
	//create article tag/ nest new element inside parent/ add class and background image to Article tag.
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
			

			for(let j = 0; j < getArt.length; j++){
				var artName = getArt[j];
				getArt[j].className="ad-slide";
			}
			
			artName.style.backgroundImage = "url(images/"+deskImg+")";
			artName.style.backgroundSize = "cover";

		}

		console.log(adData);
		console.log(getArt[1]);
		

	}

	//Left and right arrow click event handlers to track user clicks and position in Ad Data array
	function arrowClick(){

		rightArrow.addEventListener("click",function(){

			if(leftArrow.classList = 'hide-arrow' ){
				leftArrow.classList.remove('hide-arrow');
				leftArrow.classList.add('click-able');
				highLight.classList.add('stop-point');
			}

			if(count <= adData.length	){
				count += 1; 
				console.log(adData.length - 1);
			} 


			if(count === adData.length - 1){
				console.log('Youve reach the end ');
				rightArrow.className= "hide-arrow";
			}
			
			console.log("Position in the array : " + count);
			console.log(adData[count]);

		});


		leftArrow.addEventListener("click",function(){
			
				if(rightArrow.classList = 'hide-arrow' ){
					rightArrow.classList.remove('hide-arrow');
					rightArrow.classList.add('click-able');
				}

				if(count  > 0 ){
					count -= 1; 
				}

				if(count === 0 ){
					leftArrow.className= "hide-arrow";
					highLight.classList.remove('stop-point');
					console.log('Youve reached the beginning ');
				}

			console.log("Position in the array : " + count);
			console.log(adData[count]);
			
		});
	}

	imageArtData();
	arrowClick();

	

})();