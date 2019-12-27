import moment from 'moment';

export const sanitizeImgFormat = (imgStr, format) => {
  const split = imgStr.split('.');
  if (split[split.length - 1] !== format) {
    return imgStr.replace(split[split.length - 1], format);
  }
  return imgStr;
}

export const sanitizePhoneNumber = (numberStr) => {
  const number = numberStr.replace('-', ' ').split(' ');
  return `(${number[0]}) ${number[1]}`;
}

export const transformDateFormat = (date) => {
  return moment(date).format('MMMM D, YYYY');
}