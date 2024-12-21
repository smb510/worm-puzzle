"use client";


import Page from '../components/Page'

export default function PageOne() {
    return Page({
        title: "First, a Wordle.",
        embedUrl: "https://mywordle.strivemath.com/?id=e51ecf1e-b8db-4de5-9b50-a4feebb3bd3e",
        answer: "SANTA",
        index: 1,
        nextPath: "/two",
        backPath: "/"
    });
}