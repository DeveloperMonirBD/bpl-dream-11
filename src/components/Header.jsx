import bannerImg from '../assets/banner-main.png';
import shadowImg from '../assets/bg-shadow.png';

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto p-3">
            <div
                className="bg-black py-10 rounded-2xl"
                style={{
                    backgroundImage: `url(${shadowImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <img className="mx-auto mb-6" src={bannerImg} alt="banner img" />
                        <h1 className="text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-6 mt-4 ">Beyond Boundaries Beyond Limits</p>
                        <div className="border border-warning inline-block p-1 rounded-xl shadow-xl">
                            <button className="btn  bg-gradient-to-r from-[#f180b1]  to-warning shadow-md text-lg">Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
