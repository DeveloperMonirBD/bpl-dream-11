/* eslint-disable react/prop-types */
import AllProducts from '../AllProducts';
import SelectedProducts from '../SelectedProducts';
import './CardContainer.css';
const CardContainer = ({ handleIsActiveState, isActive }) => {
    return (
        <div className="max-w-7xl mx-auto p-3 mt-10">
            <div className="flex justify-between items-center">
                <div className="font-bold">{isActive.cart ? 'Available Player' : 'Selected Player (4/6) '}</div>
                <div className="font-bold space-x-2">
                    <button className={`${isActive.cart ? 'btn active' : 'btn'}`} onClick={() => handleIsActiveState('available')}>
                        Available
                    </button>
                    <button className={`${isActive.cart ? 'btn' : 'active btn'}`} onClick={() => handleIsActiveState('selected')}>
                        Selected (0)
                    </button>
                </div>
            </div>

            {isActive.cart ? <AllProducts /> : <SelectedProducts />}
        </div>
    );
};

export default CardContainer;
