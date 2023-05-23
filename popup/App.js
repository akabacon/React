import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import user from './photo/user.jpg' 
function App() {  
  const [open, setOpen] = useState(false);
  const Menus = ['profile', "your apps", 'settings', 'Logout'];
    return (
    <div>
      <img
        onClick={() => setOpen(!open)}
        src={user} alt='user'
        className='round'
      />
      {
        open && (
          <div className='menu'>
            <ul>
              {
                Menus.map((Menu) => (
                  <li key={Menu}>{Menu}</li>
                ))
              }
            </ul>
          </div>)
      }

    </div>

  );
}

export default App;
