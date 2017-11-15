// require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图片数据
var imageDatas = require('../data/imageDatas.json');
//自执行函数
imageDatas = (function geneImageUrl(imageDatasArr) {
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageUrl = require('../images/'+singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">
          
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
