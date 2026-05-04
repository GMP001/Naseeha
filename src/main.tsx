import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2f8277',
          colorPrimaryHover: '#3da18f',
          borderRadius: 8,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);









// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import 'antd/dist/reset.css';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
