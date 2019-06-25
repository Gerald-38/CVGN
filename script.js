$(function(){



//AFFICHAGE DES COMPETENCES//

// *****TOUTES LES COMPETENCES SONT MASQUEES


$(".devSkillDesc").hide()
$(".learnSkillDesc").hide()
$(".engSkillDesc").hide()
// $("#map").hide()




// *****SCRIPT DU BOUTON DEVELOPPEMENT

// $("#devDispSkills").click(function() {
//   $(".devSkillDesc").toggle( "slow" );
// });

// $("#devDispSkills").click(function () {
// if ( $( ".learnSkillDesc" ).is(":visible")){
// $( ".learnSkillDesc" ).toggle("slow")
// $(".devSkillDesc").toggle("slow");
// }
// else if ( $(".engSkillDesc" ).is(":visible")){
// 	$( ".engSkillDesc" ).toggle("slow")
// 	$(".devSkillDesc").toggle("slow"); 	
//  }
// else if ( $( ".devSkillDesc" ).is(":hidden")) {
//     	$(".devSkillDesc").toggle("slow");
//    }
//      else   {
//     	$( ".devSkillDesc" ).toggle("slow");
//   }
// });


$("#devDispSkills").click(function () {
if ( $( ".learnSkillDesc" ).is(":visible")){
$( ".learnSkillDesc" ).hide()
$(".devSkillDesc").slideDown("fast");
}
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".devSkillDesc").slideDown("fast"); 	
 }
else if ( $( ".devSkillDesc" ).is(":hidden")) {
    	$(".devSkillDesc").slideDown("fast");
   }
     else   {
    	$( ".devSkillDesc" ).hide();
  }
});

// *****SCRIPT DU BOUTON E-LEARNING

// $("#learnDispSkills").click(function() {
//   $(".learnSkillDesc").toggle( "slow" );
// });

// $("#learnDispSkills").click(function () {
// if ( $( ".devSkillDesc" ).is(":visible")){ 	
// 	$( ".devSkillDesc" ).toggle("slow")
// 	$(".learnSkillDesc").toggle("slow");
// }
// else if ( $(".engSkillDesc" ).is(":visible")){
// 	$( ".engSkillDesc" ).toggle("slow")
// 	$(".learnSkillDesc").toggle("slow"); 	
//  }
// else if ( $(".learnSkillDesc" ).is(":hidden")) {
//  	$(".learnSkillDesc").toggle("slow");
//  }
// else  
// 	{
//      	$( ".learnSkillDesc" ).toggle("slow");
//    }
// });


$("#learnDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("fast");
}
else if ( $(".engSkillDesc" ).is(":visible")){
	$( ".engSkillDesc" ).hide()
	$(".learnSkillDesc").slideDown("fast"); 	
 }
else if ( $(".learnSkillDesc" ).is(":hidden")) {
 	$(".learnSkillDesc").slideDown("fast");
 }
else  
	{
     	$( ".learnSkillDesc" ).hide();
   }
});


// *****SCRIPT DU BOUTON ANGLAIS

// $("#engDispSkills").click(function() {
//   $(".engSkillDesc").toggle( "slow" );
// });


// $("#engDispSkills").click(function () {
// if ( $( ".devSkillDesc" ).is(":visible")){ 	
// 	$( ".devSkillDesc" ).toggle("slow")
// 	$(".engSkillDesc").toggle("slow");
// }
// else if ( $(".learnSkillDesc" ).is(":visible")){
// 	$( ".learnSkillDesc" ).toggle("slow")
// 	$(".engSkillDesc").toggle("slow"); 	
//  }
// else if ( $(".engSkillDesc" ).is(":hidden")) {
//  	$(".engSkillDesc").toggle("slow");
//  	}
//  	else 
// 	{
//      	$( ".engSkillDesc" ).toggle("slow");
//    }
// });


$("#engDispSkills").click(function () {
if ( $( ".devSkillDesc" ).is(":visible")){ 	
	$( ".devSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("fast");
}
else if ( $(".learnSkillDesc" ).is(":visible")){
	$( ".learnSkillDesc" ).hide()
	$(".engSkillDesc").slideDown("fast"); 	
 }
else if ( $(".engSkillDesc" ).is(":hidden")) {
 	$(".engSkillDesc").slideDown("fast");
 	}
 	else 
	{
     	$( ".engSkillDesc" ).hide();
   }
});







// // ANIMATION ET AGRANDISSEMENT D'UNE DIV

// $('button').on('click',function() {
// 	$('#essaiAnim').animate({
// 				left: '700px',
// 				width: '+=200px',
// 				height: '+=200px' },2000);

// });


	var lat = 45.1119444;
	var lon = 5.76083333;
	var macarte = null;
	// Fonction d'initialisation de la carte
	function initMap() {
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([lat, lon], 11);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);
    }
	// window.onload = function(){
	// 	// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
	// 	initMap(); 

	// }

var dispMat = document.getElementById('showMap');

dispMat.onclick = initMap;


});









