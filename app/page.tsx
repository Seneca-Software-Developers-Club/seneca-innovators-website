import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <br />
      <br />

      <div className="home-container">
        <div className="home-background-overlay"></div>
        <main className="home-main">
          <h1 className="home-title">SENECA INNOVATORS</h1>
          <div className="home-logo-container">
            <Link
              href="https://www.instagram.com/senecabusinessclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-logo-link"
            >
              <Image
                src="/logo/SBC.png"
                alt="Seneca Business Club"
                width={300}
                height={300}
                className="home-logo"
              />
            </Link>
            <Link
              href="https://www.instagram.com/smarketingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-logo-link"
            >
              <Image
                src="/logo/SMC.png"
                alt="Seneca Marketing Club"
                width={300}
                height={300}
                className="home-logo"
              />
            </Link>
            <Link
              href="https://www.instagram.com/seneca_sdc/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-logo-link"
            >
              <Image
                src="/logo/SDC.png"
                alt="Seneca Software Developers Club"
                width={300}
                height={300}
                className="home-logo"
              />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
