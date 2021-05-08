import React from 'react';
import Image from 'next/image';
const HowWeWork = () => {
  const steps = [
    {
      title: '應徵工作',
      text: '直接在 Meet.jobs 網站應徵有興趣的優質工作。',
      icon: 'https://meet.jobs/static/media/index-3.12266cd3.svg',
    },
    {
      title: '回報錄取',
      text: '錄取後在系統上回報，告知我們您的好消息！',
      icon: 'https://meet.jobs/static/media/index-2.c1df882f.svg',
    },
    {
      title: '領取獎金',
      text: 'Meet.jobs 將頒發 100 美元就職獎金，並邀請您分享錄取心得。',
      icon: 'https://meet.jobs/static/media/index-6.8fa51143.svg',
    },
  ];
  return (
    <div className="text-center p-5 sm:p-20 bg-white">
      <h1 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-20">如何使用 Meet.jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((step, idx) => (
          <div key={step.title}>
            <Image src={step.icon} alt={step.title} width="500" height="300" />
            <h2>
              `Step ${idx} {step.title}`
            </h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
