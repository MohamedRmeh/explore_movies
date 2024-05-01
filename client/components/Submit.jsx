import { CustomButtonGreen } from "@/components/data";

export default function Submit() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-neutral-900 rounded-xl">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/550] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2c2624] to-[#7ef94e] opacity-30  sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 96.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl  tracking-tight text-slate-100 sm:text-6xl">
            Discuss your favorite movie and collect feedback from others.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Engage in a detailed conversation about the film you hold dear,
            actively seeking and compiling feedback from those around you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CustomButtonGreen href="/submit">Submit Movie</CustomButtonGreen>
          </div>
        </div>
      </div>
    </div>
  );
}
