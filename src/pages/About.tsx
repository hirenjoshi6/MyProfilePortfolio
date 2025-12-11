import aboutImg from '@/assets/about.png';
import avatarImg from '@/assets/avatar.svg';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CounterAnimation } from '@/components/CounterAnimation';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ParallaxSection } from '@/components/ParallaxSection';
import { TiltCard } from '@/components/TiltCard';
import { useConfig } from '@/hooks/useConfig';
import { useData } from '@/hooks/useData';
import { calculateExperience, formatExperience } from '@/lib/experience';
import { useState } from 'react';

const About = () => {
  const { data } = useData();
  const { config } = useConfig();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (!data || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const sections = config.pages.about.sections;

  const experience = calculateExperience(data.about.careerStartDate);
  const experienceYears = experience.years;
  const experienceMonths = experience.months;

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      <ParallaxSection speed={0.3}>
        <NeuralNetwork />
      </ParallaxSection>
      <ParallaxSection speed={0.5}>
        <FloatingOrbs />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-holographic">
          {data.about.texts?.pageTitle || "About Me"}
          </h1>
          <div className="h-1 w-32 mx-auto mb-12 rounded-full animate-pulse-glow" 
               style={{ background: 'var(--gradient-primary)' }} />
        </AnimatedSection>

        {/* Bio Section with Images */}
        {sections.bio && (
          <section className="mb-20 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
              <span className="gradient-holographic">{data.about.texts?.introduceTitle?.split(' ')[0] || "LET ME"}</span> <span className="text-primary">{data.about.texts?.introduceTitle?.split(' ').slice(1, -1).join(' ') || "INTRODUCE"}</span> <span className="gradient-holographic">{data.about.texts?.introduceTitle?.split(' ').slice(-1)[0] || "MYSELF"}</span>
            </h2>
            </AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="slide-right" delay={100}>
                  <div className="glass-morphism p-8 rounded-2xl">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {data.about.bio.replace(/\{experience\}/g, formatExperience(experience))}
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={200} className="flex justify-center animate-float">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-full opacity-50 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-morph"
                         style={{ background: 'var(--gradient-holographic)' }} />
                    <img 
                      src={avatarImg} 
                      alt="Avatar" 
                      className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl"
                    />
                  </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Work Update Section */}
        <section className="mb-20 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
              <span className="gradient-holographic">{data.about.texts?.workUpdateTitle?.split(' ').slice(0, -2).join(' ') || "SHORT WORK UPDATE OF"}</span> <span className="text-primary">{data.about.texts?.workUpdateTitle?.split(' ').slice(-1)[0] || "MYSELF"}</span>
            </h2>
          </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left" delay={100} className="animate-float order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-3xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-500"
                       style={{ background: 'var(--gradient-holographic)' }} />
                  <img 
                    src={aboutImg} 
                    alt="About" 
                    className="relative w-full max-w-md mx-auto rounded-2xl border-2 border-white/10"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-right" delay={200} className="order-1 lg:order-2">
                <div className="glass-morphism p-8 rounded-2xl">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Over the <span className="gradient-text font-semibold">{experienceYears} years and {experienceMonths} months</span> I've gained deep expertise in mobile and cross-platform development:
                </p>
                <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl group-hover/item:animate-ripple">•</span>
                    <span>I've spent <span className="gradient-text font-semibold">11+ years in iOS development</span> (Objective-C, Swift, SwiftUI)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary text-2xl group-hover/item:animate-ripple">•</span>
                    <span>I've spent <span className="gradient-text font-semibold">6+ years in Android</span> (Kotlin, Java)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent text-2xl group-hover/item:animate-ripple">•</span>
                    <span>I've spent <span className="gradient-text font-semibold">6+ years of Flutter and React Native respectively</span></span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent text-2xl group-hover/item:animate-ripple">•</span>
                    <span>I've spent <span className="gradient-text font-semibold">5 years of Full Stack Development (JavaScript, TypeScript, server management, node.js, php, Python, Go-land)</span></span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl group-hover/item:animate-ripple">•</span>
                    <span>and I've spent <span className="gradient-text font-semibold">7+ years as a Team Lead and Architect</span></span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary text-2xl group-hover/item:animate-ripple">•</span>
                    <span>I've guided teams of up to <span className="gradient-text font-semibold">25-30 engineers</span>, optimized delivery pipelines, and ensured apps met both technical and business goals.</span>
                  </li>
                </ul>
                </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Experience Overview */}
        {sections.experience && (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimatedSection animation="scale-in" delay={200}>
              <TiltCard className="glass-morphism p-8 rounded-xl group hover:border-primary/40 transition-all">
                <div className="text-5xl font-bold gradient-holographic mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={experience.years} suffix="+" />
                </div>
                <div className="text-muted-foreground text-lg">Years Experience</div>
                <div className="mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                     style={{ background: 'var(--gradient-primary)' }} />
              </TiltCard>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={300}>
              <TiltCard className="glass-morphism p-8 rounded-xl group hover:border-secondary/40 transition-all">
                <div className="text-5xl font-bold gradient-holographic mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={experience.months} />
                </div>
                <div className="text-muted-foreground text-lg">Months This Year</div>
                <div className="mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                     style={{ background: 'var(--gradient-primary)' }} />
              </TiltCard>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={400}>
              <TiltCard className="glass-morphism p-8 rounded-xl group hover:border-accent/40 transition-all">
                <div className="text-5xl font-bold gradient-holographic mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={data.workHistoryEntries.length} />
                </div>
                <div className="text-muted-foreground text-lg">Companies</div>
                <div className="mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                     style={{ background: 'var(--gradient-primary)' }} />
              </TiltCard>
            </AnimatedSection>
          </div>
        )}

        {/* Current Work */}
        {sections.currentWork && (
          <AnimatedSection animation="fade-up" delay={500} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{data.about.texts?.currentRoleTitle || "Current Role"}</h2>
            <div className="glass-morphism p-8 rounded-xl card-3d">
              <h3 className="text-2xl font-semibold gradient-holographic mb-2">
                {data.about.currentRole}
              </h3>
              <p className="text-muted-foreground text-lg mb-6">{data.about.currentCompany}</p>
              <ul className="space-y-3">
                {data.about.currentResponsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="text-primary mr-3 mt-1 group-hover/item:animate-ripple">▹</span>
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        )}

        {/* Hobbies */}
        {sections.hobbies && (
          <AnimatedSection animation="fade-up" delay={600} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{data.about.texts?.hobbiesTitle || "Hobbies & Interests"}</h2>
            <div className="flex flex-wrap gap-4">
              {data.about.hobbies.map((hobby: string, index: number) => (
                <span
                  key={index}
                  className="glass-morphism px-6 py-3 rounded-full hover:border-primary/40 hover:scale-105 transition-all cursor-default group"
                >
                  <span className="group-hover:gradient-holographic">{hobby}</span>
                </span>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Skills */}
        {sections.skills && (
          <AnimatedSection animation="fade-up" delay={700}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">{data.about.texts?.skillsTitle || "Skills & Technologies"}</h2>
            <div className="space-y-12">
              {Object.entries(data.about.skills).map(([category, skills]: [string, any], catIndex: number) => (
                <AnimatedSection key={category} animation="slide-up" delay={800 + catIndex * 100}>
                  <h3 className="text-2xl font-semibold mb-6 gradient-holographic">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill: any, index: number) => (
                      <TiltCard
                        key={index}
                        className="glass-morphism p-6 rounded-lg hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                        onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 group-hover:animate-ripple transition-transform">
                          {skill.icon}
                        </div>
                        <div className="font-semibold mb-1 text-lg">{skill.name}</div>
                        {hoveredSkill === `${category}-${index}` && (
                          <div className="text-sm text-muted-foreground animate-fade-in mt-2">
                            {skill.description}
                          </div>
                        )}
                      </TiltCard>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default About;
