import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useData } from '@/hooks/useData';
import { useConfig } from '@/hooks/useConfig';

const Footer = () => {
  const { data } = useData();
  const { config } = useConfig();

  if (!data || !config || !config.footer.isVisible) return null;

  const currentYear = new Date().getFullYear();
  const copyright = data.footer.copyright.replace('{year}', currentYear.toString());

  const iconMap: Record<string, any> = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };

  return (
    <footer className="glass border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold gradient-text mb-4">
              {data.personal.name}
            </h3>
            <p className="text-muted-foreground">{data.personal.title}</p>
          </div>

          {config.footer.showSocials && (
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {data.contact.socials.map((social: any) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {config.footer.showLinks && (
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="flex flex-col space-y-2">
                {data.footer.links.map((link: any) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {config.footer.showCopyright && (
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground animate-fade-in">
            <p>{copyright}</p>
            <p className="text-sm mt-2">{data.footer.developer}</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
