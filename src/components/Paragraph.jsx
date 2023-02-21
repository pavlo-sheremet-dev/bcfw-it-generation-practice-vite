import PropTypes from 'prop-types';

export const Paragraph = ({ children }) => {
  return <p className='font-medium text-lg'>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
