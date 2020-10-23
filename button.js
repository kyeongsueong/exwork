let late = "";
let long = "";
function getLocation() {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function(position) {
      late = position.coords.latitude;
	long = position.coords.longitude;
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

let locateX = 0;
let locateY = 0;
let exlocation;
function exwaylocate(x,y) {
	for (this.i = 0; this.i <= exlocate.length; this.i++) {
		if (exlocate[this.i].includes(x) == true && exlocate[this.i].includes(y) == true) {
			console.log(exlocate[this.i]);
			exlocation = exlocate[this.i];
		}else{
			return "지명없음";	
		}
	}
	this.exl = exlocation.split("	");
	return this.exl[1] + this.exl[2] + "km";
}

