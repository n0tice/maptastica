// ----- SET POPULAR GIG ----- //

function setPopularGig()
{
  tmpPopReviewArray = globalReviews;

  // Sort through array to find the most popular place

  var sortTmpArr = new Array();
  var tmpName;

  // Count all popular items with images
  for(i in tmpPopReviewArray)
  {
      tmpName = tmpPopReviewArray[i]['place']['name'];

      if(!sortTmpArr.hasOwnProperty(tmpName))
      {
        sortTmpArr[tmpName] = 1;
      }
      else
      {
        sortTmpArr[tmpName] = parseInt(sortTmpArr[tmpName]) + 1;
      }
  }

  // Work out which location is the highest
  /*var highest;
  var count = 0;
  for(i in sortTmpArr)
  {
      if(sortTmpArr[i] > count)
      {
        count = sortTmpArr[i];
        highest = i;
      }
  }*/
  var sortedArray = new Array();

  for(i in sortTmpArr)
  {
    var obj = {};
    obj.count = sortTmpArr[i];
    obj.name = i;

    sortedArray.push(obj);
  }

  sortedArray.sort(function(a,b)
  {
    if (a.count > b.count)
       return -1;
    if (a.count < b.count)
      return 1;
    return 0;
  });

  // Find the latest post with an image from the highest rated venue
  var tmpPopularGigArr = new Array();

  for(ii in sortedArray)
  {
    for(i in tmpPopReviewArray)
    {
        if(tmpPopReviewArray[i]['place']['name'] == sortedArray[ii].name && tmpPopularGigArr.length == 0)
        {
          if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
            tmpPopularGigArr = tmpPopReviewArray[i];
            count = sortedArray[ii].count;
            break;
          }
        }
    }
    if(tmpPopularGigArr.length != 0)
    {
      break;
    }
  }
  // If there isn't a most popluar item with an image then show the latest with an image
  
  var is_latest = false;

  if(tmpPopularGigArr.length == 0)
  {
    is_latest = true;
    for(i in tmpPopReviewArray)
    {
        if(tmpPopularGigArr.length == 0)
        {
          if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
            tmpPopularGigArr = tmpPopReviewArray[i];
            break;
          }
        }
    }

    count = 0;
    for(i in tmpPopReviewArray)
    {
        if(tmpPopReviewArray[i]['place']['name'] == tmpPopularGigArr['place']['name'])
        {
          count++;
        }
    }
  }

  // If we don't have anything then get rid of the box.

  if(tmpPopularGigArr.length == 0)
  {
    $('#most-popular-box').hide();
    return false;
  }
  
  //find service
  var serv = 'n0tice';
  if(tmpPopularGigArr['twitter_user'] != undefined) serv = 'twitter';
  if(tmpPopularGigArr['instagram_user'] != undefined) serv = 'instagram';

  // Headline Link
  $('#popular-gig-report-content').html( Linkify( makeExerpt(tmpPopularGigArr['headline'],140) ,serv) );

  if(is_latest)
  {
    if(count < 2)
    {
      $('#popular-gig-report-num-reviews').hide();
    }
  }

  // View all reviews
  $('#popular-gig-view-all-reviews-link').attr('data-marker-id',tmpPopularGigArr.id)
  .siblings('#popular-gig-report-num').text( count );

  if(count == 1)
  {
    $('#popular-gig-report-plural').text('tip');
  }

  //loc
  var cat = (tmpPopularGigArr['category']==undefined)? '' : tmpPopularGigArr['category'];
  $('#popular-gig-report-location').text( tmpPopularGigArr['location'] )
  .siblings('#popular-gig-report-date').text( tmpPopularGigArr['date_formatted'] )
  .parent('p').addClass(cat);

  // Set image
  var imageHTML = '<img src="' + tmpPopularGigArr.updates[0].image.medium + '" width="146" height="146">';
  $('#ppopular-gig-report-image').attr('data-marker-id',tmpPopularGigArr.id).html( imageHTML );

  //remove loading state
  $('#most-popular-box')
  .css('background','#fff')
  .find('*').fadeIn(300,function(){
    $('#most-popular-box').removeClass('loading');  
  });

}