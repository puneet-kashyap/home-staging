import ImageGallery from 'react-image-gallery';
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = (props) => {
    return (
      <div>
       <ImageGallery
          items={props.album}
          showThumbnails={true}
          autoPlay={true}
          disableThumbnailScroll={true}
          slideOnThumbnailHover={true}
          startIndex={0}
        />
      </div>
    );
}

export default Gallery;
