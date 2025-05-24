import { ArrowRight, User2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Collaboration() {
  return (
    <section className="bg-white min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-3 py-1 mb-4 bg-rose-800 border border-rose-300 rounded-full shadow-sm">
          <User2 className="text-white size-4 mr-2" />
          <span className="text-white font-semibold text-sm">
            Collaboration
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
          Instant sharing keeps work flowing
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto px-4">
          Secure links, real-time syncing, and large file transfers keep your team and partners connected so collaboration stays seamless.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-4">
          <button className="mt-2 px-4 py-3 border font-bold border-black outline-1 rounded-lg text-gray-800 hover:bg-gray-100 transition flex items-center ">
            Learn more
            <ArrowRight className="ml-2" />
          </button>
          <span className="underline mt-2 px-4 py-3  font-bold  rounded-lg text-gray-800 hover:bg-gray-100 transition flex items-center ">
            Get started free
            <ArrowRight className="ml-2" />
          </span>

        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Reveal>
            <div className="relative rounded-xl overflow-hidden shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto">
              <img
                src="/Collaboration1.webp"
                alt="Dropbox Share UI"
                className="rounded-xl w-full h-auto object-contain"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="hidden md:block w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md h-auto">
              <img
                src="/Collaboration2.webp"
                alt="Team Collaboration"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
