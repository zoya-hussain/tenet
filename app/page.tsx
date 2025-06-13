"use client";

import React, { useState } from "react";

const HuggingFaceChatbot = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-8 mb-4">
          <h1 className="text-6xl font-semibold text-gray-900 mb-2">TENET</h1>
          <p className="text-gray-600 pt-4 text-2xl text-sans">
            Your voice matters and every action you take helps shape your
            community. Get involved, stay informed, and learn how youth like you
            are making a real impact today.
          </p>
        </div>
        

        <div className="flex justify-center gap-3 mt-3 flex-wrap">

          <a href="https://engage.pointsoflight.org/search/i/" className="px-4 py-2 text-small font-medium font-sans text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
            Youth Initiatives
          </a>
          <a href="https://linktr.ee/gz4c?fbclid=PAQ0xDSwK4nIFleHRuA2FlbQIxMQABp9JBtafOwE2fYMVFhURFcBUb3HF7_dIfuXB1srqAzxPu4dsFOdXT3AV2S_zk_aem_PPUxhzKEDxuoCr7l9sjBVg" className="px-4 py-2 text-small font-medium font-sans text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
            Gen Z For Change Links
          </a>
        </div>

        <div className="mt-10 text-center mb-8 max-w-2xl mx-auto">
          <div className="px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <p className="text-xl text-gray-700">
            <span className="font-bold text-blue-600">1 in 4</span> U.S. teens volunteered in their communities last year.
            </p>
            <p className="mt-2 text-medium text-gray-600">
              Youth are already showing up — find a cause that moves you and be part of the change.
            </p>
            <p className="mt-1  text-gray-400">
            Source: <a href="https://www.americorps.gov" className="underline hover:text-gray-600">AmeriCorps & Census Bureau</a>
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 font-sans">
  {[
    {
      title: "VolunteerMatch",
      description: "Find causes you care about and volunteer locally or online.",
      href: "https://www.volunteermatch.org/",
    },
    {
      title: "Youth Service America",
      description: "Grants and resources to lead community projects as a young changemaker.",
      href: "https://ysa.org/",
    },
    {
      title: "AllSides",
      description: "Check news from multiple perspectives to stay informed and engaged.",
      href: "https://www.allsides.com/unbiased-balanced-news",
    },
  ].map((item) => (
    <a
      key={item.title}
      href={item.href}
      className="block p-4 bg-white border border-gray-200 rounded-xl hover:shadow-sm transition"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </a>
  ))}
</div>



        <div
          className={`transition-all duration-300 ${
            isFullscreen ? "fixed inset-4 z-50" : "relative"
          }`}
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="text-sm font-sans font-medium text-gray-700">
                  Engagement AI Assistant
                </span>
              </div>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-md hover:bg-gray-200 transition-colors"
              ></button>
            </div>
            <div
              className={`${
                isFullscreen ? "h-[calc(100vh-8rem)]" : "h-[600px]"
              }`}
            >
              <iframe
                src="https://tenet-organization-tenet-chatbot.hf.space"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
        

        {!isFullscreen && (
          <div className="text-center mt-8">
            <p className="text-medium text-gray-500">
              Built with Next.js, TypeScript, Hugging Face, & 💙
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HuggingFaceChatbot;
