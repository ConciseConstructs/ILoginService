export interface IDeleteRequest {
  cognitoId:string
}

export interface IDeleteResponse {
  success:boolean
  details?:any
  thirdParty?:any
}