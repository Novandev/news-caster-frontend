import React,{Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux';




class Interests extends Component {

  constructor(props) {
    super(props);


    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

}

render() {
    const AllInterests = React.lazy(() => import('../../components/Interests/AllInterests'));
    return (
       <div>
           <h2>Interests</h2>
           <Suspense fallback={<div>Loading...</div>}>
                <AllInterests/>
           </Suspense>
           
           
       </div>
    );
  }
}

function mapStateToProps(state) {
  
}

export default connect(mapStateToProps)(Interests);
