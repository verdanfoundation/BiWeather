class Coordinates {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static createFromLatLng(latlng) {
        var coordinates = new this(latlng.lat, latlng.lng);
        return coordinates;
    }

    static createNull() {
        var coordinates = new this(0, 0);
        return coordinates;
    }
}