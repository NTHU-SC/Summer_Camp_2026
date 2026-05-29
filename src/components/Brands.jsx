import React from "react";
import { motion } from "framer-motion";


export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16"
    id="brands">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 pt-20">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                HPC x AI <br />
                高速計算人工智慧<br />
                夏令營
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                辦理單位
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="flex py-3 justify-center">
                <a href="https://www.nchc.org.tw/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/Summer_Camp_2026/logos/NCHC_logo.png"
                    alt="NCHC_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="http://scc.nthu.site/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/Summer_Camp_2026/logos/SC_logo.png"
                    alt="SC_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="https://www.nthu.edu.tw/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/Summer_Camp_2026/logos/NTHU_logo.png"
                    alt="NTHU_logo"
                    className="rounded-xl custom-border-gray"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 pt-20">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                贊助單位
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="flex py-3 justify-center">
                <a href="https://www.nvidia.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/Summer_Camp_2026/logos/NVIDIA_logo.png"
                    alt="NVIDIA_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="https://www.aims.org.tw/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/Summer_Camp_2026/logos/AiMS_logo.png"
                      alt="AiMS_logo"
                      className="rounded-lg"
                    />
                  </div>
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="https://www.amd.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/Summer_Camp_2026/logos/AMD_logo.png"
                      alt="AMD_logo"
                      className="rounded-lg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
