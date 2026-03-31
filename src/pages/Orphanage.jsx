import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Users, Smile, HandHeart, Quote } from 'lucide-react';
import Footer from '../components/footer';
// --- PLACEHOLDER IMAGES (Replace with your actual assets) ---
const heroImg = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop";
const storyImg = "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"; // Father/Child hugging
const act1 = "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?q=80&w=1887&auto=format&fit=crop"; // Playing games
const act2 = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"; // Teaching
const act3 = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"; // Food

const OrphanageVisit = () => {
  return (
    <div className="min-h-screen bg-orange-50/30 font-sans text-slate-800 selection:bg-rose-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Happy Children" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-orange-500 rounded-full animate-pulse">
                <Heart size={16} fill="white" />
              </span>
              <span className="font-bold tracking-widest uppercase text-orange-200 text-sm">Spreading Smiles</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              A Home Away <br/> From <span className="text-orange-400">Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-light border-l-4 border-orange-500 pl-6">
              "We cannot do great things on this Earth, only small things with great love."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE FEATURED STORY --- */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Stories of Hope</h2>
          <p className="text-slate-500">Every visit leaves a mark, but some stories change lives forever.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-orange-100">
          <div className="grid md:grid-cols-2">
            
            {/* Image Side (Polaroid Style) */}
            <div className="relative h-full min-h-[400px] bg-orange-100 p-8 flex items-center justify-center">
               {/* Decorative patterns */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
               
               <motion.div 
                 whileHover={{ scale: 1.02, rotate: -2 }}
                 className="relative bg-white p-4 pb-16 shadow-2xl rotate-2 transform transition-all duration-500 max-w-sm"
               >
                 <img src={storyImg} alt="Reunion" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-slate-600 font-bold text-xl">
                   "The Reunion"
                 </div>
                 {/* Pin Icon */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-lg border-2 border-white"></div>
               </motion.div>
            </div>

            {/* Text Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                <Home size={32} /> A Child Who Met His Parents
              </h3>
              
              <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  This is a story of a child who was lost in this big world full of unknown faces.
                </p>
                <p>
                  On a random visit to the orphanage, Kaarwaa.N members found him sitting unnoticed in the corner, looking in despair. He remained silent for some time when we tried to know the reason behind the sorrow that was etched on his face.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 italic text-slate-700">
                  "Suddenly he started crying, hugged one of the Kaarwaa.N members, and narrated his sorrowful story to us."
                </div>
                <p>
                  He had run away from home due to family issues. The orphanage staff had found him and brought him to safety, where he had been staying for over a week.
                </p>
                <p>
                  The Kaarwaa.N team refused to give up. We made efforts, traced contacts, and tried our best. At last, <strong className="text-orange-600">we found his parents.</strong> We were able to reunite this innocent lost child with his family.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Mission Accomplished</span>
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (Cards) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
             <div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Activities</span>
                <h2 className="text-4xl font-black text-slate-900 mt-2">More Than Just a Visit</h2>
             </div>
             <button className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:translate-x-2 transition-transform">
               View Gallery <Users size={20} />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
              <img src={act1} alt="Games" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <Smile className="mb-3 text-yellow-400" />
                <h3 className="text-xl font-bold">Games & Joy</h3>
                <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Bringing laughter back to the corridors.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
              <img src={act2} alt="Teaching" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <Quote className="mb-3 text-orange-400" />
                <h3 className="text-xl font-bold">Moral Support</h3>
                <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Being a brother, a sister, and a friend.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
              <img src={act3} alt="Food" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <HandHeart className="mb-3 text-rose-400" />
                <h3 className="text-xl font-bold">Food & Essentials</h3>
                <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Sharing meals, sharing love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT BANNER --- */}
      <section className="py-24 bg-orange-600 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
          >
            <HandHeart size={64} className="mx-auto mb-6 text-orange-200" />
            <h2 className="text-3xl md:text-5xl font-black mb-6">"Kaarwaa.N always acts as a helping hand for the needy."</h2>
            <p className="text-orange-100 text-lg mb-8">
              We don't just visit; we connect. Join us in our next visit and experience the pure joy of unconditional love.
            </p>
            <button className="bg-white text-orange-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-50 transition-colors">
              Join Our Next Visit
            </button>
          </motion.div>
        </div>
      </section>
<Footer/>
    </div>
  );
};

export default OrphanageVisit;