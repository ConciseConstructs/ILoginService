export interface IReadAuthIdRequest {
  saasName:string
  authId:string
}

export interface IReadAuthIdResponse {
  success:boolean
  details?:any
  thirdParty?:any
}