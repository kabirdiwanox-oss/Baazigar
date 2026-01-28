import { motion } from "framer-motion";

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main dark gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />
      
      {/* Radial glow from center-top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(150 100% 50% / 0.08) 0%, transparent 70%)"
        }}
      />
      
      {/* Corner accent glows */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(circle at top right, hsl(180 100% 50% / 0.06) 0%, transparent 60%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(circle at bottom left, hsl(150 100% 50% / 0.05) 0%, transparent 60%)"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CyberBackground;
