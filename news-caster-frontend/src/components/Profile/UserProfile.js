import React,{Component, Suspense, lazy } from 'react'
import {useParams} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class UserProfile extends Component {

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount(){
      const { dispatch } = this.props;
      const {id} = this.props.match.params;
      dispatch(userActions.getUserProfile());
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
  
  handleSubmit(e) {
      e.preventDefault();
  }
  
  render() {
      let {userProfile,isLoading} =this.props;

      return (
         <div>
             {isLoading ?
             <div>....Loading</div>
             :
             <div>
                 {userProfile &&
                 <div>
                        <div>
                            <p>Profile Username</p>{userProfile.userName}<br/>
                            <p>Profile Email</p>{userProfile.email}<br/>
                        </div>
                 </div>
                 }
             </div>
            }
         </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    const { userProfile,isLoading } = state.authentication;
    return {
        userProfile,
        isLoading
    };
  }
  
  export default  withRouter(connect(mapStateToProps)(UserProfile));