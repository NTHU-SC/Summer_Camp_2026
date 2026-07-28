import { motion } from "framer-motion";
import React, { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="w-full max-w-[1150px] flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程
            </h2>
          </div>
          <div className="w-full overflow-x-auto"> {/* 添加 overflow-x-auto */}
            <MyTable />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (
    <table className="GeneratedTable" border="1" style={{borderCollapse: 'collapse', textAlign: 'center'}}>
      <thead>
        <tr>
          <th>時間</th>
          <th>Day1 7/28 (二)</th>
          <th>Day2 7/29 (三)</th>
          <th>Day3 7/30 (四)</th>
          <th>Day4 7/31 (五)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00~9:30</td>
          <td>報到</td>
          <td rowSpan="2">MPI平行程式教學</td>
          <td rowSpan="2">業界專家專題演講 II</td>
          <td rowSpan="2">業界專家專題演講 I<br/>介紹Robatic和PhysicalAI的應用</td>
        </tr>
        <tr>
          <td>9:30~10:30</td>
          <td>開幕、活動說明</td>
        </tr>
        <tr>
          <td>10:30~12:00</td>
          <td>HPCAI簡介</td>
          <td>MPI 上機練習<br/>(Pi, Mergesort)</td>
          <td>科學計算應用簡介</td>
          <td>上機練習<br/>(綜合)</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td colSpan="4">午餐 (自理) (第一天校園巡禮合照)</td>
        </tr>
        <tr>
          <td>13:30~14:30</td>
          <td rowSpan="2">平行計算簡介</td>
          <td rowSpan="3">基礎GPU平行程式教學</td>
          <td>科學計算上機練習</td>
          <td>學生叢集競賽座談會<br/>作業檢討</td>
        </tr>
        <tr>
          <td>14:30~15:30</td>
          <td></td>
          <td rowSpan="2">人工智慧應用簡介</td>
          <td>頒發證書<br/>(活動照相)</td>
        </tr>
        <tr>
          <td>15:30~16:30</td>
          <td>圖書館參觀</td>
          <td rowSpan="4" style={{color: '#aaa'}}>賦歸</td>
        </tr>
        <tr>
          <td>16:30~18:00</td>
          <td>Pizza 相見歡</td>
          <td>openMP平行程式簡介</td>
          <td>晚餐(自理)</td>
          <td></td>
        </tr>
        <tr>
          <td>18:00~19:30</td>
          <td>超級電腦簡介與實操<br/>(Slurm)</td>
          <td>系所介紹<br/>(限高中生)</td>
          <td>AI上機練習</td>
        </tr>
        <tr>
          <td>19:30~21:30</td>
          <td>程式與系統效能分析<br/>上機練習(HPL)</td>
          <td>GPU-OpenMP/Hip<br/>上機練習 (Sobel)</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;
