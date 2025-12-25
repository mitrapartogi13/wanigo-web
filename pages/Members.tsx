import React from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "../constants";
import { Linkedin, Instagram } from "lucide-react";

const MembersPage = () => {
  const leaders = TEAM_MEMBERS.filter((m) => m.category === "leader");
  const executives = TEAM_MEMBERS.filter((m) => m.category === "executive");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Meet The Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl font-medium">
            The brilliant minds driving WANIGO!'s innovation.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 space-y-24">
        {/* Leaders */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
              Leadership
            </h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leaders.map((member) => (
              <TeamCard key={member.id} member={member} isLeader={true} />
            ))}
          </motion.div>
        </section>

        {/* Executives */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
              Executive Board
            </h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Team Photo */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="rounded-[2rem] overflow-hidden relative group h-[400px] md:h-[500px]">
            <img
              src="/images/foto-tim/fotbar-team.png"
              alt="Wanigo Team Together"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031E4E]/90 via-[#031E4E]/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-2">
                WANIGO! Family
              </h3>
              <p className="text-sky-200 text-lg">
                One vision, one team, for a cleaner Indonesia.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Extracted Component for cleaner code
const TeamCard = ({
  member,
  isLeader = false,
}: {
  member: any;
  isLeader?: boolean;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0 },
    }}
    className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group border border-slate-100 ${
      isLeader ? "md:h-[450px]" : ""
    }`}>
    {/* Ganti h-72 dengan aspect-square (atau aspect-[3/4]) untuk mobile, dan kembalikan h-72 hanya di layar medium ke atas (md:h-72) */}
    <div
      className={`relative overflow-hidden ${
        isLeader
          ? "aspect-[3/4] md:h-[75%]"
          : "aspect-square md:aspect-auto md:h-72"
      }`}>
      {" "}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />
      {/* Social Overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2.5 rounded-full text-[#0A5AEB] shadow-lg hover:bg-[#0A5AEB] hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2.5 rounded-full text-pink-600 shadow-lg hover:bg-pink-600 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        )}
      </div>
    </div>

    <div className="p-6">
      <h3
        className={`font-bold text-slate-900 group-hover:text-[#0A5AEB] transition-colors ${
          isLeader ? "text-xl" : "text-lg"
        }`}>
        {member.name}
      </h3>
      <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide mt-1 text-[#0A5AEB]">
        {member.role}
      </p>
    </div>
  </motion.div>
);

export default MembersPage;
