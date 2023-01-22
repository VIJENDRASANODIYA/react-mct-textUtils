import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AnalyzeCom from "./AnalyzeCom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [changeTheme, setChangeTheme] = useState(false);
  const ThemeHandle = () => {
    setChangeTheme(!changeTheme);
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: `${changeTheme ? "black" : "white"}`,
        color: `${changeTheme ? "white" : "black"}`
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: `${changeTheme ? "pink" : "SlateBlue"}`,
          color: `${changeTheme ? "black" : "white"}`
        }}
      >
        <Toolbar variant="dense" className="d-flex justify-content-between">
          <Typography variant="h6" color="inherit">
            TextUtils Home
          </Typography>

          <label className="switch">
            <h6
              style={{ position: "absolute", right: "70px", fontWeight: "600" }}
            >
              Change Theme
            </h6>
            <div>
              <input onClick={ThemeHandle} type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
        </Toolbar>
      </AppBar>
      <AnalyzeCom border={changeTheme} />
    </div>
  );
}
