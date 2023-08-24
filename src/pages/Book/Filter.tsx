export { }

// export { }
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-image-lightbox/style.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../Book/Filter.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
// import '../Book/SelectRoom.css'
// interface room {
//     name: String;
//     info: String;
//     people: String;
//     price: String;
//     image: String;
//     status: String;
// }

// export default function Fillter() {
//     const [roomData, setRoomData] = useState<Room[]>([]); // Initialize with an empty array of Room type
//     const [filteredData, setFilteredData] = useState<Room[]>([]); // Initialize with an empty array of Room type
//     const [selectedPriceRange, setSelectedPriceRange] = useState<string>(''); // Initialize selected price range

//     // Define a type for the room object
//     type Room = {
//         id_type: string;
//         name: string;
//         info: string;
//         people: string;
//         price: string;
//         image: string;
//         status: string; // Add all other properties here
//     };
    
//     useEffect(() => {
//         // Fetch room data from the API
//         fetch('https://63a571e42a73744b008e23f7.mockapi.io/API/Type_Product')
//             .then(response => response.json())
//             .then(data => {
//                 setRoomData(data);
//                 setFilteredData(data); // Initialize with all data
//             })
//             .catch(error => {
//                 console.error('Error fetching room data:', error);
//             });

//         // Initialize AOS animations
//         AOS.init();
//     }, []);

//     const handleFilter = (priceRange: any) => {
//         // Filter room data based on selected price range
//         const filtered = roomData.filter(room => {
//             const roomPrice = parseFloat(room.price);
//             switch (priceRange) {
//                 case 'lessThan500k':
//                     return roomPrice < 500000;
//                 case '500kTo1m':
//                     return roomPrice >= 500000 && roomPrice <= 1000000;
//                 case '1mTo2m':
//                     return roomPrice > 1000000 && roomPrice <= 2000000;
//                 case '2mTo5m':
//                     return roomPrice > 2000000 && roomPrice <= 5000000;
//                 case 'greaterThan5m':
//                     return roomPrice > 5000000;
//                 default:
//                     return true; // Show all by default
//             }
//         });

//         setFilteredData(filtered);
//     };
//     // function selectedPriceRange(arg0: string): void {
//     //     throw new Error('Function not implemented.');
//     // }
//     return (
//         <>
//             <div className='container'>
//                 <div className='row' >
//                     <div className="col-lg-3 col-md-3 col-sm-12" >
//                         <div className="card">
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <h5 className="card-title" style={{ fontFamily: 'Segoe UI', fontSize: 'both' }}>See price</h5>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <p className="card-title ml-5"><a href="#">Reset</a></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="row">
//                                         <form action="">
//                                             <div className="row">
//                                                 <form action="">
//                                                     <div className="col-md-6 col-lg-12">
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input radio-input"
//                                                                 type="radio"
//                                                                 name="priceRange"
//                                                                 value="lessThan500k"
//                                                                 id="radioLessThan500k"
//                                                                 onChange={() => setSelectedPriceRange('lessThan500k')} // Update selected price range
//                                                             />
//                                                             <label className="form-check-label text-input" htmlFor="radioLessThan500k">
//                                                                 Nhỏ hơn 500.000 đ
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input radio-input"
//                                                                 type="radio"
//                                                                 name="priceRange"
//                                                                 value="500kTo1m"
//                                                                 id="radio500kTo1m"
//                                                                 onChange={() => setSelectedPriceRange('500kTo1m')} // Update selected price range
//                                                             />
//                                                             <label className="form-check-label text-input" htmlFor="radio500kTo1m">
//                                                                 500.000 đ - 1.000.000 đ
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input radio-input"
//                                                                 type="radio"
//                                                                 name="priceRange"
//                                                                 value="1mTo2m"
//                                                                 id="radio1mTo2m"
//                                                                 onChange={() => setSelectedPriceRange('1mTo2m')} // Update selected price range
//                                                             />
//                                                             <label className="form-check-label text-input" htmlFor="radio1mTo2m">
//                                                                 1.000.000 đ - 2.000.000 đ
//                                                             </label>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-md-6 col-lg-12">
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input radio-input"
//                                                                 type="radio"
//                                                                 name="priceRange"
//                                                                 value="2mTo5m"
//                                                                 id="radio2mTo5m"
//                                                                 onChange={() => setSelectedPriceRange('2mTo5m')} // Update selected price range
//                                                             />
//                                                             <label className="form-check-label text-input" htmlFor="radio2mTo5m">
//                                                                 2.000.000 đ - 5.000.000 đ
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input
//                                                                 className="form-check-input radio-input"
//                                                                 type="radio"
//                                                                 name="priceRange"
//                                                                 value="greaterThan5m"
//                                                                 id="radioGreaterThan5m"
//                                                                 onChange={() => setSelectedPriceRange('greaterThan5m')} // Update selected price range
//                                                             />
//                                                             <label className="form-check-label text-input" htmlFor="radioGreaterThan5m">
//                                                                 Lớn hơn 5.000.000 đ
//                                                             </label>
//                                                         </div>
//                                                     </div>
//                                                     <br />
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-primary text-btn-filter d-flex justify-content-center"
//                                                         onClick={() => handleFilter(selectedPriceRange)} // Pass selected price range
//                                                     >
//                                                         Filter
//                                                     </button>
//                                                 </form>
//                                             </div>

//                                             <br />
//                                         </form>
//                                     </div>
//                                 </div>
//                                 <hr /><br /><br />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-9">
//                         {filteredData.map(room => (
//                             <div className='select-room p-2' data-aos="fade-up" key={room.id_type}>
//                                 <div className="row booking-room">
//                                     <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
//                                         <img
//                                             className="imgroom"
//                                             src={room.image} // Assuming the API provides an image URL
//                                             alt=""
//                                             height={'100%'}
//                                             width={'100%'}
//                                         />
//                                     </div>
//                                     <div className="col-lg-4 col-sm-6 d-flex justify-content-center pt-2">
//                                         <div>
//                                             <h4 style={{ fontFamily: 'Segoe UI' }}>{room.name}</h4>
//                                             <div className='pt-3 icons'>
//                                                 <p className='icon-bed'>
//                                                     <FontAwesomeIcon icon={faBed} /> <p className='bed-room-booking'>{room.info}</p>
//                                                 </p>
//                                                 <p className='icon-person'>
//                                                     <FontAwesomeIcon icon={faPerson} /> <p className='person-room-booking'>{room.people} Adults</p>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-sm-6 d-flex justify-content-center line pt-2">
//                                         <div className="pice-room">
//                                             <h2 className="pice ">{room.price}đ</h2>
//                                             <button type="button" className="btn btn-primary text-btn-bookingroom">Select</button><br />
//                                             <p className="inforoom">Only {room.status} Rooms Left !</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Display filtered room data */}

//         </>
//     );

// }
