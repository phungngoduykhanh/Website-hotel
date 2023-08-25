import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SelectRoom.css';
import axios from 'axios';

interface RoomData {
    id: number;
    roomname: string;
    price: string;
    people: string;
    size: string;
    images: string;

}

interface SelectRoomState {
    roomsData: RoomData[];
}

export default class SelectRoom extends Component<{}, SelectRoomState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            roomsData: [],
        };
    }

    componentDidMount() {
        axios.get<RoomData[]>('http://localhost:3000/api/room')  // Đổi địa chỉ API tại đây
            .then(response => {
                this.setState({ roomsData: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    

    render() {
        const { roomsData } = this.state;

        return (
            <div>
                <div className="container">
    {roomsData.map(room => (
        <div key={room.id} className='select-room p-2' data-aos="fade-up">
            <div className="row booking-room">
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                    <img
                        className="imgroom"
                        src={room.images}
                        alt=""
                        height={'100%'}
                        width={'100%'}
                    />
                </div>
                <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                    <div>
                        <h4 style={{ fontFamily: 'Segoe UI' }}>{room.roomname}</h4>
                        <div className='pt-3 icons'>
                            <p className='icon-bed'>
                                <FontAwesomeIcon icon={faBed} /> <p className='bed-room-booking'>{room.size}</p>
                            </p>
                            <p className='icon-person'>
                                <FontAwesomeIcon icon={faPerson} /> <p className='person-room-booking'>{room.people}</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                    <div className="pice-room">
                        <h2 className="pice ">{room.price}</h2>
                        <button type="button" className="btn btn-primary text-btn-bookingroom">Select</button><br />
                        <p className="inforoom">Only Rooms Left !</p>
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
