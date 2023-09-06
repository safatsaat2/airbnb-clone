import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("/public/rooms.json")
        .then(res => res.json())
        .then(data => {
            setRooms(data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[])
    if(loading){
        return <Loader/>
    }
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <div className='pt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {rooms.map((room, index) => (<Card key={index} room={room}/>))}
            </div>
        </div>
    );
};

export default Rooms;