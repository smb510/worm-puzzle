"use client";

import Page from '../components/Page'

export default function PageOne() {
    return Page({
        title: "Sensing a pattern? Now time for connectsion.",
        embedUrl: "https://connections.swellgarfo.com/game/-OEe_ITDN_TqqLnzqFOW",
        question: "What is traditionally used instead of the sauce in the puzzle?",
        answer: "hollandaise",
        index: 3,
        nextPath: "/four",
        backPath: "/two"
    });
}