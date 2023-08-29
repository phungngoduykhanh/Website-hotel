import React, { useEffect, useState, useContext, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import '../Book/SelectRoom.css'

export type Room = {
    room_id: string;
    roomname: string;
    size: string;
    people: number;
    image: string;
    price: number;
    quantity: number;
};

type SelectedRoomsContextType = {
    selectedRooms: Room[];
    setSelectedRooms: React.Dispatch<React.SetStateAction<Room[]>>;
};

const SelectedRoomsContext = createContext<SelectedRoomsContextType | undefined>(undefined);

export const useSelectedRooms = () => {
    const context = useContext(SelectedRoomsContext);
    if (context === undefined) {
        throw new Error("useSelectedRooms must be used within a SelectedRoomsProvider");
    }
    return context;
};

export const SelectedRoomsProvider: React.FC = ({ children }) => {
    const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);

    return (
        <SelectedRoomsContext.Provider value={{ selectedRooms, setSelectedRooms }}>
            {children}
        </SelectedRoomsContext.Provider>
    );
};

type SelectRoomProps = {
    filteredData: Room[];
    selectedSortingOption: string;
    onRoomSelect: (room: Room) => void;
};

export default function SelectRoom({ filteredData, selectedSortingOption, onRoomSelect }: SelectRoomProps) {
    const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const handleRoomSelect = (room : Room) => {
        const isRoomSelected = selectedRooms.some (selectedRoom => selectedRoom.room_id === room.room_id);
        if (isRoomSelected) {
            const updatedSelectedRooms = selectedRooms.filter(selectedRoom => selectedRoom.room_id !== room.room_id);
            setSelectedRooms (updatedSelectedRooms);
            setTotalPrice(prevTotalPrice => prevTotalPrice - room.price);
        }
        else {
            setSelectedRooms (prevSelectedRooms => [...prevSelectedRooms, room]);
            setTotalPrice (prevTotalPrice => prevTotalPrice + room.price);
        }
    };
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
                    {filteredData.map((room: Room) => (
                        <div className='select-room p-2 mb-3' data-aos="fade-up" key={room.room_id}>
                            <div className="row booking-room">
                                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                    <img
                                        className="imgroom w-100"
                                        src={room.image}
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
                                    <div>
                                        <h5 style={{ fontFamily: 'Segoe UI' }}>{room.roomname}</h5>
                                        <div className='pt-3 icons'>
                                            <p className='icon-bed'>
                                                <FontAwesomeIcon icon={faBed} /> <span className='bed-room-booking'>{room.size}</span>
                                            </p>
                                            <p className='icon-person '>
                                                <FontAwesomeIcon icon={faPerson} /> <span className='person-room-booking'>{room.people} Adults</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 line pt-2">
                                    <div className="pice-room">
                                        <h2 className="pice ">{room.price}đ</h2>
                                        <button
                                            type="button"
                                            className="btn btn-primary text-btn-bookingroom"
                                            onClick={() =>  onRoomSelect(room)}
                                        >
                                            <span className='text-button'>Select</span>
                                        </button><br />
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
