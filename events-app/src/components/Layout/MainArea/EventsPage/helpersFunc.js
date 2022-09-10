import React from "react";
import { Space } from "antd";

export const sortImgType = (event) => {
  switch (event.type) {
    case "celebration":
      return (
        <image
          width={225}
          height={120}
          alt="celebration"
          src="/image/celebration.jpeg"
        />
      );
    case "ceremony":
      return (
        <image
          width={225}
          height={120}
          alt="ceremony"
          src="/image/ceremony.jpeg"
        />
      );
    case "landmark":
      return (
        <image
          width={225}
          height={120}
          alt="landmark"
          src="/image/landmark.jpeg"
        />
      );
    case "movie":
      return (
        <image width={225} height={120} alt="movie" src="/image/movie.jpeg" />
      );
    case "travel":
      return (
        <image width={225} height={120} alt="travel" src="/image/travel.jpeg" />
      );
  }
};

export const IconArea = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const getAvgRate = (rates) =>
  rates.map((rate) => rate).reduce((total, rate) => total + rate, 0) /
  rates.length;
