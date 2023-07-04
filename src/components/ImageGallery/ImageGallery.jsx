import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageCallery({ images }) {
  return (
    <ImageList>
      <ImageGalleryItem items={images} />
    </ImageList>
  );
}

export default ImageCallery;
