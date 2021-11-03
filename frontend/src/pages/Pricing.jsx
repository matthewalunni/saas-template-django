import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardImg,
  Row,
  Col,
} from 'reactstrap';
import Footer from './components/Footer';
import { Link, useHistory } from 'react-router-dom';

var linkStyle = {
  color: 'white',
  textDecoration: 'none'
}


function BootstrapCard(children) {
  return (
    <Card className="pricing-plan">
      <CardBody>
        <CardImg variant="top" src="https://images.unsplash.com/photo-1634514871782-2859f398ec53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80" />
        <CardTitle className="vertical-margin"><h5>{children.title}</h5></CardTitle>
        <CardText className="vertical-margin">{children.subtitle}</CardText>
        <ListGroup className="vertical-margin">
          <ListGroupItem>Unlimited Pages</ListGroupItem>
          <ListGroupItem>Unlimited Templates</ListGroupItem>
          <ListGroupItem>Unlimited Images</ListGroupItem>
          <ListGroupItem>Unlimited Storage</ListGroupItem>
          <ListGroupItem>Unlimited Users</ListGroupItem>
        </ListGroup>
        <Button
          color="primary w-100"
          onClick={children.onClick}

        >
          <Link
            to="/checkout"
            style={linkStyle}>
            Buy {children.title}
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
}

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.buy = this.buy.bind(this);
  }

  buy = (title) => {
    console.log(title);
    console.log("buy");
    let path = '/checkout/';
    let history = useHistory();
    history.push(path);
  }

  render() {
      return (
        <>
          <NavigationBar />
          <Container style={{ marginBottom: '100px' }}>
            <h1 className="center padded">Pricing Plans</h1>
            <main >
              {this.props.children}
              <p className="center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
              <Row className="pricing-plans center vertical-margined">
                <Col sm="4">
                  <BootstrapCard
                    onClick={() => this.buy("Free")}
                    title="Free"
                    subtitle="$0/month" />
                </Col>
                <Col sm="4">
                  <BootstrapCard
                    onClick={() => this.buy("Pro")}
                    title="Pro"
                    subtitle="$9/month" />
                </Col>
                <Col sm="4">
                  <BootstrapCard
                    onClick={() => this.buy("Enterprise")}
                    title="Enterprise"
                    subtitle="$49/month" />
                </Col>
              </Row>
            </main>
            <Footer />
          </Container>
        </>
      );
  }
}

export default Pricing;
