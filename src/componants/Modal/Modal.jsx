import React, {  useState } from 'react';


const Modal = () => {
    const [bed, setBed] = useState(null)
    const [bedroom, setBedroom] = useState(null)



    
    const handleBed = (e) => {
        setBed(e.target.value)
    }
    const handleBedroom = (e) => {
        setBedroom(e.target.value)
    }

console.log(bed)
console.log(bedroom)

    
    return (
        <div>
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
                                <input type="radio" onClick={handleBedroom} value={''} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">1</span>
                                <input type="radio" onClick={handleBedroom} value={1} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">2</span>
                                <input type="radio" onClick={handleBedroom} value={2} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">3</span>
                                <input type="radio" onClick={handleBedroom} value={3} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">4</span>
                                <input type="radio" onClick={handleBedroom} value={4} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">5</span>
                                <input type="radio" onClick={handleBedroom} value={5} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">6</span>
                                <input type="radio" onClick={handleBedroom} value={6} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">7</span>
                                <input type="radio" onClick={handleBedroom} value={7} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">8</span>
                                <input type="radio" onClick={handleBedroom} value={8} name="radio-10" className="radio " />
                            </label>
                        </div>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">9</span>
                                <input type="radio" onClick={handleBedroom} value={9} name="radio-10" className="radio" />
                            </label>
                        </div>
                        <div className="form-control mr-5">
                            <label className="label cursor-pointer">
                                <span className="label-text">10</span>
                                <input type="radio" onClick={handleBedroom} value={10} name="radio-10" className="radio " />
                            </label>
                        </div>
                    </div>
                    {/* BEDROOM */}


                    {/* Bedroom */}
                    <h1 className='font-bold text-lg my-5'>Bathrooms</h1>
                    <div className='grid grid-cols-5 gap-x-2'>
                        <div className="form-control mr-5">

                            <label className="label cursor-pointer">
                                <span className="label-text">Any</span>
                                <input type="radio" onClick={handleBed} value={''} name="radio-10" className="radio" />
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
                    {/* BEDROOM */}


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-rose-500 text-white hover:text-black">Apply</button>
                        </form>
                    </div>
                </div>

            </dialog>
        </div>
    );
};

export default Modal;