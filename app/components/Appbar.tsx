"use client"

import { signIn, signOut, useSession } from "next-auth/react"


export function Appbar() {
    const session = useSession();

    return <div>
        <div className="flex justify-between">
            <div>
                Music App
            </div>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-blue-600" onClick={() => signOut()}>Logout</button>}
                {session.data?.user && <button className="m-2 p-2 bg-blue-600" onClick={() => signIn()}>signin</button>}
            </div>
        </div>
    </div>
}