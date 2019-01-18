import React from 'react';
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { element } from 'prop-types';

const SideDrawer = (props) => {

const scrollToElement = (elements) => {
    scroller.scrollTo(element,{
        duration: 1500,
        delay:100,
        smooth: true
    }); 
}

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => console.log('Featured')}>
                    Event Time
                </ListItem>

                <ListItem button onClick={() => console.log('Venue Info')}>
                    Venue Info
                </ListItem>

                <ListItem button onClick={() => console.log('Highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={() => console.log('Pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={() => console.log('Location')}>
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;