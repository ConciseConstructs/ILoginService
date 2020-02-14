export interface IDeleteRequest {
  authId:string
}

export interface IDeleteResponse {
  success:boolean
  details?:any
  thirdParty?:any
}