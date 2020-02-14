export interface IReadAuthIdRequest {
  authId:string
}

export interface IReadAuthIdResponse {
  success:boolean
  details?:any
  thirdParty?:any
}