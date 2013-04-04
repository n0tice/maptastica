// Featured Reporter Loader

var isFeaturedBackup = false;

function loadFeaturedReporters()
{
  var url = "https://spreadsheets.google.com/feeds/cells/" + featuredAuthorGoogleSpreadsheetID + "/1/public/basic?alt=json";
  var dataType = 'jsonp';

  if(isFeaturedBackup)
  {
    url = "./cache/featured-reporters.json";
    dataType = 'json';
  }

  $.ajax({
    url: url,
    dataType: dataType,
    timeout: 5000,
    success: function(data){

    	var cell;
    	var cellID;
    	var col;
    	var row;
    	var content;
    	var tmpFeaturedReporter = new Array();
    	var curRow = 2;

      	if(data.feed.entry != undefined) {

      		cell = data.feed.entry;

      		for(i in cell)
      		{
      			content = cell[i].content['$t'];

      			cellID = cell[i].title['$t'];
      			col = cellID.substr(0,1);
      			row = parseInt(cellID.substr(1,cellID.length-1));

      			if(curRow != parseInt(row))
      			{
      				if(tmpFeaturedReporter['name'] != undefined)
      				{
      					if(tmpFeaturedReporter['twitter'] != undefined)
                {
                  
                  featuredReporterArr.push(tmpFeaturedReporter);
                }
      				}
      				tmpFeaturedReporter = [];
      				curRow = row;
      			}

      			// If this is the first row then just ignore it.
      		if(row != 1)
     			{
              tmpFeaturedReporter['userID'] = 'user-'+row;

	      			if(col == 'A')
	      			{
	      				tmpFeaturedReporter['name'] = content;
	      			}
	      			else if(col == 'B')
	      			{
	      				tmpFeaturedReporter['location'] = content;
	      			}
	      			else if(col == 'C')
	      			{
	      				tmpFeaturedReporter['n0tice'] = content;
	      			}
	      			else if(col == 'D')
	      			{
	      				tmpFeaturedReporter['twitter'] = content;
	      			}
	      			else if(col == 'E')
	      			{
	      				tmpFeaturedReporter['instagram'] = content;
	      			}
              else if(col == 'F')
              {
                tmpFeaturedReporter['featured'] = content;
              }
      			}
      		}

      		// Add Final
          if(tmpFeaturedReporter['twitter'] != undefined && tmpFeaturedReporter['name'] != undefined && tmpFeaturedReporter['location'] != undefined)
          {
            featuredReporterArr.push(tmpFeaturedReporter);
          }
      		
          loadLatestReviews();
      		// Load Next Manager / Authors
      		//loadReporterImages();

      	}else{

        	if(isFeaturedBackup)
          {
            isFeaturedBackup = false;
            showErrorBox( 1, '1001', true );
          }
          else
          {
            isFeaturedBackup = true;
            loadFeaturedReporters();
          }
      	}  
    },
    error: function(jqXHR, textStatus, errorThrown){

      if(isFeaturedBackup)
      {
        isFeaturedBackup = false;
        showErrorBox( 1, '1001', true );
      }
      else
      {
        isFeaturedBackup = true;
        loadFeaturedReporters();
      }
    }
  });
}

// TO-DO This call isn't setup for JSON client should be adding it.

var featuredReporterCount = 0;

function loadReporterImages()
{
    $.ajax({
      url: "http://n0ticeapis.com/2/user/" + featuredReporterArr[featuredReporterCount]['n0tice'],
      dataType: 'jsonp',
      success: function(data){

        if( data['image'] != undefined )
        {
          featuredReporterArr[featuredReporterCount]['image'] = data['image']['small']; 
        }

        featuredReporterCount++;

        if(featuredReporterCount >= featuredReporterArr.length)
        {
          loadLatestReviews();
        }
        else
        {
          loadReporterImages();
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        alert(jqXHR+' -- '+textStatus+' -- '+errorThrown);
      }
    });
}