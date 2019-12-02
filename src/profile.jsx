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
            Block
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
            variant="primary"
            onClick={() => {
              this.setState({ toggle: { edit: true } });
            }}
          >
            Edit
          </Button>
        </div>

        <Modal isOpen={this.state.toggle.edit}>
          <ModalHeader>Modal title</ModalHeader>
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
                <Form.Text className="text-muted">what is your major</Form.Text>
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
                this.setState({ user: this.state.temp });
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
        <Navbar bg="light" expand="lg">
          {/* If Logo on top left is clicked, redirect to home page */}
          <Navbar.Brand href="/posts">
            <Image src="./img/icon.jpg" width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Spartan Forums</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>

              <Nav.Link href="/add-post">
                <Image src="./img/new_post.png" width="30" height="30" />
              </Nav.Link>

              <Nav.Link href="#inbox">
                <Image src="./img/mail.jpg" width="30" height="32" />
                <Badge pill variant="danger" class="iconBadge">
                  2{/* put in lower right  and resize */}
                </Badge>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            {/* Adds the profile icon top right */}
            <div class="">
              <Dropdown alignRight>
                <Dropdown.Toggle variant="light">
                  <Image
                    src="./img/b man.png"
                    width="30"
                    height="30"
                    thumbnail
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">
                    <p class="text-danger">Sign Out</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <h2>User Profile</h2>
          <div className="center">
            <ul className="profileInfo">
              <Container>
                <Image src="./public/img/unknown.png" roundedCircle />
              </Container>
              <Badge pill variant="primary">
                {this.state.user.membership}
              </Badge>
              <h3>{this.state.user.name}</h3>
              <h5>Major: {this.state.user.major}</h5>
              <h5>Interests: {this.state.user.interests}</h5>

              <Row>
                <Col>{this.EditModalButton()}</Col>
                <Col>{this.BlockModalButton()}</Col>
              </Row>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
