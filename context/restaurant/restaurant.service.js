import {mocks, mockImages} from './mock';
import camelize from 'camelize';

export const restaurantRequest = (location = '-0.215215,-78.507675') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('Location  not found');
    }

    resolve(mock);
  });
};

export const restaurantTransform = result => {
  const {results} = result;

  const mapResult = results.map(restaurant => {
    const randIndex = Math.floor(Math.random() * mockImages.length);
    restaurant.photos = [mockImages[randIndex]];
    
    return restaurant;
  });

  return camelize(mapResult);
};
