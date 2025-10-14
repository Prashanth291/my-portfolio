import { motion } from 'framer-motion';
import { profiles, type CodingProfile } from '../codingProfilesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const CompetitiveProgramming = () => {
  return (
    <section id="profiles" className="py-20 "> 
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Competitive Programming
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {profiles.map((profile: CodingProfile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-lg shadow-lg text-slate-300 transition-transform duration-300 cursor-pointer"
              style={{ '--hover-color': profile.color,backgroundColor: '#1e293b'  } as React.CSSProperties} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                color: 'var(--hover-color)',
                boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* --- THIS IS THE FIX --- */}
              <img 
                src={profile.image} 
                alt={`${profile.name} Logo`} 
                className="w-16 h-16 object-contain" 
              />
              {/* ----------------------- */}
              
              <p className="mt-4 text-xl font-semibold">{profile.name}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;