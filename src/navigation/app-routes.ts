export enum AppRoute {
  /**************************로그인**************************/
  LOGIN         = 'Login',                    /*로그인*/
  INIT_PASS     = 'Initialization Password',  /*비밀번호 초기화*/
  /**************************로그인**************************/
  /**************************메인화면**************************/
  ORDER             ='Order',                     /*주문*/
  DELIVERY          ='Delivery',                  /*배달중*/
  DEL_FIN           ='Delivery Finish',           /*완료*/
  ORDER_DETAILS     ='Order Details',             /*주문상세*/
  DELIVERY_DETAILS  ='Delivery Details',       /*주문상세*/
  DELFIN_DETAILS    ='DelFin Details',           /*주문상세*/
  /**************************메인화면**************************/
  /**************************사이드 매뉴**************************/
  /*NOTICE        ='Notice',                    /*공지*/
  /*ACC_INFO      ='Account Information',       /*계정정보*/
  /*ACC_INFO_BNK  ='Bank Account Information',  /*계좌정보*/
  /*WITHDRAWAL    ='Withdrawal',                /*출금*/
  /*POINT_RPT     ='Point History',             /*포인트 내역*/
  /*DEL_RPT       ='Delivery Report',           /*대행내역*/
  /*APP_SET       ='Application Setting',       /*앱설정*/

  NOTICE        =/*'Notice',*/                    '공지',
  ACC_INFO      =/*'Account Information',*/       '계정정보',
  ACC_INFO_BNK  =/*'Bank Account Information',*/  '계좌정보',
  WITHDRAWAL    =/*'Withdrawal',*/                '출금',
  POINT_RPT     =/*'Point History',*/             '포인트 내역',
  DEL_RPT       =/*'Delivery Report',*/           '대행내역',
  APP_SET       =/*'Application Setting',*/       '앱설정',
  /**************************사이드 매뉴**************************/
  AUTH = 'Auth',
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up',
  RESET_PASSWORD = 'Reset Passrord',
  HOME = 'Home',
  TODO = 'ToDo',
  TODO_IN_PROGRESS = 'ToDo In Progress',
  TODO_DONE = 'ToDo Done',
  TODO_DETAILS = 'ToDo Details',
  PROFILE = 'Profile',
  ABOUT = 'About',
}
