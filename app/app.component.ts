import { Component } from '@angular/core';

declare var google: any;

export class Search {
	value: string;
}

export class Problem {
	id: number;
	location: Object;
	status: number;
}

const PROBLEMS: Problem[] = [
  { id: 11, location: { lat: 41.85, lng: -87.65}, status: 0 },
  { id: 11, location: { lat: 41.85, lng: -87.65}, status: 0 },
  { id: 11, location: { lat: 41.85, lng: -87.65}, status: 0 },
  { id: 11, location: { lat: 41.85, lng: -87.65}, status: 0 }
];


@Component({
  selector: 'my-app',
  template: `
	<header id="header">
		<a href="#" id="logo">RoadRo</a>
		<ul id="mainMenu">
			<li><a href="#">Acasa</a></li>
			<li><a href="#">Despre</a></li>
		</ul>
		<div id="mapSearchWrapper"><input id="mapSearch" placeholder="Cauta dupa strada..."></div>
	</header>
	<div id="contentWrapper">
		<div id="formSettings">FORM CONTAINER</div>
		<div id="mapContainer">
			<div id="map"></div>
		</div>
	</div>
  `
})
export class AppComponent implements OnInit {
	search: Search = {
		value: ''
	};
	problems = PROBLEMS;
	ngOnInit(){
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: {lat: 41.85, lng: -87.65}
		});

		var input = /** @type {!HTMLInputElement} */(document.getElementById('mapSearch'));

		var autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.bindTo('bounds', map);

		var marker = new google.maps.Marker({
		  map: map,
		  anchorPoint: new google.maps.Point(0, -29)
		});

		autocomplete.addListener('place_changed', function() {
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				// User entered the name of a Place that was not suggested and
				// pressed the Enter key, or the Place Details request failed.
				window.alert("No details available for input: '" + place.name + "'");
				return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(17);  // Why 17? Because it looks good.
			}

			marker.setIcon(/** @type {google.maps.Icon} */({
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(35, 35)
			}));
			marker.setPosition(place.geometry.location);
			marker.setVisible(true);

		});

	}
}
