let sideArray = ["사고처리", "노면잡물", "동물사고", "중요시설물", "작업장", "법규위반", "고객지원", "기타", "안개발생", "기타특이사항","회수"];
let side_count = 0;
class create_line {
	constructor(){
		this.ul = document.querySelector('.middle_content');
		this.button = document.createElement('button');

		this.ulbt = document.createElement('ul');
		this.ulbt.className = "middleBtn";

		this.button.innerHTML = "Pls+";
		this.button.id = "PlusBtn";

		this.buttonm = document.createElement('button');
		this.buttonm.innerHTML = "Sbt-";
		this.buttonm.id = "subtraction";

		this.side = document.getElementById('mySidenav');
	}

	create(number, type){
		this.li = document.createElement('li');
		this.li.id = number;
		this.li.innerHTML = number + ".";

		this.div = document.createElement('div');

		this.span = document.createElement('span');
		this.span.className = 'middle_Box';

		this.input_time1 = document.createElement('input');
		this.input_time1.value = ":";
		this.input_time1.className = "middle_write";
		this.input_time1.id = `write${number}_1`;

		this.input_time2 = document.createElement('input');
		this.input_time2.value = ":";
		this.input_time2.className = "middle_write";
		this.input_time2.id = `write${number}_2`;

		this.input_place1 = document.createElement('input');
		this.input_place1.className = "middle_write";
		this.input_place1.id = `write${number}_3`;

		this.input_place2 = document.createElement('input');
		this.input_place2.className = "middle_write";
		this.input_place2.id = `write${number}_4`;

		this.input_km = document.createElement('input');
		this.input_km.value = "km";
		this.input_km.className = "middle_write";
		this.input_km.id = `write${number}_5`;

		this.input_wether = document.createElement('input');
		this.input_wether.className = "middle_writel";
		this.input_wether.id = `write${number}_6`;

		this.li_input = document.createElement('li');

		this.input_content = document.createElement('input');
		this.input_content.className = "middle_write_content";
		this.input_content.id = `write${number}_7`;
		
		if (type == 0) {
			this.ul.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.input_time1);

			this.span.appendChild(this.input_time2);
			this.span.appendChild(this.input_place1);
			this.span.appendChild(this.input_place2);
			this.span.appendChild(this.input_km);
			this.span.appendChild(this.input_wether);

			this.div.appendChild(this.li_input);
			this.li_input.appendChild(this.input_content);

			this.ul.appendChild(this.ulbt);
			this.ulbt.appendChild(this.button);
			this.ulbt.appendChild(this.buttonm);
		}else{
			this.ul.removeChild(this.ul.childNodes[number]);
			this.ul.appendChild(this.ulbt);
			this.ulbt.appendChild(this.button);
			this.ulbt.appendChild(this.buttonm);
		}
	}

	sidevar(){
		for (this.i = 0; this.i < sideArray.length; this.i++) {
			this.a = document.createElement('a');
			this.a.innerHTML = sideArray[this.i];
			this.a.id = "side_Id" + this.i;
			this.a.href = "#";
			this.side.appendChild(this.a);
		}
	}
	sideselect(number, type){
		this.spans = document.createElement('span');
		this.spans.innerHTML = sideArray[number];
		this.ul.appendChild(this.spans);
		
		this.ul.appendChild(this.ulbt);
		this.ulbt.appendChild(this.button);
		this.ulbt.appendChild(this.buttonm);
	}
}

const creat = new create_line();
creat.create(1,0);
creat.sidevar();
let middle_content_count = 1;
document.getElementById('PlusBtn').addEventListener('click', function() {
	middle_content_count++;
	creat.create(middle_content_count,0);
	document.getElementById(`PlusBtn`).focus();
});
document.getElementById('subtraction').addEventListener('click', function() {
	if (middle_content_count > 1) {
		middle_content_count--;
		creat.create(middle_content_count);
	}
});

function side_selecte() {
	for (this.i = 0; this.i < sideArray.length; this.i++) {
		let sideId = "side_Id" + this.i;
		let number = this.i;
		document.getElementById(sideId).addEventListener('click', function() {
			creat.sideselect(number);
		});
	}
}
side_selecte();