import { MdEventAvailable } from 'react-icons/md';
import CardContainer from './components/CardContainer/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
    
    return (
        <>
            <Navbar />
            <Header />
            <CardContainer />
            <Footer />
            <MdEventAvailable />
        </>
    );
}

export default App;
