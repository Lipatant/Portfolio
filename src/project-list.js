const languageDataList = {
    "c": {
        "color": "#555555",
        "name": "C",
    },
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

const projectDataList = {
    "game/bards_tempo_keepers": {
        "description": "A retro-inspired RPG mixed with rythm-game elements",
        "languages": ["c"],
        "name": "Bards: Tempo Keepers",
        "tags": ["epitech", "game"],
        "urls": {
            "github": "https://github.com/Lipatant/Bards-Tempo-Keepers",
        },
        "year": 2022,
    },
    "game/casual_tryhard": {
        "description": "A minigame-based arcade game",
        "languages": ["godot"],
        "name": "Casual Tryhard",
        "tags": ["epitech", "game", "jam"],
        "urls": {
            "github": "https://github.com/Lipatant/CasualTryhard",
        },
        "year": 2023,
    },
    "game/checkfate": {
        "description": "A chess-inspired surviving strategy game",
        "languages": ["cpp"],
        "name": "Checkfate",
        "tags": ["epitech", "game", "jam"],
        "urls": {
            "github": "https://github.com/Lipatant/Checkfate",
        },
        "year": 2023,
    },
    "game/dissonance": {
        "description": "A puzzle game about controlling two characters",
        "languages": ["rgss3"],
        "name": "Dissonance",
        "tags": ["epitech", "game", "jam"],
        "urls": {
            "github": "https://github.com/Lipatant/Dissonance",
        },
        "year": 2023,
    },
    "game/kitchenware_shop": {
        "description": "An absurd visual novel about meeting kitchen ustensils",
        "languages": ["godot"],
        "name": "Kitchenware Shop",
        "tags": ["browser", "game", "jam"],
        "urls": {
            "itch.io embed": "https://lipatant.itch.io/kitchenware-shop",
            "github": "https://github.com/Lipatant/KitchenwareShop",
        },
        "year": 2024,
    },
    "game/mordern_wizard": {
        "description": "A first-person shooter about surviving waves of zombies and extracing artefacts",
        "languages": ["unreal engine"],
        "name": "Modern Wizard",
        "tags": ["epitech", "game"],
        "urls": {
            "itch.io": "https://lipatant.itch.io/modern-wizard",
            "github": "https://github.com/Lipatant/KitchenwareShop",
        },
        "year": 2024,
    },
    "project/lipatants_artefacts": {
        "description": "A Minecraft data pack adding new items, completed by a web-based wiki",
        "languages": ["css", "html", "js", "mcfunction", "powershell", "python"],
        "name": "Lipatant's Arfefacts",
        "tags": ["mod", "web"],
        "urls": {
            "github": "https://github.com/Lipatant/LipatantsArtefacts",
        },
        "year": 2025,
    },
    "project/lol_facts_counter": {
        "description": "A web application focused on giving useless facts about the game League of Legends",
        "languages": ["css", "html", "js"],
        "name": "LoL Facts Counter",
        "tags": ["jam", "web"],
        "urls": {
            "web": "https://lipatant.github.io/LoLFactsCounter/",
            "github": "https://github.com/Lipatant/LoLFactsCounter",
        },
        "year": 2025,
    },
    "project/portfolio": {
        "description": "This portfolio, used for displaying my work",
        "languages": ["css", "html", "js"],
        "name": "Portfolio",
        "tags": ["web"],
        "urls": {
            "github": "https://github.com/Lipatant/Portfolio",
        },
        "year": 2025,
    },
    "project/raytracer": {
        "description": "A raytracing-based rendering program using no GPU",
        "languages": ["cpp"],
        "name": "Raytracer",
        "tags": ["epitech"],
        "urls": {
            "github": "https://github.com/Lipatant/Raytracer",
        },
        "year": 2023,
    },
    "music/groovotational": {
        "description": "A short synth track composed of a piano, a synth, a bass and drums",
        "genres": ["Synth-Pop"],
        "name": "Groovotational",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtu.be/Ou_uiyVksvI?si=9needxnXVIlGIMil",
        },
        "year": 2025,
    },
    "music/moment_of_melting_solitude": {
        "description": "A short ambient track composed of a piano, a synth and drums",
        "genres": ["Ambient"],
        "name": "Moment Of Melting Solitude",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtu.be/hdIhS-LFAmM?si=6wAcKordDQ_MVen5",
        },
        "year": 2025,
    },
    "music/space_caster": {
        "description": "A short synth track composed of a piano, a synth, a bass and drums",
        "genres": ["Synth-Pop"],
        "name": "Space Caster",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtu.be/oZE5kaOtJOA?si=Jh40kN3pN05VdzvS",
        },
        "year": 2025,
    },
}

function createCategoryTag(category) {
    let element = document.createElement("img")
    element.classList.add("category")
    element.setAttribute("alt", String(category).charAt(0).toUpperCase() + String(category).slice(1));
    element.setAttribute("src", `img/category/${category}.png`);
    return element
}

function createGenreTag(genre) {
    let element = document.createElement("a")
    element.classList.add("language")
    element.innerHTML = genre
    return element
}

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

function createLinkTag(type, url) {
    let element = document.createElement("a")
    element.classList.add("button")
    element.classList.add("language")
    element.href = url
    switch (type) {
        case "github":
            element.innerHTML = "View code on GitHub"
            break
        case "itch.io":
            element.style.backgroundColor = "#F34B7D"
            element.innerHTML = "Get from Itch.io"
            break
        case "itch.io embed":
            element.style.backgroundColor = "#F34B7D"
            element.innerHTML = "Play on Itch.io"    
            break
        case "youtube":
            element.style.backgroundColor = "#E22837"
            element.innerHTML = "Listen on YouTube"
            break
        case "web":
            element.style.backgroundColor = "#355570"
            element.innerHTML = "Try the app"
            break
        default:
            element.innerHTML = "URL"
            break
    }
    return element
}

function createProjectDataCategory(projectID, projectData) {
    let category = "project"
    if ("tags" in projectData) {
        const tags = projectData["tags"]
        if (tags.includes("game")) {
            category = "game"
        } else if (tags.includes("music")) {
            category = "music"
        }
    }
    return createCategoryTag(category)
}

function createProjectDataContent(projectID, projectData) {
    let element = document.createElement("div")
    let elementDescription = document.createElement("div")
    elementDescription.appendChild(createProjectDataDescription(projectID, projectData))
    elementDescription.appendChild(createProjectDataLanguages(projectID, projectData))
    elementDescription.appendChild(createProjectDataLinks(projectID, projectData))
    element.appendChild(createProjectDataImage(projectID, projectData))
    element.appendChild(elementDescription)
    return element
}

function createProjectDataDescription(projectID, projectData) {
    let element = document.createElement("a")
    element.classList.add("description")
    if ("description" in projectData) {
        element.innerHTML = projectData["description"]
    }
    return element;
}

function createProjectDataImage(projectID, projectData) {
    let element = document.createElement("img")
    element.classList.add("image")
    element.setAttribute("alt", "");
    element.setAttribute("src", `img/${projectID}/icon.png`);
    return element
}

function createProjectDataLanguages(projectID, projectData) {
    let element = document.createElement("div")
    element.classList.add("languages")
    if ("year" in projectData) {
        if ("languages" in projectData) {
            element.innerHTML += "Made in " + String(projectData["year"]) + " in "
        } else {
            element.innerHTML += "Made in " + String(projectData["year"]) + "."
        }
    } else {
        if ("languages" in projectData) {
            element.innerHTML += "Made with "
        }
    }
    if ("languages" in projectData) {
        for (const language of projectData["languages"]) {
            element.appendChild(createLanguageTag(language))
        }
    }
    if ("genres" in projectData) {
        element.innerHTML += " Genre:"
        for (const genre of projectData["genres"]) {
            element.appendChild(createGenreTag(genre))
        }
    }
    return element;
}

function createProjectDataLinks(projectID, projectData) {
    let element = document.createElement("div")
    element.classList.add("links")
    if ("urls" in projectData) {
        for (const [type, url] of Object.entries(projectData["urls"])) {
            element.appendChild(createLinkTag(type, url))
        }
    }
    return element;
}

function createProjectDataTitle(projectID, projectData) {
    let element = document.createElement("div")
    let elementName = document.createElement("a")
    element.classList.add("title")
    if ("name" in projectData) {
        elementName.innerHTML = projectData["name"]
    } else {
        elementName.innerHTML = projectID
    }
    element.appendChild(elementName)
    element.appendChild(createProjectDataCategory(projectID, projectData))
    if ("tags" in projectData) {
        const tags = projectData["tags"]
        if (tags.includes("jam")) {
            element.appendChild(createCategoryTag("jam"))
        }
        if (tags.includes("epitech")) {
            element.appendChild(createCategoryTag("epitech"))
        }
    }
    return element;
}

function createProjectData(projectID, projectData) {
    let element = document.createElement("div")
    element.appendChild(createProjectDataTitle(projectID, projectData))
    element.appendChild(createProjectDataContent(projectID, projectData))
    element.classList.add("project")
    return element;
}

if (projectList) {
    for (const [projectID, projectData] of Object.entries(projectDataList)) {
        projectList.appendChild(createProjectData(projectID, projectData))
    }
}