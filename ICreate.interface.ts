export interface ICreateRequest {
  saasName:string
  authId:string
  acctId:string
  userId?:string
  name?:string
}

export interface ICreateResponse {
  success:boolean
  details?:any
  thirdParty?:any
}