import React from 'react';
import { CalendarWeek } from './CalendarWeek';
import styles from './main.css';

export function Main() {
  const startWeek = new Date('2022-09-05');
  // const randomDay = new Date();
  // console.log('startWeek', startWeek);
  // console.log('randomDay', randomDay);
  // console.log('date',new Date(randomDay.setDate(startWeek.getDate())));
  return (
    <table className={styles.table}>
      <thead className={styles.heading}>
        <tr>
          <td className={styles.left}>
            Work item
          </td>

          <td>
            <table>
              <thead>
                <tr>
                  <CalendarWeek startWeek={new Date(startWeek.setDate(startWeek.getDate() + 0))}/>  
                  <CalendarWeek startWeek={new Date(startWeek.setDate(startWeek.getDate() + 7))}/>
                  <CalendarWeek startWeek={new Date(startWeek.setDate(startWeek.getDate() + 7))}/>
                  {/* newDate.setDate(date1.getDate() + 7); */}
                </tr>
              </thead>          
            </table>
            
          </td>
        </tr>
      </thead>
      
      <tbody>

      </tbody>
  
    </table>
  );
}
