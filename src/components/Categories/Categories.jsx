import styled from 'styled-components';

function Categories({ categories }) {
    return (
        <StyledSection>
            <h5>Categories</h5>
            <ul className='categories-list'>
                {categories.map((item, index) => (
                    <li className='categories-list__item' key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </StyledSection>
    );
}

const StyledSection = styled.div`
    background-color: #000;
    min-height: 50px;
    color: #fff;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .categories-list {
        display: flex;
        gap: 1.2rem;

        &__item {
            border: 1px solid #fff;
            padding: 0.5rem 1rem;
            border-radius: 100vh;
        }
    }
`;

export default Categories;
