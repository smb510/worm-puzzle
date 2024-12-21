"use client";

import Page from '../components/Page'

export default function PageFour() {
    return Page({
        title: "Strands! Almost there",
        embedUrl: "https://strandstudio.thegoodboi.net/play?id=3FAR9S",
        question: "enter the spangram",
        answer: "decorations",
        index: 4,
        nextPath: "/five",
        backPath: "/three"
    });
}