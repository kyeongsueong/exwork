let sideArray = ["일지", "사고처리", "노면잡물", "동물사고", "중요시설물", "작업장", "법규위반", "고객지원", "기타", "안개발생", "기타특이사항","회수"];
let buttonName = ["Pls+","Sbt-"];
let plusbtName = ["PlusBtn", "btAccident"];
let subtbtName = ["subtraction", "btAccidentm"];
let pagesName = ["write", "Accidentm_write"];
let side_count = 0;
class createBt{
	constructor(){
		this.button = document.createElement('button');
		this.button.innerHTML = buttonName[0];
		this.button.className = "plusBt";
		this.button.id = "PlusBtn";

		this.buttonm = document.createElement('button');
		this.buttonm.innerHTML = buttonName[1];
		this.buttonm.className = "subtractionBt"
		this.buttonm.id = "subtraction";

		this.btAccident = document.createElement('button');
		this.btAccident.innerHTML = buttonName[0];
		this.btAccident.className = "plusBt";
		this.btAccident.id = "btAccident";

		this.btAccidentm = document.createElement('button');
		this.btAccidentm.innerHTML = buttonName[1];
		this.btAccidentm.className = "subtractionBt"
		this.btAccidentm.id = "btAccidentm";
	}
}
class create_line extends createBt {
	constructor(){
		super();
		this.ul = document.querySelector('.middle_content');
	
		this.ulbt = document.createElement('ul');
		this.ulbt.className = "middleBtn";

		this.side = document.getElementById('mySidenav');

	}
	pages(){
		for (this.i = 0; this.i < pagesName.length; this.i++) {
			this.pages = document.createElement('li');
			this.pages.id = pagesName[this.i];
			this.ul.appendChild(this.pages);
		}
	}
	create(number, type){
		this.page = document.getElementById(pagesName[0]);
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
			this.page.appendChild(this.div);
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

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.button);
			this.ulbt.appendChild(this.buttonm);
		}else{
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.button);
			this.ulbt.appendChild(this.buttonm);
		}
	}
	createAccident(number, type){
		this.page = document.getElementById(pagesName[1]);
		this.spans = document.createElement('span');
		this.spans.innerHTML = "사고처리";
		this.page.appendChild(this.spans);
		if (type == 0) {
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAccident);
			this.ulbt.appendChild(this.btAccidentm);
		}else{
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAccident);
			this.ulbt.appendChild(this.btAccidentm);
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
		console.log(this.spans);
		
		while (this.ulbt.hasChildNodes()) {
			this.ulbt.removeChild(this.ulbt.firstChild);
		}
		
		if (number == 0) {
			this.page = document.getElementById(pagesName[0]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.button);
			this.ulbt.appendChild(this.buttonm);
			return sideArray[number];
		}else if (number == 1) {
			this.page = document.getElementById(pagesName[1]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAccident);
			this.ulbt.appendChild(this.btAccidentm);
			return sideArray[number];
		}
	}
}

const creat = new create_line();
creat.sidevar();
creat.pages();
let middle_content_count = 0;
let middle_content_accident = 0;


function button_event(type) {
	document.getElementById(plusbtName[type]).onclick = function () {
		switch (type){
			case 0:
				middle_content_count++;
				creat.create(middle_content_count,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 1:
				middle_content_accident++;
				creat.createAccident(middle_content_accident,0);
				document.getElementById(plusbtName[type]).focus();
				break;
		}
	};
	document.getElementById(subtbtName[type]).onclick = function () {
		switch (type){
			case 0:
				if (middle_content_count > 0) {
					middle_content_count--;
					creat.create(middle_content_count);
				}
				break;
			case 1:
				if (middle_content_accident > 0) {
					middle_content_accident--;
					creat.createAccident(middle_content_accident);
				}
				break;
		}
	};
	// document.getElementById('PlusBtn').addEventListener('click', function() {
	// 	if (type == "일지") {
	// 		middle_content_count++;
	// 		creat.create(middle_content_count,0);
	// 	}else if (type == "사고처리") {
	// 		middle_content_accident++;
	// 		creat.createAccident(middle_content_accident,0);
	// 	}
		
	// 	document.getElementById('PlusBtn').focus();
	// });
	// document.getElementById('subtraction').addEventListener('click', function() {
		
	// 	if (type == "일지") {
	// 		if (middle_content_count > 0) {
	// 			middle_content_count--;
	// 			creat.create(middle_content_count);
	// 		}
	// 	}else if (type == "사고처리") {
	// 		if (middle_content_accident > 0) {
	// 			middle_content_accident--;
	// 			creat.createAccident(middle_content_accident);
	// 		}
	// 	}
		
	// });
}
function side_selecte() {
	for (this.i = 0; this.i < sideArray.length; this.i++) {
		let sideId = "side_Id" + this.i;
		let number = this.i;
		document.getElementById(sideId).addEventListener('click', function() {
			let selecte = creat.sideselect(number);
			if (selecte == "일지") {
				button_event(number);
				closeNav();
			}else if (selecte == "사고처리") {
				button_event(number);
				closeNav();
			}
		});
		
	}
}
side_selecte();