import React,{Component} from 'react'
import { connect } from 'react-redux';
import { userActions } from '../_actions';




class Signup extends Component {

  constructor(props) {
    super(props);


    this.state = {
        email: '',
        username:'',
        password: '',
        confirmPassword:'',
        notMatched:'',

        submitted: false
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
    const { email,username, password,confirmPassword } = this.state;
    const { dispatch } = this.props;
    if(password!==confirmPassword){
        this.setState({matched:false})
    }else{
        if (email && password &&username) {
            dispatch(userActions.signUp(email,username, password));
        }
    }
    
}

render() {
    const { loggingIn } = this.props;
    const { email,username, password,confirmPassword,matched, submitted } = this.state;

    return (
        <form name="form" onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text"  name="email" value={email} onChange={this.handleChange} />
              {submitted && !email &&
                  <div>Email is required</div>
              }

            <label htmlFor="username">Username</label>
                <input type="text"  name="username" value={username} onChange={this.handleChange} />
                {submitted && !username &&
                    <div>Username is required</div>
                }


            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
            {submitted && !password &&
                <div >Password is required</div>
            }

            <label htmlFor="confirmPassword">Password</label>
            <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
            {submitted && !confirmPassword &&
                <div >Please confirm password</div>
            }
            {submitted && !matched &&
                <div >Passwords do not match</div>
            }
        
            <button >Login</button>
            {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
        </form>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

export default connect(mapStateToProps)(Signup);
