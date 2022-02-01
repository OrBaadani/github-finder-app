import PropTypes from 'prop-types';
import RepoPreview from './RepoPreview';
function RepoList({ repos }) {
    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold text-base-content  card-title">
                    Latest Repositories
                </h2>
                {repos.map((repo) => (
                    <RepoPreview repo={repo} key={repo.id} />
                ))}
            </div>
        </div>
    );
}
RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;
