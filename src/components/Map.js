import React from 'react';
import L from 'leaflet';
import leafletDraw from 'leaflet-draw';

var mapStyle = {
  height: '600px',
};

class Map extends React.Component {
  componentDidMount () {

    let map = L.map(this.refs.map);

    let osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    let osm = new L.TileLayer(osmUrl, {
      attribution:
      osmAttrib
    }).addTo(map);

    /*
    Draw controls
    */

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    let drawOptions = {
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        marker: false,
        polyline: false,
      },
    };
    let drawControl = new L.Control.Draw(drawOptions);
    map.addControl(drawControl);

    let onDraw = function (e) {
      var layer = e.layer;
      drawnItems.addLayer(layer);
    };

    map.on('draw:created', onDraw);

    map.setView([35.7796 , -78.6382], 13);
  }

  render () {
    return <div style={mapStyle} ref="map" /> // results in this.refs.map
    // return <div style={mapStyle} ref={ (c) => this._map = c } /> //results in this._map
  }
}

export default Map