import React from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import products from '../../../public/chart';


const Schart = () => {
  return (
    <div className="bg-white">
<h1 className=" ml-[7rem] font-bold w-[9rem] rounded-[50px] text-gray-900 mt-[3rem] bg-purple-500 sm:text-2xl text-white p-4">
  Keranjang
</h1>
      <div className="mx-auto pb-24 lg:max-w-7xl lg:px-8 w-[90rem] ">
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            {/* max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8 */}
            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>

                        <div className="absolute top-0 right-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                      )}

                      <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          
    

  
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-xl shadow-xl bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Detail Pesanan
            </h2>

            {/* Opsi Pengiriman */}
            <div className="bg-purple-200 h-[9rem] rounded-xl px-7">
  <fieldset className="mt-6">
    <legend className="text-base font-medium text-gray-900 pt-5">Opsi Pengiriman</legend>
    <div className="mt-2 space-y-2">
      <div className="flex items-center">
        <input
          id="standard-shipping"
          name="shipping-option"
          type="radio"
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="standard-shipping" className="ml-3 text-sm text-gray-700">
          Standar Shipping (5-7 hari sampai) <span className='font-bold'>Rp.12.000</span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="express-shipping"
          name="shipping-option"
          type="radio"
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="express-shipping" className="ml-3 text-sm text-gray-700">
          Express Shipping (2-3 hari sampai) <span className='font-bold'>Rp.18.000</span>
        </label>
      </div>
      <div className="flex items-center">
      <input
          id="nextday-shipping"
          name="shipping-option"
          type="radio"
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="nextday-shipping" className="ml-3 text-sm text-gray-700">
          Pengiriman Hari Berikutnya <span className='font-bold'>Rp.27.000</span>
        </label>
      </div>
    </div>
  </fieldset>
  </div>

  {/* Kotak Pesan */}
  <div className="mt-6">
    <label htmlFor="pesan" className="block text-sm font-medium text-gray-700">
      Kotak Pesan (Opsional)
    </label>
    <div className="mt-1">
      <textarea
        id="pesan"
        name="pesan"
        rows="4"
        className="rounded-xl shadow-sm pt-3 mt-1 block w-full sm:text-sm border-gray-300 bg-purple-200"
        placeholder="Pesan"
        style={{ fontWeight: 'bold', margin: '10px 0', padding: '10px'  }}
      ></textarea>
    </div>
  </div>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Harga Item</dt>
                <dd className="text-sm font-medium text-gray-900">Rp. 533.000</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Biaya penanganan</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">Rp. 2.300</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Biaya pengiriman</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">Rp. 27.000</dd>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total harga</dt>
                <dd className="text-base font-medium text-gray-900">Rp.562.300</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-purple-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <a href="/pesanan">
                Checkout
                </a>
              </button>
            </div>
          </section>
          </form>
      </div>
      </div>
    
  )
}

export default Schart


