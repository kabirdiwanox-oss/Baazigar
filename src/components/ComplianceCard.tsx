import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ComplianceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  variant: "positive" | "negative" | "neutral";
  delay?: number;
}

const ComplianceCard = ({ icon: Icon, title, items, variant, delay = 0 }: ComplianceCardProps) => {
  const variantStyles = {
    positive: "compliance-positive",
    negative: "compliance-negative",
    neutral: "compliance-neutral",
  };

  const iconColors = {
    positive: "text-primary",
    negative: "text-destructive",
    neutral: "text-secondary",
  };

  const bulletColors = {
    positive: "bg-primary",
    negative: "bg-destructive",
    neutral: "bg-secondary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card hover-lift p-6 md:p-8 ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`feature-icon ${variant === 'negative' ? 'border-destructive/30 bg-destructive/10' : variant === 'neutral' ? 'border-secondary/30 bg-secondary/10' : ''}`}>
          <Icon className={`w-6 h-6 ${iconColors[variant]}`} />
        </div>
        <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
          {title}
        </h3>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-muted-foreground">
            <span className={`w-2 h-2 rounded-full ${bulletColors[variant]} shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ComplianceCard;
