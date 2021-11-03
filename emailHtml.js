function fn(weatherData, lifeData, word, imgurl, lovingDays) {
    const { daily: weatherDataDaily } = weatherData;
    const { daily } = lifeData;
  
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin:0;padding:0;">
        <div>
          <!-- 天数 -->
          <div>
            <p style="font-family: Arial, Helvetica, sans-serif;">今天是在一起的第${lovingDays}天,新的一天也要充满活力哦</p>
          </div>
          <!-- 图片 -->
          <div>
            <img
              style="width: 100%; max-width: 768px"
              src="${imgurl}"
              alt="图片"
            />
          </div>
          <!-- 每日一句#到时候换成经文 -->
          <div>
            <p style="color: #5c5ce9; font-size: 14px; text-indent: 2em; font-style: italic;">
              每日经文（应该都背完了吧你，这几个都是重复的，等我这周更新一波新的经文）
            </p>
            <p style="font-weight:800; font-size: 15px; text-indent: 2em;">${word}</p>
          </div>
          <!-- 天气 -->
          <div>
            <p>
              <b style="color:#416ded">记得随时增减衣物👗哦~</b>
              <br>
              <br>
              <b style="color:#7894e5">保定市今日的气温☁️</b>
              <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>
            </p>
            <ul>
              <li style="margin-bottom: 10px">
                ${daily[1].name}(${daily[1].category}):
                ${daily[1].text}
              </li>
              <li style="margin-bottom: 10px">
                ${daily[2].name}(${daily[2].category}):
                ${daily[2].text}
              </li>
              <li style="margin-bottom: 10px">
                ${daily[0].name}(${daily[0].category}):
                ${daily[0].text}
              </li>
              <li style="margin-bottom: 10px">
                <p>今日灵修链接：https://wx1.ebible.app/v2/articles/zh-cn/6/${lovingDays}</p>
                <p style="color:#a1a1a1;font-size:15px;">有时间记得灵修哦～我也会看的，你也看我们看一样的一起灵修哦</p>
              </li>
            </ul>
          </div>
          <p style="color:#a1a1a1;font-size:15px;">这个月的小惊喜马上就要送达啦，注意查收哦～ 天冷了要注意保暖啊</p>
          <div style="text-align:right">
              <p style="color:#a1a1a1;font-size:12px;">by:爱你的蔡先森</p>
          </div>
        </div>
      </body>
    </html>
    `;
  }
  
  module.exports = fn;
  
