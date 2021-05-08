import React from 'react';
import Image from 'next/image';
const Advantage = () => {
  const advantages = [
    {
      title: '專注國際',
      text: '企業、工作機會和人才用戶來自 71 個國家，是專業人才走向國際的第一站。',
      icon: 'https://meet.jobs/static/media/index-4.0fce7b16.svg',
    },
    {
      title: '薪資透明',
      text: '沒有「面議」，所有的工作機會都標明薪資範圍。對求職者公平，也提高招募效率。',
      icon: 'https://meet.jobs/static/media/index-5.1ade7ec8.svg',
    },
    {
      title: '消滅無聲卡',
      text: '企業回覆率高達 99%！每一筆應徵，Meet.jobs 都會追蹤到底，督促企業回覆、邀約面試。',
      icon: 'https://meet.jobs/static/media/index-1.88b39ff3.svg',
    },
    {
      title: '就職祝賀金',
      text: '錄取者可獲得 100 美元「就職祝賀金」。歡迎您分享錄取經驗，幫助更多的人。（非強制)',
      icon: 'https://meet.jobs/static/media/money.f87e1155.svg',
    },
  ];
  return (
    <div className="py-10 sm:py-20 px-5 flex items-center justify-center bg-white">
      <div>
        <h1 className=" text-xl sm:text-3xl text-center font-semibold mb-10">
          Meet.jobs - 專業人才的推薦工作平台
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="flex flex-col items-center">
              <Image src={advantage.icon} alt={advantage.title} width="500" height="300" />
              <h2 className="text-md sm:text-xl text-center text-blue-600 mb-5  font-bold">
                {advantage.title}
              </h2>
              <p className="text-sm sm:text-md">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
