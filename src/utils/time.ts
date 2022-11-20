export const getCurrentTimeInSeconds = () => new Date().getTime();

// https://stackoverflow.com/questions/18023857/compare-2-iso-8601-timestamps-and-output-seconds-minutes-difference

const pad = (n: number) => (n < 10 ? '0' + n : n);

export const getISODateFromDate = (date: Date): Date => {
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

export const getTimeElapsedSinceNewsIsPosed = (created_at: string) => {
  const postedTime = getISODateFromDate(new Date(created_at)).getTime() / 1000;
  const currTime = getISODateFromDate(new Date()).getTime() / 1000;
  const difference = currTime - postedTime;

  // FIXME: add more statements to handle days, months and years
  if (difference < 60) {
    return difference + ' seconds';
  } else if (difference < 3600) {
    return Math.floor(difference / 60) + ' minutes';
  } else {
    return Math.floor(difference / 3600) + ' hours';
  }
};
