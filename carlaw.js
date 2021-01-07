class mycanvas{
		constructor(width, height, x, y, xWidth, yHeight){
			this.canvas = document.getElementById('canvas');
			this.context = this.canvas.getContext('2d');
			this.canvas.width = width;
			this.canvas.height = height;
			this.x = x;
			this.y = y;
			this.xWidth = xWidth;
			this.yHeight = yHeight;

			//this.capturDiv = document.querySelector(".divid");
		}

		draw(video){
	
			this.context.drawImage(video,0, 0, this.canvas.width, this.canvas.height);
		}
		captur(){
			//this.capturDiv.style.zIndex = "2";
			//setTimeout(function(){ document.querySelector(".divid").style.zIndex = "-1"; }, 2000);
		}
		capturDown(dataText, dataText2, dataText3){
			this.day = new Date();
			this.nY = this.day.getFullYear();
			this.nM = this.day.getMonth();
			this.nE = this.day.getDate();
			this.nHours = this.day.getHours();
			this.nMinut = this.day.getMinutes();
			this.nSecon = this.day.getSeconds();
			this.nM = this.nM + 1;
			
			this.page = document.getElementById("snapImgs");

			this.img = document.getElementById('canvas');
			this.canvasc = document.createElement("canvas");
			this.canvasc.width = 240;
			this.canvasc.height = 320;
			this.ctx = this.canvasc.getContext('2d');
			
			this.context.fillStyle = "white";
			this.context.font = "40px Arial";
			this.context.strokeText(dataText,0,30);
			this.context.fillText(dataText,0,30);
			
			this.context.fillStyle = "white";
			this.context.font = "40px Arial";
			this.context.strokeText(dataText2,0,70);
			this.context.fillText(dataText2,0,70);
			
			this.context.fillStyle = "white";
			this.context.font = "40px Arial";
			this.context.strokeText(dataText3,0,110);
			this.context.fillText(dataText3,0,110);
			
			this.ctx.drawImage(this.img, 0, 0, 240, 320);
			this.a = document.createElement("a");
			this.a.setAttribute('download', `${this.nY}${this.nM}${this.nE}${this.nHours}${this.nMinut}${this.nSecon}.png`); 
			this.a.setAttribute('href', this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
			
			this.page.appendChild(this.a);
			this.a.appendChild(this.canvasc);
		}
	}
	let checkCars = 0;
	let loadings;
	let indexdot = 0;
	function loading(num) {
		this.dot = [".","..","...","....","....."];
		document.getElementById('Loding').innerHTML = "Loding" + this.dot[num];
	}

	loadings = setInterval(frame, 1000);
	function frame() {
		indexdot++;
		if (indexdot > 4) {
			indexdot = 0;
		}
		loading(indexdot);
	}
	
	let camera;
        
	function environment_cam() {
		camera = { facingMode: { exact: "environment" } };
		start();
		
	}
	function user_cam() {
		camera = { facingMode: "user" };
		start();
	}
	environment_cam();
	
	var videoTag = document.getElementById('video');
	var zoomSlider = document.getElementById("zoom-slider");
	var zoomSliderValue = document.getElementById("zoom-slider-value");

	function start() {
	  navigator.mediaDevices.getUserMedia({ video: camera })
	    .then(gotMedia)
	    .catch(e => { console.error('getUserMedia() failed: ', e); });
	}

	function gotMedia(mediastream) {
	  videoTag.srcObject = mediastream;
	  
	  var videoTrack = mediastream.getVideoTracks()[0];
		
	  // Timeout needed in Chrome, see https://crbug.com/711524
	  setTimeout(() => {
	    const capabilities = videoTrack.getCapabilities()
	    // Check whether zoom is supported or not.
	    if (!capabilities.zoom) {
	      return;
	    }
	    
	    zoomSlider.min = capabilities.zoom.min;
	    zoomSlider.max = capabilities.zoom.max;
	    zoomSlider.step = capabilities.zoom.step;

	    zoomSlider.value = zoomSliderValue.value = videoTrack.getSettings().zoom;
	    zoomSliderValue.value = zoomSlider.value;
	    
	    zoomSlider.oninput = function() {
	      zoomSliderValue.value = zoomSlider.value;
	      videoTrack.applyConstraints({advanced : [{zoom: zoomSlider.value}] });
	    }
	  }, 500);
	  
	}


	function opneDown() {
                //getLocation();
		document.querySelector(".divid").style.display = "block";
		document.querySelector(".divid").style.zIndex = "2";
			
		//this.y = exwaylocate(35.28126034, 129.2034757);
		//alert(this.y);
	}
	function closeDown() {
		document.querySelector(".divid").style.display = "none";
	}
	function resetDown() {
		checkCars = 0;
		document.getElementById('checkCar').innerHTML = checkCars;
		
		this.remove = document.getElementById("snapImgs");
		while (this.remove.hasChildNodes()) {
			this.remove.removeChild(this.remove.firstChild);
		}
	}
	let focusRect = {
		x: 130,
		y: 80,
		xWidth : 260,
		yHeight : 270
	};
	const ks_canvas = new mycanvas(500, 700, focusRect.x, focusRect.y, focusRect.xWidth, focusRect.yHeight);
	video = document.getElementById('video');
	
	let dataText = "";
	let dataText2 = "";
	let dataText3 = "";
	
	function snap () {
                ks_canvas.draw(video);
		predict();
		let data = ks_canvas.dataUrl;
         }
	function snap2 () {
		dataText = "";
		dataText2 = "";
		dataText3 = "";
		ks_canvas.capturDown(dataText, dataText2, dataText3);
		checkCars++;
		document.getElementById('checkCar').innerHTML = checkCars;	
	}


	//const URL = "https://teachablemachine.withgoogle.com/models/XlpEGD_eD/";//적재불량
	//const URL = "https://teachablemachine.withgoogle.com/models/MngODkBou/";
	const URL = "./carlaw/";

	let model, webcam, maxPredictions;
    // Load the image model and setup the webcam
    async function init() {

    	const modelURL = URL + "model.json";
    	const metadataURL = URL + "metadata.json";

    	model = await tmImage.load(modelURL, metadataURL);
    	maxPredictions = model.getTotalClasses();

    	predict();
    	clearInterval(loadings);
    	document.getElementById('Loding').innerHTML = "";
   
    }

    async function predict() {

    	var image = document.getElementById('canvas');

    	const prediction = await model.predict(image, false);

    	let arrays = [];
    	for (let i = 0; i < maxPredictions; i++) {
    		const classPrediction =
    		prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    		arrays[i] = prediction[i].probability.toFixed(2);
    	}
	    let crack = arrays[0];
	    let spalling = arrays[1];
	    let normal = arrays[2];
	
    	if ( crack > 0.90) {
    		document.getElementById('data').innerHTML = "크랙";
    		document.getElementById('data1').innerHTML = crack * 100 + "%";
		/*
		if(checkCars < 221){ 
			if(snapsw == true){
				snapsw = false;
				this.numb = document.getElementById('checkCar').innerHTML;
				setTimeout(function(){ 
					if ( (this.numb - 0) < 4) {
						resetDown();
					}
				}, 5000);
			}
			//ks_canvas.captur();
			getLocation();
			dataText = mydate.writeDate();
			//dataText2 = "위도:" + late + "-" + "경도:" + long;
			dataText2 = "위도: " + late;
			dataText3 = "경도: " + long;
			//dataText3 = exwaylocate(late, long);
			ks_canvas.capturDown(dataText, dataText2, dataText3);
			checkCars++;
			document.getElementById('checkCar').innerHTML = checkCars;
			//ks_canvas.capturDown();
		} */
		dataText = mydate.writeDate();
		dataText2 = "위도: " + late;
		dataText3 = "경도: " + long;
		ks_canvas.capturDown(dataText, dataText2, dataText3);
			checkCars++;
			document.getElementById('checkCar').innerHTML = checkCars;
		
    	}else if ( spalling > 0.90) {
		
    		document.getElementById('data').innerHTML = "스폴링";
    		document.getElementById('data1').innerHTML = spalling * 100 + "%";
		/*
		if(checkCars < 221){ 
			if(snapsw == true){
				snapsw = false;
				this.numb = document.getElementById('checkCar').innerHTML;
				setTimeout(function(){ 
					if ( (this.numb - 0) < 4) {
						resetDown();
					}
				}, 5000);
			}
			
			getLocation();
			dataText = mydate.writeDate();
			//dataText2 = "위도:" + late + "-" + "경도:" + long;
			dataText2 = "위도: " + late;
			dataText3 = "경도: " + long;
			
			ks_canvas.capturDown(dataText, dataText2, dataText3);
			checkCars++;
			document.getElementById('checkCar').innerHTML = checkCars;
			
		}*/
		dataText = mydate.writeDate();
		dataText2 = "위도: " + late;
		dataText3 = "경도: " + long;
		ks_canvas.capturDown(dataText, dataText2, dataText3);
			checkCars++;
			document.getElementById('checkCar').innerHTML = checkCars;
    	}else if ( normal > 0.95) {
		//snap2();
    		document.getElementById('data').innerHTML = "일반노면";
    		document.getElementById('data1').innerHTML = normal * 100 + "%";
    	}
    	snap();
    }
    init();
