import React from 'react';

const Modal = () => {
    return (
        <div>
            <button className="btn bg-rose-500 text-white hover:text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Filter</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form >
                    <h1>Type of Places</h1>
                    
                    </form>
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