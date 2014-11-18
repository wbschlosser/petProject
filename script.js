var images= new Array()
images[0]="images/petpedia-image1.jpg";
images[1]="images/petpedia-image2.jpg";
images[2]="images/petpedia-image3.jpg";
images[3]="images/petpedia-image4.jpg";
setInterval("changeImage()",5000);
var fade = true;
var x=0;
function changeImage(){
	document.getElementById("testing").src=images[x]
	//fadeImg(images[x], 100, true);
	//setInterval("changeImage()",5000);
	x++;
	if(x >= images.length){
		x=0;
	}
}
/*
function fadeImg(el, val, fade){
	if(fade===true){
		val--;
	}
	else{
		val++;
	}
	if(val > 0 && val < 100){
		el.style.opacity = val/100;
		setTimeout(function(){fadeImg(el,val,fade);},10);
	}
}
*/

/*Accordion magic*/
var accordionItems = new Array();
function init() {

    // Grab the accordion items from the page
    var divs = document.getElementsByTagName( 'div' );
    for ( var i = 0; i < divs.length; i++ ) {
		if ( divs[i].className == 'accordionItem' ) accordionItems.push( divs[i] );
    }

      // Assign onclick events to the accordion item headings
    for ( var i = 0; i < accordionItems.length; i++ ) {
        var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
        h2.onclick = toggleItem;
    }

      // Hide all accordion item bodies except the first
    for ( var i = 1; i < accordionItems.length; i++ ) {
        accordionItems[i].className = 'accordionItem hide';
    }
}

function toggleItem() {
	var itemClass = this.parentNode.className;

	// Hide all items
	for ( var i = 0; i < accordionItems.length; i++ ) {
		accordionItems[i].className = 'accordionItem hide';
	}
	
	// Show this item if it was previously hidden
	if ( itemClass == 'accordionItem hide' ) {
		this.parentNode.className = 'accordionItem';
	}
}

function getFirstChildWithTagName( element, tagName ) {
	for ( var i = 0; i < element.childNodes.length; i++ ) {
		if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
	}
}
