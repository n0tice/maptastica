// ----- SET FEATURED REPORTER ----- //

function setLatestPosts()
{
  tmpPopReviewArray = globalReviews;


  // Find 3 latest with images
  var latestTmpArr = new Array();

  for(i in tmpPopReviewArray)
  {
    if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined)
    {
      latestTmpArr.push(tmpPopReviewArray[i]);
    } 

    if(latestTmpArr.length==6)
    {
      break;
    }
  }

  var imageHTML = '';

  for(ii in latestTmpArr){
    var no = parseInt(ii)+1;
    var end = (no%3 == 0)? 'class="end" data-id="'+no+'"' : 'data-id="'+no+'"';

    imageHTML += '<li '+end+'><a href="#" class="open-single" data-marker-id="'+ latestTmpArr[ii].id +'"><img src="' + latestTmpArr[ii].updates[0].image.medium + '" width="88"></a></li>';
  }
  $('#featured-reporter-latest-images').html( imageHTML );


  //remove loading state
  $('#featured-reporter-box')
  .css('background-image','#fff')
  .find('*').fadeIn(300,function(){
    $('#featured-reporter-box').removeClass('loading');  
  });

}