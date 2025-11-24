const elements = [
    // Linha 1
    { number: 1, symbol: "H", name: "Hidrogênio", mass: "1.008", electrons: "1", discovered: "1766", discoverer: "Henry Cavendish", image: "img/1.png", class: "nao-metal" },
    { number: 2, symbol: "He", name: "Hélio", mass: "4.0026", electrons: "2", discovered: "1868", discoverer: "Pierre Janssen", image: "img/2.png", class: "gas-nobre" },
    
    // Linha 2
    { number: 3, symbol: "Li", name: "Lítio", mass: "6.94", electrons: "3", discovered: "1817", discoverer: "Johan Arfwedson", image: "img/3.png", class: "metal-alcalino" },
    { number: 4, symbol: "Be", name: "Berílio", mass: "9.0122", electrons: "4", discovered: "1798", discoverer: "Louis Vauquelin", image: "img/4.png", class: "metal-alcalino-terroso" },
    { number: 5, symbol: "B", name: "Boro", mass: "10.81", electrons: "5", discovered: "1808", discoverer: "Joseph Gay-Lussac", image: "img/5.png", class: "semimetal" },
    { number: 6, symbol: "C", name: "Carbono", mass: "12.011", electrons: "6", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/6.png", class: "nao-metal" },
    { number: 7, symbol: "N", name: "Nitrogênio", mass: "14.007", electrons: "7", discovered: "1772", discoverer: "Daniel Rutherford", image: "img/7.png", class: "nao-metal" },
    { number: 8, symbol: "O", name: "Oxigênio", mass: "15.999", electrons: "8", discovered: "1774", discoverer: "Joseph Priestley", image: "img/8.png", class: "nao-metal" },
    { number: 9, symbol: "F", name: "Flúor", mass: "18.998", electrons: "9", discovered: "1886", discoverer: "Henri Moissan", image: "img/9.png", class: "halogenio" },
    { number: 10, symbol: "Ne", name: "Neônio", mass: "20.180", electrons: "10", discovered: "1898", discoverer: "William Ramsay", image: "img/10.png", class: "gas-nobre" },
    
    // Linha 3
    { number: 11, symbol: "Na", name: "Sódio", mass: "22.990", electrons: "11", discovered: "1807", discoverer: "Humphry Davy", image: "img/11.png", class: "metal-alcalino" },
    { number: 12, symbol: "Mg", name: "Magnésio", mass: "24.305", electrons: "12", discovered: "1755", discoverer: "Joseph Black", image: "img/12.png", class: "metal-alcalino-terroso" },
    { number: 13, symbol: "Al", name: "Alumínio", mass: "26.982", electrons: "13", discovered: "1825", discoverer: "Hans Christian Ørsted", image: "img/13.png", class: "metal-pos-transicao" },
    { number: 14, symbol: "Si", name: "Silício", mass: "28.085", electrons: "14", discovered: "1824", discoverer: "Jöns Jacob Berzelius", image: "img/14.png", class: "semimetal" },
    { number: 15, symbol: "P", name: "Fósforo", mass: "30.974", electrons: "15", discovered: "1669", discoverer: "Hennig Brand", image: "img/15.png", class: "nao-metal" },
    { number: 16, symbol: "S", name: "Enxofre", mass: "32.06", electrons: "16", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/16.png", class: "nao-metal" },
    { number: 17, symbol: "Cl", name: "Cloro", mass: "35.45", electrons: "17", discovered: "1774", discoverer: "Carl Wilhelm Scheele", image: "img/17.png", class: "halogenio" },
    { number: 18, symbol: "Ar", name: "Argônio", mass: "39.948", electrons: "18", discovered: "1894", discoverer: "Lord Rayleigh", image: "img/18.png", class: "gas-nobre" },
    
    // Linha 4 - Metais de transição + outros
    { number: 19, symbol: "K", name: "Potássio", mass: "39.098", electrons: "19", discovered: "1807", discoverer: "Humphry Davy", image: "img/19.png", class: "metal-alcalino" },
    { number: 20, symbol: "Ca", name: "Cálcio", mass: "40.078", electrons: "20", discovered: "1808", discoverer: "Humphry Davy", image: "img/20.png", class: "metal-alcalino-terroso" },
    { number: 21, symbol: "Sc", name: "Escândio", mass: "44.956", electrons: "21", discovered: "1879", discoverer: "Lars Fredrik Nilson", image: "img/21.png", class: "metal-transicao" },
    { number: 22, symbol: "Ti", name: "Titânio", mass: "47.867", electrons: "22", discovered: "1791", discoverer: "William Gregor", image: "img/22.png", class: "metal-transicao" },
    { number: 23, symbol: "V", name: "Vanádio", mass: "50.942", electrons: "23", discovered: "1801", discoverer: "Andrés Manuel del Río", image: "img/23.png", class: "metal-transicao" },
    { number: 24, symbol: "Cr", name: "Cromo", mass: "51.996", electrons: "24", discovered: "1797", discoverer: "Louis Vauquelin", image: "img/24.png", class: "metal-transicao" },
    { number: 25, symbol: "Mn", name: "Manganês", mass: "54.938", electrons: "25", discovered: "1774", discoverer: "Johan Gottlieb Gahn", image: "img/25.png", class: "metal-transicao" },
    { number: 26, symbol: "Fe", name: "Ferro", mass: "55.845", electrons: "26", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/26.png", class: "metal-transicao" },
    { number: 27, symbol: "Co", name: "Cobalto", mass: "58.933", electrons: "27", discovered: "1735", discoverer: "Georg Brandt", image: "img/27.png", class: "metal-transicao" },
    { number: 28, symbol: "Ni", name: "Níquel", mass: "58.693", electrons: "28", discovered: "1751", discoverer: "Axel Fredrik Cronstedt", image: "img/28.png", class: "metal-transicao" },
    { number: 29, symbol: "Cu", name: "Cobre", mass: "63.546", electrons: "29", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/29.png", class: "metal-transicao" },
    { number: 30, symbol: "Zn", name: "Zinco", mass: "65.38", electrons: "30", discovered: "1746", discoverer: "Andreas Marggraf", image: "img/30.png", class: "metal-transicao" },
    { number: 31, symbol: "Ga", name: "Gálio", mass: "69.723", electrons: "31", discovered: "1875", discoverer: "Paul-Émile Lecoq de Boisbaudran", image: "img/31.png", class: "metal-pos-transicao" },
    { number: 32, symbol: "Ge", name: "Germânio", mass: "72.630", electrons: "32", discovered: "1886", discoverer: "Clemens Winkler", image: "img/32.png", class: "semimetal" },
    { number: 33, symbol: "As", name: "Arsênio", mass: "74.922", electrons: "33", discovered: "1250", discoverer: "Albertus Magnus", image: "img/33.png", class: "semimetal" },
    { number: 34, symbol: "Se", name: "Selênio", mass: "78.971", electrons: "34", discovered: "1817", discoverer: "Jöns Jacob Berzelius", image: "img/34.png", class: "nao-metal" },
    { number: 35, symbol: "Br", name: "Bromo", mass: "79.904", electrons: "35", discovered: "1826", discoverer: "Antoine Jérôme Balard", image: "img/35.png", class: "halogenio" },
    { number: 36, symbol: "Kr", name: "Criptônio", mass: "83.798", electrons: "36", discovered: "1898", discoverer: "William Ramsay", image: "img/36.png", class: "gas-nobre" },
    
    // Linha 5
    { number: 37, symbol: "Rb", name: "Rubídio", mass: "85.468", electrons: "37", discovered: "1861", discoverer: "Robert Bunsen", image: "img/37.png", class: "metal-alcalino" },
    { number: 38, symbol: "Sr", name: "Estrôncio", mass: "87.62", electrons: "38", discovered: "1790", discoverer: "Adair Crawford", image: "img/38.png", class: "metal-alcalino-terroso" },
    { number: 39, symbol: "Y", name: "Ítrio", mass: "88.906", electrons: "39", discovered: "1794", discoverer: "Johan Gadolin", image: "img/39.png", class: "metal-transicao" },
    { number: 40, symbol: "Zr", name: "Zircônio", mass: "91.224", electrons: "40", discovered: "1789", discoverer: "Martin Klaproth", image: "img/40.png", class: "metal-transicao" },
    { number: 41, symbol: "Nb", name: "Nióbio", mass: "92.906", electrons: "41", discovered: "1801", discoverer: "Charles Hatchett", image: "img/41.png", class: "metal-transicao" },
    { number: 42, symbol: "Mo", name: "Molibdênio", mass: "95.95", electrons: "42", discovered: "1778", discoverer: "Carl Scheele", image: "img/42.png", class: "metal-transicao" },
    { number: 43, symbol: "Tc", name: "Tecnécio", mass: "98", electrons: "43", discovered: "1937", discoverer: "Carlo Perrier", image: "img/43.png", class: "metal-transicao" },
    { number: 44, symbol: "Ru", name: "Rutênio", mass: "101.07", electrons: "44", discovered: "1844", discoverer: "Karl Claus", image: "img/44.png", class: "metal-transicao" },
    { number: 45, symbol: "Rh", name: "Ródio", mass: "102.91", electrons: "45", discovered: "1803", discoverer: "William Wollaston", image: "img/45.png", class: "metal-transicao" },
    { number: 46, symbol: "Pd", name: "Paládio", mass: "106.42", electrons: "46", discovered: "1803", discoverer: "William Wollaston", image: "img/46.png", class: "metal-transicao" },
    { number: 47, symbol: "Ag", name: "Prata", mass: "107.87", electrons: "47", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/47.png", class: "metal-transicao" },
    { number: 48, symbol: "Cd", name: "Cádmio", mass: "112.41", electrons: "48", discovered: "1817", discoverer: "Friedrich Stromeyer", image: "img/48.png", class: "metal-transicao" },
    { number: 49, symbol: "In", name: "Índio", mass: "114.82", electrons: "49", discovered: "1863", discoverer: "Ferdinand Reich", image: "img/49.png", class: "metal-pos-transicao" },
    { number: 50, symbol: "Sn", name: "Estanho", mass: "118.71", electrons: "50", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/50.png", class: "metal-pos-transicao" },
    { number: 51, symbol: "Sb", name: "Antimônio", mass: "121.76", electrons: "51", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/51.png", class: "semimetal" },
    { number: 52, symbol: "Te", name: "Telúrio", mass: "127.60", electrons: "52", discovered: "1782", discoverer: "Franz Müller", image: "img/52.png", class: "semimetal" },
    { number: 53, symbol: "I", name: "Iodo", mass: "126.90", electrons: "53", discovered: "1811", discoverer: "Bernard Courtois", image: "img/53.png", class: "halogenio" },
    { number: 54, symbol: "Xe", name: "Xenônio", mass: "131.29", electrons: "54", discovered: "1898", discoverer: "William Ramsay", image: "img/54.png", class: "gas-nobre" },
    
    // Linha 6
    { number: 55, symbol: "Cs", name: "Césio", mass: "132.91", electrons: "55", discovered: "1860", discoverer: "Robert Bunsen", image: "img/55.png", class: "metal-alcalino" },
    { number: 56, symbol: "Ba", name: "Bário", mass: "137.33", electrons: "56", discovered: "1808", discoverer: "Humphry Davy", image: "img/56.png", class: "metal-alcalino-terroso" },
    { number: 57, symbol: "La", name: "Lantânio", mass: "138.91", electrons: "57", discovered: "1839", discoverer: "Carl Mosander", image: "img/57.png", class: "lantanideo" },
    { number: 72, symbol: "Hf", name: "Háfnio", mass: "178.49", electrons: "72", discovered: "1923", discoverer: "Dirk Coster", image: "img/72.png", class: "metal-transicao" },
    { number: 73, symbol: "Ta", name: "Tântalo", mass: "180.95", electrons: "73", discovered: "1802", discoverer: "Anders Ekeberg", image: "img/73.png", class: "metal-transicao" },
    { number: 74, symbol: "W", name: "Tungstênio", mass: "183.84", electrons: "74", discovered: "1783", discoverer: "Juan Elhuyar", image: "img/74.png", class: "metal-transicao" },
    { number: 75, symbol: "Re", name: "Rênio", mass: "186.21", electrons: "75", discovered: "1925", discoverer: "Walter Noddack", image: "img/75.png", class: "metal-transicao" },
    { number: 76, symbol: "Os", name: "Ósmio", mass: "190.23", electrons: "76", discovered: "1803", discoverer: "Smithson Tennant", image: "img/76.png", class: "metal-transicao" },
    { number: 77, symbol: "Ir", name: "Irídio", mass: "192.22", electrons: "77", discovered: "1803", discoverer: "Smithson Tennant", image: "img/77.png", class: "metal-transicao" },
    { number: 78, symbol: "Pt", name: "Platina", mass: "195.08", electrons: "78", discovered: "1735", discoverer: "Antonio Ulloa", image: "img/78.png", class: "metal-transicao" },
    { number: 79, symbol: "Au", name: "Ouro", mass: "196.97", electrons: "79", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/79.png", class: "metal-transicao" },
    { number: 80, symbol: "Hg", name: "Mercúrio", mass: "200.59", electrons: "80", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/80.png", class: "metal-transicao" },
    { number: 81, symbol: "Tl", name: "Tálio", mass: "204.38", electrons: "81", discovered: "1861", discoverer: "William Crookes", image: "img/81.png", class: "metal-pos-transicao" },
    { number: 82, symbol: "Pb", name: "Chumbo", mass: "207.2", electrons: "82", discovered: "Antiguidade", discoverer: "Desconhecido", image: "img/82.png", class: "metal-pos-transicao" },
    { number: 83, symbol: "Bi", name: "Bismuto", mass: "208.98", electrons: "83", discovered: "1753", discoverer: "Claude Geoffroy", image: "img/83.png", class: "metal-pos-transicao" },
    { number: 84, symbol: "Po", name: "Polônio", mass: "209", electrons: "84", discovered: "1898", discoverer: "Marie Curie", image: "img/84.png", class: "semimetal" },
    { number: 85, symbol: "At", name: "Astato", mass: "210", electrons: "85", discovered: "1940", discoverer: "Dale Corson", image: "img/85.png", class: "halogenio" },
    { number: 86, symbol: "Rn", name: "Radônio", mass: "222", electrons: "86", discovered: "1900", discoverer: "Friedrich Dorn", image: "img/86.png", class: "gas-nobre" },
    
    // Linha 7
    { number: 87, symbol: "Fr", name: "Frâncio", mass: "223", electrons: "87", discovered: "1939", discoverer: "Marguerite Perey", image: "img/87.png", class: "metal-alcalino" },
    { number: 88, symbol: "Ra", name: "Rádio", mass: "226", electrons: "88", discovered: "1898", discoverer: "Marie Curie", image: "img/88.png", class: "metal-alcalino-terroso" },
    { number: 89, symbol: "Ac", name: "Actínio", mass: "227", electrons: "89", discovered: "1899", discoverer: "André Debierne", image: "img/89.png", class: "actinideo" },
    { number: 104, symbol: "Rf", name: "Rutherfórdio", mass: "267", electrons: "104", discovered: "1969", discoverer: "Albert Ghiorso", image: "img/104.png", class: "metal-transicao" },
    { number: 105, symbol: "Db", name: "Dúbnio", mass: "268", electrons: "105", discovered: "1970", discoverer: "Albert Ghiorso", image: "img/105.png", class: "metal-transicao" },
    { number: 106, symbol: "Sg", name: "Seabórgio", mass: "269", electrons: "106", discovered: "1974", discoverer: "Albert Ghiorso", image: "img/106.png", class: "metal-transicao" },
    { number: 107, symbol: "Bh", name: "Bóhrio", mass: "270", electrons: "107", discovered: "1981", discoverer: "Peter Armbruster", image: "img/107.png", class: "metal-transicao" },
    { number: 108, symbol: "Hs", name: "Hássio", mass: "277", electrons: "108", discovered: "1984", discoverer: "Peter Armbruster", image: "img/108.png", class: "metal-transicao" },
    { number: 109, symbol: "Mt", name: "Meitnério", mass: "278", electrons: "109", discovered: "1982", discoverer: "Peter Armbruster", image: "img/109.png", class: "metal-transicao" },
    { number: 110, symbol: "Ds", name: "Darmstádtio", mass: "281", electrons: "110", discovered: "1994", discoverer: "Sigurd Hofmann", image: "img/110.png", class: "metal-transicao" },
    { number: 111, symbol: "Rg", name: "Roentgênio", mass: "282", electrons: "111", discovered: "1994", discoverer: "Sigurd Hofmann", image: "img/111.png", class: "metal-transicao" },
    { number: 112, symbol: "Cn", name: "Copernício", mass: "285", electrons: "112", discovered: "1996", discoverer: "Sigurd Hofmann", image: "img/112.png", class: "metal-transicao" },
    { number: 113, symbol: "Nh", name: "Nihônio", mass: "286", electrons: "113", discovered: "2004", discoverer: "RIKEN", image: "img/113.png", class: "metal-pos-transicao" },
    { number: 114, symbol: "Fl", name: "Fleróvio", mass: "289", electrons: "114", discovered: "1999", discoverer: "JINR", image: "img/114.png", class: "metal-pos-transicao" },
    { number: 115, symbol: "Mc", name: "Moscóvio", mass: "290", electrons: "115", discovered: "2004", discoverer: "JINR", image: "img/115.png", class: "metal-pos-transicao" },
    { number: 116, symbol: "Lv", name: "Livermório", mass: "293", electrons: "116", discovered: "2000", discoverer: "JINR", image: "img/116.png", class: "metal-pos-transicao" },
    { number: 117, symbol: "Ts", name: "Tenessino", mass: "294", electrons: "117", discovered: "2010", discoverer: "JINR", image: "img/117.png", class: "halogenio" },
    { number: 118, symbol: "Og", name: "Oganessônio", mass: "294", electrons: "118", discovered: "2006", discoverer: "JINR", image: "img/118.png", class: "gas-nobre" },
    
    // Lantanídeos
    { number: 58, symbol: "Ce", name: "Cério", mass: "140.12", electrons: "58", discovered: "1803", discoverer: "Jöns Berzelius", image: "img/58.png", class: "lantanideo" },
    { number: 59, symbol: "Pr", name: "Praseodímio", mass: "140.91", electrons: "59", discovered: "1885", discoverer: "Carl Auer", image: "img/59.png", class: "lantanideo" },
    { number: 60, symbol: "Nd", name: "Neodímio", mass: "144.24", electrons: "60", discovered: "1885", discoverer: "Carl Auer", image: "img/60.png", class: "lantanideo" },
    { number: 61, symbol: "Pm", name: "Promécio", mass: "145", electrons: "61", discovered: "1945", discoverer: "Jacob Marinsky", image: "img/61.png", class: "lantanideo" },
    { number: 62, symbol: "Sm", name: "Samário", mass: "150.36", electrons: "62", discovered: "1879", discoverer: "Paul Lecoq", image: "img/62.png", class: "lantanideo" },
    { number: 63, symbol: "Eu", name: "Európio", mass: "151.96", electrons: "63", discovered: "1901", discoverer: "Eugène Demarçay", image: "img/63.png", class: "lantanideo" },
    { number: 64, symbol: "Gd", name: "Gadolínio", mass: "157.25", electrons: "64", discovered: "1880", discoverer: "Jean de Marignac", image: "img/64.png", class: "lantanideo" },
    { number: 65, symbol: "Tb", name: "Térbio", mass: "158.93", electrons: "65", discovered: "1843", discoverer: "Carl Mosander", image: "img/65.png", class: "lantanideo" },
    { number: 66, symbol: "Dy", name: "Disprósio", mass: "162.50", electrons: "66", discovered: "1886", discoverer: "Paul Lecoq", image: "img/66.png", class: "lantanideo" },
    { number: 67, symbol: "Ho", name: "Hólmio", mass: "164.93", electrons: "67", discovered: "1878", discoverer: "Marc Delafontaine", image: "img/67.png", class: "lantanideo" },
    { number: 68, symbol: "Er", name: "Érbio", mass: "167.26", electrons: "68", discovered: "1843", discoverer: "Carl Mosander", image: "img/68.png", class: "lantanideo" },
    { number: 69, symbol: "Tm", name: "Túlio", mass: "168.93", electrons: "69", discovered: "1879", discoverer: "Per Teodor Cleve", image: "img/69.png", class: "lantanideo" },
    { number: 70, symbol: "Yb", name: "Itérbio", mass: "173.05", electrons: "70", discovered: "1878", discoverer: "Jean de Marignac", image: "img/70.png", class: "lantanideo" },
    { number: 71, symbol: "Lu", name: "Lutécio", mass: "174.97", electrons: "71", discovered: "1907", discoverer: "Georges Urbain", image: "img/71.png", class: "lantanideo" },
    
    // Actinídeos
    { number: 90, symbol: "Th", name: "Tório", mass: "232.04", electrons: "90", discovered: "1828", discoverer: "Jöns Berzelius", image: "img/90.png", class: "actinideo" },
    { number: 91, symbol: "Pa", name: "Protactínio", mass: "231.04", electrons: "91", discovered: "1913", discoverer: "Kasimir Fajans", image: "img/91.png", class: "actinideo" },
    { number: 92, symbol: "U", name: "Urânio", mass: "238.03", electrons: "92", discovered: "1789", discoverer: "Martin Klaproth", image: "img/92.png", class: "actinideo" },
    { number: 93, symbol: "Np", name: "Netúnio", mass: "237", electrons: "93", discovered: "1940", discoverer: "Edwin McMillan", image: "img/93.png", class: "actinideo" },
    { number: 94, symbol: "Pu", name: "Plutônio", mass: "244", electrons: "94", discovered: "1940", discoverer: "Glenn Seaborg", image: "img/94.png", class: "actinideo" },
    { number: 95, symbol: "Am", name: "Amerício", mass: "243", electrons: "95", discovered: "1944", discoverer: "Glenn Seaborg", image: "img/95.png", class: "actinideo" },
    { number: 96, symbol: "Cm", name: "Cúrio", mass: "247", electrons: "96", discovered: "1944", discoverer: "Glenn Seaborg", image: "img/96.png", class: "actinideo" },
    { number: 97, symbol: "Bk", name: "Berquélio", mass: "247", electrons: "97", discovered: "1949", discoverer: "Glenn Seaborg", image: "img/97.png", class: "actinideo" },
    { number: 98, symbol: "Cf", name: "Califórnio", mass: "251", electrons: "98", discovered: "1950", discoverer: "Glenn Seaborg", image: "img/98.png", class: "actinideo" },
    { number: 99, symbol: "Es", name: "Einstênio", mass: "252", electrons: "99", discovered: "1952", discoverer: "Albert Ghiorso", image: "img/99.png", class: "actinideo" },
    { number: 100, symbol: "Fm", name: "Férmio", mass: "257", electrons: "100", discovered: "1952", discoverer: "Albert Ghiorso", image: "img/100.png", class: "actinideo" },
    { number: 101, symbol: "Md", name: "Mendelévio", mass: "258", electrons: "101", discovered: "1955", discoverer: "Albert Ghiorso", image: "img/101.png", class: "actinideo" },
    { number: 102, symbol: "No", name: "Nobélio", mass: "259", electrons: "102", discovered: "1958", discoverer: "Albert Ghiorso", image: "img/102.png", class: "actinideo" },
    { number: 103, symbol: "Lr", name: "Laurêncio", mass: "262", electrons: "103", discovered: "1961", discoverer: "Albert Ghiorso", image: "img/103.png", class: "actinideo" }
];

// Posições dos elementos na tabela periódica número atômico, [linha e coluna]
const elementPositions = {
    // Linha 1
    1: [1, 1], 2: [1, 18],
    
    // Linha 2
    3: [2, 1], 4: [2, 2], 5: [2, 13], 6: [2, 14], 7: [2, 15], 8: [2, 16], 9: [2, 17], 10: [2, 18],
    
    // Linha 3
    11: [3, 1], 12: [3, 2], 13: [3, 13], 14: [3, 14], 15: [3, 15], 16: [3, 16], 17: [3, 17], 18: [3, 18],
    
    // Linha 4
    19: [4, 1], 20: [4, 2], 21: [4, 3], 22: [4, 4], 23: [4, 5], 24: [4, 6], 25: [4, 7], 26: [4, 8], 
    27: [4, 9], 28: [4, 10], 29: [4, 11], 30: [4, 12], 31: [4, 13], 32: [4, 14], 33: [4, 15], 34: [4, 16], 
    35: [4, 17], 36: [4, 18],
    
    // Linha 5
    37: [5, 1], 38: [5, 2], 39: [5, 3], 40: [5, 4], 41: [5, 5], 42: [5, 6], 43: [5, 7], 44: [5, 8], 
    45: [5, 9], 46: [5, 10], 47: [5, 11], 48: [5, 12], 49: [5, 13], 50: [5, 14], 51: [5, 15], 52: [5, 16], 
    53: [5, 17], 54: [5, 18],
    
    // Linha 6
    55: [6, 1], 56: [6, 2], 57: [6, 3], 72: [6, 4], 73: [6, 5], 74: [6, 6], 75: [6, 7], 76: [6, 8], 
    77: [6, 9], 78: [6, 10], 79: [6, 11], 80: [6, 12], 81: [6, 13], 82: [6, 14], 83: [6, 15], 84: [6, 16], 
    85: [6, 17], 86: [6, 18],
    
    // Linha 7
    87: [7, 1], 88: [7, 2], 89: [7, 3], 104: [7, 4], 105: [7, 5], 106: [7, 6], 107: [7, 7], 108: [7, 8], 
    109: [7, 9], 110: [7, 10], 111: [7, 11], 112: [7, 12], 113: [7, 13], 114: [7, 14], 115: [7, 15], 
    116: [7, 16], 117: [7, 17], 118: [7, 18],
    
    // Lantanídeos
    58: [9, 4], 59: [9, 5], 60: [9, 6], 61: [9, 7], 62: [9, 8], 63: [9, 9], 64: [9, 10], 65: [9, 11], 
    66: [9, 12], 67: [9, 13], 68: [9, 14], 69: [9, 15], 70: [9, 16], 71: [9, 17],
    
    // Actinídeos
    90: [10, 4], 91: [10, 5], 92: [10, 6], 93: [10, 7], 94: [10, 8], 95: [10, 9], 96: [10, 10], 
    97: [10, 11], 98: [10, 12], 99: [10, 13], 100: [10, 14], 101: [10, 15], 102: [10, 16], 103: [10, 17]
};

function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';
    
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            
            let element = null;
            for (const [num, pos] of Object.entries(elementPositions)) {
                if (pos[0] === row && pos[1] === col) {
                    element = elements.find(el => el.number === parseInt(num));
                    break;
                }
            }
            
            if (element) {
                cell.className = `element ${element.class}`;
                cell.innerHTML = `
                    <div class="element-number">${element.number}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                `;
                
                // Adiciona os dados para pesquisa
                cell.dataset.number = element.number;
                cell.dataset.name = element.name.toLowerCase();
                cell.dataset.symbol = element.symbol.toLowerCase();
                
                cell.addEventListener('click', () => showElementDetails(element));
            } else {
                cell.className = 'empty';
            }
            
            table.appendChild(cell);
        }
    }
    
    setupSearch();
}

function showElementDetails(element) {
    const overlay = document.getElementById('elementDetailsOverlay');
    const details = document.getElementById('elementDetails');
    
    const classNames = {
        'metal-alcalino': 'Metal Alcalino',
        'metal-alcalino-terroso': 'Metal Alcalino-Terroso',
        'metal-transicao': 'Metal de Transição',
        'metal-pos-transicao': 'Metal Pós-Transição',
        'semimetal': 'Semimetal',
        'nao-metal': 'Não Metal',
        'halogenio': 'Halogênio',
        'gas-nobre': 'Gás Nobre',
        'lantanideo': 'Lantanídeo',
        'actinideo': 'Actinídeo'
    };
    
    const className = classNames[element.class] || element.class;
    
    details.innerHTML = `
        <div class="details-header">
            <div class="details-symbol">${element.symbol}</div>
            <div>
                <div class="details-name">${element.name}</div>
                <div class="details-number">Número atômico: ${element.number}</div>
            </div>
        </div>
        
        <div class="details-image">
            ${element.image ? `<img src="${element.image}" alt="${element.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='Imagem não disponível';">` : 'Imagem não disponível'}
        </div>
        
        <div class="details-info">
            <div class="info-item">
                <div class="info-label">Massa Atômica</div>
                <div class="info-value">${element.mass} u</div>
            </div>
            <div class="info-item">
                <div class="info-label">Elétrons</div>
                <div class="info-value">${element.electrons}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Classe</div>
                <div class="info-value">${className}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Ano de Descoberta</div>
                <div class="info-value">${element.discovered}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Descobridor</div>
                <div class="info-value">${element.discoverer}</div>
            </div>
        </div>
        
        <button class="close-btn" id="closeDetails">Fechar</button>
    `;
    
    overlay.classList.add('active');
    
    document.getElementById('closeDetails').addEventListener('click', () => {
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const elements = document.querySelectorAll('.element');
        
        if (searchTerm === '') {
            elements.forEach(element => {
                element.style.display = 'flex';
            });
            return;
        }
        
        let foundElement = null;
        let exactMatch = null;
        
        elements.forEach(element => {
            const number = element.dataset.number;
            const name = element.dataset.name;
            const symbol = element.dataset.symbol;
            
            const matches = number.includes(searchTerm) || 
                           name.includes(searchTerm) || 
                           symbol.includes(searchTerm);
            
            if (matches) {
                element.style.display = 'flex';
                foundElement = element;
                
                if (number === searchTerm || name === searchTerm || symbol === searchTerm) {
                    exactMatch = element;
                }
            } else {
                element.style.display = 'none';
            }
        });
        
        if (exactMatch) {
            const elementNumber = parseInt(exactMatch.dataset.number);
            const elementData = elements.find(el => el.number === elementNumber);
            if (elementData) {
                showElementDetails(elementData);
            }
        }
        else if (!foundElement) {
            const details = document.getElementById('elementDetails');
            details.innerHTML = `
                <div class="no-results">
                    <h3>Elemento não encontrado</h3>
                    <p>Nenhum elemento corresponde à pesquisa: "${searchTerm}"</p>
                    <button class="close-btn" onclick="document.getElementById('elementDetails').classList.remove('active')">Fechar</button>
                </div>
            `;
            details.classList.add('active');
        }
    }
    
    searchInput.addEventListener('input', performSearch);
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('search', function() {
        if (this.value === '') {
            const elements = document.querySelectorAll('.element');
            elements.forEach(element => {
                element.style.display = 'flex';
            });
        }
    });
}

function showElementDetails(element) {
    const overlay = document.getElementById('elementDetailsOverlay');
    const details = document.getElementById('elementDetails');
    
    details.innerHTML = `
        <div class="details-header">
            <div class="details-symbol">${element.symbol}</div>
            <div>
                <div class="details-name">${element.name}</div>
                <div class="details-number">Número atômico: ${element.number}</div>
            </div>
        </div>
        
        <div class="details-image">
            ${element.image ? `<img src="${element.image}" alt="${element.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='Imagem não disponível';">` : 'Imagem não disponível'}
        </div>
        
        <div class="details-info">
            <div class="info-item">
                <div class="info-label">Massa Atômica</div>
                <div class="info-value">${element.mass} u</div>
            </div>
            <div class="info-item">
                <div class="info-label">Elétrons</div>
                <div class="info-value">${element.electrons}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Ano de Descoberta</div>
                <div class="info-value">${element.discovered}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Descobridor</div>
                <div class="info-value">${element.discoverer}</div>
            </div>
        </div>
        
        <button class="close-btn" id="closeDetails">Fechar</button>
    `;
    
    overlay.classList.add('active');
    
    document.getElementById('closeDetails').addEventListener('click', () => {
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

document.addEventListener('DOMContentLoaded', createPeriodicTable);