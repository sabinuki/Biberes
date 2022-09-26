import client from './client';

export const getBreweries = () => {
  return client.get('breweries');
}

export const getBrewery = (params) => {
  return client.get(`breweries/${params.id}`, params);
}

export const createBrewery = (params) => {
  return client.post('breweries', params);
}
