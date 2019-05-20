import React from 'react';
import './App.css';
import Nav1 from './nav';
import Title from './title';
import Cards from './cards';
import Links from './links';
import Footer from './footer';
import Greenbg from './greenbg';
import Title2 from './title2';
import Villes from './villes';

const villes = [
  {
  image:require('./warsaw.png'),
  titre:'warsaw',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>
},
  {
  image:require('./barcelona.png'),
  titre:'Barcelona',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

},
  {
  image:require('./istanbul.png'),
  titre:'Istanbul',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

},
{
  image:require('./rome.png'),
  titre:'Rome',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

},
{
  image:require('./mexico-city.png'),
  titre:'Mexico-City',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

},
{
  image:require('./curitiba.png'),
  titre:'Curitiba',
  button:<button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

},
]


function App() {
  return (
    <div className="App">
      <Nav1 />
      <Title />
      <Cards />
      <Links />
      <Greenbg/>
      <Title2 />
      <div className="partie-img justify-content-center container">
        <div className='row villes'>
          <Villes ville={villes} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
