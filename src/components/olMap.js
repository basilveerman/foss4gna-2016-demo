import React from 'react';
import ol from 'openlayers';

import GeoExporter from './GeoExporter'

var mapStyle = {
  height: '100%',
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    // Add openlayers map when DOM node is loaded
    let map = new ol.Map({
      target: this.refs.map,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.transform([-100, 60], 'EPSG:4326','EPSG:3857'),
        zoom: 4
      }),
    });
  }

  render () {
    return (
      <div style={mapStyle} ref="map" />
    )
  }
}

export default Map
