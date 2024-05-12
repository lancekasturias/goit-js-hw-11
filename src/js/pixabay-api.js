export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43844595-87d51955a21ac5c6d4436d598';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
