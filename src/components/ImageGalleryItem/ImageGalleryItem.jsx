import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

function ImageGalleryItem({ items }) {
  return (
    <>
      {items.map(({ id, webformatURL }) => {
        return (
          <GalleryItem key={id}>
            <GalleryImg src={webformatURL} alt="" />
          </GalleryItem>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
