export class UtilUseCases {
  public static verifyValueNumber(item: number | undefined): number {
    return item !== undefined ? item : 0;
  }

  public static verifyValueString(item: string | undefined): string {
    return item !== undefined ? item : "";
  }

  public static verifyValueBoolean(item: boolean | undefined): boolean {
    return item !== undefined ? item : false;
  }

  public static verifyValueStringArray(items: string[] | undefined): string[] {
    let isArrayString = true;

    if (items !== undefined) {
      for (const item in items) {
        if (typeof item !== "string") {
          isArrayString = false;
        }
      }
    }
    return isArrayString ? items : [];
  }
}
