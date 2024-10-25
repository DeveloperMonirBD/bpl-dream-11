import { useState, useEffect } from 'react';

const AvilableProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);
    return <div></div>;
};

export default AvilableProducts;
