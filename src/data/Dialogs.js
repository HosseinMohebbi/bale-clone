const randomDate = () => {
  // const randomSecond = Math.floor(Math.random() * (60 - 0) + 0);
  // const randomMinute = Math.floor(Math.random() * (60 - 0) + 0);
  // const randomHour = Math.floor(Math.random() * (13 - 1) + 1);
  // const randomDay = Math.floor(Math.random() * (7 - 0) + 0);
  // const randomMounth = Math.floor(Math.random() * (12 - 0) + 0);
  // const randomYear = Math.floor(Math.random() * (2024 - 1970) + 1970);
  // const nowDate = new Date();
  // const nowSecond = nowDate.getSeconds();
  // const nowMinute = nowDate.getMinutes();
  // const nowHour = nowDate.getHours();
  // const nowDay = nowDate.getDay();
  // const nowMounth = nowDate.getMonth();
  // const nowYear = nowDate.getFullYear();
  // // console.log(date);
  // if(randomYear === nowYear && randomMounth === nowMounth && (randomDay === nowDay)){
  //   return  `${randomHour}:${randomMinute}`
  // }else if (randomYear === nowYear && randomMounth === nowMounth && (nowDay - randomDay === 1)){
  //   return 'دیروز'
  // }else if (randomYear < nowYear || (randomYear === nowYear && randomMounth === nowMounth && (nowDay - randomDay > 1))){
  //   return `${randomMounth}/${randomDay}/${randomYear}`
  // }
  const random = Math.floor(Math.random() * (24 * 60 * 60 * 1000));
  const date = (Math.floor(Date.now())) - random;
  return date;
};

const randUnseen = () => {
  const random = Math.floor(Math.random() * 10);
  return random;
};

const dialogs = [
  {
    id: 1,
    title: "کانال رسمی بله",
    avatar: "/avatars/baleChanal.jpg",
    message: {
      status: 'seen',
      isOut: true,
      text: `برآمد باد صبح و بوی نوروز
      به کام دوستان و بخت پیروز
      مبارک بادت این سال و همه سال
      همایون بادت این روز و همه روز 
      (سعدی)`,
      date: randomDate(),
    },
    type: 3,
    unseen: randUnseen(),
  },
  {
    id: 2,
    title: "بله",
    avatar: "/avatars/bale.jpg",
    message: {
      status: null,
      isOut: false,
      text: `ورود جدید به حساب کاربری بله
      حسین عزیز، یک ورود جدید به حساب کاربری شما در تاریخ ۱۴۰۱/۱۲/۱۹ و ساعت ۱۱:۳۳:۵۴ به وقت تهران از یک دستگاه جدید ثبت شده است.
      دستگاه: Chrome, Windows
      اگر این ورود توسط شما انجام نشده است، می‌توانید با مراجعه به تب بیشتر > تنظیمات > حریم خصوصی و امنیت، در لیست مربوط به دستگاه‌های شناسایی شده، به آن نشست پایان دهید.`,
      date: randomDate(),
    },
    type: 3,
    unseen: randUnseen(),
  },
  {
    id: 3,
    title: "حسین شیره جونی",
    avatar: "/avatars/shire.jpg",
    message: {
      status: 'unseen',
      isOut: true,
      text: "تیر تو سرت نخوره",
      date: randomDate(),
    },
    type: 1,
    unseen: randUnseen(),
  },
  {
    id: 4,
    title: "بانک ملی",
    avatar: "/avatars/bankMelli.jpg",
    message: {
      status: null,
      isOut: false,
      text: "تیر تو سرت نخوره",
      date: randomDate(),
    },
    type: 2,
    unseen: randUnseen(),
  },
];

export const fakeDialogs = () => {
  return dialogs;
};
