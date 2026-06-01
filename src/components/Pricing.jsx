import React, { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData_early = [
  "精彩課程",
  "助教指導",
  "旅平險",
  "紀念品",
  "參加證書",
  "提前入宿住宿 (四晚)",
];

const pricingData_hotel = [
  "精彩課程",
  "助教指導",
  "旅平險",
  "紀念品",
  "參加證書",
  "營隊住宿 (三晚)",
];

const pricingData_no_hotel = [
  "精彩課程",
  "助教指導",
  "旅平險",
  "紀念品",
  "參加證書",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handleButtonClick = () => {
    window.open('https://forms.gle/v8FhqDpmjmbz2wVXA', '_blank');
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                報名資訊
              </h2>
              <p className="mb-6 text-customGrayText" style={{ textAlign: "left", paddingLeft: "3vw" ,fontSize: "1.2rem" }}>
              優惠：獲清大教授推薦的大四或碩博士生，享2000元報名費減免
              <br /> 
              招生對象：限學生（國中以上），具備基礎程式能力（C 語言）
              <br />
              授課地點：清華大學
              </p>

              {/* for swich between monthly and yearly. 
                <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label> */}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-stretch mt-20 justify-center gap-4">
              {/* 安心追夢 */}
              {/*
              <div className="w-[300px] sm:w-[340px] lg:w-1/4 flex">
                <div className="p-6 bg-customDarkBg3 rounded-3xl flex flex-col justify-between w-full">
                  <div>
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      安心追夢
                    </h4>
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      $0
                    </div>
                    <p className="mt-4 mb-6 text-gray-500 leading-relaxed text-left text-sm">
                      擁有中低收、低收或清寒證明者，由國網中心補助參與（含住宿四晚）
                    </p>
                  </div>
                  <ul className="mb-6 text-white text-sm">
                    {pricingData_hotel.map((text, index) => (
                      <li className="mb-3 flex items-start" key={`${text}-${index}`}>
                        <div className="mt-1"><CheckArrowIcon /></div>
                        <span className="ml-2 text-left">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            */}
              {/* 不含住宿 */}
              <div className="w-[300px] sm:w-[340px] lg:w-1/4 flex">
                <div className="p-6 bg-customDarkBg3 rounded-3xl flex flex-col justify-between w-full">
                  <div>
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      不含住宿
                    </h4>
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      $6000
                    </div>
                    <p className="mt-4 mb-6 text-gray-500 leading-relaxed text-left text-sm">
                      營隊不含住宿，學員需自行安排住宿（適合通勤或自行訂房學員）
                    </p>
                  </div>
                  <ul className="mb-6 text-white text-sm">
                    {pricingData_no_hotel.map((text, index) => (
                      <li className="mb-3 flex items-start" key={`${text}-${index}`}>
                        <div className="mt-1"><CheckArrowIcon /></div>
                        <span className="ml-2 text-left">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 含住宿 (三晚) */}
              <div className="w-[300px] sm:w-[340px] lg:w-1/4 flex">
                <div className="p-6 bg-customDarkBg3 rounded-3xl flex flex-col justify-between w-full border border-customPrimary">
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold font-heading text-white text-left">
                        含住宿
                      </h4>
                      <span className="text-xs bg-customPrimary text-white px-2 py-1 rounded-full font-bold">推薦</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      $7500
                    </div>
                    <p className="mt-4 mb-6 text-gray-500 leading-relaxed text-left text-sm">
                      營隊提供三晚住宿校園住宿，體驗校園生活
                    </p>
                  </div>
                  <ul className="mb-6 text-white text-sm">
                    {pricingData_hotel.map((text, index) => (
                      <li className="mb-3 flex items-start" key={`${text}-${index}`}>
                        <div className="mt-1"><CheckArrowIcon /></div>
                        <span className="ml-2 text-left">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 提前入宿 (四晚) */}
              <div className="w-[300px] sm:w-[340px] lg:w-1/4 flex">
                <div className="p-6 bg-customDarkBg3 rounded-3xl flex flex-col justify-between w-full">
                  <div>
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      提前入宿
                    </h4>
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      $8000
                    </div>
                    <p className="mt-4 mb-6 text-gray-500 leading-relaxed text-left text-sm">
                      營隊提供晚四晚校園住宿，適合需要提前一天抵達新竹準備的學員
                    </p>
                  </div>
                  <ul className="mb-6 text-white text-sm">
                    {pricingData_early.map((text, index) => (
                      <li className="mb-3 flex items-start" key={`${text}-${index}`}>
                        <div className="mt-1"><CheckArrowIcon /></div>
                        <span className="ml-2 text-left">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
                className="inline-block text-center py-2 px-4 w-1/2 rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                onClick={() => handleButtonClick()}
              >
                立刻報名！
             </div>
            {/* 
            <div className="flex justify-center mt-12">
              <div
                className="inline-block text-center py-3 px-8 rounded-xl custom-button-colored font-bold leading-loose cursor-default shadow-lg select-none"
                style={{ opacity: 0.6 }}
              >
                報名準備中
              </div>  
            </div> */}
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
