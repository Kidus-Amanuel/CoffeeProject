// About.jsx - About Us Page Component

import Image2 from "../assets/iso-9001.png"
import PageMeta from "../components/common/PageMeta";

export default function Aboutus() {
    return (
        <div className="min-h-screen bg-softCream">
            <PageMeta title="About" description="About Page" />
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown to-leafGreen overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-softCream/10 rounded-full animate-float"></div>
                <div className="absolute bottom-16 left-10 w-16 h-16 bg-softCream/15 rounded-full animate-float-delayed"></div>

                <div className="relative max-w-7xl mx-auto text-center text-softCream animate-fade-in">
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                        Our <span className="text-softCream">Coffee Story</span>
                    </h1>
                    <p className="text-xl lg:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
                        From the highlands of Ethiopia to roasters worldwide - connecting the birthplace of coffee with global markets since 2010.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Text Content */}
                        <div className="animate-slide-in-left">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-6">
                                Our <span className="text-leafGreen">Journey</span> Begins in Ethiopia
                            </h2>
                            <div className="space-y-4 text-coffeeBrown font-body text-lg leading-relaxed">
                                <p>
                                    Founded in 2010, our company emerged from a simple belief: the world deserves to experience
                                    authentic Ethiopian coffee, sourced directly from the farmers who cultivate it with generations
                                    of expertise.
                                </p>
                                <p>
                                    What started as a small export operation in Addis Ababa has grown into a trusted partner
                                    for international roasters across 25+ countries. Our foundation is built on direct relationships
                                    with coffee farming communities across Ethiopia's prime growing regions.
                                </p>
                                <p>
                                    Today, we bridge the gap between Ethiopia's rich coffee heritage and the global specialty
                                    coffee market, ensuring fair compensation for farmers while delivering exceptional quality
                                    to roasters worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Story Image */}
                        <div className="animate-slide-in-right">
                            <div className="relative group">
                                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Ethiopian coffee farmers"
                                        className="w-full h-96 object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-leafGreen text-softCream p-6 rounded-2xl shadow-2xl">
                                    <div className="text-3xl font-heading font-bold">14+</div>
                                    <div className="font-body">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-leafGreen/10 to-coffeeBrown/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Our <span className="text-leafGreen">Core Values</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            The principles that guide every decision we make and every relationship we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Direct Partnerships",
                                description: "We work directly with farming communities, eliminating middlemen to ensure fair prices and build lasting relationships based on mutual respect and transparency."
                            },
                            {
                                title: "Sustainable Sourcing",
                                description: "Our commitment to environmental stewardship means promoting organic farming practices and supporting biodiversity in Ethiopia's coffee ecosystems."
                            },
                            {
                                title: "Quality Excellence",
                                description: "Every bean undergoes rigorous quality control, from selective picking to expert grading, ensuring consistent excellence that meets international standards."
                            },
                            {
                                title: "Full Traceability",
                                description: "We provide complete transparency from farm to export, allowing roasters to know exactly where and how their coffee was grown and processed."
                            },
                            {
                                title: "Innovation",
                                description: "We continuously improve our processes and embrace new technologies to enhance quality, efficiency, and sustainability in coffee export."
                            },
                            {
                                title: "Global Community",
                                description: "We believe in building bridges between Ethiopian coffee culture and global markets, fostering cultural exchange and mutual understanding."
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-4 group-hover:text-leafGreen transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-coffeeBrown font-body leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Team Section */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown/5 to-leafGreen/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Meet Our <span className="text-leafGreen">Leadership</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            The passionate team behind our mission to share Ethiopia's coffee heritage with the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Alem Tesfaye",
                                role: "Founder & CEO",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                description: "Third-generation coffee expert with 20+ years in Ethiopian coffee industry"
                            },
                            {
                                name: "Marta Girma",
                                role: "Export Director",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                description: "International trade specialist ensuring seamless global operations"
                            },
                            {
                                name: "Kaleb Bekele",
                                role: "Quality Control Manager",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                description: "Q-Grader certified with expertise in Ethiopian coffee profiles"
                            },
                            {
                                name: "Sofia Mohammed",
                                role: "Farmer Relations",
                                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                description: "Building sustainable partnerships with farming communities"
                            }
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-heading font-bold text-charcoal text-xl mb-1">
                                        {member.name}
                                    </h3>
                                    <div className="text-leafGreen font-body font-semibold mb-3">
                                        {member.role}
                                    </div>
                                    <p className="text-coffeeBrown font-body text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support Team */}
                    <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                            And Our <span className="text-leafGreen">Dedicated Team</span> of 50+ Professionals
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                            {[
                                { count: "12", label: "Quality Graders" },
                                { count: "8", label: "Export Specialists" },
                                { count: "15", label: "Field Agents" },
                                { count: "18", label: "Support Staff" }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-heading font-bold text-leafGreen mb-1">
                                        {item.count}
                                    </div>
                                    <div className="text-coffeeBrown font-body text-sm">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Partnerships */}
            <section className="py-20 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Trust & <span className="text-leafGreen">Certifications</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body">
                            Our commitment to quality and ethical practices is verified by international standards.
                        </p>
                    </div>

                    <div className="animate-slide-in-left ">

                        <div className="grid grid-cols-4 gap-6 pb-20">
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
                    {/* Partner Logos */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
                            Trusted by <span className="text-leafGreen">Global Partners</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="bg-gray-200 h-20 rounded-lg flex items-center justify-center">
                                    <span className="text-coffeeBrown font-body">Partner Logo</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Sustainability */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-charcoal to-coffeeBrown text-softCream">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                            Our <span className="text-leafGreen">Impact</span>
                        </h2>
                        <p className="text-xl font-body opacity-90 max-w-2xl mx-auto">
                            Creating positive change in Ethiopian coffee communities while delivering exceptional quality to the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "500+",
                                title: "Farmers Supported",
                                description: "Direct partnerships with coffee growing families"
                            },
                            {
                                number: "25+",
                                title: "Countries Served",
                                description: "Global network of satisfied roasters"
                            },
                            {
                                number: "40%",
                                title: "Income Increase",
                                description: "Average rise in farmer income through direct trade"
                            }
                        ].map((impact, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="text-4xl mb-4">{impact.icon}</div>
                                <div className="text-3xl font-heading font-bold text-leafGreen mb-2">
                                    {impact.number}
                                </div>
                                <h3 className="font-heading font-semibold text-xl mb-3">
                                    {impact.title}
                                </h3>
                                <p className="font-body opacity-90">
                                    {impact.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sustainability Initiatives */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div>
                            <h3 className="text-2xl font-heading font-bold mb-6">
                                Sustainable <span className="text-leafGreen">Future</span>
                            </h3>
                            <div className="space-y-4 font-body opacity-90">
                                <p>
                                    We're committed to preserving Ethiopia's coffee heritage for future generations
                                    through sustainable farming practices and community development initiatives.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3">
                                        <span className="text-leafGreen">✓</span>
                                        Organic farming training programs
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-leafGreen">✓</span>
                                        Reforestation projects in coffee regions
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-leafGreen">✓</span>
                                        Education support for farmers' children
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-leafGreen">✓</span>
                                        Water conservation initiatives
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Sustainable coffee farming"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-20 bg-softCream">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-6">
                        Ready to Partner with <span className="text-leafGreen">Ethiopia's Finest</span>?
                    </h2>
                    <p className="text-xl text-coffeeBrown font-body mb-8 max-w-2xl mx-auto">
                        Join the growing community of international roasters who trust us for premium Ethiopian green coffee beans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Start Your Coffee Journey
                        </button>
                        <button className="border-2 border-leafGreen text-leafGreen hover:bg-leafGreen hover:text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105">
                            Meet Our Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}