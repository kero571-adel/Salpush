import { useEffect, useRef } from "react";
export default function Home() {
  return (
    <div className="home">
      <div className="floating-dots">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="dot"></span>
        ))}
      </div>
      <div className="floating-dots2">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="dot2"></span>
        ))}
      </div>
      <div className="floating-dots3">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="dot3"></span>
        ))}
      </div>
      <div className="floating-dots4">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="dot4"></span>
        ))}
      </div>

      {/* LEFT SIDE */}
      <div className="home-left">
        <a href="/" className="button">Welcome to Splash</a>
        <h1>The Experts in Optimizing Your Site!</h1>
        <p>On a broad scale, I see SEO becoming a normalized marketing tactic, the same way TV, radio, and print are traditionally thought of as marketing tactics</p>
        <button className="main-btn">
  Get Started <i className="fa-solid fa-arrow-right"></i>
</button>
      </div>

    <div
      className="hero"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="hero-right">
        

        {/* Main Girl */}
        <img src="/girl.png" className="main-image" alt="girl" />

        {/* Floating Images */}
        <img src="/google.png" className="float-img google" alt="" />
        <img src="/chat.png" className="float-img chat" alt="" />
        <img src="/target.png" className="float-img target" alt="" />
        <img src="/chart.png" className="float-img chart" alt="" />
        <img src="/db.png" className="float-img db" alt="" />
        <img src="/coin.png" className="float-img coin" alt="" />

      </div>
    </div>
    </div>
  );
}
