// Tv_Shows

const tvShows=[
    {
        "title": "Breaking Bad",
        "rating": 9.5,
        "language": "English",
        "firstyear": 2008,
        "lastyear": 2013,
        "status": "Ended",
        "genre": ["Crime", "Drama", "Thriller"],
        "synopsis": "A high school chemistry teacher turned methamphetamine manufacturer.",
        "casts": ["Bryan Cranston", "Aaron Paul"],
        "links": { "imdb": "https://www.imdb.com/title/tt0903747/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQI9hqgAzDfkWhGSPlsbB-uUpk08YGf2zVpw&s"
    },
    {
        "title": "Game of Thrones",
        "rating": 9.3,
        "language": "English",
        "firstyear": 2011,
        "lastyear": 2019,
        "status": "Ended",
        "genre": ["Action", "Adventure", "Drama"],
        "synopsis": "Nine noble families fight for control over the lands of Westeros.",
        "casts": ["Emilia Clarke", "Kit Harington"],
        "links": { "imdb": "https://www.imdb.com/title/tt0944947/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://external-preview.redd.it/c9WaCkTDMTtuxtG-NGDcFaYdGavd0PedaeKla76HKPE.jpg?auto=webp&s=1e7e6aa421b6107d0f3c78af802dba7328f84879"
    },
    {
        "title": "Stranger Things",
        "rating": 8.7,
        "language": "English",
        "firstyear": 2016,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Drama", "Fantasy", "Horror"],
        "synopsis": "A group of kids encounters supernatural forces and secret government experiments in their small town.",
        "casts": ["Millie Bobby Brown", "Finn Wolfhard"],
        "links": { "imdb": "https://www.imdb.com/title/tt4574334/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WjCrbSFvCpgDw3FNQ3ObI05NLuKTPFicqg&s"
    },
    {
        "title": "Money Heist",
        "rating": 8.3,
        "language": "Spanish",
        "firstyear": 2017,
        "lastyear": 2021,
        "status": "Ended",
        "genre": ["Action", "Crime", "Mystery"],
        "synopsis": "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history - to print billions of euros in the Royal Mint of Spain.",
        "casts": ["Úrsula Corberó", "Álvaro Morte"],
        "links": { "imdb": "https://www.imdb.com/title/tt6468322/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://m.media-amazon.com/images/I/71tqf702KNL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Friends",
        "rating": 8.9,
        "language": "English",
        "firstyear": 1994,
        "lastyear": 2004,
        "status": "Ended",
        "genre": ["Comedy", "Romance"],
        "synopsis": "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        "casts": ["Jennifer Aniston", "Courteney Cox"],
        "links": { "imdb": "https://www.imdb.com/title/tt0108778/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDk4-T2K-Ik0jikGpgCJGqV68_OoKeaz6Hg&s"
    },
    {
        "title": "The Office (US)",
        "rating": 8.9,
        "language": "English",
        "firstyear": 2005,
        "lastyear": 2013,
        "status": "Ended",
        "genre": ["Comedy"],
        "synopsis": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        "casts": ["Steve Carell", "Rainn Wilson"],
        "links": { "imdb": "https://www.imdb.com/title/tt0386676/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumW0ijtmB1yfQWbH3RNGdZSpu6YKpf-JY3w&s"
    },
    {
        "title": "Black Mirror",
        "rating": 8.8,
        "language": "English",
        "firstyear": 2011,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Drama", "Sci-Fi", "Thriller"],
        "synopsis": "A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world.",
        "casts": ["Bryce Dallas Howard", "Daniel Lapaine"],
        "links": { "imdb": "https://www.imdb.com/title/tt2085059/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKicWoRbYg4JUO5C3Ae6CwDgVcp1ACsFuh7Q&s"
    },
    {
        "title": "Sherlock",
        "rating": 9.1,
        "language": "English",
        "firstyear": 2010,
        "lastyear": 2017,
        "status": "Ended",
        "genre": ["Crime", "Drama", "Mystery"],
        "synopsis": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
        "casts": ["Benedict Cumberbatch", "Martin Freeman"],
        "links": { "imdb": "https://www.imdb.com/title/tt1475582/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuL6dtb7asLw0rz2x7MCuG12_JerSDi4pyw&s"
    },
    {
        "title": "Chernobyl",
        "rating": 9.4,
        "language": "English",
        "firstyear": 2019,
        "lastyear": null,
        "status": "Ended",
        "genre": ["Drama", "History", "Thriller"],
        "synopsis": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
        "casts": ["Jared Harris", "Stellan Skarsgård"],
        "links": { "imdb": "https://www.imdb.com/title/tt7366338/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlJ3bS11oX06utSM1UppUqhIqLj7nhu_LJQ&s"
    },
    {
        "title": "The Witcher",
        "rating": 8.2,
        "language": "English",
        "firstyear": 2019,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Action", "Adventure", "Fantasy"],
        "synopsis": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        "casts": ["Henry Cavill", "Anya Chalotra"],
        "links": { "imdb": "https://www.imdb.com/title/tt5180504/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnTpd_STw_hpLuKQznCAMvPLOSxrNFSDGuQ&s"
    },
    {
        "title": "The Crown",
        "rating": 8.7,
        "language": "English",
        "firstyear": 2016,
        "lastyear": 2022,
        "status": "Ended",
        "genre": ["Biography", "Drama", "History"],
        "synopsis": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        "casts": ["Claire Foy", "Olivia Colman"],
        "links": { "imdb": "https://www.imdb.com/title/tt4786824/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4pRnRAAk0SDS3bUs_wzvP5yzfzSlJFzxOg&s"
    },
    {
        "title": "Dark",
        "rating": 8.8,
        "language": "German",
        "firstyear": 2017,
        "lastyear": 2020,
        "status": "Ended",
        "genre": ["Crime", "Drama", "Mystery"],
        "synopsis": "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
        "casts": ["Louis Hofmann", "Karoline Eichhorn"],
        "links": { "imdb": "https://www.imdb.com/title/tt5753856/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8wTHTOwGLT-yL8JJeyDBqow9ujUJQl7yjA&s"
    },
    {
        "title": "The Boys",
        "rating": 8.7,
        "language": "English",
        "firstyear": 2019,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Action", "Comedy", "Crime"],
        "synopsis": "A group of vigilantes sets out to take down corrupt superheroes who abuse their superpowers.",
        "casts": ["Karl Urban", "Jack Quaid"],
        "links": { "imdb": "https://www.imdb.com/title/tt1190634/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqX6lPCpJ1fM9A8CBWJEfhbAvHkaYhtMDyA&s"
    },
    {
        "title": "Narcos",
        "rating": 8.8,
        "language": "English, Spanish",
        "firstyear": 2015,
        "lastyear": 2017,
        "status": "Ended",
        "genre": ["Biography", "Crime", "Drama"],
        "synopsis": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
        "casts": ["Wagner Moura", "Pedro Pascal"],
        "links": { "imdb": "https://www.imdb.com/title/tt2707408/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1H-PwLba83LOqFexZRaaAEgeiEjJAXHtBw&s"
    },
    {
        "title": "Peaky Blinders",
        "rating": 8.8,
        "language": "English",
        "firstyear": 2013,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Crime", "Drama"],
        "synopsis": "A gangster family epic set in Birmingham, England, in 1919, several months after the end of World War I.",
        "casts": ["Cillian Murphy", "Helen McCrory"],
        "links": { "imdb": "https://www.imdb.com/title/tt2442560/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOAZiqSX2f7fjq8ZnoiQHyz49mIaKpbeSsA&s"
    },
    {
        "title": "The Umbrella Academy",
        "rating": 8.0,
        "language": "English",
        "firstyear": 2019,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Action", "Adventure", "Comedy"],
        "synopsis": "A dysfunctional family of adopted sibling superheroes reunite to solve the mystery of their father's death and the threat of an impending apocalypse.",
        "casts": ["Ellen Page", "Tom Hopper"],
        "links": { "imdb": "https://www.imdb.com/title/tt1312171/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ134nwK-Il_hka2st-a9GZTt1J4rX6V2_w&s"
    },
    {
        "title": "Better Call Saul",
        "rating": 8.7,
        "language": "English",
        "firstyear": 2015,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Crime", "Drama"],
        "synopsis": "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.",
        "casts": ["Bob Odenkirk", "Rhea Seehorn"],
        "links": { "imdb": "https://www.imdb.com/title/tt3032476/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHl-Iyo08X4fpchnArNyLaTaFCPNHs5mCow&s"
    },
    {
        "title": "The Haunting of Hill House",
        "rating": 8.6,
        "language": "English",
        "firstyear": 2018,
        "lastyear": null,
        "status": "Ended",
        "genre": ["Drama", "Horror", "Mystery"],
        "synopsis": "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
        "casts": ["Michiel Huisman", "Elizabeth Reaser"],
        "links": { "imdb": "https://www.imdb.com/title/tt6763664/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMB_D2K03PqVbzUCgIZjCOQhFda-A3Bw0nMw&s"
    },
    {
        "title": "The Mandalorian",
        "rating": 8.8,
        "language": "English",
        "firstyear": 2019,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "synopsis": "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        "casts": ["Pedro Pascal", "Gina Carano"],
        "links": { "imdb": "https://www.imdb.com/title/tt8111088/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcn8uw2HdHjlfgM4R6mnmsaeDAI7XEiUClw&s"
    },
    {
        "title": "The Wire",
        "rating": 9.3,
        "language": "English",
        "firstyear": 2002,
        "lastyear": 2008,
        "status": "Ended",
        "genre": ["Crime", "Drama", "Thriller"],
        "synopsis": "Follows the drug scene in Baltimore through the eyes of law enforcement and drug dealers alike.",
        "casts": ["Dominic West", "Idris Elba"],
        "links": { "imdb": "https://www.imdb.com/title/tt0306414/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjYSdYa8FKZVQmMS3fU5LdredDQcDu_OFHQ&s"
    },
    {
        "title": "The West Wing",
        "rating": 8.8,
        "language": "English",
        "firstyear": 1999,
        "lastyear": 2006,
        "status": "Ended",
        "genre": ["Drama"],
        "synopsis": "A political drama that follows the President and his staff through the corridors of power in Washington, D.C.",
        "casts": ["Martin Sheen", "Allison Janney"],
        "links": { "imdb": "https://www.imdb.com/title/tt0200276/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ82Sg0T2Rl-GQW-kI5dcRvhKtYTyMKGhjCQ&s"
    },
    {
        "title": "The Sopranos",
        "rating": 9.2,
        "language": "English",
        "firstyear": 1999,
        "lastyear": 2007,
        "status": "Ended",
        "genre": ["Crime", "Drama"],
        "synopsis": "Follows the life of New Jersey mob boss Tony Soprano as he deals with personal and professional issues.",
        "casts": ["James Gandolfini", "Edie Falco"],
        "links": { "imdb": "https://www.imdb.com/title/tt0141842/" },
        "trending": false,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC7xn5v4wX2VM1KxK7Dt2WDjiLuQHhlWQYg&s"
    },
    {
        "title": "The Expanse",
        "rating": 8.5,
        "language": "English",
        "firstyear": 2015,
        "lastyear": null,
        "status": "Ongoing",
        "genre": ["Drama", "Mystery", "Sci-Fi"],
        "synopsis": "A future where humanity has colonized the solar system, and a conspiracy that threatens to spark interplanetary civil war.",
        "casts": ["Steven Strait", "Cas Anvar"],
        "links": { "imdb": "https://www.imdb.com/title/tt3230854/" },
        "trending": true,
        "itemType": "TV Show",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLzgeyR7KU7fx1vZsQq0KY93f3Qg3XZvqJg&s"
    }
]


// const titleList=tvShows.map((val)=>val.title)
// console.log(titleList)
// console.log(titleList.length)

// const titleList2 = [...new Set(...titleList)]
// console.log(titleList2.length)
