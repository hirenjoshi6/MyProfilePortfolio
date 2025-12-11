import { AnimatedSection } from '@/components/AnimatedSection';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ParallaxSection } from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/hooks/useConfig';
import { useData } from '@/hooks/useData';
import { Calendar, Cloud, Layers, Smartphone, ArrowUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'Present';
  const [year, month] = dateString.split('-').map(Number);
  if (!year || !month) return dateString;
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Projects = () => {
  const { data } = useData();
  const { config } = useConfig();
  const [backendFilter, setBackendFilter] = useState<string>('All');
  const [cloudFilter, setCloudFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'current-first' | 'newest' | 'oldest'>('current-first');

  // Derive data safely
  const sections = config?.pages?.projects?.sections || {};
  const projects = (data as any)?.projects?.items || [];
  const texts = (data as any)?.projects?.texts || {
    pageTitle: 'Projects',
    pageSubtitle: 'Selected work across mobile, backend and cloud',
    filtersTitle: 'Filter by technology stack',
  };

  // All hooks must be called before any early returns
  const allBackendStacks: string[] = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p: any) => {
      (p.backendStacks || []).forEach((tech: string) => set.add(tech));
    });
    return Array.from(set).sort();
  }, [projects]);

  const allCloudProviders: string[] = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p: any) => {
      (p.cloudProviders || []).forEach((cloud: string) => set.add(cloud));
    });
    return Array.from(set).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project: any) => {
      const backendOk =
        backendFilter === 'All' || (project.backendStacks || []).includes(backendFilter);
      const cloudOk =
        cloudFilter === 'All' || (project.cloudProviders || []).includes(cloudFilter);
      return backendOk && cloudOk;
    });

    // Sort projects based on sortOrder
    const sorted = [...filtered].sort((a: any, b: any) => {
      if (sortOrder === 'current-first') {
        // Current projects (endDate: null) always first
        if (a.endDate === null && b.endDate !== null) return -1;
        if (a.endDate !== null && b.endDate === null) return 1;
        // Then sort by most recent startDate
        const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
        const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
        return dateB - dateA;
      } else if (sortOrder === 'newest') {
        // Newest first (by startDate)
        const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
        const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
        return dateB - dateA;
      } else {
        // Oldest first (by startDate)
        const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
        const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
        return dateA - dateB;
      }
    });

    return sorted;
  }, [projects, backendFilter, cloudFilter, sortOrder]);

  // Now safe to do early return after all hooks
  if (!data || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
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
            {texts.pageTitle}
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-8">
            {texts.pageSubtitle}
          </p>
        </AnimatedSection>

        {sections.overview && (
          <AnimatedSection animation="fade-up" delay={100} className="mb-10">
            <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto grid md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center gap-3 md:col-span-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-neon bg-gradient-primary">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                  <p className="text-2xl font-bold">{projects.length}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-2 justify-end">
                {allBackendStacks.map((tech) => (
                  <Badge key={tech} variant="outline" className="glass text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {sections.filters && (
          <AnimatedSection animation="fade-up" delay={150} className="mb-10">
            <div className="glass-morphism p-6 rounded-2xl flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    {texts.filtersTitle}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Highlight experience with specific backend stacks and cloud providers.
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort: {sortOrder === 'current-first' ? 'Current First' : sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass">
                    <DropdownMenuItem onClick={() => setSortOrder('current-first')}>
                      Current First
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOrder('newest')}>
                      Newest First
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOrder('oldest')}>
                      Oldest First
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={backendFilter === 'All' ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setBackendFilter('All')}
                  >
                    All Backends
                  </Badge>
                  {allBackendStacks.map((tech) => (
                    <Badge
                      key={tech}
                      variant={backendFilter === tech ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setBackendFilter(tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Cloud className="h-4 w-4 text-primary" />
                  <Badge
                    variant={cloudFilter === 'All' ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setCloudFilter('All')}
                  >
                    All Clouds
                  </Badge>
                  {allCloudProviders.map((cloud) => (
                    <Badge
                      key={cloud}
                      variant={cloudFilter === cloud ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setCloudFilter(cloud)}
                    >
                      {cloud}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {sections.grid && (
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: any, index: number) => (
                <article
                  key={project.title + index}
                  className="glass rounded-2xl overflow-hidden hover:shadow-neon transition-all duration-500 card-3d flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 gradient-text">{project.title}</h3>
                        {project.domain && (
                          <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            {project.domain}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(project.startDate)} – {formatDate(project.endDate)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-5">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {(project.backendStacks || []).slice(0, 3).map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.androidUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 justify-center"
                        >
                          <a
                            href={project.androidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Android app on Google Play`}
                          >
                            Android
                          </a>
                        </Button>
                      )}
                      {project.iosUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 justify-center"
                        >
                          <a
                            href={project.iosUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} iOS app on App Store`}
                          >
                            iOS
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default Projects;
