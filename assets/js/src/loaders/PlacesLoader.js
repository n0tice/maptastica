// Places Loader

// ----- LOAD PLACES  ----- //

//var tmpPlaces = new Array();

function loadPlaces() {

  var base = (isEmbed550)? '../' : '';
  // If we have already loaded the places we can just reload the cache
  if( cachedPlaces.length == 0 )
  {
    $.ajax({
      url: base+"cache/places2.json",
      dataType: 'json',
      success: function(data){
        var results = data;//.rss.channel.item;

        if(results.length > 0) {

          cachedPlaces = results;
          addPlaces( cachedPlaces );

        }else{
          //dont show an error id there is no places
          //showErrorBox( 1, '1002', true );  
        }
          
      },
      error: function(jqXHR, textStatus, errorThrown){
        showErrorBox( 1, '1002', true );
      }
    });
  }
  else
  {
      addPlaces( cachedPlaces );
  }
}
