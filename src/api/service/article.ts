import { request } from 'umi'

export async function fetchArticle(){
  const data=request("/api/articles",{
    method:'GET'
  })
  return data
}
