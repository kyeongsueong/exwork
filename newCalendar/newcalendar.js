class middle{
	constructor(){

	}
	drawBox(){
		this.div = document.querySelector('.middle');
		for (this.i = 1; this.i <= 7; this.i++) {
			this.box1 = document.createElement('div');
			this.box1.className = "inbox";
			this.box1.id = "inbox" + this.i;
			this.div.appendChild(this.box1);
		}
	}
	draw7inbox(){
		for (this.j = 1; this.j <= 7; this.j++) {
			for (this.i = 1; this.i <= 7; this.i++) {
				this.boxid = "inbox" + this.i;
				this.inbox = document.getElementById(this.boxid);

				this.in7box = document.createElement('div');
				this.in7box.className = "in7box";
				this.in7box.id = "in7box" + this.j + "line" + this.i;
				this.in7box.innerHTML = this.i;

				this.inbox.appendChild(this.in7box);
			}
		}
	}
	draw5inbox(){
		for (this.j = 1; this.j <= 7; this.j++) {
			for (this.i = 2; this.i <= 7; this.i++) {
				this.box7id = "in7box" + this.j + "line" + this.i;
				this.in7box = document.getElementById(this.box7id);
				for (this.k = 1; this.k <= 5; this.k++) {
					this.in5box = document.createElement('div');
					this.in5box.className = "in5box";
					this.in5box.id = "in5box" + this.j + "line" + this.k;
					this.in5box.innerHTML = "5box";
					this.in7box.appendChild(this.in5box);
				}								
			}
		}
	}
	korday(){
		this.korDay = ["일","월","화","수","목","금","토"];
		this.dayindex = 0;
		for (this.i = 1; this.i <= 7; this.i++) {
			this.kordayid = "in7box" + this.i + "line1";
			document.getElementById(this.kordayid).innerHTML = this.korDay[this.dayindex];
			this.dayindex++;
		}
		document.getElementById('in7box1line1').style.color = "red";
		document.getElementById('in7box7line1').style.color = "blue";
	}
	drawStartDay(year, month){
		this.startday = new Date(year,month-1,1);
		return this.startday.getDay();
	}
	drawLastDay(year, month){
		this.lastday = new Date(year,month,0);
		return this.lastday.getDate();
	}
}

const drawBoxs = new middle();
drawBoxs.drawBox();
drawBoxs.draw7inbox();
drawBoxs.draw5inbox();
drawBoxs.korday();


function update() {
	drawDays();
}
update();
function drawDays() {
	this.sd = drawBoxs.drawStartDay(2020,9);
	this.ld = drawBoxs.drawLastDay(2020,9);
	for (this.i = 1; this.i <= this.sd; this.i++) {
		this.id = "in5box" + this.i + "line2";
		document.getElementById(this.id).innerHTML = "0";
	}

	for (this.j = 2; this.j <= 7; this.j++) {
		for (this.k = this.sd + 1; this.k <= this.ld + this.sd; this.k++) {
			this.dayid = "in5box" + this.k + "line" + j;
			document.getElementById(this.dayid).innerHTML = this.k;
		}
	}
}