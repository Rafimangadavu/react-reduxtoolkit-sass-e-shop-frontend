
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css';
import Home from './components/Home';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from './redux/cart';

function App() {
  const {userDetail} = useSelector((state) =>state.cart);
  const dispatch = useDispatch();
  const counterRef = useRef(1);

  const fetchUser = async (id)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch(updateUser(response.data));
}

  useEffect(() => {
    
    fetchUser(counterRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  const loadMoreUsers = () =>{
    fetchUser(++counterRef.current);
  };

 


  return (
    <Router>
    <div className="App">
    <Header />
    <button onClick={loadMoreUsers}>Add More Users</button>
      <pre style={{color: "white"}}>{JSON.stringify(userDetail, undefined, 4)}</pre>
    <Routes>
    <Route index element = {<Home />} />
      </Routes>
      
    </div>
    </Router>
    
    
  )

}

export default App;
