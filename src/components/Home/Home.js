import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Home extends Component {

render(){
    return(
<div>
    <h2>Home is where the heart is but in this case its just another place on this site that has no functionality</h2>

<Button><Link to='/feeling'>Next</Link></Button>
    <br/>

</div>

    );
}






}
export default Home;