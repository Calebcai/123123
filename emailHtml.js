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
            <p style="font-family: Arial, Helvetica, sans-serif;">时间好快！在一起${lovingDays}天啦，愿神和人喜悦你的心以及智慧和身量一起增长哦～</p>
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
              更新新经文啦！记得背背哦❤
            </p>
            <p style="font-weight:800; font-size: 15px; text-indent: 2em;">${word}</p>
          </div>
          <!-- 天气 -->
          <div>
            <p>
              <b style="color:#416ded">天冷了注意保暖呀~</b>
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
                <p style="color:#a1a1a1;font-size:15px;">灵修内容，到时候，我在这里弄个在线笔记本我寻思（开发中）</p>
              </li>
            </ul>
          </div>
          <p style="color:#a1a1a1;font-size:15px;">我今天为你祝福，愿耶和华赐福给你，愿你所行路径充满祝福，平安与喜乐</p>
          <p style="color:#a1a1a1;font-size:15px;">白日的太阳必不伤你，夜晚的月亮必不害你，你出你入他必保护你</p>
          <div style="text-align:right">
              <p style="color:#a1a1a1;font-size:12px;">for：我超爱你哒，要有不断向前的勇气和信心哦！爱❤️不会失败！ by: 你的boy</p>
          </div>
        </div>
      </body>
    </html>
    `;
  }
  
  module.exports = fn;
  
