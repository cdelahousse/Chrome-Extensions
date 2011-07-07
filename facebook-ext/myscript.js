var email_elem = document.getElementById('email'),
	email_address = "christian.delahousse@gmail.com",
	email_field_focused = false;

if (	email_elem //Does the email input exist? It should only be present on login pages
	&&	email_elem.nodeName === "INPUT" 
	&&	email_elem.getAttribute('type') === "text") {

	email_elem.value = email_address;
		
	var pass_elem = document.getElementById('pass');
	pass_elem.focus();
	
	//FB tries to set focus on the username field. After their script does this, this script 
	//changes focus to the password field.
	email_elem.onfocus = function(){
		if (email_field_focused == false) {

			email_field_focused = true;
			pass_elem.focus();
			
		}
	}
}
