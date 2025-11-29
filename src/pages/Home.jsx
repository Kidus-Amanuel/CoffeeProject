import React from 'react';
import WorldMap from "../components/ui/world-map";
import Image1 from "../assets/bg1.jpg"
import Image2 from "../assets/iso-9001.png"
import EthiopianCoffee from '../components/EthiopianCoffee';
import Productcard from '../components/Productcard';
import BlogCards from '../components/Blogcards';
import PageMeta from '../components/common/PageMeta';

// Enhanced Home component with animations and images
export default function Home() {
    const dots = [
        {
            start: { lat: 9.03, lng: 38.74 }, // Addis Ababa
            end: { lat: 25.20, lng: 55.27 }, // Dubai
        },
        {
            start: { lat: 9.03, lng: 38.74 }, // Addis Ababa
            end: { lat: 51.50, lng: -0.12 }, // London
        },
        {
            start: { lat: 9.03, lng: 38.74 }, // Addis Ababa
            end: { lat: 39.90, lng: 116.40 }, // Beijing, China
        },
        {
            start: { lat: 9.03, lng: 38.74 }, // Addis Ababa
            end: { lat: 40.71, lng: -74.00 }, // New York
        },
        {
            start: { lat: 9.03, lng: 38.74 }, // Addis Ababa
            end: { lat: -33.86, lng: 151.20 }, // Sydney, Australia
        },
    ];

    return (
        <div className="min-h-screen bg-softCream">
            <PageMeta
                title="Premium Ethiopian Green Coffee Beans"
                description="Export-quality Ethiopian green coffee beans. Direct from farmers, ECX certified, fair trade. Grade 1, Grade 2, and specialty lots available for international roasters."
            />
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        `url(${Image1})`,
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Left Content */}
                <div className="relative z-10 lg:w-1/2 space-y-8 text-center lg:text-left animate-slide-in-left">
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold text-softCream leading-tight">
                        Premium Ethiopian <span className="text-leafGreen">Green Coffee</span> Beans for Global Roasters
                    </h1>
                    <p className="text-xl lg:text-2xl text-softCream font-body leading-relaxed">
                        Carefully sourced. Expertly graded. Ready for export.
                    </p>
                    <div className="space-y-6">
                        <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Request Samples
                        </button>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2 text-charcoal font-body bg-white/80 px-4 py-2 rounded-full">
                                <span className="text-leafGreen">🌍</span>
                                <span className="font-bold">20+</span> Countries Served
                            </div>
                            <div className="flex items-center gap-2 text-charcoal font-body bg-white/80 px-4 py-2 rounded-full">
                                <span className="text-leafGreen">⭐</span>
                                <span className="font-bold">Export</span> Certified
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional Right Accent */}
                <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 flex justify-center animate-slide-in-right">
                    {/* You can keep this empty, or add subtle floating shapes if you want */}
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section className="py-20 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal text-center mb-16 animate-fade-in">
                        Why Choose <span className="text-leafGreen">Our Coffee</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {

                                title: "Direct Farmer Partnerships",
                                desc: "Working directly with Ethiopian coffee farmers for quality assurance"
                            },
                            {
                                title: "ECX & Export Certified",
                                desc: "Fully certified and compliant with international export standards"
                            },
                            {
                                title: "Fair, Ethical Sourcing",
                                desc: "Ensuring fair prices and sustainable practices throughout our supply chain"
                            },
                            {
                                title: "Quality Guaranteed",
                                desc: "Rigorous quality control and grading processes for consistent excellence"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-softCream p-8 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer group animate-fade-in-up"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-4 group-hover:text-leafGreen transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-coffeeBrown font-body leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-leafGreen/10 to-coffeeBrown/5">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-8 animate-fade-in">
                        About <span className="text-leafGreen">Our Company</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-coffeeBrown font-body leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up">
                        With over a decade of expertise in Ethiopian coffee exports, we bridge the gap between
                        world-class coffee farmers and international roasters. Our commitment to quality,
                        traceability, and ethical sourcing ensures that every bean tells the story of
                        Ethiopia's rich coffee heritage while meeting global standards.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: "10+", label: "Years Experience" },
                            { number: "25+", label: "Countries Served" },
                            { number: "12+", label: "Regions Sourced" },
                            { number: "100%", label: "Traceable Coffee" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="text-3xl lg:text-4xl font-heading font-bold text-leafGreen mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-charcoal font-body font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Export Map */}
                    <div className="bg-neutral-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up">
                        <h3 className="text-2xl font-heading font-bold text-white mb-8">
                            Our <span className="text-leafGreen">Global Export</span> Network
                        </h3>
                        <div className="w-full">
                            <WorldMap dots={dots} lineColor="#D2691E" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Coffee Regions Section */}
            <EthiopianCoffee />
            {/* Products Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown/5 to-leafGreen/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal text-center mb-16 animate-fade-in">
                        Our <span className="text-leafGreen">Coffee Grades</span> & Products
                    </h2>
                    <Productcard />
                    {/* Certificates & Testimonials */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Certificates */}
                        <div className="animate-slide-in-left">
                            <h3 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
                                <span className="text-leafGreen">Certifications</span> & Quality Assurance
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    {
                                        name: "ECX Certified",
                                        org: "Ethiopian Commodity Exchange",
                                        image: Image2
                                    },
                                    {
                                        name: "Export License",
                                        org: "Ministry of Trade",
                                        image: Image2
                                    },
                                    {
                                        name: "Quality Grading",
                                        org: "International Standards",
                                        image: Image2
                                    },
                                    {
                                        name: "Organic Certified",
                                        org: "EU & USDA Standards",
                                        image: Image2
                                    }
                                ].map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                                    >
                                        {/* Certificate Image */}
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Certificate Name */}
                                        <h4 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-leafGreen transition-colors duration-300">
                                            {cert.name}
                                        </h4>

                                        {/* Organization */}
                                        <p className="text-coffeeBrown font-body text-sm">
                                            {cert.org}
                                        </p>
                                    </div>

                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="animate-slide-in-right">
                            <h3 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
                                What Our <span className="text-leafGreen">Partners</span> Say
                            </h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        quote: "The consistency and quality of their Grade 1 beans is unmatched. Our customers love the Ethiopian profile.",
                                        author: "Maria Schmidt",
                                        company: "Berlin Roastery, Germany",
                                        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                    },
                                    {
                                        quote: "Working with them has transformed our sourcing. The traceability and farmer relationships are exceptional.",
                                        author: "James Chen",
                                        company: "Shanghai Coffee Co., China",
                                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                    },
                                    {
                                        quote: "Their ethical sourcing model and quality control make them our preferred Ethiopian partner.",
                                        author: "Ahmed Al-Mansoori",
                                        company: "Dubai Trading Co., UAE",
                                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                    }
                                ].map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group"
                                    >
                                        <p className="text-coffeeBrown font-body italic mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-leafGreen rounded-full overflow-hidden flex items-center justify-center text-softCream font-body font-bold mr-4 ring-2 ring-leafGreen/30">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-heading font-semibold text-charcoal group-hover:text-leafGreen transition-colors duration-300">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-coffeeBrown font-body text-sm">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}

            <BlogCards />


            {/* CTA & Location Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-charcoal to-coffeeBrown text-softCream">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* CTA Content */}
                        <div className="text-center lg:text-left animate-slide-in-left">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                                Ready to Source <span className="text-leafGreen">Premium Ethiopian Coffee</span>?
                            </h2>
                            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
                                Contact us today to request samples, discuss your requirements, or schedule a virtual meeting with our export team.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <span className="text-leafGreen text-xl">📧</span>
                                    <span className="font-body">contact@ethiopiacoffeeexport.com</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <span className="text-leafGreen text-xl">📞</span>
                                    <span className="font-body">+251 11 123 4567</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <span className="text-leafGreen text-xl">📍</span>
                                    <span className="font-body">Addis Ababa, Ethiopia</span>
                                </div>
                            </div>
                            <button className="bg-leafGreen hover:bg-softCream hover:text-charcoal text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Request Samples & Pricing
                            </button>
                        </div>

                        {/* Embedded Map */}
                        <div className="bg-softCream rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-slide-in-right">
                            <div className="h-96">
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
                            <div className="p-4 text-center bg-charcoal">
                                <p className="font-body text-softCream">Our Main Office - Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}