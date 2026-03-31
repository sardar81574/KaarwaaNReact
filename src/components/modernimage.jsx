import React from 'react';

const ModernBentoGrid = () => {
 
  const cards = [
    {
      id: 1,
      title: "The Highlight",
      subtitle: "Featured Project",
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
   
      className: "md:col-span-2 md:row-span-2", 
    },
    {
      id: 2,
      title: "Landscape View",
      subtitle: "Wide Angle",
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
      // Wide Landscape (Spans 2 cols, 1 row)
      className: "md:col-span-2 md:row-span-1",
    },
    {
      id: 3,
      title: "Minimal",
      subtitle: "Design",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
      // Standard Card (1 col, 1 row)
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Portrait",
      subtitle: "Vertical Shot",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop",
      // Tall/Vertical (1 col, 2 rows)
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      title: "The Detail",
      subtitle: "Macro",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
      // Standard Card (1 col, 1 row)
      className: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-neutral-100 dark:bg-neutral-900">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          Selected Works
        </h2>
        <p className="text-neutral-500 mt-2">
          A collection of moments captured in time.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              group relative overflow-hidden rounded-3xl cursor-pointer 
              ${card.className}
            `}
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={card.src}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark Gradient Overlay (Visibility on Hover or Always) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Content Positioned at Bottom */}
            <div className="absolute bottom-0 left-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                {card.subtitle}
              </span>
              <h3 className="text-2xl font-semibold text-white mt-1">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default ModernBentoGrid;