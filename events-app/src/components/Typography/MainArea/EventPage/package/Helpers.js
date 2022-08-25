import { Space } from "antd";

import "./images";

export const sortImgType = (event) => {
  switch (event.type) {
    case "celebration":
      return (
        <image
          width={225}
          height={120}
          alt="celebration"
          src="./celebration.jpeg"
        />
      );
    case "ceremony":
      return (
        <image width={225} height={120} alt="ceremony" src="./ceremony.jpeg" />
      );
    case "landmark":
      return (
        <image width={225} height={120} alt="landmark" src="./landmark.jpeg" />
      );
    case "movie":
      return <image width={225} height={120} alt="movie" src="./movie.jpeg" />;
    case "travel":
      return (
        <image width={225} height={120} alt="travel" src="./travel.jpeg" />
      );
  }
};

export const IconArea = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
