import dayjs from "dayjs";
import { saveActivity } from "../db/activityDB";

export async function solveTodayPuzzle() {

  const today = dayjs().format("YYYY-MM-DD");

  const activity = {
    date: today,
    solved: true,
    score: 100,
    timeTaken: 45,
    difficulty: 2,
    synced: false
  };

  await saveActivity(activity);

}