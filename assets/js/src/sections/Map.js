var blueMap = [
  {
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#94aec6" },
      { "saturation": -10 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 33 },
      { "saturation": -78 },
      { "color": "#e4ebe4" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 },
      { "lightness": 100 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ccd7df" }
    ]
  },{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 73 }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "lightness": 100 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "lightness": -6 },
      { "color": "#dde4e1" },
      { "saturation": -27 }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit.station.airport",
    "elementType": "labels",
    "stylers": [
      { "saturation": -11 },
      { "lightness": -9 },
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "on" },
      { "lightness": -100 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" },
      { "color": "#fffaff" },
      { "weight": 0.6 }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit.station",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

var redMap = [
  {
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -10 },
      { "lightness": 35 },
      { "color": "#9ec1db" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "saturation": -100 },
      { "color": "#529466" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "off" },
      { "color": "#809080" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -78 },
      { "color": "#dabf9b" },
      { "lightness": 70 }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 },
      { "lightness": 100 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ae4040" },
      { "gamma": 0.96 },
      { "lightness": 100 }
    ]
  },{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 73 }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "lightness": 100 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "saturation": -9 },
      { "color": "#a66f68" },
      { "lightness": 78 }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit.station.airport",
    "elementType": "labels",
    "stylers": [
      { "saturation": -11 },
      { "lightness": -9 },
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "on" },
      { "lightness": -100 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" },
      { "color": "#fffaff" },
      { "weight": 0.6 }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  }
];

var yellowMap = [
  {
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 4 },
      { "color": "#a5b7c8" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "color": "#edd799" },
      { "lightness": 33 }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 },
      { "lightness": 100 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "color": "#e4d197" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 100 }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "lightness": 100 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#edd799" },
      { "lightness": 48 }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit.station.airport",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ecd6a3" },
      { "saturation": -11 },
      { "lightness": 29 }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "on" },
      { "lightness": -100 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" },
      { "color": "#fffaff" },
      { "weight": 0.6 }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  }
];


function initialize() {

  var mapOptions = {
    zoom: zoomlvl,
    minZoom:2,
    scrollwheel:false,
    mapTypeControl: false,
    disableDefaultUI: false,
    streetViewControl: false,
    center: new google.maps.LatLng('53.61005007044678', '-3.155717999999979'),
    mapTypeId: mapColour
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var styledMapB = new google.maps.StyledMapType(blueMap, { name: 'blue' });
  map.mapTypes.set('blue', styledMapB);
  var styledMapR = new google.maps.StyledMapType(redMap, { name: 'red' });
  map.mapTypes.set('red', styledMapR);
  var styledMapY = new google.maps.StyledMapType(yellowMap, { name: 'yellow' });
  map.mapTypes.set('yellow', styledMapY);

  // Add in testing rectangle for the map
  if(testingMode)
  {
    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(countryBounds[0], countryBounds[1]),
      new google.maps.LatLng(countryBounds[2], countryBounds[3])
    );

    var rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true
    });

    //countryBounds = bounds;
    var rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: false
    });

    rectangle.setMap(map);
  }

  // Add in zoom listener
  google.maps.event.addListener(map, 'zoom_changed', function(e) {
    var currZoom = map.getZoom();

    if(currZoom > 13){

      //remove info box functions at high zoom leve
      if(currZoom > 18){
        $('a.expand-cluster').addClass('hidden');
        $('a.view-pin').addClass('hidden');
      }else{
        $('a.expand-cluster').removeClass('hidden');
        $('a.view-pin').removeClass('hidden');     
      }
    }else{
      //dont show places above a certain zoom level
      removePlaces();
      $('a.expand-cluster').removeClass('hidden');
      $('a.view-pin').removeClass('hidden');  
    }

  });
}

function removeMarkers(){

  if(markerCluster)
      markerCluster.clearMarkers();
  for(i in markerArray){
      markerArray[i].mrkrObj.setMap(null);
      markerArray[i].mrkrObj = null;
  }
  markerArray.length = 0;
}

function addMarkers(ven,keepBounds){
    for(i in ven){
      var marker;
      
      //choose marker icon 
      var markerType = $('div.wrapper').attr('class').replace('wrapper ','');
      ico = assetBase+'marker-'+markerType+'.png';

      marker = new google.maps.Marker({
          position: new google.maps.LatLng(ven[i].place.latitude, ven[i].place.longitude),
          map: map,
          icon: ico,
          title: ven[i].id,
          visible: true
      }); 
        
      markerArray.push({id:ven[i].id, mrkrObj:marker, noticeData:ven[i] });

      google.maps.event.addListener(marker, 'click', function() {
        if(ib != undefined) ib.close();
        var hideExpandBtns = (map.getZoom() >= 17)? 'hidden' : '';
        var hideBackBtns = '';
        var rdArgs = {};

        //get cluster
        var c = getMarkersCluster(this.title);
        if(c.markers_.length > 1){
          //get cluster markers
          var markers = c.getMarkers(),
          array = [],
          num = 0,
          max = markers.length;
          for(i = 0; i < max; i++) {
            num++;
            array.push(markers[i].getTitle());
          }
          //add markers to temp array for paging
          clusterMarkersTemp = array;
        }else{
          hideBackBtns = 'hidden';
          rdArgs.arrows = false;
        }

        var reviewDetail = buildMapIbDetail(this.title,rdArgs);

        ibOptions.pixelOffset = (isEmbed550)? new google.maps.Size(-183, -303) : new google.maps.Size(-263, -422);
        ibOptions.boxStyle = (isEmbed550)? {background: '#fff',width: '367px',height: '228px',padding: '0px'} : {background: '#fff',width: '527px',height: '326px',padding: '0px'};
        ibOptions.content = infoBoxDetail
        .replace('{TOTAL-REPORTS}',max+' tips')
        .replace('{DETAIL}',reviewDetail)
        .replace(/{BTN-CLASS}/g,hideExpandBtns)
        .replace(/{BACK-BTN-CLASS}/g,hideBackBtns);

        ib = new InfoBox(ibOptions);   
        ib.open(map, this);
        //bind img fade handler
        setTimeout(function(){
          bindDetailImgHandling();
          bindDetailHeadlineScroll();
        },300);

      }); 

    }
    
    //set clusters----------------------------
    var clusterStyles = [
      {
        url: assetBase+'cluster-1-'+markerType+'.png',
        height: 48,
        width: 29,
        anchor: ($('html').hasClass('lt-ie8'))? [6, 0] : [6,0],
        textColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'normal',
        textSize: 11
      }, {
        url: assetBase+'cluster-2-'+markerType+'.png',
        height: 53,
        width: 38,
        anchor: ($('html').hasClass('lt-ie8'))? [12, 0] : [11,0],
        textColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'normal',
        textSize: 11
      }, {
        url: assetBase+'cluster-3-'+markerType+'.png',
        height: 58,
        width: 48,
        anchor: ($('html').hasClass('lt-ie8'))? [16, 0] : [16,0],
        textColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'normal',
        textSize: 11
      }];     
    var markerArrayTemp = [];//Build temp array of just markers for cluster function
    for (i in markerArray) {
        markerArrayTemp.push(markerArray[i].mrkrObj);
    }
    var clusterWidth = isEmbed550? 68 : 85;

    markerCluster = new MarkerClusterer(map, markerArrayTemp,{gridSize:clusterWidth,zoomOnClick:false, minimumClusterSize:2, maxZoom:21, styles:clusterStyles}); //set clusters 
    markerArrayTemp = []; //clear temp array

    if(markersFirstRound){
      if($('#map').hasClass('opacity0')){
        showMap();
      }
      if(keepBounds == undefined)
        fitMapToClusters();
      setTimeout(function(){ setPageOpenMap(); },500);
      markersFirstRound = false;
    }else{
      if(keepBounds == undefined)
        fitMapToClusters();
    }
}

function removePlaces(){
  for(i in placesOnMap){
      placesOnMap[i].mrkrObj.setMap(null);
      placesOnMap[i].mrkrObj = null;
  }
  placesOnMap.length = 0;
}

function addPlaces(ven){
    for(i in ven){
      if(ven[i]['geo:lat'] !== 0) {
        
        var placeMarker;
      
        //choose marker icon 
        var markerType = (ven[i].category == undefined)? '' : '-'+ven[i].category;
        var markerSize = (isEmbed550)? new google.maps.Size(16, 21) :  google.maps.Size(16, 21);
        var markerAnchor = (isEmbed550)? new google.maps.Size(8, 21) :  google.maps.Point(8, 21);
        var ico = new google.maps.MarkerImage(
          assetBase+'place-marker'+markerType+'.png',
          markerSize,
          new google.maps.Point(0, 0),
          markerAnchor
        );

        //FIX markerImage not working on embed map
        if(isEmbed550)
          ico = assetBase+'place-marker'+markerType+'.png';

        var placeId = 'place-'+i;
        placeMarker = new google.maps.Marker({
            position: new google.maps.LatLng(ven[i]['geo:lat'], ven[i]['geo:long']),
            map: map,
            icon: ico,
            title: placeId,
            visible: true
        }); 
        
        placesOnMap.push({id:placeId, mrkrObj:placeMarker, placeData:ven[i] });

        google.maps.event.addListener(placeMarker, 'click', function() {
          if(ib != undefined) ib.close();
          var that = this;
          var places = placesOnMap;
          var placeObj = $.grep(places, function(n) { 
            return n.id == that.title; 
          });
          var placeItem = placeObj[0].placeData;

          ibOptions.pixelOffset = (isEmbed550)? new google.maps.Size(-183, -110) : new google.maps.Size(-263, -140);
          ibOptions.boxStyle = (isEmbed550)? {background: '#fff',width: '367px',height: '58px',padding: '0px'} : {background: '#fff',width: '527px',height: '78px',padding: '0px'};
          ibOptions.content = placeDetail
          .replace('{TITLE}',placeItem.title)
          .replace('{URL}',placeItem.link)
          .replace('{BASE}',assetBase);

          ib = new InfoBox(ibOptions);   
          ib.open(map, this);

        }); 
      }
    }
}

function showMap(){
  if(! $('html').hasClass('lt-ie8')){
    $('#map').animate({opacity:1},300,function(){
      $('#map').removeClass('opacity0');  
    });
  }
}

function fitMapToClusters(){
    if(!overideClusterBounds){

        var LatLngList = [];
        var c = 0;
        while (c < markerArray.length){
            var mrkr = markerArray[c].mrkrObj.position;
            LatLngList.push(new google.maps.LatLng (mrkr.lat(),mrkr.lng()));
            c++;
        }
        //  Create a new viewpoint bound
        var bounds = new google.maps.LatLngBounds ();
        //  Go through each...
        for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
          //  And increase the bounds to take this point
          bounds.extend (LatLngList[i]);
        }
        //  Fit these bounds to the map
        map.fitBounds(bounds);

        //needs a little delay or the zoom and opacity anis woill clash and loose frame rate
        if($('#map').hasClass('opacity0')){
          setTimeout(function(){ showMap(); },600);
        }

    }else{
        map.setZoom(zoomlvl);
        map.panTo(ukMapCenter);
    }
}

function getMarkersCluster(markerId){
  var clusters = markerCluster;
  var currCluster;
  for(i in clusters.clusters_){
    currCluster = clusters.clusters_[i];
    var mCount = 0;
    var l = currCluster.markers_.length;
    while(mCount < l){
      if(currCluster.markers_[mCount].title == markerId){
          return currCluster;
      }
      mCount++;
    }
  }
}

function openMarkerDetail(id,listView){
  if(id == undefined) showErrorBox( 6 );
  if(ib != undefined) ib.close();
  //if map is in any of the filter modes it might not find what we want it to
  if(!isDefaultMap) resetMarkers();

  var markers = markerArray;
  var item = $.grep(markers, function(n) { 
    return n.id == id; 
  });
  var m = item[0].mrkrObj;
  var ll = m.getPosition();

  map.setZoom(17);
  map.panTo(ll);
  if(listView == undefined){//if marker detail wanted
    setTimeout(function(){
      google.maps.event.trigger(m, 'click');
    },500);
  }else{//if cluster list wanted
    setTimeout(function(){
      var c = getMarkersCluster(id);
      if(c == undefined){
        showErrorBox( 7 );
        return false
      }  
      c.clusterIcon_.triggerClusterClick(true);
    },500);
  }
}

function showReviewPageInIb(that){
  var el = $(that);
  var id = el.attr('data-marker-id');
  var reviewDetail = buildMapIbDetail(id);
  var distance = (isEmbed550)? -367 : -527;

  el.parents('div.ib-page-list')
  .siblings('div.ib-page-detail').append(reviewDetail)
  .parent('div.ib-page-reel').animate({'margin-left':distance},400);
  //bind img fade handler
  bindDetailImgHandling();
  bindDetailHeadlineScroll();

}

function ibPageBack(that){
  var el = $(that);
  //check if we need to get the data for the list view
  if( el.parents('div.ib-page-reel').find('ul.ib-feed-list').length > 0 ){
    el.parents('div.ib-page-reel').animate({'margin-left':0},400)
    .find('div.ib-detail').remove();
  }else{//if we need to get the data
    var id = el.siblings('div.ib-detail').attr('data-marker-id');
    //get cluster
    var c = getMarkersCluster(id);
    if(c == undefined){
     showErrorBox( 7 );
     return false;
    }
    //get cluster markers
    var markers = c.getMarkers(),
    array = [],
    num = 0,
    max = markers.length;
    for(i = 0; i < max; i++) {
       num++;
       array.push(markers[i].getTitle());
    }
    //set current cluster so we can use it in the expand function
    currentCluster=c;
    //get marker data into list
    var list = buildMapIbList(array,max,true);
    //inset
    el.parents('div.ib-page-detail')
    .siblings('div.ib-page-list').append(list)
    .parent('div.ib-page-reel').animate({'margin-left':0},400)
    .find('div.ib-detail').remove();

    bindJSP();
    bindListRollovers();
  }
  
}

function buildMapIbList(ids,l,showAll){
  var markers = markerArray;
  var idLeng = ids.length;
  var max = (idLeng > 20 && showAll != true)? 20 : idLeng;
  var i = 0;
  var output = ['<ul class="ib-feed-list" data-position="'+max+'" data-max="'+idLeng+'">'];

  while(i < max){
    var item = $.grep(markers, function(n) { 
      return n.id == ids[i]; 
    });
    var m = item[0].noticeData;
    var imgPrefix = $('div.wrapper').attr('class').replace('wrapper ','');

    var img = '<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+assetBase+'list-default-img-'+imgPrefix+'.gif" ></a>';
    if(m.updates[0] != undefined && m.updates[0].image != undefined){
      img = '<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+m.updates[0].image.small+'" ></a>';
    }
    var cat = (m.category == undefined)? '' : m.category;
    var isGuard = [];
    isGuard[0] = (m.is_guardian_music)? 'guardian' : '';
    isGuard[1] = (m.is_guardian_music)? '<span class="guardian-icon">&nbsp;</span>' : '';

    var exerptL = isEmbed550? 30 : 75;
    var li = ibListItem
    .replace('{IMG}',img)
    .replace('{MARKER-ID}',m.id)
    .replace('{GUARDIAN}',isGuard[0])
    .replace('{GUARDIAN-ICO}',isGuard[1])
    .replace('{HEADLINE}',makeExerpt(m.headline,exerptL))
    .replace('{CAT}',cat)
    .replace('{LOC}',makeExerpt(m.location,45))
    .replace('{DATE}',m.date_formatted);
    output.push(li);
    i++;
  }

  output.push('</ul>');
  return output.join(''); 
}

function pageIbList(){
  if(canPageIb){
    canPageIb = false;
    var list = $('ul.ib-feed-list'),
    ids = clusterMarkersTemp,
    markers = markerArray,
    start = parseInt( list.attr('data-position') ),
    unusedIds = parseInt(list.attr('data-max')) - start,
    max = (unusedIds < 20)? start+unusedIds : start+20;

    if(max < 1) return false;

    while(start < max){
      var item = $.grep(markers, function(n) { 
        return n.id == ids[start]; 
      });
      var m = item[0].noticeData;
      var img = '<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+assetBase+'list-default-img.gif" ></a>';
      if(m.updates[0] != undefined && m.updates[0].image != undefined){
        img = '<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+m.updates[0].image.small+'" ></a>';
      }
      var cat = (m.category == undefined)? '' : m.category;
      var isGuard = [];
      isGuard[0] = (m.is_guardian_music)? 'guardian' : '';
      isGuard[1] = (m.is_guardian_music)? '<span class="guardian-icon">&nbsp;</span>' : '';
      var exerptL = isEmbed550? 30 : 75;
      
      var li = ibListItem
      .replace('{IMG}',img)
      .replace('{MARKER-ID}',m.id)
      .replace('{GUARDIAN}',isGuard[0])
      .replace('{GUARDIAN-ICO}',isGuard[1])
      .replace('{HEADLINE}',makeExerpt(m.headline,exerptL))
      .replace('{CAT}',cat)
      .replace('{LOC}',makeExerpt(m.location,45))
      .replace('{DATE}',m.date_formatted);
      list.children('div.jspContainer')
      .children('div.jspPane').append(li);
      
      start++;
    }
    list.attr('data-position',max);
    reInitJSP();
    bindListRollovers();
    //stops unwanted paging
    setTimeout(function(){
      canPageIb = true;
    },500);
  }
}

function buildMapIbDetail(id,args){
  var markers = markerArray;
  var item = $.grep(markers, function(n) {
    return n.id == id; 
  });
  var m = item[0].noticeData;
  var img = '';
  var imgClass = '';
  var output = '';

  var elementsFaded = (args != undefined && args.elementsFaded == true)? 'hidden' : '';
  if(m.updates[0] != undefined && m.updates[0].image != undefined){
    var imgS = (isEmbed550)? 163 : 234;
    img = '<div class="ib-detail-img"><img class="opacity0" width="'+imgS+'" height="'+imgS+'" src="'+m.updates[0].image.medium+'" ></div>';
    imgClass = 'hasImg';
  }
  var cat = (m.category == undefined)? '' : m.category;
  var isGuard = [];
      isGuard[0] = (m.is_guardian_music)? 'guardian' : '';
      isGuard[1] = (m.is_guardian_music)? '<span class="guardian-icon">&nbsp;</span>' : '';

  var serv = '';
  var userDetail = ['','',m.webUrl,'View on n0tice'];
  if(m.twitter_user){
    userDetail = ['@'+m.twitter_user,'https://twitter.com/'+m.twitter_user,m.updates[0].link,'View on Twitter'];
    serv = 'twitter';
  }
  if(m.instagram_user){
    userDetail = ['@'+m.instagram_user,'http://instagram.com/'+m.instagram_user,m.updates[0].link,'View on Instagram'];
    serv = 'instagram';
  }

  var exerptLen = (img == '')? 280 : 140;
  var copy = Linkify( m.headline ,serv);//Linkify( makeExerpt(m.headline,exerptLen) ,serv);

  /*if(m.is_guardian_music){
    copy = '<a href="'+m.updates[0].link+'" target="_blank">'+m.headline+'</a>';
    //userDetail = ['','',m.updates[0].link,'Read article on Guardian'];
  }*/

  var hideArrors = (args != undefined && args.arrows == false)? 'hidden' : '';

  output = ibDetail
  .replace('{MARKER-ID}',id)
  .replace('{IMG-CLASS}',imgClass)
  .replace('{IMG}',img)
  .replace(/{GUARDIAN}/g,isGuard[0])
  .replace('{GUARDIAN-ICO}',isGuard[1])
  .replace('{HEADLINE}',copy)
  .replace('{USERNAME}',userDetail[0])
  .replace('{USERNAME-URL}',userDetail[1])
  .replace('{LINK-OUT}',userDetail[2])
  .replace('{LINK-OUT-COPY}',userDetail[3])
  .replace('{CAT}',cat)
  .replace('{LOC}',makeExerpt(m.location,20))
  .replace('{DATE}',m.date_formatted)
  .replace(/{HIDE-ARROWS}/g,hideArrors)
  .replace(/{FADE}/g,elementsFaded);

  return output; 
}

function pageIbDetail(back){
  var markerIds = clusterMarkersTemp,
  currentId = $('div.ib-detail').attr('data-marker-id'),
  index = $.inArray(currentId,markerIds),
  newIndex = (back)? (index == 0)? markerIds[markerIds.length-1] : markerIds[index-1] : (index == (markerIds.length-1))? markerIds[0] : markerIds[index+1];
  var newDetail = buildMapIbDetail(newIndex);
  
  $('div.ib-detail').children('img.ib-detail-img').hide();
  $('div.ib-detail')
  .children('p.user-detail').hide()
  .siblings('div.ib-detail-body').hide();
  
  $('div.ib-detail').replaceWith(newDetail);
  //bind img fade handler
  setTimeout(function(){ 
    bindDetailImgHandling();
    bindDetailHeadlineScroll();
  },50);

}

function bindDetailImgHandling(){
  $('div.ib-detail-img').children('img')
  .unbind('filter')
  .filter(function() {
    return this.complete;
  }).each(load_handler).end().load(load_handler);
}

function bindDetailHeadlineScroll(){
  $('div.headline-scroll').jScrollPane(
    {
      verticalDragMinHeight: 12,
      verticalDragMaxHeight: 35
    }
  );
}

function bindListRollovers(){
  $('ul.ib-feed-list').find('a.open-single').hover(
    function(){
        $(this).parents('li').addClass('hover');
    },
    function(){
        $(this).parents('li').removeClass('hover');
    }
  );
}

function bindJSP(){

  $('ul.ib-feed-list').jScrollPane(
    {
     verticalDragMinHeight: 12,
      verticalDragMaxHeight: 25
    }
  ).bind(
    'jsp-scroll-y',
    function(event, scrollPositionY, isAtTop, isAtBottom)
    {
      if(isAtBottom){
        pageIbList();
      }
    }
  );
}

function reInitJSP(){
  var pane = $('ul.ib-feed-list');
  var api = pane.data('jsp');
  api.reinitialise();
}

function resetMap(lat,lng,z){
  if(ib != undefined) ib.close();
  var zoom = (z == undefined)? zoomlvl : z;
  map.setZoom(zoom);
  var ll = new google.maps.LatLng('51.524547576904', '-0.08064199984096376');
  if(lat != undefined && lng != undefined){
    ll = new google.maps.LatLng(lat, lng);
  }
  map.panTo(ll);
}

function resetMarkers(keepBounds){
  if(!isDefaultMap){

    if(ib != undefined) ib.close();
    
    filterType = 'all';
    removeMarkers();
    resetSearchDetail();

    globalReviews = cachedGlobalReviews;
    addMarkers(globalReviews,keepBounds);
    isDefaultMap = true;
  }else{
    fitMapToClusters();
  }
}

function forceResetMarkers(keepBounds){
    if(ib != undefined) ib.close();
    
    filterType = 'all';
    removeMarkers();
    resetSearchDetail();

    globalReviews = cachedGlobalReviews;
    addMarkers(globalReviews,keepBounds);
    isDefaultMap = true;
}

function resetMarkersForNewBoard(){
    if(ib != undefined) ib.close();
    
    filterType = 'all';
    removeMarkers();
    resetSearchDetail();
    cachedGlobalReviews = [];
    resetLatesReviewSetup();
    isDefaultMap = true;
}

function expandCluster(cluster){
  if(ib != undefined) ib.close();
  if (cluster == undefined) cluster = currentCluster;
  map.fitBounds(cluster.getBounds());
}
