var gid = '1WmCZLWWrSgks_rzvW3mpFl_2TxxIkq8OKAMJA22h8Wo';
var url = 'https://spreadsheets.google.com/feeds/list/' + gid + '/od6/public/values?alt=json';

// AJAX call to the GDOCS JSON
$.ajax({
  url: url,
  dataType: 'JSON'
}).done(function(response) {
  
  // response is the full response from google.  It's a huge object of data including author and stuff, so you need to sift through and find what you need...
  console.log(response);
  
  // response.feed.entry is where the actual rows are, and this is an array of each row, grouped by the first row.  I don't know how google knows to do it like this, it just does.
  var data = response.feed.entry;
  var number = 1;
  
  // loop through the data array
  data.forEach(function( row ) {
    // the data comes in the format where $t is the actual piece of data which is a property of the first row's name...
    number = number + 1;
    
    $('#header').append('<label for="slide-' + number +'-trigger">' + row.gsx$contenttype.$t +'</label>' );
    
    $('#results').append( '<input id="slide-'+ number +'-trigger" type="radio" name="slides" '+ row.gsx$contenttype.$t +'><section class="slide"><h1>' + row.gsx$contenttype.$t + '</h1><div class="user"><h2>User</h2><blockquote>' + row.gsx$userpov.$t +'</blockquote></div><div class="feelings"><h3>Users Feelings</h3><ul><li>' + row.gsx$userfeeling1.$t +'</li><li>' + row.gsx$userfeeling2.$t +'</li><li>' + row.gsx$userfeeling3.$t +'</li><li>' + row.gsx$userfeeling4.$t +'</li></ul></div><div class="tips"><h3>Tips</h3><ul><li>' + row.gsx$tip1.$t +'</li><li>' + row.gsx$tip2.$t +'</li><li>' + row.gsx$tip3.$t +'</li></ul></div><div class="hags"><h2>HAGS</h2><blockquote>' + row.gsx$copyexample.$t +'</blockquote></div></section>');
    
  });
    
});