import Link from "next/link";
import "../globals.css";

export default function Overview() {
    return (
        <div>
            <section className="section-header">
                <h1>Project Overview</h1>
            </section>
            <section className="card-container">
                <MlButton />
                <SweButton />
                <MusicButton />
            </section>
        </div>
    );
}

function MlButton() {
    return (
        <Link href="/ml">
            <button className="buttonCard">Machine Learning Projects</button>
        </Link>
    );
}

function SweButton() {
    return (
        <Link href="/swe">
            <button className="buttonCard">
                Fullstack / Software Engineering Projects
            </button>
        </Link>
    );
}

function MusicButton() {
    return (
        <Link href="/music">
            <button className="buttonCard">Music Projects</button>
        </Link>
    );
}
