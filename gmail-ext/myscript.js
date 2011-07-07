var email_elem = document.getElementById('Email');

if (email_elem.nodeName === "INPUT" && email_elem.getAttribute('type') === "text") {

	email_elem.value = "christian.delahousse@gmail.com";

	document.getElementById('Passwd').focus();
}
