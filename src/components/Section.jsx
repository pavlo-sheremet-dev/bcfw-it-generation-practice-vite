import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return (
    <section className='pt-14 pb-20'>
      <div className='container'>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
