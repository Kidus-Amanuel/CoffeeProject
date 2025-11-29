import { FaCalendar, FaUser, FaArrowRight, FaClock, FaBookmark, FaShare } from "react-icons/fa";

export default function BlogCards() {
    const blogCards = [
        {
            title: "Understanding Ethiopian Coffee Grading: From Grade 1 to Specialty Lots",
            excerpt: "A comprehensive guide to Ethiopia's coffee grading system and what international buyers need to know about quality standards.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Quality Standards",
            date: "March 10, 2024",
            readTime: "6 min read",
            author: "Kaleb Bekele"
        },
        {
            title: "Sustainable Sourcing: How Direct Trade Benefits Ethiopian Coffee Farmers",
            excerpt: "Exploring the impact of direct trade relationships on coffee quality, farmer income, and sustainable agricultural practices.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Sustainability",
            date: "March 5, 2024",
            readTime: "7 min read",
            author: "Sofia Mohammed"
        }
    ];

    return (
        <div className="py-12 px-6 lg:px-16 bg-softCream">
            <div className="max-w-7xl mx-auto">
                {/* Optional Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                        Latest <span className="text-leafGreen">Coffee Insights</span>
                    </h2>
                    <p className="text-lg text-coffeeBrown font-body max-w-2xl mx-auto">
                        Expert analysis and market updates for international coffee buyers
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogCards.map((post, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Information */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-leafGreen/10 text-leafGreen px-3 py-1 rounded-full text-sm font-body font-semibold">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-4 text-coffeeBrown/60 text-sm font-body">
                                        <div className="flex items-center gap-1">
                                            <FaCalendar className="text-xs" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaClock className="text-xs" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-3 leading-tight group-hover:text-leafGreen transition-colors duration-300">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-coffeeBrown font-body text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-softCream/20">
                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center text-softCream text-sm font-body font-bold">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-charcoal font-body font-semibold text-sm">{post.author}</div>
                                            <div className="text-coffeeBrown/60 text-xs font-body">Coffee Expert</div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            className="text-coffeeBrown/60 hover:text-leafGreen transition-colors duration-300 p-2 rounded-lg hover:bg-softCream/50"
                                            aria-label="Save article"
                                        >
                                            <FaBookmark />
                                        </button>
                                        <button
                                            className="text-coffeeBrown/60 hover:text-leafGreen transition-colors duration-300 p-2 rounded-lg hover:bg-softCream/50"
                                            aria-label="Share article"
                                        >
                                            <FaShare />
                                        </button>
                                        <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-4 py-2 rounded-lg text-sm font-body font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                            Read More
                                            <FaArrowRight className="text-xs" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-white hover:bg-leafGreen hover:text-softCream text-charcoal border border-softCream/20 px-8 py-4 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                        View All Articles
                        <FaArrowRight className="text-sm" />
                    </button>
                </div>
            </div>
        </div>
    );
}