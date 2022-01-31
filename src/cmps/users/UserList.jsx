import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserPreview from './UserPreview';
import Loader from '../layout/Loader';

function UserList() {
    const { users, loading } = useContext(GithubContext);

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 ls:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <UserPreview user={user} key={user.id} />
                ))}
            </div>
        );
    } else {
        return <Loader />;
    }
}

export default UserList;
