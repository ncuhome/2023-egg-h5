export const formatISODate = (isoDate) => {
  // ISO 格式日期字符串

  // 创建 Date 对象
  const date = new Date(isoDate);

  // 定义 formatting 对象,设置格式化格式
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // 进行格式化
  const formatter = new Intl.DateTimeFormat("zh-CN", options);
  const formattedDate = formatter.format(date);

  console.log(formattedDate);
  // 输出 "2023年9月4日 凌晨1点08分34秒"
  return formattedDate
};
