import { Bell, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Live Updates",
        description: "Track your order in real-time on the map",
    },
    {
        icon: ShieldCheck,
        title: "Verified Providers",
        description: "All restaurants are quality-checked",
    },
    {
        icon: Bell,
        title: "Instant Notifications",
        description: "Get alerts at every step of the way",
    },
];

const trackingSteps = [
    { label: "Order Confirmed", time: "10:30 AM", completed: true },
    { label: "Preparing", time: "10:35 AM", completed: true },
    { label: "Out for Delivery", time: "10:50 AM", completed: true },
    { label: "Delivered", time: "Est. 11:05 AM", completed: false },
];

export const OrderTracking = () => {
    return (
        <section id="tracking" className="bg-[#FAF9F7] py-20 px-4 md:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <span className="text-[#DC8366] font-bold text-sm uppercase tracking-widest font-sans">
                            Real-Time Tracking
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mt-4 mb-6 font-serif leading-tight">
                            Know Where Your Food Is, Always
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-lg font-sans">
                            Never wonder about your order again. Our live tracking system
                            keeps you informed from the moment you order until it arrives at
                            your door.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col gap-3 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#DC8366]/10 group-hover:bg-[#DC8366] transition-colors duration-300">
                                        <feature.icon className="w-7 h-7 text-[#DC8366] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-[#000000] font-sans">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Tracking Card Side */}
                    <div className="relative order-1 lg:order-2">
                        <div className="bg-[#FFFFFF] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(220,131,102,0.1)] border border-[#DC8366]/5 relative z-10">

                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#FAF9F7]">
                                <div>
                                    <p className="text-xs font-bold text-[#DC8366] uppercase tracking-wider mb-1">Order #FH2847</p>
                                    <p className="text-xl font-bold text-[#000000] font-serif">Burger Palace</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-[#DC8366]/10 text-[#DC8366] text-xs font-bold rounded-full animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-[#DC8366]" />
                                    On the way
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-0 relative">
                                {trackingSteps.map((step, index) => (
                                    <div key={step.label} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-all duration-500 ${step.completed
                                                    ? "bg-[#DC8366] scale-110"
                                                    : "bg-[#FAF9F7]"
                                                    }`}
                                            >
                                                {step.completed ? (
                                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                                ) : (
                                                    <div className="w-3 h-3 rounded-full bg-[#DC8366]/20" />
                                                )}
                                            </div>
                                            {index < trackingSteps.length - 1 && (
                                                <div
                                                    className={`w-[3px] h-14 transition-colors duration-500 ${step.completed ? "bg-[#DC8366]" : "bg-[#FAF9F7]"
                                                        }`}
                                                />
                                            )}
                                        </div>
                                        <div className="pb-10 pt-1">
                                            <p
                                                className={`font-bold text-lg font-sans ${step.completed ? "text-[#000000]" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {step.label}
                                            </p>
                                            <p className="text-sm font-medium text-muted-foreground/70">
                                                {step.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative h-40 bg-[#FAF9F7] border border-[#DC8366]/10 rounded-3xl flex items-center justify-center mt-4 overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-[url('https://www.google.com/maps/d/u/0/thumbnail?mid=1_K-M7lG6p6n9f5W1p6M8m-I9p4A')] bg-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-700" />
                                <div className="relative text-center z-10">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                                        <MapPin className="w-6 h-6 text-[#DC8366] animate-bounce" />
                                    </div>
                                    <p className="text-xs font-bold text-[#000000] uppercase tracking-tighter">Live map view</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute -top-6 -right-6 w-full h-full bg-[#DC8366]/5 rounded-[3rem] -z-0" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#DC8366]/10 rounded-full blur-3xl -z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
};