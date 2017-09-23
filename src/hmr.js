'use strict';

require('./example');


if (module.hot) {
  module.hot.accept((err) => {
      console.log('Can apply hot update');
    if (err) {
      console.error('Cannot apply hot update', err);
    }
  });
}
