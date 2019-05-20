import React, { Component } from 'react';

class Cards extends Component {
    
    render() { 
        return (  
            <section className="part3 container">
              <div className="vert col-5.5">
                <div className="txt-part">
                    <span className="sp1">For patients</span>
                    <p className="txt1">Find a doctor, book a visit and <br/> solve any health-related doubt</p>
                </div>
                <div className="img-part">
                    <div className="dropdown button-vert">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CHOOSE COUNTRY
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">CHOOSE COUNTRY</a>
                            <a className="dropdown-item" href="#">COLOMBIA</a>
                            <a className="dropdown-item" href="#">JAMAICA</a>
                            <a className="dropdown-item" href="#">TUNISIA</a>
                            <a className="dropdown-item" href="#">ZAMBIA</a>
                        </div>
                    </div>
                    <div className="img-vert">
                        <img src={require('./DOCVERT.png')} width="400" height="250"/>
                    </div>
                </div>
              </div>

              <div className=" bleu col-5.5">
                <div className="txt-part">
                    <span className="sp1">For doctors</span>
                    <p className="txt2">Save time managing visits and <br/> cut no-shows by half</p>
                </div>
                <div className="img-part">
                    <div className="img-bleu">
                    <img src={require('./DOCBLEU.png')}width="400" height="250"/>
                    </div>
                </div>
              </div>
        </section>
        );
    }
}
 
export default Cards;