

function showReviewsFromDate( d )
{
  date = d;

  dobj = parseISO8601Date( date+"00:00:00Z" );

  // TO-DO Needs to load in all the Tweets + Instagrams from that author not just a single username;

  tmpPopReviewArray = globalReviews;

  var sortTmpArr = new Array();
  //var regex = new RegExp('\\b(' + d + ')', 'gi');

  for(i in tmpPopReviewArray)
  {

    if(tmpPopReviewArray[i].modified.indexOf(d) != -1)
    {
      sortTmpArr.push( tmpPopReviewArray[i] );
    }
  }
  
  if(sortTmpArr.length > 0)
  {
    removeMarkers();
    addMarkers( sortTmpArr );
    showSearchDetail( 'Date:' + dobj.getDate()+" "+monthNames[dobj.getMonth()]+" "+dobj.getFullYear() );
  }
  else
  {
    showErrorBox( 0 );
  }
}