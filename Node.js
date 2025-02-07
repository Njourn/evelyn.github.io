const express = require('express');
const app = express();
const port = 3000;

const zodiacSigns = {
    "Rat": [2020, 2008, 1996, 1984],
    "Ox": [2021, 2009, 1997, 1985],
    "Tiger": [2022, 2010, 1998, 1986],
    "Rabbit": [2023, 2011, 1999, 1987],
	"Dragon": [2024, 2012, 2000, 1988],
	"Snake": [2025, 2013, 2001, 1989],
	"Horse": [2026, 2014, 2002, 1990],
	"Goat": [2027, 2015, 2003, 1991],
	"Monkey": [2028, 2016, 2004, 1992],
	"Rooster": [2029, 2017, 2005, 1993],
	"Dog": [2030, 2018, 2006, 1994],
	"Pig": [2031, 2019, 2007, 1995]
    // Add all signs...
};

app.get('/zodiac/:year', (req, res) => {
    let year = parseInt(req.params.year);
    let sign = Object.keys(zodiacSigns).find(sign => zodiacSigns[sign].includes(year));
    res.json({ year, zodiac: sign || "Unknown" });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
