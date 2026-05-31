// Theme-matched canned chat responses per Seonbae.
// Each Seonbae has 4 starter questions and a small library of themed responses.
// The chat picks a response based on simple keyword matching against the user's question.
// This is a PoC mockup — the disclaimer in the chat UI makes that explicit.

const CHAT_DATA = {
  "helen-ahn": {
    suggested: [
      "How did you keep going when your husband was always away?",
      "What did you tell your children about Korea?",
      "What does sacrifice mean to you?",
      "What is the most important thing a mother can do?"
    ],
    themes: {
      family: "I raised five children largely on my own. Chang-ho — the man you know as Dosan — was in Korea, or Shanghai, or in a Japanese prison, for most of our marriage. I do not call that sacrifice. I call it the work that needed doing, so that the work he was doing could continue. The children grew up. They became Americans. Some became famous. Most of them did not. All of them knew who they came from.",
      sacrifice: "What looks like sacrifice from the outside often felt, from the inside, like the only sensible thing. I took in laundry. I sent money. I kept the rice cooked and the door open for the activists passing through. None of it was heroic. All of it was necessary. Do not romanticize what other people had to do to make your life possible.",
      identity: "We were the first Korean married couple to arrive in this country. There was no Korean American community when we landed in 1902 — we became part of building one. Your inheritance is not a fixed thing handed down to you. It is built, generation by generation, by the people who refuse to let the thread break.",
      women: "Most of what was done for the independence movement on American soil was paid for by women's small money — by the dollar collected after church, by the egg sold from the henhouse. We are not in the history books in the way the men are. That is a problem with the books, not with the work."
    },
    default: "I anchored a family and a movement in Los Angeles for sixty-seven years. The history of how Korean Americans became Korean Americans was largely written in kitchens like mine. Ask me about that."
  },

  "park-yong-man": {
    suggested: [
      "Why build a military academy in Nebraska?",
      "Was it worth it, knowing what came after?",
      "How do you choose when to use force?",
      "What do you do when your allies become your opponents?"
    ],
    themes: {
      force: "I thought the diplomatic petitions of Rhee and the moral suasion of Ahn Chang-ho were too slow. Japan was not going to negotiate Korea back into existence. I believed in soldiers. I trained them in Nebraska. I organized brigades in Hawaii. I do not know if I was right — armed resistance did not free Korea, and the bomb that did was American. But the question itself — *when do you fight* — does not go away because the last generation got the answer wrong.",
      conviction: "I was assassinated in Beijing in 1928 by a Korean communist. The independence movement that I had helped build had moved past me, in a direction I could not follow. Conviction is not the same as being right. Sometimes it is just the thing you keep doing when easier paths open up.",
      strategy: "If you are a small people fighting a large empire, the only thing you can do is be ready when the moment comes. I trained men in Nebraska so that when Korea was free, there would be Koreans who knew how to soldier. The moment came in 1945. The people I trained were old by then, or dead, or scattered. The work was not wasted. It just paid out differently than I had planned.",
      america: "America was the place that let me organize what I could not organize in Korea. The same America also let its president cut a deal with Japan and trade away Korea's sovereignty in 1905. Both things are true. Do not idealize the place you live, and do not be ungrateful for what it gives you to work with."
    },
    default: "I am the one who tried to build an army in Nebraska. I am the militant wing of an independence movement that won, eventually, by other means. Ask me about strategy, about timing, about the price of conviction."
  },

  "susan-ahn-cuddy": {
    suggested: [
      "How do you respond when the system says no?",
      "What does it mean to be a 'first'?",
      "How did you balance Korean and American identity?",
      "What advice would you give to a young woman entering a male field?"
    ],
    themes: {
      rejection: "I applied to the WAVES. They rejected me because of my race. I applied again. They accepted me. That is the whole story, and it is the story I want you to hear. When a system tells you no, the first piece of information you have is about the system, not about you. Apply again. Apply differently. Apply to the same office with a different argument. Most 'firsts' in any field happen because somebody, somewhere, refused to take the first no as the final no.",
      identity: "I was Korean and American at the same time. My father — Dosan — died in a Japanese prison while I was teaching American Navy pilots how to shoot down Japanese planes. I did not see those as competing loyalties. I saw them as the same loyalty, applied in two languages, at the same time, against the same enemy. The hyphen is not a problem you have to solve. It is a position you get to operate from.",
      women: "I was the Navy's first woman gunnery officer. I taught men to shoot down enemy planes. I was 27 years old and Asian and a woman and I had been told no a dozen times before I got the job. Then I did the job. Whatever field you are entering, the work is the answer. Be very good at the work. The rest follows.",
      legacy: "I lived to be a hundred. Most of the medals and honors I received came in the last twenty years of my life. The work itself I did between ages 27 and 44. Whatever you are building, build it because the work matters now. The recognition is a different question, and it will or will not come, and it will not change what you did."
    },
    default: "I am the first Asian American woman in the US Navy. I was rejected for my race, applied again, became a gunnery officer, then a codebreaker. I ran a restaurant after that. Ask me anything."
  },

  "young-oak-kim": {
    suggested: [
      "How did you decide to stay in the Japanese American battalion?",
      "What is the cost of being a 'first'?",
      "How do you lead people who don't yet trust you?",
      "What did you build after the war?"
    ],
    themes: {
      identity: "In 1943 my commander offered to transfer me out of the Japanese American battalion. He was worried — Japan had occupied Korea, and there were assumed to be tensions. I told him: there are no Japanese nor Korean here. We are all Americans, and we are fighting for the same cause. I meant it. The hyphen does not need to divide us against each other. The uniform was real, and the war was real, and the men beside me were real.",
      leadership: "Leadership in combat is not about being liked. It is about being trusted. I crawled into German lines in daylight at Cisterna because the intelligence we needed could not be gotten any other way. I did not ask anyone to do something I would not do. The respect comes from that, or it does not come at all.",
      "after-the-war": "I came home with 19 medals and built a laundry business. Then I went to Korea and led a battalion there. Then I came home again and built nonprofits in Los Angeles for thirty years — the Korean Youth and Cultural Center, the Korean Health Education Information and Research Center, the Coalition, the women's shelter. The medals were the easy part. The thirty years of nonprofit work is the part nobody remembers and the part I am proudest of.",
      first: "Being the first minority officer to command a combat battalion in US history was a thing the Army did, not a thing I did. What I did was show up and do the job. The historical first is what historians say afterward. While it is happening, it is just Tuesday."
    },
    default: "I commanded a battalion in Korea, fought through Italy with a Japanese American regiment, and spent thirty years after the war building nonprofits in Los Angeles. Ask me about any of it."
  },

  "herbert-choy": {
    suggested: [
      "What does the work of a judge actually look like?",
      "How did Hawaii shape you?",
      "What's the difference between symbolism and substance?",
      "What kept you on the bench for 33 years?"
    ],
    themes: {
      work: "I served on the federal bench for 33 years. People remember that I was the first Asian American federal judge. They do not always remember the cases. The cases are the actual job. Symbolism is what people put on you. Substance is what you do at the desk every day. Both matter. Only one is the work.",
      hawaii: "My parents cut cane on Kauai. I went to Harvard Law. The distance between those two facts is not me — it is Hawaii and the United States and the people who came before me. I never forgot that the path to the bench ran through plantation fields.",
      representation: "Representation is the floor, not the ceiling. The actual job begins the day after the swearing-in. The robe means nothing if you do not write careful opinions, treat the parties with respect, and stay at it for the long stretches between the photographs.",
      duration: "I took senior status in 1984 but kept hearing cases until I died in 2004. The bench is not a place you visit. It is a place you live. If you do not like the daily work — the briefs, the conferences, the writing — do not seek the office for the title alone. The title goes away. The work remains."
    },
    default: "I was the first Asian American federal judge. I served 33 years on the Ninth Circuit. I came from a Kauai sugar plantation. Ask me about the work, or about the path."
  },

  "kw-lee": {
    suggested: [
      "Why spend five years on one story?",
      "How did the Chol Soo Lee case change you?",
      "What do journalists owe their communities?",
      "How do you build a movement without meaning to?"
    ],
    themes: {
      persistence: "I wrote 120 articles on Chol Soo Lee over five years. The conviction was overturned. He was acquitted. I did not set out to start a movement. I set out to investigate one case. The movement happened because Asian American social workers, grandmothers, and students photocopied my pieces and passed them around. Most movements start that way. One reporter, one story, one community deciding the story matters.",
      journalism: "Journalism is not the same as commentary. The investigation is the work. You go to the records, you call the witnesses, you check the dates, you write what is true even when it is inconvenient. The community I served was not the Korean community alone — it was anyone who had been wrongly convicted, or who would be. The discipline of journalism is the only thing that makes the writing useful.",
      mentorship: "I built the internship program at the Korea Times English Edition because I wanted more Asian American reporters in mainstream newsrooms. You cannot wait for the institutions to fix themselves. You train the next generation, and you put them into the room.",
      community: "I was called the 'godfather of Asian American journalism.' That is generous. What it really means is that I was around for a long time, took the long view, and stayed in service to communities that the mainstream press did not see. Longevity is a form of advocacy."
    },
    default: "I was an investigative reporter. I spent five years on one case and accidentally helped start the pan-Asian American movement. I founded the first English-language Korean American paper. Ask me anything."
  },

  "k-connie-kang": {
    suggested: [
      "What was it like to be the first?",
      "How did you cover your own community?",
      "What does it mean to be more American than Korean in your mind but more Korean than American in your soul?",
      "How do you maintain integrity inside an institution that has failed your people?"
    ],
    themes: {
      first: "I was 21 years old at the Rochester Democrat & Chronicle in 1964. The first female Korean American journalist at a mainstream US daily. Nobody had any idea what to do with me, and I had no idea what to do with the role. I did the job. I kept doing it. Most 'firsts' work that way — you take the seat that did not exist for you, and you find out what the job is by doing it.",
      identity: "I used to say I was more American than Korean in my mind, but more Korean than American in my soul. That was honest. The two things are not the same and they do not need to resolve. You are allowed to live inside the contradiction.",
      community: "When the LA Times hired me in 1992, it was because the paper had failed Koreatown during Sa-I-Gu. I knew it. They knew it. My job was to take the phone calls in the language the readers actually spoke, and to slowly change what 'Korean American' meant in the pages of the paper of record. That took years. It was not a single article. It was the accumulation of articles, day by day.",
      family: "My grandmother led the family across the 38th parallel to escape religious persecution. My mother led the family out of Seoul when the war broke out, by train and fishing boat. I came from refugee women. I wrote a memoir about them — *Home Was the Land of Morning Calm* — because if I did not write it down, the next generation would not know. Write your family down. Even if nobody else publishes it."
    },
    default: "I was the first female Korean American journalist at a US mainstream daily. I covered the LA Supreme Court, won 30+ awards, and wrote a memoir of my family's flight from North Korea. Ask me anything."
  },

  "mary-paik-lee": {
    suggested: [
      "What was it like to be the only Asian girl in your school?",
      "Why did you write your memoir?",
      "What did your father teach you about gratitude?",
      "How do you remember a century?"
    ],
    childhood: "On my first day at school in Riverside, the other children circled me chanting 'Ching chong Chinaman.' I went home and cried. My father told me they did not know any better. He told me to be patient. I do not know if he was right. I do know I went back to school the next day, and the day after that, and eventually they stopped chanting and started learning my name.",
    themes: {
      gratitude: "When I complained about scavenging butcher scraps on Saturdays, my father told me to be grateful — the butchers could have thrown the meat away and let everyone starve. I learned to live inside what was given. That is not the same as being satisfied. It is the discipline of seeing what you actually have.",
      writing: "I was eighty-six when I started writing my memoir. I am not a writer. I lived a life that nobody asked me to write down, and one day I sat down and wrote it anyway. The historian Sucheng Chan helped me turn it into a book. *Quiet Odyssey* is one of the only first-person accounts of the early Korean American century. If I had not written it, it would not exist. Write what only you know. Even if you are eighty-six. Especially if you are eighty-six.",
      century: "I was five years old when Japanese soldiers pushed my family out of our Pyongyang home. I was ninety-four when I died in San Francisco. Between those two dates, I lived through the Japanese occupation, the immigration to Hawaii, the move to California, the Pachappa Camp days, the labor camps, the marriage, the children, the war, the riots, the founding of Korean America. Most of what I lived through is not in any textbook. Memory is not nostalgia. It is the only record we have."
    },
    default: "I came to Hawaii in 1905 when I was five. I lived to be ninety-four. I wrote one book at the very end and it became the only full-life memoir of a Korean American woman of my era. Ask me anything."
  },

  "ilhan-new": {
    suggested: [
      "How do you decide when to leave a successful business?",
      "Why did you give away your fortune to a non-relative?",
      "What did the OSS training teach you?",
      "What is your responsibility to the country you came from?"
    ],
    themes: {
      leaving: "I founded La Choy in 1922 and built it into a profitable American business. By 1926 I had hundreds of thousands of dollars and I sold it. I went back to Korea with $500,000 to start a pharmaceutical company. People thought I was a fool. I thought the work in Korea was more important than the work in Chicago. Both were possible. I chose. You will have to choose too, more than once, between things that are all good. Choose the one that is more needed.",
      legacy: "I did not pass Yuhan Corporation to my son. I named a non-relative as my successor. I left the fortune to a foundation. In Korea, this was scandalous; everyone else built family dynasties. I built an institution that could outlast the family. The chaebol model would have made my children wealthier. The foundation model made the country a little less unequal. I will let history grade me on that.",
      service: "At fifty years old I trained with the OSS to be parachuted behind Japanese lines in Korea. The drops were scheduled for August 26, 1945. The bombs ended the war on August 15. I never jumped. The training was not wasted. I had asked myself the question *what would you do if the country you came from needed you, in your fifties, with a fortune to lose* — and I had answered. The answer matters even when the moment passes.",
      america: "America taught me business. America gave me my second language. America was the platform from which I served Korea. I do not see this as a betrayal of either country. I see it as the use I made of what each gave me. You may be in a similar position. Use what you have been given. Direct it at the problem that needs solving."
    },
    default: "I was sent alone to America at nine, built a fortune on bean sprouts, started Korea's first pharmaceutical company, trained with the OSS in my fifties, and gave my money away. Ask me anything."
  },

  "fred-ohr": {
    suggested: [
      "How did you keep applying after every recruiter turned you down?",
      "What's it like to stop being a war hero?",
      "What did flying teach you about life?",
      "Why did you become a dentist after the war?"
    ],
    themes: {
      persistence: "An Army Air Corps recruiter pointed me to the door without speaking. A Navy recruiter laughed at me. I joined the Army anyway and waited for the door to open. It opened in 1940 when they needed pilots. I flew 241 combat missions. The recruiters were wrong about me. They are wrong about a lot of people. Apply anyway. The door opens, eventually, for reasons that have nothing to do with how welcome you felt at the start.",
      "after-war": "I came home and married Esther and went to Berkeley on the GI Bill, then to Northwestern Dental School. I opened a Chicago practice in 1950 and ran it for fifty-three years. The hardest thing a war hero has to do is stop being a war hero. The medals went into a box. The life went on. The work was teeth, the family was the family, and that was the right shape of the rest of it.",
      anonymity: "I was the only American flying ace of Korean descent in the Second World War. Almost nobody knew that while I was practicing dentistry. I did not advertise it. The flying was its own time, and the dentistry was its own time, and you do not have to spend the second half of your life inside the first half.",
      mother: "My mother told me when I was six and I had decided to be a fighter pilot: if the desire is great enough, it will happen. She was right. Most things you want enough — and are willing to work for, and are willing to be turned away from, and are willing to come back to — eventually happen. The willingness to come back is the part most people don't have."
    },
    default: "I was the only American flying ace of Korean descent in WWII. After the war I drilled teeth in Chicago for fifty-three years. Ask me about flying, or about leaving it."
  },

  "philip-ahn": {
    suggested: [
      "How did you live with playing your enemy?",
      "What did your father say when you wanted to be an actor?",
      "What did Hollywood teach you about identity?",
      "Why did you stay so long?"
    ],
    themes: {
      father: "My mother said: no son of mine is going to get mixed up with those awful people. My father — Dosan, who you have heard of — said: if you are going to do this, study it properly. Go to USC. Be the best actor you can be. I think about that often. The parent who says yes is not always the parent who approves of the choice. It is the parent who decides their child gets to make it.",
      casting: "During World War II I played Japanese villains. My father had died in a Japanese prison. I received death threats and hate mail from people who thought I was actually Japanese, or worse, a sympathizer. The roles were what was available. I did not refuse them. I used the platform they gave me to do the off-screen work — keeping my father's memory alive, bringing his body home, supporting the Korean community. Take the role you can take. Do the work no role is going to give you, alongside it.",
      longevity: "I had 180 film and TV credits across 43 years. I opened a restaurant in Panorama City and ran it for 30 years. I played Master Kan in *Kung Fu* in my late sixties. I never married. The career was the life. I do not say that as a regret — I say it as a fact. Some lives are the work. Choose with eyes open.",
      legacy: "I became the first Asian American actor on the Hollywood Walk of Fame. I did not live to see it. The recognition was six years after I died. Do not wait around for the recognition. Do the work. The recognition will or will not come, and your life will be either way."
    },
    default: "I was the first Korean American actor in Hollywood. I played Japanese villains during the war while my father died in a Japanese prison. I ran a restaurant for thirty years. Ask me anything."
  },

  "hi-duk-lee": {
    suggested: [
      "How did you decide to start with a grocery store?",
      "What did losing the business teach you?",
      "Why didn't you go back into Koreatown?",
      "How do you build something that outlives you?"
    ],
    themes: {
      starting: "In 1971 my wife and I put almost all our savings — about $7,000 — into a grocery store at Olympic and Normandie. There were maybe 5,000 Koreans in Los Angeles. Nobody was selling them Korean food. We struggled for three years before we turned profitable. Most things worth building take longer than you can afford and start before there is a market. Start anyway.",
      losing: "I went bankrupt in 1982. Interest rates ran from 9% to 22%. The hotel I was building collapsed. The empire was gone in a season. The Koreatown signs went up the same year. I had built the neighborhood and lost my stake in it at the same time. *I do not regret what I have done since it all happened in Koreatown. My failures became fertilizer to bloom flowers.* That is what I would say. That is what I did say.",
      "second-act": "I left the country for about a decade. Traveled in Africa and China. Learned the tea trade. Wrote a 520-page memoir. Came back, settled in Silver Lake, opened a small eco-friendly nursery in Highland Park in my seventies. I called the nursery my greatest achievement. The first act was Koreatown. The second act was a nursery. Both are real. You do not have to repeat your earlier successes to have a meaningful later life.",
      community: "The person who builds the neighborhood is often not the person who profits from it. I do not say that bitterly. I say it as a description. If you build something for a community, the community is what survives. Your ownership is incidental. Plant the trees. Sit under them later, or do not, but plant them anyway."
    },
    default: "I founded LA's Koreatown. I lost almost everything in the 1982 bankruptcy. I spent the last twenty years of my life running a nursery. Ask me about building, or losing, or starting over."
  },

  "dora-yum-kim": {
    suggested: [
      "How did you turn a state job into a community service?",
      "What does 'doing what had to be done' mean to you?",
      "Why is institution-building underrated?",
      "What advice do you have for second-generation Korean Americans?"
    ],
    themes: {
      work: "I was a typist at the California Department of Employment. That was the only state work open to an Oriental female, as the language went then. I worked my way up to social worker inside the same department. After 1965, when Koreans started arriving in numbers, my Korean and my years inside the bureaucracy turned out to be exactly the combination they needed. I placed over 3,000 immigrants in their first American jobs. I did not set out to do that. I set out to do my job. The bigger work emerged from staying inside the smaller one.",
      pragmatism: "The title of my biography is *Doing What Had to Be Done*. It is a thesis statement. I did not frame my life as ambition. I did not frame it as activism. I framed it as the things that needed to happen that no one else was going to do. That is a useful frame. It is humbler than 'leadership' and it lets you take on more work, because nothing is beneath you.",
      institutions: "In 1976 I helped co-found the Korean Community Service Center — the first Korean community center in the United States. I left the state in 1977 to run it. I took the pay cut. Some of the most important Korean American institutions were built by people who took the pay cut and never made it into a textbook. The textbook was never the point.",
      "second-generation": "I was American-born. I grew up in Chinatown as a Korean minority inside a Chinese immigrant minority inside white America. My identity was complicated long before anyone had a vocabulary for it. The thing that helped me was working in service to my community in a daily, ordinary way. The identity stops being a puzzle when you put it to use."
    },
    default: "I placed over 3,000 Korean immigrants in their first American jobs. I co-founded the first Korean community center in the US. I worked quietly for forty years. Ask me anything."
  },

  "luke-ik-chang-kim": {
    suggested: [
      "What did treating Manson and Sirhan Sirhan teach you?",
      "Why does culture matter in clinical psychiatry?",
      "Why did you mortgage your house for Chol Soo Lee?",
      "How do you change a profession from the inside?"
    ],
    themes: {
      clinical: "I was the chief psychiatrist at the California Medical Facility in Vacaville for three decades. I treated Charles Manson, Sirhan Sirhan, Juan Corona, Timothy Leary. The patient roster reads like a list of America's bogeymen, and I will tell you what they all had in common with everyone else: you could not understand them without understanding their culture. I made that the argument of my career. The American Psychiatric Association eventually agreed with me.",
      change: "If you want to change a profession, you do not do it from the outside. You join the APA, you serve on the task forces, you write the papers, you train the next generation. Cultural psychiatry is not a movement. It is a methodology, codified, in the textbook, taught to residents. That is how change becomes permanent.",
      "chol-soo-lee": "My wife Grace and I mortgaged our house to fund Chol Soo Lee's legal defense. He was a young Korean American on death row for a murder he did not commit. The investigative reporter K.W. Lee had exposed the case. The community needed money. We had a house. The house was a resource; the man was a person; the math was not complicated. You will be asked, sometimes, to risk something material for a stranger's life. The answer is more often yes than people pretend.",
      legacy: "Grace and I endowed a chair at UC Davis so the field I helped create would outlast me. If you build something inside an institution, the question to ask is: will this still be here when I am not? Build with that in mind. The professorship is not vanity. It is structure."
    },
    default: "I treated Manson and Sirhan Sirhan, taught psychiatry at UC Davis for 32 years, helped create cultural psychiatry, and mortgaged my house for Chol Soo Lee. Ask me anything."
  },

  "kim-chong-lim": {
    suggested: [
      "Why fund a flight school for a country across the ocean?",
      "How did you handle losing the fortune?",
      "What did you learn about wealth?",
      "How do you decide what to risk?"
    ],
    themes: {
      wealth: "I was called the Rice King. I farmed 3,300 acres in the Sacramento Valley. I was the first Korean American millionaire. None of that mattered, ultimately. A flood took the fields in October 1920 and the money was gone in a week. What I had done with the money before the flood — funded the Willows Korean Aviation School, given the cadets room and board, bought the aircraft — that was what was left of the money after the flood. Wealth is a temporary instrument. Spend it.",
      conviction: "General Noh came through Willows in early 1920 and told me the next war would be won in the sky. I gave him forty acres of land, $20,000 in startup cash, and a pledge for $30,000 a year. He had asked. I had it. I gave it. The school closed within fifteen months after the flood, but the Republic of Korea Air Force today traces its origin to that field in California. Some bets pay back on a timeline you will not be alive to see.",
      humility: "After the flood I did not rebuild the empire. I gave what I could give at a smaller scale. I enlisted in the California State Guard during WWII, in my late fifties. My sons served in the US Navy. None of that was as dramatic as the rice fields. All of it was the same person, doing what could be done with what was left."
    },
    default: "I was the Rice King — the first Korean American millionaire. I funded the flight school that became the Republic of Korea Air Force. I lost the fortune in a flood. Ask me anything."
  },

  "charles-ho-kim": {
    suggested: [
      "Why give your fortune to the independence movement?",
      "How did you work with people you politically disagreed with?",
      "What did it take to build the LA Korean community?",
      "What advice would you give to a Korean American entrepreneur?"
    ],
    themes: {
      money: "Harry and I built Kim Brothers into a million-dollar business. I treated that as movement capital, not personal wealth. I gave $20,000 to build the KNA headquarters in Los Angeles. I raised $840,000 in war bonds during World War II. I funded scholarships through the Korean Foundation for the next twenty years. A million dollars in the 1950s is a lot of money. It would have made my family rich. I used it to make the community possible. Both are valid choices. I chose this one.",
      coalition: "In 1941 I helped form the United Korean Committee, working alongside people I had disagreed with for years — including Syngman Rhee's allies. The independence movement had been split into factions for two decades. Liberation was a real possibility for the first time. I swallowed the disagreements. There are moments in a movement when you have to. There are also moments when you should not. Know the difference.",
      vision: "At its 1938 dedication of the KNA headquarters I said: *This building is a home for us displaced Koreans. Here, we will foster progress for our people, we will support the Provisional Government in liberating our homeland, and we will educate our future generations.* I was 54 years old. I had thirty more years of building ahead of me. The thing you say at the dedication should be a promise you intend to spend the next thirty years keeping."
    },
    default: "I co-founded Kim Brothers and used the proceeds to fund the Korean independence movement and KA community. The first US public school named after a Korean American is named after me. Ask me anything."
  },

  "harry-s-kim": {
    suggested: [
      "What did thirty years of partnership teach you?",
      "Why did you break with Syngman Rhee?",
      "What's the difference between giving once and giving every year?",
      "Why be the quieter half?"
    ],
    themes: {
      partnership: "Charles and I were partners for thirty years. The business worked because we divided the labor: he ran orchards and operations, I ran sales and the outward face. Neither of us could have built it alone. Most enduring partnerships work that way — clean division, durable trust, no fighting over the credit. Find the person whose strengths fit the spaces your strengths leave open.",
      conviction: "I had supported Syngman Rhee financially in the early years. I broke with him over his marriage to Franziska Donner. I never resumed personal support. Some people will tell you that was petty. It was not petty. It was a values judgment about his character that, history would suggest, was correct. Cut off the support when the values diverge. Do not keep underwriting people who have stopped representing what you thought they represented.",
      giving: "Between 1914 and 1945 I gave $5,337 to the independence movement, in small documented donations over thirty years. That is not a heroic check. It is the patient practice of giving every year, at the level you can sustain, for a long time. Most movements survive on this kind of money, not on the dramatic gift. The thirty years is the work.",
      quiet: "I was the quieter half of the Kim Brothers story. Charles is the one with the elementary school named after him. I do not mind. Being the second name on the partnership is not a smaller life. The work was the same."
    },
    default: "I co-founded Kim Brothers with Charles Ho Kim — the first Korean American million-dollar business. I gave to the independence movement for thirty years. Ask me anything."
  },

  "pyeng-koo-yoon": {
    suggested: [
      "What was it like to meet Theodore Roosevelt?",
      "Why keep doing advocacy that you know will fail?",
      "How do you stay in a long fight?",
      "What does ministry have to do with diplomacy?"
    ],
    themes: {
      "the-petition": "On August 4, 1905, with Syngman Rhee, I met Theodore Roosevelt at Sagamore Hill and presented a petition asking the United States to defend Korea. He was polite. He told us he could only receive it through formal channels — knowing the Korean legation in Washington had already been turned. The petition died on a desk. The Taft-Katsura agreement traded Korea for the Philippines. We failed. We also made it a matter of public record that Korean Americans had asked. That mattered. Failure is not always wasted. Sometimes it is the part that the next attempt rests on.",
      persistence: "I stayed in independence-movement organizing for 44 years after that 1905 failure. I was the Korean delegate to the Paris Peace Conference in 1919 — where we were again denied a seat. Another failure. I kept at it. I lived to see liberation in 1945. Most of what I did was unsuccessful in the way the moment defined success. The cumulative effect was the freedom of Korea. Do not confuse one defeat with the arc.",
      ministry: "I was a Methodist minister first. The pastoral work — weddings, funerals, mediating between plantation workers and overseers — was the spine of the diplomatic work. You do not become a useful spokesperson for a community by appointing yourself a spokesperson. You become one by serving the community in the daily ways, until the moment comes when the community trusts you to speak for them."
    },
    default: "I was the Hawaii plantation chaplain who, with Syngman Rhee, met Theodore Roosevelt in 1905 and asked America to defend Korea. The petition failed. I kept at it for 44 more years. Ask me anything."
  },

  "david-hyun": {
    suggested: [
      "What did it mean to design for Japanese Americans?",
      "Why design Korea City when you knew it would not be built?",
      "How did you survive the McCarthy era?",
      "What does an architect owe a community?"
    ],
    themes: {
      "little-tokyo": "I designed the Japanese Village Plaza in Little Tokyo. I am Korean. Japan had colonized Korea for the first half of my life. People asked me whether the commission was difficult. It was not. The Japanese Americans of Little Tokyo had been incarcerated by their own government during the war. Their neighborhood needed rebuilding. I was an architect. The job was the job. The historical resonances were real and also beside the point.",
      "korea-city": "I drew up Korea City for LA's Koreatown — a master plan that would have done for Koreatown what Japanese Village Plaza did for Little Tokyo. I could not get it financed. It was never built. The plan exists in my archive. Someone else's generation will have to build it, or not. I think about that often. Some of the most important work an architect does is the work that does not get built — the plans that prove what was possible, and that the next generation can look at.",
      "deportation": "The federal government tried to deport me through 1958. I was a labor organizer and an open critic of Syngman Rhee. They labeled me a dangerous alien. The community organized resistance and the deportations were blocked. I kept practicing. You will sometimes be threatened for what you say. The threats are real. So is the community that protects you, if you have built one."
    },
    default: "I was the first registered Korean American architect. I designed the Japanese Village Plaza in Little Tokyo. I designed a Korea City for Koreatown that was never built. Ask me anything."
  },

  "ha-soo-whang": {
    suggested: [
      "What was it like to be a translator in every direction?",
      "Why promote dance you could not dance yourself?",
      "What does bridge work look like in practice?",
      "How do you sustain a career inside an institution that will not last?"
    ],
    themes: {
      bridge: "I ran the HyungJay Club, which taught young Korean American women the traditional culture their parents had brought from Korea. I ran the Mother's Club, which taught their grandmothers how to navigate American life. I was running a translation service in both directions at once. That is bridge work. It is unglamorous and it is the connective tissue of any diaspora community.",
      dance: "I believed Korean dance had to survive in Hawaii, and I could not dance. So I became its agent. I found Susan Chun Lee and Chai Yong Ha, supported them, arranged the performances. Most of what I personally contributed to Korean dance is the fact that there were Korean dancers in Hawaii, year after year, with a venue. The dance was theirs. The infrastructure was mine. Both were necessary.",
      institution: "The YWCA International Institute was dissolved in 1942 under wartime pressure. The platform I had built my career on disappeared. I left Hawaii in 1943. Sometimes the institution does not last. The relationships you built inside it can outlast it, and the work you did can be picked up by the next generation. Halla Pai Huhm — who came to Hawaii after the war — picked up the dance work. The thread did not break."
    },
    default: "I was the first Korean social worker in Hawaii. I kept Korean dance alive for two decades. I never danced. Ask me about bridge work, or about institutions that do not last."
  },

  "nodie-sohn": {
    suggested: [
      "What did it mean to be the first Korean woman principal in Hawaii?",
      "How did you handle being so close to Syngman Rhee?",
      "What do you do when the institution you serve becomes politically complicated?",
      "What does Korea owe its diaspora educators?"
    ],
    themes: {
      youth: "I graduated Oberlin College at nineteen and took the principalship of the Korean Christian Institute at twenty. I was very young. I was given the job because there were almost no Korean women in the US with my credentials. I held it on and off until 1945. Sometimes the door opens early because the field is small. The job still has to be done. The fact that no one else could do it does not make the doing easier.",
      rhee: "The Korean Christian Institute was Syngman Rhee's school — the operational base of his Hawaii faction. I was its principal, the president of the Korean Ladies Relief Society, a senior officer of the Dongji Hoi. I was Rhee's institutional infrastructure in Hawaii for a quarter century. After he became president of Korea, he appointed me to the procurement office in Seoul in 1952. Rhee's later presidency is one of the most contested in modern Korean history. My institutional work predates his presidency, but I am tied to him by association. There is no clean institutional life. The institutions you build inside are also the politics you inherit. I would say this to anyone joining an institution led by a charismatic figure: be honest with yourself about what you are part of."
    },
    default: "I was the first Korean woman principal in Hawaii. I ran a school tied closely to Syngman Rhee. I served his government in Seoul after he became president. Ask me anything."
  },

  "chung-song-lee-ahn": {
    suggested: [
      "What was it like to be in Honolulu when March First happened?",
      "How do you build a life in a country you may never leave?",
      "Why work across factions instead of joining one?",
      "What does seventy years of women's organizing teach you?"
    ],
    themes: {
      organizing: "I chaired the Korean YWCA. I was president of the Korean Women's Relief Society. I was president of the women's branch of the Korean National Association. I led the Ewha alumnae association. I represented the Korean community on the United Welfare Fund Drive. People say 'active in most Korean organizations in the state,' and that is not hyperbole. The community was small and the work was infinite. Pick the things you are best at and do them. Then do the things nobody else is doing, because nobody else is doing them.",
      diaspora: "I landed in Honolulu in January 1919. Two months later, the March First Movement broke open in Seoul. I could not go back. I was already abroad when the country I had trained to serve declared its independence. The rest of my life was organized around what a Korean woman in Hawaii owed to a Korea she could not return to under occupation. The answer turned out to be: build the diaspora institutions that the homeland needs. Not as a substitute for going home. As a parallel project.",
      factions: "Korean Hawaii was bitterly split between Rhee's wing and Park Yong-man's wing. I worked across both. Not because I had no opinions, but because the work I cared about — women's organizing, education, welfare — required me to be useful to the whole community. Pick your fights. Decide which ones are worth the cost to your usefulness. Many fights are not."
    },
    default: "I was an Ewha graduate who came to Honolulu in 1919, two months before the March First Movement. I spent seventy years running every Korean women's organization in Hawaii. Ask me anything."
  },

  "maria-hwang": {
    suggested: [
      "Why did you leave Korea?",
      "What did you tell the women on the plantations?",
      "How do you organize when you have nothing?",
      "What was 'not allowed to be anything' like?"
    ],
    themes: {
      leaving: "I left an affluent marriage in Pyongan Province in 1905 with my three children. My husband kept mistresses. I had converted to Methodism. The church helped me get on the boat. I was forty years old. People did not, at that time, leave wealthy husbands. I left. The cost of staying was higher than the cost of leaving, and the cost of leaving was high. I think about that often. The math of the choice does not look the same to anyone who is not the one making it.",
      organizing: "I founded the first Korean Women's Association in the Territory of Hawaii in 1913. We were plantation women. We had nothing. The association was a mutual aid society, a cultural school, and a fundraising arm for the independence movement, all at once. You do not need money to organize. You need a meeting time, a place to meet, a problem you all share, and someone willing to do the work between meetings. I did the work between meetings.",
      voice: "I told my son once that in Korea I had not been allowed to be anything. That is what going to Hawaii meant. Not opportunity in the way Americans use that word — not wealth or upward mobility. The freedom to be a person who acts on her own behalf. To found an association. To teach children. To organize relief. Even on a sugar plantation in the middle of the Pacific. The basic fact of being permitted to exist as an agent of your own life is a thing many women in many places still do not have. Do not take it for granted."
    },
    default: "I left an affluent marriage in Pyongan and took my three children to Hawaii in 1905. I founded the first Korean women's association in the islands in 1913. Ask me anything."
  },

  "dae-sook-suh": {
    suggested: [
      "Why study the regime you fled?",
      "How do you build a discipline?",
      "What does Korean Studies owe to the diaspora?",
      "How do you separate biography from analysis?"
    ],
    themes: {
      discipline: "When I took the Hawaii job in 1972, Korean Studies was not a recognized US field. The Center for Korean Studies was the first dedicated center at any US university. I directed it for 23 years. I trained graduate students. I recruited visiting scholars. I built the faculty. Now Korean Studies is a discipline taught at every major research university. That happened because someone, in 1972, took a job in Honolulu and stayed.",
      analysis: "I defected from the North as a teenager. I wrote the definitive English-language biography of Kim Il Sung. People asked me how I could write that book without grinding the political axe. The answer is that the political axe is a different book. The biography was an attempt at the standard of a Columbia University Press monograph — to describe what was, with the best available evidence. My personal grievance was not the scholarly contribution. Separating the two was the discipline of being useful for the next hundred years instead of the next hundred days.",
      institutions: "Some of the most useful work a scholar can do is to write the book the field needs before the field exists. The Center for Korean Studies trained generations who now hold chairs across the US and Asia. Those careers would not have looked the same without the Honolulu institution. Build the institution. Stay long enough that it can stand on its own. Then let it."
    },
    default: "I built the first Korean Studies center in the US at the University of Hawaii. I wrote the definitive biography of Kim Il Sung — the man whose regime I had fled. Ask me anything."
  },

  "yong-soon-min": {
    suggested: [
      "Why keep the Korean War as your subject?",
      "How do you build for the next generation while making your own work?",
      "What did Godzilla and the Asian American Arts Alliance teach you?",
      "What does it mean to teach for two decades?"
    ],
    themes: {
      subject: "The Korean War never ended. The 38th Parallel still cuts the peninsula in half. Americans treat it as a forgotten war. I made it the permanent subject of my work across four decades — installation, photography, mixed media. The dress in *deColonization* with gold lettering over panels of Korean women's testimony. The Gwangju Uprising in *Defining Moments*. The unresolved war is the through-line. You do not have to keep finding new subjects. Sometimes one subject keeps being relevant.",
      infrastructure: "I co-founded Godzilla: Asian American Art Network and the Asian American Arts Alliance in the late 1980s and early 1990s because the mainstream art world had no real space for Asian American artists. We built the space. It was unpaid work, mostly. It was as important as my own art. The artists you grow up admiring are usually standing in a room that someone like me — or like the other co-founders of Godzilla — built so they could stand there. Build the rooms.",
      teaching: "I taught at UC Irvine from 1993 to 2014. Twenty-one years of seminars, studio visits, recommendation letters, sitting with graduate students through their crises. That is not the part of my career anyone is going to retrospect in a museum. It is the largest part of my life's work by hours. The artists I trained are out making art now. That is the legacy I am most certain of."
    },
    default: "I was a visual artist whose subject was the unresolved Korean War. I co-founded Godzilla and the Asian American Arts Alliance. I taught at UC Irvine for 21 years. Ask me anything."
  }
};

if (typeof module !== "undefined") module.exports = CHAT_DATA;
