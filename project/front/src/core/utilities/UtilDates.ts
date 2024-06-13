import moment from "moment";

export class UtilDates {
  public static formatDateMoment(date: string, formatoCustom?: string) {
    let format = "MM/DD/YYYY";
    if (formatoCustom) {
      format = formatoCustom;
    }
    let formatDate = "-";
    if (
      date !== "" &&
      date !== null &&
      typeof date !== "undefined" &&
      moment(date).format(format) !== "Invalid date"
    ) {
      formatDate = moment(date).format(format);
    }

    return formatDate;
  }
}
