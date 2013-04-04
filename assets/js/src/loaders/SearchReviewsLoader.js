// ----- SEARCH FUNCTIONS ----- //

// Search function

var is_guardianmusic = false;
var searchReviewsArr = new Array();

function searchReviews(q, adminFilter, repeat){

  var resultsPerCall = (maxPinsOnMap < 100)? maxPinsOnMap : 100;

  if(repeat != true)
  {
    searchReviewsArr = [];
    searchLocationsArr = [];
  }
    
  //if(!adminFilter)  
   //   showSearchDetail( "Searching..." , false);

  //set up search query (tag on filter if filtered)
  var query = encodeURIComponent(q);
  // if(adminFilterTerm != undefined && adminFilterTerm != '' && adminFilterTerm != q){
  //     query = encodeURIComponent(adminFilterTerm+' '+q);
  // }

  //search keywords
  var url = "http://n0ticeapis.com/2/search?noticeboard=" + n0ticeboardID + "&pageSize="+resultsPerCall+"&q="+query+getAdministratorsString()+"&maximumFlags="+maximumFlags;

  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data){
        if(data.results.length > 0){
          searchReviewsArr = searchReviewsArr.concat( data.results );//add to search Array
        }

        if(adminFilter){
            showSearchData(q,adminFilter);
        }else{
            is_guardianmusic = false;
            searchForLocations(q);
        }  
    },
    error: function(jqXHR, textStatus, errorThrown){//search error
        showErrorBox( 2 );
        resetSearchDetail();
    }
  });
}

// Search For Locations

// Run after we get the first set of search results for location based.
function searchForLocations( q ){

  //search keywords

  $.ajax({
    url: "http://n0ticeapis.com/2/search?noticeboard=" + n0ticeboardID + "&pageSize=100&location="+encodeURIComponent(q)+getAdministratorsString()+"&maximumFlags="+maximumFlags,
    dataType: 'jsonp',
    success: function(data){
 
      if(data.place != undefined) {
        lat = data.place.latitude;
        lng = data.place.longitude;
      }
      else
      {
        showSearchData( q );
        return false;
      }

      if((lat != undefined && lng != undefined) && inMapsBounds(lat, lng))
      {
        searchWithinLocations(q, lat, lng);
      }
      else
      {
        showSearchData( q );
      }

    },
    error: function(jqXHR, textStatus, errorThrown){//search error
      if(searchReviewsArr.length>0)
      {
        showSearchData( q );
      }
      else
      {
        showErrorBox( 3, q );
        resetSearchDetail();
      }
    }
  });

}


var searchLocationsArr = new Array();

function searchWithinLocations(q, lat, lng, repeat){

  if(repeat != true)
    searchLocationsArr = new Array();

  //search keywords
  var url;
  if(is_guardianmusic)
  {
    url = "http://n0ticeapis.com/2/search?noticeboard=" + n0ticeboardID + "&latitude="+ lat +"&longitude="+lng+"&radius=30&pageSize=100"+getAdministratorsString()+"&maximumFlags="+maximumFlags;
  }
  else
  {
    url = "http://n0ticeapis.com/2/search?noticeboard=" + n0ticeboardID + "&latitude="+ lat +"&longitude="+lng+"&radius=30&pageSize=100&user=guardianmusic&maximumFlags="+maximumFlags;
  }

  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data){
      if(data.results.length > 0){
        searchLocationsArr = searchLocationsArr.concat( data.results );//add to search Array
      }

      if(!is_guardianmusic)
      {
        is_guardianmusic = true;
        searchWithinLocations(q, lat, lng, true);
      }
      else
      {
        is_guardianmusic = false;
        showSearchData( q )
      }
      
    },
    error: function(jqXHR, textStatus, errorThrown){//search error
      showErrorBox( 2 );
      resetSearchDetail();
    }
  });
}


function showSearchData(q, adminFilter)
{
  if(adminFilter){

      if(searchReviewsArr.length > 0){
          removeMarkers();

          globalReviews = getCleanArray( searchReviewsArr );
          cachedGlobalReviews = globalReviews;
          setStage();
      }else{
          resetSearchDetail();
          showErrorBox( 3, q );
      }

  }else{

      searchReviewsArr = searchReviewsArr.concat( searchLocationsArr );
      showSearchDetail( q );

      if(searchReviewsArr.length > 0)
      {
        resetFilter();
        removeMarkers();
        addMarkers( getCleanArray( searchReviewsArr ) );
      }
      else
      {
        resetSearchDetail();
        showErrorBox( 3, q );
      }

  }

}