import React from "react";
import { motion } from "framer-motion";

export const YouTube = () => {
  return (
    <section className="w-full flex justify-center py-12 lg:py-20 bg-customDarkBg1">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-[1150px] flex justify-center flex-col items-center px-4"
      >
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-4xl lg:text-5xl custom-block-big-title text-center">
            2024 HPC x AI Winter Camp 回顧
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative pt-[56.25%] bg-black rounded-xl overflow-hidden custom-border-gray">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MoC4aTjds9E"
                title="2024 HPC x AI Winter Camp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
