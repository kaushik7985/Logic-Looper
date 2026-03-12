import Heatmap from "./components/Heatmap";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Logic Looper
        </h1>

        <Heatmap />

      </div>

    </div>
  );

}