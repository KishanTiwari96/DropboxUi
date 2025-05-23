import { ArrowRight, LockIcon } from "lucide-react";

interface Testimonial {
  id: number;
  image: string;
  title: string;
  quote: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/testimonial1.jpg",
    title: "Testimonial",
    quote: `"The security of knowing our information is safe."`,
    description:
      "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share files securely.",
  },
  {
    id: 2,
    image: "/testimonial2.jpeg",
    title: "Testimonial",
    quote: `"Seriously impressive security features"`,
    description:
      "Tech influencer Justin Tse discusses why he trusts Dropbox to keep his content safe.",
  },
];

export default function Security() {
  return (
    <div className="bg-gray-900 text-white py-10 my-10">
      <div className=" text-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-col items-center mb-4">
              <LockIcon className="text-white size-10 mb-2" />
              <div className="text-3xl font-bold text-white">
                Security never comes second
              </div>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              From industry-leading encryption and tamper-proof documents to
              version history and recovery, Dropbox keeps your intellectual
              property safe and never sells or shares your data.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center ">
              <button className="mt-2 px-4 py-3 border font-bold border-white outline-1 rounded-xl text-gray-800  transition flex items-center">
                <span className="text-white">Get started free</span>
                <ArrowRight className="ml-2 text-white" />
              </button>
              <span className="underline mt-2 px-4 py-3 font-bold text-white rounded-lg  transition flex items-center">
                Learn more
                <ArrowRight className="ml-2" />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mt-12">

            <div className="flex flex-col ">
              <img
                src="/Security1.webp"
                alt="Image 1"
                className="w-36 h-40  shadow-lg object-cover relative z-20 -mb-8"
              />
              <img
                src="/Security4.webp"
                alt="Image 4"
                className="w-36 h-48  shadow-lg object-cover "
              />
            </div>

            <div className="relative flex flex-row items-center min-w-[350px]">
              <img
                src="/Security2.webp"
                alt="Image 2"
                className="h-104 w-80 shadow-lg object-cover"
              />
              <img
                src="/Security3.webp"
                alt="Image 3"
                className="h-96 w-96 shadow-lg object-contain absolute left-24 bottom-0 z-30 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="flex items-center p-6 gap-4">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${testimonial.id}`}
                    className="w-36 h-36  object-cover"
                  />
                  <div>
                    <h3 className="text-pink-500 font-semibold">{testimonial.title}</h3>
                    <blockquote className="italic text-white">{testimonial.quote}</blockquote>
                    <p className="text-gray-300 text-sm mt-2">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-lg font-semibold text-gray-400 mb-6">
          Trusted by the biggest companies in the world
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Mary Kay",
            "McLaren",
            "Sundance Film Festival",
            "Wag!",
            "Figma",
            "Greenhouse",
            "Hydro Flask",
            "Jamf",
          ].map((company, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

