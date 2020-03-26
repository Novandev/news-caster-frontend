import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { interestActions } from '../../_actions';
// import MultipleValueTextInput from 'react-multivalue-text-input';


class EditPractice extends Component {

    constructor(props) {
      super(props);

      this.state = {
        category: '',
        rank:'',

        submitted: false
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount(){
      const { dispatch } = this.props;
      const {id} = this.props.match.params;
      dispatch(interestActions.getOneEditInterest(id));
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { rank,category} = this.state;
    const { dispatch } = this.props;
    
    const interestId = this.props.interest.id;

    if(rank === ""){
        this.setState({rank: this.props.interest.rank})
    }
    if(category === ""){
        this.setState({category: this.props.interest.category})
    }
   
    setTimeout(()=>{
        dispatch(interestActions.editOneInterest(
            this.state.rank,
            this.state.category,
            interestId))

    },1500)
    
    //   this.setState({ submitted: true });

  }
  
  render() {
      let {interest,isLoading} =this.props;
      let { rank,category,submitted } = this.state;

      return (
         <div>
             {isLoading ?
             <div>....Loading</div>
             :
             <div>
                 <p>hello</p>
                 {interest &&
                 <div>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="rank">Rank</label>
                        <input type="text"  name="rank" value={rank} placeholder={interest.rank} onChange={this.handleChange} />
                        {submitted && !rank &&
                            <div>Rank is required</div>
                        }

                    <label htmlFor="category">Category</label>
                        <input type="text"  name="category" value={category} placeholder={interest.category} onChange={this.handleChange} />
                        {submitted && !category &&
                            <div>Category is required</div>
                        }
                    {/* <label htmlFor="interest_type">Practice Type</label>
                                <select name="interest_type" value={this.state.interest_type} placeholder={interest.interest_type} onChange={this.handleChange}>
                                    <option value="City">City</option>
                                    <option value="State">State</option>
                                </select>
                                {submitted && !interest_type &&
                                    <div >Please select a interest type</div>
                                } */}
                         <button >Save interest changes</button>
                    </form>
                 </div>
                 }
             </div>
            }
         </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    const { interest,isLoading } = state.getOneEditInterest;
    return {
        interest,
        isLoading
    };
  }
  
  export default  withRouter(connect(mapStateToProps)(EditPractice));
  