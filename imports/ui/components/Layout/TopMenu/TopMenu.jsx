import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Menu,
  Icon,
  Header,
  Divider,
  Container,
  Dropdown
} from "semantic-ui-react";

class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu fluid style={style}>
        <Container fluid>
          <Menu.Item as="a" header onClick={this.props.toggleVisibility}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>

          <Dropdown item simple text="Dropdown" position="right">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    );
  }
}

const style = {
  marginBottom: "0px",
  borderRadius: "0px",
  backgroundColor: "#f5f5f5"
};

export default TopMenu;
