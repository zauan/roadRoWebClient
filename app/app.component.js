"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Search = (function () {
    function Search() {
    }
    return Search;
}());
exports.Search = Search;
var Problem = (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;
var PROBLEMS = [
    { id: 11, location: { lat: 41.85, lng: -87.65 }, status: 0 },
    { id: 11, location: { lat: 41.85, lng: -87.65 }, status: 0 },
    { id: 11, location: { lat: 41.85, lng: -87.65 }, status: 0 },
    { id: 11, location: { lat: 41.85, lng: -87.65 }, status: 0 }
];
var AppComponent = (function () {
    function AppComponent() {
        this.search = {
            value: ''
        };
        this.problems = PROBLEMS;
    }
    AppComponent.prototype.ngOnInit = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        var input = (document.getElementById('mapSearch'));
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });
        autocomplete.addListener('place_changed', function () {
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
            }
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17); // Why 17? Because it looks good.
            }
            marker.setIcon(/** @type {google.maps.Icon} */ ({
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<header id=\"header\">\n\t\t<a href=\"#\" id=\"logo\">RoadRo</a>\n\t\t<ul id=\"mainMenu\">\n\t\t\t<li><a href=\"#\">Acasa</a></li>\n\t\t\t<li><a href=\"#\">Despre</a></li>\n\t\t</ul>\n\t\t<div id=\"mapSearchWrapper\"><input id=\"mapSearch\" placeholder=\"Cauta dupa strada...\"></div>\n\t</header>\n\t<div id=\"contentWrapper\">\n\t\t<div id=\"formSettings\">FORM CONTAINER</div>\n\t\t<div id=\"mapContainer\">\n\t\t\t<div id=\"map\"></div>\n\t\t</div>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map