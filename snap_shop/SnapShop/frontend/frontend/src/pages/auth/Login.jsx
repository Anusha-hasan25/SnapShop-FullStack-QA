import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-10 shadow-sm border border-gray-100">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900 tracking-tight">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-widest text-[10px]">
            SnapShop Jewelry & Co.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-black outline-none transition-all text-sm"
                  required
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-black outline-none transition-all text-sm"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-black outline-none transition-all text-sm"
                required
              />
            </div>
          </div>

          <button className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-[11px] font-bold uppercase tracking-widest text-white bg-black hover:bg-gray-900 transition-all">
            {isLogin ? 'Sign In' : 'Register Now'}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </form>

        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors border-b border-transparent hover:border-black"
          >
            {isLogin ? "New to SnapShop? Create an account" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;