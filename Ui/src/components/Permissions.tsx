import { ArrowRight, LockIcon } from "lucide-react"
import { useRef } from "react";

export default function ProtectContentSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="min-h-screen py-20 px-4 md:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-3 py-1 mb-4 bg-black border border-black rounded-full shadow-sm">
          <LockIcon className="text-white size-4 mr-2" />
          <span className="text-white font-semibold text-sm">Permissions</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Protect all your content
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Dash makes it easy to find files across apps and safeguard sensitive content. With AI-powered search and universal access controls, your team stays connected, efficient, and secure.
        </p>

        <div className="flex justify-center">
          <button className="mt-2 px-4 py-3 border font-bold border-black outline-1 rounded-lg text-gray-800 hover:bg-gray-100 transition flex items-center ">
            Learn more
            <ArrowRight className="ml-2" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <video
            ref={videoRef}
            className="rounded-xl mb-8 md:mb-0"
            width="550"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
            muted
            loop
          >
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="relative rounded-xl overflow-hidden shadow-xl w-full md:w-[650px] h-auto">
            <img
              src="/permission2.webp"
              alt="Admin Console UI"
              width={650}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
