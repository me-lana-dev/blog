import { Dayjs } from "dayjs";

export const rules = {
  required: (message: string = "Required to fill") => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if (value.isAfter(Date())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
