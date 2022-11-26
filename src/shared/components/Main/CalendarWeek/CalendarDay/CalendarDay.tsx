import React from 'react';
import styles from './calendarday.css';

interface ICalendarDay {
  date: Date;
  As?: 'div' | 'span' | 'td';
}

export function CalendarDay({date, As = 'div'}: ICalendarDay) {
  const day = (new Date(date)).getDate()
  if ((new Date(date)).getDay() === 0) {
    // console.log(day);
  }
  // console.log((new Date(date)).getDay())

  return (
    <As className={styles.item} style={{color: ((new Date(date)).getDay() === 0 || (new Date(date)).getDay() === 6 ? '#A9A9B8' : '#262842') }}>
      {day}
    </As>
  );
}
