import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { SERVICES, VALUES } from "../constants";
import { ArrowRight, Recycle, TrendingUp, CheckCircle2 } from "lucide-react";

const HomePage = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full overflow-hidden -mt-24">
      {/* Hero Section with Specific Gradient */}
      <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A5AEB] to-[#031E4E] z-0"></div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sky-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-8 shadow-sm backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <span className="text-sm font-bold tracking-wide text-sky-100 uppercase">
                  Revolutionizing Waste Management
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                AI-DRIVEN{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">
                  {" "}
                  DIGITAL WASTE MANAGEMENT SYSTEM PLATFORM
                </span>
              </h1>

              <p className="text-lg md:text-xl text-sky-100 mb-10 leading-relaxed font-medium">
                Berani Kelola Sampah Mulai dari Sekarang!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group bg-white text-[#0A5AEB] px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
                  Discover Our Tech
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-2xl font-bold text-white bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-sm">
                  Partner With Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-6 text-sky-200/80">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#0A5AEB] bg-slate-200 overflow-hidden">
                      <img
                        src={`https://picsum.photos/100/100?random=${i + 20}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-white font-bold block">
                    Trusted by 100+ Partners
                  </span>
                  <span className="text-sky-200">
                    Across Surabaya & East Java
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual/Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block">
              <div className="relative z-10 bg-white/10 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl border border-white/20">
                <img
                  src="../images/icons/pic-hp.png"
                  alt="App Dashboard Preview"
                  className="rounded-[2rem] w-full h-auto object-cover shadow-inner opacity-90 hover:opacity-100 transition-opacity p-4 duration-200"
                />

                {/* Floating Card 1 */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 -left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs text-slate-900">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">
                      Efficiency
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      +45% Optimized
                    </p>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-20 -right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 text-slate-900">
                  <div className="bg-sky-100 p-3 rounded-xl">
                    <Recycle className="w-6 h-6 text-[#0A5AEB]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">
                      Total Waste
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      10.5 Tons
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0A5AEB] font-extrabold tracking-widest uppercase text-xs mb-2 block">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              End-to-End Waste Ecosystem
            </h2>
            <p className="text-slate-500 text-lg">
              We provide a seamless platform connecting households, waste
              collectors, and recycling centers with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-slate-100 hover:-translate-y-2 overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A5AEB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0A5AEB] transition-colors duration-500 shadow-inner">
                    <service.icon className="w-8 h-8 text-[#0A5AEB] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-[#0A5AEB] font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="https://picsum.photos/400/500?random=1"
                  className="rounded-3xl shadow-lg mt-12 w-full h-auto object-cover"
                  alt="App interface"
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="https://picsum.photos/400/500?random=2"
                  className="rounded-3xl shadow-lg mb-12 w-full h-auto object-cover"
                  alt="Worker happy"
                />
              </div>
              {/* Circle Graphic */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10 animate-spin-slow"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-[#0A5AEB] font-extrabold tracking-widest uppercase text-xs">
                Why Choose WANIGO?
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-8">
                Empowering Communities, Protecting Earth.
              </h2>

              <div className="space-y-8">
                {VALUES.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg shadow-blue-900/5 group-hover:bg-[#0A5AEB] group-hover:border-[#0A5AEB] transition-all duration-300">
                        <value.icon className="w-6 h-6 text-[#0A5AEB] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0A5AEB] transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A5AEB] to-[#031E4E]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready to Make an Impact?
            </h2>
            <p className="text-sky-100 max-w-2xl mx-auto mb-10 text-xl font-medium">
              Join the revolution of digital waste management. Whether you're a
              Waste Bank Unit or a household, we have the solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#0A5AEB] px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all flex items-center justify-center">
                Start Collaboration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all">
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
