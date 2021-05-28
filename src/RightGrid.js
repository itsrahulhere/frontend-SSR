import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './RightGrid.css';
import {Button,Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function RightGrid() {
  return (
    <div className="RightGrid">
            <Container>
                <Row>
                <Col sm xs md lg="5">
                  <Col>
                    <div className="firstBox">
                   <b>Your<br/>limitation<br/>it's only<br/>your<br/> imagination.</b> 
                    <div className="Play">
                            <FontAwesomeIcon  icon={faPlay} size="xs"/>
                    </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="fourthBox">
                    
                    </div>
                    </Col>
                    </Col>
                    <Col><Row>
                    <Col sm xs md lg="6">
                    <div className="secondBox">
                      <Row>
                   <b>Great things<br/>never come from<br/>comfort zones.</b> <br/>
                   </Row>
                   <Row>
                     <Col sm xs md lg="8"></Col>
                     <Col sm xs md lg="4">
                   <div className="Play2">
                            <FontAwesomeIcon  icon={faPlay} size="xs"/>
                    </div>
                    </Col>
                    </Row>
                    </div>
                    </Col>
                    <Col sm xs md lg="6">
                    <div className="thirdBox">
                   <b>Dream it.<br/>Wish it.<br/>Do it.</b> 
                    </div>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                    <div className="fifthBox">

                   <b>Stay <br/>Focused.</b><br/>
                   <Button class="btn btn-secondary " id="StayFocusedBtn">Good Articles</Button><br/><br/>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                    <div className="sixthBox">
                    </div>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default RightGrid;
