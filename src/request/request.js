import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    //config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      /*Notification.error({
        title: response.message
      })*/
      console.log(response.message);
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        /*Notification.error({
          title: '网络请求超时',
          duration: 2000
        })*/
        console.log("网络请求超时");
        return Promise.reject(error)
      }
    }
    if (code) {

      if (code === 401) {
        /*MessageBox.$confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          router.push({path: "/"})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });*/


      } else if (code === 403) {
        //router.push({ path: '/401' })//暂无此页面
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          /*Notification.error({
            title: '错误',
            message: errorMsg,
            duration: 2000
          });*/
          console.log(errorMsg)

        }
      }
    } else {

      /*Notification.error({
        title: '错误',
        message: '接口请求失败',
        duration: 2000
      });*/
      console.log('接口请求失败')

    }
    return Promise.reject(error)
  }
)
export default service
