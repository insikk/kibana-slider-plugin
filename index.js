'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/kibana-slider-plugin/slider']
    }

  });
};
