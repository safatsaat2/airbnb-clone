import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';
import Modal from '../Modal/Modal';

const Categories = () => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'> 
            <div className='pt-24 flex items-center justify-between overflow-x-auto'>
            {categories.map(category => (<CategoryBox label={category.label} icon={category.icon} key={category.label} />))}
            </div>
            <Modal/>
        </div>
    );
};

export default Categories;