// Products.jsx - Products Page Component   
import PageMeta from "../components/common/PageMeta";
export default function Products() {
    return (
        <div className="min-h-screen bg-softCream">
            <PageMeta title="Products" description="Products Page" />
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown to-leafGreen overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-10 left-10 w-16 h-16 bg-softCream/10 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-16 w-12 h-12 bg-softCream/15 rounded-full animate-float-delayed"></div>

                <div className="relative max-w-7xl mx-auto text-center text-softCream animate-fade-in">
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                        Our <span className="text-softCream">Coffee Products</span>
                    </h1>
                    <p className="text-xl lg:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
                        Discover our premium selection of Ethiopian green coffee beans, expertly graded and ready for export to discerning roasters worldwide.
                    </p>
                </div>
            </section>

            {/* Coffee Grades Section */}
            <section className="py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Coffee <span className="text-leafGreen">Grades & Quality</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            Our rigorous grading system ensures consistent quality and flavor profiles for every batch we export.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Grade 1 - Premium */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group">
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Grade 1 Premium Coffee"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-leafGreen text-softCream px-4 py-2 rounded-full font-body font-semibold">
                                    Most Popular
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal">Grade 1 - Premium</h3>
                                    <div className="flex text-yellow-400">
                                        {"★".repeat(5)}
                                    </div>
                                </div>
                                <p className="text-coffeeBrown font-body mb-6 leading-relaxed">
                                    Exceptional quality with 0-3 defects, superior cup profile, and perfect for specialty roasters seeking the finest Ethiopian beans.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">0-3</div>
                                        <div className="text-charcoal font-body text-sm">Defects</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">85+</div>
                                        <div className="text-charcoal font-body text-sm">SCA Score</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">100%</div>
                                        <div className="text-charcoal font-body text-sm">Traceable</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">All</div>
                                        <div className="text-charcoal font-body text-sm">Regions</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-heading font-bold text-leafGreen">$8.50 - $12.00</div>
                                        <div className="text-coffeeBrown font-body text-sm">per kg, FOB Djibouti</div>
                                    </div>
                                    <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105">
                                        Request Samples
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Grade 2 - Commercial */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group" style={{ animationDelay: '200ms' }}>
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Grade 2 Commercial Coffee"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-coffeeBrown text-softCream px-4 py-2 rounded-full font-body font-semibold">
                                    Best Value
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal">Grade 2 - Commercial</h3>
                                    <div className="flex text-yellow-400">
                                        {"★".repeat(4)}
                                        <span className="text-gray-300">★</span>
                                    </div>
                                </div>
                                <p className="text-coffeeBrown font-body mb-6 leading-relaxed">
                                    High-quality beans with 4-12 defects, excellent for commercial roasters seeking consistent quality at competitive prices.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">4-12</div>
                                        <div className="text-charcoal font-body text-sm">Defects</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">80-84</div>
                                        <div className="text-charcoal font-body text-sm">SCA Score</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">100%</div>
                                        <div className="text-charcoal font-body text-sm">Traceable</div>
                                    </div>
                                    <div className="text-center p-3 bg-softCream rounded-lg">
                                        <div className="text-leafGreen font-heading font-bold">Most</div>
                                        <div className="text-charcoal font-body text-sm">Regions</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-heading font-bold text-leafGreen">$5.50 - $7.50</div>
                                        <div className="text-coffeeBrown font-body text-sm">per kg, FOB Djibouti</div>
                                    </div>
                                    <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105">
                                        Request Samples
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Product Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Specialty Lots",
                                grade: "Micro-lot",
                                price: "$12.00 - $25.00",
                                description: "Unique single-origin lots with exceptional characteristics",
                                features: ["Limited availability", "Single farm", "Unique profiles"],
                                popular: false
                            },
                            {
                                name: "Organic Certified",
                                grade: "Grade 1 & 2",
                                price: "+15% Premium",
                                description: "Certified organic beans from sustainable farms",
                                features: ["EU Certified", "USDA Organic", "Sustainable"],
                                popular: true
                            },
                            {
                                name: "Bulk Container",
                                grade: "All Grades",
                                price: "Volume Discount",
                                description: "Full container loads for large-scale roasters",
                                features: ["FCL Shipping", "Mixed grades", "Best pricing"],
                                popular: false
                            }
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {product.popular && (
                                    <div className="bg-leafGreen text-softCream px-3 py-1 rounded-full text-sm font-body font-semibold inline-block mb-4">
                                        Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{product.name}</h3>
                                <div className="text-leafGreen font-body font-semibold mb-2">{product.grade}</div>
                                <p className="text-coffeeBrown font-body text-sm mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-charcoal font-body">
                                            <span className="w-2 h-2 bg-leafGreen rounded-full mr-3"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center">
                                    <div className="text-lg font-heading font-bold text-leafGreen mb-2">
                                        {product.price}
                                    </div>
                                    <button className="w-full bg-leafGreen hover:bg-coffeeBrown text-softCream py-3 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coffee Regions & Profiles */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-leafGreen/10 to-coffeeBrown/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Regional <span className="text-leafGreen">Coffee Profiles</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            Explore the unique characteristics of coffee from Ethiopia's premier growing regions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                region: "Yirgacheffe",
                                altitude: "1800-2200m",
                                process: "Washed",
                                flavor: "Floral, Citrus, Bergamot",
                                body: "Light to Medium",
                                acidity: "Bright",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 1", "Grade 2", "Specialty"]
                            },
                            {
                                region: "Sidama",
                                altitude: "1500-2200m",
                                process: "Washed & Natural",
                                flavor: "Sweet, Berry, Wine-like",
                                body: "Medium",
                                acidity: "Medium",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 1", "Grade 2"]
                            },
                            {
                                region: "Guji",
                                altitude: "1800-2350m",
                                process: "Natural",
                                flavor: "Complex, Stone Fruit, Jasmine",
                                body: "Medium to Full",
                                acidity: "Wine-like",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 1", "Specialty"]
                            },
                            {
                                region: "Harrar",
                                altitude: "1500-2100m",
                                process: "Natural",
                                flavor: "Blueberry, Spice, Chocolate",
                                body: "Full",
                                acidity: "Low",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 1", "Grade 2"]
                            },
                            {
                                region: "Jimma",
                                altitude: "1400-2100m",
                                process: "Washed",
                                flavor: "Fruity, Winey, Spicy",
                                body: "Medium",
                                acidity: "Medium",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 2"]
                            },
                            {
                                region: "Limu",
                                altitude: "1100-1900m",
                                process: "Washed",
                                flavor: "Balanced, Spicy, Wine-like",
                                body: "Medium",
                                acidity: "Bright",
                                image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                available: ["Grade 1", "Grade 2"]
                            }
                        ].map((region, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={region.image}
                                        alt={region.region}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-heading font-bold text-charcoal mb-2 group-hover:text-leafGreen transition-colors duration-300">
                                        {region.region}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div>
                                            <div className="text-coffeeBrown font-body">Altitude</div>
                                            <div className="text-charcoal font-body font-semibold">{region.altitude}</div>
                                        </div>
                                        <div>
                                            <div className="text-coffeeBrown font-body">Process</div>
                                            <div className="text-charcoal font-body font-semibold">{region.process}</div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-coffeeBrown font-body text-sm mb-1">Flavor Profile</div>
                                        <div className="text-charcoal font-body font-semibold text-sm">{region.flavor}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div>
                                            <div className="text-coffeeBrown font-body">Body</div>
                                            <div className="text-charcoal font-body font-semibold">{region.body}</div>
                                        </div>
                                        <div>
                                            <div className="text-coffeeBrown font-body">Acidity</div>
                                            <div className="text-charcoal font-body font-semibold">{region.acidity}</div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-coffeeBrown font-body text-sm mb-2">Available Grades</div>
                                        <div className="flex flex-wrap gap-2">
                                            {region.available.map((grade, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-softCream text-charcoal px-2 py-1 rounded text-xs font-body font-medium"
                                                >
                                                    {grade}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-leafGreen hover:bg-coffeeBrown text-softCream py-2 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105">
                                        Sample This Region
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processing Methods */}
            <section className="py-20 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Processing <span className="text-leafGreen">Methods</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            Choose from traditional and modern processing methods to match your flavor preferences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Washed Process */}
                        <div className="animate-slide-in-left">
                            <div className="bg-softCream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">

                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-charcoal">Washed Process</h3>
                                        <div className="text-leafGreen font-body font-semibold">Clean & Bright</div>
                                    </div>
                                </div>

                                <p className="text-coffeeBrown font-body mb-6 leading-relaxed">
                                    Also known as wet processing, this method removes the fruit pulp before drying, resulting in clean, bright, and complex cups with pronounced acidity.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <h4 className="font-heading font-semibold text-charcoal">Characteristics:</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Clean cup</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Bright acidity</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Complex flavors</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Consistent</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-heading font-semibold text-charcoal">Best For:</h4>
                                    <div className="text-coffeeBrown font-body text-sm">
                                        Light roast specialists, filter coffee, and those who appreciate clarity and complexity in their cup.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Natural Process */}
                        <div className="animate-slide-in-right">
                            <div className="bg-softCream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">

                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-charcoal">Natural Process</h3>
                                        <div className="text-leafGreen font-body font-semibold">Fruity & Bold</div>
                                    </div>
                                </div>

                                <p className="text-coffeeBrown font-body mb-6 leading-relaxed">
                                    The traditional Ethiopian method where coffee cherries dry with the fruit intact, creating intensely fruity, sweet, and full-bodied cups with wild flavor profiles.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <h4 className="font-heading font-semibold text-charcoal">Characteristics:</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Fruity notes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Full body</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Sweet finish</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-leafGreen">✓</span>
                                            <span className="text-charcoal">Bold flavors</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-heading font-semibold text-charcoal">Best For:</h4>
                                    <div className="text-coffeeBrown font-body text-sm">
                                        Espresso blends, dark roast lovers, and those who enjoy bold, fruit-forward coffee experiences.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Honey Process Option */}
                    <div className="mt-12 max-w-2xl mx-auto animate-fade-in-up">
                        <div className="bg-gradient-to-r from-leafGreen to-coffeeBrown text-softCream rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-heading font-bold mb-4">Honey Process Available</h3>
                            <p className="font-body mb-6 opacity-90">
                                Interested in honey process? We offer limited quantities of honey-processed beans from select regions.
                                Contact us for availability and pricing.
                            </p>
                            <button className="bg-softCream text-charcoal hover:bg-white px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105">
                                Inquire About Honey Process
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Export & Shipping */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-coffeeBrown/5 to-leafGreen/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                            Export & <span className="text-leafGreen">Shipping</span>
                        </h2>
                        <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                            Efficient logistics and reliable shipping to get your coffee from Ethiopia to your roastery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                title: "Packaging Options",
                                items: ["Jute bags (60kg)", "GrainPro bags", "Vacuum packaging", "Custom branding available"]
                            },
                            {
                                title: "Shipping Methods",
                                items: ["FCL containers", "LCL shipments", "Air freight", "Door-to-door delivery"]
                            },
                            {
                                title: "Documentation",
                                items: ["Certificate of Origin", "Quality reports", "Phytosanitary certificate", "Export licenses"]
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-4">{service.title}</h3>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-coffeeBrown font-body">
                                            <span className="w-2 h-2 bg-leafGreen rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Shipping Timeline */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up">
                        <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
                            Estimated <span className="text-leafGreen">Shipping Times</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                            {[
                                { destination: "Europe", time: "3-4 weeks", icon: "🇪🇺" },
                                { destination: "North America", time: "5-6 weeks", icon: "🇺🇸" },
                                { destination: "Asia", time: "4-5 weeks", icon: "🇦🇸" },
                                { destination: "Middle East", time: "2-3 weeks", icon: "🇦🇪" }
                            ].map((route, index) => (
                                <div key={index} className="p-4 bg-softCream rounded-xl">
                                    <div className="text-3xl mb-2">{route.icon}</div>
                                    <div className="font-heading font-semibold text-charcoal mb-1">{route.destination}</div>
                                    <div className="text-leafGreen font-body font-semibold">{route.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample Request CTA */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-charcoal to-coffeeBrown text-softCream">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                        Ready to <span className="text-leafGreen">Experience Our Coffee</span>?
                    </h2>
                    <p className="text-xl font-body mb-8 opacity-90 max-w-2xl mx-auto">
                        Request free samples of our premium Ethiopian green coffee beans and taste the difference for yourself.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-leafGreen hover:bg-softCream hover:text-charcoal text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Request Free Samples
                        </button>
                        <button className="border-2 border-softCream hover:bg-softCream hover:text-charcoal text-softCream px-8 py-4 rounded-lg font-body text-lg font-medium transition-all duration-300 transform hover:scale-105">
                            Download Price List
                        </button>
                    </div>
                    <p className="text-sm font-body mt-6 opacity-75">
                        Sample shipping costs may apply depending on location and quantity.
                    </p>
                </div>
            </section>
        </div>
    );
}