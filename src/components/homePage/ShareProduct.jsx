import React from "react";

const ShareProduct = ({ url, name }) => {

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`Check out this product: ${name}`);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    whatsapp: `https://wa.me/?text=${encodedText}`,
  };

  return (
    <div className="flex gap-3 items-center justify-center bg-[rgba(255,255,255,0.7)] p-2 absolute w-[9rem] bottom-[-4rem] ml-16 ">
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
        <img src="/assets/facebook.png" alt="Share on Facebook" className="w-[2rem] h-auto" />
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        <img src="/assets/twitter.png" alt="Share on Twitter" className="w-[2rem] h-auto" />
      </a>
      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <img src="/assets/whatsapp.png" alt="Share on WhatsApp" className="w-[2rem] h-auto" />
      </a>
    </div>
  );
};

export default ShareProduct;
