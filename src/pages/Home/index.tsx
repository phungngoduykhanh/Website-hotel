import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Session1 from './Session1'
import Session2 from './Session2'
import './home.css';
import Session4 from './Session4';
import Session3 from './Session3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Header />
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Footer />
    </>
  )
}
