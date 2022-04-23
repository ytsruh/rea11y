import moment from "moment";
export const functions = {
  validURL: (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  },
  wcagCodeFormatter: (str) => {
    const step1 = str.replaceAll(".", " ");
    const step2 = step1.replaceAll("_", ".");
    const step3 = step2.replaceAll(",", " & ");
    return step3;
  },
  dayjs: moment,
};
