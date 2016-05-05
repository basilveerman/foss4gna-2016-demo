import { saveAs } from 'filesaver.js';
import { stringify } from 'wellknown';
import _tokml from 'tokml';
import _togpx from 'togpx';
import { download } from 'shp-write';

var g = {

  /* feature stored as geojson object */
  feature: undefined,

  load: function (s) {
    this.feature = s;
    return this;
  },

  togeojsonobj: function () {
    return this.feature;
  },

  togeojsonstr: function () {
    return JSON.stringify(this.feature);
  },

  towkt: function () {
    return stringify(this.feature);
  },

  tokml: function () {
    return _tokml(this.feature);
  },

  togpx: function () {
    return _togpx(this.feature);
  },

  tofeatureCollection: function () {
    return {
      type: 'FeatureCollection',
      features: [this.feature],
    };
  },

  save: function (format) {
    switch (format) {
      case 'wkt':
        saveAs(
          new Blob([this.towkt()], { type: 'text/plain;charset=utf-8' }),
          'feature.wkt'
        );
        break;

      case 'geojson':
        saveAs(
          new Blob([this.togeojsonstr()], { type: 'text/plain;charset=utf-8' }),
          'feature.geojson'
        );
        break;

      case 'kml':
        saveAs(
          new Blob([this.tokml()], { type: 'text/plain;charset=utf-8' }),
          'feature.kml'
        );
        break;

      case 'gpx':
        saveAs(
          new Blob([this.togpx()], { type: 'text/plain;charset=utf-8' }),
          'feature.gpx'
        );
        break;

      case 'shp':
        download(this.tofeatureCollection(this.togeojsonobj()));
        break;

      default:
        break;
    }
  },
};

export default g;