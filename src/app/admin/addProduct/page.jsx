"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";


const page = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const [data, setData] = useState({
    title:"",
    description:"",
    category:"Sport",
    author:"John Doe"
  })
  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
    console.log(data)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("category",data.category);
    formData.append("author",data.author);
    formData.append("image",selectedImage);

    const response = await axios.post("/api/tasks", formData);
    if (response.data.success) {
        toast.success("Blog Added");
    } else {
      toast.error("Error")
    }
  }
  
  return (
    <>
      <main className="flex-1 m-4 md:ml-68">
        <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-16 ">
            <p className="text-xl text-gray-800 ">Upload Thumbnail</p>
            <label htmlFor="image">
                    <Image 
                    src={!selectedImage?"/assets/placeholder.png":URL.createObjectURL(selectedImage)} 
                    width={240} 
                    height={120}
                    alt="thumnail image"
                    className="mt-4 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg object-cover hover:border-gray-400 transition-colors"/>
            </label>
            <input type="file" id="image" accept="image/*"
            onChange={(e)=>setSelectedImage(e.target.files[0])} required hidden/>
            <p className="text-xl mt-4 text-gray-800">Blog Title</p>
            <input name="title" onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] border-2 border-gray-300 mt-4 rounded-lg" type="text" placeholder="type title here ...." required/>
            <p className="text-xl mt-4 text-gray-800">Blog Description</p>
            <textarea name="description" onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] border-2 border-gray-300 mt-4 rounded-lg" type="text" placeholder="write content here ...." rows={6} required/>
            <p className="text-xl mt-4 text-gray-800">Blog Category</p>
            <select name="category" onChange={onChangeHandler} value={data.category} className="w-full mt-4 sm:w-[500px] border-2 border-gray-300 rounded-lg">
              <option value={"sport"}>Sport</option>
              <option value={"politics"}>Politics</option>
              <option value={"fashion"}>Fashion</option>
            </select>
            <br />
            <button type="submit" className="mt-6 w-20 h-10 border-2 border-gray-200 text-xl text-gray-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white rounded-xl cursor-pointer">ADD</button>
        </form>
      </main>
    </>
  );
}

export default page;