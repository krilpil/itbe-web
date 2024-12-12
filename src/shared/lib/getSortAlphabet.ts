export const getSortAlphabet = (a?: string, b?: string) => {
  const start = a?.toLowerCase() || '';
  const end = b?.toLowerCase() || '';

  if (start < end) return -1;
  if (start > end) return 1;
  return 0;
};
