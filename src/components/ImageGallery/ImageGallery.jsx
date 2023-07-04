import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageCallery({ images, openModal }) {
  return (
    <ImageList>
      <ImageGalleryItem items={images} openModal={openModal} />
    </ImageList>
  );
}

ImageCallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCallery;
