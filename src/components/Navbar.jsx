import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCoffee, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    return (
        <nav className="bg-softCream shadow-lg sticky top-0 z-50 border-b border-softCream/20">
            {/* Top Bar */}
            <div className="bg-coffeeBrown text-softCream py-2 px-6 md:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-leafGreen text-xs" />
                            <span className="font-body">+251 11 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-leafGreen text-xs" />
                            <span className="font-body">export@ethiopiacoffee.com</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-softCream/80 font-body">Premium Ethiopian Green Coffee Exporters</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-leafGreen to-coffeeBrown rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                <FaCoffee className="text-softCream text-xl" />
                            </div>
                            <div className="absolute -inset-2 bg-leafGreen/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                        </div>
                        <div className="text-left">
                            <h1 className="text-2xl font-heading font-bold text-charcoal leading-none">
                                EthioCoffee
                            </h1>
                            <p className="text-leafGreen font-body text-sm leading-none">
                                Export Excellence
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-body font-medium px-3 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "text-leafGreen bg-leafGreen/10 font-semibold"
                                    : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/aboutus"
                            className={({ isActive }) =>
                                `font-body font-medium px-3 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "text-leafGreen bg-leafGreen/10 font-semibold"
                                    : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                                }`
                            }
                        >
                            About Us
                        </NavLink>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <button className="flex items-center gap-1 font-body font-medium px-3 py-2 rounded-lg transition-all duration-300 text-charcoal hover:text-leafGreen hover:bg-softCream/50">
                                Products
                                <FaChevronDown className={`text-xs transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isProductsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-softCream/20 py-4 animate-fade-in-up">
                                    {[
                                        { name: "Grade 1 - Premium", desc: "0-3 defects" },
                                        { name: "Grade 2 - Commercial", desc: "4-12 defects" },
                                        { name: "Specialty Lots", desc: "Limited availability" },
                                        { name: "Organic Certified", desc: "EU & USDA standards" },
                                        { name: "Bulk Container", desc: "Volume orders" }
                                    ].map((product, index) => (
                                        <Link
                                            key={index}
                                            to={`/products/${product.name.split(' - ')[0].toLowerCase()}`}
                                            className="flex items-start gap-3 px-4 py-3 hover:bg-softCream/50 transition-colors duration-200 group"
                                        >
                                            <div className="w-2 h-2 bg-leafGreen rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div>
                                                <div className="text-charcoal font-body font-medium group-hover:text-leafGreen">
                                                    {product.name}
                                                </div>
                                                <div className="text-coffeeBrown/60 text-sm font-body">
                                                    {product.desc}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                `font-body font-medium px-3 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "text-leafGreen bg-leafGreen/10 font-semibold"
                                    : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                                }`
                            }
                        >
                            Blog
                        </NavLink>

                        <NavLink
                            to="/contactus"
                            className={({ isActive }) =>
                                `font-body font-medium px-3 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "text-leafGreen bg-leafGreen/10 font-semibold"
                                    : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                        {/* CTA Button */}
                        <Link
                            to="/contactus"
                            className="ml-4 px-6 py-3 bg-gradient-to-r from-leafGreen to-green-700 text-softCream rounded-xl font-body font-semibold hover:from-green-600 hover:to-leafGreen transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            <FaPhone className="text-xs" />
                            Request Samples
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-12 h-12 bg-softCream/50 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:bg-leafGreen/10 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white border-t border-softCream/20 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 py-6 space-y-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block font-body font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive
                                ? "text-leafGreen bg-leafGreen/10 font-semibold border-l-4 border-leafGreen"
                                : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                            `block font-body font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive
                                ? "text-leafGreen bg-leafGreen/10 font-semibold border-l-4 border-leafGreen"
                                : "text-charcoal hover:text-leaf-green hover:bg-softCream/50"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </NavLink>

                    {/* Mobile Products Section */}
                    <div className="space-y-2">
                        <div className="font-body font-semibold text-charcoal px-4 py-2">Our Products</div>
                        {[
                            "Grade 1 - Premium",
                            "Grade 2 - Commercial",
                            "Specialty Lots",
                            "Organic Certified",
                            "Bulk Container"
                        ].map((product, index) => (
                            <Link
                                key={index}
                                to={`/products/${product.split(' - ')[0].toLowerCase()}`}
                                className="block font-body text-coffeeBrown py-2 px-6 rounded-lg hover:bg-softCream/50 hover:text-leafGreen transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {product}
                            </Link>
                        ))}
                    </div>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            `block font-body font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive
                                ? "text-leafGreen bg-leafGreen/10 font-semibold border-l-4 border-leafGreen"
                                : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                            `block font-body font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive
                                ? "text-leafGreen bg-leafGreen/10 font-semibold border-l-4 border-leafGreen"
                                : "text-charcoal hover:text-leafGreen hover:bg-softCream/50"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>

                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-softCream/20">
                        <Link
                            to="/contactus"
                            className="block text-center bg-gradient-to-r from-leafGreen to-green-700 text-softCream py-4 rounded-xl font-body font-semibold hover:from-green-600 hover:to-leafGreen transition-all duration-300 transform hover:scale-105 shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Request Coffee Samples
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}