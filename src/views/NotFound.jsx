import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <p style={{ marginTop: '1rem' }}>
                Page not found. Go back{' '}
                <strong>
                    <Link to='/'>Home</Link>
                </strong>
            </p>
        </>
    );
}

export default NotFound;
