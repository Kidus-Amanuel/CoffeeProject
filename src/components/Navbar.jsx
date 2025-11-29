import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.png"; // your logo

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-softCream shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    {/* <img src={logo} alt="Coffee Export Logo" className="h-10 md:h-12" /> */}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-leafGreen font-semibold" : "text-charcoal hover:text-leafGreen transition"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                            isActive ? "text-leafGreen font-semibold" : "text-charcoal hover:text-leafGreen transition"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-leafGreen font-semibold" : "text-charcoal hover:text-leafGreen transition"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                            isActive ? "text-leafGreen font-semibold" : "text-charcoal hover:text-leafGreen transition"
                        }
                    >
                        Contact
                    </NavLink>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="ml-4 px-5 py-2 bg-leafGreen text-softCream rounded-lg font-semibold hover:bg-coffeeBrown transition"
                    >
                        Request Samples
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-charcoal focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-4 bg-softCream">
                    <NavLink
                        to="/"
                        className="block text-charcoal hover:text-leafGreen transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className="block text-charcoal hover:text-leafGreen transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/products"
                        className="block text-charcoal hover:text-leafGreen transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className="block text-charcoal hover:text-leafGreen transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>

                    <Link
                        to="/contactus"
                        className="block mt-2 px-5 py-2 bg-leafGreen text-softCream rounded-lg font-semibold hover:bg-coffeeBrown transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Request Samples
                    </Link>
                </div>
            )}
        </nav>
    );
}
