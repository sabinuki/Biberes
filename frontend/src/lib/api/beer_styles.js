import client from './client';

export const getBeerStyles = () => {
  return client.get('beer_styles');
}

export const getBeerStyle = (params) => {
  return client.get(`beer_styles/${params.id}`, params);
}
