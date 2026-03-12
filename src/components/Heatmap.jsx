import dayjs from "dayjs";
import { intensityMap } from "../utils/intensity";
import { activityData } from "../utils/mockActivity";
import { calculateStreak } from "../utils/streak";

export default function Heatmap() {
    const streak = calculateStreak(activityData);

  const startOfYear = dayjs().startOf("year");

  const days = [];

  for (let i = 0; i < 365; i++) {
    days.push(startOfYear.add(i, "day"));
  }

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Puzzle Activity
      </h2>
      <p className="mb-4 text-lg font-semibold">
🔥     Current Streak: {streak} days
     </p>

      <div className="grid grid-cols-7 gap-1">

        {days.map((day, index) => {

          const date = day.format("YYYY-MM-DD");

          const activity = activityData[date];

          const level = activity ? activity.level : 0;

          return (
            <div
              key={index}
              className={`w-4 h-4 rounded-sm ${intensityMap[level]}`}
              title={date}
            />
          );

        })}

      </div>

    </div>
  );
}