import React from 'react';
import { CTAButton } from './components/buttons/CTAButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        50 Green Call-to-Action Buttons
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
            <CTAButton variant={(i + 1) as any} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;