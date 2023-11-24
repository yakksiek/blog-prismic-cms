import PropTypes from 'prop-types';

const heroArticlePropTypes = PropTypes.shape({
    data: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
});

export default heroArticlePropTypes;
