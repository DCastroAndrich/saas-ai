"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("cc775faa-1ce9-4405-86d7-647646be441d")
    }, [])
    return null
}