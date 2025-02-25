"use client";
import "../components/cv.css";
import { useState } from "react";

export const CvToggle = ({ isTimeLineView, setIsTimeLineView }) => {
    return (
        <div className="button-container">
            <button
                onClick={() => setIsTimeLineView(false)}
                className={`button ${!isTimeLineView ? "active" : "inactive"}`}
            >
                PDF
            </button>

            <button
                onClick={() => setIsTimeLineView(true)}
                className={`button ${isTimeLineView ? "active" : "inactive"}`}
            >
                {" "}
                Timeline{" "}
            </button>
        </div>
    );
};
