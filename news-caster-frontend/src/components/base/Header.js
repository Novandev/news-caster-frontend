import React, { Component} from 'react';
import styled from 'styled-components';
import {colors} from '../../common/styles/colors'
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

const NavBar = styled.div`
    width:100vw;
    background-color:${colors.newsCasterMainBlack};
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media (max-width: 650px) { 
        flex-direction:column;
    }
`
const NavLink = styled(Link)`
    padding:0 10px 0 10px;

    color:${colors.newsCasterMainGreen}
    
`
const NavAccount = styled.div`
    align-self:flex-end;
    display:flex; flex-direction:row;
    justify-content:space-between;
    // width:20%;
`

const NavLoginLogout = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    // width:20%;
`


class Header extends Component{

  constructor(props) {
    super(props);

    this.state = {
        user:"",
    };
    this.logOut = this.logOut.bind(this)

}
    logOut(){

        this.props.dispatch(userActions.logout());

    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem('user'))){
            this.setState({
                user:JSON.parse(localStorage.getItem('user'))['username']
            })
        }
        
    }
    // console.log(authTokens)
    render(){
        let {user} = this.state;
        console.log(user)
        return(
            <NavBar>
                <NavLink to='/'>
                    <p>News Caster</p>
                </NavLink>
                <NavAccount>
                    {!user&& 
                        <NavLoginLogout>
                            <NavLink to='/login'>
                                <p>Login</p>
                            </NavLink>
                            <NavLink to='/signup'>
                                <p>Sign-up</p>
                            </NavLink>
                        </NavLoginLogout>
                    }
                    <NavLink to="/profile">
                        <p>{user}</p>
                    </NavLink>
                    <NavLink onClick={()=>this.logOut()}>
                        <p>Logout</p>
                    </NavLink>
                </NavAccount>
                
                
            </NavBar>
        )
    }
}

    function mapStateToProps(state) {
        const { loggingIn,user } = state.authentication;
        return {
            loggingIn,
            user
        };
      }
      
      export default connect(mapStateToProps)(Header);

