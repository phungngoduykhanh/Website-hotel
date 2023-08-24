import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Nhập Axios
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import './SelectRoom.css';


export default function SelectRoom() {
  // Tạo trạng thái để lưu trữ dữ liệu đã lấy
  const [rooms, setRooms] = useState<Array<{id_type: number, image:string, name:string, info:string, people:string, price:number}>>([]);

  // Lấy dữ liệu từ API khi thành phần được mount
  useEffect(() => {
      axios.get('https://63a571e42a73744b008e23f7.mockapi.io/API/Type_Product')
          .then(response => {
              setRooms(response.data); // Cập nhật trạng thái với dữ liệu đã lấy
          })
          .catch(error => {
              console.error('Lỗi khi lấy dữ liệu:', error);
          });
  }, []); // Mảng phụ thuộc rỗng để effect chỉ chạy một lần

  return (
      <div>
          <div className="container">
              {rooms.map(room => (
                  <div className='select-room p-2' data-aos="fade-up" key={room.id_type}>
                      <div className="row booking-room">
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
                                <div className='pt-3 icons'>
                                    <p className='icon-bed'>
                                        <FontAwesomeIcon icon={faBed} /> <p className='bed-room-booking'>{room.info}</p>
                                    </p>
                                    <p className='icon-person'>
                                        <FontAwesomeIcon icon={faPerson} /> <p className='person-room-booking'>{room.people}</p>
                                    </p>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                              <div className="pice-room">
                                  <h2 className="pice ">{room.price}đ</h2>
                                  <button type="button" className="btn btn-primary text-btn-bookingroom">Select</button><br />
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