import React from "react";
import SolutionSection from "./SolutionSection";

const SolutionsList = () => {
    const solutions = require("../../../content/about/solutions");

    return (
        <>
            {solutions.map(solutionSection => (
                <SolutionSection
                    title={solutionSection.title}
                    items={solutionSection.items}
                />
            ))}
        </>
    )
};

export default SolutionsList;
