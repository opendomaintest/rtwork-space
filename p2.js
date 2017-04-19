  (function(){
    	function html(s){
    		return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    	}
    	var src='<!DOCTYPE html>\n<html>\n'+document.documentElement.innerHTML+'\n<\/html>\n';
    	var quineHtml=html(src);
    	document.getElementById('quine').innerHTML=quineHtml;
    })();
