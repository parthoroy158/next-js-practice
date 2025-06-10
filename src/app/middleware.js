import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookies = request.cookies.get('Token')
    console.log(currentCookies)


    // return NextResponse.redirect(new URL('/', request.url))

    return NextResponse.next()
}
