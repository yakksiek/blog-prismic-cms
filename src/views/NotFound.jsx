import { Link } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';

function NotFound() {
    return (
        <>
            <PageNavigation pageName='' />
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
