import Header from "@/components/Header";
import AnalyzeForm from "@/components/AnalyzeForm";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        {/* Clean introduction section */}
        <div className="mb-12 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              What is the Ethics-in-AI Explorer?
            </h2>
            <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto">
              Enter your AI use case below and get instant risk analysis and mitigation strategies powered by AI.
            </p>
          </div>
          
        </div>
        
        <AnalyzeForm />
      </section>
      
      {/* Footer */}
      <footer className="w-full py-8 mt-16 border-t border-white/10">
        <div className="text-center space-y-2">
          <p className="text-slate-300 font-medium">Made by Wassim Gueraoui</p>
          <a href="mailto:wassimgueraoui@gmail.com" className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-200">
            wassimgueraoui@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}