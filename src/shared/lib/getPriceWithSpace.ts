export const getPriceWithSpace = (replacedPrice: string) => {
  return replacedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
};
