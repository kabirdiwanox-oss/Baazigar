import PageLayout from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout title="Terms of Service">
      <div className="space-y-6 text-muted-foreground">
        <p className="text-sm">Last Updated: January 2025</p>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using Cricket Knowledge Hub services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Eligibility</h2>
          <p className="leading-relaxed">
            You must be at least 18 years of age to use our services. By using our platform, you represent and warrant that you meet this age requirement.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Nature of Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All content is provided for educational and informational purposes only</li>
            <li>We provide cricket analysis, statistics, and educational discussions</li>
            <li>We do NOT provide betting advice, tips, or gambling services</li>
            <li>We do NOT guarantee any outcomes or results</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">User Conduct</h2>
          <p className="leading-relaxed mb-3">When using our services, you agree to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Respect other community members</li>
            <li>Not share or promote betting or gambling content</li>
            <li>Not engage in any illegal activities</li>
            <li>Comply with all applicable local, state, and national laws</li>
            <li>Not misrepresent our content as betting advice</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, analysis, and materials provided through our services are protected by intellectual property laws. You may not reproduce, distribute, or use our content for commercial purposes without permission.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
          <p className="leading-relaxed">
            Our services are provided "as is" without any warranties. We do not guarantee the accuracy, completeness, or usefulness of any information. Sports outcomes are inherently uncertain and unpredictable.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Limitation of Liability</h2>
          <p className="leading-relaxed">
            We shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or any decisions made based on our content.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Termination</h2>
          <p className="leading-relaxed">
            We reserve the right to terminate or suspend access to our services at any time, without prior notice, for any reason, including breach of these Terms.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by applicable laws. Any disputes shall be resolved in accordance with applicable legal procedures.
          </p>
        </section>
        
        <section className="pt-4 border-t border-border/30">
          <p className="text-sm">
            By continuing to use our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Terms;
