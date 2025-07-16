import Image from "next/image";

const Headline = () => {
    return (
        <>
            <h2 className="md:text-lg text-sm font-bold text-gray-800">Todays 
                <span className="font-semibold text-gray-600"> Headline</span></h2>
            <Image
                src="https://www.dummyimage.com/600x300/ffffff/000000.png"
                alt="Headline Image"
                width={600}
                height={300} 
            />
        </>
    )
}

export default Headline;