import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Who We Are</h2>
          <p className="leading-relaxed">
            Cricket Knowledge Hub is a passionate community of cricket enthusiasts dedicated to deepening understanding of the sport through analysis, statistics, and educational discussions. We bring together fans from around the world to explore the intricacies of cricket.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is to provide high-quality cricket education and analysis that helps fans appreciate the strategic depth of the game. We believe that understanding cricket at a deeper level enhances the viewing experience and creates more informed discussions.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">What We Do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide match analysis and breakdowns</li>
            <li>Share player and team statistics</li>
            <li>Discuss cricket strategies and tactics</li>
            <li>Create educational content about cricket fundamentals</li>
            <li>Foster community discussions among cricket enthusiasts</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-foreground">Education First:</strong> All content is designed to teach and inform</li>
            <li><strong className="text-foreground">Transparency:</strong> We are clear about what we offer and don't offer</li>
            <li><strong className="text-foreground">Community:</strong> We value respectful, engaging discussions</li>
            <li><strong className="text-foreground">Integrity:</strong> We never promote or support any form of gambling or betting</li>
          </ul>
        </section>
        
        <section className="pt-4 border-t border-border/30">
          <p className="text-sm">
            This platform is intended for users aged 18 years and above. All content is for educational purposes only.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
