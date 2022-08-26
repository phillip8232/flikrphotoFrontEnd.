import React, { useState,useEffect } from 'react';
import axios from 'axios';

//should use components normally but wanna stick to the timeframe 
//alot of super bad coding practices it hurts...
//using comments the wrong way aaaaaa
function App() {
  const [photo,setPhoto] = useState([])
  const [search,setSearch] = useState('')

  useEffect(() => {
    //fetch data from my local backend won't work if it's not up
    const fetchData = async () => {
      const photos = await axios(
        'http://localhost:5000/',
      );
      
      setPhoto(photos.data);
    };
 
    fetchData();
  }, []);

  //listing all my photo
  const listItems = photo.map((el) => <img src={el.m} width="100" height="100" />);

  return (
    
    <div className="App">
      <header className="App-header">
        {listItems}
        <br />
        <input type="text" placeholder="Search.." onChange={event => {setSearch(event.target.value)}} />
        {/* Well I got lazy on the search a bit so you can just search them by number */}
        {listItems[search]}
      </header>
    </div>
  );

}

export default App;
