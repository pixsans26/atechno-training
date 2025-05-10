'use client'


import { motion } from "framer-motion";


export const MotionDiv = motion.div

export const MotionH1 = motion.h1

export const MotionH2 = motion.h2

export const MotionH3 = motion.h3

export const MotionH4 = motion.h4

export const MotionP = motion.p

export const MotionImg = motion.img

export const Motionli = motion.li

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: .5, delay: 0.1 * index }
    })
}

export const fadeInUpTeam = {
    hidden: { opacity: 0, y: 30 },
    show: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: .5, delay: 0.3 * index }
    })
}