var gid = '18emdyGkZ5LlNu-RIV4vlz5QfmHdqIItLTFWrxw3fDMw';
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
    
    $('#results').append( '<input id="slide-'+ number +'-trigger" type="radio" name="slides" '+ row.gsx$active.$t +'><section class="slide"><h1>' + row.gsx$month.$t + ' Content Schedule</h1><div class="items"><h4>Educational Content</h4><p>Educational content includes Product Information, How to Guides, Case Studies and other features designed to answer customer questions and improve customer confidence.</p><ol class="edu"><li>' + row.gsx$content1.$t + '</li><li>' + row.gsx$content2.$t + '</li><li>' + row.gsx$content3.$t + '</li><li>' + row.gsx$content4.$t + '</li></ol><h4>Promotional Content</h4>            <p>Promotional Content includes New Product Launches, Sales Campaigns such as Supply Only and information on Events</p><ol class="promo" start="5"><li class="five">' + row.gsx$content5.$t + '</li>            </ol></div><div class="items lists"><h4>Product Launches</h4><p>'+ row.gsx$product1.$t +'</p><p>'+ row.gsx$product2.$t +'</p></div><div class="items lists"><h4>Printed Materials</h4><p>'+ row.gsx$print1.$t +'</p><p>'+ row.gsx$print2.$t +'</p><p>'+ row.gsx$print3.$t +'</p><p>'+ row.gsx$print4.$t +'</p><p>'+ row.gsx$print5.$t +'</p></div><div class="items lists"><h4>Magazine Adverts</h4><p>'+ row.gsx$mag1.$t +'</p><p>'+ row.gsx$mag2.$t +'</p><p>'+ row.gsx$mag3.$t +'</p><p>'+ row.gsx$mag4.$t +'</p><p>'+ row.gsx$mag5.$t +'</p></div><div class="homepage"><h4>Website Home Page</h4><ol class="slide1">                    <li class="one">' + row.gsx$content1.$t + '</li><li class="two">' + row.gsx$content2.$t + '</li>                    <li class="three">' + row.gsx$content3.$t + '</li><li class="four">' + row.gsx$content4.$t + '</li></ol><ol class="slide2" start="5"><li class="five">' + row.gsx$content5.$t + '</li>                </ol></div><div class="newsletters"><div><h4>Week 2</h4> <ol class="slide2" start="5">                <li class="five">' + row.gsx$content5.$t + '</li></ol>  </div><div><h4>Week 4</h4><ol class="slide1">                    <li class="one">' + row.gsx$content1.$t + '</li>                    <li class="two">' + row.gsx$content2.$t + '</li><li class="three">' + row.gsx$content3.$t + '</li><li class="four">' + row.gsx$content4.$t + '</li></ol></div></div><div class="social"><h3>Social Media</h3><ol><h4>Week One</h4> <li class="one">Tue: ' + row.gsx$content1.$t + '</li>                    <li class="two">Thur: ' + row.gsx$content5.$t + '</li></ol><ol><h4>Week Two</h4> <li class="one">Tue: ' + row.gsx$content2.$t + '</li>                    <li class="two">Thur: ' + row.gsx$content5.$t + '</li></ol><ol><h4>Week Three</h4> <li class="one">Tue: ' + row.gsx$content3.$t + '</li>                    <li class="two">Thur: ' + row.gsx$content5.$t + '</li></ol><ol><h4>Week Four</h4> <li class="one">Tue: ' + row.gsx$content4.$t + '</li>                    <li class="two">Thur: ' + row.gsx$content5.$t + '</li></ol></div></section>');
    
  });
    
});