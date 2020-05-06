function getInfo() {
	let city = document.getElementById("city").value;
	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	document.cookie ='City='+city+'; expires='+date;

}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}

let a = getCookie("City")
if (a!==undefined){
	document.querySelector('#input_city').style.display = 'none';
	document.querySelector('#greeting').style.display = '';
	document.querySelector('#greeting_text').innerText="Ваш город: "+a
}
