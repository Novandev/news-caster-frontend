import React,{Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux';
import { userActions } from '../_actions';





class Profile extends Component {

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
  const Profile = React.lazy(() => import('../components/Profile/UserProfile'));
    // const Practices = React.lazy(() => import('../components/Practices/AllPractices'));
    return (
       <div>
           <h2>Profile</h2>
           <Suspense fallback={<div>Loading...</div>}>
           <Profile />
           </Suspense>
           
       </div>
    );
  }
}

function mapStateToProps(state) {
  
}

export default Profile;
