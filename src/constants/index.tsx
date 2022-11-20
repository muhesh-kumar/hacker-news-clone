export const ONE_SECOND = 1;
export const SECONDS_IN_A_MINUTE = 60 * ONE_SECOND;
export const SECONDS_IN_AN_HOUR = 60 * SECONDS_IN_A_MINUTE;
export const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR;
export const SECONDS_IN_A_WEEK = 7 * SECONDS_IN_A_DAY;

// FIXME: handle different number of days in each month
export const SECONDS_IN_A_MONTH = 30 * SECONDS_IN_A_DAY;

// FIXME: handle leap years
export const SECONDS_IN_A_YEAR = 12 * SECONDS_IN_A_MONTH;
