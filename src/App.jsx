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
    
    const handleIsActiveState = (status) => {
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
    }
    
    return (
        <>
            <Navbar />
            <Header />
            <CardContainer isActive={isActive} handleIsActiveState={handleIsActiveState} />
            <Footer />
        </>
    );
}

export default App;
