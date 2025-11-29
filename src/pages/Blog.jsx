import { FaCalendar, FaUser, FaArrowRight, FaSearch, FaTags, FaShare, FaBookmark, FaClock } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
export default function Blog() {
    const featuredPost = {
        title: "The 2024 Ethiopian Coffee Harvest: Quality Insights and Market Outlook",
        excerpt: "An in-depth analysis of this year's coffee harvest across major growing regions, with expert predictions on quality, yield, and global market implications for green coffee buyers.",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "Market Analysis",
        date: "March 15, 2024",
        readTime: "8 min read",
        author: "Alem Tesfaye"
    };

    const blogPosts = [
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
        },
        {
            title: "Export Logistics: Navigating Coffee Shipments from Ethiopia to Global Markets",
            excerpt: "Essential guide for international buyers on shipping timelines, documentation, and logistics for Ethiopian green coffee.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Export Guide",
            date: "February 28, 2024",
            readTime: "5 min read",
            author: "Marta Girma"
        },
        {
            title: "Flavor Profiles: Comparing Yirgacheffe, Sidama, and Guji Coffee Regions",
            excerpt: "Detailed analysis of flavor characteristics, processing methods, and optimal roasting profiles for Ethiopia's premier coffee regions.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Coffee Regions",
            date: "February 22, 2024",
            readTime: "9 min read",
            author: "Quality Team"
        },
        {
            title: "Organic Certification in Ethiopian Coffee: Process and Benefits for Export",
            excerpt: "Understanding the organic certification process and how it adds value for international specialty coffee buyers.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Certification",
            date: "February 18, 2024",
            readTime: "4 min read",
            author: "Export Team"
        },
        {
            title: "Bulk Order Strategies: Maximizing Value in Container-Sized Coffee Purchases",
            excerpt: "Expert advice for roasters on planning, financing, and managing large-volume green coffee purchases from Ethiopia.",
            image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Buying Guide",
            date: "February 12, 2024",
            readTime: "6 min read",
            author: "Sales Team"
        }
    ];

    const categories = [
        { name: "Market Analysis", count: 12 },
        { name: "Quality Standards", count: 8 },
        { name: "Sustainability", count: 6 },
        { name: "Export Guide", count: 5 },
        { name: "Coffee Regions", count: 10 },
        { name: "Buying Guide", count: 7 }
    ];

    const popularPosts = [
        { title: "2024 Coffee Price Forecast", reads: "1.2K" },
        { title: "Washed vs Natural Processing", reads: "980" },
        { title: "ECX Certification Explained", reads: "850" },
        { title: "Shipping During Peak Season", reads: "720" }
    ];

    return (
        <div className="min-h-screen bg-softCream">
            <PageMeta title="Blog" description="Blog Page" />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-coffeeBrown to-charcoal text-softCream py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
                        Coffee <span className="text-leafGreen">Export Insights</span>
                    </h1>
                    <p className="text-xl lg:text-2xl font-body text-softCream/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Expert analysis, market updates, and professional guidance for international buyers of Ethiopian green coffee beans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="relative max-w-md w-full">
                            <input
                                type="text"
                                placeholder="Search articles, guides, and market reports..."
                                className="w-full px-6 py-4 pl-12 rounded-xl bg-softCream/10 border border-softCream/20 text-softCream placeholder-softCream/60 focus:outline-none focus:ring-2 focus:ring-leafGreen focus:border-transparent backdrop-blur-sm"
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-softCream/60" />
                        </div>
                        <button className="bg-leafGreen hover:bg-green-700 text-softCream px-8 py-4 rounded-xl font-body font-semibold transition-colors duration-300 whitespace-nowrap">
                            Search Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 animate-fade-in-up">
                        <div className="lg:flex">
                            <div className="lg:w-1/2">
                                <div className="h-80 lg:h-full overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-leafGreen text-softCream px-3 py-1 rounded-full text-sm font-body font-semibold">
                                        {featuredPost.category}
                                    </span>
                                    <div className="flex items-center gap-4 text-coffeeBrown/60 text-sm font-body">
                                        <div className="flex items-center gap-1">
                                            <FaCalendar className="text-xs" />
                                            <span>{featuredPost.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaClock className="text-xs" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-coffeeBrown font-body leading-relaxed mb-6">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-leafGreen rounded-full flex items-center justify-center text-softCream font-body font-bold">
                                            {featuredPost.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-charcoal font-body font-semibold">{featuredPost.author}</div>
                                            <div className="text-coffeeBrown/60 text-sm font-body">Export Director</div>
                                        </div>
                                    </div>
                                    <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                        Read Article
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6 lg:px-16 bg-softCream">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Blog Posts */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-heading font-bold text-charcoal">Latest Articles</h2>
                                <div className="flex items-center gap-4 text-sm font-body">
                                    <span className="text-coffeeBrown/60">Sort by:</span>
                                    <select className="bg-white border border-softCream/20 rounded-lg px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-leafGreen">
                                        <option>Newest First</option>
                                        <option>Most Popular</option>
                                        <option>Oldest First</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {blogPosts.map((post, index) => (
                                    <article
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-leafGreen/10 text-leafGreen px-2 py-1 rounded text-xs font-body font-semibold">
                                                    {post.category}
                                                </span>
                                                <div className="flex items-center gap-4 text-coffeeBrown/60 text-xs font-body">
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

                                            <h3 className="text-xl font-heading font-bold text-charcoal mb-3 leading-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-coffeeBrown font-body text-sm leading-relaxed mb-4">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-softCream/20">
                                                <div className="flex items-center gap-2">
                                                    <FaUser className="text-coffeeBrown/60 text-sm" />
                                                    <span className="text-coffeeBrown/60 text-sm font-body">{post.author}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button className="text-coffeeBrown/60 hover:text-leafGreen transition-colors duration-300">
                                                        <FaBookmark />
                                                    </button>
                                                    <button className="text-coffeeBrown/60 hover:text-leafGreen transition-colors duration-300">
                                                        <FaShare />
                                                    </button>
                                                    <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-4 py-2 rounded-lg text-sm font-body font-semibold transition-colors duration-300">
                                                        Read
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="text-center mt-12">
                                <button className="bg-white hover:bg-leafGreen hover:text-softCream text-charcoal border border-softCream/20 px-8 py-4 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Load More Articles
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Categories */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="font-heading font-bold text-charcoal text-lg mb-4 flex items-center gap-2">
                                    <FaTags className="text-leafGreen" />
                                    Categories
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <a
                                            key={index}
                                            href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-softCream/50 transition-colors duration-300 group"
                                        >
                                            <span className="text-coffeeBrown font-body group-hover:text-charcoal">
                                                {category.name}
                                            </span>
                                            <span className="bg-leafGreen/10 text-leafGreen px-2 py-1 rounded text-xs font-body font-semibold">
                                                {category.count}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Posts */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="font-heading font-bold text-charcoal text-lg mb-4">
                                    Popular Reads
                                </h3>
                                <div className="space-y-4">
                                    {popularPosts.map((post, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="block p-3 rounded-lg hover:bg-softCream/50 transition-colors duration-300 group"
                                        >
                                            <div className="text-charcoal font-body font-semibold group-hover:text-leafGreen mb-1 text-sm leading-tight">
                                                {post.title}
                                            </div>
                                            <div className="text-coffeeBrown/60 text-xs font-body">
                                                {post.reads} reads
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Subscribe */}
                            <div className="bg-gradient-to-br from-coffeeBrown to-charcoal text-softCream rounded-2xl p-6">
                                <h3 className="font-heading font-bold text-lg mb-3">
                                    Market Intelligence
                                </h3>
                                <p className="text-softCream/80 text-sm font-body mb-4">
                                    Get exclusive market analysis, harvest reports, and pricing insights delivered to your inbox.
                                </p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder=" Business email"
                                        className="w-full px-4 py-3 rounded-lg bg-softCream/10 border border-softCream/20 text-softCream placeholder-softCream/60 focus:outline-none focus:border-leafGreen transition-colors duration-300 text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-leafGreen hover:bg-green-700 text-softCream py-3 rounded-lg font-body font-semibold transition-colors duration-300 text-sm"
                                    >
                                        Subscribe to Reports
                                    </button>
                                </form>
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-leafGreen/10 border border-leafGreen/20 rounded-2xl p-6 text-center">
                                <h3 className="font-heading font-bold text-charcoal text-lg mb-3">
                                    Need Specific Information?
                                </h3>
                                <p className="text-coffeeBrown text-sm font-body mb-4">
                                    Our export team can provide custom market analysis and sourcing recommendations.
                                </p>
                                <button className="bg-leafGreen hover:bg-coffeeBrown text-softCream px-6 py-3 rounded-lg font-body font-semibold transition-colors duration-300 w-full">
                                    Contact Export Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-6 lg:px-16 bg-gradient-to-br from-charcoal to-coffeeBrown text-softCream">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                        Stay Ahead in the <span className="text-leafGreen">Coffee Market</span>
                    </h2>
                    <p className="text-xl font-body mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                        Join 2,500+ international coffee buyers who receive our exclusive market intelligence and harvest reports.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            className="px-6 py-4 rounded-xl bg-softCream/10 border border-softCream/20 text-softCream placeholder-softCream/60 focus:outline-none focus:ring-2 focus:ring-leafGreen flex-1 min-w-0"
                        />
                        <button className="bg-leafGreen hover:bg-green-700 text-softCream px-8 py-4 rounded-xl font-body font-semibold transition-colors duration-300 whitespace-nowrap">
                            Subscribe to Insights
                        </button>
                    </div>
                    <p className="text-softCream/60 text-sm mt-4 font-body">
                        No spam. Unsubscribe at any time. Professional content only.
                    </p>
                </div>
            </section>
        </div>
    );
}