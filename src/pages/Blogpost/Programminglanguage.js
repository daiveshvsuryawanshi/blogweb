import React from "react";


const Programminglanguage = () => {

    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-8 work-container-subdiv">
                    
                        
                        <img src="././assets/img/blog-img/1.jfif" className="img-fluid"></img>

                        <h1 className="main-heading fw-bolder mt-4"> What is a Programming Language?</h1>

                        <p className="" > A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task.
                            A programming language is mainly used to develop desktop applications, websites, and mobile applications.</p>
                        <b> OR</b>
                        <p className="" > A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task.
                            A programming language is mainly used to develop desktop applications, websites, and mobile applications.</p>

                        <h4 className="title fw-bolder">Types of programming language</h4>

                        <h4 className="title fw-bolder">1. Low-level programming language</h4>

                        <p> Low-level language is machine-dependent (0s and 1s) programming language. The processor runs low- level programs directly without the need of a compiler or interpreter, so the programs written in low-level language can be run very fast.
                            Low-level language is further divided into two parts -</p>

                        <h4 className="list fw-bolder">i. Machine Language</h4>
                        <p>
                            Machine language is a type of low-level programming language. It is also called as machine code or object code. Machine language is easier to read because it is normally displayed in binary or hexadecimal form (base 16) form. It does not require a translator to convert the programs because computers directly understand the machine language programs. The advantage of machine language is that it helps the programmer to execute the programs faster than the high-level programming language
                        </p>

                        <h4 className="list fw-bolder">ii. Assembly Language</h4>
                        <p>
                            Assembly language (ASM) is also a type of low-level programming language that is designed for specific processors. It represents the set of instructions in a symbolic and human-understandable form. It uses an assembler to convert the assembly language to machine language.
                        </p>

                        <h4 className="title fw-bolder">2. High-level programming language</h4>
                        <p> High-level programming language (HLL) is designed for developing user-friendly software programs and websites. This programming language requires a compiler or interpreter to translate the program into machine language (execute the program).
                            The main advantage of a high-level language is that it is easy to read, write, and maintain.
                            High-level programming language includes Python, Java, JavaScript, PHP, C#, C++, Objective C, Cobol, Perl, Pascal, LISP, FORTRAN, and Swift programming language.
                            <br />
                            <strong>A high-level language is further divided into Two parts</strong>
                        </p>

                        <h4 className="list fw-bolder">i. Procedural Oriented programming language</h4>

                        <p>
                            Procedural Oriented Programming (POP) language is derived from structured programming and based upon the procedure call concept. It divides a program into small procedures called routines or functions.
                            The advantage of POP language is that it helps programmers to easily track the program flow and code can be reused in different parts of the program.
                            <br />
                            <b>Example</b> : C, FORTRAN, Basic, Pascal, etc.
                        </p>

                        <h4 className="list fw-bolder">ii. Object-Oriented Programming language</h4>

                        <p>
                            Object-Oriented Programming (OOP) language is based upon the objects. In this programming language, programs are divided into small parts called objects. It is used to implement real-world entities like inheritance, polymorphism, abstraction, etc in the program to makes the program resusable, efficient, and easy-to-use.
                            The main advantage of object-oriented programming is that OOP is faster and easier to execute, maintain, modify, as well as debug.
                            <br />
                            <b>Example</b> : C++, Java, Python, C#, etc.
                        </p>

                        <h4 className="title fw-bolder">3. Middle-level programming language
                        </h4>
                        <p> Middle-level programming language lies between the low-level programming language and high-level programming language. It is also known as the intermediate programming language and pseudo-language.
                            A middle-level programming language's advantages are that it supports the features of high-level programming, it is a user-friendly language, and closely related to machine language and human language.
                            <br />
                            <b>Example :  </b> : C, C++, language
                        </p>

                        <h4 className="title fw-bolder">Uses of programming
                        </h4>
                        <ul>
                            <li> 1. Application Software development </li>
                            <li>2. Artificial intelligence development</li>
                            <li>3. Database development</li>
                            <li>4. Game development</li>
                            <li>5. Computer drivers or other hardware development</li>
                            <li>6. web development</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Programminglanguage;