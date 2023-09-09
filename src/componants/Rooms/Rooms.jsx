import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { getRooms } from '../../api/rooms';

const Rooms = () => {
    const [params, setParams] = useSearchParams()
    
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    const category = params.get("category")
    const bed = params.get("bed")
    const bedroom = params.get("bedroom")
    const bathroom = params.get("bathroom")
    const type = params.get("typesPlace")



    
    useEffect(() => {
        setLoading(true)
        // Getting data from database
        getRooms()
        .then(data => {
            if( bed || bedroom || bathroom || type){

                // If we strict filtering
                // const filteredData = data.filter(room =>  room.bed == bed && room.bedroom == bedroom && room.bathroom == bathroom && room.type == type)

                // Filtering data
                const filteredData = data.filter(room =>  room.bed == bed || room.bedroom == bedroom || room.bathroom == bathroom || room.type == type)
                setLoading(false)
                return setRooms(filteredData)
                console.log(filteredData)
            }
            
            // Filtering with only category
            if(category){
                const filteredData = data.filter(room => room.category === category)
                setRooms(filteredData)
                console.log(filteredData)
            }
            else{
                setRooms(data)
            }
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[category, bed, bathroom, bedroom, type])
    


    
    if(loading){
        return <Loader/>
    }
    return (
        <div className=''>
            <div className='pt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {rooms.map((room, index) => (<Card key={index} room={room}/>))}
            </div>
        </div>
    );
};

export default Rooms;