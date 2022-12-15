import * as React from 'react';
import { getDataFromFirebase } from './database/getDataFromFirebase';
import './style.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="container-fluid py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://q-xx.bstatic.com/xdata/images/hotel/max500/46588552.jpg?k=17559bee4c6045624ffe8b4bfbcde640ed45277670c45ee5f77bf3ce1a0b645e&o="
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Painapo House</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://asset1.zankyou.com/images/mag-post/5c3/8c06/685//-/fr/wp-content/uploads/2017/08/deco-table-6-zotmariage.re_.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Evènementiel</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                      <a className="btn btn-outline-dark btn-lg" href="/Service">Cliquez ici</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6e/a8/63/caption.jpg?w=500&h=400&s=1"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Activiter</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                      <a className="btn btn-outline-dark btn-lg" href="/Activite">Cliquez ici</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
