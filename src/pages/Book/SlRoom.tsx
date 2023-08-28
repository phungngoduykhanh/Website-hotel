import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import './SelectRoom.css';
import { log } from 'console';


interface Room {
  id_type: number;
  image: string;
  name: string;
  info: string;
  people: string;
  price: number;
}
// const [rooms, setRooms] = useState<Room[]>([]);

interface SlRoomProps {
    onSlRoom: (name: string, price: string) => void;
  }

export default function SelectRooms({onSlRoom} : SlRoomProps) {
    const [rooms, setRooms] = useState<{
        id_type: number;
        name: string;
        price: string;
      } | any>(null);

      useEffect(() => {
        axios
          .get('https://63a571e42a73744b008e23f7.mockapi.io/API/Type_Product')
          .then((response) => {
            setRooms(response.data); // Accessing the data property of the response
            console.log(response.data, 'aaa'); // Logging the data
          })
          .catch((error) => {
            console.error('Lỗi khi lấy dữ liệu:', error);
          });
      }, []);
      

      
      

  return (
    <div>
      <div className="container">
        
        {rooms?.map((room: Room) => (
          <div className="select-room p-2" data-aos="fade-up" key={room.id_type}>
            <div className="row booking-room" id="allroom">
              <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                <img
                  className="imgroom"
                  src={room.image}
                  alt=""
                  height={'100%'}
                  width={'100%'}
                />
              </div>
              <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                <div>
                  <h4 style={{ fontFamily: 'Segoe UI' }}>{room.name}</h4>
                  <div className="pt-3 icons">
                    <p className="icon-bed">
                      <FontAwesomeIcon icon={faBed} />{' '}
                      <p className="bed-room-booking">{room.info}</p>
                    </p>
                    <p className="icon-person">
                      <FontAwesomeIcon icon={faPerson} />{' '}
                      <p className="person-room-booking">{room.people}</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                <div className="pice-room">
                  <h2 className="pice ">{room.price}đ</h2>
                  <button
                    type="button"
                    className="btn btn-primary text-btn-bookingroom"
                    onClick={() => onSlRoom(room.name, room.price.toString())} // Xem thông tin phòng khi nhấn Select
                  >
                    Select
                  </button>
                  <br />
                  <p className="inforoom">Only 5 Rooms Left !</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
