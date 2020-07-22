import Reactotron from 'reactotron-react-native'

export class Order {
  dlvryNo           : string; //배달번호
  stoBrcofcId       : string; //주문번호
  stoId             : string; //상점번호
  dlvryCusTelno     : string; //주문자 연락처
  dlvryCusAdres     : string; //지번주소
  dlvryCusRoadAdres : string; //도로명주소
  dlvryCusDetlAdres : string; //상세주소
  dlvryCusLa        : string; //고객좌표 ( 위도 )
  dlvryCusLo        : string; //고객좌표 ( 경도 )
  dlvryPaySeCd      : string; //결제구분코드
  dlvryFoodAmnt     : string; //음식금액
  dlvryAmnt         : string; //배달료
  dlvryPickReqTm    : string; //픽업요청시간
  dlvryRecvDt       : string; //주문일시
  dlvryDsptcDt      : string; //배차일시
  dlvryPickDt       : string; //픽업일시
  dlvryTcDt         : string; //배달완료시간
  dlvryDstnc        : string; //배달거리
  dlvryStateCd      : string; //배달상태코드
  dlvryReqCn        : string; //요청사항
  riderBrcofcId     : string; //라이더 소속
  riderId           : string; //라이더 아이디
  stoMtlty          : string; //상호
  stoTelno          : string; //가게 연락처
  riderNm           : string; //라이더 이름
  riderCelno        : string; //라이더 연락처

  constructor( data )
  {
    this.dlvryNo           = data.dlvryNo          ;
    this.stoBrcofcId       = data.stoBrcofcId      ;
    this.stoId             = data.stoId            ;
    this.dlvryCusTelno     = data.dlvryCusTelno    ;
    this.dlvryCusAdres     = data.dlvryCusAdres    ;
    this.dlvryCusRoadAdres = data.dlvryCusRoadAdres;
    this.dlvryCusDetlAdres = data.dlvryCusDetlAdres;
    this.dlvryCusLa        = data.dlvryCusLa       ;
    this.dlvryCusLo        = data.dlvryCusLo       ;
    this.dlvryPaySeCd      = data.dlvryPaySeCd     ;
    this.dlvryFoodAmnt     = data.dlvryFoodAmnt    ;
    this.dlvryAmnt         = data.dlvryAmnt        ;
    this.dlvryPickReqTm    = data.dlvryPickReqTm   ;
    this.dlvryRecvDt       = data.dlvryRecvDt      ;
    this.dlvryDsptcDt      = data.dlvryDsptcDt     ;
    this.dlvryPickDt       = data.dlvryPickDt      ;
    this.dlvryTcDt         = data.dlvryTcDt        ;
    this.dlvryDstnc        = data.dlvryDstnc       ;
    this.dlvryStateCd      = data.dlvryStateCd     ;
    this.dlvryReqCn        = data.dlvryReqCn       ;
    this.riderBrcofcId     = data.riderBrcofcId    ;
    this.riderId           = data.riderId          ;
    this.stoMtlty          = data.stoMtlty         ;
    this.stoTelno          = data.stoTelno         ;
    this.riderNm           = data.riderNm          ;
    this.riderCelno        = data.riderCelno       ;
  }

}
