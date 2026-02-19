import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, BarChart3, BookOpen, Check, X, Shield, AlertTriangle } from "lucide-react";
import CyberBackground from "@/components/CyberBackground";
import FeatureCard from "@/components/FeatureCard";
import ComplianceCard from "@/components/ComplianceCard";
import Footer from "@/components/Footer";

const TELEGRAM_LINK = "https://telegram.me/+sjYVyGYicmtiMTM5";

const Index = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) {
      window.open(TELEGRAM_LINK, "_blank");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [countdown]);
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CyberBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="cyber-tag">
                🏏 Cricket Knowledge Hub
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
            >
              <span className="gradient-text neon-text">Smart Cricket</span>
              <br />
              <span className="text-foreground">Analysis Community</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Discuss matches, explore team statistics, understand strategies, and learn cricket deeply. Educational content only.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center gap-3 font-display text-lg pulse-glow"
              >
                Join Community
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="mt-4 text-sm text-muted-foreground">
                18+ Only • Educational Purpose
              </p>
              
              {/* Countdown Timer */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary neon-text">{countdown}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {countdown > 0 ? "Redirecting to Telegram..." : "Opening Telegram..."}
                </span>
              </div>
            </motion.div>
            
            {/* Disclaimer Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 disclaimer-box text-left max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <h4 className="font-display font-bold text-yellow-500">
                  Important Disclaimer
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This channel provides cricket analysis and educational discussions only. We do not promote or support betting, gambling, or any monetary activities. Sports outcomes are uncertain. Users must follow local laws. 18+ only.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title gradient-text mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Deep dive into cricket with our comprehensive educational content
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={Activity}
              title="Live Match Breakdown"
              features={[
                "Over-by-over analysis",
                "Momentum shifts explained",
                "Team strengths & weaknesses",
              ]}
              delay={0}
            />
            <FeatureCard
              icon={BarChart3}
              title="Player & Team Stats"
              features={[
                "Recent form analysis",
                "Head-to-head records",
                "Performance trends",
              ]}
              delay={0.1}
            />
            <FeatureCard
              icon={BookOpen}
              title="Cricket Learning Zone"
              features={[
                "Strategy concepts",
                "Match-reading skills",
                "Community discussions",
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* Compliance Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-foreground mb-4">
              Our <span className="gradient-text">Commitment</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Transparency in what we do and don't provide
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ComplianceCard
              icon={Check}
              title="We Share"
              items={[
                "Cricket knowledge",
                "Statistics & data",
                "Match analysis",
                "Educational content",
              ]}
              variant="positive"
              delay={0}
            />
            <ComplianceCard
              icon={X}
              title="We Do NOT Share"
              items={[
                "Betting content",
                "Money-related offers",
                "Guarantees of any kind",
                "Financial advice",
              ]}
              variant="negative"
              delay={0.1}
            />
            <ComplianceCard
              icon={Shield}
              title="Your Responsibility"
              items={[
                "18+ age verification",
                "Legal compliance",
                "Educational use only",
                "Follow local laws",
              ]}
              variant="neutral"
              delay={0.2}
            />
          </div>
          
          {/* Legal Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 glass-card p-6 md:p-8 max-w-4xl mx-auto"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Legal Notice:</strong> This platform operates in compliance with the Information Technology Act 2000 and Consumer Protection Act 2019. All content is provided for educational and informational purposes only. We do not guarantee accuracy of any analysis or statistics. Sports outcomes are inherently uncertain and unpredictable. Users are solely responsible for ensuring their use of this platform complies with applicable local, state, and national laws. We assume no liability for any decisions made based on the content provided. This service is intended for users aged 18 years and above.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title gradient-text neon-text mb-4">
              Join Our Cricket Learning Community
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Learn, discuss, and explore cricket the smart way
            </p>
            
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-3 font-display text-lg pulse-glow"
            >
              Join on Telegram
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
