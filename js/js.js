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

	for(var i = 0; i < adData.length; i++){
		var deskImg = adData[i]['desk_img'];
		var createArt = document.createElement('article');
		artTag.appendChild(createArt)
		var getArt = document.querySelectorAll("article");
		artTag.style.backgroundImage="url(images/"+deskImg+")";

		for(var j = 0; j < getArt.length; j++){
			var artName = getArt[j];
			var classAdded = getArt[j].className="ad-slide";
			//var addBG = getArt[j].style.backgroundImage = "url(images/"+deskImg+")";
		}
		
		artName.style.backgroundImage = "url(images/"+deskImg+")";
		artName.style.backgroundSize = "cover";

	}
	console.log(adData);
	console.log(deskImg);

})();