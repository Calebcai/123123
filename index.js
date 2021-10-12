const fetch = require('node-fetch');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

const sendEmail = require('./sendEmail');
const emailHtml = require('./emailHtml');
// 给dayjs添加时区选项
dayjs.extend(utc);
dayjs.extend(timezone);

const {
  fromDisplayText,
  fromDisplaySubText,
  user,
  to,
  weatherKey,
  location,
  type,
  tianXingKey,
  startDay,
} = require('./config');

async function init() {
  try {
    // 获取天气信息
    const weatherRes = await fetch(
      `https://devapi.qweather.com/v7/weather/3d?key=${weatherKey}&location=${location}`
    );
    const weatherData = await weatherRes.json();

    // 获取天气生活指数
    const lifeRes = await fetch(
      `https://devapi.qweather.com/v7/indices/1d?key=${weatherKey}&location=${location}&type=${type}`
    );
    const lifeData = await lifeRes.json();

    // 获取one一个文案及图片
    const oneRes = await fetch(
      `http://api.tianapi.com/txapi/one/index?key=${tianXingKey}`
    );
    const oneData = await oneRes.json();

    // 自定义words
    const words = [
      '恨能挑启争端，爱能遮掩一切过错。(箴言 10:12 和合本)',
      '我们若爱神，又遵守他的诫命，从此就知道我们爱　神的儿女。(约翰一书 5:2 和合本)',
      '在我圣山的遍处，这一切都不伤人，不害物；因为认识耶和华的知识要充满遍地，好像水充满洋海一般。（以赛亚书 11:9 和合本)',
      '你的法度奇妙，所以我一心谨守。你的言语一解开就发出亮光，使愚人通达。（诗篇 119:129-130 和合本)',
      '太太啊，我现在劝你，我们大家要彼此相爱。这并不是我写一条新命令给你，乃是我们从起初所受的命令。(约翰二书 1:5 和合本)',
      '应当一无挂虑，只要凡事藉着祷告、祈求，和感谢，将你们所要的告诉　神。　神所赐、出人意外的平安必在基督耶稣里保守你们的心怀意念。(腓立比书 4:6-7 和合本)',
      '我知道怎样处卑贱，也知道怎样处丰富；或饱足，或饥饿；或有余，或缺乏，随事随在，我都得了秘诀。我靠着那加给我力量的，凡事都能作。(腓立比书 4:12-13 和合本)',
      '在我敌人面前，你为我摆设筵席；你用油膏了我的头，使我的福杯满溢。(诗篇 23:5 和合本)',
      '你们来看　神所行的，他向世人所做之事是可畏的。(诗篇 66:5 和合本)',
      '求我们主耶稣基督的　神，荣耀的父，将那赐人智慧和启示的灵赏给你们，使你们真知道他，并且照明你们心中的眼睛，使你们知道他的恩召有何等指望，他在圣徒中得的基业有何等丰盛的荣耀；并知道他向我们这信的人所显的能力是何等浩大，(以弗所书 1:17-19 和合本)',
    ]
    const num = words.length
    const randomNum = Math.floor(Math.random()*num);
    const bible = words[randomNum];
    const { word, imgurl } = oneData.newslist[0];
    
    // 计算日期
    const lovingDays = dayjs(dayjs().tz('Asia/Shanghai')).diff(
      startDay,
      'days'
    );
    
    // 用邮件模版生成字符串
    const htmlStr = emailHtml(weatherData, lifeData, bible, imgurl, lovingDays);

    // 发送邮件;
    sendEmail({
      from: fromDisplayText,
      to,
      subject: fromDisplaySubText,
      html: htmlStr,
    });
  } catch (e) {
    // 发送邮件给自己提示
    sendEmail({
      from: '报错啦',
      to: user,
      subject: '定时邮件-报错提醒',
      html: '请查看github actions',
    });
  }
}

init();
