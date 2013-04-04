// Latest Review Loader

// ----- LOAD REVIEWS FROM THE NORMAL API ----- //

var tmpNoticeBoardReviews = new Array();
var pinsLeftToadd = maxPinsOnMap;
var resultsPerCall = (pinsLeftToadd < 100)? pinsLeftToadd : 100;

function resetLatesReviewSetup(){
    tmpNoticeBoardReviews = new Array();
    pinsLeftToadd = maxPinsOnMap;
    resultsPerCall = (pinsLeftToadd < 100)? pinsLeftToadd : 100;  
}

function loadLatestReviews() {
  // If we have already loaded the reviews we can just reload the cache
  if( cachedGlobalReviews.length == 0 )
  {

    var query = '';
    if(adminFilterTerm != undefined && adminFilterTerm != ''){
        query = '&q='+encodeURIComponent(adminFilterTerm);
    }

    
     // var geturl;
     //  geturl = $.ajax({
     //    type: "GET",
     //    url: url,
     //    success: function () {
     //      alert("done!"+ geturl.getAllResponseHeaders());
     //    }
     //  });
    
    $.ajax({
      url: "http://n0ticeapis.com/2/search?noticeboard=" + n0ticeboardID +query+"&pageSize="+resultsPerCall+"&page="+reviewsPage+getAdministratorsString()+"&maximumFlags="+maximumFlags+getFilterTagsString(),
      dataType: 'jsonp',
      success: function(data){
        //update pins left to add
        pinsLeftToadd = pinsLeftToadd - resultsPerCall;
        resultsPerCall = (pinsLeftToadd < 100)? pinsLeftToadd : 100;

        if(data.results.length > 0) {
          
          // Add parsed data onto the global list of results
          tmpNoticeBoardReviews = tmpNoticeBoardReviews.concat( data.results );

          // Get the total number we can load at once
          var tmpLoadLimit = parseInt ( data['numberFound'] );

          if( tmpLoadLimit > maxPinsOnMap )
          {
            tmpLoadLimit = maxPinsOnMap;
          }

          if( tmpNoticeBoardReviews.length >= tmpLoadLimit )
          {
              reviewsPage = 1;
              joinReviewData();
          }
          else
          {
              // Loop back through all data pages.
              reviewsPage++;
              loadLatestReviews();
          }        

        }else{

          //If we run out of data within the bounds load all we have anyway, otherwise show no data error.
          if(tmpNoticeBoardReviews.length > 0)
          {
            joinReviewData();
          }
          else
          {
            showErrorBox( 10, '1002', true );
          }
          
        }
          
      },
      error: function(jqXHR, textStatus, errorThrown){
        showErrorBox( 1, '1002', true );
      }
    });
  }
  else
  {
      globalReviews = cachedGlobalReviews;

      addMarkers( globalReviews );
  }
}


function joinReviewData()
{

  globalReviews = getCleanArray( tmpNoticeBoardReviews );

  setStage();
}