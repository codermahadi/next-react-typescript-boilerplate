import React, {useCallback, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import Link from 'next/link';

const LeftNav = () => {
    const [open, setOpen] = useState(false);
    const handleClick = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <>
            <Link href="#">
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'}/>
                </ListItem>
            </Link>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <TrendingUpOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={'Report'}/>
                {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button>
                        <ListItemIcon><TrendingUpOutlinedIcon/></ListItemIcon>
                        <ListItemText primary="Report"/>
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};
export default LeftNav;
