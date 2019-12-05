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
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "B man",
        major: "CMPE",
        interests: "eating"
      },
      toggle: {
        block: false,
        message: false,
        edit: false
      },
      temp: {}
    };
  }

  componentDidMount() {
    this.setState({ temp: { ...this.state.user } });
  }

  change(event, id) {
    id == "name" &&
      this.setState({
        temp: {
          ...this.state.temp,
          name: event.target.value
        }
      });

    id == "major" &&
      this.setState({
        temp: {
          ...this.state.temp,
          major: event.target.value
        }
      });
    id == "interests" &&
      this.setState({
        temp: {
          ...this.state.temp,
          interests: event.target.value
        }
      });
    id == "password" &&
      this.setState({
        temp: {
          ...this.state.temp,
          password: event.target.value
        }
      });
  }

  BlockModalButton() {
    //const [modalShow, setModalShow] = React.useState(false);

    return (
      <div>
        <div>
          <Button
            variant="danger"
            onClick={() => {
              this.setState({ toggle: { block: true } });
            }}
          >
            <custom>Block</custom>
          </Button>
        </div>
        <Modal isOpen={this.state.toggle.block}>
          <ModalHeader>ARE YOU SURE?</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this user? They're kinda cute and
            they'll be gone forever if you do.
          </ModalBody>
          <ModalFooter>
            <Button variant="danger">Yes, they're dead to me</Button>
            <Button
              variant="light"
              onClick={() => {
                this.setState({ toggle: !this.state.toggle.delete });
              }}
            >
              No, they're chill
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  EditModalButton() {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
      <div>
        <div>
          <Button
            type="danger"
            onClick={() => {
              this.setState({ toggle: { edit: true } });
            }}
          >
            <custom>Edit</custom>
          </Button>
        </div>

        <Modal isOpen={this.state.toggle.edit}>
          <ModalHeader>Edit Existing Information About You</ModalHeader>
          <ModalBody>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder={this.state.user.name}
                  onChange={event => {
                    this.change(event, "name");
                  }}
                />
                <Form.Text className="text-muted">
                  What's your name again?
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Major</Form.Label>
                <Form.Control
                  type="major"
                  placeholder={this.state.user.major}
                  onChange={event => {
                    this.change(event, "major");
                  }}
                />
                <Form.Text className="text-muted">What's your major?</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={event => {
                    this.change(event, "password");
                  }}
                />
                <Form.Text className="text-muted">Make it secure.</Form.Text>
              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({
                  user: this.state.temp,
                  toggle: !this.state.toggle.edit
                });
              }}
            >
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                this.setState({ toggle: !this.state.toggle.edit });
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  render() {
    return (
      <div>
        {/* Profile Card */}
        {/* <div className="profile-card"> */}
        <div className="wrapper">
          <div className="form-wrapper">
            <div className="margin">
              <h2>User Profile</h2>
            </div>
            {/* <div className="center"> */}
            {/* <ul className="profileInfo"> */}
            <div className="margin">
              <Container>
                <Image
                  src="./img/b man.png"
                  roundedCircle
                  width="90px"
                  height="110px"
                />
              </Container>
            </div>

            <Badge pill variant="primary">
              {this.state.user.membership}
            </Badge>
            <h3>{this.state.user.name}</h3>
            <h5>Major: {this.state.user.major}</h5>
            <h5>Interests: {this.state.user.interests}</h5>

            {/* <div className="profileButtons">
              <Col>{this.EditModalButton}</Col>
            </div> */}

            {/* <Row> */}
            {/* <div className="marginButton"> */}
            <div className="margin-bottom"></div>
            <div className="profileButtons-mlbutton">
              {this.EditModalButton()}
            </div>
            <div className="profileButtons-mrbutton">
              {this.BlockModalButton()}
              {/* <div className="margin"></div> */}
              {/* <div className="margin"></div> */}
              {/* </div> */}
              {/* </Row> */}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
