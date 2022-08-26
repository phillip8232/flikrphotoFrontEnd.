import React, { useState,useEffect } from 'react';
import axios from 'axios';

//should use components normally but wanna stick to the timeframe
function App() {
  const [photo,setPhoto] = useState([])

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

  return (
    <div className="App">
      <header className="App-header">
        {/* Testing */}
        <img src={`${photo[0].m}`} />
        <img src={`${photo[1].m}`} />
        <img src={`${photo[2].m}`} />
      </header>
    </div>
  );

}

export default App;
