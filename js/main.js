// при нажатии на кнопку "Сохранить" получаем значение города из поля ввода и создаем куки
// в куки записываем значение города и создаем для него дату экспирации +1 день
function getInfo() {
	let city = document.getElementById("city").value;
	if (city!==""){
	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	document.cookie =encodeURIComponent('City')+'='+encodeURIComponent(city)+'; expires='+date+'; path=/';
}
}

function clearCity() {
  var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
	document.querySelector('#input_city').style.display = '';
	document.querySelector('#greeting').style.display = 'none';
	document.querySelector('#greeting_text').innerText="Ваш город: "+nameCity
}


// получаем значение куки по ключу заданному ключу (свойству) и возвращаем его
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		'(?:^|\s)' + name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
// получаем значение куки по ключу city и если это значени существует, то
// 1. убираем поле ввода города
// 2. делаем видимым поле с приветствием
// 3. выводим значение города

let nameCity = getCookie('City')
if (nameCity!==undefined){
	document.querySelector('#input_city').style.display = 'none';
	document.querySelector('#greeting').style.display = '';
	document.querySelector('#greeting_text').innerText="Ваш город: "+nameCity
}

// создаем пустой массив и обходим все элементы формы с тегом input и типом чекбокс
// нажатой галке назначаем 1, а если галки нет, то 0. Далее строим массив из запомненных положений
// также проверяем, нажата ли хоть одна галка. если не нажата, то ничего не делаем
// а если хоть одна галка нажата, то записываем массив в localStorage в виде JSON
let elements = document.forms[0].querySelectorAll("input[type='checkbox']")
function saveChk(){
const mem = [];
for (let i=0; i<elements.length; i++) {
	let element = elements[i];
	if (element.checked == true) {
		mem.push(1)
	}
	else {
		mem.push(0)
	}
}
console.log(mem)
// здесь передаем в локальное хранилище именно JSON, чтобы потом не работать со строкой
localStorage.setItem("chk", JSON.stringify(mem))
}

// заводим в переменную значение из локалсторидж по ключу chk, затем проверяем
// если в хранилище по этому ключу есть что-то, то получаем массив
let chk = JSON.parse(localStorage.getItem('chk'))
console.log(chk)
if (chk!==null) {
	for (let i=0; i<chk.length;i++) {
		elements[i].checked=chk[i]
	}
}



