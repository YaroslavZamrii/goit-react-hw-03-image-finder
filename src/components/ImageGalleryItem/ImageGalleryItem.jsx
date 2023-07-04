import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

function ImageGalleryItem({ items, openModal }) {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <GalleryItem key={id}>
            <GalleryImg
              onClick={() => openModal(largeImageURL, tags)}
              src={webformatURL}
              alt={tags}
            />
          </GalleryItem>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
