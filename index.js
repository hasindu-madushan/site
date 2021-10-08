function setProjectCardData(elem, projectObj) {
    elem.children[0].setAttribute("src", projectObj.imgs[0]);
    elem.children[1].innerHTML = projectObj.title;
    elem.children[2].innerHTML = projectObj.desc;
}

function addProjectLinks(links) {
    let linksContainer = projectView.querySelector(".links");
    linksContainer.innerHTML = "";

    for (let link of links) {
        linksContainer.innerHTML += "<li><p>" + link.name + "</p><a href=" + link.ref + ">" + link.ref + "</a></li>";
    }
}

function addProjectSkills(skills) {
    let skillContainer = projectView.querySelector(".skills-container");
    skillContainer.innerHTML = "";

    for (let skill of skills) {
        skillContainer.innerHTML += "<p>" + skill + "</p>";
    }
}

function subImgClick(target) {
    let temp = projectView.querySelector(".main-img").getAttribute("src");
    projectView.querySelector(".main-img").setAttribute("src", target.getAttribute("src"));
    target.setAttribute("src", temp);
}

function addprojectViewImgs(imgs) {
    projectView.querySelector(".main-img").setAttribute("src", imgs[0]);
    let subImgContainer = projectView.querySelector(".sub-img-container");
    subImgContainer.innerHTML = "";

    for (let i = 1; i < imgs.length; i++) {
        subImgContainer.innerHTML += '<img class="sub-img" onclick="subImgClick(this)" src="' + imgs[i] + '"/>';
    }

}

function showProjectView(title, imgs, desc, links, skills) {
    projectView.querySelector("h2").innerHTML = title;
    projectView.querySelector("p").innerHTML = desc;
    addprojectViewImgs(imgs);
    addProjectLinks(links);
    addProjectSkills(skills)
    projectView.style.visibility = "visible";
    projectView.classList.add("project-view-anim");
    projectViewShade.style.visibility = "visible";
}

function initProjectCard(projectCard, id) {
    setProjectCardData(projectCard, projects[id]);
    projectCard.setAttribute("id", id);

    projectCard.addEventListener("click", function() {
        let proj = projects[this.getAttribute("id")];
        showProjectView(proj.title, proj.imgs, proj.desc, proj.links, proj.skills);
    });  
}


let projectView = document.querySelector(".project-view");
let projectViewClose = document.querySelector(".close");
let projectViewShade = document.querySelector("#project-view-shade");


let projectCardSample = document.querySelector(".project-card");
let projectContainer = document.querySelector(".project-container");

let moreLess = document.querySelector(".more-less");

let projIds = Object.keys(projects);

initProjectCard(projectCardSample, projIds[0]);


for (let i = 1; i < projIds.length; i++)
{
    let projectCard = projectCardSample.cloneNode(true);
    initProjectCard(projectCard, projIds[i]);
    projectContainer.appendChild(projectCard);
}


projectViewClose.addEventListener("click", () => {
    projectView.classList.remove("project-view-anim");
    projectView.style.visibility = "hidden";
    projectViewShade.style.visibility = "hidden";
});

moreLess.addEventListener("click", () => {
    if (!projectContainer.classList.contains("project-container-long")) {
        projectContainer.classList.add("project-container-long");
        moreLess.innerHTML = "Less";
    } else {
        projectContainer.classList.remove("project-container-long");
        moreLess.innerHTML = "More";
    }
})
