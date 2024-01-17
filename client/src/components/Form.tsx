import { useState } from "react";
import { useCreateMemoryMutation } from "../api/services/memoriesApi";

const Form = ({ onClosePopUp }: any) => {
  const [formData, setFormData] = useState({ title: '', message: '', creator: '', selectedFile: '' })
  const [postMemory] = useCreateMemoryMutation();

  const clear = () => {
    setFormData({ title: '', message: '', creator: '', selectedFile: '' });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postMemory(formData);
    clear();
    onClosePopUp()
  }

  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-slate-300 backdrop-blur-xl">
      <div className="relative max-h-[500px] min-w-80 mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <button type="button" className="absolute right-6 text-red-700" onClick={onClosePopUp}>&times;</button>
        <h1 className="text-2xl font-bold mb-4">Create a Memory</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="creator" className="block text-sm font-medium text-gray-600">Your Name</label>
            <input
              type="text"
              id="creator"
              value={formData.creator || ''}
              name="creator"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">Memory Title</label>
            <input
              type="text"
              id="title"
              value={formData.title || ''}
              name="title"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Memory</label>
            <textarea
              id="message"
              value={formData.message || ''}
              name="message"
              className="mt-1 p-2 w-full border rounded-md"
              rows={5}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Create Memory
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
