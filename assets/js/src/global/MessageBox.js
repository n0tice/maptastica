// Error lists and titles

var errorMessageArr = new Array()

errorMessageArr[0] = {
	'title': "No matching tips",
	'message': "There are no tips meeting the date you selected."
}

errorMessageArr[1] = {
	'title': "Error loading data",
	'message': "Something went wrong, please try again later. ({str})"
}

errorMessageArr[2] = {
	'title': "Error loading search results",
	'message': "Something went wrong, please try again later."
}

errorMessageArr[3] = {
	'title': "No results",
	'message': "There are no results matching your search: '{str}'"
}

errorMessageArr[4] = {
	'title': "No local tips",
	'message': "There are no tips in your local area."
}

errorMessageArr[5] = {
	'title': "Error",
	'message': "We can’t find your location, please try again later."
}

errorMessageArr[6] = {
	'title': "Error",
	'message': "Oops, we can’t find that tip."
}

errorMessageArr[7] = {
	'title': "Error",
	'message': "Sorry, we can’t find those pins."
}

errorMessageArr[8] = {
	'title': "Error",
	'message': "Sorry, we can’t find those pins."
}

errorMessageArr[9] = {
	'title': "Blank term",
	'message': "Please enter a search term."
}

errorMessageArr[10] = {
	'title': "Error",
	'message': "Sorry, we can’t find any pins for that data set."
}

// Internal Error Codes
// 1001: Issue loading featured reporters data
// 1002: Error loading reviews

// Global Messages / Errors

function showErrorBox( id, str, fatal )
{
	//remove current box
	$("#error-box").remove();

	var message = errorMessageArr[id].message;

	if(str)
	{
		message=message.replace("{str}", str);
	}

	var errorHTML = errorBox
	.replace('{TITLE}',errorMessageArr[id].title)
	.replace('{MESSAGE}',message);

	$("div.wrapper").append( errorHTML );
	$("#error-box-close").click( function( e ){
		e.preventDefault();
		$("#error-box").fadeOut(150,function(){
			$(this).remove();
		});
	});

	// TO-DO add in protection
	/*if( fatal )
	{
		alert("");
	}*/
}