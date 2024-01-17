import Posts from "./features/Posts"
import Form from "./components/Form"
import memories from './assets/imgs/memories.png';

function App() {
  return (
    <div>
      <div className="flex gap-5 justify-center mx-auto mt-3 md:w-8/12 shadow-xl p-2">
        <h1 className="text-4xl text-[#22d3ee]">Memories</h1>
        <img src={memories} alt="memories" className="w-10 h-10" />
      </div>
      <div className="grid grid-cols-2">
        <Posts />
        <Form />
      </div>
    </div>
  );
}

export default App
