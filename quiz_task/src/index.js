import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
 import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
 import './assets/vendor/boxicons/css/boxicons.min.css';
 import './assets/vendor/glightbox/css/glightbox.min.css';
 import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
   
    <Header />
    <Home />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
