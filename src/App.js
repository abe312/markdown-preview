/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Header from './components/Header';
// import Footer from './components/Footer';
import MdPreview from './containers/MdPreview';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <>
        <Provider store={store}>
          <Header />
          <MdPreview />
          {/* <Footer /> */}
        </Provider>
      </>
    </div>
  );
}

export default App;
