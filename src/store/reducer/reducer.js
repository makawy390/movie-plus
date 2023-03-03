
const init =  {
    form : "Login",   
    language : "en",
    count : '',
    loader : true,
    numberOfMovies : 1
}

function loginReducer(state = init , action){
    switch (action.type){
        case "SET_LOGIN":
            return{
                ...state , form: action.payload
            };
            case "SET_LANGUAGE":
                return{
                    ...state, language: action.payload
                };

                case "SET_COUNT":
                    return {
                        ...state , count : action.payload
                    };
            case "SET_LOADER":
                return {
                    ...state ,  loader : action.payload 
                };
                case "Number_Of_Movies": 
                return {
                    ...state , numberOfMovies : action.payload
                }
            
            default :
            return state;
    }
}
export default loginReducer;
