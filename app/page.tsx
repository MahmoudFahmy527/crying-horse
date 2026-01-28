import Hero from "@/components/hero";
import Tokenomics from "@/components/tokenomics";
import Graduation from "@/components/graduation";
import TopHolders from "@/components/top-holders";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Tokenomics />
      <TopHolders />
      <Graduation />
      <div className="bg-white/50 backdrop-blur-sm p-4 text-center font-body text-sm text-gray-500">
        <p>Not financial advice. It is just a crying horse.</p>
      </div>
    </main>
  );
}
