import React from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 pt-20 mb-8 sm:mt-8 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-20"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">你對高效能計算有興趣嗎？想瞭解科技產業最新趨勢嗎？<br></br>現在就是你的機會！</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                專注技術的夏令營
              </h2>
              <p className="mb-5 text-customGrayText leading-loose">
              參加我們的夏令營，你將有機會操作國內領先的超級電腦，學習最前沿的平行程式設計，並掌握效能分析的核心技術。無論你是高中生還是大學生，我們的教學模式會根據你的背景和能力安排彈性學習方式，讓你獲得最好的學習效果。在這裡，你將參與超過 20 小時的專業教學課程、手把手實操練習、挑戰自己的極限、拓展自己的視野。
              </p>
              <p className="mb-5 text-customGrayText leading-loose">
              立即行動，讓你在 AI 時代不落人後！
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>專業課程：學習高效能計算與AI</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>經驗分享：超算冠軍團隊分享座談</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>實地踏查：參訪清大校園與機房認識資工系</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>親自實踐：操作超級電腦與撰寫GPU平行程式</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-
           justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src="/Summer_Camp_2026/images/class.jpg"
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src="/Summer_Camp_2026/images/Jerry.jpg"
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="/Summer_Camp_2026/images/taiwania2.jpg"
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="/Summer_Camp_2026/images/Training_camp.jpg"
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
