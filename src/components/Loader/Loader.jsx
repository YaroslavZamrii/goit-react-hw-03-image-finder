import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ margin: '0 auto' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
    </>
  );
};
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
