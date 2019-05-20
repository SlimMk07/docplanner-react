import React, { Component } from 'react';
class Links extends Component {
    
    render() { 
        return ( 
            <section className="part4 container">
                <div className="row">
                    <div className="col-lg-3 icon-links-txt">
                        <p>We are a global<br/> company<br/> with local culture</p>
                    </div>
                    <div className="col-lg-9 icon-links">
                        <div className="ligne1">
                            <a href="#"><img src={require('./Capture333.PNG')} width="20" height="20"/>znamylekar</a>
                            <a href="#"><img src={require('./Capture333.PNG')} width="20" height="20"/>doctoralia</a>
                            <a href="#"><img src={require('./Capture333.PNG')} width="20" height="20"/>miodottore</a>
                            <a href="#"><img src={require('./Capture333.PNG')} width="20" height="20"/>doktortakvimi</a>
                        </div>
                        <div className="ligne2">
                            <a href="#"><img src={require('./Capture333.PNG')}width="20" height="20"/>znamylekar</a>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Links ;