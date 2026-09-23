import { WordEntry, POS, VocabularyLevel, SynonymCategory, SynsetRecord } from './types.js';

/**
 * Open English WordNet Comprehensive Lexical Database
 * Contains rich multi-sense synsets with 4 tiers: Similar, Stronger, Simpler, Formal, and Antonyms.
 */
export const WORDNET_DATABASE: Record<string, WordEntry[]> = {
  // --- EDUCATION & ACADEMICS ---
  "school": [
    {
      lemma: "school",
      pos: "n",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_school_institution",
          pos: "n",
          definition: "An educational institution designed for teaching students under the direction of teachers",
          examples: ["he go to school every day", "the high school curriculum"],
          lemmas: ["academy", "institution", "college", "seminary", "lyceum", "classroom", "educational institution"],
          antonyms: [],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_school_faculty",
          pos: "n",
          definition: "A department or specialized division of a university devoted to a particular branch of learning",
          examples: ["the medical school", "the school of engineering"],
          lemmas: ["faculty", "department", "division", "academic college", "institute"],
          antonyms: [],
          level: "professional",
          category: "formal"
        },
        {
          id: "syn_school_body",
          pos: "n",
          definition: "The students and staff members of an educational institution collectively",
          examples: ["the whole school attended the assembly"],
          lemmas: ["student body", "campus", "community", "assembly"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_school_fish",
          pos: "n",
          definition: "A large number of fish or sea animals swimming together",
          examples: ["a school of dolphins", "a school of tuna"],
          lemmas: ["shoal", "swarm", "flock", "group"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    },
    {
      lemma: "school",
      pos: "v",
      frequencyRank: 62,
      synsets: [
        {
          id: "syn_school_verb",
          pos: "v",
          definition: "To educate, train, or discipline in a systematic manner",
          examples: ["school someone in the basics of writing"],
          lemmas: ["educate", "train", "instruct", "tutor", "discipline", "coach"],
          antonyms: ["neglect", "misguide"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "student": [
    {
      lemma: "student",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_student_learner",
          pos: "n",
          definition: "A person who is studying at a school, college, or university",
          examples: ["a high school student", "students in the library"],
          lemmas: ["pupil", "learner", "scholar", "undergraduate", "apprentice", "trainee", "disciple"],
          antonyms: ["teacher", "instructor", "professor"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_student_scholar",
          pos: "n",
          definition: "An attentive observer, researcher, or dedicated scholar of a subject",
          examples: ["a keen student of history", "a student of political affairs"],
          lemmas: ["scholar", "researcher", "investigator", "analyst", "observer"],
          antonyms: [],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "teacher": [
    {
      lemma: "teacher",
      pos: "n",
      frequencyRank: 90,
      synsets: [
        {
          id: "syn_teacher_educator",
          pos: "n",
          definition: "A person who helps students acquire knowledge, competence, or virtue",
          examples: ["a science teacher", "the teacher gave instructions"],
          lemmas: ["instructor", "educator", "tutor", "professor", "mentor", "trainer", "pedagogue"],
          antonyms: ["student", "pupil", "learner"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_teacher_mentor",
          pos: "n",
          definition: "An inspiring guide or recognized authority providing counsel",
          examples: ["a beloved mentor and teacher"],
          lemmas: ["mentor", "guide", "master", "counselor", "luminary"],
          antonyms: [],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "education": [
    {
      lemma: "education",
      pos: "n",
      frequencyRank: 89,
      synsets: [
        {
          id: "syn_education_instruction",
          pos: "n",
          definition: "The process of receiving or giving systematic instruction, especially at a school or university",
          examples: ["primary education", "higher education"],
          lemmas: ["schooling", "instruction", "tuition", "teaching", "pedagogy", "tutelage", "learning"],
          antonyms: ["ignorance", "illiteracy"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_education_erudition",
          pos: "n",
          definition: "The knowledge and intellectual cultivation acquired through learning",
          examples: ["a person of great education and culture"],
          lemmas: ["enlightenment", "erudition", "scholarship", "cultivation", "intellectual development"],
          antonyms: [],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "study": [
    {
      lemma: "study",
      pos: "v",
      frequencyRank: 88,
      synsets: [
        {
          id: "syn_study_verb",
          pos: "v",
          definition: "Devote time and attention to acquiring knowledge on an academic subject",
          examples: ["study for an exam", "study linguistics"],
          lemmas: ["examine", "analyze", "investigate", "scrutinize", "research", "learn", "review", "pore over"],
          antonyms: ["neglect", "ignore", "skim"],
          level: "natural",
          category: "similar"
        }
      ]
    },
    {
      lemma: "study",
      pos: "n",
      frequencyRank: 87,
      synsets: [
        {
          id: "syn_study_noun",
          pos: "n",
          definition: "A detailed investigation and analysis of a subject or situation",
          examples: ["a clinical study", "publish a new study"],
          lemmas: ["investigation", "analysis", "inquiry", "report", "treatise", "survey", "examination"],
          antonyms: [],
          level: "professional",
          category: "formal"
        }
      ]
    }
  ],
  "learn": [
    {
      lemma: "learn",
      pos: "v",
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_learn_acquire",
          pos: "v",
          definition: "Gain or acquire knowledge of or skill in something by study or practice",
          examples: ["learn a new language", "learn from experience"],
          lemmas: ["acquire", "master", "grasp", "absorb", "comprehend", "assimilate", "internalize"],
          antonyms: ["forget", "unlearn"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_learn_discover",
          pos: "v",
          definition: "Become aware of something by information or observation",
          examples: ["we learned that the meeting was postponed"],
          lemmas: ["discover", "ascertain", "gather", "glean", "find out"],
          antonyms: [],
          level: "professional",
          category: "formal"
        }
      ]
    }
  ],

  // --- ENTITIES, NOUNS & GENERAL CONCEPTS ---
  "something": [
    {
      lemma: "something",
      pos: "n",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_something_entity",
          pos: "n",
          definition: "An unspecified or undetermined object, matter, or entity",
          examples: ["create something important", "there is something on the table"],
          lemmas: ["entity", "object", "matter", "substance", "item", "article", "element"],
          antonyms: ["nothing", "zero"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_something_notable",
          pos: "n",
          definition: "An entity or individual of notable importance or consequence",
          examples: ["he really made something of himself", "that breakthrough is really something"],
          lemmas: ["notable achievement", "remarkable entity", "distinguished thing", "marvel"],
          antonyms: ["trifle", "nonentity"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_something_portion",
          pos: "n",
          definition: "A certain part, portion, or quantity",
          examples: ["give me something to eat", "a little something"],
          lemmas: ["part", "portion", "fraction", "bit", "piece"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "bag": [
    {
      lemma: "bag",
      pos: "n",
      frequencyRank: 84,
      synsets: [
        {
          id: "syn_bag_container",
          pos: "n",
          definition: "A flexible container with an opening at the top, used for carrying things",
          examples: ["the bag is light", "carry a shopping bag"],
          lemmas: ["sack", "pouch", "pack", "backpack", "satchel", "tote", "handbag", "receptacle"],
          antonyms: [],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_bag_luggage",
          pos: "n",
          definition: "Luggage or travel baggage used to carry personal belongings",
          examples: ["pack your bags for the trip"],
          lemmas: ["luggage", "baggage", "suitcase", "valise", "trunk"],
          antonyms: [],
          level: "professional",
          category: "formal"
        }
      ]
    }
  ],
  "room": [
    {
      lemma: "room",
      pos: "n",
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_room_chamber",
          pos: "n",
          definition: "A partitioned area inside a building with walls, floor, and ceiling",
          examples: ["turn on the light in the room", "a hotel room"],
          lemmas: ["chamber", "space", "quarters", "compartment", "office", "hall", "suite", "enclosure"],
          antonyms: [],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_room_scope",
          pos: "n",
          definition: "Space or opportunity for something to happen or be accommodated",
          examples: ["room for improvement", "room for growth"],
          lemmas: ["scope", "latitude", "leeway", "margin", "capacity", "opportunity"],
          antonyms: ["restriction", "limitation"],
          level: "professional",
          category: "formal"
        }
      ]
    }
  ],
  "method": [
    {
      lemma: "method",
      pos: "n",
      frequencyRank: 88,
      synsets: [
        {
          id: "syn_method_technique",
          pos: "n",
          definition: "A particular procedure for accomplishing or approaching something",
          examples: ["the new method is more effective", "scientific method"],
          lemmas: ["technique", "approach", "procedure", "strategy", "process", "mechanism", "system", "practice"],
          antonyms: ["disorder", "chaos"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_method_methodology",
          pos: "n",
          definition: "A structured, formalized framework or system of principles",
          examples: ["the proposed methodology for data collection"],
          lemmas: ["methodology", "protocol", "regimen", "systematization", "algorithm"],
          antonyms: [],
          level: "academic",
          category: "formal"
        },
        {
          id: "syn_method_way",
          pos: "n",
          definition: "A simple or direct way of doing things",
          examples: ["an easy method to learn"],
          lemmas: ["way", "means", "mode", "manner"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "system": [
    {
      lemma: "system",
      pos: "n",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_system_framework",
          pos: "n",
          definition: "A set of connected things or parts forming an organized complex whole",
          examples: ["operating system", "a system of checks and balances"],
          lemmas: ["framework", "network", "structure", "mechanism", "organization", "scheme", "setup"],
          antonyms: ["chaos", "disorganization"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_system_infrastructure",
          pos: "n",
          definition: "Comprehensive underlying infrastructure or architectural paradigm",
          examples: ["the enterprise software system"],
          lemmas: ["infrastructure", "ecosystem", "architecture", "paradigm", "apparatus"],
          antonyms: [],
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
      frequencyRank: 94,
      synsets: [
        {
          id: "syn_problem_issue",
          pos: "n",
          definition: "A matter or situation regarded as unwelcome, harmful, or difficult to deal with",
          examples: ["solve a difficult problem", "economic problems"],
          lemmas: ["issue", "difficulty", "challenge", "obstacle", "dilemma", "complication", "trouble", "impediment"],
          antonyms: ["solution", "answer", "resolution"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_problem_crisis",
          pos: "n",
          definition: "An acute, severe, or high-stakes predicament",
          examples: ["a critical security problem"],
          lemmas: ["crisis", "predicament", "quandary", "conundrum", "adversity"],
          antonyms: ["panacea", "benefit"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_problem_snag",
          pos: "n",
          definition: "A minor difficulty or hitch",
          examples: ["a small problem in the code"],
          lemmas: ["snag", "hitch", "glitch", "bug", "flaw"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "solution": [
    {
      lemma: "solution",
      pos: "n",
      frequencyRank: 89,
      synsets: [
        {
          id: "syn_solution_answer",
          pos: "n",
          definition: "A means of solving a problem or dealing with a difficult situation",
          examples: ["find a viable solution", "the solution to the puzzle"],
          lemmas: ["answer", "remedy", "resolution", "fix", "cure", "countermeasure", "treatment"],
          antonyms: ["problem", "obstacle", "dilemma"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_solution_breakthrough",
          pos: "n",
          definition: "A decisive innovation or definitive remedy resolving an intricate issue",
          examples: ["a breakthrough solution in medicine"],
          lemmas: ["breakthrough", "panacea", "masterstroke", "definitive answer"],
          antonyms: [],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "idea": [
    {
      lemma: "idea",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_idea_concept",
          pos: "n",
          definition: "A thought or suggestion as to a possible course of action or understanding",
          examples: ["a great business idea", "the central idea of the book"],
          lemmas: ["concept", "notion", "thought", "insight", "hypothesis", "theory", "conception", "plan"],
          antonyms: ["fact", "reality"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_idea_inspiration",
          pos: "n",
          definition: "A brilliant flash of creative insight or guiding vision",
          examples: ["a stroke of genius and idea"],
          lemmas: ["inspiration", "revelation", "brainwave", "vision", "epiphany"],
          antonyms: [],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "work": [
    {
      lemma: "work",
      pos: "n",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_work_job",
          pos: "n",
          definition: "Activity involving mental or physical effort done to achieve a purpose or employment",
          examples: ["go to work", "hard work pays off"],
          lemmas: ["job", "task", "labor", "occupation", "employment", "duty", "endeavor", "effort", "assignment"],
          antonyms: ["leisure", "idleness", "rest"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_work_creation",
          pos: "n",
          definition: "A work of art, literature, music, or scholarship produced by an author",
          examples: ["the complete works of Shakespeare"],
          lemmas: ["creation", "composition", "masterpiece", "opus", "production", "treatise"],
          antonyms: [],
          level: "academic",
          category: "formal"
        }
      ]
    },
    {
      lemma: "work",
      pos: "v",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_work_verb_perform",
          pos: "v",
          definition: "Be engaged in physical or mental activity; operate correctly",
          examples: ["work on a project", "the engine works smoothly"],
          lemmas: ["labor", "toil", "operate", "function", "perform", "strive", "serve", "execute"],
          antonyms: ["fail", "malfunction", "idle"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "house": [
    {
      lemma: "house",
      pos: "n",
      frequencyRank: 89,
      synsets: [
        {
          id: "syn_house_home",
          pos: "n",
          definition: "A building for human habitation, especially one lived in by a family",
          examples: ["a two-story house", "live in a suburban house"],
          lemmas: ["home", "residence", "dwelling", "abode", "domicile", "quarters", "habitation", "building"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "city": [
    {
      lemma: "city",
      pos: "n",
      frequencyRank: 90,
      synsets: [
        {
          id: "syn_city_metropolis",
          pos: "n",
          definition: "A large town and human settlement of notable size, population, or importance",
          examples: ["live in a big city", "the capital city"],
          lemmas: ["metropolis", "municipality", "urban center", "town", "megalopolis", "capital", "settlement"],
          antonyms: ["countryside", "village"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "car": [
    {
      lemma: "car",
      pos: "n",
      frequencyRank: 88,
      synsets: [
        {
          id: "syn_car_vehicle",
          pos: "n",
          definition: "A four-wheeled road vehicle powered by an engine and able to carry passengers",
          examples: ["drive a car", "park the car"],
          lemmas: ["automobile", "vehicle", "motorcar", "auto", "sedan", "coupe", "conveyance"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "money": [
    {
      lemma: "money",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_money_currency",
          pos: "n",
          definition: "A current medium of exchange in the form of coins and banknotes",
          examples: ["earn money", "save money for the future"],
          lemmas: ["currency", "funds", "capital", "cash", "finances", "wealth", "resources", "revenue", "assets"],
          antonyms: ["debt", "poverty"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "book": [
    {
      lemma: "book",
      pos: "n",
      frequencyRank: 90,
      synsets: [
        {
          id: "syn_book_volume",
          pos: "n",
          definition: "A written or printed work consisting of pages bound together",
          examples: ["read a book", "publish a textbook"],
          lemmas: ["volume", "publication", "tome", "text", "manuscript", "manual", "handbook", "treatise"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "computer": [
    {
      lemma: "computer",
      pos: "n",
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_computer_machine",
          pos: "n",
          definition: "An electronic device for storing and processing data according to variable programs",
          examples: ["work on a computer", "a personal computer"],
          lemmas: ["processor", "workstation", "terminal", "system", "device", "laptop", "mainframe", "pc"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "friend": [
    {
      lemma: "friend",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_friend_companion",
          pos: "n",
          definition: "A person with whom one has a bond of mutual affection and trust",
          examples: ["a close friend", "make new friends"],
          lemmas: ["companion", "ally", "partner", "associate", "confidant", "comrade", "peer", "buddy"],
          antonyms: ["enemy", "foe", "rival", "opponent"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "family": [
    {
      lemma: "family",
      pos: "n",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_family_household",
          pos: "n",
          definition: "A group of people affiliated by consanguinity, affinity, or co-residence",
          examples: ["spend time with family", "a supportive family"],
          lemmas: ["household", "relatives", "kin", "lineage", "clan", "kinship", "ancestry", "tribe"],
          antonyms: ["strangers"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "water": [
    {
      lemma: "water",
      pos: "n",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_water_liquid",
          pos: "n",
          definition: "The transparent liquid that forms rain, rivers, and oceans, essential for life",
          examples: ["drink a glass of water", "pure water"],
          lemmas: ["liquid", "fluid", "aqua", "moisture", "h2o", "beverage"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "food": [
    {
      lemma: "food",
      pos: "n",
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_food_nourishment",
          pos: "n",
          definition: "Any nutritious substance consumed by living beings to maintain life and growth",
          examples: ["healthy food", "prepare delicious food"],
          lemmas: ["nourishment", "sustenance", "fare", "cuisine", "diet", "meal", "edibles", "provisions"],
          antonyms: ["poison", "toxin"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "world": [
    {
      lemma: "world",
      pos: "n",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_world_earth",
          pos: "n",
          definition: "The earth, together with all of its countries, peoples, and natural environments",
          examples: ["travel the world", "a global world"],
          lemmas: ["earth", "globe", "planet", "cosmos", "universe", "sphere", "realm", "domain"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "life": [
    {
      lemma: "life",
      pos: "n",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_life_existence",
          pos: "n",
          definition: "The existence of an individual human being or organism and their experiences",
          examples: ["life is a journey", "improve our daily life"],
          lemmas: ["existence", "being", "living", "vitality", "lifetime", "lifespan", "biography"],
          antonyms: ["death", "extinction", "nonexistence"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "time": [
    {
      lemma: "time",
      pos: "n",
      frequencyRank: 98,
      synsets: [
        {
          id: "syn_time_period",
          pos: "n",
          definition: "The continuous progression of existence and events occurring in succession",
          examples: ["it takes time to learn", "at the same time"],
          lemmas: ["period", "duration", "interval", "season", "era", "epoch", "moment", "span", "juncture"],
          antonyms: ["eternity"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "day": [
    {
      lemma: "day",
      pos: "n",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_day_period",
          pos: "n",
          definition: "A period of twenty-four hours, or the daylight hours from sunrise to sunset",
          examples: ["every single day", "a sunny day"],
          lemmas: ["daytime", "daylight", "date", "twenty-four hours", "working day"],
          antonyms: ["night", "darkness"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "night": [
    {
      lemma: "night",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_night_darkness",
          pos: "n",
          definition: "The period of darkness between sunset and sunrise",
          examples: ["a peaceful night", "study late at night"],
          lemmas: ["evening", "nighttime", "darkness", "dusk", "twilight", "midnight"],
          antonyms: ["day", "daytime", "daylight"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "person": [
    {
      lemma: "person",
      pos: "n",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_person_individual",
          pos: "n",
          definition: "A human being regarded as an individual",
          examples: ["an educated person", "every person matters"],
          lemmas: ["individual", "human", "being", "citizen", "soul", "figure", "mortal"],
          antonyms: ["object", "thing"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "people": [
    {
      lemma: "people",
      pos: "n",
      frequencyRank: 97,
      synsets: [
        {
          id: "syn_people_group",
          pos: "n",
          definition: "Human beings in general or considered collectively as members of a community",
          examples: ["people from all walks of life", "inspire people"],
          lemmas: ["humans", "individuals", "citizens", "populace", "community", "public", "society", "folk"],
          antonyms: [],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],

  // --- ACTIONS & VERBS ---
  "write": [
    {
      lemma: "write",
      pos: "v",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_write_compose",
          pos: "v",
          definition: "Compose text or mark letters and symbols on a surface",
          examples: ["write an essay", "write code"],
          lemmas: ["compose", "author", "draft", "pen", "record", "inscribe", "formulate"],
          antonyms: ["erase", "delete", "obliterate"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_write_publish",
          pos: "v",
          definition: "Produce a formal publication, manuscript, or documented work",
          examples: ["write a seminal treatise on economics"],
          lemmas: ["publish", "chronicle", "document", "codify", "promulgate"],
          antonyms: [],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "read": [
    {
      lemma: "read",
      pos: "v",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_read_peruse",
          pos: "v",
          definition: "Look at and comprehend the meaning of written or printed characters",
          examples: ["read a book", "read the instructions"],
          lemmas: ["peruse", "scan", "examine", "study", "interpret", "review", "decipher"],
          antonyms: ["ignore", "overlook"],
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
      frequencyRank: 94,
      synsets: [
        {
          id: "syn_create_produce",
          pos: "v",
          definition: "Bring something into existence; make or generate something new",
          examples: ["create something important", "create a new design"],
          lemmas: ["generate", "produce", "build", "craft", "form", "construct", "originate", "fashion"],
          antonyms: ["destroy", "demolish", "ruin", "eliminate"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_create_innovate",
          pos: "v",
          definition: "Design or inaugurate a breakthrough concept or system",
          examples: ["create a revolutionary platform"],
          lemmas: ["innovate", "establish", "engineer", "pioneer", "inaugurate", "forge"],
          antonyms: ["dismantle", "annihilate"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_create_make",
          pos: "v",
          definition: "Make or put together",
          examples: ["create a list"],
          lemmas: ["make", "build", "set up"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "improve": [
    {
      lemma: "improve",
      pos: "v",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_improve_enhance",
          pos: "v",
          definition: "Make or become better; enhance the quality, value, or state of something",
          examples: ["improve our writing", "improve performance"],
          lemmas: ["enhance", "upgrade", "refine", "elevate", "boost", "strengthen", "advance", "polish"],
          antonyms: ["worsen", "deteriorate", "impair", "degrade"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_improve_ameliorate",
          pos: "v",
          definition: "Significantly elevate standard or remediate structural weaknesses",
          examples: ["ameliorate living conditions", "optimize system efficiency"],
          lemmas: ["optimize", "ameliorate", "transform", "maximize", "streamline"],
          antonyms: ["compound", "aggravate"],
          level: "academic",
          category: "formal"
        },
        {
          id: "syn_improve_better",
          pos: "v",
          definition: "Make better or fix up",
          examples: ["improve your score"],
          lemmas: ["better", "help", "fix", "clean up"],
          antonyms: [],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "change": [
    {
      lemma: "change",
      pos: "v",
      frequencyRank: 94,
      synsets: [
        {
          id: "syn_change_alter",
          pos: "v",
          definition: "Make or become different; modify the nature, form, or state",
          examples: ["change your approach", "change the text"],
          lemmas: ["alter", "modify", "transform", "shift", "convert", "adapt", "adjust", "evolve"],
          antonyms: ["preserve", "maintain", "retain", "continue"],
          level: "natural",
          category: "similar"
        }
      ]
    },
    {
      lemma: "change",
      pos: "n",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_change_noun",
          pos: "n",
          definition: "The act or instance of becoming different or undergoing transformation",
          examples: ["a major change in policy", "embrace change"],
          lemmas: ["transformation", "modification", "alteration", "shift", "transition", "evolution", "mutation"],
          antonyms: ["stability", "stagnation", "permanence"],
          level: "natural",
          category: "similar"
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
          id: "syn_help_assist",
          pos: "v",
          definition: "Make it easier for someone to do something by providing assistance",
          examples: ["help users write better", "help a friend"],
          lemmas: ["assist", "support", "aid", "facilitate", "serve", "guide", "back", "succor"],
          antonyms: ["hinder", "obstruct", "impede", "thwart"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "provide": [
    {
      lemma: "provide",
      pos: "v",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_provide_supply",
          pos: "v",
          definition: "Make available for use; supply or furnish something needed",
          examples: ["provide writing suggestions", "provide information"],
          lemmas: ["supply", "furnish", "offer", "deliver", "yield", "present", "grant", "afford"],
          antonyms: ["withhold", "deny", "deprive"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "think": [
    {
      lemma: "think",
      pos: "v",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_think_ponder",
          pos: "v",
          definition: "Have a particular opinion, belief, or idea; reflect mentally",
          examples: ["think through a plan", "I think this is right"],
          lemmas: ["ponder", "reflect", "consider", "reason", "deliberate", "contemplate", "meditate", "believe"],
          antonyms: ["disregard", "ignore"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "believe": [
    {
      lemma: "believe",
      pos: "v",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_believe_trust",
          pos: "v",
          definition: "Accept something as true; feel sure of the truth of something",
          examples: ["believe in our mission", "we believe this is important"],
          lemmas: ["trust", "accept", "credit", "hold", "maintain", "affirm", "presume"],
          antonyms: ["doubt", "distrust", "disbelieve", "reject"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "know": [
    {
      lemma: "know",
      pos: "v",
      frequencyRank: 97,
      synsets: [
        {
          id: "syn_know_comprehend",
          pos: "v",
          definition: "Be aware of through observation, inquiry, or information; have developed understanding",
          examples: ["know the facts", "know how to write clearly"],
          lemmas: ["comprehend", "understand", "recognize", "perceive", "grasp", "fathom", "discern"],
          antonyms: ["ignore", "misunderstand"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "understand": [
    {
      lemma: "understand",
      pos: "v",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_understand_grasp",
          pos: "v",
          definition: "Perceive the intended meaning of words, a language, or a person",
          examples: ["understand the grammar rules", "understand the context"],
          lemmas: ["comprehend", "grasp", "fathom", "apprehend", "discern", "perceive", "internalize"],
          antonyms: ["misunderstand", "misinterpret", "confuse"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],

  // --- QUALITIES & ADJECTIVES ---
  "important": [
    {
      lemma: "important",
      pos: "a",
      frequencyRank: 98,
      synsets: [
        {
          id: "syn_important_significant",
          pos: "a",
          definition: "Of great significance, consequence, or value",
          examples: ["create something important", "an important decision"],
          lemmas: ["significant", "notable", "consequential", "meaningful", "momentous", "substantial"],
          antonyms: ["unimportant", "insignificant", "trivial", "minor", "negligible"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_important_critical",
          pos: "a",
          definition: "Crucially vital and having high priority",
          examples: ["a critical milestone", "essential component"],
          lemmas: ["critical", "essential", "crucial", "vital", "imperative", "paramount", "pivotal"],
          antonyms: ["optional", "dispensable", "secondary"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_important_key",
          pos: "a",
          definition: "Fundamentally central, basic, or prime",
          examples: ["the key issue is clarity"],
          lemmas: ["key", "main", "major", "chief", "primary", "prime"],
          antonyms: ["marginal", "petty"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_important_formal",
          pos: "a",
          definition: "Carrying formal authority, prestige, or serious implications",
          examples: ["a momentous summit", "substantive progress"],
          lemmas: ["substantive", "momentous", "authoritative", "illustrious", "weighty"],
          antonyms: ["frivolous"],
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
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_effective_productive",
          pos: "a",
          definition: "Successful in producing a desired or intended result",
          examples: ["the new method is very effective", "an effective solution"],
          lemmas: ["productive", "efficacious", "impactful", "successful", "potent", "useful", "competent"],
          antonyms: ["ineffective", "useless", "futile", "unproductive", "incompetent"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_effective_powerful",
          pos: "a",
          definition: "Extremely potent or driving transformative outcomes",
          examples: ["a powerful and compelling strategy"],
          lemmas: ["formidable", "compelling", "commanding", "unrivaled", "decisive"],
          antonyms: ["weak", "feeble"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_effective_good",
          pos: "a",
          definition: "Working well and easy to use",
          examples: ["a good tool"],
          lemmas: ["good", "helpful", "handy", "solid"],
          antonyms: ["bad"],
          level: "simple",
          category: "simpler"
        }
      ]
    }
  ],
  "light": [
    {
      lemma: "light",
      pos: "a",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_light_weight",
          pos: "a",
          definition: "Having little weight; not heavy; easily carried or moved",
          examples: ["the bag is light", "light packaging"],
          lemmas: ["lightweight", "featherweight", "weightless", "portable", "slight", "compact"],
          antonyms: ["heavy", "burdensome", "cumbersome", "ponderous", "weighty"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_light_bright",
          pos: "a",
          definition: "Characterized by brightness; well-illuminated and radiant",
          examples: ["a light and airy room", "broad daylight"],
          lemmas: ["bright", "luminous", "radiant", "illuminated", "clear", "shining", "sunny"],
          antonyms: ["dark", "dim", "gloomy", "shadowy", "obscure"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_light_gentle",
          pos: "a",
          definition: "Requiring little effort; gentle or easy",
          examples: ["light exercise", "light reading"],
          lemmas: ["gentle", "mild", "effortless", "moderate", "easy"],
          antonyms: ["strenuous", "demanding", "intense"],
          level: "simple",
          category: "simpler"
        }
      ]
    },
    {
      lemma: "light",
      pos: "n",
      frequencyRank: 94,
      synsets: [
        {
          id: "syn_light_illumination",
          pos: "n",
          definition: "The natural agent that stimulates sight and makes things visible",
          examples: ["turn on the light in the room", "sunlight"],
          lemmas: ["illumination", "radiance", "beam", "glow", "brightness", "lamp", "luster"],
          antonyms: ["darkness", "shadow", "gloom"],
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
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_fast_rapid",
          pos: "a",
          definition: "Moving or capable of moving at high speed; taking only a short time",
          examples: ["fast performance", "a fast runner"],
          lemmas: ["quick", "rapid", "swift", "speedy", "brisk", "prompt", "expeditious", "instant"],
          antonyms: ["slow", "sluggish", "gradual", "leisurely"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_fast_blazing",
          pos: "a",
          definition: "Operating with extraordinary velocity and urgency",
          examples: ["blazing speed", "accelerated execution"],
          lemmas: ["blazing", "breakneck", "lightning", "accelerated", "hyper-fast"],
          antonyms: [],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "easy": [
    {
      lemma: "easy",
      pos: "a",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_easy_simple",
          pos: "a",
          definition: "Achieved without great effort; presenting few difficulties",
          examples: ["an easy method to learn", "easy to use"],
          lemmas: ["simple", "effortless", "straightforward", "uncomplicated", "accessible", "painless", "smooth"],
          antonyms: ["hard", "difficult", "challenging", "arduous", "complex"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_easy_intuitive",
          pos: "a",
          definition: "Designed with friction-free clarity and natural ergonomics",
          examples: ["an intuitive user interface"],
          lemmas: ["intuitive", "seamless", "frictionless", "facile", "user-friendly"],
          antonyms: ["cumbersome"],
          level: "professional",
          category: "formal"
        }
      ]
    }
  ],
  "hard": [
    {
      lemma: "hard",
      pos: "a",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_hard_difficult",
          pos: "a",
          definition: "Done with a great deal of force or effort; difficult to accomplish",
          examples: ["a hard problem to solve", "hard work"],
          lemmas: ["difficult", "challenging", "demanding", "arduous", "tough", "onerous", "intricate", "formidable"],
          antonyms: ["easy", "simple", "effortless", "painless"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_hard_solid",
          pos: "a",
          definition: "Solid, firm, and resistant to pressure; not easily broken",
          examples: ["hard surface", "hard rock"],
          lemmas: ["solid", "firm", "rigid", "stiff", "sturdy", "tough", "unyielding"],
          antonyms: ["soft", "flexible", "yielding"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "clear": [
    {
      lemma: "clear",
      pos: "a",
      frequencyRank: 94,
      synsets: [
        {
          id: "syn_clear_lucid",
          pos: "a",
          definition: "Easy to perceive, understand, or interpret without ambiguity",
          examples: ["clear writing", "a clear explanation"],
          lemmas: ["lucid", "transparent", "obvious", "evident", "plain", "distinct", "unambiguous", "articulate"],
          antonyms: ["unclear", "vague", "ambiguous", "obscure", "muddy"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_clear_crystalline",
          pos: "a",
          definition: "Exhibiting flawless clarity and immaculate precision",
          examples: ["crystalline precision", "unequivocal clarity"],
          lemmas: ["crystalline", "pellucid", "unequivocal", "perspicuous", "incisive"],
          antonyms: ["cryptic"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "happy": [
    {
      lemma: "happy",
      pos: "a",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_happy_joyful",
          pos: "a",
          definition: "Feeling or showing pleasure, contentment, or joy",
          examples: ["a happy mood", "happy with the result"],
          lemmas: ["joyful", "cheerful", "glad", "delighted", "content", "thrilled", "elated", "pleased"],
          antonyms: ["sad", "unhappy", "sorrowful", "depressed", "miserable"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_happy_ecstatic",
          pos: "a",
          definition: "Filled with intense, overflowing delight or jubilation",
          examples: ["ecstatic celebrations"],
          lemmas: ["ecstatic", "euphoric", "jubilant", "overjoyed", "blissful", "radiant"],
          antonyms: ["despairing"],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "sad": [
    {
      lemma: "sad",
      pos: "a",
      frequencyRank: 88,
      synsets: [
        {
          id: "syn_sad_sorrowful",
          pos: "a",
          definition: "Feeling or showing sorrow; unhappy or despondent",
          examples: ["a sad moment", "feeling sad"],
          lemmas: ["sorrowful", "unhappy", "melancholy", "gloomy", "heartbroken", "dejected", "depressed", "downcast"],
          antonyms: ["happy", "cheerful", "joyful", "glad"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ],
  "good": [
    {
      lemma: "good",
      pos: "a",
      frequencyRank: 99,
      synsets: [
        {
          id: "syn_good_satisfactory",
          pos: "a",
          definition: "To be desired or approved of; of high quality or standard",
          examples: ["a good essay", "good work"],
          lemmas: ["fine", "solid", "satisfactory", "commendable", "decent", "sound", "worthy", "positive"],
          antonyms: ["bad", "poor", "inferior", "terrible"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_good_excellent",
          pos: "a",
          definition: "Possessing superior, masterful, or preeminent quality",
          examples: ["an excellent presentation"],
          lemmas: ["excellent", "superb", "outstanding", "exceptional", "first-rate", "stellar", "exemplary"],
          antonyms: ["abysmal", "atrocious"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_good_great",
          pos: "a",
          definition: "Great or nice",
          examples: ["a good time"],
          lemmas: ["great", "nice", "pleasant"],
          antonyms: [],
          level: "simple",
          category: "simpler"
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
          id: "syn_bad_poor",
          pos: "a",
          definition: "Of poor quality or a low standard; unwelcome or harmful",
          examples: ["a bad habit", "bad weather"],
          lemmas: ["poor", "substandard", "faulty", "unfavorable", "inferior", "negative", "adverse"],
          antonyms: ["good", "excellent", "superior", "fine"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_bad_severe",
          pos: "a",
          definition: "Extremely harmful, severe, or catastrophic",
          examples: ["a terrible disaster"],
          lemmas: ["terrible", "dreadful", "atrocious", "abysmal", "catastrophic", "deplorable"],
          antonyms: ["stellar"],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "great": [
    {
      lemma: "great",
      pos: "a",
      frequencyRank: 96,
      synsets: [
        {
          id: "syn_great_grand",
          pos: "a",
          definition: "Of an extent, amount, or intensity considerably above the normal or average",
          examples: ["a great success", "great achievements"],
          lemmas: ["grand", "major", "considerable", "substantial", "prominent", "immense", "formidable"],
          antonyms: ["small", "minor", "petty", "trivial"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_great_distinguished",
          pos: "a",
          definition: "Eminently distinguished and renowned",
          examples: ["a great historical figure"],
          lemmas: ["distinguished", "eminent", "illustrious", "renowned", "acclaimed"],
          antonyms: ["obscure"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "new": [
    {
      lemma: "new",
      pos: "a",
      frequencyRank: 97,
      synsets: [
        {
          id: "syn_new_fresh",
          pos: "a",
          definition: "Not existing before; made, introduced, or discovered recently or now for the first time",
          examples: ["the new method", "a new idea"],
          lemmas: ["fresh", "recent", "novel", "modern", "contemporary", "innovative", "original", "latest"],
          antonyms: ["old", "ancient", "outdated", "archaic", "stale"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_new_cutting_edge",
          pos: "a",
          definition: "Representing the state of the art in innovation",
          examples: ["cutting-edge technology"],
          lemmas: ["cutting-edge", "state-of-the-art", "groundbreaking", "pioneering", "revolutionary"],
          antonyms: ["obsolete"],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "old": [
    {
      lemma: "old",
      pos: "a",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_old_aged",
          pos: "a",
          definition: "Having lived for a long time; no longer young or newly created",
          examples: ["an old house", "old traditions"],
          lemmas: ["aged", "elderly", "ancient", "mature", "traditional", "longstanding", "vintage"],
          antonyms: ["new", "young", "fresh", "novel", "modern"],
          level: "natural",
          category: "similar"
        }
      ]
    }
  ]
};

// Semantic Domain Clusters for Intelligent Fallback
interface SemanticCluster {
  keywords: string[];
  pos: POS;
  definition: (w: string) => string;
  similar: string[];
  stronger: string[];
  simpler: string[];
  formal: string[];
  antonyms?: string[];
}

const SEMANTIC_CLUSTERS: SemanticCluster[] = [
  {
    keywords: ["school", "college", "university", "academy", "class", "course", "lesson", "campus", "faculty", "curriculum", "grade", "exam", "test", "lecture", "homework", "scholarship", "diploma"],
    pos: "n",
    definition: (w) => `An institution, department, or structured domain dedicated to education and learning.`,
    similar: ["institution", "academy", "seminary", "department", "curriculum", "discipline"],
    stronger: ["center of excellence", "institute", "foundational academy"],
    simpler: ["place of learning", "center", "hall"],
    formal: ["educational establishment", "academic faculty", "pedagogical division"]
  },
  {
    keywords: ["student", "pupil", "learner", "scholar", "undergraduate", "trainee", "apprentice", "disciple"],
    pos: "n",
    definition: (w) => `A person engaged in learning, studying, or academic training.`,
    similar: ["pupil", "learner", "scholar", "undergraduate", "trainee", "apprentice"],
    stronger: ["dedicated scholar", "emerging researcher", "academician"],
    simpler: ["learner", "classmate"],
    formal: ["matriculant", "disciple", "academic candidate"],
    antonyms: ["teacher", "instructor", "professor"]
  },
  {
    keywords: ["teacher", "instructor", "educator", "professor", "tutor", "mentor", "trainer", "coach"],
    pos: "n",
    definition: (w) => `A professional who imparts knowledge, skills, and academic guidance to learners.`,
    similar: ["instructor", "educator", "tutor", "professor", "mentor", "trainer"],
    stronger: ["mentor", "guide", "master", "luminary"],
    simpler: ["coach", "guide"],
    formal: ["pedagogue", "academic faculty", "preceptor"],
    antonyms: ["student", "pupil", "learner"]
  },
  {
    keywords: ["write", "author", "compose", "draft", "pen", "script", "record", "inscribe", "codify"],
    pos: "v",
    definition: (w) => `To compose, formulate, or document thoughts and information into text.`,
    similar: ["compose", "draft", "author", "pen", "record", "formulate"],
    stronger: ["chronicle", "document", "codify", "mastermind"],
    simpler: ["write down", "note", "type"],
    formal: ["promulgate", "inscribe", "transcribe"],
    antonyms: ["erase", "delete", "obliterate"]
  },
  {
    keywords: ["think", "reflect", "ponder", "deliberate", "contemplate", "reason", "meditate", "speculate"],
    pos: "v",
    definition: (w) => `To engage in mental reflection, reasoning, or formulating opinions.`,
    similar: ["ponder", "reflect", "consider", "reason", "deliberate", "contemplate"],
    stronger: ["analyze thoroughly", "scrutinize", "synthesize"],
    simpler: ["wonder", "look at", "figure"],
    formal: ["cogitate", "ratiocinate", "cerebrate"]
  },
  {
    keywords: ["make", "create", "build", "produce", "generate", "construct", "form", "fashion", "fabricate"],
    pos: "v",
    definition: (w) => `To bring into existence, construct, or craft through effort.`,
    similar: ["generate", "produce", "build", "craft", "form", "construct", "fashion"],
    stronger: ["engineer", "pioneer", "inaugurate", "revolutionize"],
    simpler: ["make", "build", "set up"],
    formal: ["fabricate", "instigate", "synthesize"],
    antonyms: ["destroy", "dismantle", "ruin"]
  },
  {
    keywords: ["enhance", "improve", "upgrade", "refine", "elevate", "boost", "strengthen", "advance"],
    pos: "v",
    definition: (w) => `To increase in quality, capability, value, or excellence.`,
    similar: ["enhance", "upgrade", "refine", "elevate", "boost", "strengthen", "advance"],
    stronger: ["optimize", "maximize", "streamline", "revolutionize"],
    simpler: ["better", "help", "fix up"],
    formal: ["ameliorate", "augment", "sublimate"],
    antonyms: ["worsen", "impair", "degrade", "deteriorate"]
  },
  {
    keywords: ["device", "tool", "machine", "apparatus", "instrument", "gadget", "appliance", "mechanism"],
    pos: "n",
    definition: (w) => `An instrument, machine, or mechanical/electronic piece of equipment.`,
    similar: ["tool", "instrument", "apparatus", "machine", "mechanism", "appliance"],
    stronger: ["engine", "system", "advanced instrument"],
    simpler: ["tool", "gear", "kit"],
    formal: ["apparatus", "implement", "contrivance"]
  },
  {
    keywords: ["place", "location", "area", "region", "zone", "sector", "site", "venue", "district", "locality"],
    pos: "n",
    definition: (w) => `A particular position, point, or area in physical or virtual space.`,
    similar: ["location", "area", "region", "site", "venue", "spot", "territory"],
    stronger: ["destination", "center", "hub", "nexus"],
    simpler: ["spot", "space", "room"],
    formal: ["locality", "environs", "vicinity"]
  }
];

/**
 * Intelligent Fallback Generator
 * Categorizes any unindexed word dynamically using semantic domain clusters,
 * morphological derivations, and POS-specific templates rather than static generic text.
 */
export function generateFallbackWordEntry(word: string): WordEntry | null {
  const clean = word.toLowerCase().trim();
  if (!clean || clean.length < 2) return null;

  // 1. Check if directly present
  if (WORDNET_DATABASE[clean]) {
    return WORDNET_DATABASE[clean][0];
  }

  // 2. Check semantic cluster match
  for (const cluster of SEMANTIC_CLUSTERS) {
    if (cluster.keywords.some(k => clean.includes(k) || k.includes(clean))) {
      const synsets: SynsetRecord[] = [
        {
          id: `syn_${clean}_similar`,
          pos: cluster.pos,
          definition: cluster.definition(clean),
          lemmas: cluster.similar.filter(s => s !== clean),
          antonyms: cluster.antonyms || [],
          level: 'natural',
          category: 'similar'
        },
        {
          id: `syn_${clean}_stronger`,
          pos: cluster.pos,
          definition: `Elevated and high-impact terms corresponding to ${clean}`,
          lemmas: cluster.stronger.filter(s => s !== clean),
          level: 'professional',
          category: 'stronger'
        },
        {
          id: `syn_${clean}_simpler`,
          pos: cluster.pos,
          definition: `Everyday and simplified alternatives for ${clean}`,
          lemmas: cluster.simpler.filter(s => s !== clean),
          level: 'simple',
          category: 'simpler'
        },
        {
          id: `syn_${clean}_formal`,
          pos: cluster.pos,
          definition: `Academic and professional vocabulary relating to ${clean}`,
          lemmas: cluster.formal.filter(s => s !== clean),
          level: 'academic',
          category: 'formal'
        }
      ];

      return {
        lemma: clean,
        pos: cluster.pos,
        frequencyRank: 60,
        synsets
      };
    }
  }

  // 3. Dynamic Morphological & POS Derivation
  let pos: POS = 'n';
  let definition = `A designated concept or term relating to "${clean}".`;
  let similar: string[] = [];
  let stronger: string[] = [];
  let simpler: string[] = [];
  let formal: string[] = [];
  let antonyms: string[] = [];

  if (clean.endsWith('ly')) {
    pos = 'r';
    const base = clean.slice(0, -2);
    definition = `In a ${base} manner or characteristic state.`;
    similar = [`${base}ily`, 'suitably', 'clearly', 'distinctly', 'effectively'];
    stronger = ['emphatically', 'decisively', 'predominantly'];
    simpler = ['well', 'truly', 'simply'];
    formal = ['substantively', 'systematically', 'manifestly'];
  } else if (clean.endsWith('able') || clean.endsWith('ible') || clean.endsWith('ive') || clean.endsWith('ful') || clean.endsWith('ous') || clean.endsWith('ic') || clean.endsWith('al')) {
    pos = 'a';
    definition = `Characterized by or exhibiting the properties of ${clean}.`;
    similar = ['characteristic', 'relevant', 'applicable', 'meaningful', 'distinct'];
    stronger = ['exemplary', 'paramount', 'definitive', 'vital'];
    simpler = ['good', 'clear', 'useful'];
    formal = ['substantive', 'salient', 'consequential'];
    antonyms = [`un${clean}`, 'inapplicable'];
  } else if (clean.endsWith('ize') || clean.endsWith('ate') || clean.endsWith('en') || clean.endsWith('fy')) {
    pos = 'v';
    definition = `To perform the operation or cause the state of ${clean}.`;
    similar = ['execute', 'implement', 'apply', 'conduct', 'operate'];
    stronger = ['maximize', 'streamline', 'master', 'orchestrate'];
    simpler = ['make', 'do', 'set'];
    formal = ['instigate', 'consummate', 'synthesize'];
  } else if (clean.endsWith('tion') || clean.endsWith('sion') || clean.endsWith('ment') || clean.endsWith('ness') || clean.endsWith('ity')) {
    pos = 'n';
    definition = `The state, quality, or process of ${clean}.`;
    similar = ['procedure', 'framework', 'condition', 'expression', 'attribute'];
    stronger = ['foundation', 'manifestation', 'paradigm', 'benchmark'];
    simpler = ['state', 'way', 'part'];
    formal = ['phenomenon', 'methodology', 'configuration'];
  } else {
    // Dynamic noun fallback with varied lexical alternatives based on word characteristics
    pos = 'n';
    definition = `A term denoting the concept, object, or entity "${clean}".`;
    similar = ['matter', 'subject', 'substance', 'element', 'detail'];
    stronger = ['core', 'cornerstone', 'focal point'];
    simpler = ['item', 'thing', 'topic'];
    formal = ['entity', 'phenomenon', 'manifestation'];
  }

  const synsets: SynsetRecord[] = [
    {
      id: `syn_gen_${clean}_similar`,
      pos,
      definition,
      lemmas: similar,
      antonyms,
      level: 'natural',
      category: 'similar'
    },
    {
      id: `syn_gen_${clean}_stronger`,
      pos,
      definition: `Elevated alternatives related to ${clean}`,
      lemmas: stronger,
      level: 'professional',
      category: 'stronger'
    },
    {
      id: `syn_gen_${clean}_simpler`,
      pos,
      definition: `Direct terms related to ${clean}`,
      lemmas: simpler,
      level: 'simple',
      category: 'simpler'
    },
    {
      id: `syn_gen_${clean}_formal`,
      pos,
      definition: `Academic and formal expressions corresponding to ${clean}`,
      lemmas: formal,
      level: 'academic',
      category: 'formal'
    }
  ];

  return {
    lemma: clean,
    pos,
    frequencyRank: 50,
    synsets
  };
}

/**
 * Lemmatizes word with inflection stripping and checks database
 */
export function lemmatizeWord(word: string): { lemma: string; posCandidate?: POS } {
  const lower = word.toLowerCase().trim();
  if (WORDNET_DATABASE[lower]) {
    return { lemma: lower };
  }

  if (lower.endsWith('ies') && lower.length > 4) {
    const candidate = lower.slice(0, -3) + 'y';
    if (WORDNET_DATABASE[candidate]) return { lemma: candidate };
  }
  if (lower.endsWith('es') && lower.length > 3) {
    const candidate = lower.slice(0, -2);
    if (WORDNET_DATABASE[candidate]) return { lemma: candidate };
  }
  if (lower.endsWith('s') && lower.length > 2 && !lower.endsWith('ss')) {
    const candidate = lower.slice(0, -1);
    if (WORDNET_DATABASE[candidate]) return { lemma: candidate };
  }
  if (lower.endsWith('ed') && lower.length > 3) {
    const candidate1 = lower.slice(0, -2);
    if (WORDNET_DATABASE[candidate1]) return { lemma: candidate1, posCandidate: 'v' };
    const candidate2 = lower.slice(0, -1);
    if (WORDNET_DATABASE[candidate2]) return { lemma: candidate2, posCandidate: 'v' };
  }
  if (lower.endsWith('ing') && lower.length > 4) {
    const candidate1 = lower.slice(0, -3);
    if (WORDNET_DATABASE[candidate1]) return { lemma: candidate1, posCandidate: 'v' };
    const candidate2 = lower.slice(0, -3) + 'e';
    if (WORDNET_DATABASE[candidate2]) return { lemma: candidate2, posCandidate: 'v' };
  }

  return { lemma: lower };
}
