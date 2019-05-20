import React, { Component } from 'react';

class Title extends Component {
   
    render() { 
        return ( <div className="container">
     
            <section className="part1">
                <div className=" titre1 row justify-content-center">
                    <div className="col-4">
                        <img src={require('./Capture.PNG')}/>
                    </div>
                    <div className="col-9.5">
                        <h1>Making the healthcare experience more human</h1>
                    </div>
                </div>
            </section>
            <section className="part2">
                <div className="row justify-content-around">
                    <div className="col-5.5">
                        <p className="txt1">We want patients to find the perfect doctor and book an<br/> appointment in the
                            most easy way. The patient journey should be <br/> enjoyable, and that's why we are always
                            next to them: to help them<br/> find the best possible care. Anytime, anywhere.</p>
                    </div>
                    <div className="col-5.5">
                        <p className="txt2">We also help doctors to better manage their practice and build their<br/> online
                            reputation. With our integrated end-to-end solution, doctors<br/> are able not only to
                            improve their online presence, but also to<br/> devote their time to what really matters:
                            their patients.</p>
                    </div>
                </div>
            </section>
        </div> );
    }
}
 
export default Title;