const languageDataList = {
    "cpp": {
        "color": "#f34b7d",
        "name": "C++",
    },
    "css": {
        "color": "#663399",
        "name": "CSS",
    },
    "gdscript": {
        "color": "#355570",
        "name": "GDScript",
    },
    "godot": {
        "color": "#355570",
        "name": "Godot",
    },
    "html": {
        "color": "#e34c26",
        "name": "HTML",
    },
    "js": {
        "color": "#f1e05a",
        "name": "JavaScript",
    },
    "mcfunction": {
        "color": "#E22837",
        "name": "MCFunction",
    },
    "powershell": {
        "color": "#012456",
        "name": "PowerShell",
    },
    "python": {
        "color": "#3572A5",
        "name": "Python",
    },
    "rgss3": {
        "name": "RGSS3",
    },
    "unreal engine": {
        "color": "#a54c4d",
        "name": "Unreal Engine",
    },
}

const projectList = document.getElementById("project-list")

const projectDataList = [
    {
        "description": "A minigame-based arcade game",
        "languages": ["godot"],
        "name": "Casual Tryhard",
        "tags": ["game", "game jam"],
    },
    {
        "description": "A chess-inspired surviving strategy game",
        "languages": ["cpp"],
        "name": "Checkfate",
        "tags": ["game", "game jam"],
    },
    {
        "description": "A puzzle game about controlling two characters",
        "languages": ["rgss3"],
        "name": "Dissonance",
        "tags": ["game", "game jam"],
    },
    {
        "description": "An absurd visual novel about meeting kitchen ustensils",
        "languages": ["godot"],
        "name": "Kitchenware Shop",
        "tags": ["browser", "game", "game jam"],
    },
    {
        "description": "A Minecraft data pack adding new items, completed by a web-based wiki",
        "languages": ["css", "html", "js", "mcfunction", "powershell", "python"],
        "name": "Lipatant's Arfefact",
        "tags": ["mod", "web"],
    },
    {
        "description": "A first-person shooter about surviving waves of zombies and extracing artefacts",
        "languages": ["unreal engine"],
        "name": "Modern Wizard",
        "tags": ["epitech", "game"],
    },
    {
        "description": "This portfolio, used for displaying my work",
        "languages": ["css", "html", "js"],
        "name": "Portfolio",
        "tags": ["web"],
    },
    {
        "description": "A raytracing-based rendering program using no GPU",
        "languages": ["cpp"],
        "name": "Raytracer",
        "tags": ["epitech"],
    },
]

function createLanguageTag(language) {
    let element = document.createElement("a")
    element.classList.add("language")
    element.innerHTML = language
    if (language in languageDataList) {
        let languageData = languageDataList[language]
        if ("color" in languageData) {
            element.style.backgroundColor = languageData["color"]
        }
        if ("invert primary" in languageData) {
            if (languageData["invert primary"]) {
                element.classList.add("invert-primary")
            }
        }
        if ("name" in languageData) {
            element.innerHTML = languageData["name"]
        }
    }
    return element
}

function createProjectDataDescription(projectData) {
    let element = document.createElement("a")
    element.classList.add("description")
    if ("description" in projectData) {
        element.innerHTML = projectData["description"]
    }
    return element;
}

function createProjectDataLanguages(projectData) {
    let element = document.createElement("div")
    element.classList.add("languages")
    if ("languages" in projectData) {
        for (const language of projectData["languages"]) {
            element.appendChild(createLanguageTag(language))
        }
    }
    return element;
}

function createProjectDataTitle(projectData) {
    let element = document.createElement("div")
    let elementName = document.createElement("a")
    elementName.innerHTML = projectData["name"]
    element.appendChild(elementName)
    return element;
}

function createProjectData(projectData) {
    let element = document.createElement("div")
    element.appendChild(createProjectDataTitle(projectData))
    element.appendChild(createProjectDataDescription(projectData))
    element.appendChild(createProjectDataLanguages(projectData))
    element.classList.add("project")
    return element;
}

if (projectList) {
    for (const projectData of projectDataList) {
        projectList.appendChild(createProjectData(projectData))
    }
}