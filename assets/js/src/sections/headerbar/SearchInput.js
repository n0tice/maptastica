// Search Box

function showSearchDetail( str )
{
  isDefaultMap = false;

  $("#search-box").val( str )
  .attr("readonly",true)
  .addClass('clear')
  .blur()
  .siblings("#search-map").addClass('clear');
}

function resetSearchDetail()
{
	isDefaultMap = true;

	$("#search-box").val( "Search keywords or location" )
	.attr("readonly", false)
	.removeClass('clear')
	.blur()
	.siblings("#search-map").removeClass('clear');
}

function searchButtonClicked()
{
	// if(isDefaultMap || filterType != 'all')
	// {
	// 	$('#searching-map').text('Go').attr('id','search-map')
	// 	.siblings('#search-box').val('Search keywords or location');

	// 	var q = $('#search-box').val();
	// 	if(q != '' && q != 'Search keywords or location'){
	// 		searchReviews(q);
	// 	}else{
	// 		showErrorBox( 9 );
	// 		$('#searching-map').text('Go').attr('id','search-map')
	// 		.siblings('#search-box').val('');
	// 	}
	// } else {
	// 	resetMarkers();
	// }
}

function initSearch(q,filter){
	if(q != '' && q != 'Search keywords or location'){
		if(!isDefaultMap)
			filterType = 'all';
		searchReviews(q,filter);
	}else{
		showErrorBox( 9 );
		resetSearchDetail();
	}		
}

function setupSearchBox(){
	$('#search-map').unbind('click');
	$('#search-map').click(function( e ){
		e.preventDefault();
		if($(this).hasClass('clear')){//if clear btn
			resetMarkers();
		}else{//if go btn
			var q = $('#search-box').val();
			initSearch(q);
			showSearchDetail( "Searching...");
		}
		//searchButtonClicked();
	});

	// Focus stuff

	$('#search-box').focus(function(){
		if($(this).val() == 'Search keywords or location')
	  		$(this).val('');
	})
	.blur(function(){
		if($(this).val() == '')
	 		$(this).val('Search keywords or location');
	})
	.keypress(function(e){
		if(e.keyCode == 13){
		 	e.preventDefault();
		  	if( $(this).siblings('a.search-btn').is('#search-map') && $('#search-box').val() != "Searching..."){
		    	var q = $('#search-box').val();
				initSearch(q);
				showSearchDetail("Searching...");
		  	}
		}
	});
}