
function openEmbedBox(){
	var eCode = '<iframe style="border: none; overflow: hidden; height: 600px; width: 600px;" title="#n0ticeMap" src="'+embedUrl+'" frameborder="0" scrolling="no" width="600" height="600" ></iframe>';
	var eBox = embedBox
	.replace('{TITLE}','Embed')
	.replace('{CODE}',eCode)
	.replace('{MESSAGE}','Add this code to your blog to embed the map. <a href="'+embedUrl+'">Link</a>');

	$("div.wrapper").append( eBox );
	$("#error-box-close").click( function( e ){
		e.preventDefault();
		$("#embed-box").fadeOut(150,function(){
			$(this).remove();
		});
	});

	$("#embed_code").focus(function(){
		$(this).select();
	})
	.mouseup(function(e) { 
		return false;
	});

}