import React from 'react';
import img1 from "../../image/hinhanh1.jpg";

function RoomDescription() {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-7">
          <h2>Phòng giường đôi</h2>
          <ol>
            <li>Phòng này phù hợp nhất cho 2 người ở</li>
            <li>Phòng nhỏ nhất, không gian vừa đủ, giá tiết kiệm nhất</li>
            <li>Phù hợp nghĩ ngắn ngày</li>
          </ol>
        </div>
        <div className="col-md-5">
            <img src={img1}></img>
        </div>
      </div>
    </div>
  );
}

export default RoomDescription;
