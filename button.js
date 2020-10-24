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
			this.exlocation = exlocate[this.i];
                        this.exl = this.exlocation.split("	");
	                alert( this.exl[1] + this.exl[2] + "km");
     		}
	}
}

