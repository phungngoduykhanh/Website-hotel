export { }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Fillter from './Filter';
import '../Book/Filter.css';
import Fillter_radio from './Filter_radio';
import SelectRoom from './SelectRoom';
import Sum from './Sum';
import Session1 from '../Home/Session1';
import './index.css';
import SlRoom from './SlRoom';
import Sums from './Sums';
import Filter from './Filter';


export default function Booking() {
    const [roomData, setRoomData] = useState<Room[]>([]);
    const [filteredData, setFilteredData] = useState<Room[]>([]);
    const [selectedSortingOption, setSelectedSortingOption] = useState<string>('');

    type Room = {
        room_id: string;
        roomname: string;
        size: string;
        people: number;
        image: string;
        price: number;
    };

    useEffect(() => {
        fetch('https://63a572152a73744b008e2940.mockapi.io/api/room')
            .then(response => response.json())
            .then(data => {
                setRoomData(data);
                setFilteredData(data); 
            })
            .catch(error => {
                console.error('Error fetching room data:', error);
            });

        AOS.init();
    }, []);
    const handleFilter = (priceRange: string) => {
        const filtered = roomData.filter(room => {
            const roomPrice = room.price;
            switch (priceRange) {
                case 'lessThan500k':
                    return roomPrice < 500000;
                case '500kTo1m':
                    return roomPrice >= 500000 && roomPrice <= 1000000;
                case '1mTo2m':
                    return roomPrice > 1000000 && roomPrice <= 2000000;
                case '2mTo5m':
                    return roomPrice > 2000000 && roomPrice <= 5000000;
                case 'greaterThan5m':
                    return roomPrice > 5000000;
                default:
                    return true; 
            }
        });

        setFilteredData(filtered);
    };
    const handleReset = () => {
        setSelectedPriceRange(''); 
        handleFilter(''); 
    };
    useEffect(() => {
        AOS.init();
    }, []);

    const handleSlRoomSelect = (roomInfo: string, price: string) => {
        const newSelectedRoom = {
            roomInfo: roomInfo,
            price: price
        };
    };
    const handleSortingOptionChange = (option: string) => {
        setSelectedSortingOption(option);
      };
    return (
        <>
            <Header />
            <Session1 />
            <div className='container book' data-aos="fade-up">
                <div className="row ">
                    <Fillter_radio onSortingOptionChange={function (option: string): void {
                        throw new Error('Function not implemented.');
                    } } />
                </div>
                <div className="row book-room">
                    <div className="col-lg-3">
                        <Filter handleFilter={handleFilter} handleReset={handleReset} />
                    </div>
                    <div className="col-lg-7">
                        <SelectRoom filteredData={filteredData} selectedSortingOption={''} />
                    </div>
                    <div className="col-lg-2">
                        {/* <Sums /> */}
                        <Sum />
                    </div>
                </div>
            </div><br /><br />
            <Footer />
        </>
    )
}
function setSelectedPriceRange(arg0: string) {
    throw new Error('Function not implemented.');
}

