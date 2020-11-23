import moment, { Moment } from "moment";

export class TimeMachine {
    static getTodayDayWithDayDifference(dayDifference: number): Moment {
        return moment().subtract(dayDifference, "days");
    }

    static getTodayDate(): Moment {
        return moment();
    }

    static getTodaysDateInTimestampFormat(): Moment {
        return moment();
    }

    static getTodaysDateInTimestampDateFormat(): Date {
        return moment().toDate();
    }

    static getCurrentTimestamp(): string {
        return moment().format("X");
    }

    static formatDate(date: string | Moment | Date, format: string): string {
        return moment(date).format(format);
    }

    static isBefore(first: Moment | Date, second: Moment | Date): boolean {
        return moment(second).isBefore(first);
    }

    static formatToFullDate(date: Moment | Date): string {
        return moment(date).format("HH:mm DD.MM.YYYY");
    }

    static formatToCalendarDate(date: Moment | Date): string {
        return moment(date).format("DD.MM.YYYY");
    }
}
