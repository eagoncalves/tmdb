export const localDate = (date, locale) => {
  return new Date(date).toLocaleDateString(locale, {});
}