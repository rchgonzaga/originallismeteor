// import React, { Component } from "react";
// import { Link, Switch, Route, Redirect } from "react-router-dom";
// import {
//   Sidebar,
//   Segment,
//   Button,
//   Menu,
//   Image,
//   Icon,
//   Header,
//   Divider,
//   Container,
//   List,
//   Grid,
//   Dropdown,
//   Form,
//   Loader
// } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "./redux/actions";

// import GuestRoute from "../components/Routes/GuestRoute";
// import UserRoute from "../components/Routes/UserRoute";

// import Dashboard from "../views/Dashboard/Dashboard";
// import TopMenu from "../components/Layout/TopMenu/TopMenu";
// import AppSideBar from "../components/Layout/AppSideBar/AppSideBar";

// const Login = () => <h2>Login</h2>;

// class Full extends Component {
//   constructor(props) {
//     super(props);
//   }

//   toggleVisibility = () => {
//     this.props.actions.openMenu(!this.props.appGlobalState.appMenuOpened);
//   };

//   componentDidMount() {
//     this.props.actions.appLoading();
//   }

//   render() {
//     const { appReady } = this.props.appGlobalState;
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         {appReady === true ? (
//           <div style={{ width: "100%", height: "100%" }}>
//             <Sidebar.Pushable>
//               <AppSideBar visible={this.props.appGlobalState.appMenuOpened} />
//               <Sidebar.Pusher fluid as={Container}>
//                 <TopMenu toggleVisibility={this.toggleVisibility} />
//                 <div style={{ padding: "8px" }}>
//                   <Switch>
//                     <GuestRoute
//                       exact
//                       path="/dashboard"
//                       name="Dashboard"
//                       component={Dashboard}
//                     />

//                     <GuestRoute
//                       exact
//                       path="/login"
//                       name="Login"
//                       component={Login}
//                     />

//                     <Redirect exact from="/" to="/dashboard" />
//                   </Switch>
//                 </div>
//               </Sidebar.Pusher>
//             </Sidebar.Pushable>
//           </div>
//         ) : (
//           <div style={{ width: "100%", height: "100%", margin: "50% auto" }}>
//             <Loader active inline="centered" />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { appGlobalState: state.appGlobalState };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ ...actions }, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Full);

import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../components/Header/";
import Sidebar from "../components/Sidebar/";
import Breadcrumb from "../components/Breadcrumb/";
import Aside from "../components/Aside/";
import Footer from "../components/Footer/";

const Dashboard = () => {
  return <h3>Dashboard</h3>;
};

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route
                  path="/dashboard"
                  name="Dashboard"
                  component={Dashboard}
                />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
