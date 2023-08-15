import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auto } from '@popperjs/core';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import './SelectRoom.css';

const SelectRoom = () => {
  return (
    <Container>
      <Row>
        <Col xs={auto} md={12} lg={3}>
          {/* Left sidebar content */}
          <div className="information-hotel-left">
            {/* ... */}
          </div>
        </Col>
        <Col lxs={auto} md={12} lg={6}>
          {/* Main room information */}
          <div className="information-hotel-room">
            {/* Room 1 */}
            <div className="detail-room">
              <div className="img-room">
                <Image
                  className="imgroom"
                  src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                  alt=""
                  fluid
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
                  <Button variant="primary" className="select">
                    Select
                  </Button>
                  <div className="inforoom">
                    Only 5 Rooms Left !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br />
        <div className='select-room p-2'>
          <div className="row">
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
              <img
                className="imgroom"
                src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </div>
            <div className="col-lg-4 d-flex justify-content-start pt-2">
              <div>
                <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                <div className='pt-3 icons'>
                  <p>
                    <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPerson} /> 3 Adults
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center line pt-2">
              <div className="pice-room">
                <h2 className="pice ">1.300.000đ</h2>
                <button type="button" className="btn btn-primary">Select</button><br />
                <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

              </div>
            </div>
          </div>
        </div><br />
        <div className='select-room p-2'>
          <div className="row">
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
              <img
                className="imgroom"
                src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </div>
            <div className="col-lg-4 d-flex justify-content-start pt-2">
              <div>
                <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                <div className='pt-3 icons'>
                  <p>
                    <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPerson} /> 3 Adults
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center line pt-2">
              <div className="pice-room">
                <h2 className="pice ">1.300.000đ</h2>
                <button type="button" className="btn btn-primary">Select</button><br />
                <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

              </div>
            </div>
          </div>
        </div><br />
        <div className='select-room p-2'>
          <div className="row">
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
              <img
                className="imgroom"
                src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </div>
            <div className="col-lg-4 d-flex justify-content-start pt-2">
              <div>
                <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                <div className='pt-3 icons'>
                  <p>
                    <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPerson} /> 3 Adults
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center line pt-2">
              <div className="pice-room">
                <h2 className="pice ">1.300.000đ</h2>
                <button type="button" className="btn btn-primary">Select</button><br />
                <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

              </div>
            </div>
          </div>
        </div><br />
        <div className='select-room p-2'>
          <div className="row">
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
              <img
                className="imgroom"
                src="https://images.prismic.io/website-hotell/38783ef3-89fb-40eb-b6b6-7848a12e4bd0_double+room+1.jpg?auto=compress,format"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </div>
            <div className="col-lg-4 d-flex justify-content-start pt-2">
              <div>
                <h4 style={{ fontFamily: 'Segoe UI' }}>Double Room</h4>
                <div className='pt-3 icons'>
                  <p>
                    <FontAwesomeIcon icon={faBed} /> 1 Double Bed 1m6
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPerson} /> 3 Adults
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-end line pt-2">
              <div className="pice-room">
                <h2 className="pice ">1.300.000đ</h2>
                <button type="button" className="btn btn-primary">Select</button><br />
                <p className="inforoom d-flex justify-content-center ">Only 5 Rooms Left !</p>

              </div>
            </div>
          </div>
        </div><br />
      </div>
    </div>
            {/* ... (Room 2 and Room 3) ... */ }
          </div >
        </Col >
  <Col >
    {/* Right sidebar content */}
    <div className="information-hotel-right">
      {/* ... */}
    </div>
  </Col>
      </Row >
    </Container >
  );
};

export default SelectRoom;
