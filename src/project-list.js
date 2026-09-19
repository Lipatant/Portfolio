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
    "haskell": {
        "color": "#5e5086",
        "name": "Haskell",
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
const projectListFilterDisplay = document.getElementById("project-list-filter-display")
let projectListProjects = []

const projectDataList = {
    "game/bards_tempo_keepers": {
        "description": "A retro-inspired RPG mixed with rythm-game elements",
        "languages": ["c"],
        "name": "Bards: Tempo Keepers",
        "tags": ["epitech", "game"],
        "urls": {
            "github": "https://github.com/Lipatant/BardsTempoKeepers",
        },
        "year": 2022,
    },
    "game/brawl_me_blues": {
        "description": "A fast-paced chaotic party game",
        "languages": ["godot"],
        "name": "Brawl Me Blues",
        "tags": ["game"],
        "urls": {
            "steam": "https://store.steampowered.com/app/3786030/Brawl_Me_Blues/",
            "youtube/trailer": "https://youtu.be/kKQS86UX8kQ?si=D6ul1TatPm8oe_EL",
        },
        "year": 2025,
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
    "game/for_the_great_belly": {
        "description": "An incremental game about cats getting fish",
        "languages": ["godot"],
        "name": "For The Great Belly",
        "tags": ["browser", "game", "jam"],
        "urls": {
            "itch.io embed": "https://lipatant.itch.io/for-the-great-belly",
            "github": "https://github.com/Lipatant/ForTheGreatBelly",
        },
        "year": 2026,
    },
    "game/keep_it_bombganized": {
        "description": "A puzzle game about making bombs that got first place at the Mini Jame Gam #49",
        "languages": ["godot"],
        "name": "Keep It Bombganized",
        "tags": ["browser", "game", "jam"],
        "urls": {
            "itch.io embed": "https://lipatant.itch.io/keep-it-bombganized",
            "github": "https://github.com/Lipatant/KeepItBombganized",
        },
        "year": 2025,
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
    "game/grim_at_your_service": {
        "description": "A social puzzle about HR but with Death itself",
        "languages": ["godot"],
        "name": "Grim, At Your Service",
        "tags": ["browser", "epitech", "game", "jam"],
        "urls": {
            "itch.io embed": "https://lipatant.itch.io/grim-at-your-service",
            "github": "https://github.com/Lipatant/GrimAtYourService",
        },
        "year": 2026,
    },
    "game/haimaskia": {
        "description": "A vampire-themed action/stealth game",
        "languages": ["godot"],
        "name": "Haimaskià",
        "tags": ["epitech", "game"],
        "urls": {
            "steam": "https://store.steampowered.com/app/4138200/Haimaski/",
            "itch.io": "https://haimaskia.itch.io/game",
            "youtube/trailer": "https://youtu.be/DERVDGHCZNo?si=86DxStAiGyruk1nh",
        },
        "year": 2026,
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
    "game/project_check_sabre": {
        "description": "A chess-inspired arcade game",
        "languages": ["godot"],
        "name": "Project Check Sabre: Gameplay Demo",
        "tags": ["game"],
        "urls": {
            "itch.io embed": "https://lipatant.itch.io/project-check-sabre",
            "youtube/devlog": "https://youtube.com/playlist?list=PL42_8vbq21uJzLOOtCp7N_5y_s4BYlVgH&si=drI2CuAP1O9nYMfn",
            "github": "https://github.com/Lipatant/CheckSabre",
        },
        "year": 2026,
    },
    "project/glados": {
        "description": "A compiler and interpreter for a home-made language",
        "languages": ["haskell"],
        "name": "GLaDOS",
        "tags": ["epitech"],
        "urls": {
            "github": "https://github.com/Lipatant/GLaDOS",
        },
        "year": 2023,
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
    "project/safaringo": {
        "description": "An exploration Minecraft minigame map",
        "languages": ["mcfunction"],
        "name": "Safaringo",
        "tags": ["mod", "web"],
        "urls": {
            "planetminecraft": "https://www.planetminecraft.com/project/safaringo/",
            "youtube/trailer": "https://youtu.be/dw0B3fWkQgU?si=wqhIDmfCelExC9x0",
        },
        "year": 2025,
    },
    "music/grim_at_your_service": {
        "description": "Two short acoustic tracks",
        "genres": ["Acoustic"],
        "name": "Grim, At Your Service (Original Game Soundtrack)",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtu.be/yfknoxEnlRc?si=ogthucu33eIIJJsa",
        },
        "year": 2026,
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
    "music/haimaskia": {
        "description": "Five tracks forming an album featuring a symphonic but minimalist main theme and an ominous boss track",
        "genres": ["Ambient","Symphonic"],
        "name": "Haimaskià (Original Game Soundtrack)",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtube.com/playlist?list=PLmXROgoZgUtyRqjwo8oVU2WtahVwhuOS4&si=iaXW9JyIW1W0vk8l",
        },
        "year": 2026,
    },
    "music/modern_wizard": {
        "description": "Two short synth tracks mixed with metal and surf-rock elements",
        "genres": ["Metal","Synth"],
        "name": "Modern Wizard (Original Game Soundtrack)",
        "tags": ["music"],
        "urls": {
            "youtube": "https://youtu.be/Bn2mUgofho4?si=rt4kA5l-QqMJFe12",
        },
        "year": 2024,
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
            element.style.backgroundColor = "var(--clr-app-itch-io)"
            element.innerHTML = "Get from Itch.io"
            break
        case "itch.io embed":
            element.style.backgroundColor = "var(--clr-app-itch-io)"
            element.innerHTML = "Play on Itch.io"    
            break
        case "planetminecraft":
            element.innerHTML = "Get from Planet Minecraft"
            break
        case "steam":
            element.style.backgroundColor = "var(--clr-app-steam)"
            element.innerHTML = "Get on Steam"    
            break
        case "youtube":
            element.style.backgroundColor = "var(--clr-app-youtube)"
            element.innerHTML = "Listen on YouTube"
            break
        case "youtube/devlog":
            element.style.backgroundColor = "var(--clr-app-youtube)"
            element.innerHTML = "Watch the dev log on YouTube"
            break
        case "youtube/trailer":
            element.style.backgroundColor = "var(--clr-app-youtube)"
            element.innerHTML = "Watch the trailer on YouTube"
            break
        case "web":
            element.style.backgroundColor = "var(--clr-app-web)"
            element.innerHTML = "Try the app"
            break
        default:
            element.innerHTML = "URL"
            break
    }
    return element
}

function createProjectDataCategory(projectID, projectData) {
    return createCategoryTag(getProjectDataCategory(projectID, projectData))
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
    element.id = projectID
    element.setAttribute("category", getProjectDataCategory(projectID, projectData))
    return element;
}

function filterProjectListAll() {
    for (const project of projectListProjects) {
        setProjectVisibility(project, false)
    }
    updateProjectListFilterDisplay()
}

function filterProjectListByCategory(category) {
    for (const project of projectListProjects) {
        setProjectVisibility(project, project.getAttribute("category") !== category)
    }
    updateProjectListFilterDisplay()
}

function filterProjectListByTag(tag) {
    for (const project of projectListProjects) {
        const projectData = projectDataList[project.id]
        if ("tags" in projectData) {
            setProjectVisibility(project, !projectData["tags"].includes(tag))
        } else {
            setProjectVisibility(project, false)
        }
    }
    updateProjectListFilterDisplay()
}

function getProjectDataCategory(projectID, projectData) {
    let category = "project"
    if ("tags" in projectData) {
        const tags = projectData["tags"]
        if (tags.includes("game")) {
            category = "game"
        } else if (tags.includes("music")) {
            category = "music"
        }
    }
    return category
}

function setProjectVisibility(project, hide) {
    if (hide) {
        if (!project.classList.contains("hide")) {
            project.classList.add("hide");
        }
    } else {
        if (project.classList.contains("hide")) {
            project.classList.remove("hide");
        }
    }
}

function updateProjectListFilterDisplay() {
    let projectCount = 0
    let projectCountDisplay = 0
    for (const project of projectListProjects) {
        projectCount += 1;
        if (!project.classList.contains("hide")) {
            projectCountDisplay += 1;
        }
    }
    if (projectListFilterDisplay) {
        if (projectCountDisplay < 1) {
            projectListFilterDisplay.innerHTML = `No project corresponding to the selected filter`
        } else if (projectCountDisplay >= projectCount) {
            projectListFilterDisplay.innerHTML = `All <b>${projectCount}</b> projects are displayed`
        } else if (projectCountDisplay === 1) {
            projectListFilterDisplay.innerHTML = `<b>1</b> project displayed, for a total of ${projectCount} projects`
        } else {
            projectListFilterDisplay.innerHTML = `<b>${projectCountDisplay}</b> projects displayed, for a total of ${projectCount} projects`
        }
    }
}

if (projectList) {
    for (const [projectID, projectData] of Object.entries(projectDataList)) {
        let project = createProjectData(projectID, projectData)
        projectList.appendChild(project)
        projectListProjects.push(project)
    }
    filterProjectListAll()
}