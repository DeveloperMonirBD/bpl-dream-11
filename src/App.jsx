import { useState } from 'react';
import CardContainer from './components/CardContainer/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isActive, setIsActive] = useState({
        cart: true,
        status: 'available'
    });
    const [price, setPrice] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleDelete = playerId => {
        toast.info('Delete the card');
        const remainingProducts = selectedProducts.filter(p => p.playerId != playerId);
        setSelectedProducts(remainingProducts);
    };

    const handleSelectedProducts = product => {
        const isexist = selectedProducts.find(p => p.playerId == product.playerId);

        if (selectedProducts.length === 6) {
            toast.warning('You have already selected 6 players!');
            return; // Prevent adding more products
        }

        if (isexist) {
            toast.error('Player already selected');
        } else {
            const newProducts = [...selectedProducts, product];
            setSelectedProducts(newProducts);
            setPrice(price - product.biddingPrice);
        }
    };


    const handleIncreasePrice = () => {
        setPrice(price + 6000000);
        toast.success('Added some money');
    };

    const handleIsActiveState = status => {
        if (status == 'available') {
            setIsActive({
                cart: true,
                status: 'available'
            });
        } else {
            setIsActive({
                cart: false,
                status: 'selected'
            });
        }
    };

    return (
        <>
            <Navbar price={price} />
            <Header handleIncreasePrice={handleIncreasePrice} />
            <CardContainer
                handleDelete={handleDelete}
                selectedProducts={selectedProducts}
                handleSelectedProducts={handleSelectedProducts}
                isActive={isActive}
                handleIsActiveState={handleIsActiveState}
            />
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
            />
        </>
    );
}

export default App;
