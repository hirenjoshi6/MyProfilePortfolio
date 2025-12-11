import { NavLink } from 'react-router-dom';
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useConfig } from '@/hooks/useConfig';
import { Button } from './ui/button';
import hjLogo from '@/assets/hj-logo-animated.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { useState, useEffect } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { config } = useConfig();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!config) return null;

  const navigation = config.header.navigation.filter((item: any) => item.isVisible);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-card' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group"
          >
            <img src={hjLogo} alt="HJ Logo" className="w-10 h-10 md:w-12 md:h-12 animate-pulse-glow hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-2xl font-bold gradient-text hidden sm:block">Hiren Joshi</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item: any) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9 md:h-10 md:w-10">
                  {theme === 'light' && <Sun className="h-4 w-4 md:h-5 md:w-5" />}
                  {theme === 'dark' && <Moon className="h-4 w-4 md:h-5 md:w-5" />}
                  {theme === 'system' && <Monitor className="h-4 w-4 md:h-5 md:w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] glass">
                <SheetTitle className="text-xl font-bold gradient-text mb-6">Menu</SheetTitle>
                <nav className="flex flex-col gap-3">
                  {navigation.map((item: any) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          isActive
                            ? 'bg-primary text-primary-foreground shadow-neon'
                            : 'hover:bg-muted text-foreground'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
