import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar'

export const DersSecimi = () => {

    return (
        <div>
            <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
                <div className="flex items-center gap-3">
                    <Sidebar />
                    <p>Öğrenci Ders Seçimi</p>
                </div>
            </nav>
            <div className="px-5 py-2">
                DERS SECİMİ
            </div>
        </div>
    )
}
