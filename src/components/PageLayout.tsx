import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CyberBackground from "./CyberBackground";
import Footer from "./Footer";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CyberBackground />
      
      <main className="relative z-10 py-20">
        <div className="container">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-8">
            {title}
          </h1>
          
          {/* Content */}
          <div className="glass-card p-6 md:p-10 max-w-4xl">
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
