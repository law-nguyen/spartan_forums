import React, { Component } from "react";
import Routes from "./routes";
import { browserHistory } from "react-router";
import "./main.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Badge,
  Row,
  Col,
  Dropdown,
  Container
} from "react-bootstrap";
class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <div>
        {/*profile card*/}
        <div>
          <div class="top-padding"></div>
          <Row>
            <Col md={{ span: 3, offset: 0 }}>
              <Container>
                {/* <Button variant="light"> Back to Home</Button> */}
              </Container>
            </Col>
            <Col md="auto"></Col>
            <Col>
              <div class="profile-card">
                <Container>
                  <Row>
                    <div class="mx-auto">
                      <h2>Profile Page</h2>
                    </div>
                  </Row>
                  <Row>
                    <div class="yellow-square">
                      <div class="image-padding"></div>
                      <Col>
                        <Image
                          src="./img/b man.png"
                          width="100"
                          height="100"
                          fluid
                        />
                      </Col>
                    </div>
                  </Row>
                  <div class="profile-buttons-padding"></div>
                  {/* <Row> testing stuff
                    <div class="col px-md-5">
                      <div class="p-3 border bg-light">1 of 2</div>
                    </div>
                    <div class="col px-md-5">
                      <div class="p-3 border bg-light">2 of 2</div>
                    </div>
                  </Row> */}
                  <div class="mx-auto">
                    <h6>Username: b man</h6>
                    <h6>Name: Lawrence Nguyen</h6>
                    <h6>Major: CMPE (LUL)</h6>
                    <h6>Interests: pad</h6>
                  </div>
                  <Row>
                    {/* <div class="col px-md-3"></div> */}
                    {/* <div class="col "> */}
                    <div class="mx-auto">
                      <Button className="mr-3 btn-primary">Add Friend</Button>
                      {/* </div> */}
                      {/* <div class="col"> */}
                      <Button className="ml-3 btn-danger">Block</Button>
                    </div>
                    {/* <div class="col px-md-3"></div> */}
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
