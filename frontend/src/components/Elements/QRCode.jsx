import React from 'react';
import { useQRCode } from 'react-qrcodes';

export default function QRCode() {
  const [inputRef] = useQRCode({
    // TODO: textに遷移させたいURLを記述する
    text: 'entrypoint/breweries/3',
    options: {
      level: 'H', //誤り訂正レベル
      margin: 3, //QRコードの周りの空白マージン
      scale: 1,
      width: 200,
    },
  });

  return <canvas ref={inputRef} />;
};
