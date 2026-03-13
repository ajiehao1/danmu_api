// 拦截项目所有请求
export const config = {
  matcher: '/:path*',
}

export function middleware(request) {
  // 只允许白名单内的域名访问，其他所有地址全部拦截
  const allowedDomains = [
    '313236.xyz', // 你的自定义域名
    'danmu-api-git-main-ajiehao1s-projects.vercel.app', // 你的固定生产域名
  ]

  // 获取当前访问的域名
  const requestHost = request.headers.get('host')

  // 不在白名单内，直接返回403禁止访问
  if (!allowedDomains.includes(requestHost)) {
    return new Response('Forbidden: Access Denied', {
      status: 403
    })
  }

  // 白名单域名正常放行
  return fetch(request)
}
