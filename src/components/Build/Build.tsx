import { Moment } from "moment";
const Build = (currentDate: Moment) => {
  const startDay = currentDate.clone().startOf("month").startOf("week"); //Sun May 29 2022
  const endDay = currentDate.clone().endOf("month").endOf("week"); //Sat Jul 02 2022
  const day = startDay.clone().subtract(1, "day"); //Sat May 28 2022
  const calender: Moment[][] = [];
  while (day.isBefore(endDay, "day")) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return calender;
};

export default Build;
