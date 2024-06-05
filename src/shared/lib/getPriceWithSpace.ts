export const getPriceWithSpace = (replacedPrice: number) => {
  return replacedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
};
