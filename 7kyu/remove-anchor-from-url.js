// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//My solution

function removeUrlAnchor(url){
    // TODO: complete
    return url.split('#').shift()
  }

  //Alternative

function removeUrlAnchor(url){
    return url.split('#')[0];
}

function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }