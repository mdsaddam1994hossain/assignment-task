import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div>
        Hello 
       <Button type="primary">PRESS ME</Button>
       <DatePicker placeholder="select date" />
    </div>
  );
}

export default App;
