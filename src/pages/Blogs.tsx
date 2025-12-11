import { useData } from '@/hooks/useData';
import { useConfig } from '@/hooks/useConfig';
import { Calendar, Clock, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ParallaxSection } from '@/components/ParallaxSection';

const Blogs = () => {
  const { data } = useData();
  const { config } = useConfig();

  if (!data || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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
          Blog & Articles
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Insights and Learnings
          </p>
        </AnimatedSection>

        {config.pages.blogs.showGithub && (
          <AnimatedSection animation="fade-up" delay={100} className="mb-12 max-w-2xl">
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <Github className="h-8 w-8 text-primary" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">Check out my GitHub</h2>
                  <p className="text-muted-foreground">
                    Explore my open-source projects and contributions
                  </p>
                </div>
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Visit Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogs.map((blog: any, index: number) => (
            <AnimatedSection
              key={blog.id}
              animation="scale-in"
              delay={200 + index * 100}
              threshold={0.15}
            >
            <article
              className="glass rounded-xl overflow-hidden hover:shadow-glow transition-all"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <a href={blog.url} className="text-primary hover:underline font-medium">
                  Read More →
                </a>
              </div>
            </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder for more blogs */}
        <AnimatedSection animation="fade-up" delay={500} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">More articles coming soon!</p>
          <Button variant="outline">View All Articles</Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Blogs;
