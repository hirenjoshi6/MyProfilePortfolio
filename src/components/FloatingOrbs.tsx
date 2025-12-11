export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Large morphing orbs */}
      <div 
        className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/20 blur-[150px] animate-morph animate-float"
        style={{ animationDuration: '15s' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-secondary/25 blur-[140px] animate-morph animate-float"
        style={{ animationDelay: '2s', animationDuration: '18s' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/15 blur-[160px] animate-morph animate-float"
        style={{ animationDelay: '4s', animationDuration: '20s' }}
      />
      
      {/* Medium glowing orbs */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[100px] animate-morph"
        style={{ animationDelay: '1s', animationDuration: '12s' }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/15 blur-[120px] animate-morph"
        style={{ animationDelay: '3s', animationDuration: '14s' }}
      />
      
      {/* Small accent orbs */}
      <div 
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent/20 blur-[80px] animate-float animate-morph"
        style={{ animationDelay: '2.5s', animationDuration: '10s' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-primary/15 blur-[90px] animate-float animate-morph"
        style={{ animationDelay: '1.5s', animationDuration: '11s' }}
      />
      
      {/* Holographic overlay */}
      <div 
        className="absolute inset-0 opacity-30 animate-holographic"
        style={{
          background: 'var(--gradient-neural)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
