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

// AFFICHAGE DES DONNEES DE CONTACT //

// lES DONNEES DE CONTACT SON MASQUEES //

// $(".numTel").hide()
// $(".adrDesc").hide()
// $(".mailDesc").hide()
// $(".mapDesc").hide()

// *****SCRIPT DU BOUTON Tel (Essayer de voir si c'est plus intéressant avec switch)


// $("#telDisp").click(function () {
// if ( $(".mailDesc" ).is(":visible")){
// 	$( ".mailDesc" ).hide()
// 	$(".numTel").slideDown("fast"); 	
//  }
// else if ( $( ".adrDesc" ).is(":visible")){ 	
// 	$( ".adrDesc" ).hide()
// 	$(".numTel").slideDown("fast");
// }
// else if ( $(".mapDesc" ).is(":visible")){
// 	$( ".mapDesc" ).hide()
// 	$(".numTel").slideDown("fast"); 	
//  }
// else if ( $(".numTel" ).is(":hidden")) {
//  	$(".numTel").slideDown("fast");
//  	}
//  	else 
// 	{
//      	$( ".numTel" ).hide();
//    }
// });




// *****SCRIPT DU BOUTON Mail


// $("#mailDisp").click(function () {
// if ( $( ".numTel" ).is(":visible")){ 	
// 	$( ".numTel" ).hide()
// 	$(".mailDesc").slideDown("fast");
// }
// else if ( $(".adrDesc" ).is(":visible")){
// 	$( ".adrDesc" ).hide()
// 	$(".mailDesc").slideDown("fast"); 	
//  }
// else if ( $(".mapDesc" ).is(":visible")){
// 	$( ".mapDesc" ).hide()
// 	$(".mailDesc").slideDown("fast"); 	
//  }
// else if ( $(".mailDesc" ).is(":hidden")) {
//  	$(".mailDesc").slideDown("fast");
//  	}
//  	else 
// 	{
//      	$( ".mailDesc" ).hide();
//    }
// });


// *****SCRIPT DU BOUTON Adresse


// $("#adrDisp").click(function () {
// if ( $( ".numTel" ).is(":visible")){ 	
// 	$( ".numTel" ).hide()
// 	$(".adrDesc").slideDown("fast");
// }
// else if ( $(".mailDesc" ).is(":visible")){
// 	$( ".mailDesc" ).hide()
// 	$(".adrDesc").slideDown("fast"); 	
//  }
// else if ( $(".mapDesc" ).is(":visible")){
// 	$( ".mapDesc" ).hide()
// 	$(".adrDesc").slideDown("fast"); 	
//  }
// else if ( $(".adrDesc" ).is(":hidden")) {
//  	$(".adrDesc").slideDown("fast");
//  	}
//  	else 
// 	{
//      	$( ".adrDesc" ).hide();
//    }
// });


// *****SCRIPT DU BOUTON Localisation


// $("#showMap").click(function () {
// if ( $( ".numTel" ).is(":visible")){ 	
// 	$( ".numTel" ).hide()
// 	$(".mapDesc").slideDown("fast");
// }
// else if ( $(".mailDesc" ).is(":visible")){
// 	$( ".mailDesc" ).hide()
// 	$(".mapDesc").slideDown("fast"); 	
//  }
// else if ( $(".adrDesc" ).is(":visible")){
// 	$( ".adrDesc" ).hide()
// 	$(".mapDesc").slideDown("fast"); 	
//  }
// else if ( $(".mapDesc" ).is(":hidden")) {
//  	$(".mapDesc").slideDown("fast");
//  	}
//  	else 
// 	{
//      	$( ".mapDesc" ).hide();
//    }
// });




// // ANIMATION ET AGRANDISSEMENT D'UNE DIV

// $('button').on('click',function() {
// 	$('#essaiAnim').animate({
// 				left: '700px',
// 				width: '+=200px',
// 				height: '+=200px' },2000);

// });


// UTILISATION DE L'API OPENSTREETMAP 

	var lat = 45.111510;
	var lon = 5.754132;
	var macarte = null;
	// Fonction d'initialisation de la carte
	function initMap() {
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([lat, lon], 11);
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

// var dispMat = document.getElementById('showMap');

// dispMat.onclick = initMap;

});









