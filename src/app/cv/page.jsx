"use client";

import { CvToggle } from "@/components/CvToggle";
import { PDFResume } from "@/components/PDFResume";
import { TimelineResume } from "@/components/Timeline";
import { useState } from "react";

export default function cv() {
    const [isTimeLineView, setIsTimeLineView] = useState(true);
    return (
        <div>
            <CvToggle
                isTimeLineView={isTimeLineView}
                setIsTimeLineView={setIsTimeLineView}
            />
            {isTimeLineView ? <TimelineResume /> : <PDFResume />}
            <p> Render CV Below</p>
        </div>
    );
}
