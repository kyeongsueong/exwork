let data = '';
function Save() {
	for (this.i = 1; this.i <= 8; this.i++) {
		this.text_id = "text" + this.i;
		data += document.getElementById(this.text_id).value;
	}
	for (this.j = 1; this.j <= 7; this.j++) {
		this.table_id = "tabletx" + this.j;
		data += document.getElementById(this.table_id).value;
	}
	data += document.getElementById("file1").value;
	data += document.getElementById("file2").value;
	alert(data);
}

class mydate {
	constructor(){
		this.day = new Date();
		this.nE = this.day.getDate();
		this.nY = this.day.getFullYear();
		this.nM = this.day.getMonth();
		this.nD = this.day.getDay();
	}

	today(){
		this.monday = this.nD;
		switch (this.monday) {
			case 0:
			this.monday = "일";
			break;
			case 1:
			this.monday = "월";
			break;
			case 2:
			this.monday = "화";
			break;
			case 3:
			this.monday = "수";
			break;
			case 4:
			this.monday = "목";
			break;
			case 5:
			this.monday = "금";
			break;
			case  6:
			this.monday = "토";
		}
		console.log(this.nY +"."+ (this.nM + 1) + "." +this.nE + this.monday);
		document.getElementById('text1').value = `${this.nY}  년  ${(this.nM + 1)}  월  ${this.nE}  일  ( ${this.monday} 요일 )  날씨  [    ]`;
		document.getElementById('text6').value = this.nY +"."+ (this.nM + 1) + "." +this.nE;
	}
}
const dates = new mydate();
dates.today();