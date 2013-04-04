// Clean the array so all places are in bounds & Twitter & Facebook authors are added

function getCleanArray( dataArr )
{
  // Within the bounds of the application

  var tmpAdd = new Array();
  for(i in dataArr){

    // Add data to a tmp array if its in the bounds of the applicaiton
    //if( inMapsBounds(dataArr[i].place.latitude, dataArr[i].place.longitude) )
    //{
    tmpAdd.push(dataArr[i]);
    //}
  }

  var categoryArray = new Array('books', 'toys', 'fashion', 'food', 'music', 'home');

  // If present find the authors
  for(i in dataArr)
  {
    if(dataArr[i]['updates'][0] != undefined && dataArr[i]['updates'][0]['body'] != 'undefined')
    {
      var body = dataArr[i]['updates'][0]['body'];

      if( contains( body , 'Tweeted by ') )
      {
        if(parseUsername( body ))
        {
          dataArr[i]['twitter_user'] = parseUsername( body );

          dataArr[i]['headline'] = '@'+ dataArr[i]['twitter_user'] +' '+dataArr[i]['headline'];

          dataArr[i]['headline'] = removeURLFromEnd(dataArr[i]['headline'], "twitter.com");
          dataArr[i]['headline'] = removeURLFromEnd(dataArr[i]['headline'], "t.co");
        }
          
      }
      else if( contains( body , ' via Instagram' ) )
      {
        if(parseUsername( body ))
        {
           dataArr[i]['instagram_user'] = parseUsername( body );
        }
      }

      if( dataArr[i]['user']['username'] == 'topoftheshops' )
      {
        dataArr[i]['is_guardian_music'] = true;
        if(dataArr[i]['updates'][0]['body'] != undefined)
        {
          dataArr[i]['headline'] = removeURLFromEnd(dataArr[i]['headline'] +". "+ dataArr[i]['updates'][0]['body'], "guardian.co.uk");
        }
        
      }
    }

    // Find and add in categories
    dataArr[i]['categories'] = '';

    for(iii in categoryArray)
    {

      if( contains( dataArr[i]['headline'].toLowerCase() , '#'+categoryArray[iii]) )
      {
        dataArr[i]['category'] = categoryArray[iii];
        dataArr[i]['categories'] += categoryArray[iii]+", ";
      }
        
    }

    

    // Format dates
    var d = parseISO8601Date(dataArr[i]['modified']);

    dataArr[i]['date_time'] = d.getTime();
    dataArr[i]['date_formatted'] = pad2(d.getHours())+":"+pad2(d.getMinutes())+", "+d.getDate()+" "+monthNames[d.getMonth()]+" "+d.getFullYear();

    // Limit the location to the first 2 items.


    var locations=dataArr[i]['place']['name'].split(", ");

    dataArr[i]['location'];

    if(locations.length > 1)
    {
      dataArr[i]['location'] = locations[0]+ ', '+locations[1];
    }
    else if(locations.length == 1)
    {
      dataArr[i]['location'] = locations[0];
    }
  }

  


  // ---- REMOVE DUPLICATES ----//

  var sortTmpCount = new Array();
  var cleanDuplicates = new Array();

  for(i in tmpAdd)
  {
      tmpName = tmpAdd[i].id;

      if(!sortTmpCount.hasOwnProperty(tmpName))
      {
          sortTmpCount[tmpName] = tmpName;
          cleanDuplicates.push( tmpAdd[i] );
      }

    }

    // SORT ARRAY

    cleanDuplicates = cleanDuplicates.sort( sortModified );

    return cleanDuplicates;
}

function sortModified(a,b){

    if(a['date_time']<b['date_time']){
        return 1;
    }
    else if(a['date_time']>b['date_time']){
        return -1;
    }
    else{
        return 0;
    }
}

function contains(str, text) {
   return (str.indexOf(text) >= 0);
}

function parseUsername( str ) {

  str = str.split(/@(.+)?/)[1];

  if(str != undefined && str != "")
  {
    str = str.split(/ (.+)?/)[0];
    return str;
  }
  else
  {
    return false;
  }

  return false;
  
};

// Check whether certain points are within bounds

function inMapsBounds(lat, lng) {
  
    //if ( (countryBounds[1] < lng && countryBounds[3] > lng) && (countryBounds[0] > lat && countryBounds[2] < lat) ) {
      return true;
    /*}
    else
    {
      return false;
    }*/
}