import React, { Component, PropTypes } from 'react';
import './App.css';
import {Button,Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightGrid from './RightGrid';
import profile from './Images/profile.jpg';
import B from './Images/B.jpg';
//import img1 from './Images/img1.jpg';
//import img2 from './Images/img2.jpeg';
//import img3 from './Images/img3.jpg';
//import img4 from './Images/img4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faRocket } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
   <Container>
    
     <div className="left">
     
     <Row>
       <Col >
         <div className="left-area">
         <div className="profile">
         <img src={B} alt="B" style={{width: 55, height: 55,borderRadius:"15px 0 15px 0",margin:"15px 0 60px 0"}}/>
           <Row><Col xs sm md lg="2">
           
         <img src={profile} alt="profile" style={{width: 55, height: 55,borderRadius:"100px"}}/>
         </Col>
         <Col xs sm md lg="auto">
         <div className="is-active-name">
           Anand Agarwal
          </div>
          <div className="gmail">
           anand.a@bk.com
         </div>
         </Col>
         </Row>
         </div>
         <br/>
        <a href="abc" class="nav-item" className="is-active-left">Motivation</a><br /><br />
        
        <a href="abc" class="nav-item">Productivity</a>
        <Button class="btn btn-secondary " id="leftButton">Home Design</Button><br/><br/>
        <a href="abc" class="nav-item">Design</a><br/><br/>
        <a href="abc" class="nav-item">Study</a><br/><br/><br/>
        <div className="left-bottom">
        <Container>
        <Row>
          <Col xs sm md lg="2"> 
      <FontAwesomeIcon className="Rocket" icon={faRocket} size="2x"/>
      </Col>
          <Col sm="10">Pro account is more powerful. Get 30% off
          <Button class="btn btn-secondary " id="SeePro">See Pro</Button><br/><br/>
          </Col>
          </Row>
          </Container>
        </div><br/>
        <Row><Col>
        <a href="abc" class="nav-item" className="is-active-left">Logout</a><br /><br />
        </Col><Col xs sm md lg="2">
        <div className="leftPlus">
      <FontAwesomeIcon icon={faPlus}/>
      </div>
      </Col>
      </Row>
      </div>
        </Col>
      <Col xs sm md lg = "8">
     <div className="right">
     <div className="right-top">
      <div className="right-top-head">
        <Row>
          <Col xs sm md lg="9">
      <h1 className="Motivation"><b>Motivation</b></h1>
      </Col>
      <Col xs sm md lg="3">
      <div className="rightprofiles">
      <img className="img1" src="/img1.jpg" alt="profile" style={{width: 40, height: 40,borderRadius:"100px"}}/>
      <img className="img2" src="/img2.jpg" alt="profile" style={{width: 40, height: 40,borderRadius:"100px"}}/>
      <img className="img3" src="/img3.jpg" alt="profile" style={{width: 40, height: 40,borderRadius:"100px"}}/>
      <img className="img4" src="/img4.jpg" alt="profile" style={{width: 40, height: 40,borderRadius:"100px"}}/>
      <div className="Plus">
      <FontAwesomeIcon icon={faPlus}/>
      </div>
      </div>
      </Col>
      </Row>
       <nav class="nav">
          <a href="abc" class="nav-item " active-color="white"><div className="is-active">All</div></a>
          <a href="abc" class="nav-item">Articles</a>
          <a href="abc" class="nav-item">Podcast</a>
          <a href="abc" class="nav-item">Video</a>
          <a href="abc" class="nav-item">Downloads</a>
          <Button class="btn btn-secondary " id="PlayButton">Play All</Button>
          <span class="nav-indicator"></span>
        </nav>
       </div>  
       <div className="right-top-head-profile">
       
      </div>  
      </div>  
      <div className="right-bottom">
        <RightGrid/>
      </div>   
     </div>

     </Col>
     </Row>
     </div>
    
     
     </Container>
    </div>
  );
}

export default App;
