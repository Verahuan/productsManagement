import { request } from 'umi'
// request 方法的第一个参数是url
export const getRemoteList = async ({url}) => {
  return request(url, {
    method: "get",
  })
    .then((response) => {

      return response
    })
    .catch((error) => {
      console.log("error",error)
    })
}
export const postRemoteList = async ({ url,values, type }) => {
  // call那部分是传入的对象，所以使用的时候按照对象的使用来
  request(url, {
    method: 'post',
    data: values
  })
    .then((response) => {
      console.log("okkkkk",response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

