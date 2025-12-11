import { AnimatedSection } from '@/components/AnimatedSection';

const Privacy = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection animation="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Privacy Policy
        </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
        <div className="glass p-8 rounded-xl space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit this portfolio website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit the site, we automatically collect certain information about your device, including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Information about your web browser, IP address, time zone, and cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Information about the individual web pages you view and how you interact with them</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Improve and optimize our site</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Understand how visitors use and interact with the site</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not share your personal information with third parties except to comply with applicable laws and regulations, 
              to respond to a subpoena, search warrant, or other lawful request for information we receive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a resident of certain jurisdictions, you have the right to access personal information we hold about you 
              and to ask that your personal information be corrected, updated, or deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, 
              please contact us via the contact page.
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Privacy;
