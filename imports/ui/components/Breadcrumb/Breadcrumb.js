import React from "react";
import { Route, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const findRouteName = url => routes[url];

const getPaths = pathname => {
  const paths = ["/"];

  if (pathname === "/") return paths;

  pathname.split("/").reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="#">Home</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);
