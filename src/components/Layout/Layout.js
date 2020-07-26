import React from 'react';
import Aux from '../../hoc/Auxilary'

const Layout = (props) => {
    return (
        <Aux>
            {props.children}
        </Aux>
        
    );
};

export default Layout;