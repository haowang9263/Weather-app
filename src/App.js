import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Page">
        <div className="Main">
          <div className="Main-top">
            <div className="Main-top-weatherinfo">
              <p>weatherinfo</p>

            </div>
            <div className="Main-top-country">
              <p>contry name</p>
            </div>
            
          </div>
          <div className="Main-bottom">
            <div className="Twitter">
              <div className="Twitter-1">
                <h2>twitter-1</h2>
              </div>
              <div className="Twitter-2">
                <h2>twitter-2</h2>
              </div>

            </div>
            <div className="weatherinfo">
              <div className="weatherinfo-MON">
                <h3>MON</h3>        
              </div>
              <div className="weatherinfo-TUE">
                <h3>TUE</h3>
              </div>
              <div className="weatherinfo-WED">
                <h3>WED</h3>
              </div>
              <div className="weatherinfo-THU">
                <h3>THU</h3>
              </div>
              <div className="weatherinfo-FRI">
                <h3>FRI</h3>
              </div>
              <div className="weatherinfo-SAT">
                <h3>SAT</h3>                
              </div>
              <div className="weatherinfo-SUN">
                <h3>SUN</h3>                
              </div>

            </div>

          </div>
          
        


        </div>

      </div>
     
    </div>
  );
}

export default App;
