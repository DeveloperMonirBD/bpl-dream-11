/* eslint-disable react/prop-types */
import AllProducts from '../AllProducts';
import SelectedProducts from '../SelectedProducts';
import './CardContainer.css';
const CardContainer = ({ handleIsActiveState, isActive, handleSelectedProducts, selectedProducts }) => {
    return (
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

            {isActive.cart ? <AllProducts handleSelectedProducts={handleSelectedProducts} /> : <SelectedProducts selectedProducts={selectedProducts} />}
        </div>
    );
};

export default CardContainer;
