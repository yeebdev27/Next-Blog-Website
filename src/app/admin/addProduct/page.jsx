"use client"
import Image from "next/image";
import { useState } from "react";


const page = () => {
    const [selectedImage, setSelectedImage] = useState(false);
    const [imagePreview, setImagePreview] = useState("/assets/placeholder.png");

    const handleImageClick = () => {
        document.getElementById("image").click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
  return (
    <>
      <main className="flex-1 m-4 md:ml-68 bg-white rounded-3xl ">
        <form className="pt-5 px-5 sm:pt-12 ">
          <p className="text-xl text-gray-800 ">Upload Thumbnail</p>
          <label htmlFor="image">
                 <Image 
                 src={imagePreview} 
                 width={240} 
                 height={120}
                 alt="thumnail image"
                 className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg object-cover hover:border-gray-400 transition-colors"
                 onClick={handleImageClick}/>
          </label>
          <input type="file" id="image" accept="image/*"
            onChange={handleImageChange} required hidden/>
        </form>
      </main>
    </>
  );
}

export default page;