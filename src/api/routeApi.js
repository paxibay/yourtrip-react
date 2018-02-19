import 'whatwg-fetch';

let routeApi = {
  fetchList() {
    //fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc')
    return fetch('json/route-list.json')
      .then(response =>
        response.json())
      .catch(ex =>
        console.log('parsing failed', ex)
      );
  },
  fetchStops() {
    //return fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r=99')
    return fetch('json/route-stops.json')
      .then(response =>
        response.json())
      .catch(ex =>
        console.log('parsing failed', ex)
      );
  },
  fetchPredication() {
    //return fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=99&s=8832')
    return fetch('json/stop-predication.json')
      .then(response =>
        response.json())
      .catch(ex =>
        console.log('parsing failed', ex)
      );
  }
};

export default routeApi;