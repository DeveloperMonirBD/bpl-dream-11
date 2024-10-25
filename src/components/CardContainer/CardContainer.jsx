import './CardContainer.css'
const CardContainer = () => {
    return (
        <div className="max-w-7xl mx-auto p-3 mt-10">
            <div className="flex justify-between items-center">
                <div className="font-bold">
                    <p>Avilable Player</p>
                </div>
                <div className="font-bold space-x-2" >
                    <button className="btn">Avilable</button>
                    <button className="btn">Selected (0)</button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;