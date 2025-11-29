// Contact.jsx - Contact Us Page Component
import PageMeta from "../components/common/PageMeta";
export default function Contact() {
    return (
        <div className="min-h-screen bg-softCream">
            <PageMeta title="Contact" description="Contact Page" />
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown to-leafGreen overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto text-center text-softCream animate-fade-in">
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                        Get In <span className="text-softCream">Touch</span>
                    </h1>
                    <p className="text-xl lg:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
                        Ready to source premium Ethiopian green coffee beans? Our export team is here to help you every step of the way.
                    </p>
                </div>

                {/* Floating coffee beans decoration */}
                <div className="absolute top-10 left-10 w-8 h-8 bg-softCream/20 rounded-full animate-float"></div>
                <div className="absolute top-20 right-20 w-12 h-12 bg-softCream/30 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-16 left-1/4 w-6 h-6 bg-softCream/25 rounded-full animate-float"></div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="animate-slide-in-left">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-8">
                                Let's Start <span className="text-leafGreen">Your Coffee Journey</span>
                            </h2>
                            <p className="text-lg text-coffeeBrown font-body mb-8 leading-relaxed">
                                Whether you're a seasoned roaster or just starting out, we're here to provide you with the finest Ethiopian green coffee beans and exceptional service.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-leafGreen rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-softCream text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-charcoal mb-1">Email Us</h3>
                                        <p className="text-coffeeBrown font-body">export@ethiopiacoffee.com</p>
                                        <p className="text-coffeeBrown font-body">sales@ethiopiacoffee.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-leafGreen rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-softCream text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-charcoal mb-1">Call Us</h3>
                                        <p className="text-coffeeBrown font-body">+251 11 123 4567 (Office)</p>
                                        <p className="text-coffeeBrown font-body">+251 91 234 5678 (Mobile)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-leafGreen rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-softCream text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-charcoal mb-1">Visit Us</h3>
                                        <p className="text-coffeeBrown font-body">Bole Road, Addis Ababa</p>
                                        <p className="text-coffeeBrown font-body">Ethiopia</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-leafGreen rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-softCream text-xl">🕒</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-charcoal mb-1">Business Hours</h3>
                                        <p className="text-coffeeBrown font-body">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="text-coffeeBrown font-body">Sat: 9:00 AM - 1:00 PM</p>
                                        <p className="text-coffeeBrown font-body">Sun: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-leafGreen/10 border-l-4 border-leafGreen p-6 rounded-r-xl">
                                <h3 className="font-heading font-bold text-charcoal mb-2">Urgent Export Inquiries?</h3>
                                <p className="text-coffeeBrown font-body mb-3">
                                    For time-sensitive shipments and urgent matters, contact our export manager directly.
                                </p>
                                <p className="text-leafGreen font-body font-semibold">+251 92 345 6789</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="animate-slide-in-right">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 hover:shadow-3xl transition-all duration-500">
                                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-2">
                                    Send Us a Message
                                </h3>
                                <p className="text-coffeeBrown font-body mb-8">
                                    Fill out the form below and our export team will get back to you within 24 hours.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="firstName">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="lastName">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="email">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-charcoal font-body font-medium mb-2" htmlFor="company">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                            placeholder="Your Roasting Company"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="country">
                                                Country *
                                            </label>
                                            <select
                                                id="country"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                            >
                                                <option value="">Select your country</option>
                                                <option value="usa">United States</option>
                                                <option value="germany">Germany</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="uae">United Arab Emirates</option>
                                                <option value="japan">Japan</option>
                                                <option value="china">China</option>
                                                <option value="south-korea">South Korea</option>
                                                <option value="australia">Australia</option>
                                                <option value="canada">Canada</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-charcoal font-body font-medium mb-2" htmlFor="coffeeType">
                                                Coffee Interest
                                            </label>
                                            <select
                                                id="coffeeType"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body"
                                            >
                                                <option value="">Select coffee type</option>
                                                <option value="grade1">Grade 1 - Premium</option>
                                                <option value="grade2">Grade 2 - Commercial</option>
                                                <option value="specialty">Specialty Lots</option>
                                                <option value="bulk">Bulk Orders</option>
                                                <option value="multiple">Multiple Types</option>
                                                <option value="not-sure">Not Sure Yet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-charcoal font-body font-medium mb-2" htmlFor="message">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leafGreen focus:border-leafGreen transition-all duration-300 font-body resize-none"
                                            placeholder="Tell us about your coffee needs, quantity requirements, and any specific regions or processing methods you're interested in..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            className="w-4 h-4 text-leafGreen focus:ring-leafGreen border-gray-300 rounded"
                                        />
                                        <label htmlFor="newsletter" className="ml-2 text-coffeeBrown font-body">
                                            Subscribe to our coffee market updates and offers
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-leafGreen hover:bg-coffeeBrown text-softCream py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>

                                    <p className="text-center text-coffeeBrown font-body text-sm">
                                        We'll respond within 24 hours. For urgent matters, please call us directly.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map & Location Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-softCream to-coffeeBrown/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Find Our <span className="text-leafGreen">Office</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            Visit our main export office in Addis Ababa. We're conveniently located in the business district with easy access to shipping facilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Map */}
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up">
                            <div className="h-96 lg:h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.222389967976!2d38.75786631478615!3d9.033485293499972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e53b8f8a79%3A0x6e9696e8e6a84f17!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl"
                                ></iframe>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="font-heading font-bold text-charcoal mb-4 text-xl">Main Export Office</h3>
                                <div className="space-y-3 text-coffeeBrown font-body">
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">📍</span>
                                        Bole Road, Addis Ababa, Ethiopia
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">📞</span>
                                        +251 11 123 4567
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">📧</span>
                                        office@ethiopiacoffee.com
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="font-heading font-bold text-charcoal mb-4 text-xl">Warehouse & Processing</h3>
                                <div className="space-y-3 text-coffeeBrown font-body">
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">🏭</span>
                                        Industrial Zone, Addis Ababa
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">📞</span>
                                        +251 11 234 5678
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">🚚</span>
                                        Full container loading available
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="font-heading font-bold text-charcoal mb-4 text-xl">Regional Offices</h3>
                                <div className="space-y-3 text-coffeeBrown font-body">
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">🌍</span>
                                        Yirgacheffe - Quality Control
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">🏔️</span>
                                        Sidama - Farmer Relations
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-leafGreen">⚓</span>
                                        Djibouti - Shipping Coordination
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-charcoal to-coffeeBrown text-softCream">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                        Ready to Source <span className="text-leafGreen">Exceptional Coffee</span>?
                    </h2>
                    <p className="text-xl font-body mb-8 opacity-90 max-w-2xl mx-auto">
                        Join dozens of international roasters who trust us for their Ethiopian green coffee needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-leafGreen hover:bg-softCream hover:text-charcoal text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Request Coffee Samples
                        </button>
                        <button className="border-2 border-softCream hover:bg-softCream hover:text-charcoal text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105">
                            Schedule a Video Call
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}