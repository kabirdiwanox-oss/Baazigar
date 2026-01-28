import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="space-y-6 text-muted-foreground">
        <p className="text-sm">Last Updated: January 2025</p>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Cricket Knowledge Hub ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Information We Collect</h2>
          <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Telegram username when you join our community</li>
            <li>Messages and interactions within our community channels</li>
            <li>Device and browser information for analytics purposes</li>
            <li>Usage data to improve our services</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain our educational services</li>
            <li>To communicate with community members</li>
            <li>To improve and optimize our content</li>
            <li>To ensure compliance with community guidelines</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Data Protection</h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Third-Party Services</h2>
          <p className="leading-relaxed">
            Our services operate through Telegram, which has its own privacy policy. We encourage you to review Telegram's privacy policy to understand how they handle your data.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Your Rights</h2>
          <p className="leading-relaxed mb-3">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Leave our community at any time</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify community members of any significant changes through our channels.
          </p>
        </section>
        
        <section className="pt-4 border-t border-border/30">
          <p className="text-sm">
            For privacy-related inquiries, please contact us through our community channels.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Privacy;
