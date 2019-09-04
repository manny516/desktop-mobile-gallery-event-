(function(){

	//Setup variables to grab elements in the DOM needed for the slider
	const artTag = document.querySelector('.slider-container');
	const highLight = document.querySelector('.ad-highlight');
	const rightArrow = document.querySelector('#arrow-right');
	const leftArrow = document.querySelector('#arrow-left');
	const hiddenArrow = document.querySelector('hide-arrow');
	const startNum = document.querySelector('.count-st');
	const endNum = document.querySelector('.count-end');

	//Set up variable to track browser width.
	let browserWidth = window.innerWidth;

	//Store Ad slide data in an array Object
	let adData = [ 

	{
		"logo" : "slidemobilelogo.png",
		"header" : "Lorem ipsum dolor sit amet",
		"summary" : "adipiscing elit. Vivamus tincidunt egesta1s est, a euismod elit dictum quis",
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

	];

	//Set the end of the ad number indicator the length of the list of items in the Ad data array.
	endNum.innerHTML = adData.length;

	//Creating the high light box to pull add data;
	let highLightBox = (countPosition) => {

		//set default value of the count position to the beginning of the index if no value is present. 
		countPosition = countPosition || 0 ;

		const adLogo = document.querySelector('.ad-logo img');
		const adHeadline = document.querySelector('.ad-headline h2');
		const adSummary = document.querySelector('.ad-summary p');
		let dataDisplay = adData[countPosition];

		adLogo.setAttribute('src','images/' + dataDisplay['logo'] );

		adHeadline.innerHTML = dataDisplay['header'];
		adSummary.innerHTML = dataDisplay['summary'];

		if( browserWidth <= 1020){
			highLight.classList.add('mobileview');
		}

	}

	// Loop through Ad DATA / Check Browser size / Set Ad image variable based on browser size
	//create article tag/ nest new element inside parent/ add class and background image to Article tag
	let imageArtData = () => {

		for(let i = 0 ; i < adData.length ; i++){

			if( browserWidth <= 1020){
				deskImg = adData[i]['mobile_img'];
				console.log("Mobile size");
			}

			if( browserWidth >= 1020){
				deskImg = adData[i]['desk_img'];
				console.log("Desktop");
			}
	
			let createArt = document.createElement('article');
			artTag.appendChild(createArt);
			getArt = document.querySelectorAll("article");
			

			for(let j = 0; j < getArt.length; j++){
				artName = getArt[j];
				getArt[j].className="ad-slide";
			}
			
			artName.style.backgroundImage = "url(images/"+deskImg+")";
			artName.style.backgroundSize = "cover";


		}

	}

	//Ad Pixel fire / Create pixel img to fire
	let pixelFire = () => {
		  let adPixel = document.createElement('img');
		  adPixel.height = 1;
		  adPixel.width = 1;
		  adPixel.style.display = "none";
		  adPixel.src = 'https://bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28240034&PluID=0&ord=[timestamp]&rtu=-1&pcp=$$$$page_view_id=%%PATTERN:page_view_id%%&pos=%%PATTERN:pos%%$$$$) ';
		  document.body.appendChild(adPixel);
		  console.log("pixel Fire"+ adPixel.src);
	}

	//Left and right arrow click event handlers to track user clicks and position in Ad Data array
	function arrowClick(){		

		let count = 0; 
		let translateX = count * 100;
		const slideAd = document.querySelectorAll('.ad-slide');


		let deskHighLightR = () => {

			if(leftArrow.classList = 'hide-arrow' ){
				leftArrow.classList.remove('hide-arrow');
				leftArrow.classList.add('click-able');
				highLight.classList.add('stop-point');
			}

			if( count === 1){
				highLight.classList.add('shove-slide');
				translateX = -100;
				translateX += 100;
			}

			if(count <= adData.length){
				count += 1; 
				startNum.innerHTML = count + 1;
				highLightBox(count);
				translateX -= 100;

			} 

			if( highLight.classList == 'ad-highlight stop-point shove-slide'){
				for(let i = 0; i < slideAd.length; i++ ){
					slideAd[i].style.transform = "translateX(" + translateX + "%)";
				}
			}

			if(count === adData.length - 1){
				console.log('Youve reach the end ');
				rightArrow.className = "hide-arrow";
			}
				
			console.log("Position in the array : " + count);
		}


		let deskHighLightL = () =>{

			if(rightArrow.classList = 'hide-arrow' ){
				rightArrow.classList.remove('hide-arrow');
				rightArrow.classList.add('click-able');
			}

			if(count  > 0 ){
				count -= 1; 
				startNum.innerHTML = count + 1;
				highLightBox(count);
				translateX  += 100;
			}

			if( count === 1){
				highLight.classList.remove('shove-slide');
				for(let i = 0; i < slideAd.length; i++ ){
					slideAd[i].style.transform = null;
				};
			}

			if( highLight.classList == 'ad-highlight stop-point shove-slide' || highLight.classList == 'ad-highlight stop-point mobileview shove-slide'){

				for(let i = 0; i < slideAd.length; i++ ){
					slideAd[i].style.transform = "translateX(" + translateX + "%)";
				}

			}

			console.log("Position in the array : " + count);

			if(count === 0 ){
				leftArrow.className = "hide-arrow";
				highLight.classList.remove('stop-point');
				translateX = 100;
				console.log('Youve reached the beginning ');
			}

		}





		let mobileHighLightR = () => {

			if(leftArrow.classList = 'hide-arrow' ){
				leftArrow.classList.remove('hide-arrow');
				leftArrow.classList.add('click-able');
			}

			if( count === 0){
				translateX = -100;
				translateX += 100;
			}

			if(count <= adData.length){
				count += 1; 
				startNum.innerHTML = count + 1;
				highLightBox(count);
				translateX -= 100;
			} 

			if( highLight.classList == 'ad-highlight mobileview'){
				for(let i = 0; i < slideAd.length; i++ ){
					slideAd[i].style.transform = "translateX(" + translateX + "%)";
				}
			}

			console.log("Position in the array : " + count);

			if(count === adData.length - 1){
				console.log('Youve reach the end ');
				rightArrow.className = "hide-arrow";
			}
				
		}



		let mobileHighLightL = () => {

			if(rightArrow.classList = 'hide-arrow' ){
				rightArrow.classList.remove('hide-arrow');
				rightArrow.classList.add('click-able');
			}

			count -= 1; 
			startNum.innerHTML = count + 1;
			highLightBox(count);
			translateX  += 100;
			
			for(let i = 0; i < slideAd.length; i++ ){
				slideAd[i].style.transform = "translateX(" + translateX + "%)";
			}


			console.log("Position in the array : " + count);

			if(count === 0 ){
				leftArrow.className = "hide-arrow";
				translateX = 100;
				console.log('Youve reached the beginning ');
			}

		}




		//trigger for the right and left arrow to cycle through slide.
		rightArrow.addEventListener("click",function(){

			pixelFire();
			if(highLight.classList != 'ad-highlight mobileview' ){
				deskHighLightR();
			}else{

				mobileHighLightR();
			}
		},false);


		leftArrow.addEventListener("click",function(){

			pixelFire();
			if(highLight.classList != 'ad-highlight mobileview' ){
				deskHighLightL();
			}else{
				mobileHighLightL();
			}
		},false);
	}





	//Window resize Event listener to handle images and slider functionality on mobile or destop size. 
	window.addEventListener('resize', function(){

		let browserWidth = window.innerWidth;

		for(let i = 0 ; i < adData.length ; i++){

			if( browserWidth <= 1020){
				imgView = adData[i]['mobile_img'];
			}else{
				imgView = adData[i]['desk_img'];
			}

			let getAdSlide = document.querySelectorAll('.ad-slide');

			getAdSlide[i].style.backgroundImage = "url(images/"+imgView+")";

		}
		
		if(browserWidth >= 1020 ){
			highLight.classList.remove('mobileview');
		}else{
			highLight.classList.add('mobileview');
		}



	},false);

	imageArtData();
	arrowClick();
	highLightBox();
	
})();