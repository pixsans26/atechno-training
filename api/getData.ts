
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL

// // get Core Team
// export async function getTeam() {

//     try {
//         const res = await fetch(`${baseUrl}/items/team?fields=id,name,email,photo,designation&filter[core_member][_eq]=true&sort=date_created`, { cache: 'no-store' });
//         const response = await res.json();

//         return response
//     } catch (error) {
//         console.log(error)
//     }
// }





// get courses

export async function getCourses() {


    try {
        const res = await fetch(`${baseUrl}/items/courses`, { next: { revalidate: 30 } });
        const response = await res.json();
        // console.log(response)
        return response

    } catch (error) {
        console.log(error)
    }
}

// get courses

export async function getSingleCourses(id: any) {


    try {
        const res = await fetch(`${baseUrl}/items/courses/${id}?&fields=*.*`, { next: { revalidate: 30 } });
        const response = await res.json();
        // console.log(response)
        return response

    } catch (error) {
        console.log(error)
    }
}

// get Popup

export async function getPopup() {


    try {
        const res = await fetch(`${baseUrl}/items/popup?filter[status]=published`, { next: { revalidate: 10 } });
        const response = await res.json();
        // console.log(response)
        return response

    } catch (error) {
        console.log(error)
    }
}
