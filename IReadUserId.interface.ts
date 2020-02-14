export interface IReadUserIdRequest {
  userId:string
}

export interface IReadUserIdResponse {
  success:boolean
  details?:any
  thirdParty?:any
}