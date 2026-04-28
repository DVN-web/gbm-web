"use client";

export default function Book3D({
  front = "/books3D/cover_front3.jpg",
  back = "/books3D/cover_back3.jpg",
  spine = "/books3D/spine3.jpg",
  pages = "/books3D/pages.jpg",
}) {
  return (
    <div className="scene">
      <div className="book">
        <div className="face front" style={{ backgroundImage: `url(${front})` }} />
        <div className="face back" style={{ backgroundImage: `url(${back})` }} />
        <div className="face right" style={{ backgroundImage: `url(${pages})` }} />
        <div className="face left" style={{ backgroundImage: `url(${spine})` }} />
        <div className="face top" style={{ backgroundImage: `url(${pages})` }} />
        <div className="face bottom" style={{ backgroundImage: `url(${pages})` }} />
      </div>

      <style jsx>{`
        .scene {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          perspective: 1200px;
        }

        .book {
          width: 220px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateY 8s linear infinite;
        }

        .face {
          position: absolute;
          background-size: cover;
          background-position: center;
        }

        .front {
          width: 220px;
          height: 300px;
          transform: translateZ(15px);
        }

        .back {
          width: 220px;
          height: 300px;
          transform: rotateY(180deg) translateZ(15px);
        }

        .right {
          width: 30px;
          height: 300px;
          left: 95px;
          transform: rotateY(90deg) translateZ(110px);
        }

        .left {
          width: 30px;
          height: 300px;
          left: 95px;
          transform: rotateY(-90deg) translateZ(110px);
        }

        .top {
          width: 220px;
          height: 30px;
          top: 135px;
          transform: rotateX(90deg) translateZ(150px);
        }

        .bottom {
          width: 220px;
          height: 30px;
          top: 135px;
          transform: rotateX(-90deg) translateZ(150px);
        }

        @keyframes rotateY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}