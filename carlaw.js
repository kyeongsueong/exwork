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
			
			this.canvas2 = document.getElementById('canvas_ai');
			this.context2 = this.canvas2.getContext('2d');

			this.capturDiv = document.querySelector(".divid");
		}

		draw(video){
			//this.context.globalAlpha = 1;
			//this.context.drawImage(video,0, 0, this.canvas.width, this.canvas.height);
			//this.context.globalAlpha = 1;
			this.context.drawImage(video, this.x, this.y, this.xWidth, this.yHeight, this.x, this.y, this.xWidth, this.yHeight);
			this.context.strokeStyle = "#FF0000";
			this.context.strokeRect(this.x, this.y, this.xWidth, this.yHeight);
			
			this.context2.drawImage(video, this.x, this.y, this.xWidth, this.yHeight, 0,0, 200, 250);
		}
		captur(){
			this.capturDiv.style.display = "block";
			this.img = document.getElementById('canvas_ai');
			this.canvas3 = document.getElementById('canvas_ctr');
			this.context3 = this.canvas3.getContext('2d');
			this.context3.drawImage(this.img, 0, 0, 400, 700);
			document.getElementById('link').style.display = "block";
			setTimeout(function(){ document.querySelector(".divid").style.display = "none"; }, 2000);
		}
		capturDown(){
			this.page = document.querySelector(".divid");

			this.img = document.getElementById('canvas_ai');
			this.canvas = document.createElement("canvas");
			this.canvas.width = 420;
			this.canvas.height = 500;
			this.ctx = this.canvas.getContext('2d');
			this.ctx.drawImage(this.img, 0, 0, 420, 500);
			
			this.a = document.createElement("a");
			this.a.setAttribute('download', 'MintyPaper.png'); 
			this.a.setAttribute('href', this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
			
			this.page.appendChild(this.a);
			this.a.appendChild(this.canvas);
		}
	}

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
	// Grab elements, create settings, etc.
	//let video = document.getElementById('video');
	let camera;
        
	function environment_cam() {
		camera = { facingMode: { exact: "environment" } };
		cameraStream(camera);
		start();
		
	}
	function user_cam() {
		camera = { facingMode: "user" };
		cameraStream(camera);
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
		document.querySelector(".divid").style.display="block";
		document.getElementById('link').style.display="none";
	}
	function closeDown() {
		document.querySelector(".divid").style.display="none";
	}
	let focusRect = {
		x: 130,
		y: 100,
		xWidth : 260,
		yHeight : 260
	};
	const ks_canvas = new mycanvas(500, 500, focusRect.x, focusRect.y, focusRect.xWidth, focusRect.yHeight);
	video = document.getElementById('video');
	
	function snap () {
		ks_canvas.draw(video);
		predict();
		let data = ks_canvas.dataUrl;
	}


	//const URL = "https://teachablemachine.withgoogle.com/models/XlpEGD_eD/";//적재불량
	const URL = "https://teachablemachine.withgoogle.com/models/MngODkBou/";

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
    	localStorage.setItem("test", "plzchapter");
    }

    async function predict() {

    	var image = document.getElementById('canvas_ai');

    	const prediction = await model.predict(image, false);

    	let arrays = [];
    	for (let i = 0; i < maxPredictions; i++) {
    		const classPrediction =
    		prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    		arrays[i] = prediction[i].probability.toFixed(2);
    	}
    	let carslaw = arrays[0];
    	let truck = arrays[1];
    	let car = arrays[2];
    	let excar = arrays[3];
    	let ptroll = arrays[4];
    	let sisul = arrays[5];
    	let way = arrays[6];    

    	if ( carslaw > 0.70) {
    		document.getElementById('data').innerHTML = "적재불량"
    		document.getElementById('data1').innerHTML = carslaw * 100 + "%";
    		ks_canvas.captur();
		ks_canvas.capturDown();
    	}else if ( truck > 0.80) {
    		document.getElementById('data').innerHTML = "화물차"
    		document.getElementById('data1').innerHTML = truck * 100 + "%";
    	}else if ( car > 0.70) {
    		document.getElementById('data').innerHTML = "일반차량"
    		document.getElementById('data1').innerHTML = car * 100 + "%";
    	}else if ( excar > 0.70) {
    		document.getElementById('data').innerHTML = "작업차량"
    		document.getElementById('data1').innerHTML = excar * 100 + "%";
    	}else if ( ptroll > 0.70) {
    		document.getElementById('data').innerHTML = "순찰차"
    		document.getElementById('data1').innerHTML = ptroll * 100 + "%";
    	}else if ( sisul > 0.70) {
    		document.getElementById('data').innerHTML = "시설물"
    		document.getElementById('data1').innerHTML = sisul * 100 + "%";
    	}else if ( way > 0.70) {
    		document.getElementById('data').innerHTML = "노면"
    		document.getElementById('data1').innerHTML = way * 100 + "%";
    	}
    	snap();
    }
    init();
