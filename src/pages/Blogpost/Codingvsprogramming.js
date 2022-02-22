import React from "react";

const Codingvsprogramming = () => {

    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-8 work-container-subdiv">


                        <img src="././assets/img/blog-img/4.png" className="img-fluid"></img>

                        <h1 className="main-heading fw-bolder mt-4"> Coding vs. Programming?</h1>


                        <table class="table table-bordered border-dark fs-4">
                            <thead>
                                <tr>
                                    <th scope="col">Parameters</th>
                                    <th scope="col">Coding</th>
                                    <th scope="col">Programming</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Definition</th>
                                    <td>	Translation of natural language into a machine-level program.</td>
                                    <td>Development of a fully functioning software.</td>
                                </tr>

                                <tr>
                                    <th scope="row">Scope</th>
                                    <td>Translating the requirement logic into machine code.	</td>
                                    <td>Analysis and conceptualization, debugging, compiling, testing, and implementation.</td>
                                </tr>
                                <tr>

                                    <th scope="row">Skill	</th>
                                    <td>Basic knowledge of programming languages such as C, Java, C#.	</td>
                                    <td>Analytical skills, writing complex programs, data structures, and algorithms.
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">Outcome	</th>
                                    <td>A functional code.	</td>
                                    <td>An application, software, or website</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Codingvsprogramming;