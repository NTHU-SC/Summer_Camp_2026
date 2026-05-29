import React from "react";
import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsDataUpperRow = [
  {
    customerName: "林展毅 (ZY)",
    customerTitle: "來自藝設系、ISC24世界亞軍",
    content:
      "參加超算比賽可以用到很貴的顯卡喔！還可以學到很多酷東西誒！！",
    image: "/Summer_Camp_2026/images/2024-ZY.jpg",
  },
  {
    customerName: "俞昊天",
    customerTitle: "來自工學院、ISC24世界亞軍",
    content:
      " AI 革命的到來使超算人才成為稀缺資源，身價隨著科技巨頭的競爭水漲船高。掌握一流的超算技術，必然能確保獲得一流的工作機會！",
    image: "/Summer_Camp_2026/images/2024-haotien.jpg",
  },
  {
    customerName: "翁君牧",
    customerTitle: "來自資工系、ISC連續世界亞軍",
    content:
      "參加超算比賽是接觸當今前沿尖端科技的難得機會，更能開拓我們的視野",
    image: "/Summer_Camp_2026/images/2024-Nevikw.jpg",
  }
];

const testimonialsDataLowerRow = [
  {
    customerName: "郭品毅",
    customerTitle: "來自資工系、SCC世界冠軍隊員",
    content:
      "資訊工程已經不再只是寫程式，需要對硬體深入了解，以取得更優異的性能，並結合跨領域的應用，才能將科技用於改善我們的生活",
    image: "/Summer_Camp_2026/images/2024-Yi.jpg",
  },
  {
    customerName: "程詩柔",
    customerTitle: "來自生科系、HPC-AI亞洲季軍",
    content:
      "身為外系學生，參加超算比賽不僅可以和超強的同學和學長姐討論進步，還能因跨領域學習豐富履歷！",
    image: "/Summer_Camp_2026/images/2024-shirou.jpg",
  },
  {
    customerName: "小P",
    customerTitle: "努力長大中，想要跑得超級快！",
    content:
      "來參加HPCAI冬令營吧！這裡的夥伴都超友善的，大家都願意互相幫助～不管遇到什麼問題，都可以勇敢發問，一起成長！😊🌈",
    image: "/Summer_Camp_2026/images/小P.png",
  },

];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          課程回饋
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
            高速運算及人工智慧課程廣受好評
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 py-10 xl:px-0 items-center">
          {testimonialsDataUpperRow.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4" style={{alignItems: 'center'}}>
                <img src={testimonial.image} alt="" style={{width: '50px', height: '50px', borderRadius: '50%' }} />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsDataLowerRow.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4" style={{alignItems: 'center'}}>
                <img src={testimonial.image} alt="" style={{width: '50px', height: '50px', borderRadius: '50%' }} />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
