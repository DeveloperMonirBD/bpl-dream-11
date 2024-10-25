import shadowImg from '../assets/bg-shadow.png';

const Subscribe = () => {
    return (
        <div className="m-3 absolute top-[-22%] md:top-[-30%] left-0 border rounded-2xl">
            <div
                className="bg-white py-10 rounded-2xl shadow-md "
                style={{
                    backgroundImage: `url(${shadowImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: '12px'
                }}>
                <div className="md:mx-[135px] lg:mx-[390px]">
                    <div className="hero-content  text-center text-black flex flex-col ">
                        <div className="max-w-2xl">
                            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                            <p className="mb-6 mt-4 ">Get the latest updates and news right in your inbox!</p>
                        </div>

                        {/* form  */}
                        <form className=" flex gap-2">
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <button className="btn bg-gradient-to-r from-[#f180b1]  to-warning">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
