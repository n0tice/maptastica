
function setStage()
{if(cachedGlobalReviews.length==0)
cachedGlobalReviews=globalReviews;addMarkers(globalReviews);setPopularGig();setLatestPosts();setupHeaderBar();}
function openSingle(e){var id=e.getAttribute('data-marker-id');if(id==undefined){id=$(e).siblings('div.ib-detail').attr('data-marker-id');}
_gaq.push(['_trackPageview','/single/'+id]);resetFilter();openMarkerDetail(id);}
function openAuthor(e)
{isDefaultMap=false;if(ib!=undefined)ib.close();var author=e.getAttribute('data-marker-author');authorID=new Array();if(author=='topoftheshops')
{showSearchDetail('Guardian tips');authorID['n0tice']='topoftheshops';}
else
{author=parseInt(author);showSearchDetail('Reporter: '+featuredReporterArr[author]['name']);authorID['instagram']=featuredReporterArr[author]['instagram'];authorID['twitter']=featuredReporterArr[author]['twitter'];authorID['n0tice']=featuredReporterArr[author]['n0tice'];}
_gaq.push(['_trackPageview','/author/'+authorID['n0tice']]);tmpPopReviewArray=globalReviews;var sortTmpArr=new Array();for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i]['instagram_user']!=undefined&&tmpPopReviewArray[i]['instagram_user']==authorID['instagram'])
{sortTmpArr.push(tmpPopReviewArray[i]);}else if(tmpPopReviewArray[i]['twitter_user']!=undefined&&tmpPopReviewArray[i]['twitter_user']==authorID['twitter'])
{sortTmpArr.push(tmpPopReviewArray[i]);}else if(tmpPopReviewArray[i]['user']['username']!=undefined&&tmpPopReviewArray[i]['user']['username']==authorID['n0tice'])
{sortTmpArr.push(tmpPopReviewArray[i]);}else if(tmpPopReviewArray[i]['headline']!=undefined&&tmpPopReviewArray[i]['headline'].indexOf("@"+authorID['twitter'])!=-1)
{sortTmpArr.push(tmpPopReviewArray[i]);}}
resetFilter();removeMarkers();addMarkers(sortTmpArr);}
function openFilter(setMapFilter)
{resetSearchDetail();isDefaultMap=false;if(setMapFilter=='all')
{resetMarkers(true);return false;}
var filter=setMapFilter;_gaq.push(['_trackPageview','/filter/'+filter]);tmpPopReviewArray=globalReviews;var sortTmpArr=new Array();for(i in tmpPopReviewArray)
{if((tmpPopReviewArray[i]['category']!=undefined&&tmpPopReviewArray[i]['category']==filter)||contains(tmpPopReviewArray[i]['categories'],filter))
{sortTmpArr.push(tmpPopReviewArray[i]);}}
if(sortTmpArr.length>0)
{isDefaultMap=false;if(ib!=undefined)ib.close();removeMarkers();addMarkers(sortTmpArr,true);}}
function resetFilter(){var dd=$('#filter-dd');if(dd.length>0){$('#current-filter').text('all');dd.children('li').removeClass('active');dd.children('li').eq(0).addClass('active');}}
function setSocialUrls(service,url){$('#foot-'+service+'-icon').attr('href',url);}
function setUpPage(){if(querySt('nb')!=undefined){n0ticeboardID=querySt('nb');}
if(querySt('loc')!=undefined&&querySt('loc')!=''){var loc=decodeURIComponent(querySt('loc')).split(',');ukMapCenter=new google.maps.LatLng(loc[0],loc[1]);overideClusterBounds=true;if(querySt('z')!=undefined&&querySt('z')!=''){zoomlvl=parseInt(querySt('z'));}}
if(querySt('sh')!='true'||(querySt('t')==undefined&&querySt('i')==undefined&&querySt('h')==undefined)){$('#editable-header').remove();}else{if(querySt('t')!=undefined){var ttl=decodeURIComponent(querySt('t'));$('#map-title').children('a').attr('href','http://'+querySt('nb')+'.n0tice.com/').text(ttl);if(navigator.userAgent.indexOf('MSIE')==-1)
$('title').text(ttl);}
if(querySt('i')!=undefined&&querySt('i')!=''){var styleVal='background-image: url('+decodeURIComponent(querySt('i'))+')';$('#map-logo').attr('style',styleVal).children('a').attr('href','http://'+querySt('nb')+'.n0tice.com/');}else{$('#map-logo').remove();}
if(querySt('d')!=undefined){$('#map-instructions').text(decodeURIComponent(querySt('d')));}else{$('#map-instructions').remove();}
$('#editable-header').removeClass('hidden2');}
if(querySt('c')!=undefined){$('div.wrapper').attr('class','wrapper '+querySt('c'));mapColour=querySt('c');}
if(querySt('p')!=undefined){var pins=(parseInt(querySt('p'))<501)?parseInt(querySt('p')):500;maxPinsOnMap=pins;}
if(querySt('m')!=undefined&&querySt('m')=='true'){preModeration=true;}
if(querySt('f')!=undefined){maximumFlags=querySt('f');}
if(querySt('tl')!=undefined&&querySt('tl')!=''){adminFilterTerm=querySt('tl');}
if(querySt('w')=='true'){$('#editable-widgets').removeClass('hidden2');}else{$('#editable-widgets').html('');}
if((querySt('gp')==undefined||querySt('gp')=='')&&(querySt('fb')==undefined||querySt('fb')=='')&&(querySt('tw')==undefined||querySt('tw')=='')){$('#editable-footer').remove();}else{$('#editable-footer').removeClass('hidden3');if(querySt('gp')!=undefined&&querySt('gp')!=''){var url=decodeURIComponent(querySt('gp'));if(url.indexOf('http')!=0)
url='http://'+url;$('#foot-gp-icon').attr('href',url).parent('li.edit-social-link').addClass('on done');}else{$('#foot-gp-icon').parent('li.edit-social-link').remove();}
if(querySt('fb')!=undefined&&querySt('fb')!=''){var url=decodeURIComponent(querySt('fb'));if(url.indexOf('http')!=0)
url='http://'+url;$('#foot-fb-icon').attr('href',url).parent('li.edit-social-link').addClass('on done');}else{$('#foot-fb-icon').parent('li.edit-social-link').remove();}
if(querySt('tw')!=undefined&&querySt('tw')!=''){var url=decodeURIComponent(querySt('tw'));if(url.indexOf('http')!=0)
url='http://'+url;$('#foot-tw-icon').attr('href',url).parent('li.edit-social-link').addClass('on done');}else{$('#foot-tw-icon').parent('li.edit-social-link').remove();}}
resetLatesReviewSetup();loadAdmins();}
$(document).ready(function(){if(querySt('nb')!=undefined)
setUpPage();if(isOldIE){$('#map-logo').css("background-size","cover");}
var queryString=getUrlVars();if(queryString['c']!=undefined)
{currentCountry=queryString['c'];}
if(queryString['n']!=undefined)
{n0ticeboardID=queryString['n'];}
initialize();$('a.expand-cluster').click(function(){expandCluster(currentCluster);return false;});$("a.open-list").live('click',function(event){event.preventDefault();var id=$(this).attr('data-marker-id');resetFilter();openMarkerDetail(id,true);});$("a.open-single").live('click',function(event){event.preventDefault();resetMarkers();openSingle(this);});$("a.open-author").live('click',function(event){event.preventDefault();openAuthor(this);});$('#re-embed').click(function(e){e.preventDefault();if($('body.embed').length>0){var eCode=embedCodeFromLink(window.location.href);$('#embed-box').children('#embed_code').val(eCode);}
$('#embed-box').fadeIn();});$('#error-box-close').click(function(e){e.preventDefault();$('#embed-box').fadeOut();});$('li.edit-social-link').children('a').click(function(){if($(this).attr('href')==''){return false;}});});
var maxPinsOnMap=100,n0ticeboardID='gdngig',currentCountry='UK',testingMode=false,featuredAuthorGoogleSpreadsheetID="0AoIvs4JUqGrAdEIxdnNDV1FjOTlTVXlJZGZ1dmJWQWc",maximumFlags=1,preModeration=false;
var currentCityCoords,zoomlvl=4,savedZoomlvl=4,markersFirstRound=true,globalReviews=new Array(),searchReviewsArr=new Array(),cachedGlobalReviews=new Array(),cachedPlaces=new Array(),placesOnMap=new Array(),countryBounds=new Array(),featuredReporterArr=new Array(),cachedAdmins=new Array(),reviewsPage=1,isEmbed550=true,assetBase='assets/img/embed/',map,markerCluster,currentCluster,clusterMarkersTemp,mapPin,isDefaultMap=true,filterType='all',ukMapCenter=new google.maps.LatLng('53.61005007044678','-3.155717999999979'),savedMapCenter=new google.maps.LatLng('53.61005007044678','-3.155717999999979'),overideClusterBounds=false,mapColour='blue',markerArray=[],ib,canPageIb=true,ibOptions={disableAutoPan:false,maxWidth:527,pixelOffset:new google.maps.Size(-183,-269),zIndex:null,boxStyle:{background:'#fff',width:'367px',height:'228px',padding:'0px'},closeBoxMargin:"top: 11px; right: 11px; z-index: 100;",closeBoxURL:assetBase+'close.gif',infoBoxClearance:new google.maps.Size(90,20),isHidden:false,pane:"floatPane",enableEventPropagation:false},administratorsArr=new Array(),adminFilterTerm,isInIFrame=(window.location!=window.parent.location)?true:false,isOldIE=(navigator.userAgent.indexOf('MSIE 8')>-1||navigator.userAgent.indexOf('MSIE 7')>-1)?true:false;
var infoBoxList='<div class="ib-wrapper"><div class="ib-page-reel"><div class="ib-page-list"><p class="ib-ttl">Reports</p><a href="#" onClick="expandCluster(); return false;" class="expand-cluster ib-fn-btn {BTN-CLASS}" data-cluster-id="">View Pins</a><span class="total-reports ib-fn-btn">{TOTAL-REPORTS}</span><div class="top-bar-pink"></div>{LIST}</div><div class="ib-page-detail"><p class="ib-ttl">Report</p><a href="#" onClick="openSingle(this); return false;" class="view-pin ib-fn-btn {BTN-CLASS}" data-cluster-id="">View pin</a><a href="#" onClick="ibPageBack(this); return false;" class="ib-page-back ib-fn-btn">Back</a></div><div class="clear-both">&nbsp;</div></div><div class="clear-both">&nbsp;</div></div><img src="'+assetBase+'ib-arrow.png" class="ib-arrow" alt="">',infoBoxDetail='<div class="ib-wrapper"><div class="ib-page-reel second-page"><div class="ib-page-list"><p class="ib-ttl">Feed</p><a href="#" onClick="expandCluster(); return false;" class="expand-cluster ib-fn-btn {BTN-CLASS}" data-cluster-id="">View Pins</a><span class="total-reports ib-fn-btn">{TOTAL-REPORTS}</span><div class="top-bar-pink"></div></div><div class="ib-page-detail"><p class="ib-ttl">Report</p><a href="#" onClick="openSingle(this); return false;" class="view-pin ib-fn-btn {BTN-CLASS}" data-cluster-id="">View pin</a><a href="#" onClick="ibPageBack(this); return false;" class="ib-page-back ib-fn-btn {BACK-BTN-CLASS}">Back</a>{DETAIL}</div><div class="clear-both">&nbsp;</div></div><div class="clear-both">&nbsp;</div></div><img src="'+assetBase+'ib-arrow.png" class="ib-arrow" alt="">',ibListItem='<li class="hasImg">{IMG}<div class="ib-feed-body"><a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single ib-feed-headline {GUARDIAN}" data-marker-id="{MARKER-ID}">{GUARDIAN-ICO}{HEADLINE}</a><p class="meta-loc-icon {CAT}">{LOC}</p><p class="meta">{DATE}</p></div><div class="clear-both">&nbsp;</div></li>',ibDetail='<div data-marker-id="{MARKER-ID}" class="ib-detail {IMG-CLASS}"><a href="#" id="ib-detail-left" class="hide-text {HIDE-ARROWS}" onClick="pageIbDetail(true); return false;">&lt;</a>{IMG}<div class="ib-detail-body {FADE}"><div class="headline-scroll"><p class="ib-detail-headline wrap {GUARDIAN}">{GUARDIAN-ICO}{HEADLINE}</p></div><p class="meta-loc-icon {CAT}">{LOC}</p><p class="meta">{DATE}</p></div><p class="user-detail {FADE}"><a class="linkOut" href="{USERNAME-URL}" target="_blank">{USERNAME}</a> <a class="linkOut {GUARDIAN}" href="{LINK-OUT}" target="_blank">{LINK-OUT-COPY}</a></p><a href="#" id="ib-detail-right" class="hide-text {HIDE-ARROWS}" onClick="pageIbDetail(); return false;">&gt;</a></div>',errorBox='<div id="error-box" class="modal"><a href="#" class="hide-text" id="error-box-close">X</a><p class="error-ttl">{TITLE}</p><p>{MESSAGE}</p></div>',embedBox='<div id="embed-box" class="modal"><a href="#" class="hide-text" id="error-box-close">X</a><p class="error-ttl">{TITLE}</p><textarea id="embed_code" readonly="readonly">{CODE}</textarea><p class="meta">{MESSAGE}</p></div>',placeDetail='<div class="ib-wrapper autoHeight"><div class="ib-place-detail"><p class="ib-ttl">{TITLE}</p><a href="{URL}" target="_blank" class="meta">View website</a></div></div><img src="{BASE}ib-arrow.png" class="ib-arrow" alt="">';
var errorMessageArr=new Array()
errorMessageArr[0]={'title':"No matching tips",'message':"There are no tips meeting the date you selected."}
errorMessageArr[1]={'title':"Error loading data",'message':"Something went wrong, please try again later. ({str})"}
errorMessageArr[2]={'title':"Error loading search results",'message':"Something went wrong, please try again later."}
errorMessageArr[3]={'title':"No results",'message':"There are no results matching your search: '{str}'"}
errorMessageArr[4]={'title':"No local tips",'message':"There are no tips in your local area."}
errorMessageArr[5]={'title':"Error",'message':"We canâ€™t find your location, please try again later."}
errorMessageArr[6]={'title':"Error",'message':"Oops, we canâ€™t find that tip."}
errorMessageArr[7]={'title':"Error",'message':"Sorry, we canâ€™t find those pins."}
errorMessageArr[8]={'title':"Error",'message':"Sorry, we canâ€™t find those pins."}
errorMessageArr[9]={'title':"Blank term",'message':"Please enter a search term."}
errorMessageArr[10]={'title':"Error",'message':"Sorry, we canâ€™t find any pins for that data set."}
function showErrorBox(id,str,fatal)
{$("#error-box").remove();var message=errorMessageArr[id].message;if(str)
{message=message.replace("{str}",str);}
var errorHTML=errorBox.replace('{TITLE}',errorMessageArr[id].title).replace('{MESSAGE}',message);$("div.wrapper").append(errorHTML);$("#error-box-close").click(function(e){e.preventDefault();$("#error-box").fadeOut(150,function(){$(this).remove();});});}
function setSelectionRange(input,selectionStart,selectionEnd){if(input.setSelectionRange){input.focus();input.setSelectionRange(selectionStart,selectionEnd);}
else if(input.createTextRange){var range=input.createTextRange();range.collapse(true);range.moveEnd('character',selectionEnd);range.moveStart('character',selectionStart);range.select();}}
function querySt(ji){hu=window.location.search.substring(1);gy=hu.split("&");for(i=0;i<gy.length;i++){ft=gy[i].split("=");if(ft[0]==ji){return ft[1];}}}
function setCaretToPos(input,pos){setSelectionRange(input,pos,pos);}
function Linkify(str,service){var base='https://twitter.com/';if(service=='twitter'){base='https://twitter.com/';}else if(service=='instagram'){base='http://instagram.com/';}
var output=str.replace(/(http:\/\/[^\s]{5,})/g,'<a href="$1" target="_blank">$1</a>').replace(/(https:\/\/[^\s]{5,})/g,'<a href="$1" target="_blank">$1</a>').replace(/(#[^\s]{5,})/g,'<a href="http:\/\/n0tice.com\/search?q=$1&type=&user=&count=&noticeboard=gdngig" target="_blank">$1</a>').replace(/(@[^\s]{5,})/g,'<a class="at-user" href="http:\/\/n0tice.com\/search?q=$1&type=&user=&count=&noticeboard=gdngig" target="_blank">$1</a>').replace(/search\?q=#/g,"search?q=%23").replace(/search\?q=@/g,"search?q=%40");return output;}
function falseLinkify(str){var output=str.replace(/(http:\/\/[^\s]{5,})/g,'<span class="false-link-out">$1</span>').replace(/(https:\/\/[^\s]{5,})/g,'<span class="false-link-out">$1</span>').replace(/(#[^\s]{5,})/g,'<span class="false-link-out">$1</span>').replace(/(@[^\s]{5,})/g,'<span class="false-link-out">$1</span>');return output;}
function makeExerpt(str,l){var elipsis=(str.length>l)?' ...':'';var output=str.substring(0,l)+elipsis;return output;}
var load_handler=function imgSizes(){var img=$(this);img.animate({opacity:'1.0'});}
function pad2(number){return(number<10?'0':'')+number}
var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];function removeURLFromEnd(str,domain)
{var geturl=new RegExp("(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))","g");var urlMatches=str.match(geturl);if(urlMatches!=undefined&&urlMatches.length>0)
{if(urlMatches[urlMatches.length-1].search(domain)>0)
{str=str.replace(urlMatches[urlMatches.length-1],'');}}
return str;}
var split;split=split||function(undef){var nativeSplit=String.prototype.split,compliantExecNpcg=/()??/.exec("")[1]===undef,self;self=function(str,separator,limit){if(Object.prototype.toString.call(separator)!=="[object RegExp]"){return nativeSplit.call(str,separator,limit);}
var output=[],flags=(separator.ignoreCase?"i":"")+
(separator.multiline?"m":"")+
(separator.extended?"x":"")+
(separator.sticky?"y":""),lastLastIndex=0,separator=new RegExp(separator.source,flags+"g"),separator2,match,lastIndex,lastLength;str+="";if(!compliantExecNpcg){separator2=new RegExp("^"+separator.source+"$(?!\\s)",flags);}
limit=limit===undef?-1>>>0:limit>>>0;while(match=separator.exec(str)){lastIndex=match.index+match[0].length;if(lastIndex>lastLastIndex){output.push(str.slice(lastLastIndex,match.index));if(!compliantExecNpcg&&match.length>1){match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undef){match[i]=undef;}}});}
if(match.length>1&&match.index<str.length){Array.prototype.push.apply(output,match.slice(1));}
lastLength=match[0].length;lastLastIndex=lastIndex;if(output.length>=limit){break;}}
if(separator.lastIndex===match.index){separator.lastIndex++;}}
if(lastLastIndex===str.length){if(lastLength||!separator.test("")){output.push("");}}else{output.push(str.slice(lastLastIndex));}
return output.length>limit?output.slice(0,limit):output;};String.prototype.split=function(separator,limit){return self(this,separator,limit);};return self;}();function parseISO8601Date(s){var re=/(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/;var d=[];d=s.match(re);if(!d){throw"Couldn't parse ISO 8601 date string '"+s+"'";}
var a=[1,2,3,4,5,6,10,11];for(var i in a){d[a[i]]=parseInt(d[a[i]],10);}
d[7]=parseFloat(d[7]);var ms=Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]);if(d[7]>0){ms+=Math.round(d[7]*1000);}
if(d[8]!="Z"&&d[10]){var offset=d[10]*60*60*1000;if(d[11]){offset+=d[11]*60*1000;}
if(d[9]=="-"){ms-=offset;}
else{ms+=offset;}}
return new Date(ms);};function copyToClipboardCrossbrowser(s){s=document.getElementById(s).value;if(window.clipboardData&&clipboardData.setData)
{clipboardData.setData("Text",s);}
else
{netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');var clip=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);if(!clip)return;var trans=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!trans)return;trans.addDataFlavor('text/unicode');var str=new Object();var len=new Object();var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);str.data=s;trans.setTransferData("text/unicode",str,str.data.length*2);var clipid=Components.interfaces.nsIClipboard;if(!clip)return false;clip.setData(trans,null,clipid.kGlobalClipboard);}}
function showReviewsFromDate(d)
{date=d;dobj=parseISO8601Date(date+"00:00:00Z");tmpPopReviewArray=globalReviews;var sortTmpArr=new Array();for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i].modified.indexOf(d)!=-1)
{sortTmpArr.push(tmpPopReviewArray[i]);}}
if(sortTmpArr.length>0)
{removeMarkers();addMarkers(sortTmpArr);showSearchDetail('Date:'+dobj.getDate()+" "+monthNames[dobj.getMonth()]+" "+dobj.getFullYear());}
else
{showErrorBox(0);}}
var isFeaturedBackup=false;function loadFeaturedReporters()
{var url="https://spreadsheets.google.com/feeds/cells/"+featuredAuthorGoogleSpreadsheetID+"/1/public/basic?alt=json";var dataType='jsonp';if(isFeaturedBackup)
{url="./cache/featured-reporters.json";dataType='json';}
$.ajax({url:url,dataType:dataType,timeout:5000,success:function(data){var cell;var cellID;var col;var row;var content;var tmpFeaturedReporter=new Array();var curRow=2;if(data.feed.entry!=undefined){cell=data.feed.entry;for(i in cell)
{content=cell[i].content['$t'];cellID=cell[i].title['$t'];col=cellID.substr(0,1);row=parseInt(cellID.substr(1,cellID.length-1));if(curRow!=parseInt(row))
{if(tmpFeaturedReporter['name']!=undefined)
{if(tmpFeaturedReporter['twitter']!=undefined)
{featuredReporterArr.push(tmpFeaturedReporter);}}
tmpFeaturedReporter=[];curRow=row;}
if(row!=1)
{tmpFeaturedReporter['userID']='user-'+row;if(col=='A')
{tmpFeaturedReporter['name']=content;}
else if(col=='B')
{tmpFeaturedReporter['location']=content;}
else if(col=='C')
{tmpFeaturedReporter['n0tice']=content;}
else if(col=='D')
{tmpFeaturedReporter['twitter']=content;}
else if(col=='E')
{tmpFeaturedReporter['instagram']=content;}
else if(col=='F')
{tmpFeaturedReporter['featured']=content;}}}
if(tmpFeaturedReporter['twitter']!=undefined&&tmpFeaturedReporter['name']!=undefined&&tmpFeaturedReporter['location']!=undefined)
{featuredReporterArr.push(tmpFeaturedReporter);}
loadLatestReviews();}else{if(isFeaturedBackup)
{isFeaturedBackup=false;showErrorBox(1,'1001',true);}
else
{isFeaturedBackup=true;loadFeaturedReporters();}}},error:function(jqXHR,textStatus,errorThrown){if(isFeaturedBackup)
{isFeaturedBackup=false;showErrorBox(1,'1001',true);}
else
{isFeaturedBackup=true;loadFeaturedReporters();}}});}
var featuredReporterCount=0;function loadReporterImages()
{$.ajax({url:"http://n0ticeapis.com/2/user/"+featuredReporterArr[featuredReporterCount]['n0tice'],dataType:'jsonp',success:function(data){if(data['image']!=undefined)
{featuredReporterArr[featuredReporterCount]['image']=data['image']['small'];}
featuredReporterCount++;if(featuredReporterCount>=featuredReporterArr.length)
{loadLatestReviews();}
else
{loadReporterImages();}},error:function(jqXHR,textStatus,errorThrown){alert(jqXHR+' -- '+textStatus+' -- '+errorThrown);}});}
var tmpNoticeBoardReviews=new Array();var pinsLeftToadd=maxPinsOnMap;var resultsPerCall=(pinsLeftToadd<100)?pinsLeftToadd:100;function resetLatesReviewSetup(){tmpNoticeBoardReviews=new Array();pinsLeftToadd=maxPinsOnMap;resultsPerCall=(pinsLeftToadd<100)?pinsLeftToadd:100;}
function loadLatestReviews(){if(cachedGlobalReviews.length==0)
{var query='';if(adminFilterTerm!=undefined&&adminFilterTerm!=''){query='&q='+encodeURIComponent(adminFilterTerm);}
$.ajax({url:"http://n0ticeapis.com/2/search?type=report&noticeboard="+n0ticeboardID+query+"&pageSize="+resultsPerCall+"&page="+reviewsPage+getAdministratorsString()+"&maximumFlags="+maximumFlags+getFilterTagsString(),dataType:'jsonp',success:function(data){pinsLeftToadd=pinsLeftToadd-resultsPerCall;resultsPerCall=(pinsLeftToadd<100)?pinsLeftToadd:100;if(data.results.length>0){tmpNoticeBoardReviews=tmpNoticeBoardReviews.concat(data.results);var tmpLoadLimit=parseInt(data['numberFound']);if(tmpLoadLimit>maxPinsOnMap)
{tmpLoadLimit=maxPinsOnMap;}
if(tmpNoticeBoardReviews.length>=tmpLoadLimit)
{reviewsPage=1;joinReviewData();}
else
{reviewsPage++;loadLatestReviews();}}else{if(tmpNoticeBoardReviews.length>0)
{joinReviewData();}
else
{showErrorBox(10,'1002',true);}}},error:function(jqXHR,textStatus,errorThrown){showErrorBox(1,'1002',true);}});}
else
{globalReviews=cachedGlobalReviews;addMarkers(globalReviews);}}
function joinReviewData()
{globalReviews=getCleanArray(tmpNoticeBoardReviews);setStage();}
function getCleanArray(dataArr)
{var tmpAdd=new Array();for(i in dataArr){tmpAdd.push(dataArr[i]);}
var categoryArray=new Array('books','toys','fashion','food','music','home');for(i in dataArr)
{if(dataArr[i]['updates'][0]!=undefined&&dataArr[i]['updates'][0]['body']!='undefined')
{var body=dataArr[i]['updates'][0]['body'];if(contains(body,'Tweeted by '))
{if(parseUsername(body))
{dataArr[i]['twitter_user']=parseUsername(body);dataArr[i]['headline']='@'+dataArr[i]['twitter_user']+' '+dataArr[i]['headline'];dataArr[i]['headline']=removeURLFromEnd(dataArr[i]['headline'],"twitter.com");dataArr[i]['headline']=removeURLFromEnd(dataArr[i]['headline'],"t.co");}}
else if(contains(body,' via Instagram'))
{if(parseUsername(body))
{dataArr[i]['instagram_user']=parseUsername(body);}}
if(dataArr[i]['user']['username']=='topoftheshops')
{dataArr[i]['is_guardian_music']=true;if(dataArr[i]['updates'][0]['body']!=undefined)
{dataArr[i]['headline']=removeURLFromEnd(dataArr[i]['headline']+". "+dataArr[i]['updates'][0]['body'],"guardian.co.uk");}}}
dataArr[i]['categories']='';for(iii in categoryArray)
{if(contains(dataArr[i]['headline'].toLowerCase(),'#'+categoryArray[iii]))
{dataArr[i]['category']=categoryArray[iii];dataArr[i]['categories']+=categoryArray[iii]+", ";}}
var d=parseISO8601Date(dataArr[i]['modified']);dataArr[i]['date_time']=d.getTime();dataArr[i]['date_formatted']=pad2(d.getHours())+":"+pad2(d.getMinutes())+", "+d.getDate()+" "+monthNames[d.getMonth()]+" "+d.getFullYear();var locations=dataArr[i]['place']['name'].split(", ");dataArr[i]['location'];if(locations.length>1)
{dataArr[i]['location']=locations[0]+', '+locations[1];}
else if(locations.length==1)
{dataArr[i]['location']=locations[0];}}
var sortTmpCount=new Array();var cleanDuplicates=new Array();for(i in tmpAdd)
{tmpName=tmpAdd[i].id;if(!sortTmpCount.hasOwnProperty(tmpName))
{sortTmpCount[tmpName]=tmpName;cleanDuplicates.push(tmpAdd[i]);}}
cleanDuplicates=cleanDuplicates.sort(sortModified);return cleanDuplicates;}
function sortModified(a,b){if(a['date_time']<b['date_time']){return 1;}
else if(a['date_time']>b['date_time']){return-1;}
else{return 0;}}
function contains(str,text){return(str.indexOf(text)>=0);}
function parseUsername(str){str=str.split(/@(.+)?/)[1];if(str!=undefined&&str!="")
{str=str.split(/ (.+)?/)[0];return str;}
else
{return false;}
return false;};function inMapsBounds(lat,lng){return true;}
function loadPlaces(){var base=(isEmbed550)?'../':'';if(cachedPlaces.length==0)
{$.ajax({url:base+"cache/places2.json",dataType:'json',success:function(data){var results=data;if(results.length>0){cachedPlaces=results;addPlaces(cachedPlaces);}else{}},error:function(jqXHR,textStatus,errorThrown){showErrorBox(1,'1002',true);}});}
else
{addPlaces(cachedPlaces);}}
var is_guardianmusic=false;var searchReviewsArr=new Array();function searchReviews(q,adminFilter,repeat){var resultsPerCall=(maxPinsOnMap<100)?maxPinsOnMap:100;if(repeat!=true)
{searchReviewsArr=[];searchLocationsArr=[];}
var query=encodeURIComponent(q);var url="http://n0ticeapis.com/2/search?noticeboard="+n0ticeboardID+"&pageSize="+resultsPerCall+"&q="+query+getAdministratorsString()+"&maximumFlags="+maximumFlags;$.ajax({url:url,dataType:'jsonp',success:function(data){if(data.results.length>0){searchReviewsArr=searchReviewsArr.concat(data.results);}
if(adminFilter){showSearchData(q,adminFilter);}else{is_guardianmusic=false;searchForLocations(q);}},error:function(jqXHR,textStatus,errorThrown){showErrorBox(2);resetSearchDetail();}});}
function searchForLocations(q){$.ajax({url:"http://n0ticeapis.com/2/search?noticeboard="+n0ticeboardID+"&pageSize=100&location="+encodeURIComponent(q)+getAdministratorsString()+"&maximumFlags="+maximumFlags,dataType:'jsonp',success:function(data){if(data.place!=undefined){lat=data.place.latitude;lng=data.place.longitude;}
else
{showSearchData(q);return false;}
if((lat!=undefined&&lng!=undefined)&&inMapsBounds(lat,lng))
{searchWithinLocations(q,lat,lng);}
else
{showSearchData(q);}},error:function(jqXHR,textStatus,errorThrown){if(searchReviewsArr.length>0)
{showSearchData(q);}
else
{showErrorBox(3,q);resetSearchDetail();}}});}
var searchLocationsArr=new Array();function searchWithinLocations(q,lat,lng,repeat){if(repeat!=true)
searchLocationsArr=new Array();var url;if(is_guardianmusic)
{url="http://n0ticeapis.com/2/search?noticeboard="+n0ticeboardID+"&latitude="+lat+"&longitude="+lng+"&radius=30&pageSize=100"+getAdministratorsString()+"&maximumFlags="+maximumFlags;}
else
{url="http://n0ticeapis.com/2/search?noticeboard="+n0ticeboardID+"&latitude="+lat+"&longitude="+lng+"&radius=30&pageSize=100&user=guardianmusic&maximumFlags="+maximumFlags;}
$.ajax({url:url,dataType:'jsonp',success:function(data){if(data.results.length>0){searchLocationsArr=searchLocationsArr.concat(data.results);}
if(!is_guardianmusic)
{is_guardianmusic=true;searchWithinLocations(q,lat,lng,true);}
else
{is_guardianmusic=false;showSearchData(q)}},error:function(jqXHR,textStatus,errorThrown){showErrorBox(2);resetSearchDetail();}});}
function showSearchData(q,adminFilter)
{if(adminFilter){if(searchReviewsArr.length>0){removeMarkers();globalReviews=getCleanArray(searchReviewsArr);cachedGlobalReviews=globalReviews;setStage();}else{resetSearchDetail();showErrorBox(3,q);}}else{searchReviewsArr=searchReviewsArr.concat(searchLocationsArr);showSearchDetail(q);if(searchReviewsArr.length>0)
{resetFilter();removeMarkers();addMarkers(getCleanArray(searchReviewsArr));}
else
{resetSearchDetail();showErrorBox(3,q);}}}
administratorsArr=new Array('theaelisabet','kylife','gdngignathan','LocalShopFoodBot','mattmcalister','SarahHartley','gdngiganthony','topoftheshops');function getAdministratorsString(){if(preModeration){return"&votedInterestingBy="+cachedAdmins.join();}else{return"";}}
function getFilterTagsString(){return"";}
function loadAdmins(){if(cachedAdmins.length<=0){var adminNames=[];$.ajax({url:'http://n0ticeapis.com/2/noticeboard/'+n0ticeboardID+'/admins',dataType:'jsonp',success:function(data){if(data.length>0){for(i in data){adminNames.push(data[i].username);}
cachedAdmins=adminNames;loadLatestReviews();}},error:function(jqXHR,textStatus,errorThrown){showErrorBox(1,'1002',true);}});}else{loadLatestReviews();}}
function getUrlVars()
{var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');for(var i=0;i<hashes.length;i++)
{hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1];}
return vars;}
function buildEmbedCode(key,val){var currUrl=embedUrl,output;if(currUrl.slice(-10)=='embed.html'){output=currUrl+'?'+key+'='+encodeURIComponent(val);}else{var startOfKey=currUrl.indexOf(key+'=');if(startOfKey>-1){var endOfKey=currUrl.indexOf('&',startOfKey);if(endOfKey==-1)
endOfKey=currUrl.length
var start=currUrl.substr(0,startOfKey),end=currUrl.substr(endOfKey,currUrl.length);if(val!=''){output=start+key+'='+encodeURIComponent(val)+end;}else{if(start.charAt(start.length-1)=='&'){start=start.slice(0,-1)}
output=start+end;}}else{output=currUrl+'&'+key+'='+encodeURIComponent(val);}}
var height=469;if(output.indexOf('sh=true')>-1&&output.indexOf('w=true')==-1){height=580;}else if(output.indexOf('sh=true')>-1&&output.indexOf('w=true')>-1){height=828;}else if(output.indexOf('sh=true')==-1&&output.indexOf('w=true')>-1){height=717;}
embedUrl=output;var eCode='<iframe style="border: none; overflow: hidden; height: '+height+'px; width: 600px;" title="" src="'+output+'" frameborder="0" scrolling="no" width="600" height="'+height+'" ></iframe>';$('#footer-embed-code').text(eCode);$('#embed_code').text(eCode);}
function embedCodeFromLink(url){var height=469;if(url.indexOf('sh=true')>-1&&url.indexOf('w=true')==-1){height=580;}else if(url.indexOf('sh=true')>-1&&url.indexOf('w=true')>-1){height=828;}else if(url.indexOf('sh=true')==-1&&url.indexOf('w=true')>-1){height=717;}
var eCode='<iframe style="border: none; overflow: hidden; height: '+height+'px; width: 600px;" title="" src="'+url+'" frameborder="0" scrolling="no" width="600" height="'+height+'" ></iframe>';return eCode;}
var load_handler=function imgSizes(){var img=$(this);var size=img.attr('width');var w=img.width();var h=img.height();if(w>h&&size!=''){img.attr({'height':'','width':size}).css('margin-left',-((img.width()-size)/2)+'px');}else{img.css('opacity','1.0');}}
function rebindResize(){$('#map-logo').unbind('filter').filter(function(){return this.complete;}).each(load_handler).end().load(load_handler);}
function openMapGate(){$('#noticeboard-gate').addClass('show');setTimeout(function(){$('#site-header').addClass('open-noticeboard-gate');$('#map-function').css('height','34px');$('#re-embed').fadeIn(100);},350);}
function shouldMinimiseFooter(){var wH=$(window).height(),cH=$('div.wrapper').outerHeight()-79,fH=208;if(wH<786||(wH>=786&&(cH+fH)>=wH)){return true;}else{return false;}}
function setFooterControlsState(state,fromZclip){var footer=$('div.footer-controls');if(state=='full'){var wH=$(window).height(),cH=$('div.wrapper').outerHeight()-79,fH=208,spaceLeft=wH-cH,footerOffset=spaceLeft-fH;if(wH<786||footerOffset<0)footerOffset=0;footer.removeClass('no-show').addClass('open').css('bottom',footerOffset+'px');$('#change-footer-state').addClass('minus');}else if(state=='minimised'){footer.removeClass('no-show open').css('bottom','-139px');$('#change-footer-state').removeClass('minus');}else if(state=='closed'){footer.removeClass('open').addClass('no-show').css('bottom','-210px');}}
function setMapHeaderState(state){var header=$('#editable-header');if(state=='open'){header.removeClass('live-view').css('height','120px').children('div').children('#map-logo').removeClass('hidden3');$('#map-instructions').show();$('#map-title').show();setTimeout(function(){header.addClass('editable-panel');},410);}else if(state=='active'){header.children('div').removeClass('faded-out');}else if(state=='inactive'){header.children('div').addClass('faded-out');}else if(state=='closed'){header.removeClass('editable-panel').css('height','0');}}
function setMapWidgetsState(state){var widgetCont=$('#editable-widgets');if(state=='open'){widgetCont.removeClass('live-view').css('height','248px').children('div.half-size-div').removeClass('live-view');setTimeout(function(){widgetCont.removeClass('hidden2').addClass('editable-panel');},410);}else if(state=='active'){widgetCont.children('div.half-size-div').removeClass('faded-out');}else if(state=='inactive'){widgetCont.children('div.half-size-div').addClass('faded-out');}else if(state=='closed'){widgetCont.removeClass('editable-panel').addClass('hidden2').css('height','0');}}
function setMapFooterState(state){var footer=$('#editable-footer');if(state=='open'){footer.removeClass('live-view').css('width','290px').addClass('editable-panel').removeClass('hidden3');}else if(state=='closed'){footer.removeClass('editable-panel').addClass('hidden3').css('width','0');}}
function setOptionPanelState(state){if(state=='open'){$('div.option-panel').addClass('open');}else if(state=='closed'){$('div.option-panel').removeClass('open');}}
function resetMapAfterOptionsChange(){resetMarkersForNewBoard();loadAdmins();}
function setPageOpenMap(){openMapGate();setTimeout(function(){setFooterControlsState('full');},900);}
function performRequiredOpening(zclip){if($('#toggle-edit-mode').attr('data-edit')=='on'){$('#toggle-edit-mode').click();setTimeout(function(){setFooterControlsState('full',zclip);},1000);}else{setFooterControlsState('full',zclip);}}
$('#change-footer-state').click(function(e){e.preventDefault();if($('div.footer-controls').hasClass('open')){setFooterControlsState('minimised');}else{performRequiredOpening();}});$('#noticeboard-url-btn').click(function(e){e.preventDefault();var url=$('#noticeboard-url').val(),output;if(url==''){alert('You must enter a URL.');}else if(url.indexOf('.n0tice.co')<0){alert('This is not a n0tice URL.');}else{var outwardLink=(url.indexOf('http://')==-1)?'http://'+url:url;$('#map-logo').children('a').attr('href',outwardLink).parent().siblings('#explanation').children('#map-title').children('a').attr('href',outwardLink);output=url.replace('https://','').replace('http://','');output=output.split('.');n0ticeboardID=output[0];$('#demo-pin').fadeOut(150,function(){$(this).remove();});resetMapAfterOptionsChange();buildEmbedCode('nb',n0ticeboardID);}});$('#noticeboard-url').focus(function(){if($(this).val()=='Enter your n0ticeboard URL')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('Enter your n0ticeboard URL');}).keypress(function(e){if(e.keyCode==13)
$('#noticeboard-url-btn').click();});$("#get-embed-btn").click(function(e){e.preventDefault();});$('#toggle-edit-mode').click(function(e){e.preventDefault();if($(this).attr('data-edit')=='off'){$(this).attr('data-edit','on').text('Preview');var toTime=0;var wH=$(window).height(),cH=($('body').hasClass('hash'))?1135:1035,fH=208,spaceLeft=wH-cH,footerOffset=spaceLeft-fH;if(footerOffset<20){setFooterControlsState('minimised');toTime=550;}else{$('div.footer-controls').css('bottom',footerOffset+'px');}
$('#re-embed').fadeOut(100);setTimeout(function(){setMapHeaderState('open');setMapWidgetsState('open');setMapFooterState('open');setTimeout(function(){setOptionPanelState('open');},550);},toTime);}else{$(this).attr('data-edit','off').text('Edit');setOptionPanelState('closed');setTimeout(function(){var baseTime=0;if(!$('#show-header').attr('checked')||($('#map-instructions').text()==''&&($('#edit-map-title').val()=='Add a title and hit enter'||$('#edit-map-title').val()=='')&&($('#map-logo').attr('style')==undefined||$('#map-logo').attr('style')==''))){setMapHeaderState('closed');}else{if($('#map-instructions').text()==''){$('#map-instructions').hide();}
if($('#edit-map-title').val()=='Add a title and hit enter'||$('#edit-map-title').val()==''){$('#map-title').hide();}
if($('#map-logo').attr('style')==undefined||$('#map-logo').attr('style')==''){$('#map-logo').addClass('hidden3');}
$('#editable-header').addClass('live-view');}
setTimeout(function(){if($('#show-widgets').attr('checked')){$('#editable-widgets').addClass('live-view').children('div.half-size-div').addClass('live-view');}else{setMapWidgetsState('closed');baseTime=baseTime+550;}},baseTime);setTimeout(function(){if($('li.edit-social-link.done').length>0){$('#editable-footer').addClass('live-view');}else{setMapFooterState('closed');}
if(!shouldMinimiseFooter()){setTimeout(function(){setFooterControlsState('full');},500);}
setTimeout(function(){$('#re-embed').fadeIn(100);},500)},baseTime);},450);}});$('#edit-map-logo').change(function(e){var that=$(this);if(that.attr('checked')){$('#edit-map-logo-cont').addClass('on');}else{$('#edit-map-logo-cont').removeClass('on done');$('#remove-image').css('opacity',0);buildEmbedCode('i','');}});$('#img-url').focus(function(){if($(this).val()=='Paste your URL and hit enter')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('Paste your URL and hit enter');}).keypress(function(e){var that=$(this);if(e.keyCode==13){var url=that.val();if(url==''||!isURL(url)){that.val('');alert('You must use a valid url');}else{buildEmbedCode('i',url);var styleVal='background-image: url('+url+')';$('#map-logo').attr('style',styleVal);if(isOldIE){setTimeout(function(){$('#map-logo').css("background-size","cover");},1000);}
$('#edit-map-logo-cont').addClass('done');$('#remove-image').css('opacity',1);setTimeout(function(){$('#edit-map-logo-cont').addClass('hide');},400);}}});$('#remove-image').click(function(e){e.preventDefault();var checkbox=$('#edit-map-logo');if(checkbox.attr('checked')){checkbox.removeAttr('checked').change();$('#map-logo').attr('style','background-image: url()').removeAttr('style');if(isOldIE){$('#map-logo').children('img').remove();}
$('#edit-map-logo-cont').removeClass('on done').children('#img-url').val('Paste your URL and hit enter');buildEmbedCode('i','');}});$('#show-header').change(function(e){var that=$(this);if(that.attr('checked')){setMapHeaderState('active');buildEmbedCode('sh','true');}else{setMapHeaderState('inactive');buildEmbedCode('sh','false');$('#edit-map-title-cont').removeClass('hide');}});$('#edit-map-title').focus(function(){if($(this).val()=='Add a title and hit enter')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('Add a title and hit enter');}).keyup(function(e){var title=$(this).val();var siteTitle=(title=='')?'\u00A0':title;$('#map-title').children('a').text(siteTitle);buildEmbedCode('t',title);if(e.keyCode==13&&title!=''&&title!='Add a title and hit enter'){$('#edit-map-title-cont').addClass('hide');}});$('#edit-map-hash').focus(function(){if($(this).val()=='Write a description of your map')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('Write a description of your map');}).keyup(function(e){var text=$(this).val();if(text.length<140){$('#map-instructions').text(text);buildEmbedCode('d',text);}else{var allowed=text.substr(0,140);$('#edit-map-hash').val(allowed);}});$('#edit-map-logo-cont.hide,#edit-map-title-cont.hide,#edit-map-hash-cont.hide').live('click',function(e){e.preventDefault();$(this).removeClass('hide')});$('input.toggle-social-link').change(function(e){var that=$(this);if(that.attr('checked')){that.parent('li.edit-social-link').addClass('on');}else{that.parent('li.edit-social-link').removeClass('on done');var service=that.attr('id').replace('foot-','').replace('-url','').replace('edit-','');buildEmbedCode(service,'');setSocialUrls(service,'');}});if(swfobject.hasFlashPlayerVersion("9.0.18")){$("#get-embed-btn").zclip({path:'assets/swf/ZeroClipboard.swf',copy:function(){return $('#footer-embed-code').val();},beforeCopy:function(){$('#footer-embed-code').select();},afterCopy:function(){alert("The embed code has been copied to your clipboard.");performRequiredOpening(true);}});}else{$("#get-embed-btn").click(function(e){e.preventDefault();performRequiredOpening();$('#footer-embed-code').select();setTimeout(function(){alert('Please copy the selected code below to embed your map.');},1300);});}
$('input.social-link-tb').focus(function(){if($(this).val()=='add a url and hit enter')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('add a url and hit enter');}).keypress(function(e){var that=$(this);if(e.keyCode==13){var url=that.val();var service=that.attr('id').replace('foot-','').replace('-url','').replace('edit-','');if(service=='gp'&&url.indexOf('plus.google')<0){alert('You must use a valid Google+ url');}else if(service=='fb'&&url.indexOf('facebook.')<0){alert('You must use a valid Facebook url');}else if(service=='tw'&&url.indexOf('twitter.')<0){alert('You must use a valid Twitter url');}else{if(url.indexOf('http')!=0)
url='http://'+url;buildEmbedCode(service,url);setSocialUrls(service,url);that.parent('li.edit-social-link').addClass('done');}}});$('#show-widgets').change(function(e){var that=$(this);if(that.attr('checked')){setMapWidgetsState('active');buildEmbedCode('w','true');}else{setMapWidgetsState('inactive');buildEmbedCode('w','false');}});$('input.color-scheme').change(function(e){var that=$(this);if(that.attr('checked')){var c=that.val();$('div.wrapper').attr('class','wrapper '+c);mapColour=c
map.setMapTypeId(c);buildEmbedCode('c',c);forceResetMarkers(true);}});$('#map-loc-switch').click(function(e){e.preventDefault();var that=$(this);var z=map.getZoom(),lat=map.getCenter().lat().toString(),lng=map.getCenter().lng().toString(),loc=lat.substr(0,6)+','+lng.substr(0,6);that.siblings('#map-loc-clear').removeClass('hidden').siblings('#map-loc-divi').removeClass('hidden');savedZoomlvl=zoomlvl;savedMapCenter=ukMapCenter;ukMapCenter=new google.maps.LatLng(lat,lng);overideClusterBounds=true;zoomlvl=z;buildEmbedCode('loc',lat+','+lng);buildEmbedCode('z',z);});$('#map-loc-clear').click(function(e){e.preventDefault();var that=$(this);that.addClass('hidden').siblings('#map-loc-divi').addClass('hidden');zoomlvl=savedZoomlvl;ukMapCenter=savedMapCenter;overideClusterBounds=false;if(ib!=undefined)ib.close();resetFilter();resetMarkers();buildEmbedCode('loc','');buildEmbedCode('z','');});$('#map-tags-switch').change(function(e){var that=$(this);var ta=$('#tag-filter-ta');if(that.attr('checked')){if(ta.val()!=''&&ta.val()!='Add word(s) and hit enter'){var val=$.trim(ta.val());ta.blur();initFilterPosts(val);}else{ta.focus();}}else{ta.val('').blur();buildEmbedCode('tl','');adminFilterTerm=undefined;resetMapAfterOptionsChange();}});$('#tag-filter-ta').focus(function(){if($(this).val()=='Add word(s) and hit enter')
$(this).val('');}).blur(function(){if($(this).val()==''){if($('#map-tags-switch').attr('checked')&&adminFilterTerm!=undefined){$(this).val(adminFilterTerm);}else{$(this).val('Add word(s) and hit enter');$('#map-tags-switch').removeAttr('checked');}}}).keypress(function(e){var that=$(this);if(e.keyCode==13){e.preventDefault();if(that.val()!=''){var val=$.trim(that.val());$('#map-tags-switch').attr('checked','checked');that.blur();initFilterPosts(val);}else{$('#map-tags-switch').removeAttr('checked').change();}}});function initFilterPosts(q){buildEmbedCode('tl',q);adminFilterTerm=q;resetMapAfterOptionsChange();}
$('span.tool-tip-btn').hover(function(){var text=$(this).attr('data-desc'),pos=$(this).offset(),tooltip='<div class="tool-tip" style="top:'+pos.top+'px;left:'+(pos.left+20)+'px;">'+text+'</div>';$('body').append(tooltip);$('div.tool-tip').css('opacity',1);},function(){$('div.tool-tip').css('opacity',0).remove();});
function setFeaturedReporter()
{tmpPopReviewArray=globalReviews;var authorID=-1;var authorCount=new Array();var isFeaturedAuthor=-1;for(ii in featuredReporterArr)
{authorCount[ii]=0;if(featuredReporterArr[ii]['featured']!=undefined)
{isFeaturedAuthor=ii;}
for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i]['user']['username']!=undefined&&tmpPopReviewArray[i]['user']['username']==featuredReporterArr[ii]['n0tice'])
{authorCount[ii]++;}else if(tmpPopReviewArray[i]['instagram_user']!=undefined&&tmpPopReviewArray[i]['instagram_user']==featuredReporterArr[ii]['instagram'])
{authorCount[ii]++;}else if(tmpPopReviewArray[i]['twitter_user']!=undefined&&tmpPopReviewArray[i]['twitter_user']==featuredReporterArr[ii]['twitter'])
{authorCount[ii]++;}
else if(tmpPopReviewArray[i]['headline']!=undefined&&tmpPopReviewArray[i]['headline'].indexOf("@"+featuredReporterArr[ii]['twitter'])!=-1)
{authorCount[ii]++;}}}
for(ii in featuredReporterArr)
{for(i in tmpPopReviewArray)
{var headline=String(tmpPopReviewArray[i]['headline']);if(tmpPopReviewArray[i]['user']['username']!=undefined&&tmpPopReviewArray[i]['user']['username']==featuredReporterArr[ii]['n0tice']&&authorCount[i]>2)
{authorID=ii;break;}else if(tmpPopReviewArray[i]['instagram_user']!=undefined&&tmpPopReviewArray[i]['instagram_user']==featuredReporterArr[ii]['instagram']&&authorCount[i]>2)
{authorID=ii;break;}else if(tmpPopReviewArray[i]['twitter_user']!=undefined&&tmpPopReviewArray[i]['twitter_user']==featuredReporterArr[ii]['twitter']&&authorCount[i]>2)
{authorID=ii;break;}else if(tmpPopReviewArray[i]['headline']!=undefined&&headline.indexOf("@"+featuredReporterArr[ii]['twitter'])!=-1&&authorCount[i]>2)
{authorID=ii;break;}}
if(authorID!=-1)
{break;}}
if(isFeaturedAuthor!=-1&&authorCount[isFeaturedAuthor]>0)
{authorID=isFeaturedAuthor;}
if(authorID==-1)
{$('#featured-reporter-box').hide();return false;}
var numberOfReviews=authorCount[authorID];var sortTmpArr=new Array();for(i in tmpPopReviewArray)
{var headline=String(tmpPopReviewArray[i]['headline']);if(tmpPopReviewArray[i]['user']['username']!=undefined&&tmpPopReviewArray[i]['user']['username']==featuredReporterArr[authorID]['n0tice'])
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){sortTmpArr.push(tmpPopReviewArray[i]);}}
else if(tmpPopReviewArray[i]['instagram_user']!=undefined&&tmpPopReviewArray[i]['instagram_user']==featuredReporterArr[authorID]['instagram'])
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){sortTmpArr.push(tmpPopReviewArray[i]);}}else if(tmpPopReviewArray[i]['twitter_user']!=undefined&&tmpPopReviewArray[i]['twitter_user']==featuredReporterArr[authorID]['twitter'])
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){sortTmpArr.push(tmpPopReviewArray[i]);}}else if(tmpPopReviewArray[i]['headline']!=undefined&&headline.indexOf("@"+featuredReporterArr[authorID]['twitter'])!=-1)
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){sortTmpArr.push(tmpPopReviewArray[i]);}}}
var latestTmpArr=new Array();for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined)
{latestTmpArr.push(tmpPopReviewArray[i]);}
if(latestTmpArr.length==6)
{break;}}
var imageHTML='';var end="";for(i in latestTmpArr)
{if(i==5)
{end='class="end"';}
imageHTML+='<li '+end+'><a href="#" class="open-single" data-marker-id="'+latestTmpArr[i].id+'"><img src="'+latestTmpArr[i].updates[0].image.medium+'" width="130"></a></li>';if(i==5)
{break;}}
$('#featured-reporter-latest-images').html(imageHTML);imageHTML='<img src="assets/img/default-featured.jpg" width="75" height="75">';if(featuredReporterArr[authorID]['twitter']!=undefined)
{imageHTML='<img src="https://api.twitter.com/1/users/profile_image?screen_name='+featuredReporterArr[authorID]['twitter']+'&size=bigger" width="75" height="75">';}
$('#featured-reporter-profile-image').attr('href','http://twitter.com/'+featuredReporterArr[authorID]['twitter']).html(imageHTML);var userDetail='<a href="http://n0tice.com/user/'+featuredReporterArr[authorID]['n0tice']+'" target="_blank">'+featuredReporterArr[authorID]['name']+'</a>, '+featuredReporterArr[authorID]['location'];var userSocial=new Array();if(featuredReporterArr[authorID]['twitter']!=undefined)
{userSocial.push('Twitter: <a href="http://twitter.com/'+featuredReporterArr[authorID]['twitter']+'" target="_blank">@'+featuredReporterArr[authorID]['twitter']+'</a>');}
if(featuredReporterArr[authorID]['instagram']!=undefined)
{userSocial.push('Instagram: <a href="http://instagram.com/'+featuredReporterArr[authorID]['instagram']+'" target="_blank">@'+featuredReporterArr[authorID]['instagram']+'</a>');}
$('#featured-reporter-details').html(userDetail).siblings('#featured-reporter-social').html(userSocial.join(", "));$('#featured-reporter-reviews-count').text(numberOfReviews).siblings('#featured-reporter-all-reviews-link').attr('data-marker-author',authorID);if(numberOfReviews==1)
{$('#featured-reporter-reviews-plural').text('tip');}
$('#featured-reporter-box').css('background-image','#fff').find('*').fadeIn(300,function(){$('#featured-reporter-box').removeClass('loading');});}
function setupHeaderBar()
{setupSearchBox();if(navigator.geolocation!=undefined){var openW=110;$('#filter-list').children('li').eq(0).css('width',openW);setTimeout(function(){$('#find-me').fadeIn();},500);}else{$('#date-picker').addClass('no-loc');}
$('#reset-map').click(function(e){e.preventDefault();_gaq.push(['_trackPageview','/reset-map']);if(ib!=undefined)ib.close();resetFilter();resetMarkers();});$('#guardian-tips').click(function(e){e.preventDefault();openAuthor(this);});$('#find-me').click(function(){_gaq.push(['_trackPageview','/find-me']);navigator.geolocation.getCurrentPosition(function(pos){if(inMapsBounds(pos.coords.latitude,pos.coords.longitude))
{resetMap(pos.coords.latitude,pos.coords.longitude,12);}
else
{showErrorBox(4);}},function(error){showErrorBox(5);});return false;});$('#filter-form').click(function(e){e.preventDefault();var dd=$('#filter-dd');if(dd.height()<=0){var h=dd.children('li').eq(0).outerHeight()*dd.children('li').length;if(navigator.userAgent.indexOf('MSIE 7')>-1)
h=h+7;$('#filter-handle').css('background-position','0 0');dd.css('height',h);setTimeout(function(){bindFilterClose();},500);}else{$('#filter-handle').css('background-position','0 -48px');dd.css('height',0);unbindFilterClose();}});function bindFilterClose(){$('body').click(function(e){$('#filter-handle').css('background-position','0 -48px');$('#filter-dd').css('height',0);unbindFilterClose();});$('#filter-dd').bind('click',function(e){e.stopPropagation();});}
function unbindFilterClose(){$('body').unbind('click');$('#filter-dd').unbind('click');}
$('#filter-dd').children('li').click(function(e){e.preventDefault();var dd=$('#filter-dd');dd.children('li').removeClass('active');var filterVal=$(this).addClass('active').attr('data-value');filterType=filterVal;$('#current-filter').text(filterVal);openFilter(filterVal);setTimeout(function(){$('#filter-form').click();},300);});}
function setLatestPosts()
{tmpPopReviewArray=globalReviews;var latestTmpArr=new Array();for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined)
{latestTmpArr.push(tmpPopReviewArray[i]);}
if(latestTmpArr.length==6)
{break;}}
var imageHTML='';for(ii in latestTmpArr){var no=parseInt(ii)+1;var end=(no%3==0)?'class="end" data-id="'+no+'"':'data-id="'+no+'"';imageHTML+='<li '+end+'><a href="#" class="open-single" data-marker-id="'+latestTmpArr[ii].id+'"><img src="'+latestTmpArr[ii].updates[0].image.medium+'" width="88"></a></li>';}
$('#featured-reporter-latest-images').html(imageHTML);$('#featured-reporter-box').css('background-image','#fff').find('*').fadeIn(300,function(){$('#featured-reporter-box').removeClass('loading');});}
var blueMap=[{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#94aec6"},{"saturation":-10}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"saturation":-100}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"lightness":33},{"saturation":-78},{"color":"#e4ebe4"}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":100}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#ccd7df"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":73}]},{"featureType":"poi.park","stylers":[{"lightness":100}]},{"featureType":"poi","stylers":[{"lightness":-6},{"color":"#dde4e1"},{"saturation":-27}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"saturation":-11},{"lightness":-9},{"visibility":"simplified"}]},{"featureType":"transit.line","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#808080"},{"visibility":"on"},{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#fffaff"},{"weight":0.6}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]}];var redMap=[{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":35},{"color":"#9ec1db"}]},{"featureType":"poi","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"color":"#529466"},{"visibility":"on"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"},{"color":"#809080"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"saturation":-78},{"color":"#dabf9b"},{"lightness":70}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":100}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#ae4040"},{"gamma":0.96},{"lightness":100}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":73}]},{"featureType":"poi.park","stylers":[{"lightness":100}]},{"featureType":"poi","stylers":[{"saturation":-9},{"color":"#a66f68"},{"lightness":78}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"saturation":-11},{"lightness":-9},{"visibility":"simplified"}]},{"featureType":"transit.line","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#808080"},{"visibility":"on"},{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#fffaff"},{"weight":0.6}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]}];var yellowMap=[{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":4},{"color":"#a5b7c8"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"saturation":-100}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#edd799"},{"lightness":33}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":100}]},{"featureType":"road.highway","stylers":[{"color":"#e4d197"},{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":100}]},{"featureType":"poi.park","stylers":[{"lightness":100}]},{"featureType":"poi","stylers":[{"color":"#edd799"},{"lightness":48}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","stylers":[{"visibility":"on"},{"color":"#ecd6a3"},{"saturation":-11},{"lightness":29}]},{"featureType":"transit.line","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#808080"},{"visibility":"on"},{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#fffaff"},{"weight":0.6}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]}];function initialize(){var mapOptions={zoom:zoomlvl,minZoom:2,scrollwheel:false,mapTypeControl:false,disableDefaultUI:false,streetViewControl:false,center:new google.maps.LatLng('53.61005007044678','-3.155717999999979'),mapTypeId:mapColour};map=new google.maps.Map(document.getElementById('map'),mapOptions);var styledMapB=new google.maps.StyledMapType(blueMap,{name:'blue'});map.mapTypes.set('blue',styledMapB);var styledMapR=new google.maps.StyledMapType(redMap,{name:'red'});map.mapTypes.set('red',styledMapR);var styledMapY=new google.maps.StyledMapType(yellowMap,{name:'yellow'});map.mapTypes.set('yellow',styledMapY);if(testingMode)
{var bounds=new google.maps.LatLngBounds(new google.maps.LatLng(countryBounds[0],countryBounds[1]),new google.maps.LatLng(countryBounds[2],countryBounds[3]));var rectangle=new google.maps.Rectangle({bounds:bounds,editable:true});var rectangle=new google.maps.Rectangle({bounds:bounds,editable:false});rectangle.setMap(map);}
google.maps.event.addListener(map,'zoom_changed',function(e){var currZoom=map.getZoom();if(currZoom>13){if(currZoom>18){$('a.expand-cluster').addClass('hidden');$('a.view-pin').addClass('hidden');}else{$('a.expand-cluster').removeClass('hidden');$('a.view-pin').removeClass('hidden');}}else{removePlaces();$('a.expand-cluster').removeClass('hidden');$('a.view-pin').removeClass('hidden');}});}
function removeMarkers(){if(markerCluster)
markerCluster.clearMarkers();for(i in markerArray){markerArray[i].mrkrObj.setMap(null);markerArray[i].mrkrObj=null;}
markerArray.length=0;}
function addMarkers(ven,keepBounds){for(i in ven){var marker;var markerType=$('div.wrapper').attr('class').replace('wrapper ','');ico=assetBase+'marker-'+markerType+'.png';marker=new google.maps.Marker({position:new google.maps.LatLng(ven[i].place.latitude,ven[i].place.longitude),map:map,icon:ico,title:ven[i].id,visible:true});markerArray.push({id:ven[i].id,mrkrObj:marker,noticeData:ven[i]});google.maps.event.addListener(marker,'click',function(){if(ib!=undefined)ib.close();var hideExpandBtns=(map.getZoom()>=17)?'hidden':'';var hideBackBtns='';var rdArgs={};var c=getMarkersCluster(this.title);if(c.markers_.length>1){var markers=c.getMarkers(),array=[],num=0,max=markers.length;for(i=0;i<max;i++){num++;array.push(markers[i].getTitle());}
clusterMarkersTemp=array;}else{hideBackBtns='hidden';rdArgs.arrows=false;}
var reviewDetail=buildMapIbDetail(this.title,rdArgs);ibOptions.pixelOffset=(isEmbed550)?new google.maps.Size(-183,-303):new google.maps.Size(-263,-422);ibOptions.boxStyle=(isEmbed550)?{background:'#fff',width:'367px',height:'228px',padding:'0px'}:{background:'#fff',width:'527px',height:'326px',padding:'0px'};ibOptions.content=infoBoxDetail.replace('{TOTAL-REPORTS}',max+' tips').replace('{DETAIL}',reviewDetail).replace(/{BTN-CLASS}/g,hideExpandBtns).replace(/{BACK-BTN-CLASS}/g,hideBackBtns);ib=new InfoBox(ibOptions);ib.open(map,this);setTimeout(function(){bindDetailImgHandling();bindDetailHeadlineScroll();},300);});}
var clusterStyles=[{url:assetBase+'cluster-1-'+markerType+'.png',height:48,width:29,anchor:($('html').hasClass('lt-ie8'))?[6,0]:[6,0],textColor:'#fff',fontFamily:'Helvetica, sans-serif',fontWeight:'normal',textSize:11},{url:assetBase+'cluster-2-'+markerType+'.png',height:53,width:38,anchor:($('html').hasClass('lt-ie8'))?[12,0]:[11,0],textColor:'#fff',fontFamily:'Helvetica, sans-serif',fontWeight:'normal',textSize:11},{url:assetBase+'cluster-3-'+markerType+'.png',height:58,width:48,anchor:($('html').hasClass('lt-ie8'))?[16,0]:[16,0],textColor:'#fff',fontFamily:'Helvetica, sans-serif',fontWeight:'normal',textSize:11}];var markerArrayTemp=[];for(i in markerArray){markerArrayTemp.push(markerArray[i].mrkrObj);}
var clusterWidth=isEmbed550?68:85;markerCluster=new MarkerClusterer(map,markerArrayTemp,{gridSize:clusterWidth,zoomOnClick:false,minimumClusterSize:2,maxZoom:21,styles:clusterStyles});markerArrayTemp=[];if(markersFirstRound){if($('#map').hasClass('opacity0')){showMap();}
if(keepBounds==undefined)
fitMapToClusters();setTimeout(function(){setPageOpenMap();},500);markersFirstRound=false;}else{if(keepBounds==undefined)
fitMapToClusters();}}
function removePlaces(){for(i in placesOnMap){placesOnMap[i].mrkrObj.setMap(null);placesOnMap[i].mrkrObj=null;}
placesOnMap.length=0;}
function addPlaces(ven){for(i in ven){var placeMarker;var markerType=(ven[i].category==undefined)?'':'-'+ven[i].category;var markerSize=(isEmbed550)?new google.maps.Size(16,21):google.maps.Size(16,21);var markerAnchor=(isEmbed550)?new google.maps.Size(8,21):google.maps.Point(8,21);var ico=new google.maps.MarkerImage(assetBase+'place-marker'+markerType+'.png',markerSize,new google.maps.Point(0,0),markerAnchor);if(isEmbed550)
ico=assetBase+'place-marker'+markerType+'.png';var placeId='place-'+i;placeMarker=new google.maps.Marker({position:new google.maps.LatLng(ven[i]['geo:lat'],ven[i]['geo:long']),map:map,icon:ico,title:placeId,visible:true});placesOnMap.push({id:placeId,mrkrObj:placeMarker,placeData:ven[i]});google.maps.event.addListener(placeMarker,'click',function(){if(ib!=undefined)ib.close();var that=this;var places=placesOnMap;var placeObj=$.grep(places,function(n){return n.id==that.title;});var placeItem=placeObj[0].placeData;ibOptions.pixelOffset=(isEmbed550)?new google.maps.Size(-183,-110):new google.maps.Size(-263,-140);ibOptions.boxStyle=(isEmbed550)?{background:'#fff',width:'367px',height:'58px',padding:'0px'}:{background:'#fff',width:'527px',height:'78px',padding:'0px'};ibOptions.content=placeDetail.replace('{TITLE}',placeItem.title).replace('{URL}',placeItem.link).replace('{BASE}',assetBase);ib=new InfoBox(ibOptions);ib.open(map,this);});}}
function showMap(){if(!$('html').hasClass('lt-ie8')){$('#map').animate({opacity:1},300,function(){$('#map').removeClass('opacity0');});}}
function fitMapToClusters(){if(!overideClusterBounds){var LatLngList=[];var c=0;while(c<markerArray.length){var mrkr=markerArray[c].mrkrObj.position;LatLngList.push(new google.maps.LatLng(mrkr.lat(),mrkr.lng()));c++;}
var bounds=new google.maps.LatLngBounds();for(var i=0,LtLgLen=LatLngList.length;i<LtLgLen;i++){bounds.extend(LatLngList[i]);}
map.fitBounds(bounds);if($('#map').hasClass('opacity0')){setTimeout(function(){showMap();},600);}}else{map.setZoom(zoomlvl);map.panTo(ukMapCenter);}}
function getMarkersCluster(markerId){var clusters=markerCluster;var currCluster;for(i in clusters.clusters_){currCluster=clusters.clusters_[i];var mCount=0;var l=currCluster.markers_.length;while(mCount<l){if(currCluster.markers_[mCount].title==markerId){return currCluster;}
mCount++;}}}
function openMarkerDetail(id,listView){if(id==undefined)showErrorBox(6);if(ib!=undefined)ib.close();if(!isDefaultMap)resetMarkers();var markers=markerArray;var item=$.grep(markers,function(n){return n.id==id;});var m=item[0].mrkrObj;var ll=m.getPosition();map.setZoom(17);map.panTo(ll);if(listView==undefined){setTimeout(function(){google.maps.event.trigger(m,'click');},500);}else{setTimeout(function(){var c=getMarkersCluster(id);if(c==undefined){showErrorBox(7);return false}
c.clusterIcon_.triggerClusterClick(true);},500);}}
function showReviewPageInIb(that){var el=$(that);var id=el.attr('data-marker-id');var reviewDetail=buildMapIbDetail(id);var distance=(isEmbed550)?-367:-527;el.parents('div.ib-page-list').siblings('div.ib-page-detail').append(reviewDetail).parent('div.ib-page-reel').animate({'margin-left':distance},400);bindDetailImgHandling();bindDetailHeadlineScroll();}
function ibPageBack(that){var el=$(that);if(el.parents('div.ib-page-reel').find('ul.ib-feed-list').length>0){el.parents('div.ib-page-reel').animate({'margin-left':0},400).find('div.ib-detail').remove();}else{var id=el.siblings('div.ib-detail').attr('data-marker-id');var c=getMarkersCluster(id);if(c==undefined){showErrorBox(7);return false;}
var markers=c.getMarkers(),array=[],num=0,max=markers.length;for(i=0;i<max;i++){num++;array.push(markers[i].getTitle());}
currentCluster=c;var list=buildMapIbList(array,max,true);el.parents('div.ib-page-detail').siblings('div.ib-page-list').append(list).parent('div.ib-page-reel').animate({'margin-left':0},400).find('div.ib-detail').remove();bindJSP();bindListRollovers();}}
function buildMapIbList(ids,l,showAll){var markers=markerArray;var idLeng=ids.length;var max=(idLeng>20&&showAll!=true)?20:idLeng;var i=0;var output=['<ul class="ib-feed-list" data-position="'+max+'" data-max="'+idLeng+'">'];while(i<max){var item=$.grep(markers,function(n){return n.id==ids[i];});var m=item[0].noticeData;var imgPrefix=$('div.wrapper').attr('class').replace('wrapper ','');var img='<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+assetBase+'list-default-img-'+imgPrefix+'.gif" ></a>';if(m.updates[0]!=undefined&&m.updates[0].image!=undefined){img='<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+m.updates[0].image.small+'" ></a>';}
var cat=(m.category==undefined)?'':m.category;var isGuard=[];isGuard[0]=(m.is_guardian_music)?'guardian':'';isGuard[1]=(m.is_guardian_music)?'<span class="guardian-icon">&nbsp;</span>':'';var exerptL=isEmbed550?30:75;var li=ibListItem.replace('{IMG}',img).replace('{MARKER-ID}',m.id).replace('{GUARDIAN}',isGuard[0]).replace('{GUARDIAN-ICO}',isGuard[1]).replace('{HEADLINE}',makeExerpt(m.headline,exerptL)).replace('{CAT}',cat).replace('{LOC}',makeExerpt(m.location,45)).replace('{DATE}',m.date_formatted);output.push(li);i++;}
output.push('</ul>');return output.join('');}
function pageIbList(){if(canPageIb){canPageIb=false;var list=$('ul.ib-feed-list'),ids=clusterMarkersTemp,markers=markerArray,start=parseInt(list.attr('data-position')),unusedIds=parseInt(list.attr('data-max'))-start,max=(unusedIds<20)?start+unusedIds:start+20;if(max<1)return false;while(start<max){var item=$.grep(markers,function(n){return n.id==ids[start];});var m=item[0].noticeData;var img='<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+assetBase+'list-default-img.gif" ></a>';if(m.updates[0]!=undefined&&m.updates[0].image!=undefined){img='<a href="#" onClick="showReviewPageInIb(this);return false;" class="open-single" data-marker-id="'+m.id+'"><img class="ib-feed-img" width="80" height="80" src="'+m.updates[0].image.small+'" ></a>';}
var cat=(m.category==undefined)?'':m.category;var isGuard=[];isGuard[0]=(m.is_guardian_music)?'guardian':'';isGuard[1]=(m.is_guardian_music)?'<span class="guardian-icon">&nbsp;</span>':'';var exerptL=isEmbed550?30:75;var li=ibListItem.replace('{IMG}',img).replace('{MARKER-ID}',m.id).replace('{GUARDIAN}',isGuard[0]).replace('{GUARDIAN-ICO}',isGuard[1]).replace('{HEADLINE}',makeExerpt(m.headline,exerptL)).replace('{CAT}',cat).replace('{LOC}',makeExerpt(m.location,45)).replace('{DATE}',m.date_formatted);list.children('div.jspContainer').children('div.jspPane').append(li);start++;}
list.attr('data-position',max);reInitJSP();bindListRollovers();setTimeout(function(){canPageIb=true;},500);}}
function buildMapIbDetail(id,args){var markers=markerArray;var item=$.grep(markers,function(n){return n.id==id;});var m=item[0].noticeData;var img='';var imgClass='';var output='';var elementsFaded=(args!=undefined&&args.elementsFaded==true)?'hidden':'';if(m.updates[0]!=undefined&&m.updates[0].image!=undefined){var imgS=(isEmbed550)?163:234;img='<div class="ib-detail-img"><img class="opacity0" width="'+imgS+'" height="'+imgS+'" src="'+m.updates[0].image.medium+'" ></div>';imgClass='hasImg';}
var cat=(m.category==undefined)?'':m.category;var isGuard=[];isGuard[0]=(m.is_guardian_music)?'guardian':'';isGuard[1]=(m.is_guardian_music)?'<span class="guardian-icon">&nbsp;</span>':'';var serv='';var userDetail=['','',m.webUrl,'Read more...'];if(m.twitter_user){userDetail=['@'+m.twitter_user,'https://twitter.com/'+m.twitter_user,m.updates[0].link,'View on Twitter'];serv='twitter';}
if(m.instagram_user){userDetail=['@'+m.instagram_user,'http://instagram.com/'+m.instagram_user,m.updates[0].link,'View on Instagram'];serv='instagram';}
var exerptLen=(img=='')?280:140;var copy=Linkify(m.headline,serv);var hideArrors=(args!=undefined&&args.arrows==false)?'hidden':'';output=ibDetail.replace('{MARKER-ID}',id).replace('{IMG-CLASS}',imgClass).replace('{IMG}',img).replace(/{GUARDIAN}/g,isGuard[0]).replace('{GUARDIAN-ICO}',isGuard[1]).replace('{HEADLINE}',copy).replace('{USERNAME}',userDetail[0]).replace('{USERNAME-URL}',userDetail[1]).replace('{LINK-OUT}',userDetail[2]).replace('{LINK-OUT-COPY}',userDetail[3]).replace('{CAT}',cat).replace('{LOC}',makeExerpt(m.location,20)).replace('{DATE}',m.date_formatted).replace(/{HIDE-ARROWS}/g,hideArrors).replace(/{FADE}/g,elementsFaded);return output;}
function pageIbDetail(back){var markerIds=clusterMarkersTemp,currentId=$('div.ib-detail').attr('data-marker-id'),index=$.inArray(currentId,markerIds),newIndex=(back)?(index==0)?markerIds[markerIds.length-1]:markerIds[index-1]:(index==(markerIds.length-1))?markerIds[0]:markerIds[index+1];var newDetail=buildMapIbDetail(newIndex);$('div.ib-detail').children('img.ib-detail-img').hide();$('div.ib-detail').children('p.user-detail').hide().siblings('div.ib-detail-body').hide();$('div.ib-detail').replaceWith(newDetail);setTimeout(function(){bindDetailImgHandling();bindDetailHeadlineScroll();},50);}
function bindDetailImgHandling(){$('div.ib-detail-img').children('img').unbind('filter').filter(function(){return this.complete;}).each(load_handler).end().load(load_handler);}
function bindDetailHeadlineScroll(){$('div.headline-scroll').jScrollPane({verticalDragMinHeight:12,verticalDragMaxHeight:35});}
function bindListRollovers(){$('ul.ib-feed-list').find('a.open-single').hover(function(){$(this).parents('li').addClass('hover');},function(){$(this).parents('li').removeClass('hover');});}
function bindJSP(){$('ul.ib-feed-list').jScrollPane({verticalDragMinHeight:12,verticalDragMaxHeight:25}).bind('jsp-scroll-y',function(event,scrollPositionY,isAtTop,isAtBottom)
{if(isAtBottom){pageIbList();}});}
function reInitJSP(){var pane=$('ul.ib-feed-list');var api=pane.data('jsp');api.reinitialise();}
function resetMap(lat,lng,z){if(ib!=undefined)ib.close();var zoom=(z==undefined)?zoomlvl:z;map.setZoom(zoom);var ll=new google.maps.LatLng('51.524547576904','-0.08064199984096376');if(lat!=undefined&&lng!=undefined){ll=new google.maps.LatLng(lat,lng);}
map.panTo(ll);}
function resetMarkers(keepBounds){if(!isDefaultMap){if(ib!=undefined)ib.close();filterType='all';removeMarkers();resetSearchDetail();globalReviews=cachedGlobalReviews;addMarkers(globalReviews,keepBounds);isDefaultMap=true;}else{fitMapToClusters();}}
function forceResetMarkers(keepBounds){if(ib!=undefined)ib.close();filterType='all';removeMarkers();resetSearchDetail();globalReviews=cachedGlobalReviews;addMarkers(globalReviews,keepBounds);isDefaultMap=true;}
function resetMarkersForNewBoard(){if(ib!=undefined)ib.close();filterType='all';removeMarkers();resetSearchDetail();cachedGlobalReviews=[];resetLatesReviewSetup();isDefaultMap=true;}
function expandCluster(cluster){if(ib!=undefined)ib.close();if(cluster==undefined)cluster=currentCluster;map.fitBounds(cluster.getBounds());}
function setPopularGig()
{tmpPopReviewArray=globalReviews;var sortTmpArr=new Array();var tmpName;for(i in tmpPopReviewArray)
{tmpName=tmpPopReviewArray[i]['place']['name'];if(!sortTmpArr.hasOwnProperty(tmpName))
{sortTmpArr[tmpName]=1;}
else
{sortTmpArr[tmpName]=parseInt(sortTmpArr[tmpName])+1;}}
var sortedArray=new Array();for(i in sortTmpArr)
{var obj={};obj.count=sortTmpArr[i];obj.name=i;sortedArray.push(obj);}
sortedArray.sort(function(a,b)
{if(a.count>b.count)
return-1;if(a.count<b.count)
return 1;return 0;});var tmpPopularGigArr=new Array();for(ii in sortedArray)
{for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i]['place']['name']==sortedArray[ii].name&&tmpPopularGigArr.length==0)
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){tmpPopularGigArr=tmpPopReviewArray[i];count=sortedArray[ii].count;break;}}}
if(tmpPopularGigArr.length!=0)
{break;}}
var is_latest=false;if(tmpPopularGigArr.length==0)
{is_latest=true;for(i in tmpPopReviewArray)
{if(tmpPopularGigArr.length==0)
{if(tmpPopReviewArray[i].updates[0]!=undefined&&tmpPopReviewArray[i].updates[0].image!=undefined){tmpPopularGigArr=tmpPopReviewArray[i];break;}}}
count=0;for(i in tmpPopReviewArray)
{if(tmpPopReviewArray[i]['place']['name']==tmpPopularGigArr['place']['name'])
{count++;}}}
if(tmpPopularGigArr.length==0)
{$('#most-popular-box').hide();return false;}
var serv='n0tice';if(tmpPopularGigArr['twitter_user']!=undefined)serv='twitter';if(tmpPopularGigArr['instagram_user']!=undefined)serv='instagram';$('#popular-gig-report-content').html(Linkify(makeExerpt(tmpPopularGigArr['headline'],140),serv));if(is_latest)
{if(count<2)
{$('#popular-gig-report-num-reviews').hide();}}
$('#popular-gig-view-all-reviews-link').attr('data-marker-id',tmpPopularGigArr.id).siblings('#popular-gig-report-num').text(count);if(count==1)
{$('#popular-gig-report-plural').text('tip');}
var cat=(tmpPopularGigArr['category']==undefined)?'':tmpPopularGigArr['category'];$('#popular-gig-report-location').text(tmpPopularGigArr['location']).siblings('#popular-gig-report-date').text(tmpPopularGigArr['date_formatted']).parent('p').addClass(cat);var imageHTML='<img src="'+tmpPopularGigArr.updates[0].image.medium+'" width="146" height="146">';$('#ppopular-gig-report-image').attr('data-marker-id',tmpPopularGigArr.id).html(imageHTML);$('#most-popular-box').css('background','#fff').find('*').fadeIn(300,function(){$('#most-popular-box').removeClass('loading');});}
function openEmbedBox(){var eCode='<iframe style="border: none; overflow: hidden; height: 600px; width: 600px;" title="#n0ticeMap" src="'+embedUrl+'" frameborder="0" scrolling="no" width="600" height="600" ></iframe>';var eBox=embedBox.replace('{TITLE}','Embed').replace('{CODE}',eCode).replace('{MESSAGE}','Add this code to your blog to embed the map.<br>Link: '+embedUrl+'');$("div.wrapper").append(eBox);$("#error-box-close").click(function(e){e.preventDefault();$("#embed-box").fadeOut(150,function(){$(this).remove();});});$("#embed_code").focus(function(){$(this).select();}).mouseup(function(e){return false;});}
function showSearchDetail(str)
{isDefaultMap=false;$("#search-box").val(str).attr("readonly",true).addClass('clear').blur().siblings("#search-map").addClass('clear');}
function resetSearchDetail()
{isDefaultMap=true;$("#search-box").val("Search keywords or location").attr("readonly",false).removeClass('clear').blur().siblings("#search-map").removeClass('clear');}
function searchButtonClicked()
{}
function initSearch(q,filter){if(q!=''&&q!='Search keywords or location'){if(!isDefaultMap)
filterType='all';searchReviews(q,filter);}else{showErrorBox(9);resetSearchDetail();}}
function setupSearchBox(){$('#search-map').unbind('click');$('#search-map').click(function(e){e.preventDefault();if($(this).hasClass('clear')){resetMarkers();}else{var q=$('#search-box').val();initSearch(q);showSearchDetail("Searching...");}});$('#search-box').focus(function(){if($(this).val()=='Search keywords or location')
$(this).val('');}).blur(function(){if($(this).val()=='')
$(this).val('Search keywords or location');}).keypress(function(e){if(e.keyCode==13){e.preventDefault();if($(this).siblings('a.search-btn').is('#search-map')&&$('#search-box').val()!="Searching..."){var q=$('#search-box').val();initSearch(q);showSearchDetail("Searching...");}}});}