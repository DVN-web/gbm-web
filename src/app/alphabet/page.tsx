"use client";

import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { openImageFullscreen } from "@/app/utils/openImageFullscreen";

export default function Alphabet() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="Alphabet">
          <div className="title">
            <h1>Гагаузский алфавит</h1>
          </div>

          <Image
            src="/images/alfabet.jpg"
            width={600}
              height={400}
            alt="Гагаузский алфавит"
            className="alphabetImg"
            style={{ 
              cursor: "zoom-in",
              maxWidth: "100%",
              height: "auto"
            }}
            onClick={(e) => openImageFullscreen(e.currentTarget.src)}
            priority={false} // можно поставить true, если это главное изображение на странице
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}