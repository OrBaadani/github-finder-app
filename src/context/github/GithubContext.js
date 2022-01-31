import { createContext, useReducer } from 'react';
import { createRoutesFromChildren, useNavigate } from 'react-router-dom';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        currUser: {},
        repos: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                currUser: state.currUser,
                repos: state.repos,
                dispatch,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
export default GithubContext;
