export { }
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Book/Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
// import '../Book/SelectRoom.css'


type FilterProps = {
    handleFilter: (priceRange: string) => void;
    handleReset: () => void;
};

export default function Filter({ handleFilter }: FilterProps) {
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const handleReset = () => {
        setSelectedPriceRange('');
        handleFilter('');
    };
    return (
        <>
            <div className='container'>
                <div className='row' >
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-lg-12 col-md-10 col-sm-10" >
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5 className="card-title" style={{ fontFamily: 'Segoe UI', fontSize: 'both' }}>See price</h5>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <p className="card-title ml-5"><a href="#" onClick={handleReset}><FontAwesomeIcon className='faArrowsRotate' icon={faArrowsRotate} /></a></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <form action="">
                                        <div className="filters">
                                        <div className="col-lg-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input radio-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    value="lessThan500k"
                                                    id="radioLessThan500k"
                                                    onChange={() => setSelectedPriceRange('lessThan500k')} // Update selected price range
                                                />
                                                <label className="form-check-label text-input" htmlFor="radioLessThan500k">
                                                    Nhỏ hơn 500.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input radio-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    value="500kTo1m"
                                                    id="radio500kTo1m"
                                                    onChange={() => setSelectedPriceRange('500kTo1m')} // Update selected price range
                                                />
                                                <label className="form-check-label text-input" htmlFor="radio500kTo1m">
                                                    500.000 đ - 1.000.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input radio-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    value="1mTo2m"
                                                    id="radio1mTo2m"
                                                    onChange={() => setSelectedPriceRange('1mTo2m')} // Update selected price range
                                                />
                                                <label className="form-check-label text-input" htmlFor="radio1mTo2m">
                                                    1.000.000 đ - 2.000.000 đ
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input radio-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    value="2mTo5m"
                                                    id="radio2mTo5m"
                                                    onChange={() => setSelectedPriceRange('2mTo5m')} // Update selected price range
                                                />
                                                <label className="form-check-label text-input" htmlFor="radio2mTo5m">
                                                    2.000.000 đ - 5.000.000 đ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input radio-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    value="greaterThan5m"
                                                    id="radioGreaterThan5m"
                                                    onChange={() => setSelectedPriceRange('greaterThan5m')} // Update selected price range
                                                />
                                                <label className="form-check-label text-input" htmlFor="radioGreaterThan5m">
                                                    Lớn hơn 5.000.000 đ
                                                </label>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                 
                                        <div className="d-flex justify-content-center">
                                        <button
                                        type="button"
                                        className="btn btn-primary text-center text-btn-filter"
                                        onClick={() => handleFilter(selectedPriceRange.toString())} // Chuyển thành chuỗi
                                    >
                                        <p className='text-button'>Filter</p>
                                    </button>
                                        </div>
                                        
                                </div>
                                <hr /><br /><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
        </>
    );

}
