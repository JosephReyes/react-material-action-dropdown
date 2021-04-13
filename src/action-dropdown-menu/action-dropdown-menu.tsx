import { Button, Divider, Menu, MenuItem } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React, { useState } from "react";
import { useStyles } from "./action-dropdown-menu.styles";
import { MenuItemShape } from "../index";

export function ActionDropdownMenu({
  menuItems,
  initialValue,
}: {
  menuItems: MenuItemShape[];
  initialValue: MenuItemShape;
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentValue, setCurrentValue] = useState<MenuItemShape>(initialValue);

  const handleClick = (menuItem: MenuItemShape) => {
    setCurrentValue(menuItem);
    setAnchorEl(null);
  };

  const renderedItems = menuItems.map((item, index) => (
    <MenuItem key={index} onClick={() => handleClick(item)}>
      {item.text}
    </MenuItem>
  ));

  return (
    <div className={classes.container}>
      <Button
        className={classes.actionButton}
        variant="contained"
        href={currentValue.link}
      >
        <p>{currentValue.text}</p>
      </Button>
      <Divider className={classes.divider} flexItem={true} />
      <Button
        className={classes.dropdownButton}
        variant="contained"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      >
        <ArrowDropDown className={classes.icon} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        getContentAnchorEl={null}
      >
        <div className={classes.menu}>{renderedItems}</div>
      </Menu>
    </div>
  );
}
