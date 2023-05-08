import React from 'react'

const PostGrid = () => {
  return (
    <div>
        <div className=" 2xl:container 2xl:mx-auto">
            <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">FOOD COLLECTION</p>
            </div>
            <div className=" py-6 lg:px-20 md:px-6 px-4">
                <p className=" font-normal text-sm leading-3 text-gray-600 "></p>
                <hr className=" w-full bg-gray-200 my-6" />

                <div className=" flex justify-between items-center">
                    <div className=" flex space-x-3 justify-center items-center">
                        <svg className=" cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 7.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M3.75 12H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M3.75 16.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                        <p className=" font-normal text-base leading-4 text-gray-800">Filter</p>
                    </div>
                    <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing 18 products</p>
                </div>

                <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                            <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className="h-80 w-66" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU" alt="A girl Posing Img" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Edit</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Delete</button>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Spicy Pasta with Tomato ketchup</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                        
                    </div>
                    <div className=" relative">
                        <div className=" bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
                            <p className=" text-white fonr-normal text-base leading-4">XS , S , M , L</p>
                        </div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg" alt="A girl wearing white suit and googgles" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Edit</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Delete</button>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Cheese Chicken Burger</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className="h-80 w-66" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzrtukhzA6klXRDF54ltk08fRu4p0__V2JpiNEgvwkDw6__KkTUIeWAXT1Z8y6pdmNoA&usqp=CAU" alt="A girl wearing dark blue suit and posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Edit</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Delete</button>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Thai Spicy noodles</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                        {/* <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p> */}
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" h-80 w-full" src="https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg" alt="A girl posing and wearing white suit" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Edit</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Delete</button>
                            </div>
                        </div>
                                                <div className=" flex space-x-2 " >
                                                <div className="justify-items-end  space-x-1 items-center">
                                        <span>
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-gray-600 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        
                                            
                                            
                                            >
                                            <path
                                                strokeLinecap="round"
                                                srokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                            </svg>
                                        </span>
                                        <span>22</span>
                                        </div>
                                        <div className=" flex  space-x-1 items-center ">
                                        <span>
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            />
                                            </svg>
                                        </span>
                                        <span>20</span>
                                        </div>
                                    </div>
                                                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">pan cakes</p>
                                                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                                </div>
                    {/* <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png" alt="Girl posing for an Img" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div> */}
                    {/* <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png" alt="A blonde girl posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
                    </div> */}
                    {/* <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div> */}
                    {/* <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png" alt="Girl wearing pink suit posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div> */}
                </div>

                <div className=" flex justify-center items-center">
                    <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default PostGrid
