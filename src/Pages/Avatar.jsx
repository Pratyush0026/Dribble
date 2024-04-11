import React, { useState } from 'react';
import Dribbble from "../components/Dribble";


const Avatar = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      checkFormValidity();
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    setIsFormValid(image || location.trim() !== '');
  };

  const handleNextButtonClick = () => {
    // Handle the action when the next button is clicked
    // For now, let's just log the selected location
    console.log("Selected Location:", location);
  };

  return (
    <>
    <Dribbble/>
      <div>
        <h1 className='text-black text-[30px] font-extrabold flex  justify-center mt-20 '>Welcome! Let's create your Profile </h1>
        <div className='font-bold flex justify-center mt-4'>
          <p className='text-gray-400'>Let others get to know you better</p>
        </div>
      </div>

      <h3 className='text-black text-[20px] font-extrabold flex  justify-center mt-20'>Add an Avatar</h3>

      <div className="flex items-center justify-center gap-6 mt-10 ">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
          {image ? (
            <img className="w-full h-full object-cover" src={image} alt="Avatar" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              <span className="text-md">Upload an Image</span>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleImageUpload}
          id="avatar-input"
        />
        <div className='flex flex-col'>
        <label htmlFor="avatar-input" className="ml-2 cursor-pointer px-6 py-2 font-bold text-black shadow-lg rounded-md">
          Choose Image
        </label>
        <p className='ml-5 mt-3 text-gray-400'>Or choose one of ours default</p>
        </div>
      </div>
      <h3 className='text-black text-[20px] font-extrabold flex  justify-center mt-20'>Add an Location</h3>

      <div className="mt-6 flex justify-center">
        
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={handleLocationChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleNextButtonClick}
          disabled={!isFormValid}
          className={`px-6 py-3 font-bold text-white rounded-md ${isFormValid ? 'bg-pink-500 hover:bg-blue-600 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Avatar;