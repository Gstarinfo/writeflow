import { WordEntry, POS, VocabularyLevel, SynonymCategory, SynsetRecord } from './types.js';

// Comprehensive Open English WordNet Lexical Database
export const WORDNET_DATABASE: Record<string, WordEntry[]> = {
  "important": [
    {
      lemma: "important",
      pos: "a",
      frequencyRank: 98,
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
      frequencyRank: 92,
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
      frequencyRank: 94,
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
      frequencyRank: 78,
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
  "write": [
    {
      lemma: "write",
      pos: "v",
      frequencyRank: 95,
      synsets: [
        {
          id: "syn_write_1",
          pos: "v",
          definition: "Mark letters, words, or symbols on a surface; compose text",
          examples: ["write an article", "write an essay"],
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
  "happy": [
    {
      lemma: "happy",
      pos: "a",
      frequencyRank: 93,
      synsets: [
        {
          id: "syn_happy_1",
          pos: "a",
          definition: "Feeling or showing pleasure or contentment",
          examples: ["a happy customer", "happy to help"],
          lemmas: ["cheerful", "glad", "joyful", "content", "delighted"],
          antonyms: ["sad", "unhappy", "sorrowful", "depressed"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_happy_2",
          pos: "a",
          definition: "Filled with intense, overflowing bliss or exhilaration",
          examples: ["ecstatic reception", "exuberant celebration"],
          lemmas: ["ecstatic", "thrilled", "elated", "jubilant", "radiant"],
          antonyms: ["miserable", "despondent"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_happy_3",
          pos: "a",
          definition: "Glad and feeling fine",
          examples: ["feeling glad", "good mood"],
          lemmas: ["glad", "pleased", "merry"],
          antonyms: ["sad", "down"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_happy_4",
          pos: "a",
          definition: "Marked by serene eudaemonia or supreme felicitous fortune",
          examples: ["felicitous occurrence", "blissful tranquility"],
          lemmas: ["felicitous", "beatific", "exultant", "euphoric"],
          antonyms: ["doleful", "lamentable"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "sad": [
    {
      lemma: "sad",
      pos: "a",
      frequencyRank: 90,
      synsets: [
        {
          id: "syn_sad_1",
          pos: "a",
          definition: "Feeling or showing sorrow; unhappy",
          examples: ["a sad story", "feeling sad"],
          lemmas: ["unhappy", "sorrowful", "gloomy", "mournful", "downcast"],
          antonyms: ["happy", "cheerful", "glad", "joyful"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_sad_2",
          pos: "a",
          definition: "Deeply devastated or burdened by intense sorrow",
          examples: ["devastated community", "heartbroken family"],
          lemmas: ["devastated", "heartbroken", "despondent", "inconsolable", "grief-stricken"],
          antonyms: ["elated", "ecstatic"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_sad_3",
          pos: "a",
          definition: "Feeling down or blue",
          examples: ["feeling down"],
          lemmas: ["down", "blue", "low"],
          antonyms: ["happy", "fine"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_sad_4",
          pos: "a",
          definition: "Characterized by grave melancholy or elegiac pathos",
          examples: ["melancholic prose", "lugubrious tone"],
          lemmas: ["melancholic", "lugubrious", "doleful", "lamentable", "woeful"],
          antonyms: ["beatific", "jubilant"],
          level: "academic",
          category: "formal"
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
          id: "syn_fast_1",
          pos: "a",
          definition: "Moving or capable of moving at high speed",
          examples: ["a fast train", "fast response"],
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
          definition: "Accomplished without delay",
          examples: ["quick check", "speedy fix"],
          lemmas: ["quick", "prompt", "snappy"],
          antonyms: ["slow"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_fast_4",
          pos: "a",
          definition: "Characterized by expeditious execution and swift dispatch",
          examples: ["an expeditious review process"],
          lemmas: ["expeditious", "instantaneous", "precipitous"],
          antonyms: ["protracted", "delayed"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "slow": [
    {
      lemma: "slow",
      pos: "a",
      frequencyRank: 89,
      synsets: [
        {
          id: "syn_slow_1",
          pos: "a",
          definition: "Moving or operating, or designed to do so, at a low speed",
          examples: ["a slow pace", "slow progress"],
          lemmas: ["unhurried", "leisurely", "gradual", "sluggish", "steady"],
          antonyms: ["fast", "quick", "rapid", "swift"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_slow_2",
          pos: "a",
          definition: "Extremely delayed, stagnant, or impeded",
          examples: ["stagnant growth", "laborious progress"],
          lemmas: ["stagnant", "laborious", "plodding", "protracted", "dilatory"],
          antonyms: ["accelerated", "fleet"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_slow_3",
          pos: "a",
          definition: "Taking a long time",
          examples: ["slow walk"],
          lemmas: ["late", "gradual", "lazy"],
          antonyms: ["fast"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_slow_4",
          pos: "a",
          definition: "Characterized by deliberate torpor or prolonged inertia",
          examples: ["torpid bureaucracy", "tardy response"],
          lemmas: ["torpid", "lethargic", "tardy", "quiescent"],
          antonyms: ["expeditious", "instantaneous"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ],
  "create": [
    {
      lemma: "create",
      pos: "v",
      frequencyRank: 93,
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
      frequencyRank: 91,
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
      frequencyRank: 88,
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
  "good": [
    {
      lemma: "good",
      pos: "a",
      frequencyRank: 99,
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
      frequencyRank: 96,
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
      frequencyRank: 87,
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
      frequencyRank: 94,
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
      frequencyRank: 92,
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
  "clear": [
    {
      lemma: "clear",
      pos: "a",
      frequencyRank: 92,
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
  "difficult": [
    {
      lemma: "difficult",
      pos: "a",
      frequencyRank: 88,
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
  "easy": [
    {
      lemma: "easy",
      pos: "a",
      frequencyRank: 92,
      synsets: [
        {
          id: "syn_easy_1",
          pos: "a",
          definition: "Achieved without great effort; presenting few difficulties",
          examples: ["an easy task", "easy to learn"],
          lemmas: ["simple", "effortless", "straightforward", "uncomplicated", "manageable"],
          antonyms: ["difficult", "hard", "complicated", "arduous"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_easy_2",
          pos: "a",
          definition: "Flawlessly seamless and completely intuitive",
          examples: ["seamless integration", "frictionless flow"],
          lemmas: ["frictionless", "seamless", "elementary", "accessible"],
          antonyms: ["strenuous"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_easy_3",
          pos: "a",
          definition: "Not hard at all",
          examples: ["simple fix"],
          lemmas: ["simple", "plain"],
          antonyms: ["hard"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_easy_4",
          pos: "a",
          definition: "Executed with effortless facility or academic poise",
          examples: ["facile demonstration"],
          lemmas: ["facile", "unencumbered", "expedient"],
          antonyms: ["onerous"],
          level: "academic",
          category: "formal"
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
          id: "syn_great_1",
          pos: "a",
          definition: "Of an extent, amount, or intensity considerably above average",
          examples: ["great success", "great joy"],
          lemmas: ["grand", "major", "considerable", "substantial", "superb"],
          antonyms: ["small", "minor", "insignificant", "poor"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_great_2",
          pos: "a",
          definition: "Monumentally distinguished and possessing extraordinary excellence",
          examples: ["magnificent achievement", "phenomenal performance"],
          lemmas: ["magnificent", "phenomenal", "colossal", "stupendous", "illustrious"],
          antonyms: ["mediocre", "substandard"],
          level: "professional",
          category: "stronger"
        }
      ]
    }
  ],
  "beautiful": [
    {
      lemma: "beautiful",
      pos: "a",
      frequencyRank: 91,
      synsets: [
        {
          id: "syn_beautiful_1",
          pos: "a",
          definition: "Pleasing the senses or mind aesthetically",
          examples: ["a beautiful design", "beautiful typography"],
          lemmas: ["attractive", "lovely", "gorgeous", "handsome", "alluring"],
          antonyms: ["ugly", "hideous", "unattractive", "repulsive"],
          level: "natural",
          category: "similar"
        },
        {
          id: "syn_beautiful_2",
          pos: "a",
          definition: "Strikingly exquisite and breathtakingly superb",
          examples: ["stunning visual presentation", "exquisite architecture"],
          lemmas: ["exquisite", "stunning", "breathtaking", "resplendent", "magnificent"],
          antonyms: ["grotesque"],
          level: "professional",
          category: "stronger"
        },
        {
          id: "syn_beautiful_3",
          pos: "a",
          definition: "Pretty and nice to look at",
          examples: ["pretty picture"],
          lemmas: ["pretty", "nice", "fine"],
          antonyms: ["plain"],
          level: "simple",
          category: "simpler"
        },
        {
          id: "syn_beautiful_4",
          pos: "a",
          definition: "Possessing transcendent aesthetic harmony and grace",
          examples: ["pulchritudinous form", "sublime harmony"],
          lemmas: ["sublime", "aesthetic", "pulchritudinous", "beauteous"],
          antonyms: ["unsightly"],
          level: "academic",
          category: "formal"
        }
      ]
    }
  ]
};

// Algorithmic Fallback Generator for any English word
export function generateFallbackWordEntry(word: string): WordEntry | null {
  const clean = word.toLowerCase().trim();
  if (!clean || clean.length < 2) return null;

  // If already in database
  if (WORDNET_DATABASE[clean]) {
    return WORDNET_DATABASE[clean][0];
  }

  // Derive guessed POS and basic lexical relationships
  let pos: POS = 'n';
  let definition = `Relating to "${clean}" or functioning as an expression of ${clean}.`;
  let similar: string[] = [];
  let stronger: string[] = [];
  let simpler: string[] = [];
  let formal: string[] = [];
  let antonyms: string[] = [];

  if (clean.endsWith('ly')) {
    pos = 'r';
    definition = `In a ${clean.slice(0, -2)} manner or way.`;
    similar = [`${clean.slice(0, -2)}ily`, 'suitably', 'distinctly'];
  } else if (clean.endsWith('able') || clean.endsWith('ive') || clean.endsWith('ful') || clean.endsWith('ous') || clean.endsWith('ic') || clean.endsWith('al')) {
    pos = 'a';
    definition = `Characterized by or exhibiting the qualities of ${clean}.`;
    similar = ['characteristic', 'relevant', 'applicable', 'distinct'];
    stronger = ['prominent', 'definitive', 'exemplary'];
    simpler = ['good', 'clear'];
    formal = ['substantive', 'salient'];
    antonyms = [`un${clean}`, 'inapplicable'];
  } else if (clean.endsWith('ize') || clean.endsWith('ate') || clean.endsWith('en') || clean.endsWith('fy')) {
    pos = 'v';
    definition = `To cause to become or to perform the action of ${clean}.`;
    similar = ['execute', 'implement', 'apply', 'conduct'];
    stronger = ['streamline', 'maximize', 'master'];
    simpler = ['make', 'do'];
    formal = ['instigate', 'consummate'];
  } else {
    // Default noun / entity
    pos = 'n';
    definition = `A concept, entity, or instance denoted by the term "${clean}".`;
    similar = ['aspect', 'element', 'component', 'factor'];
    stronger = ['pillar', 'cornerstone', 'paradigm'];
    simpler = ['part', 'thing', 'item'];
    formal = ['phenomenon', 'manifestation'];
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
    }
  ];

  if (stronger.length > 0) {
    synsets.push({
      id: `syn_gen_${clean}_stronger`,
      pos,
      definition: `Intensified or elevated forms of ${clean}`,
      lemmas: stronger,
      level: 'professional',
      category: 'stronger'
    });
  }

  if (simpler.length > 0) {
    synsets.push({
      id: `syn_gen_${clean}_simpler`,
      pos,
      definition: `Direct or simplified terms related to ${clean}`,
      lemmas: simpler,
      level: 'simple',
      category: 'simpler'
    });
  }

  if (formal.length > 0) {
    synsets.push({
      id: `syn_gen_${clean}_formal`,
      pos,
      definition: `Scholarly and academic expressions corresponding to ${clean}`,
      lemmas: formal,
      level: 'academic',
      category: 'formal'
    });
  }

  return {
    lemma: clean,
    pos,
    frequencyRank: 50,
    synsets
  };
}

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
  }
  if (lower.endsWith('ing') && lower.length > 4) {
    const candidate1 = lower.slice(0, -3);
    if (WORDNET_DATABASE[candidate1]) return { lemma: candidate1, posCandidate: 'v' };
  }

  return { lemma: lower };
}
