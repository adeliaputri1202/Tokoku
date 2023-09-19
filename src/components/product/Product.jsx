import React from 'react'
import pData from '../../../public/pData';



  const CardComponent = ({ id, title, description, imageSrc, linkTo }) => (
    <div key={id} className="w-60    rounded-xl overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 mb-5">
        <a href={linkTo} className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Lihat Detail
        </a>
      </div>
    </div>
  );

const Product = () => {
  return (
    <>
   <div className="flex items-center ml-14 rounded-full bg-purple-400 mt-10 w-[150px] h-10 ">
  <span className='text-2xl text-white font-bold mx-auto'>Kategori 1</span>
</div>

    <div className="flex space-x-4 mt-12 justify-center">
    {pData.map((card) => (
      <CardComponent
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
        linkTo={card.linkTo}
      />
    ))}
  </div>
  <br />
  <div className="flex items-center ml-14 rounded-full bg-purple-400 mt-10 w-[150px] h-10 ">
  <span className='text-2xl text-white font-bold mx-auto'>Kategori 2</span>
</div>

    <div className="flex space-x-4 mt-12 justify-center">
    {pData.map((card) => (
      <CardComponent
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
        linkTo={card.linkTo}
      />
    ))}
  </div> <br /><br />
  </>
  )
}

export default Product;