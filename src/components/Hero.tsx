import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="pt-28 pb-72 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transform Your Habits,
            <span className="block text-purple-500">Together</span>
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8 sm:mb-10">
            Plynt is more than just a habit tracker. It&#39;s a community-driven
            platform that turns personal growth into a shared journey. Build
            habits, connect with like-minded individuals, and celebrate each
            other&#39;s progress.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              asChild
            >
              <Link href="/signup" className="hover hover:bg-purple-300">
                Join the Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
