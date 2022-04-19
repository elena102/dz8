import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCat } from './redux/reducers/reducer';

function App() {
  const dispatch = useDispatch();
  const loadCat = useSelector(state => state.cat.cat);
  const loading = useSelector(state => state.cat.loading)
  useEffect(()=>{
    dispatch (loadCat())
  }, [])

  if (loading){
    return(
      <div>
        идет загрузка...
      </div>
    )

  }

  return (
    <div>
     {loadCat.map(search =>(
       <p>{search.title}</p>
     )
     )}
     
    </div>
  );
}

export default App;
