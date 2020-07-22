export class AccInfoData {

  constructor(readonly id: string,
              readonly name: string,
              readonly phone: string,
              readonly dept: string,
            ) {
  }

  static jenniferGreen(): AccInfoData {
    return new AccInfoData(
      'dellap111',
      '홍배달',
      '010-4545-7878',
      '수영지점',
    );
  }
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}
