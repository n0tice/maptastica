// Only run this function once everything has been loaded

function setupHeaderBar()
{
	setupSearchBox();

	// Header Items
	if (navigator.geolocation != undefined){
		var openW = 110;
		$('#filter-list').children('li').eq(0)
		.css('width',openW);
		setTimeout(function(){
			$('#find-me').fadeIn();
		},500);
	}else{
	  $('#date-picker').addClass('no-loc');
	}

	//Fits map to markers/clusters only!
	$('#reset-map').click(function(e){
	  e.preventDefault();
	  _gaq.push(['_trackPageview', '/reset-map' ]);
	  if(ib != undefined) ib.close();
	  resetFilter();
	  // resetMarkers(true);
	  resetMarkers();
	  //map.setCenter(ukMapCenter);
	 // map.setZoom(zoomlvl);
	});

	// Show only Guardian pins
	$('#guardian-tips').click(function(e){
	  e.preventDefault();
	  openAuthor(this);
	});

	//find me
	$('#find-me').click(function(){
		_gaq.push(['_trackPageview', '/find-me' ]);

		navigator.geolocation.getCurrentPosition( 
	    function(pos){
	      if(inMapsBounds(pos.coords.latitude,pos.coords.longitude))
	      {
	        resetMap(pos.coords.latitude,pos.coords.longitude,12);
	      }
	      else
	      {
	        showErrorBox( 4 );
	      }

	    },
	    function( error ){
	      showErrorBox( 5 );
	    }
	  );
	  return false;
	});

	//Filter stuff
	$('#filter-form').click(function(e){
		e.preventDefault();
		var dd = $('#filter-dd');
		if( dd.height() <= 0 ){
			var h = dd.children('li').eq(0).outerHeight() * dd.children('li').length;
			if(navigator.userAgent.indexOf('MSIE 7') > -1)
				h = h+7;
			$('#filter-handle').css('background-position','0 0');
			dd.css('height',h);
			setTimeout(function(){bindFilterClose();},500);
		}else{
			$('#filter-handle').css('background-position','0 -48px');
			dd.css('height',0);
			unbindFilterClose();
		}
	});

	function bindFilterClose(){
		$('body').click(function(e){
			$('#filter-handle').css('background-position','0 -48px');
			$('#filter-dd').css('height',0);
	  		unbindFilterClose();	
		});

		$('#filter-dd').bind('click', function(e) {
    		e.stopPropagation();
		});
	}

	function unbindFilterClose(){
		$('body').unbind('click');
		$('#filter-dd').unbind('click');
	}

	$('#filter-dd').children('li').click(function(e){
		e.preventDefault();
		//set dd state & get val
		var dd = $('#filter-dd');
		dd.children('li').removeClass('active');
		var filterVal = $(this).addClass('active').attr('data-value');
		filterType = filterVal;
		$('#current-filter').text(filterVal);
		openFilter(filterVal);
		
		//close dd
		setTimeout(function(){
			$('#filter-form').click();	
		},300);
	});
}