/**
 * WriteFlow Comprehensive Local Spelling Engine
 * 100% Offline English spellchecker with typo dictionary, morphological expander,
 * and fast Damerau-Levenshtein candidate generator.
 */

// Extended typo & phonetic corrections map
export const COMMON_TYPOS: Record<string, string> = {
  // Frequent typos
  "teh": "the",
  "recieve": "receive",
  "recieved": "received",
  "recieving": "receiving",
  "seperate": "separate",
  "seperated": "separated",
  "definately": "definitely",
  "occured": "occurred",
  "occuring": "occurring",
  "untill": "until",
  "truely": "truly",
  "accomodate": "accommodate",
  "beleive": "believe",
  "beleived": "believed",
  "goverment": "government",
  "tommorow": "tomorrow",
  "tommorrow": "tomorrow",
  "writting": "writing",
  "writeing": "writing",
  "runing": "running",
  "swiming": "swimming",
  "begining": "beginning",
  "droped": "dropped",
  "stoped": "stopped",
  "planed": "planned",
  "neccessary": "necessary",
  "necesary": "necessary",
  "succesful": "successful",
  "acheive": "achieve",
  "calender": "calendar",
  "embarass": "embarrass",
  "enviroment": "environment",
  "foriegn": "foreign",
  "freind": "friend",
  "gaurentee": "guarantee",
  "garantee": "guarantee",
  "grammer": "grammar",
  "happend": "happened",
  "knowlege": "knowledge",
  "mispell": "misspell",
  "noticable": "noticeable",
  "peice": "piece",
  "possession": "possession",
  "privilege": "privilege",
  "privelege": "privilege",
  "probaly": "probably",
  "reccomend": "recommend",
  "recommand": "recommend",
  "relevent": "relevant",
  "restaraunt": "restaurant",
  "resturant": "restaurant",
  "rythm": "rhythm",
  "schedule": "schedule",
  "supercede": "supersede",
  "tomatos": "tomatoes",
  "tatoo": "tattoo",
  "tendancy": "tendency",
  "threshhold": "threshold",
  "unforseen": "unforeseen",
  "wierd": "weird",
  "exampel": "example",
  "computr": "computer",
  "imporant": "important",
  "problm": "problem",
  "soluton": "solution",
  "sugestion": "suggestion",
  "sugest": "suggest",
  "corect": "correct",
  "assitant": "assistant",
  "alot": "a lot",
  "alright": "all right",
  "accross": "across",
  "appologize": "apologize",
  "arguement": "argument",
  "basicaly": "basically",
  "catagory": "category",
  "cemetary": "cemetery",
  "commitee": "committee",
  "completly": "completely",
  "curiousity": "curiosity",
  "dilema": "dilemma",
  "dissapear": "disappear",
  "dissappoint": "disappoint",
  "facinating": "fascinating",
  "fimilar": "familiar",
  "finaly": "finally",
  "foward": "forward",
  "furthur": "further",
  "generaly": "generally",
  "greatful": "grateful",
  "guidence": "guidance",
  "harrass": "harass",
  "heigth": "height",
  "humerous": "humorous",
  "ignorence": "ignorance",
  "immediatly": "immediately",
  "incidently": "incidentally",
  "independant": "independent",
  "inteligence": "intelligence",
  "interupt": "interrupt",
  "judgement": "judgment",
  "libary": "library",
  "lisence": "license",
  "maintainance": "maintenance",
  "mischevious": "mischievous",
  "naturaly": "naturally",
  "neighbor": "neighbor",
  "nineth": "ninth",
  "occassion": "occasion",
  "occurence": "occurrence",
  "oppurtunity": "opportunity",
  "outragous": "outrageous",
  "paralell": "parallel",
  "persistance": "persistence",
  "personel": "personnel",
  "posession": "possession",
  "prefered": "preferred",
  "presense": "presence",
  "pronounciation": "pronunciation",
  "publically": "publicly",
  "questionaire": "questionnaire",
  "realy": "really",
  "refered": "referred",
  "religous": "religious",
  "resistence": "resistance",
  "responsability": "responsibility",
  "seige": "siege",
  "sieze": "seize",
  "surprize": "surprise",
  "twelth": "twelfth",
  "tyrany": "tyranny",
  "unfortunatly": "unfortunately",
  "vaccuum": "vacuum",
  "vehical": "vehicle",
  "visable": "visible",
  "wether": "weather",
  "welfare": "welfare",
  "whereever": "wherever",
  "yeild": "yield",
  "yelllow": "yellow",
  "helo": "hello",
  "wrold": "world",
  "wokr": "work",
  "pleas": "please",
  "thnks": "thanks",
  "thnx": "thanks",
  "bcos": "because",
  "becuase": "because",
  "becasue": "because",
  "beacuse": "because",
  "availble": "available",
  "applicaton": "application",
  "infomation": "information",
  "documentaton": "documentation"
};

// Contractions missing apostrophes
export const CONTRACTION_SPELLING_MAP: Record<string, string> = {
  "dont": "don't",
  "cant": "can't",
  "wont": "won't",
  "isnt": "isn't",
  "arent": "aren't",
  "didnt": "didn't",
  "couldnt": "couldn't",
  "shouldnt": "shouldn't",
  "wouldnt": "wouldn't",
  "hasnt": "hasn't",
  "havent": "haven't",
  "wasnt": "wasn't",
  "werent": "weren't",
  "thats": "that's",
  "whats": "what's",
  "theres": "there's",
  "theyre": "they're",
  "youre": "you're",
  "weve": "we've",
  "theyve": "they've",
  "youve": "you've",
  "ive": "I've",
  "im": "I'm",
  "lets": "let's"
};

// Core English dictionary vocabulary set
const ENGLISH_DICTIONARY_SET = new Set<string>([
  // Pronouns, articles, prepositions, conjunctions
  "a", "an", "the", "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
  "my", "your", "his", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs",
  "myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves",
  "this", "that", "these", "those", "which", "who", "whom", "whose", "what", "where", "when", "why", "how",
  "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only",
  "own", "same", "so", "than", "too", "very", "can", "will", "just", "should", "now",
  "in", "on", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after",
  "above", "below", "to", "from", "up", "down", "out", "off", "over", "under", "again", "further", "then", "once",
  "here", "there", "and", "but", "if", "or", "because", "as", "until", "while", "of",

  // Verbs & common auxiliaries
  "be", "is", "am", "are", "was", "were", "been", "being", "have", "has", "had", "having",
  "do", "does", "did", "doing", "done", "say", "says", "said", "saying", "go", "goes", "went", "gone", "going",
  "get", "gets", "got", "getting", "gotten", "make", "makes", "made", "making", "know", "knows", "knew", "known", "knowing",
  "think", "thinks", "thought", "thinking", "take", "takes", "took", "taken", "taking", "see", "sees", "saw", "seen", "seeing",
  "come", "comes", "came", "coming", "want", "wants", "wanted", "wanting", "look", "looks", "looked", "looking",
  "use", "uses", "used", "using", "find", "finds", "found", "finding", "give", "gives", "gave", "given", "giving",
  "tell", "tells", "told", "telling", "work", "works", "worked", "working", "call", "calls", "called", "calling",
  "try", "tries", "tried", "trying", "ask", "asks", "asked", "asking", "need", "needs", "needed", "needing",
  "feel", "feels", "felt", "feeling", "become", "becomes", "became", "becoming", "leave", "leaves", "left", "leaving",
  "put", "puts", "putting", "mean", "means", "meant", "meaning", "keep", "keeps", "kept", "keeping",
  "let", "lets", "letting", "begin", "begins", "began", "begun", "beginning", "seem", "seems", "seemed", "seeming",
  "help", "helps", "helped", "helping", "talk", "talks", "talked", "talking", "turn", "turns", "turned", "turning",
  "start", "starts", "started", "starting", "show", "shows", "showed", "shown", "showing", "hear", "hears", "heard", "hearing",
  "play", "plays", "played", "playing", "run", "runs", "ran", "running", "move", "moves", "moved", "moving",
  "like", "likes", "liked", "liking", "live", "lives", "lived", "living", "believe", "believes", "believed", "believing",
  "hold", "holds", "held", "holding", "bring", "brings", "brought", "bringing", "happen", "happens", "happened", "happening",
  "write", "writes", "wrote", "written", "writing", "provide", "provides", "provided", "providing", "sit", "sits", "sat", "sitting",
  "stand", "stands", "stood", "standing", "lose", "loses", "lost", "losing", "pay", "pays", "paid", "paying",
  "meet", "meets", "met", "meeting", "include", "includes", "included", "including", "continue", "continues", "continued", "continuing",
  "set", "sets", "setting", "learn", "learns", "learned", "learning", "change", "changes", "changed", "changing",
  "lead", "leads", "led", "leading", "understand", "understands", "understood", "understanding", "watch", "watches", "watched", "watching",
  "follow", "follows", "followed", "following", "stop", "stops", "stopped", "stopping", "create", "creates", "created", "creating",
  "speak", "speaks", "spoke", "spoken", "speaking", "read", "reads", "reading", "allow", "allows", "allowed", "allowing",
  "add", "adds", "added", "adding", "spend", "spends", "spent", "spending", "grow", "grows", "grew", "grown", "growing",
  "open", "opens", "opened", "opening", "walk", "walks", "walked", "walking", "win", "wins", "won", "winning",
  "offer", "offers", "offered", "offering", "remember", "remembers", "remembered", "remembering", "love", "loves", "loved", "loving",
  "consider", "considers", "considered", "considering", "appear", "appears", "appeared", "appearing", "buy", "buys", "bought", "buying",
  "wait", "waits", "waited", "waiting", "serve", "serves", "served", "serving", "die", "dies", "died", "dying",
  "send", "sends", "sent", "sending", "expect", "expects", "expected", "expecting", "build", "builds", "built", "building",
  "stay", "stays", "stayed", "staying", "fall", "falls", "fell", "fallen", "falling", "cut", "cuts", "cutting",
  "reach", "reaches", "reached", "reaching", "kill", "kills", "killed", "killing", "remain", "remains", "remained", "remaining",
  "suggest", "suggests", "suggested", "suggesting", "raise", "raises", "raised", "raising", "pass", "passes", "passed", "passing",
  "sell", "sells", "sold", "selling", "require", "requires", "required", "requiring", "report", "reports", "reported", "reporting",
  "decide", "decides", "decided", "deciding", "pull", "pulls", "pulled", "pulling", "break", "breaks", "broke", "broken", "breaking",
  "develop", "develops", "developed", "developing", "agree", "agrees", "agreed", "agreeing", "support", "supports", "supported", "supporting",
  "hit", "hits", "hitting", "produce", "produces", "produced", "producing", "eat", "eats", "ate", "eaten", "eating",
  "cover", "covers", "covered", "covering", "catch", "catches", "caught", "catching", "draw", "draws", "drew", "drawn", "drawing",
  "choose", "chooses", "chose", "chosen", "choosing", "improve", "improves", "improved", "improving", "analyze", "analyzes", "analyzed", "analyzing",
  "search", "searches", "searched", "searching", "replace", "replaces", "replaced", "replacing", "remove", "removes", "removed", "removing",
  "install", "installs", "installed", "installing", "import", "imports", "imported", "importing", "export", "exports", "exported", "exporting",
  "connect", "connects", "connected", "connecting", "display", "displays", "displayed", "displaying", "handle", "handles", "handled", "handling",
  "enable", "enables", "enabled", "enabling", "disable", "disables", "disabled", "disabling", "detect", "detects", "detected", "detecting",
  "generate", "generates", "generated", "generating", "receive", "receives", "received", "receiving", "achieve", "achieves", "achieved", "achieving",

  // Nouns
  "time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country",
  "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point",
  "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business",
  "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city",
  "community", "name", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level", "office",
  "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air",
  "teacher", "force", "education", "method", "assistant", "editor", "engine", "grammar", "spelling", "synonym", "antonym", "vocabulary", "feature",
  "sentence", "paragraph", "document", "dictionary", "suggestion", "card", "button", "browser", "extension", "tab", "stat", "score", "light", "bag",
  "computer", "phone", "software", "screen", "keyboard", "text", "page", "chapter", "lesson", "rule", "example", "sample", "solution", "detail",
  "device", "project", "code", "file", "data", "database", "platform", "model", "tool", "interface", "app", "application", "package", "library",
  "server", "client", "theme", "speed", "quality", "performance", "privacy", "security", "design", "style", "color", "layout", "flow", "test",

  // Adjectives
  "good", "new", "first", "last", "long", "great", "little", "own", "other", "old", "right", "big", "high", "different", "small", "large", "next",
  "early", "young", "important", "few", "public", "bad", "same", "able", "better", "best", "worse", "worst", "faster", "fastest", "easier", "easiest",
  "harder", "hardest", "simpler", "simplest", "clearer", "clearest", "stronger", "strongest", "smarter", "smartest", "bigger", "biggest",
  "effective", "efficient", "fast", "slow", "easy", "hard", "simple", "complex", "clear", "strong", "weak", "smart", "bright", "dark", "light",
  "heavy", "clean", "fresh", "happy", "sad", "beautiful", "wonderful", "terrible", "excellent", "perfect", "complete", "accurate", "reliable",
  "active", "busy", "quiet", "local", "offline", "private", "secure", "native", "direct", "quick", "smooth", "modern", "crisp", "rich", "dynamic",
  "helpful", "useful", "vital", "crucial", "essential", "primary", "secondary", "natural", "formal", "academic", "professional", "advanced",

  // Adverbs
  "up", "so", "out", "just", "now", "how", "then", "more", "also", "here", "well", "only", "very", "even", "back", "there", "down", "still",
  "in", "as", "too", "when", "never", "really", "most", "on", "why", "about", "over", "again", "where", "right", "off", "always", "today",
  "far", "quite", "later", "often", "maybe", "away", "almost", "together", "probably", "already", "below", "directly", "clearly", "easily",
  // Common determiners, pronouns, quantities
  "every", "each", "all", "both", "half", "either", "neither", "each", "every", "other", "another",
  "everyone", "everybody", "everything", "everywhere", "someone", "somebody", "something", "somewhere",
  "anyone", "anybody", "anything", "anywhere", "no one", "nobody", "nothing", "nowhere",
  "many", "much", "several", "few", "fewer", "fewest", "little", "less", "least", "plenty", "enough",

  // Common phrases & politeness
  "please", "thank", "thanks", "welcome", "sorry", "hello", "hi", "hey", "goodbye", "bye",
  "yes", "no", "maybe", "ok", "okay", "sure", "certainly", "absolutely",

  // Core nouns
  "day", "days", "week", "weeks", "month", "months", "year", "years", "time", "times",
  "school", "schools", "room", "rooms", "bag", "bags", "light", "lights", "door", "doors",
  "house", "houses", "home", "homes", "car", "cars", "book", "books", "method", "methods",
  "friend", "friends", "water", "food", "money", "city", "cities", "world", "worlds",

  // Adjectives & Adverbs
  "early", "earlier", "earliest", "late", "later", "latest", "soon", "sooner", "soonest",
  "always", "sometimes", "often", "seldom", "rarely", "never", "ever", "already", "still", "yet",
  "together", "alone", "almost", "nearly", "quite", "rather", "pretty", "fairly",
  "without", "within", "around", "throughout", "behind", "beyond", "beside", "besides"
]);

/**
 * Fast edit distance (Damerau-Levenshtein) algorithm
 */
export function calculateDamerauLevenshtein(a: string, b: string): number {
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 2) return Math.abs(la - lb);

  const d: number[][] = [];
  for (let i = 0; i <= la; i++) {
    d[i] = [i];
  }
  for (let j = 0; j <= lb; j++) {
    d[0][j] = j;
  }

  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // deletion
        d[i][j - 1] + 1, // insertion
        d[i - 1][j - 1] + cost // substitution
      );

      // Transposition
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }

  return d[la][lb];
}

/**
 * Checks if a word is in standard English dictionary or follows regular inflection
 */
export function isWordInDictionary(word: string, customWords?: Set<string>): boolean {
  const lower = word.toLowerCase();
  if (ENGLISH_DICTIONARY_SET.has(lower)) return true;
  if (customWords && customWords.has(lower)) return true;

  // Single characters: only 'a' and 'i' are valid words
  if (lower.length === 1) {
    return lower === 'a' || lower === 'i';
  }

  // Regular plurals & third-person singular (-s, -es, -ies)
  if (lower.endsWith('ies') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('es') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -2))) return true;
  if (lower.endsWith('s') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -1))) return true;

  // Past tense (-ed, -ied, -d)
  if (lower.endsWith('ied') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('ed') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -2))) return true;
  if (lower.endsWith('ed') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -1))) return true; // e.g. like -> liked

  // Gerund / continuous (-ing)
  if (lower.endsWith('ing') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3))) return true;
  if (lower.endsWith('ing') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3) + 'e')) return true; // make -> making

  // Adverbial (-ly)
  if (lower.endsWith('ly') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -2))) return true;

  // Comparative/Superlative (-er, -est, -ier, -iest)
  if (lower.endsWith('ier') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3) + 'y')) return true;
  if (lower.endsWith('iest') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -4) + 'y')) return true;
  if (lower.endsWith('er') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -2))) return true;
  if (lower.endsWith('est') && ENGLISH_DICTIONARY_SET.has(lower.slice(0, -3))) return true;

  return false;
}

/**
 * Finds top spelling suggestions for a misspelled word
 */
export function findSpellingCandidates(misspelledWord: string, maxCandidates: number = 4): string[] {
  const lower = misspelledWord.toLowerCase();

  // 1. Direct typo dictionary check
  if (COMMON_TYPOS[lower]) {
    const direct = COMMON_TYPOS[lower];
    return [
      misspelledWord[0] === misspelledWord[0].toUpperCase() && misspelledWord.length > 1
        ? direct[0].toUpperCase() + direct.slice(1)
        : direct
    ];
  }

  // 2. Search lexicon by edit distance
  interface Candidate {
    word: string;
    distance: number;
    prefixMatch: boolean;
  }

  const candidates: Candidate[] = [];

  for (const dictWord of ENGLISH_DICTIONARY_SET) {
    if (Math.abs(dictWord.length - lower.length) > 2) continue;

    const dist = calculateDamerauLevenshtein(lower, dictWord);
    if (dist <= 2) {
      candidates.push({
        word: dictWord,
        distance: dist,
        prefixMatch: dictWord[0] === lower[0]
      });
    }
  }

  // Sort candidates by lowest distance, then same first letter, then length similarity
  candidates.sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (a.prefixMatch !== b.prefixMatch) return a.prefixMatch ? -1 : 1;
    return Math.abs(a.word.length - lower.length) - Math.abs(b.word.length - lower.length);
  });

  const results = candidates.slice(0, maxCandidates).map(c => {
    // Preserve original casing
    if (misspelledWord[0] === misspelledWord[0].toUpperCase() && misspelledWord.length > 1) {
      return c.word[0].toUpperCase() + c.word.slice(1);
    }
    return c.word;
  });

  return results;
}
