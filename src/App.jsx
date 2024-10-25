import { useState } from 'react';
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



    const handleSelectedProducts = (product) => {
        const isexist = selectedProducts.find(p => p.playerId == product.playerId);

        if (isexist) {
            alert('Already isExist');
        } else {
            const newProducts = [...selectedProducts, product];
            setSelectedProducts(newProducts);
        }  
    }





    const handleIncreasePrice = () => {
        setPrice(price + 6000000);
        alert('Addeded money');
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
            <CardContainer selectedProducts={selectedProducts} handleSelectedProducts={handleSelectedProducts} isActive={isActive} handleIsActiveState={handleIsActiveState} />
            <Footer />
        </>
    );
}

export default App;
