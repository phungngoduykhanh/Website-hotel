import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';

interface RoomData {
    room_id: number;
    type_id: number;
    roomname: string;
    people: number;
    size: string;
    images: string[];
}

interface TyperoomData {
    type_id: number;
    typeroom: string;
    price: string;
}

interface SelectRoomState {
    roomsData: RoomData[];
    typeroomData: TyperoomData[];
}

export default class SelectRoom extends Component<{}, SelectRoomState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            roomsData: [],
            typeroomData: [],
        };
    }

    async componentDidMount() {
        const roomsResponse = await fetch('https://64e416b1bac46e480e79616d.mockapi.io/apiwebhotel/rooms');
        const roomsData = await roomsResponse.json();

        const typeroomResponse = await fetch('URL_MOCK_API_CUA_TYPEROOM');
        const typeroomData = await typeroomResponse.json();

        this.setState({
            roomsData: roomsData,
            typeroomData: typeroomData,
        });
    }

    render() {
        const { roomsData, typeroomData } = this.state;

        return (
            <div className="container">
                {roomsData.map((room, index) => (
                    <div key={index} className="select-room p-2" data-aos="fade-up">
                        <div className="row booking-room">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <img
                                    className="imgroom"
                                    src={room.images[0]}
                                    alt=""
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                <div>
                                    <h4 style={{ fontFamily: 'Segoe UI' }}>{typeroomData[room.type_id - 1]?.typeroom}</h4>
                                    <div className='pt-3 icons'>
                                        <p className='icon-bed'>
                                            <FontAwesomeIcon icon={faBed} /> <span className='bed-room-booking'>{room.size}</span>
                                        </p>
                                        <p className='icon-person'>
                                            <FontAwesomeIcon icon={faPerson} /> <span className='person-room-booking'>{room.people} Adults</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
                                <div className="pice-room">
                                    <h2 className="pice ">{typeroomData[room.type_id - 1]?.price}</h2>
                                    {/* Hiển thị giá và nút Select */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
