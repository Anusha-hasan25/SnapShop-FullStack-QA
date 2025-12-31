import React from 'react';
import { X } from 'lucide-react';

const SizeGuideModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeData = [
    { mm: "15.7", us: "5" },
    { mm: "16.5", us: "6" },
    { mm: "17.3", us: "7" },
    { mm: "18.1", us: "8" },
    { mm: "19.0", us: "9" },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white relative z-10 w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors">
          <X size={24} />
        </button>
        <h2 className="serif text-2xl text-center mb-6 tracking-widest uppercase">Ring Size Guide</h2>
        <table className="w-full text-center text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-3 uppercase tracking-wider text-[10px]">Diameter (mm)</th>
              <th className="py-3 uppercase tracking-wider text-[10px]">US Size</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 text-gray-600">{row.mm} mm</td>
                <td className="py-3 font-bold">{row.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[10px] text-gray-400 mt-6 text-center italic">Measure the inside diameter of a ring that fits you perfectly.</p>
      </div>
    </div>
  );
};

export default SizeGuideModal;