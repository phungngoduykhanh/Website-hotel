import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Sum.css';
import SlRoom from './SlRoom';

export default function Sum() {
    const [selectedRooms, setSelectedRooms] = useState<Array<{ roomInfo: string; price: string }>>([]);
  
    const handleRoomSelect = (roomInfo: string, price: string) => {
      setSelectedRooms((prevSelectedRooms) => [
        ...prevSelectedRooms,
        { roomInfo, price }
      ]);
    };
  
    const calculateTotalPrice = (rooms: Array<{ roomInfo: string; price: string }>) => {
      const total = rooms.reduce((acc, room) => acc + parseFloat(room.price), 0);
      return total.toFixed(0);
    };
  

  return (
    <div className="summary ">
      <div
        className="booking"
        style={{
          border: '1px solid',
          width: '13rem',
          borderRadius: '10px',
          backgroundColor: '#f5f6fa',
          color: 'black'
        }}
      >
        {/* ... */}
        <SlRoom onSlRoom={handleRoomSelect} />
        <hr style={{ margin: '14px 10px' }} />
        <Form.Text id="text" muted>
          {selectedRooms.map((room, index) => (
            <div className="row d-column" style={{ color: 'black' }} key={index}>
              <div className="col-lg-12">
                <label className="">
                  <span className="text-form" style={{ color: 'orange' }}>
                    {room.roomInfo} - {room.price}
                  </span>
                </label>
              </div>
            </div>
          ))}
        </Form.Text>
        <h3>Total Price: {calculateTotalPrice(selectedRooms)}đ</h3>
        <a href="#" className="conti">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Continues
        </a>
      </div>
    </div>
  );
}