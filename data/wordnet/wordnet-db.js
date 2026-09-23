// Base dictionary with detailed multi-sense synsets
const CORE_DB = {
    "important": [
        {
            lemma: "important",
            pos: "a",
            frequencyRank: 95,
            synsets: [
                {
                    id: "syn_important_1",
                    pos: "a",
                    definition: "Of great significance, consequence, or value",
                    examples: ["an important decision", "it is important to note this fact"],
                    lemmas: ["significant", "notable", "consequential", "meaningful", "momentous"],
                    antonyms: ["unimportant", "insignificant", "trivial", "minor"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_important_2",
                    pos: "a",
                    definition: "Crucially vital and having high priority",
                    examples: ["critical system component", "essential requirement"],
                    lemmas: ["critical", "essential", "crucial", "vital", "imperative", "paramount"],
                    antonyms: ["optional", "dispensable", "negligible"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_important_3",
                    pos: "a",
                    definition: "Fundamentally central or basic",
                    examples: ["the key issue is security"],
                    lemmas: ["key", "main", "major", "chief", "primary"],
                    antonyms: ["secondary", "marginal"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_important_4",
                    pos: "a",
                    definition: "Carrying formal authority, prestige, or serious implications",
                    examples: ["a consequential summit of ministers", "a substantial outcome"],
                    lemmas: ["consequential", "substantive", "momentous", "authoritative", "illustrious"],
                    antonyms: ["petty", "nominal"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "light": [
        {
            lemma: "light",
            pos: "a",
            frequencyRank: 90,
            synsets: [
                {
                    id: "syn_light_adj_weight",
                    pos: "a",
                    definition: "Having little weight; not heavy; easily moved or lifted",
                    examples: ["the bag is light", "light luggage"],
                    lemmas: ["lightweight", "featherweight", "weightless", "portable", "slight"],
                    antonyms: ["heavy", "burdensome", "cumbersome", "ponderous"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_light_adj_illum",
                    pos: "a",
                    definition: "Characterized by brightness; well-illuminated",
                    examples: ["a light and airy room", "broad daylight"],
                    lemmas: ["bright", "luminous", "radiant", "illuminated", "clear"],
                    antonyms: ["dark", "dim", "gloomy", "shadowy"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_light_adj_effort",
                    pos: "a",
                    definition: "Requiring little effort; gentle or easy",
                    examples: ["light exercise", "light duties"],
                    lemmas: ["gentle", "mild", "effortless", "moderate"],
                    antonyms: ["strenuous", "demanding", "intense"],
                    level: "simple",
                    category: "simpler"
                }
            ]
        },
        {
            lemma: "light",
            pos: "n",
            frequencyRank: 92,
            synsets: [
                {
                    id: "syn_light_noun_illum",
                    pos: "n",
                    definition: "The natural agent that stimulates sight and makes things visible",
                    examples: ["turn on the light", "the light from the sun"],
                    lemmas: ["illumination", "radiance", "beam", "glow", "brightness", "lamp"],
                    antonyms: ["darkness", "shadow", "gloom"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_light_noun_clarity",
                    pos: "n",
                    definition: "Mental understanding or spiritual enlightenment",
                    examples: ["shed light on the mystery", "in light of new evidence"],
                    lemmas: ["clarity", "insight", "understanding", "perspective", "revelation"],
                    antonyms: ["confusion", "obscurity"],
                    level: "professional",
                    category: "formal"
                }
            ]
        },
        {
            lemma: "light",
            pos: "v",
            frequencyRank: 75,
            synsets: [
                {
                    id: "syn_light_verb",
                    pos: "v",
                    definition: "To ignite or set burning, or to provide with illumination",
                    examples: ["light a candle", "torches light the way"],
                    lemmas: ["ignite", "kindle", "illuminate", "brighten", "spark"],
                    antonyms: ["extinguish", "quench", "darken"],
                    level: "natural",
                    category: "similar"
                }
            ]
        }
    ],
    "fast": [
        {
            lemma: "fast",
            pos: "a",
            frequencyRank: 88,
            synsets: [
                {
                    id: "syn_fast_1",
                    pos: "a",
                    definition: "Moving or capable of moving at high speed",
                    examples: ["a fast train", "fast runner"],
                    lemmas: ["quick", "rapid", "swift", "speedy", "brisk"],
                    antonyms: ["slow", "sluggish", "gradual", "leisurely"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_fast_2",
                    pos: "a",
                    definition: "Operating with extreme or unprecedented velocity",
                    examples: ["lightning-fast turnaround", "breakneck acceleration"],
                    lemmas: ["high-speed", "fleet", "accelerated", "blistering", "prompt"],
                    antonyms: ["plodding", "tardy"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_fast_3",
                    pos: "a",
                    definition: "Accomplished without delay or extensive ceremony",
                    examples: ["quick check", "speedy fix"],
                    lemmas: ["quick", "prompt", "snappy"],
                    antonyms: ["slow"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_fast_4",
                    pos: "a",
                    definition: "Characterized by high dispatch, efficiency, or expeditious execution",
                    examples: ["an expeditious review process"],
                    lemmas: ["expeditious", "instantaneous", "precipitous"],
                    antonyms: ["protracted", "delayed"],
                    level: "academic",
                    category: "formal"
                }
            ]
        },
        {
            lemma: "fast",
            pos: "r",
            frequencyRank: 80,
            synsets: [
                {
                    id: "syn_fast_adv",
                    pos: "r",
                    definition: "Quickly or rapidly; without hesitation",
                    examples: ["he drove fast", "she learned fast"],
                    lemmas: ["quickly", "rapidly", "swiftly", "speedily", "briskly"],
                    antonyms: ["slowly", "sluggishly"],
                    level: "natural",
                    category: "similar"
                }
            ]
        }
    ],
    "create": [
        {
            lemma: "create",
            pos: "v",
            frequencyRank: 91,
            synsets: [
                {
                    id: "syn_create_1",
                    pos: "v",
                    definition: "Bring something into existence",
                    examples: ["create an application", "create a new painting"],
                    lemmas: ["produce", "generate", "build", "craft", "make", "form"],
                    antonyms: ["destroy", "demolish", "ruin", "annihilate"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_create_2",
                    pos: "v",
                    definition: "Invent, formulate, or inaugurate with originality",
                    examples: ["pioneer a new methodology", "forge a partnership"],
                    lemmas: ["originate", "establish", "engineer", "forge", "pioneer", "fabricate"],
                    antonyms: ["dismantle", "terminate"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_create_3",
                    pos: "v",
                    definition: "Construct or put together simply",
                    examples: ["make a list", "set up a group"],
                    lemmas: ["make", "build", "set up", "start"],
                    antonyms: ["break"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_create_4",
                    pos: "v",
                    definition: "Conceive through systematic intellectual synthesis",
                    examples: ["formulate a hypothesis", "synthesize findings"],
                    lemmas: ["formulate", "synthesize", "instigate", "constitute"],
                    antonyms: ["deconstruct"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "improve": [
        {
            lemma: "improve",
            pos: "v",
            frequencyRank: 89,
            synsets: [
                {
                    id: "syn_improve_1",
                    pos: "v",
                    definition: "Make or become better in quality or condition",
                    examples: ["improve your writing", "the weather improved"],
                    lemmas: ["enhance", "upgrade", "refine", "better", "boost"],
                    antonyms: ["worsen", "deteriorate", "impair", "degrade"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_improve_2",
                    pos: "v",
                    definition: "Systematically transform to maximize efficacy or superiority",
                    examples: ["optimize system throughput", "elevate standards"],
                    lemmas: ["optimize", "elevate", "revolutionize", "amplify", "sharpen"],
                    antonyms: ["compromise", "dilute"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_improve_3",
                    pos: "v",
                    definition: "Make nicer or fix up straightforwardly",
                    examples: ["fix up your room", "help things get better"],
                    lemmas: ["better", "fix up", "help", "polish"],
                    antonyms: ["harm"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_improve_4",
                    pos: "v",
                    definition: "Make a bad situation better; bring about scholarly or civic advancement",
                    examples: ["ameliorate working conditions", "augment capabilities"],
                    lemmas: ["ameliorate", "augment", "remedy", "rectify", "transcend"],
                    antonyms: ["exacerbate", "aggravate"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "effective": [
        {
            lemma: "effective",
            pos: "a",
            frequencyRank: 87,
            synsets: [
                {
                    id: "syn_effective_1",
                    pos: "a",
                    definition: "Successful in producing a desired or intended result",
                    examples: ["an effective solution", "effective leadership"],
                    lemmas: ["successful", "efficient", "productive", "functional", "impactful"],
                    antonyms: ["ineffective", "useless", "futile", "inefficient"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_effective_2",
                    pos: "a",
                    definition: "Possessing decisive power to produce compelling results",
                    examples: ["potent countermeasure", "formidable advantage"],
                    lemmas: ["potent", "compelling", "formidable", "decisive", "imperative"],
                    antonyms: ["powerless", "feeble"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_effective_3",
                    pos: "a",
                    definition: "Working well and getting the job done",
                    examples: ["useful tool", "good method"],
                    lemmas: ["useful", "helpful", "good", "practical"],
                    antonyms: ["unhelpful"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_effective_4",
                    pos: "a",
                    definition: "Producing the desired effect with scientific or scholarly precision",
                    examples: ["an efficacious remedy", "effectual governance"],
                    lemmas: ["efficacious", "effectual", "meritorious", "authoritative"],
                    antonyms: ["inoperative", "counterproductive"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "difficult": [
        {
            lemma: "difficult",
            pos: "a",
            frequencyRank: 86,
            synsets: [
                {
                    id: "syn_diff_1",
                    pos: "a",
                    definition: "Needing much effort or skill to accomplish or deal with",
                    examples: ["a difficult problem", "difficult circumstances"],
                    lemmas: ["hard", "challenging", "tough", "demanding", "tricky"],
                    antonyms: ["easy", "simple", "effortless", "straightforward"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_diff_2",
                    pos: "a",
                    definition: "Requiring extraordinary physical or mental fortitude",
                    examples: ["arduous trek", "formidable obstacle"],
                    lemmas: ["arduous", "formidable", "strenuous", "onerous", "rigorous"],
                    antonyms: ["trivial", "painless"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_diff_3",
                    pos: "a",
                    definition: "Hard to do or understand",
                    examples: ["hard question", "tough test"],
                    lemmas: ["hard", "tough"],
                    antonyms: ["easy", "simple"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_diff_4",
                    pos: "a",
                    definition: "Characterized by extreme complexity or burdensome obligations",
                    examples: ["an intractable dispute", "onerous responsibilities"],
                    lemmas: ["onerous", "intractable", "herculean", "laborious"],
                    antonyms: ["facile", "elementary"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "clear": [
        {
            lemma: "clear",
            pos: "a",
            frequencyRank: 90,
            synsets: [
                {
                    id: "syn_clear_1",
                    pos: "a",
                    definition: "Easy to perceive, understand, or interpret",
                    examples: ["a clear explanation", "crystal clear instructions"],
                    lemmas: ["lucid", "distinct", "plain", "evident", "apparent"],
                    antonyms: ["unclear", "vague", "ambiguous", "obscure", "muddy"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_clear_2",
                    pos: "a",
                    definition: "Leaving no doubt or ambiguity whatsoever",
                    examples: ["unambiguous statement", "unequivocal answer"],
                    lemmas: ["unambiguous", "unequivocal", "explicit", "transparent", "definitive"],
                    antonyms: ["dubious", "murky"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_clear_3",
                    pos: "a",
                    definition: "Simple and straightforward to see or read",
                    examples: ["plain words", "easy to see"],
                    lemmas: ["plain", "simple", "direct"],
                    antonyms: ["confusing"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_clear_4",
                    pos: "a",
                    definition: "Characterized by intellectual clarity and precise eloquence",
                    examples: ["perspicuous prose", "pellucid argumentation"],
                    lemmas: ["perspicuous", "pellucid", "unmistakable", "manifest"],
                    antonyms: ["nebulous", "opaque"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "good": [
        {
            lemma: "good",
            pos: "a",
            frequencyRank: 98,
            synsets: [
                {
                    id: "syn_good_1",
                    pos: "a",
                    definition: "To be desired or approved of; having required qualities",
                    examples: ["a good essay", "good work"],
                    lemmas: ["fine", "solid", "positive", "decent", "favorable", "sound"],
                    antonyms: ["bad", "poor", "inferior", "unsatisfactory"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_good_2",
                    pos: "a",
                    definition: "Possessing outstanding merit, superiority, or distinction",
                    examples: ["an exceptional achievement", "exemplary craftsmanship"],
                    lemmas: ["excellent", "superb", "outstanding", "exceptional", "stellar", "exemplary"],
                    antonyms: ["abysmal", "terrible", "dreadful"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_good_3",
                    pos: "a",
                    definition: "Pleasing and satisfactory",
                    examples: ["nice day", "great story"],
                    lemmas: ["great", "nice", "fine"],
                    antonyms: ["bad"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_good_4",
                    pos: "a",
                    definition: "Possessing high moral, intellectual, or civic virtue",
                    examples: ["an exemplary record", "virtuous conduct"],
                    lemmas: ["commendable", "meritorious", "virtuous", "laudable"],
                    antonyms: ["reprehensible", "deficient"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "bad": [
        {
            lemma: "bad",
            pos: "a",
            frequencyRank: 95,
            synsets: [
                {
                    id: "syn_bad_1",
                    pos: "a",
                    definition: "Of poor quality or a low standard",
                    examples: ["a bad mistake", "bad performance"],
                    lemmas: ["poor", "substandard", "faulty", "flawed", "defective"],
                    antonyms: ["good", "sound", "satisfactory"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_bad_2",
                    pos: "a",
                    definition: "Extremely harmful, severe, or disastrous",
                    examples: ["a catastrophic error", "detrimental effect"],
                    lemmas: ["detrimental", "catastrophic", "severe", "adverse", "deleterious"],
                    antonyms: ["beneficial", "advantageous"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_bad_3",
                    pos: "a",
                    definition: "Not good or not right",
                    examples: ["poor choice"],
                    lemmas: ["poor", "wrong", "awful"],
                    antonyms: ["good", "right"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_bad_4",
                    pos: "a",
                    definition: "Morally or intellectually deficient or deleterious",
                    examples: ["pernicious consequences", "nefarious conduct"],
                    lemmas: ["pernicious", "deplorable", "egregious", "inimical"],
                    antonyms: ["virtuous", "exemplary"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "smart": [
        {
            lemma: "smart",
            pos: "a",
            frequencyRank: 85,
            synsets: [
                {
                    id: "syn_smart_1",
                    pos: "a",
                    definition: "Having or showing a quick-witted intelligence",
                    examples: ["a smart student", "smart strategy"],
                    lemmas: ["intelligent", "clever", "bright", "sharp", "astute"],
                    antonyms: ["foolish", "stupid", "ignorant", "unwise"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_smart_2",
                    pos: "a",
                    definition: "Displaying profound intellectual capability and strategic acumen",
                    examples: ["brilliant innovation", "shrewd negotiator"],
                    lemmas: ["brilliant", "shrewd", "ingenious", "perspicacious", "sagacious"],
                    antonyms: ["obtuse", "inept"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_smart_3",
                    pos: "a",
                    definition: "Quick thinking and capable",
                    examples: ["clever idea", "sharp boy"],
                    lemmas: ["clever", "sharp", "wise"],
                    antonyms: ["slow"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_smart_4",
                    pos: "a",
                    definition: "Marked by scholarly depth and intellectual rigor",
                    examples: ["erudite scholar", "sagacious analysis"],
                    lemmas: ["erudite", "intellectual", "judicious", "insightful"],
                    antonyms: ["superficial"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "problem": [
        {
            lemma: "problem",
            pos: "n",
            frequencyRank: 93,
            synsets: [
                {
                    id: "syn_prob_1",
                    pos: "n",
                    definition: "A matter or situation regarded as unwelcome or harmful",
                    examples: ["solve the problem", "technical problems"],
                    lemmas: ["issue", "difficulty", "trouble", "challenge", "obstacle"],
                    antonyms: ["solution", "advantage", "benefit"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_prob_2",
                    pos: "n",
                    definition: "A grave or critical impasse threatening operations",
                    examples: ["crisis management", "critical dilemma"],
                    lemmas: ["crisis", "dilemma", "predicament", "hazard", "bottleneck"],
                    antonyms: ["resolution", "panacea"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_prob_3",
                    pos: "n",
                    definition: "Something hard to fix or deal with",
                    examples: ["hitch in the plan"],
                    lemmas: ["snag", "hitch", "trouble", "setback"],
                    antonyms: ["fix"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_prob_4",
                    pos: "n",
                    definition: "A theoretical or practical conundrum demanding academic investigation",
                    examples: ["an intricate conundrum", "methodological quagmire"],
                    lemmas: ["conundrum", "quagmire", "impediment", "adversity"],
                    antonyms: ["clarity", "equilibrium"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "solution": [
        {
            lemma: "solution",
            pos: "n",
            frequencyRank: 90,
            synsets: [
                {
                    id: "syn_sol_1",
                    pos: "n",
                    definition: "A means of solving a problem or dealing with a difficult situation",
                    examples: ["find a solution", "software solution"],
                    lemmas: ["answer", "resolution", "fix", "remedy", "key"],
                    antonyms: ["problem", "complication", "dilemma"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_sol_2",
                    pos: "n",
                    definition: "A comprehensive or decisive formula that resolves all difficulties",
                    examples: ["definitive remedy", "strategic resolution"],
                    lemmas: ["resolution", "breakthrough", "masterstroke", "countermeasure"],
                    antonyms: ["worsening"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_sol_3",
                    pos: "n",
                    definition: "A quick or straightforward way to fix something",
                    examples: ["easy fix", "simple answer"],
                    lemmas: ["fix", "way out", "answer"],
                    antonyms: ["trouble"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_sol_4",
                    pos: "n",
                    definition: "A scientifically verified resolution or theoretical synthesis",
                    examples: ["an efficacious panacea", "redress of grievances"],
                    lemmas: ["panacea", "redress", "rectification", "denouement"],
                    antonyms: ["stalemate"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "write": [
        {
            lemma: "write",
            pos: "v",
            frequencyRank: 92,
            synsets: [
                {
                    id: "syn_write_1",
                    pos: "v",
                    definition: "Mark letters, words, or symbols on a surface; compose text",
                    examples: ["write an article", "write an email"],
                    lemmas: ["compose", "author", "draft", "pen", "record"],
                    antonyms: ["erase", "delete", "obliterate"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_write_2",
                    pos: "v",
                    definition: "Craft literary or professional prose with mastery",
                    examples: ["author a monograph", "formulate a proposal"],
                    lemmas: ["author", "craft", "formulate", "inscribe", "publish"],
                    antonyms: ["censor"],
                    level: "professional",
                    category: "stronger"
                },
                {
                    id: "syn_write_3",
                    pos: "v",
                    definition: "Put down words simply",
                    examples: ["jot down notes", "set down thoughts"],
                    lemmas: ["jot down", "set down", "note"],
                    antonyms: ["erase"],
                    level: "simple",
                    category: "simpler"
                },
                {
                    id: "syn_write_4",
                    pos: "v",
                    definition: "Produce scholarly treatise or formal dissertation",
                    examples: ["treatise composition", "indite a formal treatise"],
                    lemmas: ["indite", "delineate", "chronicle", "transcribe"],
                    antonyms: ["expunge"],
                    level: "academic",
                    category: "formal"
                }
            ]
        }
    ],
    "build": [
        {
            lemma: "build",
            pos: "v",
            frequencyRank: 88,
            synsets: [
                {
                    id: "syn_build_1",
                    pos: "v",
                    definition: "Construct something by putting parts or material together",
                    examples: ["build an application", "build a bridge"],
                    lemmas: ["construct", "create", "assemble", "erect", "develop"],
                    antonyms: ["destroy", "demolish", "dismantle"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_build_2",
                    pos: "v",
                    definition: "Architect robust and scalable systems",
                    examples: ["engineer an enterprise platform"],
                    lemmas: ["engineer", "architect", "fabricate", "forge", "scaffold"],
                    antonyms: ["deconstruct"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ],
    "start": [
        {
            lemma: "start",
            pos: "v",
            frequencyRank: 92,
            synsets: [
                {
                    id: "syn_start_1",
                    pos: "v",
                    definition: "Begin or cause something to begin",
                    examples: ["start a project", "start the car"],
                    lemmas: ["begin", "commence", "initiate", "launch", "open"],
                    antonyms: ["finish", "end", "stop", "conclude", "terminate"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_start_2",
                    pos: "v",
                    definition: "Inaugurate or spearhead an enterprise with vigor",
                    examples: ["inaugurate a campaign", "spearhead an effort"],
                    lemmas: ["inaugurate", "spearhead", "instigate", "kick off", "embark upon"],
                    antonyms: ["cease", "abort"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ],
    "stop": [
        {
            lemma: "stop",
            pos: "v",
            frequencyRank: 91,
            synsets: [
                {
                    id: "syn_stop_1",
                    pos: "v",
                    definition: "Come to an end or cause to come to an end",
                    examples: ["stop the process", "stop talking"],
                    lemmas: ["halt", "pause", "cease", "end", "terminate", "conclude"],
                    antonyms: ["start", "begin", "continue", "resume", "proceed"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_stop_2",
                    pos: "v",
                    definition: "Permanently arrest or extinguish activity",
                    examples: ["arrest the decline", "quench opposition"],
                    lemmas: ["arrest", "discontinue", "quash", "suspend", "curb"],
                    antonyms: ["foster", "prolong"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ],
    "explain": [
        {
            lemma: "explain",
            pos: "v",
            frequencyRank: 87,
            synsets: [
                {
                    id: "syn_explain_1",
                    pos: "v",
                    definition: "Make an idea or situation clear to someone by describing it in detail",
                    examples: ["explain the rules", "explain why this happened"],
                    lemmas: ["clarify", "describe", "elaborate", "illuminate", "define"],
                    antonyms: ["confuse", "obscure", "complicate"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_explain_2",
                    pos: "v",
                    definition: "Unravel and elucidate complex systems comprehensively",
                    examples: ["elucidate the mechanism", "articulate principles"],
                    lemmas: ["elucidate", "articulate", "expound", "demystify", "explicate"],
                    antonyms: ["mystify", "obfuscate"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ],
    "help": [
        {
            lemma: "help",
            pos: "v",
            frequencyRank: 94,
            synsets: [
                {
                    id: "syn_help_1",
                    pos: "v",
                    definition: "Make it easier or possible for someone to do something",
                    examples: ["help users write better", "help a friend"],
                    lemmas: ["assist", "support", "aid", "serve", "back"],
                    antonyms: ["hinder", "impede", "obstruct", "thwart"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_help_2",
                    pos: "v",
                    definition: "Empower or champion an endeavor to success",
                    examples: ["facilitate progress", "champion an initiative"],
                    lemmas: ["facilitate", "empower", "champion", "foster", "bolster"],
                    antonyms: ["sabotage", "undermine"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ],
    "show": [
        {
            lemma: "show",
            pos: "v",
            frequencyRank: 93,
            synsets: [
                {
                    id: "syn_show_1",
                    pos: "v",
                    definition: "Allow or cause something to be visible or understood",
                    examples: ["show the results", "show the diagram"],
                    lemmas: ["display", "reveal", "present", "demonstrate", "exhibit"],
                    antonyms: ["hide", "conceal", "obscure", "cover"],
                    level: "natural",
                    category: "similar"
                },
                {
                    id: "syn_show_2",
                    pos: "v",
                    definition: "Establish beyond dispute with compelling evidence",
                    examples: ["prove the theory", "illustrate the point with data"],
                    lemmas: ["illustrate", "evidence", "prove", "manifest", "substantiate"],
                    antonyms: ["disprove", "mask"],
                    level: "professional",
                    category: "stronger"
                }
            ]
        }
    ]
};
// Simple morphological lemmatizer for lookups
export function lemmatizeWord(word) {
    const lower = word.toLowerCase().trim();
    if (CORE_DB[lower]) {
        return { lemma: lower };
    }
    // Plurals / Verb 3rd singular (-s, -es, -ies)
    if (lower.endsWith('ies') && lower.length > 4) {
        const candidate = lower.slice(0, -3) + 'y';
        if (CORE_DB[candidate])
            return { lemma: candidate };
    }
    if (lower.endsWith('es') && lower.length > 3) {
        const candidate = lower.slice(0, -2);
        if (CORE_DB[candidate])
            return { lemma: candidate };
    }
    if (lower.endsWith('s') && lower.length > 2 && !lower.endsWith('ss')) {
        const candidate = lower.slice(0, -1);
        if (CORE_DB[candidate])
            return { lemma: candidate };
    }
    // Past tense / Participle (-ed, -d)
    if (lower.endsWith('ed') && lower.length > 3) {
        const candidate1 = lower.slice(0, -2);
        if (CORE_DB[candidate1])
            return { lemma: candidate1, posCandidate: 'v' };
        const candidate2 = lower.slice(0, -1);
        if (CORE_DB[candidate2])
            return { lemma: candidate2, posCandidate: 'v' };
    }
    // Progressive (-ing)
    if (lower.endsWith('ing') && lower.length > 4) {
        const candidate1 = lower.slice(0, -3);
        if (CORE_DB[candidate1])
            return { lemma: candidate1, posCandidate: 'v' };
        const candidate2 = candidate1 + 'e';
        if (CORE_DB[candidate2])
            return { lemma: candidate2, posCandidate: 'v' };
    }
    // Adverbs (-ly)
    if (lower.endsWith('ly') && lower.length > 3) {
        const candidate = lower.slice(0, -2);
        if (CORE_DB[candidate])
            return { lemma: candidate, posCandidate: 'a' };
    }
    // Comparatives (-er, -est)
    if (lower.endsWith('er') && lower.length > 3) {
        const candidate = lower.slice(0, -2);
        if (CORE_DB[candidate])
            return { lemma: candidate, posCandidate: 'a' };
    }
    if (lower.endsWith('est') && lower.length > 4) {
        const candidate = lower.slice(0, -3);
        if (CORE_DB[candidate])
            return { lemma: candidate, posCandidate: 'a' };
    }
    return { lemma: lower };
}
export const WORDNET_DATABASE = CORE_DB;
//# sourceMappingURL=wordnet-db.js.map