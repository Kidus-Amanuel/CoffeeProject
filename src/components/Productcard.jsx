import React from "react";
import { FaCheck, FaArrowRight, FaShoppingBag } from "react-icons/fa";

export default function Productcard() {
    const products = [
        {
            grade: "Grade 1",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Premium quality with zero defects",
            features: ["0-3 defects", "Superior cup quality", "Export ready"],
            price: "Premium"
        },
        {
            grade: "Grade 2",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "High quality for commercial roasting",
            features: ["4-12 defects", "Excellent value", "Consistent quality"],
            price: "Standard"
        },
        {
            grade: "Specialty Lots",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Micro-lots with unique profiles",
            features: ["Single origin", "Traceable", "Limited availability"],
            price: "Exclusive"
        },
        {
            grade: "Washed / Natural",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Choose your preferred processing method",
            features: ["Both methods", "Custom orders", "Bulk available"],
            price: "Flexible"
        },
        {
            grade: "Bulk Orders",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Container loads for large roasters",
            features: ["FCL shipments", "Competitive pricing", "Mixed grades"],
            price: "Wholesale"
        }
        , {
            grade: "Bulk Orders",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Container loads for large roasters",
            features: ["FCL shipments", "Competitive pricing", "Mixed grades"],
            price: "Wholesale"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col"
                >
                    {/* Image Section with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                        <img
                            src={product.image}
                            alt={product.grade}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-leafGreen animate-pulse"></span>
                            <span className="text-xs font-bold text-charcoal uppercase tracking-wider">{product.price}</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-leafGreen transition-colors">
                                {product.grade}
                            </h3>
                            <p className="text-coffeeBrown/80 font-body text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-8 bg-softCream/30 p-5 rounded-2xl border border-softCream">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-charcoal/80">
                                    <div className="w-5 h-5 rounded-full bg-leafGreen/10 flex items-center justify-center flex-shrink-0">
                                        <FaCheck className="text-[10px] text-leafGreen" />
                                    </div>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons - Pushed to bottom */}
                        <div className="mt-auto pt-4 border-t border-gray-100">
                            <button className="w-full bg-charcoal hover:bg-leafGreen text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg hover:shadow-leafGreen/30 transform hover:-translate-y-1">
                                <FaShoppingBag className="text-lg" />
                                <span>Order Now</span>
                                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}