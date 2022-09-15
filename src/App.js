import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';





const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*'
              element={<Dialogs
                dialogsData={props.appState.messagePage.dialogsData}
                messagesData={props.appState.messagePage.messagesData} />} />
            <Route path='/profile'
              element={<Profile
                profilePage={props.appState.profilePage}
                addPost = {props.addPost}
                updateNewPostText = {props.updateNewPostText} />} />
            <Route path='/news'
              element={<News />} />
            <Route path='/music'
              element={<Music />} />
            <Route path='/settings'
              element={<Settings />} />
          </Routes>

        </div>
      </div>
    
  );
}





export default App;
