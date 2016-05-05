import React from 'react';
import L from 'leaflet';
import leafletDraw from 'leaflet-draw';

import GeoExporter from './GeoExporter'

var mapStyle = {
  height: '600px',
  width: '80%',
  float: 'left',
};

let toolStyle = {
  width: '20%',
  float: 'right',
  padding: '10px',
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { area: {} };
  }

  clearMapFeatures () {
    this.drawnItems.getLayers().map(function (layer) {
      this.drawnItems.removeLayer(layer);
    }.bind(this));
  }

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

    let drawnItems = this.drawnItems = new L.FeatureGroup();
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
      this.clearMapFeatures();
      drawnItems.addLayer(layer);
      var gj = layer.toGeoJSON();
      gj.properties.source = 'FOSS4GNA Demo'; // Need attrs for shapefile export
      this.setState({ area: gj })
    }.bind(this);

    map.on('draw:created', onDraw);

    map.setView([35.7796 , -78.6382], 13);
  }

  render () {
    return (
      <div>
        <div style={mapStyle} ref="map" />
        <div style={toolStyle}>
          <GeoExporter area={this.state.area} />
        </div>
      </div>
    )
  }
}

export default Map