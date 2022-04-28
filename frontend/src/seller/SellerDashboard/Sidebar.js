import React from "react";
import "./sidebar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to='/seller/dashboard'>
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      {/* <Link> */}
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Shops">
            <Link to='/products'>
              <TreeItem nodeId="2" label="Products" icon={<PostAddIcon />} />
            </Link>

            <Link to='/shops'>
              <TreeItem nodeId="2" label="Shops" icon={<PostAddIcon />} />
            </Link>

            <Link to="createProduct">
              <TreeItem nodeId="3" label="Add Product" icon={<AddIcon />} />
            </Link>

            <Link to="createShop">
              <TreeItem nodeId="3" label="Add Shop" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      {/* </Link> */}
      {/* <Link>
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link> */}
      {/* <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link> */}
      {/* <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link> */}
    </div>
  );
};

export default Sidebar;
