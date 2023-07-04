import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageCallery({ images, openModal }) {
  return (
    <ImageList>
      <ImageGalleryItem items={images} openModal={openModal} />
    </ImageList>
  );
}

export default ImageCallery;
