let late = "";
let long = "";
function getLocation() {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function(position) {
      late = position.coords.latitude;
      long = position.coords.longitude;
      return exwaylocate(position.coords.latitude,position.coords.longitude);
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
let r = getLocation();
alert(r);


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
		}
	}
	this.exl = exlocate.split("	");
	exwaydata();
	return this.exl[1] + this.exl[2] + "km";
}

let x = exwaylocate(35.56001277,126.6927703);
console.log(x);
