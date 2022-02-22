import React from "react";

const Compiler = () => {

    return (
        <>

            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-8 work-container-subdiv">

                        <h1 className="main-heading fw-bolder mt-4"> Interpreter and Compiler</h1>

                        <img src="././assets/img/blog-img/5.png" className="img-fluid"></img>

                        <h1 className="main-heading fw-bolder mt-4"> What is Interpreter and Compiler</h1>

                        <h4 className="list fw-bolder">1. What is Compiler :</h4>

                        <p> Compiler, computer software that translates (compiles) source code written in a high-level language (e.g., C++) into a set of machine-language instructions that can be understood by a computer's CPU.</p>

                        <h4 className="list fw-bolder">2. What Is Interpreter :</h4>
                        <p>
                            Interpreter translates just one statement of the program at a time into machine code. ... Compiler scans the entire program and translates the whole of it into machine code at once.
                        </p>


                        <table class="table table-bordered border-dark fs-4">
                            <thead>
                                <tr>
                                    <th scope="col">Compiler</th>
                                    <th scope="col">Interpreter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Compiler scans the whole program in one go.	</td>
                                    <td>Translates program one statement at a time.</td>
                                </tr>

                                <tr>
                                    <td>Main advantage of compilers is it’s execution time.	</td>
                                    <td>Due to interpreters being slow in executing the object code, it is preferred less.
                                    </td>
                                </tr>

                                <tr>
                                    <td>It converts the source code into object code.	</td>
                                    <td>It does not convert source code into object code instead it scans it line by line</td>
                                </tr>

                                <tr>
                                    <td><b>Eg :</b> C, C++, C# etc.	</td>
                                    <td><b>Eg :</b> Python, Ruby, Perl, SNOBOL, MATLAB, etc.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Compiler;