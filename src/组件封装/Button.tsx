import React from 'react';

const Button = (props) => {

    const [type,shape] = props;

   const  getButtonInfo = () => {

    if(!type || type === 'primary') {
        
    }else if(type === 'link') {

    }


    }
    return getButtonInfo();
}

export default Button;