import React from 'react'
import { useSelector } from 'react-redux';
import { selectOrders, selectCustomerOrders } from '../../redux/counterSlicer';
// import { selectMyServices } from '../../redux/counterSlicer';

export default function Orders() {
    const orders = useSelector(selectOrders);
    console.log(orders)
    // const services = useSelector(selectMyServices);
    let myOrders = [
        {
            orders:
            {
                "orderNotes": "I want to order this service, it's very important for me to have it done",
                "orderDate": "2022-12-15",
                "providerCoveredCities": "Amman",
            },

            services:
            {
                "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg/1200px-Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg",
                "serviceCategory": "string",
                "averageRate": 4.5,
                "price": 100,
            },

            provider:
            {
                "name": "amani smadi",
                "phone": "0799999999",
                "picture": "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
            }

        }
    ]


    return (
        <div className="bg-gray-200">
            <h2 className="text-2xl font-bold  p-2 text-center">Orders</h2>
            <section className="parent-section">
                {/* {myOrders && myOrders.map((order, index) => (
                    <div key={index} className="card flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg bg-white">
                        <img src={order.services.picture}
                            alt="img" className="thumbnail ml-10 mr-5" height="200" width="400" />
                        
                        <div className="card-details">
                            <div className="top flex flex-row justify-between my-2 ma-5 mx-5 text-gray-500">
                                <div className="tag">

                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{order.services.averageRate}</p>
                                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                        <a href="/reviews" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">Reviews</a>
                                    </div>

                                </div>
                                <div className="price text-xs">${order.services.price}</div>
                            </div>

                            <div className="middle mx-2 my-5">
                                <div className="author flex mx-2 my-5">
                                    <img src={order.provider.picture}
                                        alt="pic" className="profile mr-7 rounded-lg" width='70px' hights='20px'></img>
                                    <div className="author-details text-sm">
                                        <p className="author-name">Provider:{order.provider.name} </p>
                                        <p className="author-phone"> Phone: {order.provider.phone} </p>
                                        <p className="date">Date: {order.orders.orderDate}</p>
                                    </div>

                                </div>

                                <h2 className="title text-2xl font-bold mx-2">{order.services.serviceCategory},{order.orders.providerCoveredCities}</h2>
                                <p className="excerpt mx-2">
                                    {order.orders.orderNotes}
                                </p>
                            </div>

                            <div className="bottom mx-2 my-5 float-right">

                                <button data-modal-toggle="defaultModal" type="button"
                                    className="text-white bg-teal-800 hover:bg-teal-600 focus:ring-4 
            focus:outline-none  font-medium rounded-lg text-sm px-3 py-3 m-2
            text-center  ">Delete</button>

                            </div>

                        </div>

                    </div>
                ))} */}
            {orders && orders.map((order, idx)=>(
                
                <ul key={idx}>
                    <li>customerID: {order.customerID}</li><br/>
                    <li>orderNotes: {order.orderNotes}</li><br/>
                    <li>serviceID: {order.serviceID}</li><br/>
                    <li>Status: {order.status}</li><br/>
                </ul>
                
            ))

            }
            </section>
        </div>
    )
}