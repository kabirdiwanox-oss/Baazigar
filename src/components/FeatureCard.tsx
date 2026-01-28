import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, features, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-card hover-lift p-6 md:p-8"
    >
      <div className="feature-icon mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
        {title}
      </h3>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
