import { interestConstants } from '../_constants';
import { interestService } from '../_services';


export const interestActions = {
    getAllInterests,
    getOneInterest,
    postNewInterest,
    getOneEditInterest,
    editOneInterest
};


function getAllInterests() {
    return dispatch => {
        dispatch(request());

        interestService.getAllInterests()
            .then(
                interests => {
                    dispatch(success(interests))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request() { return { type: interestConstants.GETALL_INTERESTS_REQUEST } }
    function success(interests) { return { type: interestConstants.GETALL_INTERESTS_SUCCESS, interests } }
    function failure(error) { return { type: interestConstants.GETALL_INTERESTS_FAILURE, error } }

}


function getOneInterest(id) {
    return dispatch => {
        dispatch(request({id}));

        interestService.getOneInterest(id)
            .then(
                interest => {
                    dispatch(success(interest))
                },
                error => {
                    dispatch(failure(error))
                    /* Ill do better error handling later but the only reason you should get a null value back
                    is that either the server is down(you shouldnt get that far)
                    or its not your post
                    */ 
                    window.location = '/unauthorized'
                }
            );
    };

    function request(interest) { return { type: interestConstants.GETONE_INTERESTS_REQUEST ,interest }}
    function success(interest) { return { type: interestConstants.GETONE_INTERESTS_SUCCESS, interest }} 
    function failure(error) { return { type: interestConstants.GETONE_INTERESTS_FAILURE, error } }

}


function postNewInterest(title,description,interest_type,url_link,tagList){
    return dispatch => {
        dispatch(request({title,description,interest_type,url_link,tagList}));

        interestService.postNewInterest(title,description,interest_type,url_link,tagList)
            .then(
                interest => {
                    dispatch(success(interest))
                    window.location =`/interest/${interest.id}`;
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request(interest) { return { type: interestConstants.POSTNEW_INTERESTS_REQUEST ,interest }}
    function success(interest) { return { type: interestConstants.POSTNEW_INTERESTS_SUCCESS, interest }} 
    function failure(error) { return { type: interestConstants.POSTNEW_INTERESTS_FAILURE, error } }

}


function editOneInterest(title,description,interest_type,url_link,tagList,interestId){
    return dispatch => {
        dispatch(request({title,description,interest_type,url_link,tagList,interestId}));

        interestService.editOneInterest(title,description,interest_type,url_link,tagList,interestId)
            .then(
                interest => {
                    dispatch(success(interest))
                    window.location =`/interest/${interest.id}`;
                },
                error => {
                    dispatch(failure(error))
                    window.location = '/unauthorized';
                }
            );
    };

    function request(interest) { return { type: interestConstants.POSTEDIT_INTERESTS_REQUEST ,interest }}
    function success(interest) { return { type: interestConstants.POSTEDIT_INTERESTS_SUCCESS, interest }} 
    function failure(error) { return { type: interestConstants.POSTEDIT_INTERESTS_FAILURE, error } }

}



function getOneEditInterest(id) {
    return dispatch => {
        dispatch(request({id}));

        interestService.getOneEditInterest(id)
            .then(
                interest => {
                    dispatch(success(interest))
                },
                error => {
                    dispatch(failure(error))
                    window.location = '/unauthorized';
                }
            );
    };

    function request(interest) { return { type: interestConstants.GETONEEDIT_INTERESTS_REQUEST ,interest }}
    function success(interest) { return { type: interestConstants.GETONEEDIT_INTERESTS_SUCCESS, interest }} 
    function failure(error) { return { type: interestConstants.GETONEEDIT_INTERESTS_FAILURE, error } }

}