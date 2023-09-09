import React, { useState } from 'react';
import queryString from 'query-string';
import Rooms from '../Rooms/Rooms';
import { useNavigate, useSearchParams } from 'react-router-dom';



const Modal = () => {
    const [bed, setBed] = useState(null)
    const [bedroom, setBedroom] = useState(null)
    const [bathroom, setBathroom] = useState(null)
    const [typesPlace, setTypesPlace] = useState(null)
    const [params, setParams] = useSearchParams()
    const bedValue = params.get("bed")
    const bedroomValue = params.get("bedroom")
    const bathroomValue = params.get("bathroom")
    const typesPlaceValue = params.get("type")
    const navigate = useNavigate()

    // Value array
    const Items = [
        {
            name: "Any",
            value: ""
        },
        {
            name: "1",
            value: 1
        },
        {
            name: "2",
            value: 2
        },
        {
            name: "3",
            value: 3
        },
        {
            name: "4",
            value: 4
        },
        {
            name: "5",
            value: 5
        },
        {
            name: "6",
            value: 6
        },
        {
            name: "7",
            value: 7
        },
        {
            name: "8",
            value: 8
        },
        {
            name: "9",
            value: 9
        },
        {
            name: "10",
            value: 10
        }
    ]
    // Type Of Places Array
    const placesItems =[
        {
            name: "Any",
            value: ""
        },
        {
            name: "Entire Place",
            value: "entire"
        },
        {
            name: "Shared Place",
            value: "shared"
        },
        {
            name: "Single Place",
            value: "single"
        }
    ]


    // sets the quantity of beds to the params
    const handleBed = (e) => {

        let currentQuery = {

        }
        if (params) {
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, bed: e.target.value,
        }

        const url = queryString.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true })

        navigate(url)

    }

    // sets the quantity of bedrooms to the params
    const handleBedroom = (e) => {
        setBedroom(e.target.value)
        let currentQuery = {

        }
        if (params) {
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, bedroom: e.target.value,
        }

        const url = queryString.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: false })

        navigate(url)
    }

    // sets the quantity of bathrooms to the params
    const handleBathroom = (e) => {
        setBathroom(e.target.value)
        let currentQuery = {

        }
        if (params) {
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, bathroom: e.target.value,
        }

        const url = queryString.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: false })

        navigate(url)
    }

    // sets the type of places to the params
    const handleTypesPlace = (e) => {
        setTypesPlace(e.target.value)
        let currentQuery = {

        }
        if (params) {
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, typesPlace: e.target.value,
        }

        const url = queryString.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: false })

        navigate(url)
    }

    // Resets filter and navigate to homepage
    const resetHandler = () => {
        navigate("/")
    }


    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <div className='flex items-center gap-x-4'>
                <button className="btn bg-rose-500 text-white hover:text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Filter</button>
                <button onClick={resetHandler} className="btn bg-rose-500 text-white hover:text-black">Reset Filter</button>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">


                    {/* Bed */}
                    <h1 className='font-bold text-lg my-5'>Bed </h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        {Items.map(item => <>
                            <div className="form-control mr-5">
                                <label className="label cursor-pointer">
                                    <span className="label-text">{item.name}</span>
                                    <input type="radio" onClick={handleBed} value={item.value} name="radio-10" className="radio" />
                                </label>
                            </div>                        </>)}
                    </div>
                    {/* BED */}


                    {/* Bedroom */}
                    <h1 className='font-bold text-lg my-5'>Bedrooms </h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        {Items.map(item => <>
                            <div className="form-control mr-5">
                                <label className="label cursor-pointer">
                                    <span className="label-text">{item.name}</span>
                                    <input type="radio" onClick={handleBedroom} value={item.value} name="radio-20" className="radio" />
                                </label>
                            </div>
                        </>)}
                    </div>
                    {/* BEDROOM */}


                    {/* Bathroom */}
                    <h1 className='font-bold text-lg my-5'>Bathrooms</h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        {Items.map(item => <>
                            <div className="form-control mr-5">
                                <label className="label cursor-pointer">
                                    <span className="label-text">{item.name}</span>
                                    <input type="radio" onClick={handleBathroom} value={item.value} name="radio-30" className="radio" />
                                </label>
                            </div>
                        </>)}
                    </div>
                    {/* Bathroom */}
                    {/* Type of Places */}
                    <h1 className='font-bold text-lg my-5'>Types of Places *</h1>
                    <div className='grid grid-cols-3 gap-x-5'>
                        {placesItems.map(item => <>
                            <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">{item.name}</span>
                                <input type="radio" onClick={handleTypesPlace} value={item.value} name="radio-40" className="radio" />
                            </label>
                        </div>
                        </>)}
                        
                    </div>
                    {/* Type of Places */}

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-rose-500 text-white hover:text-black">Close</button>
                        </form>
                    </div>
                </div>

            </dialog>
            <Rooms bed={bed} bedroom={bedroom} bathroom={bathroom} typesPlace={typesPlace} />
        </div>
    );
};

export default Modal;