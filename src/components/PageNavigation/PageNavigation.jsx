import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UilArrowLeft } from '@iconscout/react-unicons';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

function PageNavigation({ pageName }) {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <StyledNav>
            <Button type='button' classes='button nav__btn' clickHandler={handleGoBack}>
                <UilArrowLeft className='nav__btn-icon' /> GO BACK
            </Button>
            <h4 className='nav__title'>{pageName.toUpperCase()}</h4>
        </StyledNav>
    );
}

PageNavigation.propTypes = {
    pageName: PropTypes.string.isRequired,
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: var(--margin-bottom-small);

    .nav__title {
        margin-bottom: 0;
    }

    .nav__btn {
        font-size: 0.75rem;

        &:hover .nav__btn-icon {
            transform: translateX(-5px);
            transition: transform 0.3s;
            font-size: 1rem;
        }
    }
`;

export default PageNavigation;
