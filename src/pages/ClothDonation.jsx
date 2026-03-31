import React, { useState, useEffect } from 'react';
import { Shirt, HeartHandshake, Snowflake, Sun, PackageOpen, ArrowRight } from 'lucide-react';

// --- MOCK DATA FOR CAROUSEL ---
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "Volunteers sorting clothes",
    headline: "Warmth for Everyone",
    subhead: "Sharing comfort, one garment at a time."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    alt: "Winter clothing distribution",
    headline: "Defeating the Cold",
    subhead: "Winter drives for the homeless."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    alt: "Happy child receiving clothes",
    headline: "More Than Fabric",
    subhead: "Giving dignity and confidence."
  }
];

// --- MOCK DATA FOR GALLERY CARDS ---
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606907568273-547f10eb6136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Slum Area Drive",
    description: "Distributed over 500 kits of summer wear in dense urban settlements last month."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1578357078588-8442607e69cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Winter Blanket Mission",
    description: "Providing heavy woolens and blankets to pavement dwellers during peak winter."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Sorting Day at GEC",
    description: "Volunteers categorizing donations by age and size to ensure dignified giving."
  }
];


const ClothDonationSection = () => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-800">

      {/* ================= SECTION 1: HERO CAROUSEL ================= */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-slate-900">
        {carouselImages.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image with dark overlay */}
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover opacity-60" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
                {slide.headline}
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md max-w-2xl">
                {slide.subhead}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2">
                Donate Clothes Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Carousel Indicators/Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* ================= SECTION 2: INFO WITH "STICKER" BACKGROUND ================= */}
      {/* Creative interpretation: Using a subtle patterned background with low-opacity icons scattered */}
      <section className="relative py-24 overflow-hidden bg-amber-50">
        
        {/* --- Decorative Background Elements (The "Stickers") --- */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            {/* Simple repeating pattern effect using CSS radial gradient */}
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
           
           {/* Floating large icons */}
           <Shirt className="absolute top-10 left-[10%] w-32 h-32 text-orange-300 rotate-[-15deg]" />
           <PackageOpen className="absolute bottom-10 right-[15%] w-40 h-40 text-orange-300 rotate-[10deg]" />
           <HeartHandshake className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-orange-200 opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6 tracking-wider uppercase">
            Clothing Initiative
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            Restoring Dignity, One Layer at a Time
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6 font-medium">
            <p>
              Clothing is more than just fabric stitched together; it is a basic human need that offers dignity, protection, and confidence. 
            </p>
            <p>
              At Kaarwaa.N, we believe that forgotten clothes in your wardrobe can become a prized possession for someone else. Our drive focuses on collecting usable garments and ensuring they reach the hands of those who need them most, bridging the gap between excess and scarcity.
            </p>
          </div>
        </div>
        {/* Creative bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0 leading-none translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white h-24 md:h-32 w-full">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
      </section>


      {/* ================= SECTION 3: THE NEED & CURRENT SITUATION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left: The Harsh Reality */}
            <div className="flex-1 bg-red-50 p-8 rounded-3xl border-l-4 border-red-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                   <Snowflake className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">The Harsh Reality</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Millions in India face the elements without adequate protection. The "current situation" is dire:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5"></span>
                  <p className="text-slate-700">Winters are fatal for pavement dwellers due to lack of warm clothing.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5"></span>
                  <p className="text-slate-700">Children in slums often suffer from skin infections due to wearing unhygienic, tattered clothes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5"></span>
                  <p className="text-slate-700">The economic divide means buying new clothes is a luxury many cannot afford.</p>
                </li>
              </ul>
            </div>

            {/* Right: Kaarwaan's Intervention */}
            <div className="flex-1 bg-emerald-50 p-8 rounded-3xl border-l-4 border-emerald-400">
               <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-full">
                   <Sun className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Kaarwaa.N's Response</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We refuse to let this be the norm. Our intervention focuses on organized, dignified distribution:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <p className="text-slate-700">We don't just "dump" clothes. We sort them by size and gender to ensure useful donation.</p>
                </li>
                <li className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <p className="text-slate-700">We execute targeted winter drives focused on blankets and woolens.</p>
                </li>
                <li className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <p className="text-slate-700">We ensure clothes are clean and wearable before they reach the beneficiaries.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SECTION 4: IMAGE CARDS (IMPACT GALLERY) ================= */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Moments of Warmth</h2>
             <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Glimpses from our recent distribution drives, bringing smiles through generosity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                {/* Card Image container with overflow hidden for zoom effect */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                   {/* Decorative icon on image */}
                   <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full z-20 text-orange-500">
                     <Shirt size={20} />
                   </div>
                </div>
                
                {/* Card Content */}
                <div className="p-8 relative">
                   {/* Creative orange accent line */}
                   <div className="absolute top-0 left-8 right-8 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ClothDonationSection;