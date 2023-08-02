import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-cert.verxid.site/v0/",
  // https://npc-api.dsaved.com/v0/
});





authFetch.interceptors.request.use(
  function (req) {
    const token = localStorage.getItem("token-admin");
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjoiNjIxMjkwIiwiVXNlck5hbWUiOiJyZXluYWwtYWRtaW4iLCJFbWFpbCI6InJleW5hbHJvZGR5QGdtYWlsLmNvbSIsIlBob25lX05vIjoiMDgxMDQ1NzU4ODgiLCJMR0FfSUQiOm51bGwsIlJlZ19DZW50ZXJfSUQiOm51bGwsIlJvbGVfSUQiOiI1IiwiU3RhdGVfSUQiOm51bGwsImFjY2Vzc190b2tlbiI6bnVsbCwiYmFuayI6bnVsbCwiYWNjb3VudF9uYW1lIjpudWxsLCJhY2NvdW50X251bWJlciI6bnVsbCwiUm9sZU5hbWUiOm51bGwsImxhc3RfcGFzc3dvcmRfY2hhbmdlIjpudWxsLCJpc19hY3RpdmUiOjEsImNyZWF0ZWRfYXQiOiIyMDIzLTA1LTAyVDA2OjM0OjE4LjIxNFoiLCJtb2RpZmllZF9hdCI6bnVsbCwiY2hhbmdlX3Bhc3N3b3JkX25leHRfbG9naW4iOjEsImRjciI6bnVsbCwicmVnaXN0cmFyIjpudWxsLCJuaW4iOiI4Mzg5OTIwMTk1OCIsInBlcm1pc3Npb24iOnsiaWQiOiI2MjEyOTAiLCJwZXJtaXNzaW9ucyI6ImNhbi1jcmVhdGUifSwiU3RhdGUiOnsiU3RhdGVfSUQiOm51bGwsIlN0YXRlX05hbWUiOm51bGwsIlN0YXRlX0NvZGUiOm51bGwsIkdlb19ab25lX0lEIjpudWxsfSwiTEdBcyI6eyJMR0FfSUQiOm51bGwsIkxHQV9OYW1lIjpudWxsLCJMR0FfQ29kZSI6bnVsbCwiU3RhdGVfSUQiOm51bGwsImxhdGl0dWRlIjpudWxsLCJsb25naXR1ZGUiOm51bGx9LCJyb2xlcyI6eyJpZCI6IjUiLCJuYW1lIjoiQWRtaW4ifSwiaWF0IjoxNjgzMDE4NDY5LCJleHAiOjE2ODMxMDEyNjl9.4gtF2zqEWyGRkVvafARNc350cz8CYNYmEyBPbdK5cYo";
    // const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjoiNCIsIkxHQV9JRCI6IjMwOSIsIlJlZ19DZW50ZXJfSUQiOiIxMzQyIiwiVXNlck5hbWUiOiJLRVNUT04iLCJSb2xlX0lEIjoiNSIsIlN0YXRlX0lEIjoiMTQiLCJFbWFpbCI6Imtlc3RvbkBlbWFpbC5jb20iLCJpYXQiOjE2ODI2MDc0NzYsImV4cCI6MTY4MjY5MDI3Nn0.V9KEt9VIWRDvcHtvIAdKyzbNdxGiTOJXNh1nXP6Llj4"
    if (token) {
      // const toks = localStorage.getItem("token");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    }
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }    
);


export default authFetch;