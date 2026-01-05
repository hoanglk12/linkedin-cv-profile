import ProfileHeader from '@/components/ProfileHeader';
import Introduction from '@/components/Introduction';
import DownloadButton from '@/components/DownloadButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 relative overflow-hidden">
      {/* Testing-themed background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 text-6xl">✓</div>
        <div className="absolute top-40 right-20 text-5xl">✗</div>
        <div className="absolute top-[60%] left-[15%] text-4xl">⚠</div>
        <div className="absolute bottom-32 right-[10%] text-6xl">✓</div>
        <div className="absolute top-[30%] right-[40%] text-5xl">✓</div>
        <div className="absolute bottom-[20%] left-[25%] text-4xl">🐛</div>
        <div className="absolute top-[70%] right-[30%] text-5xl">✗</div>
        <div className="absolute top-[15%] left-[60%] text-4xl">⚙</div>
      </div>
      
      {/* Code/terminal lines pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
      
      <div className="relative z-10">
      {/* Header with Download Button */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">LP</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Lincoln Pham
            </h1>
          </div>
          <DownloadButton variant="header" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden mb-10 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-white/50">
          <ProfileHeader />
        </div>

        {/* Introduction Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-10 mb-10 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-white/50">
          <Introduction />
        </div>

        {/* Bottom Download CTA */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-xl p-10 sm:p-12 text-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to learn more?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Download my complete CV to see my full professional history, detailed project experience, and accomplishments.
            </p>
            <DownloadButton variant="cta" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
           
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Lincoln Pham. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
