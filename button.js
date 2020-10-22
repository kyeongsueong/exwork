function getLocation() {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function(position) {
      alert(position.coords.latitude + ' ' + position.coords.longitude);
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
	constructor(){
		this.day = new Date();
		this.nE = this.day.getDate();
		this.nY = this.day.getFullYear();
		this.nM = this.day.getMonth();
		this.nHours = this.day.getHours();
		this.nMinut = this.day.getMinutes();
  }
  writeDate(){
   alert(this.nE + "/" + this.nY + "/" + this.nM + "/" + this.nHours + ":" + this.nMinut); 
  }
}
