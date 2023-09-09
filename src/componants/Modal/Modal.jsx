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

    const handleBed = (e) => {
        const bedValue = e.target.value
        setBed(bedValue)

        let currentQuery = {
            
        }
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery= {
            ...currentQuery, bed: e.target.value, 
        }

        const url = queryString.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull: false})

        navigate(url)

    }
    const handleBedroom = (e) => {
        setBedroom(e.target.value)
        let currentQuery = {
            
        }
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery= {
            ...currentQuery, bedroom: e.target.value, 
        }

        const url = queryString.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull: false})

        navigate(url)
    }
    const handleBathroom = (e) => {
        setBathroom(e.target.value)
        let currentQuery = {
            
        }
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery= {
            ...currentQuery, bathroom: e.target.value, 
        }

        const url = queryString.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull: false})

        navigate(url)
    }
    const handleTypesPlace = (e) => {
        setTypesPlace(e.target.value)
        let currentQuery = {
            
        }
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery= {
            ...currentQuery, typesPlace: e.target.value, 
        }

        const url = queryString.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull: false})

        navigate(url)
    }


    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <button className="btn bg-rose-500 text-white hover:text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Filter</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">


                    {/* Bed */}
                    <h1 className='font-bold text-lg my-5'>Bed</h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Any</span>
                                <input type="radio" onClick={handleBed} value={null} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">1</span>
                                <input type="radio" onClick={handleBed} value={1} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">2</span>
                                <input type="radio" onClick={handleBed} value={2} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">3</span>
                                <input type="radio" onClick={handleBed} value={3} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">4</span>
                                <input type="radio" onClick={handleBed} value={4} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">5</span>
                                <input type="radio" onClick={handleBed} value={5} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">6</span>
                                <input type="radio" onClick={handleBed} value={6} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">7</span>
                                <input type="radio" onClick={handleBed} value={7} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">8</span>
                                <input type="radio" onClick={handleBed} value={8} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">9</span>
                                <input type="radio" onClick={handleBed} value={9} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">10</span>
                                <input type="radio" onClick={handleBed} value={10} name="radio-10" className="radio " />
                            </label>
                        </div>
                    </div>
                    {/* BED */}


                    {/* Bedroom */}
                    <h1 className='font-bold text-lg my-5'>Bedrooms</h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Any</span>
                                <input type="radio" onClick={handleBedroom} value={''} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">1</span>
                                <input type="radio" onClick={handleBedroom} value={1} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">2</span>
                                <input type="radio" onClick={handleBedroom} value={2} name="radio-20" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">3</span>
                                <input type="radio" onClick={handleBedroom} value={3} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">4</span>
                                <input type="radio" onClick={handleBedroom} value={4} name="radio-20" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">5</span>
                                <input type="radio" onClick={handleBedroom} value={5} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">6</span>
                                <input type="radio" onClick={handleBedroom} value={6} name="radio-20" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">7</span>
                                <input type="radio" onClick={handleBedroom} value={7} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">8</span>
                                <input type="radio" onClick={handleBedroom} value={8} name="radio-20" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">9</span>
                                <input type="radio" onClick={handleBedroom} value={9} name="radio-20" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">10</span>
                                <input type="radio" onClick={handleBedroom} value={10} name="radio-20" className="radio " />
                            </label>
                        </div>
                    </div>
                    {/* BEDROOM */}


                    {/* Bathroom */}
                    <h1 className='font-bold text-lg my-5'>Bathrooms</h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Any</span>
                                <input type="radio" onClick={handleBathroom} value={''} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">1</span>
                                <input type="radio" onClick={handleBathroom} value={1} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">2</span>
                                <input type="radio" onClick={handleBathroom} value={2} name="radio-30" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">3</span>
                                <input type="radio" onClick={handleBathroom} value={3} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">4</span>
                                <input type="radio" onClick={handleBathroom} value={4} name="radio-30" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">5</span>
                                <input type="radio" onClick={handleBathroom} value={5} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">6</span>
                                <input type="radio" onClick={handleBathroom} value={6} name="radio-30" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">7</span>
                                <input type="radio" onClick={handleBathroom} value={7} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">8</span>
                                <input type="radio" onClick={handleBathroom} value={8} name="radio-30" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">9</span>
                                <input type="radio" onClick={handleBathroom} value={9} name="radio-30" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">10</span>
                                <input type="radio" onClick={handleBathroom} value={10} name="radio-30" className="radio " />
                            </label>
                        </div>
                    </div>
                    {/* Bathroom */}
                    {/* Type of Places */}
                    <h1 className='font-bold text-lg my-5'>Types of Places</h1>
                    <div className='grid grid-cols-3 gap-x-5'>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Entire Place</span>
                                <input type="radio" onClick={handleTypesPlace} value={'entire'} name="radio-40" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Shared Place</span>
                                <input type="radio" onClick={handleTypesPlace} value={'shared'} name="radio-40" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">Single Place</span>
                                <input type="radio" onClick={handleTypesPlace} value={'single'} name="radio-40" className="radio " />
                            </label>
                        </div>
                    </div>
                    {/* Type of Places */}

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-rose-500 text-white hover:text-black">Apply</button>
                        </form>
                    </div>
                </div>

            </dialog>
            <Rooms bed={bed} bedroom={bedroom} bathroom={bathroom} typesPlace={typesPlace} />
        </div>
    );
};

export default Modal;