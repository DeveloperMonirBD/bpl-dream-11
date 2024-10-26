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
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleDelete = playerId => {
        const remainingPlayers = selectedPlayers.filter(p => p.playerId !== playerId);
        setSelectedPlayers(remainingPlayers);
    };

    const handleSelectedPlayers = player => {
        const isExist = selectedPlayers.find(p => p.playerId === player.playerId);

        if (selectedPlayers.length === 6) {
            toast.error('Sorry !! You have already selected 6 players!');
            return;
        }

        if (player.biddingPrice > price) {
            toast.error('Not enough money to buy this player. Claim some Credit');
            return;
        }

        if (isExist) {
            toast.error(`Sorry !! ${player.name} is Already Exist`);
        } else {
            toast.success(`Congrats !! ${player.name} is now in your squared`);
            const newPlayers = [...selectedPlayers, player];
            setSelectedPlayers(newPlayers);
            setPrice(price - player.biddingPrice);
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
            <CardContainer handleDelete={handleDelete} selectedPlayers={selectedPlayers} handleSelectedPlayers={handleSelectedPlayers} isActive={isActive} handleIsActiveState={handleIsActiveState} />
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
