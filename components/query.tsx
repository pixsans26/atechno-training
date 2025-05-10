'use client'
import { sendQuery } from '@/api/contact';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Query = () => {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <div className="lg:w-8/12 w-full bg-[#0A1A2B] lg:p-10 p-5 rounded-2xl mb-5 lg:order-first order-last">
            <form
                className="w-full"
                ref={ref}
                action={async (formData: FormData) => {
                    const response = await sendQuery(formData);
                    if (response?.success) {
                        Swal.fire({
                            title: response?.success,
                            text: 'Very soon our team will revert back to you',
                            icon: "success",
                            timer: 4000,
                            timerProgressBar: true,
                            customClass: {
                                confirmButton: 'confirm-pix-btn-success',
                                popup: 'alert-container',
                                timerProgressBar: 'timer-progress-success'
                            }
                        });
                        ref.current?.reset()
                    }
                    else if (response?.failed) {
                        Swal.fire({
                            icon: "warning",
                            title: response?.failed,
                            text: "You have already queried with this email/mobile",
                            timer: 2000,
                            timerProgressBar: true,
                            customClass: {
                                confirmButton: 'confirm-pix-btn-warning',
                                popup: 'alert-container',
                                timerProgressBar: 'timer-progress-warning'
                            }
                        });
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            timer: 1500,
                            timerProgressBar: true,
                            customClass: {
                                confirmButton: 'confirm-pix-btn-error',
                                popup: 'alert-container',
                                timerProgressBar: 'timer-progress-error'
                            }
                        });
                    }
                }}
            >
                <div className="mb-10 w-full">
                    <h4 className="heading-2">Enquiry Now!</h4>
                </div>
                <div className="">
                    <label className="mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Enter your name"
                        className="form-input bg mb-4" />
                </div>
                <div className="w-full lg:flex justify-between gap-4">
                    <div className="lg:w-6/12 w-full">
                        <label className="mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            required
                            placeholder="user@email.com"
                            className="form-input mb-4" />
                    </div>
                    <div className="lg:w-6/12 w-full">
                        <label className="mb-2">Mobile</label>
                        <input
                            type="mobile"
                            name="mobile"
                            id='mobile'
                            required
                            placeholder="Enter mobile number"
                            className="form-input mb-4" />
                    </div>
                </div>
                <div className="w-full mb-5">
                    <label className="mb-2">Message</label>
                    <textarea
                        name="query"
                        id='query'
                        required
                        placeholder="Enter your message"
                        className="form-input h-44" />
                </div>
                <div className="w-full mx-auto flex justify-center">
                    <button
                        type='submit'
                        className="techno-btn">Send Message</button>
                </div>
            </form>
        </div>
    )
}
export default Query