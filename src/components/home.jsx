import React from 'react'
import { useState, useEffect } from 'react';
import { Scrollimage } from './scrollImage.jsx';

export function Home() {

	const [data, setData] = useState([]);

	const getData = async () => {
		const url = 'https://fakestoreapi.com/products';
		const response = await fetch(url);
		const newData = await response.json();
		setData(newData);
	}

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	// const divImages = data.map((item)=>(
	// 	<Scrollimage obj={item} key={item.id}/>
	// ));   //working

	return (
		<>

			{/* <div className='scroll-items h-48 overflow-x-auto flex gap-4 m-4 pb-4'>
				{data.slice(4,15).map((item)=>(
					<Scrollimage obj={item}  />
				))}
				{divImages}
			</div> */}

			 <section className='mx-auto bg-[#fafafa]'>
				<div className=' fixed-items md:grid md:grid-cols-6 md:grid-rows-2 w-[96%] mx-auto gap-4 h-96 '>

					<div className='relative left bg-white col-span-4 row-span-2 hover:ring-1 rounded-2xl border border-gray-200'>
						<img className=' h-full w-full object-contain hover:scale-105 duration-300' src="./assets/shirt1.png" alt="" />
						<div className='absolute gap-2 bottom-2 left-4 h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Circle T-Shirt</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$20.00 USD</p>
						</div>
					</div>

					<div className='relative bg-white md:col-span-2 md:row-span-1 hover:ease-in-out hover:ring-1 rounded-2xl border border-gray-200'>
						<img className='h-full w-full object-contain hover:scale-105 duration-300' src="./assets/bag1.png" alt="" />
						<div className='absolute gap-2 bottom-2 left-4  h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Drawstring Bag</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$12.00 USD</p>
						</div>
					</div>

					<div className='relative bg-white md:col-span-2 md:row-span-1  hover:ease-in-out hover:ring-1 rounded-2xl border border-gray-200 '>
						<img className='h-full w-full object-contain hover:scale-105 duration-300' src="./assets/cup.png" alt="" />
						<div className='absolute gap-2 bottom-2 left-4 h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$15.00 USD</p>
						</div>
					</div>

				</div>

				<div className='z-5 scroll-items h-48 overflow-x-auto flex gap-4 m-4 pb-4'>
					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a className='' href="/">
							<img className='relative h-full w-full object-contain hover:scale-105 duration-300' src="/assets/cap.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none h-full bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400 '>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300' src="/assets/mug.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain   hover:scale-105 duration-300 ' src="/assets/hoodie.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300 ' src="/assets/cup.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300 ' src="/assets/mug.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300 ' src="/assets/shirt1.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300' src="/assets/baby.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>

					<div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
						<a href="/">
							<img className='h-full w-full object-contain  hover:scale-105 duration-300 ' src="/assets/mug.png" alt="" />
						</a>
						<span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
							<h3 className='font-semibold text-sm'>Acme Cup</h3>
							<p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>$15.00 USD</p>
						</span>
					</div>
				</div>



			</section>
		</>
	);
};

