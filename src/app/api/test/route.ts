import { NextResponse } from 'next/server'
import { getPusherInstance } from '@/libs/pusher/server';
const pusherServer = getPusherInstance();

export async function POST(req: Request, res: Response) {
    try {
        await pusherServer.trigger(
            'private-chat',
            "evt::test",
            {
                message: "test",
                user: "ree",
                date: new Date(),
            }
        )

        return NextResponse.json({ message: "Sockets tested" }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Failed to test sockets", error: error }, { status: 500 })
    }
}