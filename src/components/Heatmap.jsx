import dayjs from "dayjs";

export default function Heatmap() {

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

      <div className="grid grid-cols-7 gap-1">

        {days.map((day, index) => (
          <div
            key={index}
            className="w-4 h-4 bg-green-400 rounded-sm"
            title={day.format("YYYY-MM-DD")}
          />

        ))}

      </div>

    </div>
  );
}