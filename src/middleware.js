import { NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentCookies = request.cookies.get('nextjs-token')
    console.log('Token:', currentCookies.value)

    const userInfo = {
        role: 'admin',
        email: 'admin@gmail.com'
    }
    const isServices = request.nextUrl.pathname.startsWith('/service')
    console.log("Here is the service path:", isServices)
    const isAdmin = userInfo.role === 'admin'
    if (!isAdmin && isServices) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // return NextResponse.redirect(new URL('/', request.url))

    return NextResponse.next()
}
