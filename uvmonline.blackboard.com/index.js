const pathSubjects = "https://uvmonline.blackboard.com/webapps/blackboard/execute"
const pathCourse = "https://uvmonline.blackboard.com/ultra/course"
const currentLocation = location.href
const pathDefault = "https://uvmonline.blackboard.com/ultra/institution-page"

if (location.href === pathDefault || location.href === "https://uvmonline.blackboard.com/ultra/") {
    location.assign(pathCourse)
}

idToChange='_179084_1'
function elementReady(selector) {
    return new Promise((resolve, reject) => {
        let el = document.querySelector(selector);
        if (el) {
            resolve(el);
            return
        }
        new MutationObserver((mutationRecords, observer) => {
                // Query for elements matching the specified selector
                Array.from(document.querySelectorAll(selector)).forEach((element) => {
                    resolve(element);
                    //Once we have resolved we don't need the observer anymore.
                    observer.disconnect();
                });
            })
            .observe(document.documentElement, {
                childList: true,
                subtree: true
            });
    });
}


elementReady(`#course-list-course-${idToChange} a`).then(resolve => {
    if (resolve) {

        var signatures = document.querySelector(".course-org-list").children

        for (var i = 0; i < signatures.length; i++) {
            if(signatures[i].classList.contains("favorites-group")){
                const idSignature =  signatures[i].querySelector('[id^="course-link-"]').getAttribute("id").replace("course-link-_","")
                document.querySelector(`#course-list-course-_${idSignature} a`).setAttribute("href", `https://uvmonline.blackboard.com/webapps/blackboard/execute/announcement?method=search&context=mybb&viewChoice=2&course_id=_${idSignature}&searchSelect=_${idSignature}`)
            }
        }
    document.querySelector('.first').remove()
    document.querySelector('hr').remove()
    } else {
        console.log("leave");
    }
})


elementReady(".noToggle a").then(resolve => {
    if (resolve) {
        console.log("enter ok")
        document.querySelector(".noToggle a").setAttribute("href", "/ultra/course");
    } else {
        console.log("leave");
    }
})


// const instructions = 'LEE ESTE TEXTO Y DAME LA RESPUESTA CORRECTA, SOLO DIME EL NUMERO CORRECTO DE LAS OPCIONES DE ABAJO:';
// const redaction = document.querySelector(".inlineVtbegenerated").textContent;
// const op = document.querySelectorAll(".multiple-choice-table p");
// const parseOptions = Array.from(op).map(($, i) => `${i + 1}.- ${$.textContent}`).join('\n');

// const copyToClipboard = (text, options) => {
//     const combinedText = `${instructions}

// ${text}

// ${options}`;
//     console.log({combinedText})
//     const textArea = document.createElement("textarea");
//     textArea.value = combinedText;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);
// };

// copyToClipboard(redaction, parseOptions);