

function buildEmbedCode(key,val){
	var currUrl = embedUrl,
	output;
	if( currUrl.slice(-10) == 'embed.html' ){
		output = currUrl+'?'+key+'='+encodeURIComponent(val);
	}else{
		var startOfKey = currUrl.indexOf(key+'=');
		if( startOfKey > -1 ){//if key already exists
			//find key section
			var endOfKey = currUrl.indexOf('&',startOfKey);
			if(endOfKey == -1)//if key is the last query
				endOfKey = currUrl.length

			var start = currUrl.substr(0,startOfKey),
			end = currUrl.substr(endOfKey,currUrl.length);
			if(val != ''){
				output = start+key+'='+encodeURIComponent(val)+end;
			}else{//if blank value is sent. remove key

				if( start.charAt( start.length-1 ) == '&' ){
					start = start.slice(0, -1)	
				}
				output = start+end;
			}
		}else{
			output = currUrl+'&'+key+'='+encodeURIComponent(val);
		}	
	}

	//work out height. either: no header & no widgets = 459 | header & no widgets = 580 | header & widgets = 828 | no header & widgets = 707
	var height = 469;
	if(output.indexOf('sh=true')> -1 && output.indexOf('w=true') == -1){
		height = 580;
	}else if(output.indexOf('sh=true')> -1 && output.indexOf('w=true') > -1){
		height = 828;
	}else if(output.indexOf('sh=true') == -1 && output.indexOf('w=true') > -1){
		height = 717;
	}

	embedUrl = output;
	var eCode = '<iframe style="border: none; overflow: hidden; height: '+height+'px; width: 600px;" title="" src="'+output+'" frameborder="0" scrolling="no" width="600" height="'+height+'" ></iframe>';
	$('#footer-embed-code').text(eCode);
	$('#embed_code').text(eCode);
}

function embedCodeFromLink(url){
	//work out height. either: no header & no widgets = 459 | header & no widgets = 580 | header & widgets = 828 | no header & widgets = 707
	var height = 469;
	if(url.indexOf('sh=true')> -1 && url.indexOf('w=true') == -1){
		height = 580;
	}else if(url.indexOf('sh=true')> -1 && url.indexOf('w=true') > -1){
		height = 828;
	}else if(url.indexOf('sh=true') == -1 && url.indexOf('w=true') > -1){
		height = 717;
	}

	var eCode = '<iframe style="border: none; overflow: hidden; height: '+height+'px; width: 600px;" title="" src="'+url+'" frameborder="0" scrolling="no" width="600" height="'+height+'" ></iframe>';
	return eCode;
}