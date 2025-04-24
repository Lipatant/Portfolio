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
        "languages": ["godot"],
        "name": "Casual Tryhard",
        "tags": ["game", "game jam"],
    },
    {
        "languages": ["cpp"],
        "name": "Checkfate",
        "tags": ["game", "game jam"],
    },
    {
        "languages": ["rgss3"],
        "name": "Dissonance",
        "tags": ["game", "game jam"],
    },
    {
        "languages": ["godot"],
        "name": "Kitchenware Shop",
        "tags": ["browser", "game", "game jam"],
    },
    {
        "languages": ["css", "html", "js", "mcfunction", "powershell", "python"],
        "name": "Lipatant's Arfefact",
        "tags": ["mod", "web"],
    },
    {
        "languages": ["unreal engine"],
        "name": "Modern Wizard",
        "tags": ["epitech", "game"],
    },
    {
        "languages": ["css", "html", "js"],
        "name": "Portfolio",
        "tags": ["web"],
    },
    {
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

function createProjectData(projectData) {
    let element = document.createElement("div")
    let elementName = document.createElement("a")
    elementName.innerHTML = projectData["name"]
    element.appendChild(elementName)
    if ("languages" in projectData) {
        for (const language of projectData["languages"]) {
            element.appendChild(createLanguageTag(language))
        }
    }
    return element;
}

if (projectList) {
    for (const projectData of projectDataList) {
        projectList.appendChild(createProjectData(projectData))
    }
}