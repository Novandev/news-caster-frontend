import React,{Component, Suspense, lazy } from 'react'
import {useParams} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { interestActions } from '../../_actions';

class OneInterest extends Component {

    constructor(props) {
      super(props);
  
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount(){
      const { dispatch } = this.props;
      const {id} = this.props.match.params;
      dispatch(interestActions.getOneInterest(id));
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
  
  handleSubmit(e) {
      e.preventDefault();
  }
  
  render() {
      console.log(this.props)
      let {interest,isLoading} =this.props;

      return (
         <div>
             {isLoading ?
             <div>....Loading</div>
             :
             <div>
                 <p>hello</p>
                 {interest &&
                 <div>
                        <div>
                            {interest.rank}<br/>
                            
                            {interest.category}<br/>
                            <br/>
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
    const { interest,isLoading } = state.getOneInterest;
    return {
        interest,
        isLoading
    };
  }
  
  export default  withRouter(connect(mapStateToProps)(OneInterest));
  