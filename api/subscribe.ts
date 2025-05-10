'use server'
import { env } from "@/utils/env";

const baseUrl = env.NEXT_PUBLIC_API_URL

export async function addSubscriber(formData: FormData) {

    const email = formData.get('email');
    try {
        const response = await fetch(`${baseUrl}/items/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        const result = await response.json();
        if (response.status == 200) {
            // console.log('Email subscribed', result)
            return {
                success: `${email} has been subscribed`,
                result
            }
        } else {
            // console.log('Not Subscribed', result)
            return {
                failed: 'Already Subscribed',

            }
        }

    } catch (error) {
        return {
            Error: 'Something went wrong',
        };
        // console.log(error)
    }
}


