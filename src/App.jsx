import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardContainer from './components/CardContainer/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    const [isActive, setIsActive] = useState({
        cart: true,
        status: 'available'
    });
    const [price, setPrice] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleDelete = playerId => {
        const remainingProducts = selectedProducts.filter(p => p.playerId !== playerId);
        setSelectedProducts(remainingProducts);
    };

    const handleSelectedProducts = product => {
        const isExist = selectedProducts.find(p => p.playerId === product.playerId);

        if (product.biddingPrice > price) {
            toast.error('Not enough money to buy this player. Claim some Credit');
            return;
        }

        if (isExist) {
            toast.error('Player Already Exist');
        } else {
            toast.success(`Congrats !! ${product.name} is now in your squared`);
            const newProducts = [...selectedProducts, product];
            setSelectedProducts(newProducts);
            setPrice(price - product.biddingPrice);
        }
    };

    const handleIncreasePrice = () => {
        setPrice(price + 6000000);
        toast.success('Credit Added to your Account');
    };

    const handleIsActiveState = status => {
        if (status === 'available') {
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
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </>
    );
}

export default App;
