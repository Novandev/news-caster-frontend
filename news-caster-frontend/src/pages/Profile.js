import React,{Component} from 'react'
import { connect } from 'react-redux';
import { userActions } from '../_actions';




class Profile extends Component {

  constructor(props) {
    super(props);


    this.state = {
        userProfile:this.props.userProfile
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

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
        dispatch(userActions.login(email, password));
    }
}

render() {
    console.log(this.state.userProfile)

    return (
       <div>
           <h2>Profile</h2>
       </div>
    );
  }
}

function mapStateToProps(state) {
  const { userProfile } = state.authentication;
  return {
      userProfile
  };
}

export default connect(mapStateToProps)(Profile);
