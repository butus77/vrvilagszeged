import React from "react";
export default function MapSection(): React.JSX.Element {

    return (
      <section className="my-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Hol találsz minket</h2>
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] lg:w-[500px] border-2 border-[#43AFAF] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.595210827251!2d20.143464075364083!3d46.258274380109285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744899c12f8806f%3A0x9a92aca4d75844f5!2sVR%20Vil%C3%A1g%20Szeged!5e0!3m2!1sde!2sat!4v1748953616805!5m2!1sde!2sat"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    );
  }
  
  