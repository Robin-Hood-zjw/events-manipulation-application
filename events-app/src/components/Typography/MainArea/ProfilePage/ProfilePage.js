import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const ProfilePage = () => (
  <>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <h2>My Profile</h2>
    </Card>
  </>
);

export default ProfilePage;
