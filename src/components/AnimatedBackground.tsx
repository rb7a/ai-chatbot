import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-900"></div>
      
      {/* Círculos flotantes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gray-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
