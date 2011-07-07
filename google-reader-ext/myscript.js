var fs_chrome_header = document.getElementById('chrome-header'),
	fs_chrome_body = document.getElementsByTagName('body')[0],
	fs_chrome_toggle = document.getElementById('chrome-fullscreen-top-toggle'),
	fs_chrome_viewer_header = document.getElementById('viewer-header'); //TD

addAttribute(fs_chrome_body, 'class', 'fullscreen lhn-hidden'); //fix lhn hidden, maybe with onload?
addAttribute(fs_chrome_header, 'class', 'hidden');
addAttribute(fs_chrome_viewer_header, 'class', 'hidden');

fs_chrome_toggle.setAttribute('class', '');

function addAttribute(elem, attr, val){
	val =  elem.getAttribute(attr) + ' ' + val;
	elem.setAttribute(attr,val)
}
