import PageLayout from "@/components/PageLayout";
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";

const TELEGRAM_LINK = "https://telegram.me/+sjYVyGYicmtiMTM9";

const Contact = () => {
  return (
    <PageLayout title="Contact Us">
      <div className="space-y-8 text-muted-foreground">
        <section>
          <p className="leading-relaxed text-lg">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us through the following channels.
          </p>
        </section>
        
        <section className="grid md:grid-cols-2 gap-6">
          {/* Telegram Card */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Telegram Community</h3>
            </div>
            <p className="text-sm mb-4">
              Join our Telegram community for real-time discussions and updates.
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-outline inline-flex items-center gap-2 text-sm"
            >
              Join Community
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Response Time Card */}
          <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Response Time</h3>
            </div>
            <p className="text-sm">
              We typically respond to inquiries within 24-48 hours during business days. For urgent matters, please reach out via our Telegram community.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Before Contacting Us</h2>
          <p className="leading-relaxed mb-4">
            To help us assist you better, please:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Check our <a href="/disclaimer" className="text-primary hover:underline">Disclaimer</a> and <a href="/terms" className="text-primary hover:underline">Terms of Service</a></li>
            <li>Review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for data-related questions</li>
            <li>Be specific about your query or feedback</li>
            <li>Include relevant details that may help us understand your concern</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Community Guidelines</h2>
          <p className="leading-relaxed">
            When reaching out or participating in our community, please maintain respectful communication. We do not tolerate any discussions related to betting, gambling, or any monetary activities. All interactions should align with our educational mission.
          </p>
        </section>
        
        <section className="pt-4 border-t border-border/30">
          <p className="text-sm">
            Note: This platform is for educational purposes only. We are unable to provide any betting advice, tips, or gambling-related information.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;
