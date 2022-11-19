const pad = (n: number) => (n < 10 ? '0' + n : n);

export default (date: Date): Date => {
  return new Date(
    date.getUTCFullYear() +
      '-' +
      pad(date.getUTCMonth() + 1) +
      '-' +
      pad(date.getUTCDate()) +
      'T' +
      pad(date.getUTCHours()) +
      ':' +
      pad(date.getUTCMinutes()) +
      ':' +
      pad(date.getUTCSeconds()) +
      'Z',
  );
};
