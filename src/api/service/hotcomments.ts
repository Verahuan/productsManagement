import { request } from 'umi'

export async function fetchComments(){
  const data=request("/api/comments",{
    method:'GET'
  })
  return data
}
