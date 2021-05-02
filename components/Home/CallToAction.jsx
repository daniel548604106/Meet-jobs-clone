import React from 'react';

const CallToAction = () => {
  return (
    <div className="p-10 text-center bg-cta-img bg-cover bg-no-repeat bg-center  text-white">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5 sm:mb-10">
        註冊 meet.jobs
        <br />
        獲取更多全球工作資訊
      </h1>
      <h2 className="mb-5 text-lg sm:text-xl">Meet.jobs 會員可獲得</h2>
      <ol className="mb-5">
        <li>1. 一次免費職涯諮詢服務</li>
        <li>2. 電子報分享最新工作資訊</li>
      </ol>
      <p className="text-red-500 mb-5">＊一鍵註冊，不用填寫履歷！</p>
      <button className="bg-blue-600 rounded p-3 text-white">註冊網站獲得更多資訊</button>
    </div>
  );
};

export default CallToAction;
