import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    // Create random stars
    const createStars = () => {
      const starsContainer = document.querySelector('.random-stars');
      starsContainer.innerHTML = '';
      
      const numberOfStars = 100;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'random-star';
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const size = 1 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
      }
    };

    // Create constellations
    const createConstellations = () => {
      const constellationsContainer = document.querySelector('.constellations');
      constellationsContainer.innerHTML = '';
      
      const constellations = [
        { // Orion-like
          points: [
            { x: 20, y: 20 }, { x: 25, y: 25 }, { x: 30, y: 30 },
            { x: 22, y: 35 }, { x: 28, y: 35 }
          ]
        },
        { // Big Dipper-like
          points: [
            { x: 60, y: 40 }, { x: 65, y: 42 }, { x: 70, y: 45 },
            { x: 75, y: 47 }, { x: 80, y: 50 }, { x: 82, y: 55 }
          ]
        },
        { // Cassiopeia-like
          points: [
            { x: 40, y: 70 }, { x: 45, y: 65 }, { x: 50, y: 70 },
            { x: 55, y: 65 }, { x: 60, y: 70 }
          ]
        }
      ];

      constellations.forEach(constellation => {
        const group = document.createElement('div');
        group.className = 'constellation-group';
        
        constellation.points.forEach((point, index) => {
          const star = document.createElement('div');
          star.className = 'constellation-star';
          star.style.left = `${point.x}%`;
          star.style.top = `${point.y}%`;
          group.appendChild(star);

          if (index < constellation.points.length - 1) {
            const line = document.createElement('div');
            line.className = 'constellation-line';
            const nextPoint = constellation.points[index + 1];
            
            const dx = nextPoint.x - point.x;
            const dy = nextPoint.y - point.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            line.style.left = `${point.x}%`;
            line.style.top = `${point.y}%`;
            line.style.width = `${length}%`;
            line.style.transform = `rotate(${angle}deg)`;
            
            group.appendChild(line);
          }
        });

        constellationsContainer.appendChild(group);
      });
    };

    // Create comets
    const createComet = () => {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.left = `${Math.random() * 100}vw`;
      comet.style.top = '0';
      
      document.querySelector('.space-background').appendChild(comet);
      setTimeout(() => comet.remove(), 2000);
    };

    createStars();
    createConstellations();
    const cometInterval = setInterval(createComet, 3000);

    window.addEventListener('resize', () => {
      createStars();
      createConstellations();
    });

    return () => {
      clearInterval(cometInterval);
      window.removeEventListener('resize', createStars);
      window.removeEventListener('resize', createConstellations);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative mx-auto my-0">
      {/* Space Background */}
      <div className="space-background fixed inset-0">
        <div className="random-stars"></div>
        <div className="constellations"></div>
      </div>

      {/* Header Section */}
      <header className="relative h-screen flex items-center justify-center bg-transparent">
        <div className="text-center z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-glow">
            Simarpal Central
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cyan-300 animate-pulse">
            Your gateway to the future of education
          </p>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Notes of all subjects",
                description: "We provide notes of all subjects for all branches of engineering"
              },
              {
                title: "Quiz and Assignments",
                description: "Test your knowledge with interactive quizzes and submit assignments created by your professors"
              },
              {
                title: "Seamless Integration",
                description: "Our platform integrates with your university's systems to provide a seamless experience"
              }
            ].map((feature, index) => (
              <div key={index} className="group transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-black to-blue-900/30 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm shadow-2xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
            Academic Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Notes",
                icon: "📚",
                description: "Access comprehensive study materials and lecture notes"
              },
              {
                title: "Assignments",
                icon: "✍️",
                description: "Track and submit your assignments on time"
              },
              {
                title: "Quizzes",
                icon: "❓",
                description: "Test your knowledge with interactive quizzes"
              },
              {
                title: "Previous Year Papers",
                icon: "📝",
                description: "Prepare with past examination papers"
              }
            ].map((resource, index) => (
              <div key={index} className="group transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-black to-blue-900/30 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm shadow-2xl h-full">
                  <div className="text-4xl mb-4 text-center">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 text-center mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-center">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-black via-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Thank You, Manipal University Jaipur
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            For fostering innovation, excellence, and providing a platform for students to reach their highest potential.
            Together, we're building the future of education.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">About Us</h3>
              <p className="text-gray-300">
                Simarpal Central is your comprehensive platform for academic excellence,
                designed to enhance your learning journey at Manipal University Jaipur.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: simarpal@gmail.com<br />
                Location: Manipal University Jaipur<br />
                Dehmi Kalan, Near GVK Toll Plaza<br />
                Jaipur, Rajasthan
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan-500/20 rounded-full">
                    <span className="text-xl">📱</span>
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan-500/20 rounded-full">
                    <span className="text-xl">💌</span>
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan-500/20 rounded-full">
                    <span className="text-xl">🌐</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-gray-300">
            © 2025 Simarpal Central. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .space-background {
          background: radial-gradient(circle at center, #000235 0%, #000000 100%);
        }

        .random-star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        .constellation-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
          box-shadow: 0 0 10px white, 0 0 20px cyan;
        }

        .constellation-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0.2) 50%, rgba(0,255,255,0.1) 100%);
          transform-origin: left center;
          opacity: 0;
          animation: appear 2s forwards;
        }

        @keyframes appear {
          from { opacity: 0; }
          to { opacity: 0.3; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .comet {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          animation: cometMove 2s linear forwards;
        }

        .comet::before {
          content: '';
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(to left, transparent, rgba(255,255,255,0.8));
          transform: translateX(-98px);
        }

        @keyframes cometMove {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(100vw, 100vh) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(64, 190, 255, 0.5); }
          50% { text-shadow: 0 0 30px rgba(64, 190, 255, 0.8); }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )

}

export default HomePage;

