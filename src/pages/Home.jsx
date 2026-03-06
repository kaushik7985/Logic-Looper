import Button from "../components/Button"

export default function Home() {
 return (
  <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white gap-6">
   <h1 className="text-4xl font-bold">
    Logic Looper
   </h1>

   <Button>
    Play Today's Puzzle
   </Button>
  </div>
 )
}