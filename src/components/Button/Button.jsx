import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ children, type, clickHandler, classes }) {
    return (
        <StyledButton className={classes} onClick={clickHandler} type={type}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    type: 'button',
    classes: '',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    classes: PropTypes.string,
};

const StyledButton = styled.button`
    font-size: var(--font-size-button);
    border: none;
    background-color: transparent;
    font-family: var(--font-extra-bold);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover {
        border-color: #000;
    }
`;

export default Button;
