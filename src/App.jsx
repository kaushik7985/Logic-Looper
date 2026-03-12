import Heatmap from "./components/Heatmap";
import { solveTodayPuzzle } from "./utils/solvePuzzle";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-3xl font-bold mb-6">
          Logic Looper
        </h1>

        <button
          onClick={solveTodayPuzzle}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6"
        >
          Solve Today Puzzle
        </button>

        <Heatmap />

      </div>

    </div>
  );

}