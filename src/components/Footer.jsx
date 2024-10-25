import logo from '../assets/logo.png'
import Subscribe from './Subscribe';

const Footer = () => {
    return (
        <div className="bg-[#06091A] text-slate-300 mt-60 ">
            <div className="max-w-7xl mx-auto relative">
                <Subscribe />
                <div className="flex justify-center pt-48">
                    <img src={logo} alt="" />
                </div>
                <footer className="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p>
                            We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-slate-400">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="Enter your email" className="input input-bordered join-item" />
                                <button className="btn bg-gradient-to-r from-[#f180b1]  to-warning join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <div className="text-center p-6 max-w-7xl mx-auto border-t">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;