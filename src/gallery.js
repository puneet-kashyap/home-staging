import ImageGallery from 'react-image-gallery';
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'
 
class Gallery extends React.Component {
 
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  
 
  render() {
 
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
 
    return (
        <div>
      <ImageGallery
        items={images}
        showThumbnails={true}
        slideInterval={9000}
        shareFullscreenButton={true}
        onImageLoad={this.handleImageLoad}/>
        </div>
    );
  }
 
}

export default Gallery;