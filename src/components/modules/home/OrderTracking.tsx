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
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#FAF9F7] to-white dark:from-gray-950 dark:to-gray-900">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DC8366]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <span className="text-[#DC8366] font-bold text-sm uppercase tracking-widest">
              Real-Time Tracking
            </span>

            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 dark:text-white mt-4 mb-6">
              Know Where Your Food Is, Always
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-lg">
              Never wonder about your order again. Our live tracking system keeps you informed from the moment you order until it arrives.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-6">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex flex-col gap-3"
                >

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center
                    backdrop-blur-xl bg-white/60 dark:bg-white/10
                    border border-white/20 dark:border-white/10
                    shadow-md group-hover:bg-[#DC8366] transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-[#DC8366] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-bold text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT TRACKING CARD */}
          <div className="order-1 lg:order-2 relative">

            <div className="rounded-[2.5rem] p-8 md:p-10
              backdrop-blur-xl bg-white/60 dark:bg-white/10
              border border-white/20 dark:border-white/10
              shadow-2xl"
            >

              {/* HEADER */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20 dark:border-white/10">

                <div>
                  <p className="text-xs font-bold text-[#DC8366] uppercase tracking-wider">
                    Order #FH2847
                  </p>
                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                    Burger Palace
                  </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-[#DC8366]/10 text-[#DC8366] text-xs font-bold backdrop-blur"
                >
                  <div className="w-2 h-2 rounded-full bg-[#DC8366] animate-pulse" />
                  On the way
                </div>

              </div>

              {/* TIMELINE */}
              <div className="space-y-0 relative">

                {trackingSteps.map((step, index) => (
                  <div key={step.label} className="flex gap-6">

                    {/* DOT */}
                    <div className="flex flex-col items-center">

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-md transition-all duration-500
                        ${step.completed ? "bg-[#DC8366]" : "bg-gray-200 dark:bg-gray-700"}`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-[#DC8366]/30" />
                        )}
                      </div>

                      {index < trackingSteps.length - 1 && (
                        <div
                          className={`w-[3px] h-14 transition-colors duration-500
                          ${step.completed ? "bg-[#DC8366]" : "bg-gray-200 dark:bg-gray-700"}`}
                        />
                      )}

                    </div>

                    {/* TEXT */}
                    <div className="pb-10 pt-1">

                      <p className={`font-bold text-lg
                        ${step.completed ? "text-gray-800 dark:text-white" : "text-gray-400"}
                      `}>
                        {step.label}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {step.time}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* MAP */}
              <div className="relative h-40 mt-4 rounded-3xl overflow-hidden
                backdrop-blur-xl bg-white/40 dark:bg-white/10
                border border-white/20 dark:border-white/10
                flex items-center justify-center group"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#DC8366]/10 to-transparent opacity-40 group-hover:scale-110 transition-transform duration-700" />

                <div className="relative text-center z-10">

                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <MapPin className="w-6 h-6 text-[#DC8366] animate-bounce" />
                  </div>

                  <p className="text-xs font-bold text-gray-800 dark:text-white uppercase">
                    Live map view
                  </p>

                </div>

              </div>

            </div>

            {/* Decorative Glow */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#DC8366]/5 rounded-[3rem] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#DC8366]/10 rounded-full blur-3xl -z-10" />

          </div>

        </div>

      </div>
    </section>
  );
};