// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const phrases = [
//   { text: "Competitive Programmer", color: "#38bdf8" },
//   { text: "Full Stack Developer", color: "#34d399" },
// ];

// // Enhanced 3D cuboid animation with professional timing
// const variants = {
//   enter: (direction) => ({
//     rotateX: direction > 0 ? -90 : 90,
//     opacity: 0,
//     y: direction > 0 ? 60 : -60,
//     scale: 0.8,
//     filter: "blur(4px)",
//   }),
//   center: {
//     rotateX: 0,
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     filter: "blur(0px)",
//   },
//   exit: (direction) => ({
//     rotateX: direction > 0 ? 90 : -90,
//     opacity: 0,
//     y: direction > 0 ? -60 : 60,
//     scale: 0.8,
//     filter: "blur(4px)",
//   }),
// };

// const AnimatedText = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setDirection(1);
//       setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }, 3200);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative flex justify-center items-center h-16 overflow-hidden">
//       {/* Ambient glow effect */}
//       <motion.div
//         key={`glow-${index}`}
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 0.3, scale: 1.2 }}
//         exit={{ opacity: 0, scale: 0.5 }}
//         transition={{ duration: 0.6 }}
//         className="absolute inset-0 blur-2xl"
//         style={{
//           background: `radial-gradient(circle, ${phrases[index].color}30 0%, transparent 70%)`,
//         }}
//       />

//       {/* 3D perspective container */}
//       <div 
//         style={{ 
//           perspective: '800px',
//           perspectiveOrigin: '50% 50%'
//         }} 
//         className="relative z-10"
//       >
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={phrases[index].text}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               rotateX: { 
//                 type: "spring", 
//                 stiffness: 100, 
//                 damping: 25,
//                 mass: 1.2
//               },
//               opacity: { duration: 0.4 },
//               scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
//               filter: { duration: 0.3 },
//               y: { 
//                 type: "spring", 
//                 stiffness: 120, 
//                 damping: 28 
//               }
//             }}
//             style={{ 
//               transformStyle: 'preserve-3d',
//             }}
//             className="relative"
//           >
//             {/* Shadow layer for depth */}
//             <motion.h1
//               className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight tracking-tight absolute inset-0 blur-sm"
//               style={{ 
//                 color: phrases[index].color,
//                 opacity: 0.3,
//                 transform: 'translateZ(-15px)'
//               }}
//             >
//               {phrases[index].text}
//             </motion.h1>

//             {/* Main text with gradient */}
//             <h1
//               className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight tracking-tight relative"
//               style={{ 
//                 background: `linear-gradient(135deg, ${phrases[index].color} 0%, ${phrases[index].color}dd 100%)`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.3))',
//                 transform: 'translateZ(0px)'
//               }}
//             >
//               {phrases[index].text}
//             </h1>

//             {/* Highlight layer */}
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 0.6, 0] }}
//               transition={{ duration: 0.8, times: [0, 0.5, 1] }}
//               className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight tracking-tight absolute inset-0"
//               style={{ 
//                 color: '#ffffff',
//                 transform: 'translateZ(8px)',
//                 mixBlendMode: 'overlay'
//               }}
//             >
//               {phrases[index].text}
//             </motion.h1>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Animated underline */}
//       <motion.div
//         key={`line-${index}`}
//         initial={{ scaleX: 0, opacity: 0 }}
//         animate={{ scaleX: 1, opacity: 1 }}
//         exit={{ scaleX: 0, opacity: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="absolute bottom-0 h-0.5 rounded-full"
//         style={{
//           width: '70%',
//           background: `linear-gradient(90deg, transparent, ${phrases[index].color}, transparent)`,
//           boxShadow: `0 0 15px ${phrases[index].color}80`
//         }}
//       />
//     </div>
//   );
// };

// export default AnimatedText;