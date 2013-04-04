
var load_handler = function imgSizes(){
	var img = $(this);
	var size = img.attr('width');
    var w = img.width();
    var h = img.height();
	if(w > h && size != ''){
		img.attr({'height':'','width':size}).css('margin-left',- ((img.width() - size) / 2) + 'px' );
    }else{
        img.css('opacity','1.0');
    }
}

function rebindResize(){
	$('#map-logo').unbind('filter')
	.filter(function() {
		return this.complete;
	}).each(load_handler).end().load(load_handler);
}

function openMapGate(){
	$('#noticeboard-gate').addClass('show');
	setTimeout(function(){
		$('#site-header').addClass('open-noticeboard-gate');
		$('#map-function').css('height','34px');
		$('#re-embed').fadeIn(100);
	},350);	
}

function shouldMinimiseFooter(){
	var wH = $(window).height(),
	cH = $('div.wrapper').outerHeight()-79,
	fH = 208;

	if( wH < 786 || (wH >= 786 && (cH+fH) >= wH) ){
		return true;
	}else{
		return false;
	}

}

function setFooterControlsState(state,fromZclip){
	var footer = $('div.footer-controls');

	if(state == 'full'){
		var wH = $(window).height(),
			cH = $('div.wrapper').outerHeight()-79,
			fH = 208,
			spaceLeft = wH - cH,
			footerOffset = spaceLeft - fH;

			if( wH < 786 || footerOffset < 0 ) footerOffset = 0;

			footer
			.removeClass('no-show')
			.addClass('open')
			.css('bottom',footerOffset+'px');

		$('#change-footer-state').addClass('minus');	
	}else if(state == 'minimised'){
		footer
		.removeClass('no-show open')
		.css('bottom','-139px');
		$('#change-footer-state').removeClass('minus');
	}else if(state == 'closed'){
		footer
		.removeClass('open')
		.addClass('no-show')
		.css('bottom','-210px');
	}
}

function setMapHeaderState(state){
	var header = $('#editable-header');
	if(state == 'open'){
		header
			.removeClass('live-view')
			.css('height','120px')
			.children('div')
				.children('#map-logo')
					.removeClass('hidden3');
		$('#map-instructions').show();
		$('#map-title').show();
		setTimeout(function(){ header.addClass('editable-panel'); },410);	
	}else if(state == 'active'){
		header.children('div').removeClass('faded-out');
	}else if(state == 'inactive'){
		header.children('div').addClass('faded-out');
	}else if(state == 'closed'){
		header
			.removeClass('editable-panel')
			.css('height','0');
	}
}

function setMapWidgetsState(state){
	var widgetCont = $('#editable-widgets');
	if(state == 'open'){
		widgetCont
			.removeClass('live-view')
			.css('height','248px')
			.children('div.half-size-div')
				.removeClass('live-view');
		setTimeout(function(){ widgetCont.removeClass('hidden2').addClass('editable-panel'); },410);
	}else if(state == 'active'){
		widgetCont.children('div.half-size-div').removeClass('faded-out');
	}else if(state == 'inactive'){
		widgetCont.children('div.half-size-div').addClass('faded-out');
	}else if(state == 'closed'){
		widgetCont
			.removeClass('editable-panel')
			.addClass('hidden2')
			.css('height','0');
	}
}

function setMapFooterState(state){
	var footer = $('#editable-footer');
	if(state == 'open'){

			footer
				.removeClass('live-view')
				.css('width','290px')
				.addClass('editable-panel')
				.removeClass('hidden3');

	}else if(state == 'closed'){
		footer
			.removeClass('editable-panel')
			.addClass('hidden3')
			.css('width','0');
	}
}

function setOptionPanelState(state){
	if(state == 'open'){
		$('div.option-panel').addClass('open');
	}else if(state == 'closed'){
		$('div.option-panel').removeClass('open');
	}
}

function resetMapAfterOptionsChange(){
	resetMarkersForNewBoard();
	loadAdmins();//this will call loadlatestreviews after
}

function setPageOpenMap(){
	openMapGate();
	setTimeout(function(){
		setFooterControlsState('full');
	},900);	
}

function performRequiredOpening(zclip){
	if( $('#toggle-edit-mode').attr('data-edit') == 'on' ){
		$('#toggle-edit-mode').click();
		setTimeout(function(){
			setFooterControlsState('full',zclip);
		},1000);
	}else{
		setFooterControlsState('full',zclip);
	}
}

/*function copyCode(s){
	
}*/

$('#change-footer-state').click(function(e){
	e.preventDefault();

	if( $('div.footer-controls').hasClass('open') ){
		setFooterControlsState('minimised');
	}else{
		performRequiredOpening();
	}
});

$('#noticeboard-url-btn').click(function(e){
	e.preventDefault();
	var url = $('#noticeboard-url').val(),
	output;
	//validation 
	if(url == ''){
		alert('You must enter a URL.');
	}else if(url.indexOf('.n0tice.co') < 0){
		alert('This is not a n0tice URL.');
	}else{
		//set title and image links
		var outwardLink = (url.indexOf('http://') == -1)? 'http://'+url : url;
		$('#map-logo').children('a').attr('href',outwardLink).parent()
		.siblings('#explanation').children('#map-title').children('a').attr('href',outwardLink);
		//get board name from url	
		output = url.replace('https://','').replace('http://','');
		output = output.split('.');
		n0ticeboardID = output[0];
		
		$('#demo-pin').fadeOut(150,function(){ $(this).remove(); });
		resetMapAfterOptionsChange();

		buildEmbedCode('nb',n0ticeboardID); 
	}
});

$('#noticeboard-url').focus(function(){
	if( $(this).val() == 'Enter your n0ticeboard URL' )
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == '' )
		$(this).val('Enter your n0ticeboard URL');
})
.keypress(function(e){
	if( e.keyCode == 13 )
		$('#noticeboard-url-btn').click();
});

$("#get-embed-btn").click(function(e) {
    e.preventDefault();
});


$('#toggle-edit-mode').click(function(e){
	e.preventDefault();
	if( $(this).attr('data-edit') == 'off' ){//switch to edit mode
		$(this).attr('data-edit','on').text('Preview');

		var toTime = 0;
		var wH = $(window).height(),
		cH = ($('body').hasClass('hash'))? 1135 : 1035,
		fH = 208,
		spaceLeft = wH - cH,
		footerOffset = spaceLeft - fH;
		if(footerOffset < 20){
			setFooterControlsState('minimised');
			toTime = 550;
		}else{
			$('div.footer-controls').css('bottom',footerOffset+'px');	
		}

		$('#re-embed').fadeOut(100);
		setTimeout(function(){
			setMapHeaderState('open');
			setMapWidgetsState('open');
			setMapFooterState('open');

			setTimeout(function(){
				setOptionPanelState('open');
			},550);

		},toTime);
	}else{//finished editing mode
		$(this).attr('data-edit','off').text('Edit');
		setOptionPanelState('closed');

		setTimeout(function(){
			//removed or preview unused sections
			var baseTime = 0;

			//header
			if(  !$('#show-header').attr('checked') || ( $('#map-instructions').text() == '' && ($('#edit-map-title').val() == 'Add a title and hit enter' || $('#edit-map-title').val() == '') && ( $('#map-logo').attr('style') == undefined || $('#map-logo').attr('style') == '') ) ){
				setMapHeaderState('closed');
			}else{
				if( $('#map-instructions').text() == ''){
					$('#map-instructions').hide();
				}
				if( $('#edit-map-title').val() == 'Add a title and hit enter' || $('#edit-map-title').val() == ''){
					$('#map-title').hide();
				}
				if( $('#map-logo').attr('style') == undefined || $('#map-logo').attr('style') == ''){
					$('#map-logo').addClass('hidden3');
				}

				$('#editable-header').addClass('live-view');
			}

			//mid
			setTimeout(function(){
				if( $('#show-widgets').attr('checked') ){
					$('#editable-widgets').addClass('live-view')
					.children('div.half-size-div').addClass('live-view');
				}else{
					setMapWidgetsState('closed');
					baseTime = baseTime + 550;
				}
			},baseTime);

			//footer
			setTimeout(function(){
				if( $('li.edit-social-link.done').length > 0 ){
					$('#editable-footer').addClass('live-view');
				}else{
					setMapFooterState('closed');
					//baseTime = baseTime + 450;
				}

				if(!shouldMinimiseFooter()){
					setTimeout(function(){
						setFooterControlsState('full');
					},500);
				}

				setTimeout(function(){
					$('#re-embed').fadeIn(100);
				},500)
			},baseTime);


		},450);
	}
});

$('#edit-map-logo').change(function(e){
	var that = $(this);
 	if( that.attr('checked') ){
 		$('#edit-map-logo-cont').addClass('on');
 	}else{
 		$('#edit-map-logo-cont').removeClass('on done');
 		$('#remove-image').css('opacity', 0);
 		buildEmbedCode('i',''); 
 	}
});

$('#img-url').focus(function(){
	if( $(this).val() == 'Paste your URL and hit enter' )
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == '' )
		$(this).val('Paste your URL and hit enter');
})
.keypress(function(e){
	var that = $(this);
 	if( e.keyCode == 13 ){
 		var url = that.val();
 		if(url == '' || !isURL(url) ){
 			that.val('');
 			alert('You must use a valid url');
 		}else{
 			buildEmbedCode('i',url);
 			var styleVal = 'background-image: url('+url+')';
 			$('#map-logo').attr('style', styleVal);

 			if(isOldIE){
		    	setTimeout(function(){
		        	$('#map-logo').css( "background-size", "cover" );
		    	},1000);
		    }

 			$('#edit-map-logo-cont').addClass('done');
 			$('#remove-image').css('opacity', 1);
 			setTimeout(function(){ 
 				$('#edit-map-logo-cont').addClass('hide');
 			},400);
 		}
 	}
});

$('#remove-image').click(function(e){
	e.preventDefault();
	var checkbox = $('#edit-map-logo');
 	if( checkbox.attr('checked') ){
 		checkbox.removeAttr('checked')
 		.change();
 		$('#map-logo').attr('style','background-image: url()')
 		.removeAttr('style');
 		if(isOldIE){
	        $('#map-logo').children('img').remove();
	    }
 		$('#edit-map-logo-cont').removeClass('on done')
 		.children('#img-url').val('Paste your URL and hit enter');
 		buildEmbedCode('i','');
 	}
});

$('#show-header').change(function(e){
	var that = $(this);
 	if( that.attr('checked') ){
 		setMapHeaderState('active');
 		buildEmbedCode('sh','true'); 
 	}else{
 		setMapHeaderState('inactive');
 		buildEmbedCode('sh','false'); 
		$('#edit-map-title-cont').removeClass('hide');
 	}
});

$('#edit-map-title').focus(function(){
	if( $(this).val() == 'Add a title and hit enter')
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == '')
		$(this).val('Add a title and hit enter');
})
.keyup(function(e){
	var title = $(this).val();
	var siteTitle = ( title == '')? '\u00A0' : title;
	$('#map-title').children('a').text(siteTitle);
	buildEmbedCode('t',title); 
	if( e.keyCode == 13 && title != '' && title != 'Add a title and hit enter'){	
		$('#edit-map-title-cont').addClass('hide');	
	}
	
});

$('#edit-map-hash').focus(function(){
	if( $(this).val() == 'Write a description of your map')
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == '')
		$(this).val('Write a description of your map');
})
.keyup(function(e){
	var text = $(this).val();
	if(text.length < 140){
		$('#map-instructions').text(text);
		buildEmbedCode('d',text); 
	}else{
		var allowed = text.substr(0,140);
		$('#edit-map-hash').val(allowed);
	}
});


$('#edit-map-logo-cont.hide,#edit-map-title-cont.hide,#edit-map-hash-cont.hide').live('click',function(e){
	e.preventDefault();
	$(this).removeClass('hide')
});

$('input.toggle-social-link').change(function(e){
	var that = $(this);
 	if( that.attr('checked') ){
 		that.parent('li.edit-social-link').addClass('on');
 	}else{
 		that.parent('li.edit-social-link').removeClass('on done');
 		var service = that.attr('id').replace('foot-','').replace('-url','').replace('edit-','');
 		buildEmbedCode(service,''); 
 		setSocialUrls(service,'');
 	}
});




if (swfobject.hasFlashPlayerVersion("9.0.18")) {
  $("#get-embed-btn").zclip({
  	path:'assets/swf/ZeroClipboard.swf',
  	copy:function(){return $('#footer-embed-code').val();},
  	beforeCopy:function(){
		//performRequiredOpening('true');
		$('#footer-embed-code').select();
	},
	afterCopy:function(){
		alert("The embed code has been copied to your clipboard.");
		performRequiredOpening(true);
	}
});
}else {
  $("#get-embed-btn").click(function(e) {
    e.preventDefault();
	    performRequiredOpening();
		$('#footer-embed-code').select();
		setTimeout(function(){ alert('Please copy the selected code below to embed your map.'); },1300);
	});
}


$('input.social-link-tb').focus(function(){
	if( $(this).val() == 'add a url and hit enter' )
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == '' )
		$(this).val('add a url and hit enter');
})
.keypress(function(e){
	var that = $(this);
 	if( e.keyCode == 13 ){
 		var url = that.val();
 		var service = that.attr('id').replace('foot-','').replace('-url','').replace('edit-','');
 		if(service == 'gp' && url.indexOf('plus.google') < 0){
 			alert('You must use a valid Google+ url');
 		}else if(service == 'fb' && url.indexOf('facebook.') < 0){
 			alert('You must use a valid Facebook url');
 		}else if(service == 'tw' && url.indexOf('twitter.') < 0){
 			alert('You must use a valid Twitter url');
 		}else{
 			if( url.indexOf('http') != 0 ) 
                url = 'http://'+url;
 			buildEmbedCode(service, url); 
 			setSocialUrls(service,url);
 			that.parent('li.edit-social-link').addClass('done');
 		}
 	}
});

$('#show-widgets').change(function(e){
	var that = $(this);
 	if( that.attr('checked') ){
 		setMapWidgetsState('active');
 		buildEmbedCode('w', 'true'); 
 	}else{
 		setMapWidgetsState('inactive');
 		buildEmbedCode('w', 'false'); 
 	}
});

$('input.color-scheme').change(function(e){
	var that = $(this);
 	if( that.attr('checked') ){
 		var c = that.val();
 		//change class for site colours
 		$('div.wrapper').attr('class','wrapper '+c);
 		//set map colour globar and change map
 		mapColour = c
 		map.setMapTypeId(c);

 		buildEmbedCode('c', c );

 		forceResetMarkers(true);
 	}
});

$('#map-loc-switch').click(function(e){
	e.preventDefault();
	var that = $(this);
	var z = map.getZoom(),
	lat = map.getCenter().lat().toString(),
	lng = map.getCenter().lng().toString(),
	loc = lat.substr(0,6)+','+lng.substr(0,6);

	that
	.siblings('#map-loc-clear').removeClass('hidden')
	.siblings('#map-loc-divi').removeClass('hidden');
	//.siblings('#map-loc').html('Loc: '+loc+'<br/>Zoom: '+z);

	//save default data
	savedZoomlvl = zoomlvl;
	savedMapCenter = ukMapCenter;
	//update globals
    ukMapCenter = new google.maps.LatLng(lat, lng);
    overideClusterBounds = true;
	zoomlvl = z;

 	buildEmbedCode('loc', lat+','+lng);
 	buildEmbedCode('z', z );
});

$('#map-loc-clear').click(function(e){
	e.preventDefault();
	var that = $(this);

	that
	.addClass('hidden')
	.siblings('#map-loc-divi').addClass('hidden');
	//.siblings('#map-loc').text('');

	//reset default data
	zoomlvl = savedZoomlvl;
	ukMapCenter = savedMapCenter;
    overideClusterBounds = false;

    //reset map view
    if(ib != undefined) ib.close();
	resetFilter();
	resetMarkers();

 	buildEmbedCode('loc', '' );
 	buildEmbedCode('z', '' );
});

$('#map-tags-switch').change(function(e){
	var that = $(this);
	var ta = $('#tag-filter-ta');
 	if( that.attr('checked') ){
 		if(ta.val() != '' && ta.val() != 'Add word(s) and hit enter' ){//if user has alread entered in then filter
 			var val = $.trim(ta.val());
	 		ta.blur();
	 		initFilterPosts(val);
 		}else{
 			ta.focus();
 		}
 	}else{
 		ta.val('').blur();
 		buildEmbedCode('tl','');
		adminFilterTerm = undefined;
		resetMapAfterOptionsChange();
 	}
});

$('#tag-filter-ta').focus(function(){
	if( $(this).val() == 'Add word(s) and hit enter' )
		$(this).val('');
})
.blur(function(){
	if( $(this).val() == ''){
		if($('#map-tags-switch').attr('checked') && adminFilterTerm != undefined){
			$(this).val( adminFilterTerm );
		}else{
			$(this).val('Add word(s) and hit enter');
			$('#map-tags-switch').removeAttr('checked');
		}
	}
})
.keypress(function(e){
	var that = $(this);
 	if( e.keyCode == 13 ){
 		e.preventDefault();
 		if(that.val() != ''){
 			var val = $.trim(that.val());
	 		$('#map-tags-switch').attr('checked','checked');
	 		that.blur();

	 		initFilterPosts(val);
 		}else{
 			$('#map-tags-switch')
 			.removeAttr('checked')
 			.change();
 		}
 	}
});

function initFilterPosts(q){
	buildEmbedCode('tl',q);
	adminFilterTerm = q;
	//initSearch(q,true);
	resetMapAfterOptionsChange();
}

$('span.tool-tip-btn').hover(function(){
	var text = $(this).attr('data-desc'),
	pos = $(this).offset(),
	tooltip = '<div class="tool-tip" style="top:'+pos.top+'px;left:'+(pos.left+20)+'px;">'+text+'</div>';
	$('body').append(tooltip);
	$('div.tool-tip').css('opacity',1);
},function(){
	$('div.tool-tip')
		.css('opacity',0)
		.remove();
	
});















