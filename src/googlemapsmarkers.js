//initMap is called with capital_one_data, which is an array
//of info from json intake from <insert .js from Josh here>.
function initMap(capital_one_data) {
  var myLatLng = {lat: -38.9897, lng: 76.9378};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

	$.each(capital_one_data, function( curr_merch ) {
		var merch_name = curr_merch.name;
		var merch_pos = curr_merch.geocode;
		var marker = new google.maps.Marker({
		position: merch_pos,
		label: merch_name[1],
		map: map,
		title: merch_name
		});
	}
}