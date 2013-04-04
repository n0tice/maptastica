administratorsArr = new Array('theaelisabet', 'kylife', 'gdngignathan', 'LocalShopFoodBot', 'mattmcalister', 'SarahHartley', 'gdngiganthony', 'topoftheshops');


function getAdministratorsString(){
	if(preModeration){
		return "&votedInterestingBy="+cachedAdmins.join();
	}else{
		return "";
	}
}

function getFilterTagsString(){
		return "";
}

function loadAdmins(){

	if( cachedAdmins.length <= 0 ){

	    var adminNames = [];

		$.ajax({
		  url: 'http://n0ticeapis.com/2/noticeboard/'+n0ticeboardID+'/admins',
		  dataType: 'jsonp',
		  success: function(data){

		    if(data.length > 0) {

		      	for(i in data){
		      		adminNames.push( data[i].username );
		      	}

		      	cachedAdmins = adminNames;

		      	loadLatestReviews();
		    }
		      
		  },
		  error: function(jqXHR, textStatus, errorThrown){
		    showErrorBox( 1, '1002', true );
		  }
		});

	}else{

		loadLatestReviews();

	}



}