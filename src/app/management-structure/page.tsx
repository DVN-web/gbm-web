"use client";

import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { openImageFullscreen } from "@/app/utils/openImageFullscreen";

export default function ManagementStructure() {
  const otcetArr = [
    {
      img: "/otcet/Otcet_2018.jpg",
      url: "https://cloud.mail.ru/public/4tTe/a534FDF68",
    },
    {
      img: "/otcet/Otcet_2019.jpg",
      url: "https://cloud.mail.ru/public/yCUX/h1LEHWh2J",
    },
    {
      img: "/otcet/Otcet_2020.jpg",
      url: "https://cloud.mail.ru/public/LnG3/suyx8ZKh9",
    },
    {
      img: "/otcet/Otcet_2021.jpg",
      url: "https://cloud.mail.ru/public/Y6rX/jJdHDkLQV",
    },
  ];

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="ManagementStructure">
          <div className="title">
            <h1>Структура управления</h1>

            {/* Главное изображение структуры */}
            <Image
              src="/images/struktura.jpg"
              alt="Структура управления"
              width={1200}
              height={800}
              style={{ cursor: "zoom-in" }}
              onClick={(e) => openImageFullscreen(e.currentTarget.src)}
              priority={false}
            />
          </div>

          <div className="otcetList">
            {otcetArr.map((obj) => (
              <a key={obj.url} href={obj.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={obj.img}
                  alt={`Отчёт за ${obj.img.split("_")[1]?.replace(".jpg", "")} год`}
                  width={300}
                  height={400}
                  className="otcetLink"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}