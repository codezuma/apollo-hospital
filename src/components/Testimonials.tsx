import React from 'react';

export default function Testimonials({ testimonials }:any) {
  return (
    <section id="testimonials" className="container-main bg-blue-50 pt-10 -mt-10 w-full">
      <div className="px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-secondary">
                Testimonials
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                What our Client Say
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                See what our patients are saying about us. Real reviews, real smiles.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {testimonials.map((testimonial:any, index:number) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
              <div className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial">
                <div className="ud-testimonial-ratings mb-3 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="mr-1 text-[#fbb040]">
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path
                          d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    {testimonial.content}
                  </p>
                </div>
                <div className="ud-testimonial-info flex items-center">
                  <div className="ud-testimonial-meta">
                    <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
