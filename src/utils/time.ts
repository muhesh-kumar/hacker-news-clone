import {
  ONE_SECOND,
  SECONDS_IN_A_MINUTE,
  SECONDS_IN_AN_HOUR,
  SECONDS_IN_A_DAY,
  SECONDS_IN_A_WEEK,
  SECONDS_IN_A_MONTH,
  SECONDS_IN_A_YEAR,
} from '@constants/index';

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

// FIXME: this function is not correct because of the incorrect constants used in it
export const getTimeElapsedSinceNewsIsPosed = (created_at: string) => {
  const postedTime = getISODateFromDate(new Date(created_at)).getTime() / 1000;
  const currTime = getISODateFromDate(new Date()).getTime() / 1000;
  const difference = currTime - postedTime;

  if (difference < SECONDS_IN_A_MINUTE)
    return Math.floor(difference / ONE_SECOND) + ' seconds';
  else if (difference < SECONDS_IN_AN_HOUR)
    return Math.floor(difference / SECONDS_IN_A_MINUTE) + ' minutes';
  else if (difference < SECONDS_IN_A_DAY)
    return Math.floor(difference / SECONDS_IN_AN_HOUR) + ' hours';
  else if (difference < SECONDS_IN_A_WEEK)
    return Math.floor(difference / SECONDS_IN_A_DAY) + ' days';
  else if (difference < SECONDS_IN_A_MONTH)
    return Math.floor(difference / SECONDS_IN_A_WEEK) + ' days';
  else if (difference < SECONDS_IN_A_YEAR)
    return Math.floor(difference / SECONDS_IN_A_MONTH) + ' months';
  else return Math.floor(difference / SECONDS_IN_A_YEAR) + ' years';
};

export const getStartTimeInSecondsFromTimeRangeOption = (
  timeRangeOption: string,
) => {
  const currTime = new Date().getTime();

  switch (timeRangeOption) {
    case 'all-time':
      return 0;
    case 'last-24h':
      return currTime - SECONDS_IN_A_DAY;
    case 'past-week':
      return currTime - SECONDS_IN_A_WEEK;
    case 'past-month':
      return currTime - SECONDS_IN_A_MONTH;
    case 'past-year':
      return currTime - SECONDS_IN_A_YEAR;
  }
};
