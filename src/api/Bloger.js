import Programminglanguage from "../pages/Blogpost/Programminglanguage";

const Productapi = [
    {
        id: 1,
        name:"programming",
        categories:"computerlanguage",
        img: "././assets/img/blog-img/1.jfif",
        title: "Programming Language",
        info: "What is Programming, type of Programming, uses of Programming",
        component: <Programminglanguage/>, isVisible: true, 
    },


    {
        id: 2,
        name:"scripting",
        categories:"computerlanguage",
        img: "././assets/img/blog-img/2.png",
        title: "Scripting Language",
        info: "what is scripting Language , types of scripting, Example of scripting",
    },
    {
        id: 3,
        name:"markup",
        categories:"computerlanguage",
        img: "././assets/img/blog-img/3.png",
        title: "Markup language",
        info: "What is Markup Language , Type of Markup Languge, Example of Markup Language, Uses",

    },
    {
        id: 4,
        name:"difference",
        categories:"difference",
        img: "././assets/img/blog-img/4.png",
        title: "Coding vs. Programming?",
        info: "difference between coding and Programming > Definition, Scope, Skill, Outcome",
    },
    {
        id: 5,
        name:"difference",
        categories:"difference",
        img: "././assets/img/blog-img/5.png",
        title: "Interpreter and Compiler ",
        info: "Whtat is Compiler And Interpreter, working of Interpreter and Compiler, compiler vs Interpreter",
    },
];

export default Productapi;
export{Productapi};
