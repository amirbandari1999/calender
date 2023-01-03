import { useState, useEffect } from "react";
import moment from "moment";
import "./Calender.css";
import DayStyles from "./ExteraStyle/AddStyle";
import DayStyles2 from "./ExteraStyle/AssStyle2";
import { Moment } from "moment";
import Build from "./Build/Build";
/*import image from "../calender.jpg";*/
// You need to save on click what date is selected (year, month, day) it can be saved as sepperate states
// Need to modify date status function (the function that you are using to check is date from past or selected...)
// It need to check the date not only with day but Year Month Day.
// Change the variable names It's not understandable for 3rd person what does [value, setvalue] do
// Use arrow functions everywhere instead of fuction ()
const CalenderWeekDays = () => {
  const [currentDate, SetCurrentDate] = useState(moment());
  const [calender, setCalender] = useState<Moment[][]>([]);
  const [daySelected, setDaySelected] = useState(moment());
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    setCalender(Build(currentDate));
  }, [currentDate]);

  const CurrentMonth = currentDate.format("MMM");
  const CurrentYear = currentDate.format("YYYY");

  const WeekDays = moment.weekdaysShort();
  let weekdayshortname = WeekDays.map((day) => {
    return (
      <td key={day} className="week-day">
        {day.charAt(0)}
      </td>
    );
  });
  const nextMonth = () => {
    return currentDate.clone().add(1, "month");
  };
  const prevMonth = () => {
    return currentDate.clone().subtract(1, "month");
  };

  return (
    <div>
      <table className="page">
        <thead>
          <tr>
            <th className="Year-Month">
              {CurrentMonth} {CurrentYear}
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th
              className="leftSign"
              onClick={() => SetCurrentDate(prevMonth())}
            >
              {"<"}
            </th>
            <th
              className="rightSign"
              onClick={() => SetCurrentDate(nextMonth())}
            >
              {">"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>{weekdayshortname}</tr>
          {calender.map((week: Moment[], index: number) => (
            <tr key={index}>
              {week.map((day: Moment, index: number) => {
                return (
                  <td key={index}>
                    <div
                      className="day"
                      onClick={() => {
                        SetCurrentDate(day);
                        setClicked(!clicked);
                        setDaySelected(day);
                      }}
                    >
                      <div
                        className={
                          clicked
                            ? DayStyles(day, currentDate, daySelected)
                            : DayStyles2(day, currentDate, daySelected)
                        }
                      >
                        {day.format("D").toString()}
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CalenderWeekDays;
