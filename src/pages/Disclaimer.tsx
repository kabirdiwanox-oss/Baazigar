import PageLayout from "@/components/PageLayout";

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer">
      <div className="space-y-6 text-muted-foreground">
        <section className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
          <p className="leading-relaxed text-yellow-200">
            <strong>IMPORTANT:</strong> Please read this disclaimer carefully before using our services. By accessing our platform, you acknowledge and accept these terms.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Educational Purpose Only</h2>
          <p className="leading-relaxed">
            Cricket Knowledge Hub is an educational platform dedicated to cricket analysis, statistics, and learning. All content, discussions, and information provided are strictly for educational and informational purposes only.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">No Betting or Gambling</h2>
          <p className="leading-relaxed">
            We explicitly state that we do NOT promote, support, encourage, or facilitate any form of betting, gambling, wagering, or any monetary activities related to cricket or any other sport. Our platform is NOT a betting service.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">No Guarantees</h2>
          <p className="leading-relaxed">
            We do NOT guarantee any outcomes, results, or predictions. Cricket, like all sports, is inherently uncertain and unpredictable. Any analysis or statistics we provide should not be construed as predictions or guarantees of any kind.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Accuracy of Information</h2>
          <p className="leading-relaxed">
            While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of any information. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Legal Compliance</h2>
          <p className="leading-relaxed mb-3">
            This platform operates in compliance with applicable laws including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Information Technology Act, 2000</li>
            <li>Consumer Protection Act, 2019</li>
            <li>Applicable state and national regulations</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Users are solely responsible for ensuring their use of this platform complies with all applicable local, state, and national laws in their jurisdiction.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">User Responsibility</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must be 18 years or older to use this platform</li>
            <li>You are responsible for verifying legal compliance in your jurisdiction</li>
            <li>You agree to use our content only for educational purposes</li>
            <li>Any decisions you make based on our content are your sole responsibility</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Limitation of Liability</h2>
          <p className="leading-relaxed">
            Under no circumstances shall Cricket Knowledge Hub, its operators, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any content provided therein.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Third-Party Content</h2>
          <p className="leading-relaxed">
            Our platform may contain references to third-party statistics, data, or information. We are not responsible for the accuracy or reliability of any third-party content.
          </p>
        </section>
        
        <section className="pt-4 border-t border-border/30">
          <p className="text-sm">
            By using our services, you acknowledge that you have read, understood, and agree to this Disclaimer. If you do not agree with any part of this Disclaimer, please discontinue use of our services immediately.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
