import React from 'react';
import { FaArrowRight, FaHeart } from 'react-icons/fa';


const navbarData = [
  {
    id: 1,
    name: "Basic",
    tagline: "Basic Navbar Navigation",
    description: "Elegant vertical timeline navigation with interactive progress indicators.",
    features: ["Progress Tracking", "Vertical Layout", "Smooth Scrolling"],
    category: "Modern",
    path: "/navbar1",
  },
  {
    id: 2,
    name: "Minimal Stripe",
    tagline: "Clean & Modern Navigation",
    description: "Minimalist horizontal navbar with subtle hover effects.",
    features: ["Clean Design", "Responsive Layout", "Smart Dropdowns"],
    category: "Minimal", 
    path: "/navbar2",
  },
  {
    id: 3,
    name: "Command Center",
    tagline: "Power User Navigation",
    description: "Advanced command palette with keyboard shortcuts.",
    features: ["Keyboard Shortcuts", "Search", "Quick Actions"],
    category: "Premium",
    path: "/navbar3",
  },
  {
    id: 4,
    name: "Timeline Flow",
    tagline: "Vertical Timeline Navigation", 
    description: "Elegant vertical timeline navigation with interactive progress indicators.",
    features: ["Progress Tracking", "Vertical Layout", "Smooth Scrolling"],
    category: "Unique",
    path: "/navbar4",
  },
  {
    id: 5,
    name: "Magnetic Touch",
    tagline: "Interactive Hover Effects",
    description: "Magnetic interaction effects with cursor-following animations.",
    features: ["Magnetic Effects", "Mouse Tracking", "Fluid Animation"],
    category: "Interactive",
    path: "/navbar5",
  },
  {
    id: 6,
    name: "Split View",
    tagline: "Dual-tone Navigation",
    description: "Split-screen navigation with dynamic transitions and morphing effects.",
    features: ["Split Layout", "Theme Toggle", "Search Modal"],
    category: "Modern",
    path: "/navbar6",
  },
  {
    id: 7,
    name: "Eclipse Nav",
    tagline: "Circular Progress Navigation",
    description: "Circular navigation system with progress indicators and animations.",
    features: ["Circular Design", "Progress Ring", "Animated Icons"],
    category: "Creative",
    path: "/navbar7",
  },
  {
    id: 8,
    name: "Crystal Glass",
    tagline: "Premium Glass Effects",
    description: "Multi-layered glassmorphic navigation with profile and notification system.",
    features: ["Glass UI", "Notifications", "Profile Menu"],
    category: "Premium",
    path: "/navbar8",
  },
  {
    id: 9,
    name: "Radial Menu",
    tagline: "Circular Action Menu",
    description: "Expandable radial menu with floating action buttons.",
    features: ["Radial Layout", "Spring Animations", "Touch Friendly"],
    category: "Interactive",
    path: "/navbar9",
  },
  {
    id: 10,
    name: "Frost UI",
    tagline: "Modern Command Center",
    description: "Command center style navigation with search and notifications.",
    features: ["Command Bar", "Quick Search", "Notification Hub"],
    category: "Premium",
    path: "/navbar10",
  }
];

const NavbarCard = ({ navbar }) => {
  const neonColors = {
    1: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.4)]",
      accent: "from-purple-500",
      text: "group-hover:text-purple-400"
    },
    2: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)]",
      accent: "from-blue-500",
      text: "group-hover:text-blue-400"
    },
    3: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)]",
      accent: "from-emerald-500",
      text: "group-hover:text-emerald-400"
    },
    4: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.4)]",
      accent: "from-rose-500",
      text: "group-hover:text-rose-400"
    },
    5: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)]",
      accent: "from-amber-500",
      text: "group-hover:text-amber-400"
    },
    6: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(14,165,233,0.4)]",
      accent: "from-sky-500",
      text: "group-hover:text-sky-400"
    },
    7: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(217,70,239,0.4)]",
      accent: "from-fuchsia-500",
      text: "group-hover:text-fuchsia-400"
    },
    8: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(132,204,22,0.4)]",
      accent: "from-lime-500",
      text: "group-hover:text-lime-400"
    },
    9: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.4)]",
      accent: "from-red-500",
      text: "group-hover:text-red-400"
    },
    10: {
      glow: "group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]",
      accent: "from-indigo-500",
      text: "group-hover:text-indigo-400"
    }
  };

  return (
    <div className={`
      group relative rounded-2xl p-0.5
      transition-all duration-500 ease-out
      bg-gradient-to-br from-gray-800 to-gray-900
      ${neonColors[navbar.id].glow}
      hover:scale-[1.02]
    `}>
      <div className="relative h-full p-6 rounded-2xl
                    bg-gray-950 border border-white/5">
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-10
          transition-opacity duration-500 bg-gradient-to-br
          ${neonColors[navbar.id].accent} to-transparent
          rounded-2xl
        `}/>
        
        <div className="relative z-10 flex flex-col h-full">
          <h3 className={`
            text-2xl font-bold 
            bg-gradient-to-br from-white to-gray-400 
            bg-clip-text text-transparent
            ${neonColors[navbar.id].text}
          `}>
            {navbar.name}
          </h3>
          
          <p className="mt-2 text-sm font-medium text-gray-400">
            {navbar.tagline}
          </p>
          
          <p className="mt-4 text-gray-300 leading-relaxed">
            {navbar.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {navbar.features.map((feature, index) => (
              <span key={index} 
                    className="px-3 py-1 text-xs font-medium rounded-full
                             bg-white/5 text-gray-400 border border-white/10
                             hover:bg-white/10 transition-colors">
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-6">
            <span className="px-3 py-1 text-xs font-medium rounded-full
                           bg-white/5 text-gray-500">
              {navbar.category}
            </span>
            
            <a href={navbar.path}
               className={`
                 flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-white/5 text-gray-300 
                 hover:bg-white/10 transition-all duration-300
                 ${neonColors[navbar.id].text}
               `}>
              Preview
              <FaArrowRight className="transition-transform 
                                     group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageNav = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                      from-gray-800/20 via-gray-900/20 to-black pointer-events-none"/>
      
      <header className="relative pt-24 pb-2 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold tracking-tight
                         bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Navigation Collection
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Explore handcrafted collection of modern navigation components
          </p>
          
        </div>
      </header>

      <main className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {navbarData.map(navbar => (
            <NavbarCard key={navbar.id} navbar={navbar} />
          ))}
        </div>
      </main>

      <footer className="relative py-3  border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="flex items-center justify-center text-gray-400">
            Built with <FaHeart className="mx-2 text-rose-500 " /> for developers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PageNav;