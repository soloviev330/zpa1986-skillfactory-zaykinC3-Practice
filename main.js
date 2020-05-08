// при нажатии на кнопку "Сохранить" получаем значение города из поля ввода и создаем куки
// в куки записываем значение города и создаем для него дату экспирации +1 день
function getInfo() {
	let city = document.getElementById("city").value;
	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	document.cookie ='City='+city+'; expires='+date;

}
// получаем значение куки по ключу заданному ключу (свойству) и возвращаем его
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}
// получаем значение куки по ключу city и если это значени существует, то
// 1. убираем поле ввода города
// 2. делаем видимым поле с приветствием
// 3. выводим значение города
let a = getCookie("City")
if (a!==undefined){
	document.querySelector('#input_city').style.display = 'none';
	document.querySelector('#greeting').style.display = '';
	document.querySelector('#greeting_text').innerText="Ваш город: "+a
}
