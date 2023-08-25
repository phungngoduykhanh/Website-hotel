import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import '../Book/SelectRoom.css'

type Room = {
    room_id: string;
    roomname: string;
    size: string;
    people: number;
    image: string;
    price: number;
};

type SelectRoomProps = {
    filteredData: Room[];
    selectedSortingOption: string;
};

export default function SelectRoom({ filteredData, selectedSortingOption }: SelectRoomProps) {
    // Sort the data based on the selected sorting option
    const sortedData = [...filteredData];
    if (selectedSortingOption === 'lowestPrice') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (selectedSortingOption === 'highestPrice') {
      sortedData.sort((a, b) => b.price - a.price);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1 col-sm-1"></div>
                <div className="col-lg-12 col-md-10 col-sm-10">
                    {filteredData.map((room: { room_id: React.Key | null | undefined; image: string | undefined; roomname: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; size: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; people: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                        <div className='select-room p-2 mb-3' data-aos="fade-up" key={room.room_id}>
                            <div className="row booking-room">
                                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                    <img
                                        className="imgroom w-100"
                                        src={room.image} // Assuming the API provides an image URL
                                        alt=""
                                    
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                    <div>
                                        <h5 style={{ fontFamily: 'Segoe UI' }}>{room.roomname}</h5>
                                        <div className='pt-3 icons'>
                                            <p className='icon-bed'>
                                                <FontAwesomeIcon icon={faBed} /> <p className='bed-room-booking'>{room.size}</p>
                                            </p>
                                            <p className='icon-person '>
                                                <FontAwesomeIcon icon={faPerson} /> <p className='person-room-booking'>{room.people} Adults</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 line pt-2">
                                    <div className="pice-room">
                                        <h2 className="pice ">{room.price}đ</h2>
                                        <button type="button" className="btn btn-primary text-btn-bookingroom"><p className='text-button'>Select</p></button><br />
                                        <p className="inforoom">Only Rooms Left !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-1 col-sm-1"></div>
            </div>
        </div>
    );
};

