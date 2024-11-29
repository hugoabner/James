import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });

  if (!isOpen) return null; // Only render modal if it's open

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData); // Pass data back to parent component
    setFormData({ title: '', description: '', image: null }); // Reset form
    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-semibold mb-4">Agregar Nuevo Item</h2>

        <label className="block mb-2">
          Título:
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full border rounded px-2 py-1 mt-1"
          />
        </label>

        <label className="block mb-2">
          Descripción:
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full border rounded px-2 py-1 mt-1"
          />
        </label>

        <label className="block mb-4">
          Imagen:
          <input 
            type="file" 
            name="image" 
            onChange={handleImageChange} 
            className="w-full mt-1"
          />
        </label>

        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-400 rounded text-white">Cancelar</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 rounded text-white">Crear</button>
        </div>
      </div>
    </div>
  );
};
