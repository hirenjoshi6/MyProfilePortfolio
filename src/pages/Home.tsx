import homeMainImg from '@/assets/home-main.svg';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ParallaxSection } from '@/components/ParallaxSection';
import { TiltCard } from '@/components/TiltCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useConfig } from '@/hooks/useConfig';
import { useData } from '@/hooks/useData';
import { calculateExperience, formatExperience } from '@/lib/experience';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data } = useData();
  const { config } = useConfig();
  const [skillFilter, setSkillFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Calculate derived state
  const sections = config?.pages?.home?.sections || {};
  const exp = data ? calculateExperience(data.about?.careerStartDate) : { years: 0, months: 0, totalMonths: 0 };
  const intro = data ? data.home?.introduction?.replace(/\{experience\}/g, formatExperience(exp)) : '';

  // Filter skills based on search
  const filteredSkills = useMemo(() => {
    if (!data?.home?.skillsGrid) return [];
    if (!skillFilter.trim()) return data?.home?.skillsGrid || [];
    
    const lowerFilter = skillFilter.toLowerCase();
    return (data?.home?.skillsGrid || [])
      .map((category: any) => ({
        ...category,
        skills: (category.skills || []).filter((skill: any) =>
          skill?.name?.toLowerCase().includes(lowerFilter) ||
          skill?.description?.toLowerCase().includes(lowerFilter) ||
          category?.title?.toLowerCase().includes(lowerFilter)
        ),
      }))
      .filter((category: any) => category.skills?.length > 0);
  }, [data?.home?.skillsGrid, skillFilter]);

  // Set loading state based on data availability
  useEffect(() => {
    if (data && config) {
      setIsLoading(false);
    }
  }, [data, config]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Neural Network Background */}
      <ParallaxSection speed={0.3}>
        <NeuralNetwork />
      </ParallaxSection>
      <ParallaxSection speed={0.5}>
        <FloatingOrbs />
      </ParallaxSection>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
            <AnimatedSection animation="fade-up" className="text-center lg:text-left order-2 lg:order-1">
              {sections.greeting && (
                <div className="inline-block mb-6 animate-slide-up">
                  <span className="glass-morphism px-8 py-3 rounded-full text-base font-semibold backdrop-blur-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-ripple">
                    <Sparkles className="w-4 h-4 animate-pulse-glow" />
                    {data.home.greeting}
                  </span>
                </div>
              )}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up gradient-holographic leading-tight tracking-tight" style={{ animationDelay: '0.1s' }}>
                I'M <span className="inline-block hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-default">{data.personal.name}</span>
              </h1>
              <div className="relative inline-block mb-8 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground relative z-10 transition-all duration-300 group-hover:scale-105">
                  {data.personal.title}
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl -z-10 group-hover:blur-xl transition-all duration-500 animate-gradient-shift animate-morph" style={{ backgroundSize: '200% 200%' }}></div>
              </div>
              
              {sections.introduction && (
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 mb-10 max-w-3xl lg:mx-0 mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
                  {intro}
                </p>
              )}

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Link to="/contact">
                  <Button size="lg" className="group text-base sm:text-lg px-10 py-7 shadow-neon hover:shadow-neon hover:scale-110 transition-all duration-500 font-semibold relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      {data.home.texts?.getInTouchBtn || "Get in Touch"} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button size="lg" className="glass-morphism text-base sm:text-lg px-10 py-7 hover:scale-110 hover:shadow-depth transition-all duration-500 font-semibold border-2 hover:border-primary/40">
                    {data.home.texts?.viewResumeBtn || "View Resume"}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Hero Image */}
            <AnimatedSection animation="scale-in" delay={200} className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-morph" />
              <div className="relative animate-float animate-tilt">
                <img 
                  src={homeMainImg} 
                  alt="Mobile Development Illustration" 
                  className="w-full max-w-md lg:max-w-lg mx-auto drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      {sections.techStack && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 neural-bg opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
          <AnimatedSection animation="fade-in" className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              {/* <h1 className="text-sm uppercase tracking-[0.3em] gradient-holographic font-bold inline-block"> */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-[0.3em] gradient-holographic font-bold ">
                {/* <span className="gradient-holographic">Technologies & Expertise</span> */}
                <span className="gradient-holographic">{data.home.texts?.techStackTitle || "Expertise"}</span>
              </h2>
              <div className="w-32 h-1.5 mx-auto rounded-full animate-holographic" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 100%' }} />
            </div>
            <div className="overflow-hidden rounded-2xl glass-morphism py-8">
              <div className="flex animate-fade-in">
                <div className="flex space-x-16 animate-marquee">
                  {data.home.techStack.concat(data.home.techStack).map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="text-2xl sm:text-3xl md:text-4xl font-black gradient-holographic whitespace-nowrap px-6 hover:scale-125 transition-all duration-500 cursor-default hover:animate-ripple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Skills Grid Section */}
      {sections.skillsGrid && data.home.skillsGrid && (
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 neural-bg opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="gradient-holographic">{data.home.texts?.skillsGridTitle || "Technical Skills"}</span>
              </h2>
              <div className="w-32 h-1.5 mx-auto rounded-full animate-holographic" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 100%' }} />
            </AnimatedSection>

            {/* Filter Input */}
            <AnimatedSection animation="fade-in" className="mb-12 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search skills by name or category..."
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="w-full px-6 py-4 glass-morphism rounded-2xl border border-primary/20 focus:border-primary/60 focus:outline-none text-lg transition-all duration-300"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredSkills.map((category: any, index: number) => {
                const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Code;
                return (
                  <AnimatedSection
                    animation="scale-in"
                    delay={index * 100}
                    threshold={0.2}
                    key={index}
                  >
                    <TiltCard className="glass-morphism p-8 rounded-3xl hover:shadow-neon transition-all duration-700 relative overflow-hidden cursor-pointer flex flex-col group">
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-3xl animate-holographic" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 300%' }} />
                      
                        {/* Neural pulse effect */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-neural-pulse">
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl" />
                        </div>
                        
                        {/* Sticky Header */}
                        <div className="sticky backdrop-blur-sm pb-4 -mx-8 px-8 -mt-8 pt-8 rounded-t-3xl">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-neon overflow-hidden relative flex-shrink-0">
                            <div className="absolute inset-0 animate-holographic opacity-80" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 300%' }} />
                            <IconComponent className="w-8 h-8 text-white relative z-10" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold group-hover:scale-105 transition-transform duration-500">
                            <span className="gradient-holographic">{category.title}</span>
                          </h3>
                        </div>
                      </div>

                      {/* Scrollable Content */}
                      <div className="relative z-10 overflow-y-auto max-h-80 pr-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50 group/scroll">
                        {/* Animated scroll indicator */}
                        <div className="sticky bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none">
                          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300 animate-pulse">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-foreground transform rotate-45" />
                          </div>
                        </div>
                        <div className="space-y-4 pt-4">
                          {category.skills.map((skill: any, skillIndex: number) => (
                            <div key={skillIndex} className="group/item">
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover/item:scale-150 group-hover/item:shadow-neon transition-all duration-300 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-foreground group-hover/item:gradient-holographic transition-all duration-300">
                                    {skill.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground/80 group-hover/item:text-muted-foreground transition-colors duration-300">
                                    {skill.description}
                                  </p>
                                  {/* Proficiency Bar */}
                                  {skill.proficiency && (
                                    <div className="mt-2">
                                      <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-muted-foreground">{skill.proficiency}+ years</span>
                                      </div>
                                      <Progress 
                                        value={(skill.proficiency / 12) * 100} 
                                        className="h-1.5"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Animated scroll indicator */}
                        <div className="sticky bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none">
                          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300 animate-pulse">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-foreground transform rotate-45" />
                          </div>
                        </div>
                      </div>

                      {/* Animated corners with glow */}
                      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl group-hover:border-primary/80 group-hover:shadow-neon transition-all duration-700 group-hover:w-24 group-hover:h-24 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl group-hover:border-secondary/80 group-hover:shadow-neon transition-all duration-700 group-hover:w-20 group-hover:h-20 pointer-events-none" />
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
                    </TiltCard>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Expertise Section */}
      {sections.expertise && (
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 neural-bg opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="slide-up" className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="gradient-holographic">{data.home.texts?.expertiseTitle || "What I Do"}</span>
              </h2>
              <div className="w-32 h-1.5 mx-auto rounded-full animate-holographic" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 100%' }} />
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {data.home.expertise.map((item: any, index: number) => (
                <AnimatedSection
                  animation="scale-in"
                  delay={index * 150}
                  threshold={0.2}
                  key={index}
                >
                <TiltCard
                  className="glass-morphism p-8 rounded-3xl hover:shadow-neon transition-all duration-700 relative overflow-hidden cursor-pointer"
                >
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-3xl animate-holographic" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 300%' }} />
                  
                  {/* Neural pulse effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-neural-pulse">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-neon overflow-hidden relative">
                      <div className="absolute inset-0 animate-holographic opacity-80" style={{ background: 'var(--gradient-holographic)', backgroundSize: '300% 300%' }} />
                      <span className="text-4xl font-black text-white relative z-10">{index + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-500">
                      <span className="gradient-holographic">{item.title}</span>
                    </h3>
                    <p className="text-muted-foreground/90 leading-relaxed text-sm sm:text-base group-hover:text-foreground transition-colors duration-500">{item.description}</p>
                  </div>

                  {/* Animated corners with glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl group-hover:border-primary/80 group-hover:shadow-neon transition-all duration-700 group-hover:w-32 group-hover:h-32" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl group-hover:border-secondary/80 group-hover:shadow-neon transition-all duration-700 group-hover:w-28 group-hover:h-28" />
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
                </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
