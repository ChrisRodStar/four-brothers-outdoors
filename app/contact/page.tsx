import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#F2F0E9]">
            <Navigation />

            <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase block mb-6">Get in Touch</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.9]">
                        Let&rsquo;s build your <br />
                        <span className="italic text-stone-600">legacy</span> together.
                    </h1>
                </div>

                <div className="grid md:grid-cols-12 gap-12 md:gap-24">
                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-12">
                        <div>
                            <h3 className="font-serif text-2xl text-stone-900 mb-4">Contact</h3>
                            <div className="space-y-2 text-stone-600 font-light">
                                <p>info@fourbrothersoutdoors.com</p>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-stone-900 mb-4">Studio</h3>
                            <div className="space-y-2 text-stone-600 font-light">
                                <p>123 Main Street</p>
                                <p>North Carolina, USA</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-stone-900 mb-4">Hours</h3>
                            <div className="space-y-2 text-stone-600 font-light">
                                <p>Mon - Fri: 8am - 6pm</p>
                                <p>Sat: By Appointment</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-8">
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">First Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">Last Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">Service Interest</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors appearance-none rounded-none cursor-pointer">
                                        <option>Landscape Design</option>
                                        <option>Lawn Maintenance</option>
                                        <option>Hardscaping</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500 text-xs">▼</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">Message</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors resize-none"></textarea>
                            </div>

                            <div className="pt-8">
                                <button type="submit" className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
