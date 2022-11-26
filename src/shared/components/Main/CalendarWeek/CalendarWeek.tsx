import React from 'react';
import { CalendarDay } from './CalendarDay';
import styles from './calendarweek.css';

interface ICalendarWeek {
  startWeek: Date
}

type TOptions = { 
  weekday?: "numeric" | "long" | "short" | "2-digit" | "narrow",
  year?: "numeric" | "long" | "short" | "2-digit" | "narrow", 
  month?: "numeric" | "long" | "short" | "2-digit" | "narrow", 
  day?: "numeric" | "long" | "short" | "2-digit" | "narrow",
}

export enum EColors {
  dark = '#262842',
  light = '#A9A9B8',
}

export function CalendarWeek({startWeek}: ICalendarWeek) {
  const locale = 'en-GB';
  const startDate = (new Date(startWeek)).toLocaleDateString(locale, {month: 'short', day: '2-digit' });
  let endDate = new Date(startWeek);
  endDate.setDate(startWeek.getDate() + 7);
  return (
    <td>
      <table>
        <tbody>
          <tr>
            <td colSpan={7}>
              {`${startDate} - ${endDate.toLocaleDateString(locale, {month: 'short', day: '2-digit' })}`}
            </td>
          </tr>

          <tr>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate()))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          <CalendarDay date={new Date(startWeek.setDate(startWeek.getDate() + 1))} As={'td'}/>
          </tr>
        </tbody>
      </table>
    </td>    
  );
}
