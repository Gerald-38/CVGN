$(function(){



//AFFICHAGE DES COMPETENCES//

// *****TOUTES LES COMPETENCES SONT MASQUEES SAUF DEVELOPPEMENT


// $(".devSkillDesc").hide()
$(".learnSkillDesc").hide()
$(".engSkillDesc").hide()
$(".writeSkillDesc").hide()
$(".mngmtSkillDesc").hide()


// *****SCRIPT DU BOUTON DEVELOPPEMENT

$("#devDispSkills").click(function () {
if ( $( ".learnSkillDesc" ).is(":visible")){
$( ".learnSkillDesc" ).hide()
$(".devSkillDesc").slideDown("slow");
}
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".devSkillDesc").slideDown("slow"); 	
 }
else if ( $(".writeSkillDesc" ).is(":visible")){
	$( ".writeSkillDesc" ).hide()
	$(".devSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mngmtSkillDesc" ).is(":visible")){
	$( ".mngmtSkillDesc" ).hide()
	$(".devSkillDesc").slideDown("slow"); 	
 }
else if ( $( ".devSkillDesc" ).is(":hidden")) {
    	$(".devSkillDesc").slideDown("slow");
   }
     else   {
    	$( ".devSkillDesc" ).hide(300);
  }
});


// *****SCRIPT DU BOUTON E-LEARNING

$("#learnDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("slow");
}
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".writeSkillDesc" ).is(":visible")){
	$( ".writeSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mngmtSkillDesc" ).is(":visible")){
	$( ".mngmtSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".learnSkillDesc" ).is(":hidden")) {
 	$(".learnSkillDesc").slideDown("slow");
 }
else  
	{
     	$( ".learnSkillDesc" ).hide(300);
   }
});


// *****SCRIPT DU BOUTON LANGUES

$("#engDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("slow");
}
else if ( $(".learnSkillDesc" ).is(":visible")){
	$( ".learnSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("slow"); 	
 }
else if ( $(".writeSkillDesc" ).is(":visible")){
	$( ".writeSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mngmtSkillDesc" ).is(":visible")){
	$( ".mngmtSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("slow"); 	
 }
else if ( $(".engSkillDesc" ).is(":hidden")) {
 	$(".engSkillDesc").slideDown("slow");
 	}
 	else 
	{
     	$( ".engSkillDesc" ).hide(300);
   }
});

// *****SCRIPT DU BOUTON REDACTION

$("#writeDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".writeSkillDesc").slideDown("slow");
}
else if ( $(".learnSkillDesc" ).is(":visible")){
	$( ".learnSkillDesc" ).hide()
	$(".writeSkillDesc").slideDown("slow"); 	
 }
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".writeSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mngmtSkillDesc" ).is(":visible")){
	$( ".mngmtSkillDesc" ).hide()
	$(".writeSkillDesc").slideDown("slow"); 	
 }
else if ( $(".writeSkillDesc" ).is(":hidden")) {
 	$(".writeSkillDesc").slideDown("slow");
 	}
 	else 
	{
     	$( ".writeSkillDesc" ).hide(300);
   }
});

// *****SCRIPT DU BOUTON MANAGEMENT

$("#mngmtDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".mngmtSkillDesc").slideDown("slow");
}
else if ( $(".learnSkillDesc" ).is(":visible")){
	$( ".learnSkillDesc" ).hide()
	$(".mngmtSkillDesc").slideDown("slow"); 	
 }
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".mngmtSkillDesc").slideDown("slow"); 	
 }
else if ( $(".writeSkillDesc" ).is(":visible")){
	$( ".writeSkillDesc" ).hide()
	$(".mngmtSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mngmtSkillDesc" ).is(":hidden")) {
 	$(".mngmtSkillDesc").slideDown("slow");
 	}
 	else 
	{
     	$( ".mngmtSkillDesc" ).hide(300);
   }
});



// ********** VERSION MOBILE ********** //

// *****TOUTES LES COMPETENCES SONT MASQUEES SAUF DEVELOPPEMENT


// $(".mobDevSkillDesc").hide()
$(".mobLearnSkillDesc").hide()
$(".mobEngSkillDesc").hide()
$(".mobWriteSkillDesc").hide()
$(".mobMngmtSkillDesc").hide()


// *****SCRIPT DU MENU MOBILE

$("#mobMenuDisp").hide()

$("#mobMenuButton").click(function() {
	if ($( "#mobMenuDisp" ).is(":visible")) {
		$("#mobMenuDisp").hide();
	} else {
		$( "#mobMenuDisp").toggle();
	}
});

$("#mobMenuDisp").click(function() {
	$("#mobMenuDisp").hide();
});

$(".sectionContent").click(function() {
	if ($( "#mobMenuDisp" ).is(":visible")) {
	$("#mobMenuDisp").hide();
	}
});

$("#identity").click(function() {
	if ($( "#mobMenuDisp" ).is(":visible")) {
	$("#mobMenuDisp").hide();
	}
});


// *****SCRIPT DU BOUTON DEVELOPPEMENT

$("#mobDevDispSkills").click(function () {
if ( $( ".mobLearnSkillDesc" ).is(":visible")){
$( ".mobLearnSkillDesc" ).hide()
$(".mobDevSkillDesc").slideDown("slow");
}
else if ( $(".mobEngSkillDesc" ).is(":visible")){
	$( ".mobEgSkillDesc" ).hide()
	$(".mobDevSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobWriteSkillDesc" ).is(":visible")){
	$( ".mobWriteSkillDesc" ).hide()
	$(".mobDevSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobMngmtSkillDesc" ).is(":visible")){
	$( ".mobMngmtSkillDesc" ).hide()
	$(".mobDevSkillDesc").slideDown("slow"); 	
 }
else if ( $( ".mobDevSkillDesc" ).is(":hidden")) {
    	$(".mobDevSkillDesc").slideDown("slow");
   }
     else   {
    	$( ".mobDevSkillDesc" ).hide(300);
  }
});


// *****SCRIPT DU BOUTON E-LEARNING

$("#mobLearnDispSkills").click(function () {
if ( $( ".mobDevSkillDesc" ).is(":visible")){ 	
	$( ".mobDevSkillDesc" ).hide()
	$(".mobLearnSkillDesc").slideDown("slow");
}
else if ( $(".mobEngSkillDesc" ).is(":visible")){
	$( ".mobEngSkillDesc" ).hide()
	$(".mobLearnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobWriteSkillDesc" ).is(":visible")){
	$( ".mobWriteSkillDesc" ).hide()
	$(".mobLearnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobMngmtSkillDesc" ).is(":visible")){
	$( ".mobMngmtSkillDesc" ).hide()
	$(".mobLearnSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobLearnSkillDesc" ).is(":hidden")) {
 	$(".mobLearnSkillDesc").slideDown("slow");
 }
else  
	{
     	$( ".mobLearnSkillDesc" ).hide(300);
   }
});


// *****SCRIPT DU BOUTON LANGUES

$("#mobEngDispSkills").click(function () {
if ( $( ".mobDevSkillDesc" ).is(":visible")){ 	
	$( ".mobDevSkillDesc" ).hide()
	$(".mobEngSkillDesc").slideDown("slow");
}
else if ( $(".mobLearnSkillDesc" ).is(":visible")){
	$( ".mobLearnSkillDesc" ).hide()
	$(".mobEngSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobWriteSkillDesc" ).is(":visible")){
	$( ".mobWriteSkillDesc" ).hide()
	$(".mobEngSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobMngmtSkillDesc" ).is(":visible")){
	$( ".mobMngmtSkillDesc" ).hide()
	$(".mobEngSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobEngSkillDesc" ).is(":hidden")) {
 	$(".mobEngSkillDesc").slideDown("slow");
 	}
 	else 
	{
     	$( ".mobEngSkillDesc" ).hide(300);
   }
});

// *****SCRIPT DU BOUTON REDACTION

$("#mobWriteDispSkills").click(function () {
if ( $( ".mobDevSkillDesc" ).is(":visible")){ 	
	$( ".mobDevSkillDesc" ).hide()
	$(".mobWriteSkillDesc").slideDown("slow");
}
else if ( $(".mobLearnSkillDesc" ).is(":visible")){
	$( ".mobLearnSkillDesc" ).hide()
	$(".mobWriteSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobEngSkillDesc" ).is(":visible")){
	$( ".mobEngSkillDesc" ).hide()
	$(".mobWriteSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobMngmtSkillDesc" ).is(":visible")){
	$( ".mobMngmtSkillDesc" ).hide()
	$(".mobWriteSkillDesc").slideDown("slow"); 	
 }
else if ( $(".mobWriteSkillDesc" ).is(":hidden")) {
 	$(".mobWriteSkillDesc").slideDown("slow");
 	}
 	else 
	{
     	$( ".mobWriteSkillDesc" ).hide(300);
   }
});

// *****SCRIPT DU BOUTON MANAGEMENT

$("#mobMngmtDispSkills").click(function () {
if ( $( ".mobDevSkillDesc" ).is(":visible")){ 	
	$( ".mobDevSkillDesc" ).hide()
	$(".mobMngmtSkillDesc").slideDown();
}
else if ( $(".mobLearnSkillDesc" ).is(":visible")){
	$( ".mobLearnSkillDesc" ).hide()
	$(".mobMngmtSkillDesc").slideDown(); 	
 }
else if ( $(".mobEngSkillDesc" ).is(":visible")){
	$( ".mobEngSkillDesc" ).hide()
	$(".mobMngmtSkillDesc").slideDown(); 	
 }
else if ( $(".mobWriteSkillDesc" ).is(":visible")){
	$( ".mobWriteSkillDesc" ).hide()
	$(".mobMngmtSkillDesc").slideDown(); 	
 }
else if ( $(".mobMngmtSkillDesc" ).is(":hidden")) {
 	$(".mobMngmtSkillDesc").slideDown();
 	}
 	else 
	{
     	$( ".mobMngmtSkillDesc" ).hide();
   }
});


// ***** AFFICHAGE DES EXPERIENCES VERSION MOBILE *****//

// ***** Expérience IT *****

$("#xpTitleITMob").click(function() {
	
	// if ($(".clicMob").is(":visible")) {
	// 	$(".clicMob").hide();
	// }
	// else
	// 	$(".clicMob").show();

	if ($( "#paraXpPedago" ).is(":visible")) {
		$("#paraXpPedago").hide();
		$( "#paraXpIT").slideDown();
	}
	else if ($( "#paraXpAdm" ).is(":visible")) {
		$("#paraXpAdm").hide();
		$( "#paraXpIT").slideDown();
	}
	else if ($( "#paraXpIT" ).is(":hidden")) {
		$( "#paraXpIT").slideDown();
	}
	else
		$( "#paraXpIT").hide();
});



// ***** Expérience Pedago ***** 


$("#xpTitlePedagoMob").click(function() {

	// if ($(".clicMob").is(":hidden")) {
	// 	$(".clicMob").show();
	// }

	if ($( "#paraXpIT" ).is(":visible")) {
		$("#paraXpIT").hide();
		$( "#paraXpPedago").slideDown();
	}
	else if ($( "#paraXpAdm" ).is(":visible")) {
		$("#paraXpAdm").hide();
		$( "#paraXpPedago").slideDown();
	}
	else if ($( "#paraXpPedago" ).is(":hidden")) {
		$( "#paraXpPedago").slideDown();
	}
	else
		$( "#paraXpPedago").hide();
});


// ***** Expérience Adm *****


$("#xpTitleAdmMob").click(function() {

	// if ($(".clicMob").is(":hidden")) {
	// 	$(".clicMob").show();
	// }

	if ($( "#paraXpIT" ).is(":visible")) {
		$("#paraXpIT").hide();
		$( "#paraXpAdm").slideDown();
	}
	else if ($( "#paraXpPedago" ).is(":visible")) {
		$("#paraXpPedago").hide();
		$( "#paraXpAdm").slideDown();
	}
	else if ($( "#paraXpAdm" ).is(":hidden")) {
		$( "#paraXpAdm").slideDown();
	}
	else
		$( "#paraXpAdm").hide();
});


// UTILISATION DE L'API OPENSTREETMAP 

	var lat = 45.111510;
	var lon = 5.754132;
	var macarte = null;
	// Fonction d'initialisation de la carte
	function initMap() {
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([lat, lon], 10);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);
    }
	window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
		initMap(); 

	}
});
