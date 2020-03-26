import React,{Component} from 'react'
import { connect} from 'react-redux';
import { interestActions } from '../../_actions';




class AllInterests extends Component {

  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillMount(){
    const { dispatch } = this.props;
    dispatch(interestActions.getAllInterests());
}
handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

}

render() {

    return (
       <div>
           {this.props.isLoading ?
           <div>....Loading</div>
           :
           <div>
               {this.props.interests &&<div>
                {this.props.interests.map( interest =>{
                   return <div>
                       {interest.rank}<br/>
                       {interest.category}<br/>
                       </div>
                })}
               </div>
               }
           </div>
          }
       </div>
    );
  }
}

function mapStateToProps(state) {
  const { interests,isLoading } = state.interests;
  return {
      interests,
      isLoading
  };
}

export default connect(mapStateToProps)(AllInterests);
