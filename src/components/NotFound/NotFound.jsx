import React from "react";

function NotFound(props) {
  return (
    <>
      <span className="span">
        <div className="div-6">
          <span style={{ fontSize: "150px" }}>404</span>
          <br />
          <span style={{ fontSize: "50px"}}>
            Кина не будет :(
          </span>
        </div>
        <div className="div-7">
          Возможно, данного адреса страницы не существует, или страница была
          перемещена.
        </div>
      </span>
      <style jsx>{`
        .span {
          background-color: #1e2538;
          display: flex;
          padding-top: 24px;
          flex-direction: column;
        }
        .div {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1432px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .span-2 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .span-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .span-3 {
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .span-4 {
          display: flex;
          justify-content: space-between;
          gap: 6px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-2 {
          color: #fff;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 900 25px Qanelas, sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            white-space: initial;
          }
        }
        .div-3 {
          color: #fff;
          margin-top: 15px;
          white-space: nowrap;
          font: 400 11px Font Awesome 5 Brands, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
          }
        }
        .div-4 {
          color: #fff;
          align-self: center;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          font: 700 17px Qanelas, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .span-5 {
          display: flex;
          justify-content: space-between;
          gap: 9px;
          padding: 0 20px;
        }
        .img-2 {
          aspect-ratio: 1.06;
          object-fit: contain;
          object-position: center;
          width: 55px;
          overflow: hidden;
          max-width: 100%;
        }
        .img-3 {
          aspect-ratio: 1.5;
          object-fit: contain;
          object-position: center;
          width: 6px;
          fill: #fff;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-5 {
          color: #fff;
          align-self: center;
          margin: auto 0;
          font: 600 15px/166.5% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 52px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-6 {
          color: #fff;
          text-align: center;
          max-width: 347px;
          align-self: center;
          margin-top: 150px;
          font: 900 65px Qanelas, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            font-size: 40px;
            margin-top: 40px;
          }
        }
        .div-7 {
          color: #fff;
          text-align: center;
          align-self: center;
          margin-top: 37px;
          font: 500 18px/168.7% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .div-8 {
          align-self: center;
          display: flex;
          margin-top: 34px;
          width: 501px;
          max-width: 100%;
          gap: 15px;
        }
        @media (max-width: 991px) {
          .div-8 {
            flex-wrap: wrap;
          }
        }
        .span-6 {
          color: #fff;
          white-space: nowrap;
          border-radius: 10px;
          box-shadow: 0px 0px 7px 0px rgba(72, 113, 255, 0.6);
          background-color: #3657cb;
          flex-grow: 1;
          justify-content: center;
          padding: 25px 35px 25px 46px;
          font: 700 16px/166.5% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .span-6 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .span-7 {
          color: #fff;
          white-space: nowrap;
          border-radius: 10px;
          border: 2px solid #fff;
          flex-grow: 1;
          justify-content: center;
          align-items: center;
          padding: 25px 60px;
          font: 700 16px/166.5% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .span-7 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-9 {
          background-color: #151a26;
          align-self: stretch;
          display: flex;
          margin-top: 133px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 48px 60px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .span-8 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .span-8 {
            max-width: 100%;
          }
        }
        .div-10 {
          color: #3c4767;
          align-self: center;
          white-space: nowrap;
          font: 400 20px Font Awesome 5 Brands, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          color: #fff;
          align-self: stretch;
          margin-top: 52px;
          font: 700 17px Qanelas, sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          color: rgba(227, 230, 240, 0.72);
          text-align: center;
          align-self: center;
          margin-top: 57px;
          white-space: nowrap;
          font: 400 15px/119% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-13 {
          color: rgba(227, 230, 240, 0.72);
          text-align: center;
          text-decoration-line: underline;
          align-self: center;
          margin-top: 38px;
          white-space: nowrap;
          font: 400 15px/119% Qanelas, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}

export default NotFound;
