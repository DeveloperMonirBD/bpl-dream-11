/* eslint-disable react/prop-types */
import AllProducts from '../AllProducts';
import SelectedProducts from '../SelectedProducts';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CardContainer.css';
import { useEffect } from 'react';

const CardContainer = ({ handleIsActiveState, isActive, handleSelectedProducts, selectedProducts, handleDelete }) => {
    useEffect(() => {
        if (selectedProducts.length === 6) {
            toast.info('You have selected 6 players!');
        }
    }, [selectedProducts]);

    const handleAddMorePlayer = () => {
        handleIsActiveState('available');
    }

    return (
        <>
            <div className="max-w-7xl mx-auto p-3 mt-10">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-sm md:text-lg">{isActive.cart ? 'Available Player' : `Selected Player (${selectedProducts.length}/6) `}</div>
                    <div className="font-bold space-x-2">
                        <button className={`${isActive.cart ? 'btn active' : 'btn'}`} onClick={() => handleIsActiveState('available')}>
                            Available
                        </button>
                        <button className={`${isActive.cart ? 'btn' : 'active btn'}`} onClick={() => handleIsActiveState('selected')}>
                            Selected ({selectedProducts.length})
                        </button>
                    </div>
                </div>
                {isActive.cart ? (
                    <AllProducts handleSelectedProducts={handleSelectedProducts} />
                ) : (
                    <SelectedProducts handleDelete={handleDelete} selectedProducts={selectedProducts} handleAddMorePlayer={handleAddMorePlayer} />
                )}
            </div>
        </>
    );
};

export default CardContainer;
