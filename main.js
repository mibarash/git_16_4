console.log("hello");


// function getQueryVariable(variable)
// {
//        var query = window.location.search.substring(1);
//        var vars = query.split("&");
//        for (var i=0;i<vars.length;i++) {
//                var pair = vars[i].split("=");
//                if(pair[0] == variable){return pair[1];}
//        }
//        return(false);
// }

// console.log(getQueryVariable("gclid"));
// console.log(getQueryVariable("utm_source"));
// console.log(getQueryVariable("msclicked"));


function getUrlParameter(referrers) {
    var refferer = false;
    for (var i=0;i<referrers.length;i++) {
      name = referrers[i];
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      if ( results != null ) {
        refferer = decodeURIComponent(results[1].replace(/\+/g, ' '));
      }
    }
    return refferer;
  };
  
  // List all possible refferers that can be in URL:
  referrers = ['gclid','utm','MSCLKID','utm_source','msclkid'];
  referrer = getUrlParameter(referrers);
  // This only works for 1 refferer, there shouldn't be more than 1 type of referrer
  if (referrer != false) {
    startNowBtn = document.querySelector('.start_now');
    // startNowBtn.href = 'http://wix.com?a=1&b=1&s=' + referrer;
    startNowBtn.href = 'http://wixstats.com/?a=16754&c=124&s1=' + referrer;

  }

