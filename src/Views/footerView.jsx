import React from 'react';
import { Link} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import { yellow } from '@material-ui/core/colors';
import CopyrightIcon from '@material-ui/icons/Copyright';

const footerView = () => {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-2 ">
                    Comparte
                </div>
                <div className="col-1">
                    <TwitterIcon style={{color:yellow[500]}} fontSize="large"/>
                </div>
                <div className="col-1">
                    <FacebookIcon style={{color:yellow[500]}} fontSize="large"/>
                </div>
                <div className="col-1">
                    <WhatsAppIcon style={{color:yellow[500]}} fontSize="large"/>
                </div>
                <div className="col-1">
                    <EmailIcon style={{color:yellow[500]}} fontSize="large"/>
                </div>
                <div className="col-5">
                    <CopyrightIcon style={{color:yellow[500]}} fontSize="large"/><span style={{fontSize:['13px']}}>epillo Solutions 2020.</span>
                </div>
           </div>
        </div>
    );
}
 
export default footerView;