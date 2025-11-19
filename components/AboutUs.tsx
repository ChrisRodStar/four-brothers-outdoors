export default function AboutUs() {
  return (
    <section id="about" className="bg-[#F2F0E9] py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Top decorative element */}
        <div className="flex justify-center mb-16">
          <span className="font-serif italic text-stone-500 text-6xl opacity-60">iv</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          {/* Left Column: Headline & Kicker */}
          <div className="md:col-span-5 flex flex-col justify-center text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase mb-6 block">
              The Collective
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-[1.1] mb-8">
              Built on <br />
              <span className="italic text-stone-600">Friendship</span>. <br />
              Driven by <br />
              <span className="italic text-stone-600">Design</span>.
            </h2>
            <div className="w-12 h-[1px] bg-stone-900 hidden md:block"></div>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="space-y-8 text-lg md:text-xl font-light text-stone-700 leading-relaxed">
              <p>
                We&rsquo;re four friends who realized that the traditional path wasn&rsquo;t built for us. Instead of classrooms, we chose craftsmanship. Instead of corporate ladders, we chose to build something real, from the ground up.
              </p>
              <p>
                Four Brothers Outdoors isn&rsquo;t just a landscaping company—it&rsquo;s a promise. A promise to bring energy, modern perspective, and unwavering dedication to every project we touch.
              </p>
              <p className="font-serif text-2xl text-stone-900 italic pt-4">
                &ldquo;We treat your home like our legacy.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Core Values (Typographic) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-stone-300/50">
          {[
            { label: 'Established', value: '2025' },
            { label: 'Location', value: 'North Carolina' },
            { label: 'Commitment', value: '100% Quality' },
            { label: 'Approach', value: 'Family Owned' }
          ].map((item) => (
            <div key={item.label} className="text-center md:text-left group cursor-default">
              <div className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-2 group-hover:text-green-800 transition-colors">{item.label}</div>
              <div className="font-serif text-2xl md:text-3xl text-stone-900">{item.value}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
