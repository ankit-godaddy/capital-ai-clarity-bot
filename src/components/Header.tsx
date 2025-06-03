
import { Building2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 p-2 rounded-lg">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">GoDaddy Capital</h2>
            <p className="text-sm text-gray-600">Merchant Cash Advance Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
};
