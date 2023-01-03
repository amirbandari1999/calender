import { Moment } from "moment";

const Today = (day: Moment) => {
  return day.isSame(new Date(), "day");
};
const Before = (day: Moment) => {
  return day.isBefore(new Date(), "day") ? "before" : "";
};
const DayStyles2 = (day: Moment, value: Moment, daySelected: Moment) => {
  if (Today(day)) return "today";
  else if (Before(day)) return "before";
  return " ";
};
export default DayStyles2;
