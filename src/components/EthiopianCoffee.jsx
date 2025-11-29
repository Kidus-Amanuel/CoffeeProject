import React from "react";

const regions = [
    {
        name: "Yirgacheffe",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Floral, Citrus, Bergamot",
        altitude: "1800-2200m",
        process: "Washed"
    },
    {
        name: "Sidama",
        image: "https://images.unsplash.com/photo-1587077394793-45ea0eb6c323?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Sweet, Berry, Wine-like",
        altitude: "1500-2200m",
        process: "Washed & Natural"
    },
    {
        name: "Guji",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Complex, Stone Fruit, Jasmine",
        altitude: "1800-2350m",
        process: "Natural"
    },
    {
        name: "Harrar",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Blueberry, Spice, Chocolate",
        altitude: "1500-2100m",
        process: "Natural"
    },
    {
        name: "Jimma",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Fruity, Winey, Spicy",
        altitude: "1400-2100m",
        process: "Washed"
    },
    {
        name: "Limu",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        flavor: "Balanced, Spicy, Wine-like",
        altitude: "1100-1900m",
        process: "Washed"
    }
];

export default function EthiopianCoffee() {
    // Duplicate the regions to create a seamless loop
    const carouselItems = [...regions, ...regions];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal text-center animate-fade-in">
                    Ethiopian <span className="text-leafGreen">Coffee Regions</span>
                </h2>
                <p className="text-center text-coffeeBrown mt-4 max-w-2xl mx-auto">
                    Discover the diverse flavors and unique characteristics of Ethiopia's most renowned coffee-growing regions.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full">
                {/* Gradient Masks for smooth fade at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Track */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {carouselItems.map((region, index) => (
                        <div
                            key={`${region.name}-${index}`}
                            className="relative w-[300px] md:w-[350px] h-[500px] mx-4 flex-shrink-0 group rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500"
                        >
                            {/* Full Height Image */}
                            <img
                                src={region.image}
                                alt={region.name}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 group-hover:to-black/90 transition-all duration-500"></div>

                            {/* Top Status Badge */}
                            <div className="absolute top-6 left-6 z-10">
                                <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-leafGreen rounded-full animate-pulse"></span>
                                    <span className="font-heading font-bold tracking-wide text-sm uppercase">{region.name}</span>
                                </div>
                            </div>

                            {/* Bottom Description with Blur */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-t border-white/10 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    {/* Flavor */}
                                    <div>
                                        <div className="flex items-center gap-2 text-leafGreen mb-1">
                                            <span className="text-lg">☕</span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-white/70">Flavor Profile</span>
                                        </div>
                                        <p className="text-white font-body text-lg leading-tight">
                                            {region.flavor}
                                        </p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold uppercase tracking-wider text-white/70">Altitude</span>
                                            </div>
                                            <p className="text-white font-medium text-sm">{region.altitude}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold uppercase tracking-wider text-white/70">Process</span>
                                            </div>
                                            <p className="text-white font-medium text-sm">{region.process}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}