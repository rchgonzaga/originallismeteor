import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Divider,
  Container,
  List,
  Grid,
  Dropdown,
  Form,
  Breadcrumb
} from "semantic-ui-react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "./redux/actions";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb size="small">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section link>Projetos</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section active>Principal</Breadcrumb.Section>
        </Breadcrumb>
      </div>
    );
  }
}

export default Projects;
