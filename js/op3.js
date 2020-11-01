

function vraag(naam,jaar){
	document.write("Hallo " + naam + ", leeftijd is " + jaar + " jaar");
}

var naam = prompt("Hallo, wat is uw naam?");
var jaar = prompt("Hoeveel jaar bent u?");

while(naam != "stop"){
	vraag(naam,jaar);
	naam = prompt("Hallo, wat is uw naam?");
	jaar = prompt("Hoeveel jaar bent u?");
}




