import { useState, useEffect } from 'react';
import { Modal } from '../../components/modal/Modal';
import { Project } from '../project/Project';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]); // Initialize as an empty array

  // Leer los datos del localStorage al cargar la página
  useEffect(() => {
    const storedData = localStorage.getItem('submittedData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        // Ensure it's an array and not null or other types
        if (Array.isArray(parsedData)) {
          setSubmittedData(parsedData); // Correctly set the array
        } else {
          setSubmittedData([]); // Set an empty array if data is not an array
        }
      } catch (e) {
        console.error('Error parsing stored data', e);
        setSubmittedData([]); // If parsing fails, fallback to empty array
      }
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data) => {
    if (data.image) { //si hay una imagen la guardamos
      const reader = new FileReader(); //fileReader es para leer archivos
      reader.onloadend = () => {
        const base64Image = reader.result;  // este es el base64 para la imagen
        const dataWithImage = { ...data, image: base64Image };
        const updatedData = [...submittedData, dataWithImage]; //nuevo item para el array
        setSubmittedData(updatedData); // Update state

        // Guardar los datos en localStorage, including base64 image
        localStorage.setItem('submittedData', JSON.stringify(updatedData));
      };
      reader.readAsDataURL(data.image);  // Leer la imagen como base64
    } else {
      const updatedData = [...submittedData, data]; //nuevo item para el array
      setSubmittedData(updatedData); // Update state

      // guardar los datos en localStorage 
      localStorage.setItem('submittedData', JSON.stringify(updatedData));
    }
  };

  return (
    <>
    <div className="flex flex-col w-full justify-center mt-20 ">
      
      <div className=" flex justify-between text-black p-4 px-36">
         <h1 className='text-xl font-bold mb-4 '>Categories<span className=' ml-2 text-gray-500 text-sm px-2 border border-gray-400'>1</span></h1>
         <button onClick={openModal} className="text-green-700">Agregar</button>
      </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleModalSubmit} />

      {submittedData.length > 0 && (
      <div className="w-full px-4 py-4 flex justify-center  gap-4  rounded-3xl">
   
    <div className=" gap-4 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  ">  {/* Use flex with gap to arrange cards */}
      {submittedData.map((item, index) => (

        <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-[300px] h-36 "> 
           
          <h3 className="text-md font-simibold ml-5">{item.title}</h3>
          {item.image && (
            <div className="flex mr-36 mt-5  ">
              <img 
                src={item.image} 
                alt="Submitted Image" 
                className=" w-9 h-9 rounded-full mx-auto"  // Adjust size and round it
              />
              <p className="">{item.description}</p>

            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

    </div>

    <Project/>

    </>
  );
};



