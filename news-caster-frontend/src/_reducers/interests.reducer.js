import { interestConstants } from '../_constants';
const getOneinitialState =  { isLoading: false, interest:{} };

const postNewInitialState =  { isCreating: false, interest:{} };


export function interests(state = {}, action) {
  switch (action.type) {
    case interestConstants.GETALL_INTERESTS_REQUEST:
      return {
        ...state,
        isLoading:true,
        interests: action.interests
      };
    case interestConstants.GETALL_INTERESTS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        interests: action.interests
      };
    case interestConstants.GETALL_INTERESTS_FAILURE:
      return { 
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}


export function getOneInterest(state = getOneinitialState, action) {
  switch (action.type) {
    case interestConstants.GETONE_INTERESTS_REQUEST:
      return {
        ...state,
        isCreating:true,
        interest: action.interest
      };

    case interestConstants.GETONE_INTERESTS_SUCCESS:
      return {
        ...state,
        isCreating:false,
        interest: action.interest
      };

    case interestConstants.GETONE_INTERESTS_FAILURE:
      return { 
        isCreating: false,
        error: action.error
      };

    default:
      return state
  }
}


export function postNewInterest(state = postNewInitialState, action) {
  switch (action.type) {
    case interestConstants.POSTNEW_INTERESTS_REQUEST:
      return {
        ...state,
        isLoading:true,
        interest: action.interest
      };

    case interestConstants.POSTNEW_INTERESTS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        interest: action.interest
      };

    case interestConstants.POSTNEW_INTERESTS_FAILURE:
      return { 
        loading: false,
        error: action.error
      };

    default:
      return state
  }
}



// Edit section
export function getOneEditInterest(state = getOneinitialState, action) {
  switch (action.type) {
    case interestConstants.GETONEEDIT_INTERESTS_REQUEST:
      return {
        ...state,
        isCreating:true,
        interest: action.interest
      };

    case interestConstants.GETONEEDIT_INTERESTS_SUCCESS:
      return {
        ...state,
        isCreating:false,
        interest: action.interest
      };

    case interestConstants.GETONEEDIT_INTERESTS_FAILURE:
      return { 
        isCreating: false,
        error: action.error
      };

    default:
      return state
  }
}




export function postEditInterest(state = postNewInitialState, action) {
  switch (action.type) {
    case interestConstants.POSTEDIT_INTERESTS_REQUEST:
      return {
        ...state,
        isLoading:true,
        interest: action.interest
      };

    case interestConstants.POSTEDIT_INTERESTS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        interest: action.interest
      };

    case interestConstants.POSTEDIT_INTERESTS_FAILURE:
      return { 
        loading: false,
        error: action.error
      };

    default:
      return state
  }
}