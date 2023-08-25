// function Setup()
// {
//     console.log("Setup");
    
//     var st = document.createElement('style');
//     st.textContent = 
//     `
//         @keyframes css-225 {
//             0% {
//                 background-position: -700% 0px;
//             }
//             10% {
//                 background-position: -600% 0px;
//             }
//             90% {
//                 background-position: 600% 0px;
//             }
//             100% {
//                 background-position: 700% 0px;
//             }
//         }
//         .border-Hellebrekers-228 {
//             position: relative;
//         }
//         .border-Hellebrekers-228::before {
//             content: "";
//             position: absolute;
//             inset: 0px;
//             z-index: 2;
//             border-radius: 4px;
//             background-image: linear-gradient(140deg, rgba(0, 183, 195, 0) 10%, rgba(0, 183, 195, 0.5) 35%, rgba(98, 48, 240, 0.5) 65%, rgba(98, 48, 240, 0) 90%);
//             background-position: -250% 0px;
//             background-repeat: no-repeat;
//             background-size: 85% 100%;
//             clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);
//             animation-name: css-225;
//             animation-duration: 8000ms;
//             animation-timing-function: linear;
//             animation-fill-mode: both;
//             animation-iteration-count: infinite;
//         }
        
//         .box {
//             position: relative;
//         }
        
//         .box::before {
//             content: "";
//             position: absolute;
//             inset: 0px;
//             z-index: 2;
//             border-radius: 4px;


//             --border-size: 3px;
//             --border-angle: 0turn;
//             background-image: conic-gradient(
//                 from var(--border-angle),
//                 #213,
//                 #112 50%,
//                 #213
//             ),
//             conic-gradient(from var(--border-angle), transparent 20%, #0066ff, #00ff66);
//             background-size: calc(100% - (var(--border-size) + 2px))
//             calc(100% - (var(--border-size) * 2)),
//             cover;
//             clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);

            
//             background-position: center center;
//             background-repeat: no-repeat;
        
//             animation: bg-spin 4500ms linear infinite;
            
//             animation-fill-mode: both;
//             animation-iteration-count: infinite;
//         }

//         @keyframes bg-spin {
//             to {
//                 --border-angle: 1turn;
//             }
//         }
        
//         @property --border-angle {
//             syntax: "<angle>";
//             inherits: true;
//             initial-value: 0turn;
//         }

    
//     `
//     ;

//     window.parent.document.head.appendChild(st);
//     console.log('added style');
    
//     var objs = window.parent.document.querySelectorAll(".collapsibleTab-container");
//     for (var j = 0; j < objs.length; j++)
//     {
//         DoIt(objs[j]);
//         objs[j].addEventListener("mouseenter", event => {
//             // DoIt(event.target);
//         }); 
//     }
// }

// function DoIt(element)
// {
//     var currentSheet = null;
//     var i = 0;
//     var j = 0;

//     // element.classList.add("border-Hellebrekers-228");
//     element.classList.add("box");
// }

// "use strict";
// var KdeBruin;
// (function (KdeBruin) {
//     var BorderAddin;
//     (function (BorderAddin_1) {
//         class BorderAddin {
//             Setup() {
//                 console.log("Setup");
//                 var st = document.createElement('style');
//                 st.textContent =
//                     `
//                 @keyframes css-225 {
//                     0% {
//                         background-position: -700% 0px;
//                     }
//                     10% {
//                         background-position: -600% 0px;
//                     }
//                     90% {
//                         background-position: 600% 0px;
//                     }
//                     100% {
//                         background-position: 700% 0px;
//                     }
//                 }
//                 .border-Hellebrekers-228 {
//                     position: relative;
//                 }
//                 .border-Hellebrekers-228::before {
//                     content: "";
//                     position: absolute;
//                     inset: 0px;
//                     z-index: 2;
//                     border-radius: 4px;
//                     background-image: linear-gradient(140deg, rgba(0, 183, 195, 0) 10%, rgba(0, 183, 195, 0.5) 35%, rgba(98, 48, 240, 0.5) 65%, rgba(98, 48, 240, 0) 90%);
//                     background-position: -250% 0px;
//                     background-repeat: no-repeat;
//                     background-size: 85% 100%;
//                     clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);
//                     animation-name: css-225;
//                     animation-duration: 8000ms;
//                     animation-timing-function: linear;
//                     animation-fill-mode: both;
//                     animation-iteration-count: infinite;
//                 }
                
//                 .box {
//                     position: relative;
//                 }
                
//                 .box::before {
//                     content: "";
//                     position: absolute;
//                     inset: 0px;
//                     z-index: 2;
//                     border-radius: 4px;
        
        
//                     --border-size: 3px;
//                     --border-angle: 0turn;
//                     background-image: conic-gradient(
//                         from var(--border-angle),
//                         #213,
//                         #112 50%,
//                         #213
//                     ),
//                     conic-gradient(from var(--border-angle), transparent 20%, #0066ff, #00ff66);
//                     background-size: calc(100% - (var(--border-size) + 2px))
//                     calc(100% - (var(--border-size) * 2)),
//                     cover;
//                     clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);
        
                    
//                     background-position: center center;
//                     background-repeat: no-repeat;
                
//                     animation: bg-spin 4500ms linear infinite;
                    
//                     animation-fill-mode: both;
//                     animation-iteration-count: infinite;
//                 }
        
//                 @keyframes bg-spin {
//                     to {
//                         --border-angle: 1turn;
//                     }
//                 }
                
//                 @property --border-angle {
//                     syntax: "<angle>";
//                     inherits: true;
//                     initial-value: 0turn;
//                 }
//             `;
//                 window.parent.document.head.appendChild(st);
//                 console.log('added style');
//                 var objs = window.parent.document.querySelectorAll(".collapsibleTab-container");
//                 for (var j = 0; j < objs.length; j++) {
//                     DoIt(objs[j]);
//                     objs[j].addEventListener("mouseenter", event => {
//                         // DoIt(event.target);
//                     });
//                 }
//             }
//         }
//         BorderAddin_1.BorderAddin = BorderAddian;
//         function DoIt(obj) {
//             obj.classList.add("box");
//         }
//     })(BorderAddin = KdeBruin.BorderAddin || (KdeBruin.BorderAddin = {}));
// })(KdeBruin || (KdeBruin = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setup = void 0;
function Setup() {
    console.log("Setup");
    var st = document.createElement('style');
    st.textContent =
        "\n                @keyframes css-225 {\n                    0% {\n                        background-position: -700% 0px;\n                    }\n                    10% {\n                        background-position: -600% 0px;\n                    }\n                    90% {\n                        background-position: 600% 0px;\n                    }\n                    100% {\n                        background-position: 700% 0px;\n                    }\n                }\n                .border-Hellebrekers-228 {\n                    position: relative;\n                }\n                .border-Hellebrekers-228::before {\n                    content: \"\";\n                    position: absolute;\n                    inset: 0px;\n                    z-index: 2;\n                    border-radius: 4px;\n                    background-image: linear-gradient(140deg, rgba(0, 183, 195, 0) 10%, rgba(0, 183, 195, 0.5) 35%, rgba(98, 48, 240, 0.5) 65%, rgba(98, 48, 240, 0) 90%);\n                    background-position: -250% 0px;\n                    background-repeat: no-repeat;\n                    background-size: 85% 100%;\n                    clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);\n                    animation-name: css-225;\n                    animation-duration: 8000ms;\n                    animation-timing-function: linear;\n                    animation-fill-mode: both;\n                    animation-iteration-count: infinite;\n                }\n                \n                .box {\n                    position: relative;\n                }\n                \n                .box::before {\n                    content: \"\";\n                    position: absolute;\n                    inset: 0px;\n                    z-index: 2;\n                    border-radius: 4px;\n        \n        \n                    --border-size: 3px;\n                    --border-angle: 0turn;\n                    background-image: conic-gradient(\n                        from var(--border-angle),\n                        #213,\n                        #112 50%,\n                        #213\n                    ),\n                    conic-gradient(from var(--border-angle), transparent 20%, #0066ff, #00ff66);\n                    background-size: calc(100% - (var(--border-size) + 2px))\n                    calc(100% - (var(--border-size) * 2)),\n                    cover;\n                    clip-path: polygon(0% 100%, 2px 100%, 2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 100%, 100% 100%, 100% 0%, 0% 0%);\n        \n                    \n                    background-position: center center;\n                    background-repeat: no-repeat;\n                \n                    animation: bg-spin 4500ms linear infinite;\n                    \n                    animation-fill-mode: both;\n                    animation-iteration-count: infinite;\n                }\n        \n                @keyframes bg-spin {\n                    to {\n                        --border-angle: 1turn;\n                    }\n                }\n                \n                @property --border-angle {\n                    syntax: \"<angle>\";\n                    inherits: true;\n                    initial-value: 0turn;\n                }\n            ";
    window.parent.document.head.appendChild(st);
    console.log('added style');
    var objs = window.parent.document.querySelectorAll(".collapsibleTab-container");
    for (var j = 0; j < objs.length; j++) {
        DoIt(objs[j]);
        objs[j].addEventListener("mouseenter", function (event) {
            // DoIt(event.target);
        });
    }
}
exports.Setup = Setup;
function DoIt(obj) {
    obj.classList.add("box");
}
5