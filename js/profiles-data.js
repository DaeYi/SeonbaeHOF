// Seonbae Hall of Fame — profile metadata
// Full profile content lives in /profiles/<slug>.md
// This file is the index used by the homepage grid and the chat selector.
//
// Image URLs: hotlinked from Wikimedia Commons (safe per Commons policy).
// Where no Commons-hosted public-domain image exists, the `image` field is omitted
// and the UI generates an elegant placeholder from the first character of the Korean name.

const PROFILES = [
  {
    slug: "helen-ahn",
    name: "Helen Ahn",
    korean: "이혜련",
    birth: "1884",
    death: "1969",
    era: "early",
    field: "Independence movement",
    frame: "Half of the first Korean married couple to set foot in America — and the parent who actually raised the five children while her husband became Dosan.",
    image: "images/seonbae/helen-ahn.jpg",
    imageNote: "Ahn family portrait, 1917 — Helen Ahn at left."
  },
  {
    slug: "pyeng-koo-yoon",
    name: "Pyeng Koo Yoon",
    korean: "윤병구",
    birth: "1880",
    death: "1949",
    era: "early",
    field: "Ministry & diplomacy",
    frame: "The Hawaii plantation chaplain who, with Syngman Rhee, walked into Theodore Roosevelt's summer home in 1905 and asked the United States to defend Korea.",
    image: "images/seonbae/pyeng-koo-yoon.jpg"
  },
  {
    slug: "maria-hwang",
    name: "Maria Hwang",
    korean: "황마리아",
    birth: "1865",
    death: "1937",
    era: "early",
    field: "Education & women's organizing",
    frame: "The Korean woman who walked out of an affluent marriage, took her three children to a Hawaiian sugar plantation, and ran the first Korean women's organization in the islands.",
    image: "images/seonbae/maria-hwang.png"
  },
  {
    slug: "mary-paik-lee",
    name: "Mary Paik Lee",
    korean: "백광선",
    birth: "1900",
    death: "1995",
    era: "early",
    field: "Memoir & living history",
    frame: "The Korean girl who landed in Hawaii in 1905 and lived long enough — and remembered carefully enough — to give us the only first-person account of an entire Korean American woman's century."
  },
  {
    slug: "park-yong-man",
    name: "Park Yong-man",
    korean: "박용만",
    birth: "1881",
    death: "1928",
    era: "early",
    field: "Independence movement",
    frame: "The Korean independence leader who tried to build an army in Nebraska — because liberation, he believed, needed soldiers more than speeches.",
    image: "images/seonbae/park-yong-man.jpg"
  },
  {
    slug: "kim-chong-lim",
    name: "Kim Chong Lim",
    korean: "김종림",
    birth: "1884",
    death: "1973",
    era: "early",
    field: "Agriculture & aviation",
    frame: "The first Korean American millionaire — a Sacramento Valley rice baron who funded the birth of the Republic of Korea Air Force and lost the entire fortune in a single flood."
  },
  {
    slug: "charles-ho-kim",
    name: "Charles Ho Kim",
    korean: "김호",
    birth: "1884",
    death: "1968",
    era: "early",
    field: "Business & independence",
    frame: "The Reedley orchard king who ran an exclusive nectarine patent into the first Korean American million-dollar business — and spent the proceeds on a free Korea."
  },
  {
    slug: "harry-s-kim",
    name: "Harry S. Kim",
    korean: "김형순",
    birth: "1885",
    death: "1977",
    era: "early",
    field: "Business & independence",
    frame: "The Pai Chai-trained interpreter who became a Reedley nursery man, co-built the first Korean American million-dollar business, and quietly funded the independence movement for thirty years."
  },
  {
    slug: "ilhan-new",
    name: "Ilhan New",
    korean: "유일한",
    birth: "1895",
    death: "1971",
    era: "early",
    field: "Entrepreneurship & OSS",
    frame: "Sent alone to America at nine, built a fortune on bean sprouts, spent it building Korea's first modern pharmaceutical company, and at age 50 parachute-trained with the OSS to be dropped behind Japanese lines.",
    image: "images/seonbae/ilhan-new.jpg",
    imageNote: "Ilhan New with his wife Mary Woo New."
  },
  {
    slug: "ha-soo-whang",
    name: "Ha Soo Whang",
    korean: "황하수",
    birth: "1892",
    death: "1984",
    era: "early",
    field: "Social work & culture",
    frame: "The first Korean social worker in Hawaii — who never danced, but kept Korean dance alive in the islands for two decades by finding the people who could and making sure they had an audience."
  },
  {
    slug: "nodie-sohn",
    name: "Nodie Sohn",
    korean: "노디 김",
    birth: "1898",
    death: "1972",
    era: "early",
    field: "Education",
    frame: "Came to Hawaii at six, graduated Oberlin at nineteen, became the first Korean woman principal in the islands at twenty."
  },
  {
    slug: "chung-song-lee-ahn",
    name: "Chung Song Lee Ahn",
    korean: "안정송",
    birth: "1895",
    death: "1989",
    era: "early",
    field: "Women's organizing",
    frame: "Ewha graduate who landed in Honolulu in January 1919 — two months before the March First Movement broke open in Seoul — and spent the next seventy years running every Korean women's organization in the islands."
  },
  {
    slug: "philip-ahn",
    name: "Philip Ahn",
    korean: "안필립",
    birth: "1905",
    death: "1978",
    era: "early",
    field: "Film & television",
    frame: "The first Korean American actor in Hollywood — son of the most famous Korean independence leader of his era — who built a 180-credit career by playing the enemies of his own people.",
    image: "images/seonbae/philip-ahn.gif"
  },
  {
    slug: "fred-ohr",
    name: "Fred Ohr",
    korean: "오정수",
    birth: "1919",
    death: "2015",
    era: "early",
    field: "Military aviation",
    frame: "The only American flying ace of Korean descent in World War II — a kid from an 8-by-10-foot tent in Idaho who shot down enemy planes over the Mediterranean.",
    image: "images/seonbae/fred-ohr.jpg"
  },
  {
    slug: "susan-ahn-cuddy",
    name: "Susan Ahn Cuddy",
    korean: "안수산",
    birth: "1915",
    death: "2015",
    era: "mid",
    field: "Military & intelligence",
    frame: "The first Asian American woman in the US Navy — rejected for her race, applied again, ended up training Navy combat pilots and breaking codes for the NSA.",
    image: "images/seonbae/susan-ahn-cuddy.jpg"
  },
  {
    slug: "young-oak-kim",
    name: "Young Oak Kim",
    korean: "김영옥",
    birth: "1919",
    death: "2005",
    era: "mid",
    field: "Military service",
    frame: "A Korean American officer who refused to leave a Japanese American battalion in 1943 — and went on to become the first minority officer in US history to command a combat battalion."
  },
  {
    slug: "herbert-choy",
    name: "Herbert Choy",
    korean: "최영조",
    birth: "1916",
    death: "2004",
    era: "mid",
    field: "Federal judiciary",
    frame: "The son of Korean sugar plantation workers on Kauai who became the first person of Korean ancestry admitted to the US bar — and the first Asian American to sit on a federal court.",
    image: "images/seonbae/herbert-choy.jpg"
  },
  {
    slug: "kw-lee",
    name: "K. W. Lee",
    korean: "이경원",
    birth: "1928",
    death: "2025",
    era: "mid",
    field: "Investigative journalism",
    frame: "The Korean immigrant reporter who spent five years writing about one wrongfully convicted death-row inmate — and accidentally started the first pan-Asian American political movement."
  },
  {
    slug: "k-connie-kang",
    name: "K. Connie Kang",
    korean: "강경실",
    birth: "1942",
    death: "2019",
    era: "mid",
    field: "Journalism",
    frame: "The first female Korean American journalist at US mainstream dailies — hired by the LA Times after the 1992 riots specifically because the paper had been covering Koreatown without anyone who could speak to it."
  },
  {
    slug: "david-hyun",
    name: "David Hyun",
    korean: "현 데이비드",
    birth: "1917",
    death: "2012",
    era: "mid",
    field: "Architecture",
    frame: "The first registered Korean American architect — who revitalized Little Tokyo for Japanese Americans before he could ever build the Korea City he imagined for his own people."
  },
  {
    slug: "hi-duk-lee",
    name: "Hi Duk Lee",
    korean: "이희덕",
    birth: "1939",
    death: "2019",
    era: "mid",
    field: "Community building",
    frame: "The chemistry graduate who became a German coal miner who became the founder of LA's Koreatown — and who lost almost all of it before the city ever put up the signs."
  },
  {
    slug: "dora-yum-kim",
    name: "Dora Yum Kim",
    korean: "염도라",
    birth: "1921",
    death: "2003",
    era: "mid",
    field: "Social work",
    frame: "The daughter of a Korean independence organizer who placed over 3,000 Korean immigrants into their first American jobs — and built the Bay Area's first Korean community center as the second job she did after her first one."
  },
  {
    slug: "luke-ik-chang-kim",
    name: "Luke Ik Chang Kim",
    korean: "김익창",
    birth: "1930",
    death: "2015",
    era: "mid",
    field: "Cultural psychiatry",
    frame: "The psychiatrist who treated Charles Manson and Sirhan Sirhan in a California prison — and who insisted, against the field's deepest habits, that you could not treat a patient without first understanding their culture."
  },
  {
    slug: "dae-sook-suh",
    name: "Dae-Sook Suh",
    korean: "서대숙",
    birth: "1931",
    death: "2022",
    era: "mid",
    field: "Korean Studies",
    frame: "The Columbia-trained political scientist who built the first Korean Studies center in the United States — and wrote the definitive English-language biography of the man whose regime he had fled.",
    image: "images/seonbae/dae-sook-suh.jpg"
  },
  {
    slug: "yong-soon-min",
    name: "Yong Soon Min",
    korean: "민영순",
    birth: "1953",
    death: "2024",
    era: "mid",
    field: "Visual art",
    frame: "The artist who refused to let America forget the Korean War — and built the institutions that let other Asian American artists not have to fight that fight alone."
  }
];

if (typeof module !== "undefined") module.exports = PROFILES;
