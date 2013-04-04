// ----- SET FEATURED REPORTER ----- //

function setFeaturedReporter()
{
  tmpPopReviewArray = globalReviews;

  // Sort through the array to find the latest from a particular Author.
  var authorID = -1;

  // Find all authors with 3 posts or over

  var authorCount = new Array();
  var isFeaturedAuthor = -1;

  for(ii in featuredReporterArr)
  {
    authorCount[ii] = 0;

    if(featuredReporterArr[ii]['featured'] != undefined)
    {
      isFeaturedAuthor = ii;
    }

    for(i in tmpPopReviewArray)
    {
        if(tmpPopReviewArray[i]['user']['username'] != undefined && tmpPopReviewArray[i]['user']['username'] == featuredReporterArr[ii]['n0tice'])
        {
          authorCount[ii]++;
        } else if(tmpPopReviewArray[i]['instagram_user'] != undefined && tmpPopReviewArray[i]['instagram_user'] == featuredReporterArr[ii]['instagram'])
        {
          authorCount[ii]++;
        } else if(tmpPopReviewArray[i]['twitter_user'] != undefined && tmpPopReviewArray[i]['twitter_user'] == featuredReporterArr[ii]['twitter'])
        {
          authorCount[ii]++;
        }
        else if(tmpPopReviewArray[i]['headline'] != undefined && tmpPopReviewArray[i]['headline'].indexOf("@"+featuredReporterArr[ii]['twitter']) != -1)
        {
          authorCount[ii]++;
        }
      }
  }

  //Find first instance of the author within the latest data

  for(ii in featuredReporterArr)
  {
    for(i in tmpPopReviewArray)
    {
        var headline = String( tmpPopReviewArray[i]['headline'] );

        if(tmpPopReviewArray[i]['user']['username'] != undefined && tmpPopReviewArray[i]['user']['username'] == featuredReporterArr[ii]['n0tice'] && authorCount[i] > 2)
        {
          authorID = ii;
          break;
        } else if(tmpPopReviewArray[i]['instagram_user'] != undefined && tmpPopReviewArray[i]['instagram_user'] == featuredReporterArr[ii]['instagram'] && authorCount[i] > 2)
        {
          authorID = ii;
          break;
        } else if(tmpPopReviewArray[i]['twitter_user'] != undefined && tmpPopReviewArray[i]['twitter_user'] == featuredReporterArr[ii]['twitter'] && authorCount[i] > 2)
        {
          authorID = ii;
          break;
        } else if( tmpPopReviewArray[i]['headline'] != undefined && headline.indexOf("@"+featuredReporterArr[ii]['twitter']) != -1 && authorCount[i] > 2 )
        {
          authorID = ii;
          break;
        }
      }

      if(authorID != -1)
      {
        break;
      }
  }

  if(isFeaturedAuthor != -1 && authorCount[isFeaturedAuthor] > 0)
  {
    authorID = isFeaturedAuthor;
  }

  if(authorID == -1)
  {
    $('#featured-reporter-box').hide();
    return false;
  }

  var numberOfReviews = authorCount[authorID];

  // Add found users to an array.
  var sortTmpArr = new Array();

  for(i in tmpPopReviewArray)
  {
    var headline = String( tmpPopReviewArray[i]['headline'] );

    if(tmpPopReviewArray[i]['user']['username'] != undefined && tmpPopReviewArray[i]['user']['username'] == featuredReporterArr[authorID]['n0tice'])
    {
      if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
        sortTmpArr.push(tmpPopReviewArray[i]);
      }
    }
    else if(tmpPopReviewArray[i]['instagram_user'] != undefined && tmpPopReviewArray[i]['instagram_user'] == featuredReporterArr[authorID]['instagram'])
    {
      if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
        sortTmpArr.push(tmpPopReviewArray[i]);
      }
    } else if(tmpPopReviewArray[i]['twitter_user'] != undefined && tmpPopReviewArray[i]['twitter_user'] == featuredReporterArr[authorID]['twitter'])
    {
      if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
        sortTmpArr.push(tmpPopReviewArray[i]);
      }
    } else if( tmpPopReviewArray[i]['headline'] != undefined && headline.indexOf("@"+featuredReporterArr[authorID]['twitter']) != -1 )
    {
      if(tmpPopReviewArray[i].updates[0] != undefined && tmpPopReviewArray[i].updates[0].image != undefined){
        sortTmpArr.push(tmpPopReviewArray[i]);
      }
    }
  }

  // Featured images

  // Find 3 latest with updates
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
  var end = "";

  for(i in latestTmpArr)
  {
    if(i==5)
    {
      end = 'class="end"';
    }

    imageHTML += '<li '+end+'><a href="#" class="open-single" data-marker-id="'+ latestTmpArr[i].id +'"><img src="' + latestTmpArr[i].updates[0].image.medium + '" width="130"></a></li>';
  
    if(i==5)
    {
      break;
    }
  }
  $('#featured-reporter-latest-images').html( imageHTML );

  // Profile Picture
  imageHTML = '<img src="assets/img/default-featured.jpg" width="75" height="75">';
  if(featuredReporterArr[authorID]['twitter'] != undefined)
  {
    imageHTML = '<img src="https://api.twitter.com/1/users/profile_image?screen_name='+featuredReporterArr[authorID]['twitter']+'&size=bigger" width="75" height="75">';
  }

  
  $('#featured-reporter-profile-image').attr('href','http://twitter.com/'+ featuredReporterArr[authorID]['twitter']).html( imageHTML );

  // User details
  var userDetail = '<a href="http://n0tice.com/user/'+featuredReporterArr[authorID]['n0tice']+'" target="_blank">'+ featuredReporterArr[authorID]['name']+'</a>, '+ featuredReporterArr[authorID]['location'];
  
  var userSocial = new Array();

  if(featuredReporterArr[authorID]['twitter'] != undefined)
  {
    userSocial.push('Twitter: <a href="http://twitter.com/'+featuredReporterArr[authorID]['twitter']+'" target="_blank">@'+featuredReporterArr[authorID]['twitter']+'</a>');
  }

  if(featuredReporterArr[authorID]['instagram'] != undefined)
  {
    userSocial.push('Instagram: <a href="http://instagram.com/'+featuredReporterArr[authorID]['instagram']+'" target="_blank">@'+featuredReporterArr[authorID]['instagram']+'</a>');
  }

  $('#featured-reporter-details').html( userDetail )
  .siblings('#featured-reporter-social')
    .html( userSocial.join(", ") );

  // Reviews count
  $('#featured-reporter-reviews-count').text( numberOfReviews )
  .siblings('#featured-reporter-all-reviews-link').attr('data-marker-author',authorID);

  if(numberOfReviews == 1)
  {
    $('#featured-reporter-reviews-plural').text('tip');
  }
  

  //remove loading state
  $('#featured-reporter-box')
  .css('background-image','#fff')
  .find('*').fadeIn(300,function(){
    $('#featured-reporter-box').removeClass('loading');  
  });

}