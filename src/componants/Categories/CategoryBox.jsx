import queryString from 'query-string';
import React, { useState } from 'react';
import {  useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({label, icon:Icon}) => {
    const [params, setParams] = useSearchParams()
    const [active, setActive] = useState(false)
    const value = params.get("category")
    const navigate  = useNavigate()

    // sets the individual category name to the param
    const handleClick = () => {

        let currentQuery = {
            
        }
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery= {
            ...currentQuery, category: label, 
        }

        const url = queryString.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull: true})

        navigate(url)
        setActive(true)
    }

    return (
        <div onClick={handleClick} className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 active:text-neutral-800 border-transparent text-neutral-500 cursor-pointer'>
            <Icon size={26} />
            <div className='text-sm font-medium'>
            {label}
            </div>
        </div>
    );
};

export default CategoryBox;