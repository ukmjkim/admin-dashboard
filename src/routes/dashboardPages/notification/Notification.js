import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: true,
      showModal: false,
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleAlertDismiss(option) {
    switch (option) {
      case 'A':
        this.setState({ alertVisibleA: false });
        break;
      case 'B':
        this.setState({ alertVisibleB: false });
        break;
      case 'C':
        this.setState({ alertVisibleC: false });
        break;
      case 'D':
        this.setState({ alertVisibleD: false });
        break;
      default: this.setState({
        alertVisibleA: false,
        alertVisibleB: false,
        alertVisibleC: false,
        alertVisibleD: false,
      });
    }
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Making Dynamic Tag Wizards</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Dynamic Tags Templete by Industries</span>} >
              <Alert bsStyle="success">
                General (50) 
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                > go to Template list</a>.
              </Alert>
              <Alert bsStyle="info">
                Agency (20) 
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                > go to Template list</a>.
              </Alert>
              <Alert bsStyle="warning">
                Content Community (30) 
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                > go to Template list</a>.
              </Alert>
              <Alert bsStyle="danger">
                Retail & eCommerce (35) 
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                > go to Template list</a>.
              </Alert>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Dynamic Tag Usage by Client</span>} >
              {this.state.alertVisibleA ?

                <Alert bsStyle="success" onDismiss={() => this.handleAlertDismiss('A')} >
                    iProspect (32)
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); }}
                    className="alert-link"
                  > recommend dynamic tags to clients</a>.
                </Alert>
              : null}
              {this.state.alertVisibleB ?
                <Alert bsStyle="info" onDismiss={() => this.handleAlertDismiss('B')} >
                    Terakeet (12)
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); }}
                    className="alert-link"
                  > recommend dynamic tags to clients</a>.
                </Alert>
              : null}
              {this.state.alertVisibleC ?
                <Alert bsStyle="warning" onDismiss={() => this.handleAlertDismiss('C')} >
                    Wikia (2)
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); }}
                    className="alert-link"
                  > recommend dynamic tags to clients</a>.
                </Alert>
              : null}
              {this.state.alertVisibleD ?
                <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss('D')} >
                    Pinterest (41)
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); }}
                    className="alert-link"
                  > recommend dynamic tags to clients</a>.
                </Alert>
              : null}
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Dynamic Tags Management</span>} >
              <Button bsStyle="primary" bsSize="large" onClick={this.open} >
                Create new Dynamic Tag Templates
              </Button>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Header closeButton>
                  <Title>Modal Title</Title>
                </Header>
                <Body>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Body>
                <Footer>
                  <Button onClick={this.close}>Close</Button>
                  <Button bsStyle="primary"> Save changes</Button>
                </Footer>
              </Modal>
              <Button bsStyle="primary" bsSize="large" onClick={this.open} >
                Assign Templates to Clients
              </Button>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Tooltips and Popovers</span>} >
              <h4>Tooltip Demo</h4>
              <div>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id="tooltip1">Check this out!</Tooltip>}
                >
                  <Button>Tooltip on left</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip2">Check this out!</Tooltip>}
                >
                  <Button>Tooltip on top</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="tooltip3">Check this out!</Tooltip>}
                >
                  <Button>Tooltip on bottom</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="tooltip4">Check this out!</Tooltip>}
                >
                  <Button>Tooltip on right</Button>
                </OverlayTrigger>
              </div>
              <br />
              <h4>Clickable Popover Demo</h4>
              <div>
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={
                    <Popover id="popover1" title="Popover left">
                      <strong>Hello!</strong> Check this info.
                    </Popover>
               }>
                  <Button>Popover on left</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={
                    <Popover id="popover2" title="Popover top">
                      <strong>Hello!</strong> Check this info.
                    </Popover>
                }
                >
                  <Button>Popover on top</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover3" title="Popover bottom">
                      <strong>Hello!</strong> Check this info.
                    </Popover>
               }>
                  <Button>Popover on bottom</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover4" title="Popover right">
                      <strong>Hello!</strong> Check this info.
                    </Popover>
               }>
                  <Button>Popover on right</Button>
                </OverlayTrigger>
              </div>
            </Panel>
          </div>
        </div>
      </div>

    );
  }
}

export default Notification;
