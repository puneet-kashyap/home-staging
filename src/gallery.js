import ImageGallery from 'react-image-gallery';
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'


const prudhommeImages = [
      {
        original: require('./img/Prudhomme/IMG_0009.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0009.jpg'),
      },
      {
        original: require('./img/Prudhomme/IMG_0012.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0012.jpg'),
      },
      {
        original: require('./img/Prudhomme/IMG_0013.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0013.jpg'),
      },
      {
        original: require('./img/Prudhomme/IMG_0024.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0024.jpg'),
      },
      {
        original: require('./img/Prudhomme/IMG_0029.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0029.jpg'),
      },
      {
        original: require('./img/Prudhomme/IMG_0033.jpg'),
        thumbnail: require('./img/Prudhomme/IMG_0033.jpg'),
      }
    ]

const Gallery = (props) => {
    return (
      <div>
       <ImageGallery
          items={props.album}
          showThumbnails={true}
          autoPlay={true}
          disableThumbnailScroll={false}
          slideOnThumbnailHover={true}
          startIndex={0}
        />
      </div>
    );
}
Gallery.defaultProps = {
    album: prudhommeImages
}
export default Gallery;