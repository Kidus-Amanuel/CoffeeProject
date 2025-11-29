import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaShippingFast, FaAward, FaHeadset, FaCertificate, FaGlobeAmericas } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-coffeeBrown text-softCream border-t border-softCream/10">
            {/* Main Footer Content */}
            <div className="px-6 lg:px-16 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section - Clean Professional Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Information */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-leafGreen rounded-lg flex items-center justify-center">
                                    <span className="text-xl text-softCream font-bold">EC</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-softCream">EthioCoffee Export</h2>
                                    <p className="text-leafGreen font-body text-sm">Premium Green Coffee Beans</p>
                                </div>
                            </div>

                            <p className="text-softCream/80 leading-relaxed font-body">
                                Direct exporters of premium Ethiopian green coffee beans, connecting international roasters with the finest coffee-growing regions since 2010.
                            </p>

                            {/* Professional Social Links */}
                            <div className="flex space-x-3 pt-4">
                                {[
                                    { icon: <FaLinkedinIn />, label: "LinkedIn" },
                                    { icon: <FaFacebookF />, label: "Facebook" },
                                    { icon: <FaTwitter />, label: "Twitter" },
                                    { icon: <FaInstagram />, label: "Instagram" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 bg-softCream/10 hover:bg-leafGreen rounded-lg flex items-center justify-center text-softCream/80 hover:text-softCream transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links - Professional Structure */}
                        <div className="space-y-6">
                            <h3 className="font-heading font-bold text-lg text-softCream border-b border-softCream/20 pb-2">
                                Company
                            </h3>
                            <ul className="space-y-3">

                                {[
                                    "Home",
                                    "About Us",
                                    "Contact Us",
                                    "Blog",
                                    "Products",
                                ].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={`/${link.toLowerCase().replace(' ', '-')}`}
                                            className="text-softCream/70 hover:text-leafGreen font-body transition-colors duration-300 flex items-center group"
                                        >
                                            <span className="w-1 h-1 bg-leafGreen rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Coffee Products - Professional Layout */}
                        <div className="space-y-6">
                            <h3 className="font-heading font-bold text-lg text-softCream border-b border-softCream/20 pb-2">
                                Our Products
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Grade 1 - Premium", specs: "0-3 defects" },
                                    { name: "Grade 2 - Commercial", specs: "4-12 defects" },
                                    { name: "Specialty Lots", specs: "Limited availability" },
                                    { name: "Organic Certified", specs: "EU & USDA" },
                                    { name: "Bulk Container", specs: "Volume orders" }
                                ].map((product, index) => (
                                    <li key={index}>
                                        <a
                                            href={`/products/${product.name.split(' - ')[0].toLowerCase()}`}
                                            className="group block"
                                        >
                                            <div className="text-softCream/70 hover:text-softCream font-body transition-colors duration-300">
                                                {product.name}
                                            </div>
                                            <div className="text-softCream/50 text-xs font-body">
                                                {product.specs}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Updates */}
                        <div className="space-y-6">
                            <h3 className="font-heading font-bold text-lg text-softCream border-b border-softCream/20 pb-2">
                                Contact & Updates
                            </h3>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-leafGreen mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="text-softCream font-body">Bole Road</div>
                                        <div className="text-softCream/70 text-sm font-body">Addis Ababa, Ethiopia</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-leafGreen flex-shrink-0" />
                                    <div className="text-softCream font-body">+251 11 123 4567</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-leafGreen flex-shrink-0" />
                                    <div className="text-softCream font-body">export@ethiopiacoffee.com</div>
                                </div>
                            </div>

                            {/* Professional Newsletter */}
                            <div className="pt-4">
                                <p className="text-softCream/80 text-sm font-body mb-3">
                                    Market updates and harvest reports
                                </p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Business email address"
                                        className="w-full px-4 py-3 rounded-lg bg-softCream/10 border border-softCream/20 text-softCream placeholder-softCream/50 focus:outline-none focus:border-leafGreen transition-colors duration-300 font-body text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-leafGreen hover:bg-green-700 text-softCream py-3 rounded-lg font-body font-semibold transition-colors duration-300 text-sm"
                                    >
                                        Subscribe to Updates
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Certifications & Trust Section */}
                    <div className="border-t border-softCream/20 pt-12">
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-heading font-bold text-softCream mb-2">
                                Certified Export Excellence
                            </h3>
                            <p className="text-softCream/70 font-body text-sm max-w-2xl mx-auto">
                                Fully compliant with international export standards and quality certifications
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <FaCertificate className="text-2xl" />,
                                    title: "ECX Certified",
                                    description: "Ethiopian Commodity Exchange"
                                },
                                {
                                    icon: <FaGlobeAmericas className="text-2xl" />,
                                    title: "Global Export",
                                    description: "25+ Countries Served"
                                },
                                {
                                    icon: <FaShippingFast className="text-2xl" />,
                                    title: "Reliable Shipping",
                                    description: "FCL & LCL Options"
                                },
                                {
                                    icon: <FaAward className="text-2xl" />,
                                    title: "Quality Assured",
                                    description: "Grade 1 & 2 Available"
                                }
                            ].map((cert, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4"
                                >
                                    <div className="w-16 h-16 bg-softCream/10 rounded-lg flex items-center justify-center text-leafGreen mx-auto mb-3">
                                        {cert.icon}
                                    </div>
                                    <h4 className="text-softCream font-heading font-semibold text-sm mb-1">
                                        {cert.title}
                                    </h4>
                                    <p className="text-softCream/70 text-xs font-body">
                                        {cert.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Professional */}
            <div className="border-t border-softCream/20 bg-charcoal/80">
                <div className="px-6 lg:px-16 py-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <div className="text-softCream/60 text-sm text-center md:text-left">
                                © {currentYear} Ethiopian Coffee Exporters. All rights reserved.
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                {[
                                    "Privacy Policy",
                                    "Terms of Service",
                                    "Export Compliance",
                                    "Quality Standards"
                                ].map((link, index) => (
                                    <a
                                        key={index}
                                        href={`/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-softCream/60 hover:text-leafGreen transition-colors duration-300 font-body"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>

                            {/* Business Info */}
                            <div className="text-softCream/50 text-xs text-center md:text-right">
                                Registered Export Business • Addis Ababa, Ethiopia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}