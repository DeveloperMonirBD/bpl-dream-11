/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import SinglePlayer from './SinglePlayer';

const AllPlayers = ({ handleSelectedPlayers }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => {
                setPlayers(data);
            });
    }, []);

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map(player => (
                <SinglePlayer key={player.playerId} handleSelectedPlayers={handleSelectedPlayers} player={player} />
            ))}
        </div>
    );
};

export default AllPlayers;
