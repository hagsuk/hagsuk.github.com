var gid = '1rKHQaFxTQigOT3CBV5Xf68qNbFvgZh7unok4oH-8Od0';
var url = 'https://spreadsheets.google.com/feeds/list/' + gid + '/1/public/values?alt=json';

// AJAX call to the GDOCS JSON
$.ajax({
  url: url,
  dataType: 'JSON'
}).done(function(response) {
  
  // response is the full response from google.  It's a huge object of data including author and stuff, so you need to sift through and find what you need...
  console.log(response);
  
  // response.feed.entry is where the actual rows are, and this is an array of each row, grouped by the first row.  I don't know how google knows to do it like this, it just does.
  var data = response.feed.entry;
  
// in case we need to number items based on their row number
  var number = 1;
  
  // loop through the data array
  data.forEach(function( row ) {

    // the data comes in the format where $t is the actual piece of data which is a property of the first row's name...
    number = number + 1;
    
    // Call all fields from each row into a list item
    $('#results').append( '<li class="story ' + row.gsx$asa.$t + '"><p class="tiny">' + row.gsx$timestamp.$t + '</p><p class="big asa"><strong>As a: </strong>' + row.gsx$asa.$t + '</p><p class="big ineed"><strong>I need: </strong>' + row.gsx$userneed.$t + '</p><p class="big sothat"><strong>So that: </strong>' + row.gsx$sothat.$t + '</p></li>');
     
// Re-order based on logic to group stories by audience type
     $('.Distributor').prependTo('#results');  $('.Architect').prependTo('#results');  $('.Customer').prependTo('#results');    $('.Inexperienced').prependTo('#results');
  });
    
});