/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from 'react-icons/ri';

const SelectedPlayers = ({ selectedPlayers, handleDelete, handleAddMorePlayer }) => {
    return (
        <div className="mt-10">
            {selectedPlayers.map(player => (
                <div key={player.playerId}>
                    <div className="flex items-center justify-between border p-6 rounded-2xl mb-6 shadow-md">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24">
                                <img className="rounded-2xl h-full w-full object-cover" src={player.image} alt={player.name} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl md:text-2xl font-semibold">{player.name}</p>
                                <p>{player.role}</p>
                            </div>
                        </div>

                        <button onClick={() => handleDelete(player.playerId)} className="text-4xl text-red-500 mr-6">
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={handleAddMorePlayer} href="#" className="btn bg-gradient-to-r from-[#f180b1]  to-warning shadow-md text-lg">
                Add More Player
            </button>
        </div>
    );
};

export default SelectedPlayers;
