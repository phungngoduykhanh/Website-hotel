import { link } from 'fs';
import React, { Component } from 'react';
import './SelectRoom.css';
export default class SelectRoom extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="information-hotel-left"></div>
          <div className="information-hotel-room">
            <div className="detail-room">
              <div className="img-room">
                <img
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div className="titel-detail-room">
                <h2>Double Room</h2>
                <p>
                  <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
                </p>
                <p>
                  <i className="fa-solid fa-person"></i> 3 Adults
                </p>
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.300.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 5 Rooms Left !</p>
                </div>
              </div>
            </div>
            <div className="detail-room">
              <div className="img-room">
                <img
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/274b6f0e-6c93-4693-8f3e-8d2f515ccc88_Comfort+Triple+Room+7.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div className="titel-detail-room">
                <h2>Comfort Triple Room</h2>

                <p>
                  <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
                </p>
                <p>
                  <i className="fa-solid fa-person"></i> 2 Adults, 1 Child
                </p>
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.560.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 7 Rooms Left !</p>
                </div>
              </div>
            </div>
            <div className="detail-room">
              <div className="img-room">
                <img
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/ddf2755e-4623-4800-96dd-0f16a2c04d6d_Standard+Triple+Room+1.jpg?auto=compress,format"
                  alt=""
                />
              </div>
              <div className="titel-detail-room">
                <h2>Standard Studio</h2>

                <p>
                  <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
                </p>
                <p>
                  <i className="fa-solid fa-person"></i> 2 Adults
                </p>
              </div>

              <div className="pice-room">
                <div className="detail-pice-room">
                  <h2 className="pice">1.456.000đ</h2>
                  <button className="select">Select</button>
                  <p className="inforoom">Only 2 Rooms Left !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="information-hotel-right"></div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
// import './SelectRoom.css';

// export default class SelectRoom extends Component {
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col lg={3} md={12}>
//             {/* Left sidebar content */}
//             <div className="information-hotel-left">
//               {/* ... */}
//             </div>
//           </Col>
//           <Col lg={6} md={12}>
//             {/* Main room information */}
//             <div className="information-hotel-room">
//               {/* Room 1 */}
//               <div className="detail-room">
//                 <div className="img-room">
//                   <Image
//                     className="imgroom"
//                     src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
//                     alt="Double Room"
//                     fluid
//                   />
//                 </div>
//                 <div className="titel-detail-room">
//                   <h2>Double Room</h2>
//                   <p>
//                     <i className="fa-solid fa-bed"></i> 1 Double Bed 1m6
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-person"></i> 3 Adults
//                   </p>
//                 </div>

//                 <div className="pice-room">
//                   <div className="detail-pice-room">
//                     <h2 className="pice">1.300.000đ</h2>
//                     <Button variant="primary" className="select">
//                       Select
//                     </Button>
//                     <Alert variant="info" className="inforoom">
//                       Only 5 Rooms Left !
//                     </Alert>
//                   </div>
//                 </div>
//               </div>
//               {/* ... (Room 2 and Room 3) ... */}
//             </div>
//           </Col>
//           <Col lg={3} md={12}>
//             {/* Right sidebar content */}
//             <div className="information-hotel-right">
//               {/* ... */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
