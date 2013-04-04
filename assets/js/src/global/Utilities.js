function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  }
  else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}

function setCaretToPos (input, pos) {
  setSelectionRange(input, pos, pos);
}

//adds links to urls, hashtags and @usernames in a string
function Linkify(str,service){
  //var base = 'http://n0tice.com/user/'; // taken out because n0tice users not working
  var base = 'https://twitter.com/';
  if (service == 'twitter'){
    base = 'https://twitter.com/';  
  }else if (service == 'instagram'){
    base = 'http://instagram.com/';
  }

  //var cleanUserLink = new RegExp(base + "@", 'g');
  var output = str.replace( /(http:\/\/[^\s]{5,})/g,'<a href="$1" target="_blank">$1</a>')
  .replace( /(https:\/\/[^\s]{5,})/g,'<a href="$1" target="_blank">$1</a>')
  //.replace( /(#[^\s]{5,})/g,'<a href="https:\/\/twitter.com\/search?q=$1" target="_blank">$1</a>')
  //.replace( /(@[^\s]{5,})/g,'<a href="'+base+'$1" target="_blank">$1</a>')
  //.replace( /search\?q=#/g,"search?q=%23")
  .replace( /(#[^\s]{5,})/g,'<a href="http:\/\/n0tice.com\/search?q=$1&type=&user=&count=&noticeboard=localshopping" target="_blank">$1</a>')
  .replace( /(@[^\s]{5,})/g,'<a class="at-user" href="http:\/\/n0tice.com\/search?q=$1&type=&user=&count=&noticeboard=localshopping" target="_blank">$1</a>')
  .replace( /search\?q=#/g,"search?q=%23")
  .replace( /search\?q=@/g,"search?q=%40");

  //.replace( cleanUserLink,base);

  return output;
}

//adds styling to what would be a links to urls, hashtags and @usernames in a string
function falseLinkify(str){
  var output = str.replace( /(http:\/\/[^\s]{5,})/g,'<span class="false-link-out">$1</span>')
  .replace( /(https:\/\/[^\s]{5,})/g,'<span class="false-link-out">$1</span>')
  .replace( /(#[^\s]{5,})/g,'<span class="false-link-out">$1</span>')
  .replace( /(@[^\s]{5,})/g,'<span class="false-link-out">$1</span>');
  return output;
}

//trim and add elipsis. where l is the desired char count
function makeExerpt(str,l){
  var elipsis = (str.length > l)? ' ...' : '';
  var output = str.substring(0, l) + elipsis;
  return output;
}

var load_handler = function imgSizes(){
    var img = $(this);
    img.animate({opacity:'1.0'});
}

function pad2(number) {
   
     return (number < 10 ? '0' : '') + number
   
}

var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

// Remove URL from the end of a String
function removeURLFromEnd( str , domain)
{
  var geturl = new RegExp(
          "(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
         ,"g"
       );

  var urlMatches = str.match(geturl);
  if(urlMatches!= undefined && urlMatches.length > 0)
  {
    if(urlMatches[urlMatches.length-1].search( domain ) > 0)
    {
      str = str.replace( urlMatches[urlMatches.length-1],'');
    }
  }

  return str;
}


var split;

// Avoid running twice; that would break the `nativeSplit` reference
split = split || function (undef) {

    var nativeSplit = String.prototype.split,
        compliantExecNpcg = /()??/.exec("")[1] === undef, // NPCG: nonparticipating capturing group
        self;

    self = function (str, separator, limit) {
        // If `separator` is not a regex, use `nativeSplit`
        if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
            return nativeSplit.call(str, separator, limit);
        }
        var output = [],
            flags = (separator.ignoreCase ? "i" : "") +
                    (separator.multiline  ? "m" : "") +
                    (separator.extended   ? "x" : "") + // Proposed for ES6
                    (separator.sticky     ? "y" : ""), // Firefox 3+
            lastLastIndex = 0,
            // Make `global` and avoid `lastIndex` issues by working with a copy
            separator = new RegExp(separator.source, flags + "g"),
            separator2, match, lastIndex, lastLength;
        str += ""; // Type-convert
        if (!compliantExecNpcg) {
            // Doesn't need flags gy, but they don't hurt
            separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
        }
        /* Values for `limit`, per the spec:
         * If undefined: 4294967295 // Math.pow(2, 32) - 1
         * If 0, Infinity, or NaN: 0
         * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
         * If negative number: 4294967296 - Math.floor(Math.abs(limit))
         * If other: Type-convert, then use the above rules
         */
        limit = limit === undef ?
            -1 >>> 0 : // Math.pow(2, 32) - 1
            limit >>> 0; // ToUint32(limit)
        while (match = separator.exec(str)) {
            // `separator.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0].length;
            if (lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));
                // Fix browsers whose `exec` methods don't consistently return `undefined` for
                // nonparticipating capturing groups
                if (!compliantExecNpcg && match.length > 1) {
                    match[0].replace(separator2, function () {
                        for (var i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undef) {
                                match[i] = undef;
                            }
                        }
                    });
                }
                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                }
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= limit) {
                    break;
                }
            }
            if (separator.lastIndex === match.index) {
                separator.lastIndex++; // Avoid an infinite loop
            }
        }
        if (lastLastIndex === str.length) {
            if (lastLength || !separator.test("")) {
                output.push("");
            }
        } else {
            output.push(str.slice(lastLastIndex));
        }
        return output.length > limit ? output.slice(0, limit) : output;
    };

    // For convenience
    String.prototype.split = function (separator, limit) {
        return self(this, separator, limit);
    };

    return self;

}();

function parseISO8601Date(s){
 
  // parenthese matches:
  // year month day    hours minutes seconds  
  // dotmilliseconds 
  // tzstring plusminus hours minutes
  var re = /(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/;
 
  var d = [];
  d = s.match(re);
 
  // "2010-12-07T11:00:00.000-09:00" parses to:
  //  ["2010-12-07T11:00:00.000-09:00", "2010", "12", "07", "11",
  //     "00", "00", ".000", "-09:00", "-", "09", "00"]
  // "2010-12-07T11:00:00.000Z" parses to:
  //  ["2010-12-07T11:00:00.000Z",      "2010", "12", "07", "11", 
  //     "00", "00", ".000", "Z", undefined, undefined, undefined]
 
  if (! d) {
    throw "Couldn't parse ISO 8601 date string '" + s + "'";
  }
 
  // parse strings, leading zeros into proper ints
  var a = [1,2,3,4,5,6,10,11];
  for (var i in a) {
    d[a[i]] = parseInt(d[a[i]], 10);
  }
  d[7] = parseFloat(d[7]);
 
  // Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])
  // note that month is 0-11, not 1-12
  // see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/UTC
  var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);
 
  // if there are milliseconds, add them
  if (d[7] > 0) {  
    ms += Math.round(d[7] * 1000);
  }
 
  // if there's a timezone, calculate it
  if (d[8] != "Z" && d[10]) {
    var offset = d[10] * 60 * 60 * 1000;
    if (d[11]) {
      offset += d[11] * 60 * 1000;
    }
    if (d[9] == "-") {
      ms -= offset;
    }
    else {
      ms += offset;
    }
  }
 
  return new Date(ms);
};


 function copyToClipboardCrossbrowser(s) {           
        s = document.getElementById(s).value;               

        if( window.clipboardData && clipboardData.setData )
        {
            clipboardData.setData("Text", s);
        }           
        else
        {
            // You have to sign the code to enable this or allow the action in about:config by changing
            //user_pref("signed.applets.codebase_principal_support", true);
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

            var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
            if (!clip) return;

            // create a transferable

            var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            if (!trans) return;

            // specify the data we wish to handle. Plaintext in this case.
            trans.addDataFlavor('text/unicode');

            // To get the data from the transferable we need two new objects
            var str = new Object();
            var len = new Object();

            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

            str.data= s;        

            trans.setTransferData("text/unicode",str, str.data.length * 2);

            var clipid=Components.interfaces.nsIClipboard;              
            if (!clip) return false;
            clip.setData(trans,null,clipid.kGlobalClipboard);      
        }
    }