let sideArray = ["일지", "사고처리", "노면잡물", "동물사고", "중요시설물", "작업장", "법규위반", "고객지원", "기타", "안개발생",
 "기타특이사항"];
let buttonName = ["Pls+","Sbt-"];
let plusbtName = ["PlusBtn", "btAccident" , "btFalling", "btAnimal", "btImportant",
 "btWorkplace", "btLaw", "btCustomer", "btEtc", "btFog", "btUnique"];
let subtbtName = ["subtraction", "btAccidentm", "btFallingm" , "btAnimalm",
 "btImportantm", "btWorkplacem", "btLawm", "btCustomerm", "btEtcm", "btFogm", "btUniquem"];
let pagesName = ["write", "Accidentm_write", "Falling_write", "Animal_write", "Important_write",
 "Workplace_write", "Law_write", "Customer_write", "Etc_write", "Fog_write", "Unique_write"];
let side_count = 0;
class createBt_date{
	constructor(){
		this.day = new Date();
		this.nE = this.day.getDate();
		this.nY = this.day.getFullYear();
		this.nM = this.day.getMonth();
		this.nHours = this.day.getHours();
		this.nMinut = this.day.getMinutes();
		
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

		this.btFalling = document.createElement('button');
		this.btFalling.innerHTML = buttonName[0];
		this.btFalling.className = "plusBt";
		this.btFalling.id = "btFalling";

		this.btFallingm = document.createElement('button');
		this.btFallingm.innerHTML = buttonName[1];
		this.btFallingm.className = "subtractionBt"
		this.btFallingm.id = "btFallingm";

		this.btAnimal = document.createElement('button');
		this.btAnimal.innerHTML = buttonName[0];
		this.btAnimal.className = "plusBt";
		this.btAnimal.id = "btAnimal";

		this.btAnimalm = document.createElement('button');
		this.btAnimalm.innerHTML = buttonName[1];
		this.btAnimalm.className = "subtractionBt"
		this.btAnimalm.id = "btAnimalm";

		this.btImportant = document.createElement('button');
		this.btImportant.innerHTML = buttonName[0];
		this.btImportant.className = "plusBt";
		this.btImportant.id = "btImportant";

		this.btImportantm = document.createElement('button');
		this.btImportantm.innerHTML = buttonName[1];
		this.btImportantm.className = "subtractionBt"
		this.btImportantm.id = "btImportantm";

		this.btWorkplace = document.createElement('button');
		this.btWorkplace.innerHTML = buttonName[0];
		this.btWorkplace.className = "plusBt";
		this.btWorkplace.id = "btWorkplace";

		this.btWorkplacem = document.createElement('button');
		this.btWorkplacem.innerHTML = buttonName[1];
		this.btWorkplacem.className = "subtractionBt"
		this.btWorkplacem.id = "btWorkplacem";

		this.btLaw = document.createElement('button');
		this.btLaw.innerHTML = buttonName[0];
		this.btLaw.className = "plusBt";
		this.btLaw.id = "btLaw";

		this.btLawm = document.createElement('button');
		this.btLawm.innerHTML = buttonName[1];
		this.btLawm.className = "subtractionBt"
		this.btLawm.id = "btLawm";

		this.btCustomer = document.createElement('button');
		this.btCustomer.innerHTML = buttonName[0];
		this.btCustomer.className = "plusBt";
		this.btCustomer.id = "btCustomer";

		this.btCustomerm = document.createElement('button');
		this.btCustomerm.innerHTML = buttonName[1];
		this.btCustomerm.className = "subtractionBt"
		this.btCustomerm.id = "btCustomerm";

		this.btEtc = document.createElement('button');
		this.btEtc.innerHTML = buttonName[0];
		this.btEtc.className = "plusBt";
		this.btEtc.id = "btEtc";

		this.btEtcm = document.createElement('button');
		this.btEtcm.innerHTML = buttonName[1];
		this.btEtcm.className = "subtractionBt"
		this.btEtcm.id = "btEtcm";

		this.btFog = document.createElement('button');
		this.btFog.innerHTML = buttonName[0];
		this.btFog.className = "plusBt";
		this.btFog.id = "btFog";

		this.btFogm = document.createElement('button');
		this.btFogm.innerHTML = buttonName[1];
		this.btFogm.className = "subtractionBt"
		this.btFogm.id = "btFogm";

		this.btUnique = document.createElement('button');
		this.btUnique.innerHTML = buttonName[0];
		this.btUnique.className = "plusBt";
		this.btUnique.id = "btUnique";

		this.btUniquem = document.createElement('button');
		this.btUniquem.innerHTML = buttonName[1];
		this.btUniquem.className = "subtractionBt"
		this.btUniquem.id = "btUniquem";

	}
}
class create_line extends createBt_date {
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
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[0]);
		this.li = document.createElement('li');
		this.li.id = number;
		this.li.innerHTML = number + ".";

		this.div = document.createElement('div');

		this.span = document.createElement('span');
		this.span.className = 'middle_Box';

		this.input_time1 = document.createElement('input');
		this.input_time1.value = `${this.nHours}:${this.nMinut}`;
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
		this.input_wether.value = "//";
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
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[1]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.text = document.createElement('textarea');
		this.text.id = "accident_write" + number;
		this.text.className = "text_write";
		this.text.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "사고처리";
		
		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.text);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAccident);
			this.ulbt.appendChild(this.btAccidentm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAccident);
			this.ulbt.appendChild(this.btAccidentm);
		}
	}
	createFallingobjects(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[2]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `falling_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "노면잡물";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFalling);
			this.ulbt.appendChild(this.btFallingm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFalling);
			this.ulbt.appendChild(this.btFallingm);
		}
	}
	createAnimal(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[3]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `animal_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "동물사고";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAnimal);
			this.ulbt.appendChild(this.btAnimalm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAnimal);
			this.ulbt.appendChild(this.btAnimalm);
		}
	}
	createImportant(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[4]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `important_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "중요시설물";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btImportant);
			this.ulbt.appendChild(this.btImportantm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btImportant);
			this.ulbt.appendChild(this.btImportantm);
		}
	}
	createWorkplace(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[5]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `workplace_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "작업장";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btWorkplace);
			this.ulbt.appendChild(this.btWorkplacem);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btWorkplace);
			this.ulbt.appendChild(this.btWorkplacem);
		}
	}
	createLaw(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[6]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `law_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "법규위반";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btLaw);
			this.ulbt.appendChild(this.btLawm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btLaw);
			this.ulbt.appendChild(this.btLawm);
		}
	}
	createCustomer(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[7]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `customer_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "고객지원";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btCustomer);
			this.ulbt.appendChild(this.btCustomerm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btCustomer);
			this.ulbt.appendChild(this.btCustomerm);
		}
	}
	createEtc(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[8]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		this.li.innerHTML = number + ".";
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `etc_write${number}`;
		this.input.value = `${this.nHours}:${this.nMinut}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "기타";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btEtc);
			this.ulbt.appendChild(this.btEtcm);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btEtc);
			this.ulbt.appendChild(this.btEtcm);
		}
	}
	createFog(number, type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[9]);
		this.li = document.createElement('li');
		this.li.id = number;
		this.li.innerHTML = number + ".";

		this.div = document.createElement('div');

		this.span = document.createElement('span');
		this.span.className = 'middle_Box';

		this.input_nosun = document.createElement('input');
		this.input_nosun.className = "middle_write";
		this.input_nosun.placeholder = "노선명";
		this.input_nosun.id = `fog${number}_1`;

		this.input_place = document.createElement('input');
		this.input_place.className = "middle_write";
		this.input_place.placeholder = "안개발생 위치";
		this.input_place.id = `fog${number}_2`;

		this.input_time = document.createElement('input');
		this.input_time.value = `${this.nHours}:${this.nMinut}`;
		this.input_time.className = "middle_write";
		this.input_time.id = `fog${number}_3`;

		this.input_kmSee = document.createElement('input');
		this.input_kmSee.className = "middle_write";
		this.input_kmSee.placeholder = "시정거리";
		this.input_kmSee.id = `fog${number}_4`;

		this.input_fogAccident = document.createElement('input');
		this.input_fogAccident.className = "middle_write";
		this.input_fogAccident.placeholder = "사고발생";
		this.input_fogAccident.id = `fog${number}_5`;

		this.input_fogEtc = document.createElement('input');
		this.input_fogEtc.className = "middle_write";
		this.input_fogEtc.placeholder = "기타";
		this.input_fogEtc.id = `fog${number}_6`;

		
		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.input_nosun);
			this.span.appendChild(this.input_place);
			this.span.appendChild(this.input_time);
			this.span.appendChild(this.input_kmSee);
			this.span.appendChild(this.input_fogAccident);
			this.span.appendChild(this.input_fogEtc);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFog);
			this.ulbt.appendChild(this.btFogm);
		}else{
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFog);
			this.ulbt.appendChild(this.btFogm);
		}
	}
	createUnique(number,type){
		this.day = new Date();
		this.nHours = `0${this.day.getHours()}`;
		this.nMinut = `0${this.day.getMinutes()}`;
		if (this.nHours.length > 2) {
			this.nHours = this.day.getHours();
		}
		if (this.nMinut.length > 2) {
			this.nMinut = this.day.getMinutes();
		}
		this.page = document.getElementById(pagesName[10]);
		this.div = document.createElement('div');
		this.li = document.createElement('li');
		
		this.span = document.createElement('span');
		this.span.className = "middle_Box";
		this.input = document.createElement('input');
		this.input.className = "middle_write_content";
		this.input.id = `unique_write${number}`;
		this.spans = document.createElement('span');
		this.spans.innerHTML = "기타특이사항";

		if (type == 0) {
			this.page.appendChild(this.div);
			this.div.appendChild(this.span);
			this.span.appendChild(this.li);
			this.span.appendChild(this.spans);
			this.div.appendChild(this.input);

			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btUnique);
			this.ulbt.appendChild(this.btUniquem);
		}else{
			console.log(this.page.childNodes[0]);
			this.page.removeChild(this.page.childNodes[number]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btUnique);
			this.ulbt.appendChild(this.btUniquem);
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
		}else if (number == 2) {
			this.page = document.getElementById(pagesName[2]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFalling);
			this.ulbt.appendChild(this.btFallingm);
			return sideArray[number];
		}else if (number == 3) {
			this.page = document.getElementById(pagesName[3]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btAnimal);
			this.ulbt.appendChild(this.btAnimalm);
			return sideArray[number];
		}else if (number == 4) {
			this.page = document.getElementById(pagesName[4]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btImportant);
			this.ulbt.appendChild(this.btImportantm);
			return sideArray[number];
		}else if (number == 5) {
			this.page = document.getElementById(pagesName[5]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btWorkplace);
			this.ulbt.appendChild(this.btWorkplacem);
			return sideArray[number];
		}else if (number == 6) {
			this.page = document.getElementById(pagesName[6]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btLaw);
			this.ulbt.appendChild(this.btLawm);
			return sideArray[number];
		}else if (number == 7) {
			this.page = document.getElementById(pagesName[7]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btCustomer);
			this.ulbt.appendChild(this.btCustomerm);
			return sideArray[number];
		}else if (number == 8) {
			this.page = document.getElementById(pagesName[8]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btEtc);
			this.ulbt.appendChild(this.btEtcm);
			return sideArray[number];
		}else if (number == 9) {
			this.page = document.getElementById(pagesName[9]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btFog);
			this.ulbt.appendChild(this.btFogm);
			return sideArray[number];
		}else if (number == 10) {
			this.page = document.getElementById(pagesName[10]);
			this.page.appendChild(this.ulbt);
			this.ulbt.appendChild(this.btUnique);
			this.ulbt.appendChild(this.btUniquem);
			return sideArray[number];
		}
	}
	removeAllchilde(number){
		this.remove = document.getElementById(pagesName[number]);
		while (this.remove.hasChildNodes()) {
			this.remove.removeChild(this.remove.firstChild);
		}
		while (this.ulbt.hasChildNodes()) {
			this.ulbt.removeChild(this.ulbt.firstChild);
		}
	}
}

const creat = new create_line();
creat.sidevar();
creat.pages();
let middle_content_count = 0;
let middle_content_accident = 0;
let middle_content_falling = 0;
let middle_content_animal = 0;
let middle_content_important = 0;
let middle_content_workplace = 0;
let middle_content_law = 0;
let middle_content_customer = 0;
let middle_content_etc = 0;
let middle_content_fog = 0;
let middle_content_unique = 0;

function count_ready() {
	middle_content_count = 0;
	middle_content_accident = 0;
	middle_content_falling = 0;
	middle_content_animal = 0;
	middle_content_important = 0;
	middle_content_workplace = 0;
	middle_content_law = 0;
	middle_content_customer = 0;
	middle_content_etc = 0;
	middle_content_fog = 0;
	middle_content_unique = 0;
}
function formdatewrite() {
	this.m = `0${creat.nM + 1}`;
	if (this.m.length > 2) {
		this.m = creat.nM + 1;
	};
	this.d = `0${creat.nE}`;
	if (this.d.length > 2) {
		this.d = creat.nE;
	};
	document.getElementById('nY').value = creat.nY;
	document.getElementById('nM').value = this.m;
	document.getElementById('nD').value = this.d;
}
formdatewrite();
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
			case 2:
				middle_content_falling++;
				creat.createFallingobjects(middle_content_falling,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 3:
				middle_content_animal++;
				creat.createAnimal(middle_content_animal,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 4:
				middle_content_important++;
				creat.createImportant(middle_content_important,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 5:
				middle_content_workplace++;
				creat.createWorkplace(middle_content_workplace,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 6:
				middle_content_law++;
				creat.createLaw(middle_content_law,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 7:
				middle_content_customer++;
				creat.createCustomer(middle_content_customer,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 8:
				middle_content_etc++;
				creat.createEtc(middle_content_etc,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 9:
				middle_content_fog++;
				creat.createFog(middle_content_fog,0);
				document.getElementById(plusbtName[type]).focus();
				break;
			case 10:
				if (middle_content_unique < 1) {
					middle_content_unique++;
					creat.createUnique(middle_content_unique,0);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
		}
	};
	document.getElementById(subtbtName[type]).onclick = function () {
		switch (type){
			case 0:
				if (middle_content_count > 0) {
					middle_content_count--;
					creat.create(middle_content_count);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 1:
				if (middle_content_accident > 0) {
					middle_content_accident--;
					creat.createAccident(middle_content_accident);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 2:
				if (middle_content_falling > 0) {
					middle_content_falling--;
					creat.createFallingobjects(middle_content_falling);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 3:
				if (middle_content_animal > 0) {
					middle_content_animal--;
					creat.createAnimal(middle_content_animal);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 4:
				if (middle_content_important > 0) {
					middle_content_important--;
					creat.createImportant(middle_content_important);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 5:
				if (middle_content_workplace > 0) {
					middle_content_workplace--;
					creat.createWorkplace(middle_content_workplace);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 6:
				if (middle_content_law > 0) {
					middle_content_law--;
					creat.createLaw(middle_content_law);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 7:
				if (middle_content_customer > 0) {
					middle_content_customer--;
					creat.createCustomer(middle_content_customer);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 8:
				if (middle_content_etc > 0) {
					middle_content_etc--;
					creat.createEtc(middle_content_etc);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 9:
				if (middle_content_fog > 0) {
					middle_content_fog--;
					creat.createFog(middle_content_fog);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
			case 10:
				if (middle_content_unique > 0) {
					middle_content_unique--;
					creat.createUnique(middle_content_unique);
					document.getElementById(plusbtName[type]).focus();
				}
				break;
		}
	};
	
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
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "사고처리") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "노면잡물") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "동물사고") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "중요시설물") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "작업장") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "법규위반") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "고객지원") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "기타") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "안개발생") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}else if (selecte == "기타특이사항") {
				button_event(number);
				closeNav();
				document.getElementById(plusbtName[number]).focus();
			}
		});
	}
}
side_selecte();

let data_Object = {
	"users" : [],
	"patrol_save" : [],
	"Accident_save" : [],
	"Falling_save" : [],
	"Aniaml_save" : [],
	"Important_save" : [],
	"Workplace_save" : [],
	"Law_save" : [],
	"Customer_save" : [],
	"Etc_save" : [],
	"Fog_save" : [],
	"Unique_save" : [],
};

let data_index = 0;
let user_Data = ["worktime", "nY", "nM", "nD", "user1", "user2", "nosun"];
function no_imfo_set() {
	this.ro = middle_content_count;
	this.leng = (this.ro-1)/3 + "";
	if (this.leng.length > 2) {
		this.lengTemp = this.leng.substring(0,1);
		this.leng = (this.lengTemp-0) + 1;
	}else{
		this.leng;
	} 
	document.getElementById('nob1').innerHTML = this.leng;
	document.getElementById('nob2').innerHTML = middle_content_accident;
	document.getElementById('nob3').innerHTML = middle_content_falling;
	document.getElementById('nob4').innerHTML = middle_content_animal;
	document.getElementById('nob5').innerHTML = middle_content_important;
	document.getElementById('nob6').innerHTML = middle_content_workplace;
	document.getElementById('nob7').innerHTML = middle_content_law;
	document.getElementById('nob8').innerHTML = middle_content_customer;
}
function saves(type, type2) {
	this.user_select_ary = ["저장 하시겠습니까?","일지를 제출 하시겠습니까?"];
	if (type2 == 1) {
		this.user_select = confirm(user_select_ary[1]);
	}else{
		this.user_select = confirm(user_select_ary[0]);
	}
	if (this.user_select) {
		if (type == 1) {
			this.worktime = document.getElementById(user_Data[0]).value;
			if (this.worktime == "근무") {
				alert("근무-> 초, 중, 말번을 선택해주세요");
			}
		}

		for (this.user_index = 0; this.user_index < user_Data.length; this.user_index++) {
			data_Object.users[user_index] = document.getElementById(user_Data[user_index]).value;

		}

		for (this.patrol_i = 1; this.patrol_i <= middle_content_count; this.patrol_i++) {
			for (this.patrol_j = 1; this.patrol_j <= 7; this.patrol_j++) {
				this.id_name = `write${this.patrol_i}_${this.patrol_j}`;
				data_Object.patrol_save[data_index] = document.getElementById(this.id_name).value;
				data_index++;
			}
		}
		data_index = 0;

		for (this.accident_index = 1; this.accident_index <= middle_content_accident; this.accident_index ++) {
			this.id_name = `accident_write${this.accident_index}`;
			data_Object.Accident_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.falling_index = 1; this.falling_index <= middle_content_falling; this.falling_index ++) {
			this.id_name = `falling_write${this.falling_index}`;
			data_Object.Falling_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.animal_index = 1; this.animal_index <= middle_content_animal; this.animal_index ++) {
			this.id_name = `animal_write${this.animal_index}`;
			data_Object.Aniaml_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.important_index = 1; this.important_index <= middle_content_important; this.important_index ++) {
			this.id_name = `important_write${this.important_index}`;
			data_Object.Important_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.workplace_index = 1; this.workplace_index <= middle_content_workplace; this.workplace_index ++) {
			this.id_name = `workplace_write${this.workplace_index}`;
			data_Object.Workplace_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.law_index = 1; this.law_index <= middle_content_law; this.law_index ++) {
			this.id_name = `law_write${this.law_index}`;
			data_Object.Law_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.customer_index = 1; this.customer_index <= middle_content_customer; this.customer_index ++) {
			this.id_name = `customer_write${this.customer_index}`;
			data_Object.Customer_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.etc_index = 1; this.etc_index <= middle_content_etc; this.etc_index ++) {
			this.id_name = `etc_write${this.etc_index}`;
			data_Object.Etc_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;

		for (this.fog_i = 1; this.fog_i <= middle_content_fog; this.fog_i++) {
			for (this.fog_j = 1; this.fog_j <= 6; this.fog_j++) {
				this.id_name = `fog${this.fog_i}_${this.fog_j}`;
				data_Object.Fog_save[data_index] = document.getElementById(this.id_name).value;
				data_index++;
			}
		}
		data_index = 0;

		for (this.unique_index = 1; this.unique_index <= middle_content_unique; this.unique_index ++) {
			this.id_name = `unique_write${this.unique_index}`;
			data_Object.Unique_save[data_index] = document.getElementById(this.id_name).value;
			data_index++;
		}
		data_index = 0;
		
		no_imfo_set();

		console.log(middle_content_fog);
		count_ready();
		this.data_tmp = JSON.stringify(data_Object);
		console.log(this.data_tmp);
		localStorage.setItem("now_save_data", this.data_tmp);
		localStorage.setItem("temp_save_data", this.data_tmp);
		document.getElementById('patrolcontent').value = this.data_tmp;
		finde_search();
		write_now();
	}else{
		return 0;
	}
}
function finde_search() {
	//this.time = document.getElementById('worktime').value + " ";
	this.user1 = document.getElementById('user1').value+ " ";
	this.user2 = document.getElementById('user2').value+ " ";
	this.nosun = document.getElementById('nosun').value+ " ";
	this.data = `${creat.nM + 1}월`;
	/*
	this.data = 
	`${creat.nY}${creat.nM + 1}${creat.nE}
	 ${creat.nY} ${creat.nM + 1} ${creat.nE}
	 ${creat.nY}년${creat.nM + 1}월${creat.nE}일
	 ${creat.nY}/${creat.nM + 1}/${creat.nE}/
	 ${creat.nY}.${creat.nM + 1}.${creat.nE}.
	 `;
	 */
	document.getElementById('findecontent').value = this.data + this.user1 + this.user2 + this.nosun;
}
function remove_page_item() {
	for (this.i = 0; this.i < pagesName.length; this.i++) {
		creat.removeAllchilde(this.i);
	}
}
function nowloadfile() {
	count_ready();
	remove_page_item();
	data_index = 0;
	this.dataObj = JSON.parse(localStorage.getItem("now_save_data"));
	this.data = dataObj.users;
	
	for (this.user_index = 0; this.user_index < user_Data.length; this.user_index++) {
		document.getElementById(user_Data[user_index]).value = this.data[user_index];
	}

	this.data = dataObj.patrol_save;
	for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length/7; this.patrol_create_draw++) {
		creat.create(this.patrol_create_draw,0);
		middle_content_count = this.patrol_create_draw;
		button_event(0);
	}
	for (this.patrol_j = 1; this.patrol_j <= this.data.length/7; this.patrol_j++) {
		for (this.patrol_i = 1; this.patrol_i <= 7; this.patrol_i++) {
			this.id_name = `write${this.patrol_j}_${this.patrol_i}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Accident_save;
	if (this.data != undefined) {
		creat.sideselect(1);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createAccident(this.patrol_create_draw,0);
			middle_content_accident = this.patrol_create_draw;
			button_event(1);
		}

		for (this.accident_index = 1; this.accident_index <= middle_content_accident; this.accident_index ++) {
			this.id_name = `accident_write${this.accident_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Falling_save;
	if (this.data != undefined) {
		creat.sideselect(2);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createFallingobjects(this.patrol_create_draw,0);
			middle_content_falling = this.patrol_create_draw;
			button_event(2);
		}

		for (this.falling_index = 1; this.falling_index <= middle_content_falling; this.falling_index ++) {
			this.id_name = `falling_write${this.falling_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Aniaml_save;
	if (this.data != undefined) {
		creat.sideselect(3);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createAnimal(this.patrol_create_draw,0);
			middle_content_animal = this.patrol_create_draw;
			button_event(3);
		}

		for (this.animal_index = 1; this.animal_index <= middle_content_animal; this.animal_index ++) {
			this.id_name = `animal_write${this.animal_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Important_save;
	if (this.data != undefined) {
		creat.sideselect(4);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createImportant(this.patrol_create_draw,0);
			middle_content_important = this.patrol_create_draw;
			button_event(4);
		}

		for (this.important_index = 1; this.important_index <= middle_content_important; this.important_index ++) {
			this.id_name = `important_write${this.important_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Workplace_save;
	if (this.data != undefined) {
		creat.sideselect(5);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createWorkplace(this.patrol_create_draw,0);
			middle_content_workplace = this.patrol_create_draw;
			button_event(5);
		}

		for (this.workplace_index = 1; this.workplace_index <= middle_content_workplace; this.workplace_index ++) {
			this.id_name = `workplace_write${this.workplace_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Law_save;
	if (this.data != undefined) {
		creat.sideselect(6);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createLaw(this.patrol_create_draw,0);
			middle_content_law = this.patrol_create_draw;
			button_event(6);
		}

		for (this.law_index = 1; this.law_index <= middle_content_law; this.law_index ++) {
			this.id_name = `law_write${this.law_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Customer_save;
	if (this.data != undefined) {
		creat.sideselect(7);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createCustomer(this.patrol_create_draw,0);
			middle_content_customer = this.patrol_create_draw;
			button_event(7);
		}

		for (this.customer_index = 1; this.customer_index <= middle_content_customer; this.customer_index ++) {
			this.id_name = `customer_write${this.customer_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Etc_save;
	if (this.data != undefined) {
		creat.sideselect(8);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createEtc(this.patrol_create_draw,0);
			middle_content_etc = this.patrol_create_draw;
			button_event(8);
		}

		for (this.etc_index = 1; this.etc_index <= middle_content_etc; this.etc_index ++) {
			this.id_name = `etc_write${this.etc_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;

	this.data = dataObj.Fog_save;
	if (this.data != undefined) {
		creat.sideselect(9);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length/6; this.patrol_create_draw++) {
			creat.createFog(this.patrol_create_draw,0);
			middle_content_fog = this.patrol_create_draw;
			button_event(9);
		}

		for (this.fog_j = 1; this.fog_j <= this.data.length/6; this.fog_j++) {
			for (this.fog_i = 1; this.fog_i <= 6; this.fog_i++) {
				this.id_name = `fog${this.fog_j}_${this.fog_i}`;
				document.getElementById(this.id_name).value = this.data[data_index];
				data_index++;
			}
		}
	}
	data_index = 0;

	this.data = dataObj.Unique_save;
	if (this.data != undefined) {
		creat.sideselect(10);
		for (this.patrol_create_draw = 1; this.patrol_create_draw <= this.data.length; this.patrol_create_draw++) {
			creat.createUnique(this.patrol_create_draw,0);
			middle_content_unique = this.patrol_create_draw;
			button_event(10);
		}

		for (this.unique_index = 1; this.unique_index <= middle_content_unique; this.unique_index ++) {
			this.id_name = `unique_write${this.unique_index}`;
			document.getElementById(this.id_name).value = this.data[data_index];
			data_index++;
		}
	}
	data_index = 0;
}

