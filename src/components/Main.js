import React             from 'react'
import { Route, Routes, Switch } from "react-router-dom";
import Header            from '../header/Header';
import AboutUs           from './Aboutus/AboutUs';
import AllCars           from './AllCars/AllCars';
import Profile           from './profile/profile';
import SignInSide        from './SignIn/SignIn';
import SignUp            from './SignUp/SignUp';
import MyCity            from './citiesCatalog/index.js';
import CarFlow           from './carDetails';
import MyFeature         from './Features';

const Main = () => {
  return (

    <Routes>
      <Switch>
      <Route exact path="/" element={ <Header/> }/>
      <Route exact path="/carDescription/:id" element={ <CarFlow/> }/>
      <Route exact path="/SignIn" element={ <SignInSide/> }/>
      <Route exact path="/main" element={ <Header/> }/>
      <Route exact path="/SignUp" element={ <SignUp/> }/>
      <Route exact path="/city/:city" element={ <MyCity/> }/>
      <Route exact path="/Feature/:type" element={ <MyFeature/> }/>
      <Route exact path="/profile" element={ <Profile/> }/>
      <Route exact path='/aboutus' element={ <AboutUs/> }/>
      <Route exact path='/allcars' element={ <AllCars/> }/>
      </Switch>
    </Routes>
  )
}

export default Main
