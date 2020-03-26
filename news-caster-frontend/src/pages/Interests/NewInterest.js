import React,{Component} from 'react'
import { connect } from 'react-redux';
import { interestActions } from '../../_actions';

import MultipleValueTextInput from 'react-multivalue-text-input';


class NewInterest extends Component {

  constructor(props) {
    super(props);


    this.state = {
        rank: '',
        category:'',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}


componentDidUpdate(){

    // console.log(this.state.tags)
}
handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)

    this.setState({ submitted: true });
    const { rank,category, } = this.state;
    const { dispatch } = this.props;

        if (rank &&category) {
            dispatch(interestActions.postNewInterest(rank,category));
        }
    
}

render() {
    const { loggingIn } = this.props;
    let { rank,category, submitted } = this.state;

    return (
        <form name="form" onSubmit={this.handleSubmit}>
            <label htmlFor="rank">Rank</label>
            <input type="text"  name="rank" value={rank} onChange={this.handleChange} />
              {submitted && !rank &&
                  <div>Rank is required</div>
              }

            <label htmlFor="category">Category</label>
                <input type="text"  name="category" value={category} onChange={this.handleChange} />
                {submitted && !category &&
                    <div>Category is required</div>
                }


            {/* <label htmlFor="interest_type">Interest Type</label> */}
            {/* <select name="interest_type" value={this.state.interest_type} onChange={this.handleChange}>
                <option value="SG">Song</option>
                <option value="SL">Scales</option>
                <option value="WU">Warm-up</option>
                <option value="SC">Show Case</option>
            </select>
            {submitted && !interest_type &&
                <div >Please select a interest type</div>
            } */}

           
        
            <button >Create a new interest</button>
            {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
        </form>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn,postNewInterest } = state.postNewInterest;
  return {
      loggingIn,
      postNewInterest
  };
}

export default connect(mapStateToProps)(NewInterest);
