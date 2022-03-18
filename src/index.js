
import React from 'react';

import  ReactDOM  from 'react-dom';
import App from './App';
import './globalStyle.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import SideBar from './Components/SideBar';
import Cards from './Components/Cards';
import Footer from './Components/Footer';



ReactDOM.render(
    <React.StrictMode>
       <Header/>
       <main>
           <section>
               <div className='first-section'>
                <SideBar/>
                <Banner/>
                </div>
                <Cards/>
            </section>
       </main>
       <footer>
           <Footer/>
       </footer>
    </React.StrictMode>
    ,document.getElementById('root')
);

