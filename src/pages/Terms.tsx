import { AnimatedSection } from '@/components/AnimatedSection';

const Terms = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection animation="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Terms of Service
        </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
        <div className="glass p-8 rounded-xl space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing this portfolio website, you agree to be bound by these Terms of Service and agree that you are 
              responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily view the materials (information or software) on this website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Modify or copy the materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Use the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Attempt to decompile or reverse engineer any software contained on the website</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Remove any copyright or other proprietary notations from the materials</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, 
              and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data 
              or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, trademarks, and other intellectual property on this website are owned by or licensed to us. 
              You may not use, reproduce, or distribute any content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound 
              by the current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us via the contact page.
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

export default Terms;
