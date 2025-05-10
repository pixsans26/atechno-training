'use client'
import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import { addSubscriber } from '@/api/subscribe'

const Subscribe = () => {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <section className='w-full lg:mb-32 mb-20 mx-auto'>
            <div className='lg:w-10/12 w-11/12 mx-auto bg-[#207EBA] lg:p-20 p-5 lg:flex rounded-xl relative overflow-hidden'>
                <div className='absolute flex w-full justify-center top-[-40px] z-0'>
                    <img className='w-3/12' src='/images/icon.svg' height={100} width={100} alt='icon' />
                </div>
                <div className='w-full lg:flex z-10'>
                    <div className='lg:w-9/12 w-full lg:mb-0 mb-5'>
                        <h3 className='sub-heading mb-2 lg:text-start text-center'>Join our AI Experts community</h3>
                        <p className='text-small lg:text-start text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='lg:w-3/12 w-full lg:flex justify-end'>
                        <form
                            ref={ref}
                            action={async (formData: FormData) => {
                                const response = await addSubscriber(formData);
                                if (response?.success) {
                                    Swal.fire({
                                        title: "Subscribed Succesfully",
                                        text: response.success,
                                        icon: "success",
                                        timer: 2000,
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
                                        title: "Existing Subscriber",
                                        text: "You are a existing subscriber of Pixsans",
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
                            }}>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='user@email.com'
                                className='form-input mb-4' />
                            <button
                                type='submit'
                                className='subs-btn'>Subscribe to Newsletter</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Subscribe