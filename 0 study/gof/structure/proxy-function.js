const fetchGeo = (address) => new Promise((resolve) => {
  setTimeout(() => {
    switch (address) {
      case 'Amsterdam' :
        resolve('52.3700° N, 4.8900° E');
      break;
      case 'London' :
        resolve('51.5171° N, 0.1062° W');
      break;
      case 'Paris' :
        resolve('48.8742° N, 2.3470° E');
      break;
      case 'Berlin' :
        resolve('52.5233° N, 13.4127° E');
      break;
    }
  }, 100);
});

const fetchGeoProxy = new Proxy(fetchGeo, (() => {
  const geoCache = new Map();

  return {
    apply(target, thisArgs, [address]) {
      return new Promise((resolve) => {
        if (geoCache.has(address)) {
          resolve(geoCache.get(address));
        } else {
          fetchGeo(address).then((geo) => {
            geoCache.set(address, geo);
            resolve(geo);
          })
        }
      })
    }
  }
})());

(async () => {
  console.time('getCoder');
  await fetchGeo('Paris');
  await fetchGeo('London');
  await fetchGeo('London');
  await fetchGeo('London');
  await fetchGeo('London');
  await fetchGeo('Amsterdam');
  await fetchGeo('Amsterdam');
  await fetchGeo('Amsterdam');
  await fetchGeo('Amsterdam');
  await fetchGeo('London');
  await fetchGeo('London');
  console.timeEnd('getCoder')
})();

(async () => {
  console.time('fetchGeoProxy');
  await fetchGeoProxy('Paris');
  await fetchGeoProxy('London');
  await fetchGeoProxy('London');
  await fetchGeoProxy('London');
  await fetchGeoProxy('London');
  await fetchGeoProxy('Amsterdam');
  await fetchGeoProxy('Amsterdam');
  await fetchGeoProxy('Amsterdam');
  await fetchGeoProxy('Amsterdam');
  await fetchGeoProxy('London');
  await fetchGeoProxy('London');
  console.timeEnd('fetchGeoProxy')
})();

