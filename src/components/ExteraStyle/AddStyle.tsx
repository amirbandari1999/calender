import { Moment } from "moment";

const Selected = (day: Moment, value: Moment) => {
  return value.isSame(day, "day") && value.isSame(new Date(), "month");
};
const Selected2 = (day: Moment, daySelected: Moment) => {
  return (
    daySelected.isSame(day, "day") && !daySelected.isSame(new Date(), "month")
  );
};
const Today = (day: Moment) => {
  return day.isSame(new Date(), "day");
};
const Before = (day: Moment) => {
  return day.isBefore(new Date(), "day") ? "before" : "";
};
const DayStyles = (day: Moment, value: Moment, daySelected: Moment) => {
  if (Today(day)) return "today";
  else if (Before(day)) return "before";
  else if (Selected(day, value)) return "Selected";
  else if (Selected2(day, daySelected)) return "Selected";
  return " ";
};
export default DayStyles;
