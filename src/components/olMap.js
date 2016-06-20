import React from 'react';
import ol from 'openlayers';

import GeoExporter from './GeoExporter'

var mapStyle = {
  height: '600px',
  width: '80%',
  float: 'left',
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    // Add openlayers map when DOM node is loaded
    let map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ]
    });
  }

  render () {
    return (
      <div>
        <div style={mapStyle} ref="map" />
      </div>
    )
  }
}

export default Map
