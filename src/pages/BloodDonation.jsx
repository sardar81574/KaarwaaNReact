import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Heart, Activity, Phone, MapPin, Search, AlertCircle, Clock } from 'lucide-react';

const BloodDonation = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="min-h-screen bg-white pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Activity size={18} />
              Emergency Response
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Be the <span className="text-red-600">Reason</span> <br />
              Someone Smiles.
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
              Kaarwaa.N... connects voluntary blood donors with patients in Jabalpur. 
              One unit of your blood can save up to three lives. Join our life-saving network today.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                <Heart size={20} fill="white" />
              Contact As Donor
              </button>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-red-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                  <Droplet className="text-red-600" />
                  Select Your Blood Group
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {bloodGroups.map((group) => (
                    <button 
                      key={group}
                      className="aspect-square flex items-center justify-center bg-white border-2 border-red-100 rounded-2xl text-lg font-bold text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
                    >
                      {group}
                    </button>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100 flex items-start gap-3">
                  <AlertCircle className="text-red-500 shrink-0" size={20} />
                  <p className="text-xs text-red-800 font-medium">
                    Please ensure you are at least 18 years old, weigh over 45kg, and have not donated blood in the last 3 months.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-red-200/30 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 mb-6">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Quick Process</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Donation takes less than 15 minutes. Our team ensures a safe and comfortable experience.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-600 mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Local Network</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Serving major hospitals across Jabalpur including Medical College and private centers.
            </p>
          </div>
          <div className="p-8 bg-red-600 rounded-3xl text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Emergency?</h4>
            <p className="text-sm text-red-100 mb-6">
              Contact our 24/7 blood coordinator for immediate requirements.
            </p>
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="inline-block w-full py-3 bg-white text-red-600 text-center rounded-xl font-bold hover:bg-red-50 transition-colors"
            >
              Call Coordinator
            </a>
          </div>
        </div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-r from-gray-900 to-black rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-8 justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Join our WhatsApp Community</h2>
            <p className="text-gray-400">Receive instant alerts for urgent blood requirements near you.</p>
          </div>
          <button className="px-10 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Join Now
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default BloodDonation;