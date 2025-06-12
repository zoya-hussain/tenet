"use client";

import React, { useState } from "react";

const HuggingFaceChatbot = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-8 mb-8">
          <h1 className="text-6xl font-semibold text-gray-900 mb-2">TENET</h1>
          <p className="text-gray-600 pt-4 text-2xl text-sans">
            Your voice matters and every action you take helps shape your
            community. Get involved, stay informed, and learn how youth like you
            are making a real impact today.
          </p>
        </div>

        <div></div>

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
            <p className="text-sm text-gray-500">
              Built with Next.js, TypeScript, Hugging Face, & 💙
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HuggingFaceChatbot;
