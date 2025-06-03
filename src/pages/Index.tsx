
import { useState } from 'react';
import { ChatInterface } from '@/components/ChatInterface';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GoDaddy Capital Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get instant answers about our Merchant Cash Advance program. 
              Ask questions about eligibility, application process, repayment terms, and more.
            </p>
          </div>
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default Index;
