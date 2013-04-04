/*
 ___    ___
 \   \  \   \
  \ \ \__\ \ \
   \_\______\_\
Independent, \ \
Creative,     \ \__
Digital        \___\
and good at it.
morphlondon.com
*/

/* START FUNCTIONS */

// Set Stage
function setStage()
{
  // For the first time cache gobal reviews so that they can be called back again on the 'Latest Selection'
  if( cachedGlobalReviews.length == 0 )
    cachedGlobalReviews = globalReviews;

  addMarkers( globalReviews );
  setPopularGig();
  setLatestPosts();

  setupHeaderBar();
}

// ----- EXTERNAL MAP FUNCTIONS ---- //

//function needed for elements in the infobox becuse jquery events wont bind
function openSingle(e){
  var id = e.getAttribute('data-marker-id');
  if(id == undefined){
    id = $(e).siblings('div.ib-detail').attr('data-marker-id');
  }

  _gaq.push(['_trackPageview', '/single/' + id ]);
  resetFilter();
  openMarkerDetail(id);
}

function openAuthor(e)
{
  //set let everyone know we are leaving the default state
  isDefaultMap = false;
  if(ib != undefined) ib.close();

  var author = e.getAttribute('data-marker-author');

  authorID = new Array();

  if(author == 'topoftheshops')
  {
    showSearchDetail( 'Guardian tips' );

    authorID['n0tice'] = 'topoftheshops';
  }
  else
  {
    author = parseInt( author );
    showSearchDetail( 'Reporter: ' + featuredReporterArr[author]['name'] );

    authorID['instagram'] = featuredReporterArr[author]['instagram'];
    authorID['twitter'] = featuredReporterArr[author]['twitter'];
    authorID['n0tice'] = featuredReporterArr[author]['n0tice'];
  }

  _gaq.push(['_trackPageview', '/author/' + authorID['n0tice'] ]);  

  tmpPopReviewArray = globalReviews;

  var sortTmpArr = new Array();

  for(i in tmpPopReviewArray)
  {
    if(tmpPopReviewArray[i]['instagram_user'] != undefined && tmpPopReviewArray[i]['instagram_user'] == authorID['instagram'])
    {
      sortTmpArr.push(tmpPopReviewArray[i]);
    } else if(tmpPopReviewArray[i]['twitter_user'] != undefined && tmpPopReviewArray[i]['twitter_user'] == authorID['twitter'])
    {
        sortTmpArr.push(tmpPopReviewArray[i]);
    } else if(tmpPopReviewArray[i]['user']['username'] != undefined && tmpPopReviewArray[i]['user']['username'] == authorID['n0tice'])
    {
        sortTmpArr.push(tmpPopReviewArray[i]);
    } else if(tmpPopReviewArray[i]['headline'] != undefined && tmpPopReviewArray[i]['headline'].indexOf("@"+authorID['twitter']) != -1)
    {
        sortTmpArr.push(tmpPopReviewArray[i]);
    }
  }
  
  resetFilter();
  removeMarkers();
  addMarkers( sortTmpArr );
}

function openFilter( setMapFilter )
{
  resetSearchDetail();
  isDefaultMap = false;
  
  if( setMapFilter == 'all' )
  {
    resetMarkers(true);
    return false;
  }

  //set let everyone know we are leaving the default state

  var filter = setMapFilter;

  _gaq.push(['_trackPageview', '/filter/' + filter ]);

  tmpPopReviewArray = globalReviews;

  var sortTmpArr = new Array();

  for(i in tmpPopReviewArray)
  {
    if((tmpPopReviewArray[i]['category'] != undefined && tmpPopReviewArray[i]['category'] == filter) || contains( tmpPopReviewArray[i]['categories'] , filter) )
    {
      sortTmpArr.push(tmpPopReviewArray[i]);
    }
  }

  if(sortTmpArr.length > 0)
  {
    isDefaultMap = false;
    if(ib != undefined) ib.close();
  
    removeMarkers();
    addMarkers(sortTmpArr,true);
  }
  
}

function resetFilter(){
  var dd = $('#filter-dd');
  if(dd.length > 0){// no filter on embed
      $('#current-filter').text('all');
      dd.children('li').removeClass('active');
      dd.children('li').eq(0).addClass('active');
  }
}

function setSocialUrls(service,url){
    $('#foot-'+service+'-icon').attr('href',url);  
}

function setUpPage(){
    
    if( querySt('nb') != undefined ){//set noticeboard
        n0ticeboardID = querySt('nb');
    }

    if( querySt('loc') != undefined && querySt('loc') != '' ){//set latlng
        var loc = decodeURIComponent(querySt('loc')).split(',');
        ukMapCenter = new google.maps.LatLng(loc[0], loc[1]);
        overideClusterBounds = true;

        if( querySt('z') != undefined && querySt('z') != '' ){//set zoom
            zoomlvl = parseInt(querySt('z'));
        }
    }

    if( querySt('sh') != 'true' || ( querySt('t') == undefined && querySt('i') == undefined && querySt('h') == undefined) ){//Hide header
        $('#editable-header').remove();
    }else{

        if( querySt('t') != undefined ){//set map title
            var ttl = decodeURIComponent( querySt('t') );
            $('#map-title').children('a').attr('href','http://'+querySt('nb')+'.n0tice.com/').text(ttl);
            if(navigator.userAgent.indexOf('MSIE') == -1)
                $('title').text(ttl);
        }

        if( querySt('i') != undefined && querySt('i') != '' ){//set map image
            var styleVal = 'background-image: url('+decodeURIComponent(querySt('i'))+')';
            $('#map-logo').attr('style',styleVal)
            .children('a').attr('href','http://'+querySt('nb')+'.n0tice.com/');
        }else{
            $('#map-logo').remove();
        }
        if( querySt('d') != undefined ){//set map hash tag
            $('#map-instructions').text(decodeURIComponent(querySt('d')) );
        }else{
            $('#map-instructions').remove();
        }
        $('#editable-header').removeClass('hidden2');
    }

    if( querySt('c') != undefined ){//set map colour scheme
        $('div.wrapper').attr('class','wrapper '+querySt('c'));
        mapColour = querySt('c');
    }

    if( querySt('p') != undefined ){//set number of pins
        var pins = ( parseInt(querySt('p')) < 501 )? parseInt(querySt('p')) : 500;
        maxPinsOnMap = pins;
    }

    if( querySt('m') != undefined && querySt('m') == 'true' ){// set moderation
        preModeration = true;
    }

    if( querySt('f') != undefined ){// set number of flags
        maximumFlags = querySt('f');
    }

    if( querySt('tl') != undefined && querySt('tl') != '' ){// set tag list
        adminFilterTerm = querySt('tl');
    }

    if( querySt('w') == 'true' ){// Show widgets
        $('#editable-widgets').removeClass('hidden2');
    }else{ 
        $('#editable-widgets').html('');
    }

    if( (querySt('gp') == undefined || querySt('gp') == '') && (querySt('fb') == undefined || querySt('fb') == '') && (querySt('tw') == undefined || querySt('tw') == '') ){//Hide social
        $('#editable-footer').remove();
    }else{
        $('#editable-footer').removeClass('hidden3');

        if( querySt('gp') != undefined && querySt('gp') != ''){//set map title
            var url = decodeURIComponent(querySt('gp'));
            if( url.indexOf('http') != 0 ) 
                url = 'http://'+url;
            $('#foot-gp-icon').attr('href',url)
            .parent('li.edit-social-link')
            .addClass('on done');
        }else{
            $('#foot-gp-icon').parent('li.edit-social-link').remove();
        }
        if( querySt('fb') != undefined && querySt('fb') != '' ){//set map title
            var url = decodeURIComponent(querySt('fb'));
            if( url.indexOf('http') != 0 ) 
                url = 'http://'+url;
            $('#foot-fb-icon').attr('href',url)
            .parent('li.edit-social-link')
            .addClass('on done');
        }else{
            $('#foot-fb-icon').parent('li.edit-social-link').remove();
        }
        if( querySt('tw') != undefined && querySt('tw') != '' ){//set map title
            var url = decodeURIComponent(querySt('tw'));
            if( url.indexOf('http') != 0 ) 
                url = 'http://'+url;
            $('#foot-tw-icon').attr('href',url)
            .parent('li.edit-social-link')
            .addClass('on done');
        }else{
            $('#foot-tw-icon').parent('li.edit-social-link').remove();
        }

    }

    resetLatesReviewSetup();
    loadAdmins();
    //loadLatestReviews();
}

/*END FUNCTIONS*/

/*START EVENTS*/
  $(document).ready(function(){

    //set up page from url queries
    if( querySt('nb') != undefined )
      setUpPage();
    /*if(querySt('hash') == 'true' && !$('body').hasClass('embed'))
      $('body').addClass('hash');*/

    //ie fixes
    if(isOldIE){
        $('#map-logo').css( "background-size", "cover" );
    }

      // Get URL vars DELETE
      var queryString = getUrlVars();

      if(queryString['c'] != undefined)
      {
        currentCountry = queryString['c'];
      }

      if(queryString['n'] != undefined)
      {
        n0ticeboardID = queryString['n'];
      }

      //init map
      initialize();
      
      // Start the loading process
      /*if(isEmbed550){
        loadLatestReviews();
      }else{
        loadFeaturedReporters();
      }*/

      $('a.expand-cluster').click(function(){
        expandCluster(currentCluster);
        return false;
      });

      $("a.open-list").live('click',function( event ) {
        event.preventDefault();
        var id = $(this).attr('data-marker-id');
        resetFilter();
        openMarkerDetail(id,true);
      });  

      $("a.open-single").live('click',function( event ) {
        event.preventDefault();
        resetMarkers();
        openSingle(this);
      });

      $("a.open-author").live('click',function( event ) {
        event.preventDefault();
        openAuthor(this);
      });

      //set up sharers


      //re embed
      $('#re-embed').click(function(e){
          e.preventDefault();
          if( $('body.embed').length > 0 ){
              var eCode = embedCodeFromLink(window.location.href);
              $('#embed-box').children('#embed_code').val(eCode);
          }
          $('#embed-box').fadeIn();
      });

      $('#error-box-close').click(function(e){
          e.preventDefault();
          $('#embed-box').fadeOut();
      });

      //block blank social link
      $('li.edit-social-link').children('a').click(function(){
          if( $(this).attr('href') == '' ){
              return false;
          }
      });
 
    });
/*END EVENTS */