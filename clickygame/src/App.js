import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <nav className="navbar fixed-top sticky-top navbar-expand navbar-dark" 
               style={{ background: '#5133A4', minHeight: 70, color:'#FFFFFF'} }>
            <ul className="list-inline">
              <li className="list-inline-item">Clicky Game</li>
              <li className="list-inline-item">Click an image to begin!</li>
              <li className="list-inline-item">Score: <span id="score">0</span> | TopScore: <span id="topscore">0</span></li>
            </ul>
          </nav>

          <header>
            <div className="header">
              <h1>Clicky Game!</h1>
              <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </div>
          </header>

          <main className="container">
            <div className="row picturerow" id="row1">
              <div className="col-sm picture" id="col11">
              </div>

              <div className="col-sm picture" id="col12">
              </div>

              <div className="col-sm picture" id="col13">
              </div>
            </div> {/* row */}

            <div className="row picturerow" id="row2">
              <div className="col-sm picture" id="col21">
              </div>

              <div className="col-sm picture" id="col22">
              </div>

              <div className="col-sm picture" id="col23">
              </div>
            </div> {/* row */}

            <div className="row picturerow" id="row3">
              <div className="col-sm picture" id="col31">
              </div>

              <div className="col-sm picture" id="col32">
              </div>

              <div className="col-sm picture" id="col33">
              </div>
            </div> {/* row */}

            <div className="row picturerow" id="row4">
              <div className="col-sm picture" id="col41">
              </div>

              <div className="col-sm picture" id="col42">
              </div>

              <div className="col-sm picture" id="col43">
              </div>
            </div> {/* row */}

          </main>

          <footer>
            <div class="bottom fixed-bottom">
              <div className="row">
                <div className="col-2">
                  Clicky Game!
                </div>

                <div className="col-2">
                  <img alt="react" src="/public/img/React-icon.svg.png" />
                </div>
              </div>   {/* row */}
            </div>
          </footer>

        </div>     {/* container-fluid */} 
      </div>
    );
  }
}

export default App;
