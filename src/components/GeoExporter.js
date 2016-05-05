import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import g from '../core/geo';

let exportPolygon = function(area, format) {
  g.load(area).save(format);
};

class GeoExporter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <DropdownButton title={'Export Polygon'}>
        <MenuItem onClick={exportPolygon.bind(this, this.props.area, 'shp')}>Shapefile</MenuItem>
        <MenuItem onClick={exportPolygon.bind(this, this.props.area, 'geojson')}>GeoJSON</MenuItem>
        <MenuItem onClick={exportPolygon.bind(this, this.props.area, 'wkt')}>WKT</MenuItem>
        <MenuItem onClick={exportPolygon.bind(this, this.props.area, 'kml')}>KML</MenuItem>
        <MenuItem onClick={exportPolygon.bind(this, this.props.area, 'gpx')}>GPX</MenuItem>
      </DropdownButton>
    )
  }
};

GeoExporter.propTypes = { area: React.PropTypes.object };

export default GeoExporter;