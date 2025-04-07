import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const TimelineResume = () => {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="Jan 2025 - Present"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Undergraduate Researcher
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        UC San Diego, California
                    </h4>
                    <p>
                        Using Deep Learning to implement an architecture for
                        Piano Reduction of multi-instrumental pieces
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="Jan 2025 - Present"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Web Developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Triton Robosub, UC San Diego
                    </h4>
                    <p>Used React to build the website of Triton Robosub</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2011 - present"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        DSO National Laboratories
                    </h4>
                    <p>
                        Utilized a pre-trained Machine Learning Model to carry
                        out speaker change recognition
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="Jan 2024 - May 2024"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Platoon Commander
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Singaore Armed Forces, Singapore
                    </h4>
                    <p>
                        Military Officer in the Singapore Armed Forces as part
                        of military conscription
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
