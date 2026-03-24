import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Send, Search, Smartphone, ShieldCheck, Mail, MapPin, Book } from 'lucide-react';
import Navbar from '../components/Navbar';

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    subject: '',
    class: '',
    mode: '',
    budget: '',
    location: '',
    phone: '',
    name: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="lead-form-page bg-surface min-h-screen pt-40 pb-32">
      <Navbar />
      
      <div className="container max-w-2xl">
         <div className="form-wrapper glass-card p-12 rounded-[48px] shadow-2xl bg-white relative overflow-hidden">
            {/* Progress Header */}
            <div className="progress-bar flex gap-2 mb-12">
               {[1,2,3,4].map(s => (
                 <div 
                   key={s} 
                   className={`h-2 flex-1 rounded-full ${s <= step ? 'bg-primary' : 'bg-gray-100'}`}
                   transition={{ duration: 0.3 }}
                 />
               ))}
            </div>
            
            <AnimatePresence mode="wait">
               {step === 1 && (
                 <motion.div 
                   key="step1"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="step-content"
                 >
                   <h2 className="mb-4">What's the goal?</h2>
                   <p className="text-muted mb-8">Tell us which subject and class you're looking for.</p>
                   
                   <div className="flex flex-col gap-6">
                      <div className="input-group">
                         <label className="flex center gap-2 font-bold mb-3"><Book size={18} /> Subject Name</label>
                         <input 
                           type="text" 
                           placeholder="e.g. Mathematics, JEE Physics" 
                           className="modern-input"
                           value={formData.subject}
                           onChange={e => setFormData({...formData, subject: e.target.value})}
                         />
                      </div>
                      <div className="input-group">
                         <label className="flex center gap-2 font-bold mb-3"><Search size={18} /> Class / Level</label>
                         <select 
                           className="modern-select"
                           value={formData.class}
                           onChange={e => setFormData({...formData, class: e.target.value})}
                         >
                            <option value="">Select Level</option>
                            <option value="6-10">Classes 6 - 10</option>
                            <option value="11-12">Classes 11 - 12</option>
                            <option value="JEE/NEET">JEE / NEET Aspirant</option>
                            <option value="Degree">Bachelor / Master Degree</option>
                         </select>
                      </div>
                   </div>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div 
                   key="step2"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="step-content"
                 >
                   <h2 className="mb-4">Learning Preferences</h2>
                   <p className="text-muted mb-8">Help us narrow down the perfect match.</p>
                   
                   <div className="flex flex-col gap-6">
                      <div className="input-group">
                         <label className="flex center gap-2 font-bold mb-3">Teaching Mode</label>
                         <div className="flex gap-4">
                            {['Online', 'At Home (Offline)', 'Small Center'].map(m => (
                              <div 
                                key={m}
                                onClick={() => setFormData({...formData, mode: m})}
                                className={`flex-1 p-4 rounded-2xl border-2 text-center font-bold cursor-pointer hover:border-primary transition-all ${formData.mode === m ? 'border-primary bg-blue-50 text-primary' : 'border-gray-100 bg-white'}`}
                              >
                                {m}
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="input-group mt-4">
                         <label className="flex center gap-2 font-bold mb-3">Hourly Budget (₹)</label>
                         <input 
                           type="number" 
                           placeholder="e.g. 500" 
                           className="modern-input"
                           value={formData.budget}
                           onChange={e => setFormData({...formData, budget: e.target.value})}
                         />
                      </div>
                   </div>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div 
                   key="step3"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="step-content"
                 >
                   <h2 className="mb-4">Where are you?</h2>
                   <p className="text-muted mb-8">This helps matches for offline/hybrid sessions.</p>
                   <div className="input-group">
                      <label className="flex center gap-2 font-bold mb-3"><MapPin size={18} /> Location (Area/City)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. South Delhi, Delhi" 
                        className="modern-input"
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                      />
                   </div>
                 </motion.div>
               )}

               {step === 4 && (
                 <motion.div 
                   key="step4"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="step-content text-center"
                 >
                   <div className="flex center justify-center mb-8">
                     <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full">
                       <ShieldCheck size={48} />
                     </div>
                   </div>
                   <h2 className="mb-4">Verification Success!</h2>
                   <p className="text-muted mb-12">One last step to unlock your potential tutors.</p>
                   
                   <div className="flex flex-col gap-6 text-left max-w-sm mx-auto">
                      <div className="input-group">
                         <label className="flex center gap-2 font-bold mb-3">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="Searcher's Name" 
                           className="modern-input"
                           value={formData.name}
                           onChange={e => setFormData({...formData, name: e.target.value})}
                         />
                      </div>
                      <div className="input-group">
                         <label className="flex center gap-2 font-bold mb-3"><Smartphone size={18} /> Phone Number (OTP Verified)</label>
                         <input 
                           type="tel" 
                           placeholder="+91" 
                           className="modern-input"
                           value={formData.phone}
                           onChange={e => setFormData({...formData, phone: e.target.value})}
                         />
                      </div>
                   </div>
                 </motion.div>
               )}
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex between mt-16 pt-8 border-t border-gray-100">
               <button 
                 className={`btn p-4 rounded-2xl font-bold flex center gap-2 ${step === 1 ? 'invisible' : 'bg-gray-100 text-gray-700'}`}
                 onClick={prevStep}
               >
                 <ChevronLeft size={20} /> Previous
               </button>
               
               {step < totalSteps ? (
                 <button 
                    disabled={!formData.subject && step === 1}
                    className="btn grad-primary text-white !px-12 !py-4 rounded-2xl font-bold shadow-lg flex center gap-2 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                    onClick={nextStep}
                 >
                    Next Step <ChevronRight size={20} />
                 </button>
               ) : (
                 <button 
                    className="btn bg-emerald-500 text-white !px-12 !py-4 rounded-2xl font-bold shadow-lg flex center gap-2 hover:bg-emerald-600"
                    onClick={() => window.location.href = '/marketplace'}
                 >
                    Get Matched Instantly <Send size={20} />
                 </button>
               )}
            </div>
         </div>
         
         <div className="mt-8 text-center text-sm text-gray-500 font-medium">
           🔒 Your data is private. We only share it with matched tutors.
         </div>
      </div>

      <style>{`
        .modern-input, .modern-select {
          width: 100%;
          padding: 16px 24px;
          border-radius: 16px;
          border: 1px solid var(--border);
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s;
          background: #fafafa;
        }
        .modern-input:focus, .modern-select:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        .form-wrapper { border: 1px solid rgba(0,0,0,0.04); }
      `}</style>
    </div>
  );
};

export default LeadForm;
