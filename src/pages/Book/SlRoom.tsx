import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';

interface RoomProps {
  onSlRoom: (roomInfo: string, price:string) => void;
}



class SlRoom extends Component<RoomProps> {
  render() {
    const { onSlRoom } = this.props; // Truyền props từ Sum component

    const rooms = [
      // Dữ liệu của các phòng ở đây, ví dụ:
      {
        roomInfo: 'Double Room 1',
        price: '1.300.000đ'
      },
      {
        roomInfo: 'Double Room 2',
        price: '1.300.000đ'
      },
      // ...Thêm các phòng khác tương tự
    ];

    return (
      <div>
        <div className="container">
          {rooms.map((room, index) => (
            <div className="select-room p-2" data-aos="fade-up" key={index}>
              <div className="row booking-room">
                {/* ... */}
                <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                  <div className="pice-room">
                    <h2 className="pice">{room.price}</h2>
                    <button
                      type="button"
                      className="btn btn-primary text-btn-bookingroom"
                      onClick={() => onSlRoom(room.roomInfo, room.price)}
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
}

export default SlRoom;