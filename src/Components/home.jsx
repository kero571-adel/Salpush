import { useEffect, useRef } from "react";
import { useState } from "react";
const slides = [
  {
    title: "Baseline SEO Report",
    desc: "We are passionate about our work. Our designers stay ahead of the curve.",
    img: "/analyze.gif",
  },
  {
    title: "SEO Audit & Analysis",
    desc: "Using a completely new SEO method. The combination of optimizing content.",
    img: "/seo.gif",
  },
  {
    title: "High Quality Sites Link",
    desc: "Link to your site and embedded inside relevant, high-quality material.",
    img: "/globe.gif",
  },
  {
    title: "Transparent & Effective",
    desc: "We strive to be transparent with you, so you’ll always know your money is being spent effectively",
    img: "/coin.gif",
  },
  {
    title: "Years Of Experience",
    desc: "We are passionate about our work. Our designers stay ahead of the curve to provide engaging",
    img: "/layer.gif",
  },
];
export default function Home() {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1000);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
          <a href="/" className="button">
          WELCOME TO SALEPUSH
          </a>
          <h1>The Experts in Optimizing Your Site!</h1>
          <p>
            On a broad scale, I see SEO becoming a normalized marketing tactic,
            the same way TV, radio, and print are traditionally thought of as
            marketing tactics
          </p>
          <button className="main-btn">
            Free Seo Analysis <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="hero" style={{ backgroundImage: "url('/bg.png')" }}>
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
      <section className="how">
        <div className="left-shape"></div>

        <div className="content">
          <h5>HOW IT WORK</h5>
          <h1>“ Because We’re the Best ”</h1>
          <p className="desc">
            You are looking for an seo company that can help you boost sales and
            increase visits, we are the top candidate for you.
          </p>
          <div className="center-line"></div>

          <div className="slider-wrapper">
            <div className="slider-window">
              <div
                className="slider-track"
                style={{
                  transform: `translateX(-${active * (isTablet ? 25 : 20)}%)`,
                }}
              >
                {slides.map((slide, i) => (
                  <div className="card" key={i}>
                    <img src={slide.img} alt="" />
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lines">
              {(isTablet ? [0, 1, 2, 3] : [0, 1, 2]).map((i) => (
                <span
                  key={i}
                  className={active === i ? "active" : ""}
                  onClick={() => setActive(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
