import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneMockup } from "./mockups/PhoneMockup";
import { BrowserMockup } from "./mockups/BrowserMockup";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link href="/signup">Join the Community</Link>
            </Button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <PhoneMockup>
                <div className="p-4 space-y-4">
                  <div className="h-8 w-24 bg-gray-800 rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-800 rounded" />
                    <div className="h-4 w-3/4 bg-gray-800 rounded" />
                    <div className="h-20 w-full bg-gray-800 rounded-lg mt-4" />
                  </div>
                </div>
              </PhoneMockup>
            </div>
            <div className="md:order-1 hidden md:block">
              <BrowserMockup>
                <div className="space-y-4">
                  <div className="h-8 w-48 bg-gray-800 rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-800 rounded" />
                    <div className="h-4 w-5/6 bg-gray-800 rounded" />
                    <div className="h-4 w-4/6 bg-gray-800 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-24 bg-gray-800 rounded-lg" />
                    <div className="h-24 bg-gray-800 rounded-lg" />
                  </div>
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

