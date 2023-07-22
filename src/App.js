
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories'
import Results from './Results';
import ReviewPage from './ReviewPage';
import Join from './Join';
import Help from './Help';


import './index.css';
import NotFound from './NotFound';

function App() {

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route path='/Categories' element={<Categories></Categories>} />
        <Route path='/ReviewPage/:game' element={<ReviewPage></ReviewPage>} />
        <Route path='/Results/:category' element={<Results></Results>} />
        <Route path='/Join' element={<Join></Join>} />
        <Route path='/Help' element={<Help />}/>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Router>
    
  );
}

export default App;
