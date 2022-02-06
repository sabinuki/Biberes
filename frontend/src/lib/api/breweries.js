import client from './client';

export const getBreweries = () => {
  return client.get('breweries');
}
