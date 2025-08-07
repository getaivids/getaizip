"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";


export default function Index() {
  return (function MainComponent({ 
  title, 
  paragraphs = [], 
  className = "",
  containerClassName = "md:w-1/2 flex flex-col justify-center bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722]",
  textClassName = "text-[#A39F9D] text-sm mb-4"
}) {
  return (
    <div className={`${containerClassName} ${className}`}>
      {title && (
        <h3 className="text-xl font-space-grotesk mb-4 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
          {title}
        </h3>
      )}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={textClassName}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function StoryComponent() {
  return (
    <div className="p-8 bg-[#090402] min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">Content Block - With Title</h2>
        <MainComponent 
          title="About GET AI"
          paragraphs={[
            "GET AI revolutionizes video production by combining cutting-edge artificial intelligence with creative expertise. We specialize in delivering studio-quality videos on-demand, making professional video content accessible and affordable for businesses of all sizes.",
            "Our team of creative professionals works alongside advanced AI technology to produce compelling video content that drives results. From concept to completion, we ensure every project meets the highest standards of quality and creativity.",
            "Whether you need marketing videos, explainer content, or social media campaigns, GET AI delivers professional results at a fraction of traditional production costs and timelines."
          ]}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">Content Block - Without Title</h2>
        <MainComponent 
          paragraphs={[
            "GET AI revolutionizes video production by combining cutting-edge artificial intelligence with creative expertise. We specialize in delivering studio-quality videos on-demand, making professional video content accessible and affordable for businesses of all sizes.",
            "",
            ""
          ]}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">Content Block - Single Paragraph</h2>
        <MainComponent 
          paragraphs={[
            "GET AI revolutionizes video production by combining cutting-edge artificial intelligence with creative expertise."
          ]}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">Content Block - Custom Styling</h2>
        <MainComponent 
          title="Custom Styled Block"
          paragraphs={[
            "This is a custom styled content block with different container styling.",
            "It demonstrates the flexibility of the component."
          ]}
          containerClassName="w-full bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] p-6 rounded-xl border border-[#1e40af]"
          textClassName="text-[#F5F5F5] text-base mb-3"
        />
      </div>
    </div>
  );
});
}