import { sanitizeImgFormat, sanitizePhoneNumber, transformDateFormat } from './utils';

describe('Sanitizers/Formatters', () => {
  it('Should return a formated phone number', () => {
    const obj = '555-456-296';
    const expected = '(555) 456-296';
    expect(sanitizePhoneNumber(obj)).toEqual(expected);
  });

  it('Should return a formated date', () => {
    const obj = '1920-2-20';
    const expected = 'February 20, 1920';
    expect(transformDateFormat(obj)).toEqual(expected);
  });

  it('Should return a sanitized string', () => {
    const obj = 'random-img-name-01.avi';
    const expected = 'random-img-name-01.jpg';
    expect(sanitizeImgFormat(obj, 'jpg')).toEqual(expected);
  });
})