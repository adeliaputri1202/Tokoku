import React, { useState, useEffect } from 'react';

const CardComponent = ({ nama, price, stock, desc, urlPoster }) => (
  <div className="w-60 rounded-xl overflow-hidden shadow-lg">
    <img src={urlPoster} alt={nama} className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{nama}</div>
      <p className="text-gray-700 text-base">{desc}</p>
    </div>
    <div className="px-6 py-4 mb-5">
      <p className="text-base text-gray-700">Price: Rp.{price}</p>
      <p className="text-base text-gray-700">In Stock: {stock}</p>
    </div>
  </div>
);

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Mengambil data dari file JSON eksternal
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProductData(data.products))
      .catch((error) => console.error('Gagal memuat data produk:', error));
  }, []);

  return (
    <>
      <div className="flex items-center ml-14 rounded-full bg-purple-400 mt-10 w-[150px] h-10">
        <span className='text-2xl text-white font-bold mx-auto'>Kategori 1</span>
      </div>

      <div className="flex space-x-4 mt-12 justify-center">
        {productData.map((product, index) => (
          <CardComponent
            key={index}
            nama={product.nama}
            price={product.price}
            stock={product.stock}
            desc={product.desc}
            urlPoster={product.urlPoster}
          />
        ))}
      </div>
      <br />
      <div className="flex items-center ml-14 rounded-full bg-purple-400 mt-10 w-[150px] h-10">
        <span className='text-2xl text-white font-bold mx-auto'>Kategori 2</span>
      </div>

      <div className="flex space-x-4 mt-12 justify-center">
        {productData.map((product, index) => (
          <CardComponent
            key={index}
            nama={product.nama}
            price={product.price}
            stock={product.stock}
            desc={product.desc}
            urlPoster={product.urlPoster}
          />
        ))}
      </div>
      <br /><br />
    </>
  );
}

export default Product;
