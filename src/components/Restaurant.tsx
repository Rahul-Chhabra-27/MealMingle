import React from 'react'
import Dish1 from '../images/dish-1.png'
import { Link } from 'react-router-dom'

interface restaurantProp {
    restaurant: any,
    city: any
}

const Restaurant = (props: restaurantProp) => {
    const fetchRestaurans = async () => {
        const response = await fetch('http://localhost:8091/restaurants');
        const data = await response.json();
        console.log(data);
    }
    const fetchRestaurantItems = async () => {
        const response = await fetch('http://localhost:8091/restaurant/items/prograd-food-corner');
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className='p-4 pl-20'>
            <button onClick={fetchRestaurantItems}>Fetch Items</button>
            {/* <button onClick={fetchRestaurans}>Click Me</button> */}
            <div className='font-semibold text-3xl'>
                {props.city ? `Best Food in ${props.city}` : 'Best Food in Location'}
            </div>
            {props.city ? <div className='grid grid-cols-3'>
                {props.restaurant.filter((data: any) => data.restaurantAddress.city.includes(props.city)).map((data: any) => {
                    console.log(data);
                    return <>
                        <Link to='/menu' state={{ data: data }}>
                            <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12">
                                <img className="w-full rounded-2xl h-60" src={require(`../images/${data.restaurantImage}`)} alt="Restaurant Image" />
                                <div className="py-4">
                                    <div className='flex justify-between items-center'>
                                        <div className="font-semibold text-xl mb-2">{data.restaurantName}</div>
                                        <div className={`text-white font-semibold text-base rounded-md p-1 ${data.restaurantRating < 4.5 ? `bg-green-600` : `bg-green-900`}`}>
                                            {data.restaurantRating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                })}
            </div>
                :
                <div className='grid grid-cols-3'>
                    {props.restaurant.map((data: any) => {
                        console.log(data);
                        return <>
                            <Link to='/menu' state={{ data: data }}>
                                <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12">
                                    <img className="w-full rounded-2xl h-60" src={require(`../images/${data.restaurantImage}`)} alt="Restaurant Image" />
                                    <div className="py-4">
                                        <div className='flex justify-between items-center'>
                                            <div className="font-semibold text-xl mb-2">{data.restaurantName}</div>
                                            <div className={`text-white font-semibold text-base rounded-md p-1 ${data.restaurantRating < 4.5 ? `bg-green-600` : `bg-green-900`}`}>
                                                {data.restaurantRating}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    })}
                </div>}
        </div>
    )
}

export default Restaurant