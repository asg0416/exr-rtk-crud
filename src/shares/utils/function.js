export const setFormattedDate = (date = new Date()) => {
  return new Intl.DateTimeFormat("ko-KR", { dateStyle: 'medium'}).format(date);
};
