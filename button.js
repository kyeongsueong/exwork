let late = "";
let long = "";
let late2 = "";
let long2 = "";
function getLocation() {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function(position) {
	    this.tmp1 = position.coords.latitude;
	    this.tmp2 = position.coords.longitude;
	    late2 = this.tmp1.slice(0, 6);
	    long2 = this.tmp2.slice(0, 7);
	    
	    late = position.coords.latitude;
	    long = position.coords.longitude;
	    //alert(late +"/"+ long);
    }, function(error) {
      console.error(error);
    }, {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: Infinity
    });
  } else {
    alert('GPS를 지원하지 않습니다');
  }
}

getLocation();

class createBt_date{
  writeDate(){
	this.day = new Date();
	this.nE = this.day.getDate();
	this.nY = this.day.getFullYear();
	this.nM = this.day.getMonth();
	this.nHours = this.day.getHours();
	this.nMinut = this.day.getMinutes();
   return this.nY + "." + (this.nM+1) + "." + this.nE + "." + this.nHours + ":" + this.nMinut; 
  }
}
let mydate = new createBt_date();


function exwaylocate(x,y) {
	for (this.i = 0; this.i <= exlocate.length; this.i++) {
		if (exlocate[this.i].includes(x) == true && exlocate[this.i].includes(y) == true) {
			console.log(exlocate[this.i]);
			exlocate = exlocate[this.i];
			
			this.exl = exlocate.split("	");
			exwaydata();
			return this.exl[1] + this.exl[2] + "km";
		}
		else if( this.i == exlocate.length ){ 
			return `정보없음 // 위도: ${x} //경도: ${y}`;
		}
	}
	return 0;
	
}

//let x = exwaylocate(35.56001277,126.6927703);
//alert(x);

function reloadBt() {
	location.reload();
}

let removechilds;
removechilds = setInterval(reframe, 10000);
	function reframe() {
		this.numb = document.getElementById('checkCar').innerHTML;
		if ( (this.numb - 0) < 4) {
			resetDown();
		}
	}

