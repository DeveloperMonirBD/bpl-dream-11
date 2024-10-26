/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllPlayers from '../AllPlayers';
import SelectedPlayers from '../SelectedPlayers';
import './CardContainer.css';

const CardContainer = ({ handleIsActiveState, isActive, handleSelectedPlayers, selectedPlayers, handleDelete }) => {
    useEffect(() => {
        if (selectedPlayers.length === 6) {
            toast.info('You have selected 6 players!');
        }
    }, [selectedPlayers]);

    const handleAddMorePlayer = () => {
        handleIsActiveState('available');
    };

    return (
        <>
            <div className="max-w-7xl mx-auto p-3 mt-10">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-sm md:text-lg">{isActive.cart ? 'Available Player' : `Selected Player (${selectedPlayers.length}/6) `}</div>
                    <div className="font-bold space-x-2">
                        <button className={`${isActive.cart ? 'btn active' : 'btn'}`} onClick={() => handleIsActiveState('available')}>
                            Available
                        </button>
                        <button className={`${isActive.cart ? 'btn' : 'active btn'}`} onClick={() => handleIsActiveState('selected')}>
                            Selected ({selectedPlayers.length})
                        </button>
                    </div>
                </div>
                {isActive.cart ? (
                    <AllPlayers handleSelectedPlayers={handleSelectedPlayers} />
                ) : (
                    <SelectedPlayers handleDelete={handleDelete} selectedPlayers={selectedPlayers} handleAddMorePlayer={handleAddMorePlayer} />
                )}
            </div>
        </>
    );
};

export default CardContainer;
