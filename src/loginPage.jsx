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

class LoginPage extends Component {
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
                      <h2>Sign in</h2>
                    </div>
                  </Row>
                  <Row>
                    <div class="square">
                      <div class="image-padding"></div>
                      <Col md="auto">
                        <Image
                          src="./img/icon.jpg"
                          width="100"
                          height="100"
                          fluid
                        />
                      </Col>
                    </div>
                  </Row>
                  <div class="profile-buttons-padding"></div>
                  <div class="mx-auto">
                    {
                      <Form>
                        {" "}
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label>Email address: </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Label>Password: </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </Form>
                    }
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

export default LoginPage;
