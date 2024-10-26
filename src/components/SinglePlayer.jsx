/* eslint-disable react/prop-types */
import { BsFillFlagFill } from 'react-icons/bs';
import { FaUserInjured } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io5';

const SinglePlayer = ({ player, handleSelectedPlayers }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;

    return (
        <div className="card bg-base-100 border">
            <figure className="px-6 pt-6 min-h-[266px]">
                <img src={image} alt="Shoes" className="rounded-xl h-full object-cover" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    <FaUserInjured />
                    {name}
                </h2>

                <div className="flex justify-between items-center pb-5 border-b">
                    <div className="flex items-center gap-2">
                        <BsFillFlagFill />
                        <p>{country}</p>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg shadow-sm">{role}</div>
                </div>
                <h3 className="font-semibold">Rating</h3>

                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{battingType}</h3>
                    <h3>{bowlingType}</h3>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center font-semibold">
                        Price:
                        <IoLogoUsd />
                        {biddingPrice}
                    </div>

                    <div className="card-actions ">
                        <button onClick={() => handleSelectedPlayers(player)} className="btn">
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;
