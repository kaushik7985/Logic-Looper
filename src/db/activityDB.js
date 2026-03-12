import { openDB } from "idb";

export const dbPromise = openDB("logic-looper-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("dailyActivity")) {
      db.createObjectStore("dailyActivity", { keyPath: "date" });
    }
  },
});

export async function saveActivity(data) {
  const db = await dbPromise;
  await db.put("dailyActivity", data);
}

export async function getAllActivity() {
  const db = await dbPromise;
  return await db.getAll("dailyActivity");
}