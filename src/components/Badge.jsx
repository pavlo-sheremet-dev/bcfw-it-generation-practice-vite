import PropTypes from 'prop-types';

export const Badge = ({ children }) => {
  return <span className='font-black tracking-wider ml-1'>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};
