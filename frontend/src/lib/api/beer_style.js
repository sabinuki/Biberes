import client from './client';

export const beerStyleIndex = () => {
  return client.get('beer_styles');
}
