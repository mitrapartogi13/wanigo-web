import React from 'react';
import { motion } from 'framer-motion';
import { STATS, IMPACT_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Lightbulb } from 'lucide-react';

const Counter = ({ from, to }: { from: number; to: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
        {to}
    </motion.span>
  )
}

const AboutPage = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white pt-10 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block p-3 rounded-full bg-blue-50 mb-6"
          >
             <Lightbulb className="w-8 h-8 text-[#0A5AEB]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            About WANIGO!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We are builders, environmentalists, and technologists dedicated to solving the waste crisis through smart innovation.
          </motion.p>
        </div>
      </div>

      {/* Vision Mission */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#0A5AEB] transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0A5AEB] transition-colors">
                 <Target className="w-6 h-6 text-[#0A5AEB] group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become the leading digital platform for sustainable waste management in Indonesia, creating an inclusive circular economy ecosystem powered by technology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0A5AEB] to-[#031E4E] p-10 rounded-[2.5rem] shadow-xl text-white"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Our Mission
              </h2>
              <ul className="space-y-4">
                {[
                  "Simplify waste sorting and collection for households.",
                  "Digitize and optimize Waste Bank Unit (BSU) operations.",
                  "Implement AI for logistics efficiency and data prediction.",
                  "Forge strategic partnerships to strengthen the recycling supply chain."
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-sky-50 font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Charts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-slate-500 text-lg">Metrics that drive our passion for a cleaner earth.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-3xl border border-slate-100 shadow-lg ${idx === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white'}`}
                >
                  <div className="text-5xl font-black text-slate-900 mb-2">
                    <Counter from={0} to={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-slate-900">Waste Managed (2024)</h3>
                 <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">+120% Growth</span>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={IMPACT_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      cursor={{fill: '#f8fafc'}}
                    />
                    <Bar dataKey="tons" fill="#0A5AEB" radius={[6, 6, 6, 6]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;