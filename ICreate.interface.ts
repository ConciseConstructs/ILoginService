export interface ICreateRequest {
  authId:string
  acctId:string
  userId:string
}

export interface ICreateResponse {
  success:boolean
  details?:any
  thirdParty?:any
}