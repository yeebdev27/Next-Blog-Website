"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Headline = () => {
    const [headline, setHeadline] = useState([]);

    const fetchHeadline = async () => {
        const response = await axios.get('/api/tasks');
        setHeadline(response.data.task);
        console.log(response.data.task)
    };

    useEffect(() => {
        fetchHeadline();
    }, []);

    const latestItem = headline.length > 0 ? headline[headline.length - 1] : null;

    return (
      <div>
        {latestItem && (
          <div className="m-4">
            <h2 className="md:text-lg text-sm font-bold text-gray-800">
              Todays
              <span className="font-semibold text-gray-600"> Headline</span>
            </h2>
            <Image
              src={latestItem.image}
              alt="Headline Image"
              width={500}
              height={250}
              className="w-full object-cover rounded-lg"
            />
            <div className="flex justify-center items-center bg-orange-500 text-white font-semibold m-2 md:w-14 md:h-8 rounded-xl">
            <span>{latestItem.category}</span>
            </div>
            <p className="text-xl text-gray-800 font-semibold">{latestItem.title}</p>
          </div>
        )}
      </div>
    );
};

export default Headline;
