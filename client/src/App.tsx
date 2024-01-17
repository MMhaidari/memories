import { useState } from "react";
import Posts from "./features/Posts"
import Form from "./components/Form"
import memories from './assets/imgs/memories.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isOpen && <Form  onClosePopUp={handleOpenForm} />}
    <div>
      <div className="flex gap-5 justify-center mx-auto mt-3 md:w-8/12 shadow-xl p-2">
        <h1 className="text-4xl text-[#22d3ee]">Memories</h1>
        <img src={memories} alt="memories" className="w-10 h-10" />
      </div>
      <div className="flex flex-col mt-10 items-center">
        <button type='button' onClick={handleOpenForm} className="px-10 py-4 text-white bg-blue-600 rounded-full">button</button>
        <Posts />
      </div>
    </div>
    </>
  );
}

export default App
