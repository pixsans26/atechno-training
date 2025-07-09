"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { env } from '@/utils/env';

const baseUrl = env.NEXT_PUBLIC_API_URL

interface Popup {
    id: string,
    status: string,
    title: string,
    image: string,
}


interface PopupModalProps {
    popup: Popup;
}

const TEN_MINUTES = 10 * 60 * 1000;


const PopupModal: React.FC<PopupModalProps> = ({ popup }) => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (popup?.status !== 'published') {
            document.body.style.overflow = 'auto'; // make sure scroll stays enabled
            return;
        }

        const lastShown = Cookies.get('popupLastShown');
        const now = Date.now();

        if (!lastShown || now - parseInt(lastShown) > TEN_MINUTES) {
            setShowPopup(true);
            document.body.style.overflow = 'hidden'; // disable scroll when popup shows
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // cleanup on unmount
        };
    }, [popup?.status]);

    const handleClose = () => {
        Cookies.set('popupLastShown', Date.now().toString(), { expires: 1 });
        setShowPopup(false);
        document.body.style.overflow = 'auto';
    };

    // Disable everything if status is not "published"
    if (popup?.status !== 'published') return null;

    if (!showPopup) return null;

    return (
        <>

            <section>

                {/* BACKDROP blocks everything including navbar */}
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70"></div>

                {/* MODAL CONTENT */}

                <div className="fixed inset-0 z-50 flex items-center justify-center w-full">
                    <div className="bg-white lg:p-4 p-2 rounded-2xl shadow-md w-auto text-center animate-swipe-up">
                        <div className='mb-5 h-70 lg:w-[40rem]'>
                            <Image width="1000" height="100" alt="popup-img" src={`${baseUrl}/assets/${popup?.image}`} className='rounded-xl' />
                        </div>
                        <button
                            onClick={handleClose}
                            className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-700 transition ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                </div>


            </section>


        </>



    );
}
export default PopupModal