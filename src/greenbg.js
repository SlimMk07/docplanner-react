import React, { Component } from 'react';
import Box from './greenbg-box';

const boxes = [
    {
    className:'Box-1',
    image:require('./1.PNG'),
    titre:'Leader in 10 countries',
    texte:' Turkey, Spain, Italy, \nCzech Republic, Mexico, Brazil, \nColombia, Argentina and Chile'
},
    {
    className:'Box-2',
    image:require('./2.PNG'),
    titre:'1 million\n appointments \n',
    texte:'booked last month',

},
    {
    className:'Box-1',
    image:require('./3.PNG'),
    titre:'30 million unique\n patients\n',
    texte:'visit us every month',

},
    {
    className:'Box-3',
    image:require('./4.PNG'),
    titre:'2 million active\n doctors\n',
    texte:'trust in our solutions',

},
]

class Greenbg extends Component {
    
    render() { 
        return (  
            <section className="part5 backg">
            <div className="container">
                <div className="ness row justify-content-between md-flex-wrap-flex">
                    <div className="col-5 title-side">
                        <p className="txt1">The world's <br/>biggest healthcare platform </p> <br/>
                        <span className="sp1">We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</span><br/>
                        <img src={require('./Capture-bg.png')} width="400" height="400"/>
                    </div>
                    <div className="col-6 boxes-side row">
                        <Box box={boxes} />
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
 
export default Greenbg;