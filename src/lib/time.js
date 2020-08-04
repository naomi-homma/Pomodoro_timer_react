  //残り時間の計算及び「分：秒」へ変換する関数
  //これをsetする
  export const secToMMSS = (sec) => {
    let remainigTime = {};
    remainigTime = {
      restMin: String(Math.floor((sec / 60) % 60)).padStart(2, '0'),
      restSec: String(Math.floor((sec) % 60)).padStart(2, '0')
    };
    return `${remainigTime.restMin}:${remainigTime.restSec}`
  };
  