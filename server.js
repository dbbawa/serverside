const express = require("express");
const cors = require("cors");
const app = express();
const Joi = require("joi");
app.use(cors());
app.use(express.static("public"));
const multer = require("multer");
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const mongoose = require("mongoose");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

mongoose 
  .connect(
    "mongodb+srv://Jbl6AkxFYfeQTN8O:Jbl6AkxFYfeQTN8O@cluster0.tfhqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });

  const locationSchema = new mongoose.Schema({
    name: String,
    img: String,
  });

  const Location = mongoose.model("Location", locationSchema);
/*
const locations = [
    {
    "_id": 1,
    "name": "Colorado",
    "image": "colorado.jpg",
    "detail_image": "dest-colorado.jpg",
    "title": "Ski Colorado",
    "resorts": [
    "Vail",
    "Breckenridge",
    "Aspen",
    "Keystone",
    "Copper Mountain",
    "Telluride",
    "Winter Park",
    "Steamboat Springs",
    "Silverton Mountain"
],
"slopes": {
    "description": "Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you're a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you're carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience."
},
"ski_season": {
    "description": "Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer."
},
"shopping_restaurants": {
    "description": "Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you'll find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes."
},
"special_facts": [
    "Home to the highest ski resorts in North America",
    "Many resorts are part of the Epic Pass, which offers access to multiple resorts",
    "Colorado receives an average of 300 inches of snow annually",
    "First ski lift was installed in Sun Valley in 1936"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Sleigh Rides",
    "Cross-Country Skiing",
    "Hot Springs"
]
},
{
    "_id": 2,
    "name": "Vermont",
    "image": "vermont-page.jpg",
    "detail_image": "dest-vermont.jpg",
    "title": "Ski Vermont",
    "resorts": [
    "Killington",
    "Stowe Mountain Resort",
    "Sugarbush Resort",
    "Okemo Mountain Resort",
    "Jay Peak Resort",
    "Burke Mountain Resort",
    "Mount Snow",
    "Smugglers' Notch Resort",
    "Mad River Glen"
],
"slopes": {
    "description": "Vermont ski resorts offer an exhilarating winter experience with long trails and abundant powder, perfect for skiing and snowboarding enthusiasts. However, being on the East Coast, skiers should also prepare for icy conditions, especially on steeper slopes. The frigid temperatures ensure quality snow, making Vermont a top destination for those seeking both thrilling runs and stunning mountain views."
},
"ski_season": {
    "description": "In Vermont, the ski season generally kicks off in late November and lasts until mid-April, with the best conditions often found between December and March. Early season skiing may begin in late November, weather permitting, while March offers milder temperatures and extended daylight for enjoyable spring skiing. Thanks to Vermont's consistent snowfall and efficient snowmaking, skiers can look forward to a diverse season filled with everything from fresh powder to perfectly groomed trails."
},
"shopping_restaurants": {
    "description": "Vermont ski resorts offer a vibrant array of shopping and dining options, making your visit both enjoyable and convenient. You’ll find shops selling local crafts, ski gear, and apparel, perfect for picking up unique souvenirs or necessary equipment. Dining options abound, with meals available at the bottom and middle of the slopes, as well as at the top, allowing you to refuel without straying far from your skiing adventures. However, it’s worth noting that dining at these resorts tends to be on the pricier side."
},
"special_facts": [
    "Vermont is home to over 20 ski areas, each offering a unique blend of terrain",
    "Vermont receives an impressive average of 200 to 300 inches of natural snowfall each season",
    "Hosts several historic ski areas, including Mad River Glen, which is known for its classic, natural skiing experience",
    "While fresh powder is common, skiers may also experience “ice days” due to fluctuations in temperature"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 3,
    "name": "Utah",
    "image": "utah-page.jpg",
    "detail_image": "dest-utah.jpg",
    "title": "Ski Utah",
    "resorts": [
    "Park City",
    "Deer Valley",
    "Snowbird",
    "Alta Ski Area",
    "Brighton Resort",
    "Solitude Mountain Resort",
    "Snowbasin Resort"
],
"slopes": {
    "description": "Utah's ski slopes are famous for their exceptional quality and diverse terrain, offering something for every level of skier and snowboarder. Known for its light, dry powder. The slopes are meticulously groomed and well-maintained. From the challenging runs at Snowbird and Alta to the family-friendly terrain at Brighton and Park City, Utah's ski resorts provide breathtaking mountain views and a wide range of options, ensuring an unforgettable experience for winter sports enthusiasts."
},
"ski_season": {
    "description": "The ski season in Utah typically begins in mid to late November and runs through mid-April, depending on the weather and snowfall. With an average annual snowfall of over 500 inches in some areas, the state is known for its dry, powdery snow that provides excellent skiing conditions. The peak season occurs from late December to March, when resorts are bustling with skiers and snowboarders taking advantage of the abundant snow."
},
"shopping_restaurants": {
    "description": "Utah ski resorts offer an exciting combination of shopping and dining that complements the winter adventure. Guests can explore quaint shops featuring top-notch ski equipment and unique local crafts. The dining scene is diverse, with options ranging from casual slope-side cafes to upscale restaurants that highlight farm-to-table cuisine and provide breathtaking mountain views."
},
"special_facts": [
    "Utah hosted the 2002 Winter Olympics, and many ski resorts, including Park City and Snowbasin, were venues for Olympic events",
    "Many Utah ski resorts are located near stunning national parks, such as Zion and Arches",
    "Utah is renowned for its light, dry powder, often referred to as the Greatest Snow on Earth.",
    "Utah boasts over 14 ski resorts, offering diverse terrain suitable for all skill levels"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Winter Hiking",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 4,
    "name": "Maine",
    "image": "maine-page.jpg",
    "detail_image": "dest-maine.jpg",
    "title": "Ski Maine",
    "resorts": [
    "Sunday River",
    "Sugarloaf",
    "Saddleback Maine",
    "Camden Snow Bowl",
    "Loon Mountain",
    "Big Rock Mountain"
],
"slopes": {
    "description": "Maine's ski slopes feature a stunning blend of natural beauty and diverse terrain, from rugged snowfields and glades to bowls and steeps. Sugarloaf, the largest resort, is renowned for its above-treeline skiing, while Sunday River excels in snowmaking and grooming. With picturesque mountain views and powdery surfaces, the slopes cater to all skill levels."
},
"ski_season": {
    "description": "Maine's ski season typically kicks off in late November and lasts through mid-April, offering plenty of opportunities for winter sports enthusiasts to hit the slopes. With an average annual snowfall of over 200 inches, resorts like Sugarloaf and Sunday River benefit from abundant, powdery snow that enhances the skiing experience. The peak season generally falls between late December and February when conditions are at their best and resorts are bustling with activity."
},
"shopping_restaurants": {
    "description": "Maine's ski resorts combine adventure with local charm, offering unique shops and restaurants that highlight the state's culture. Visitors can enjoy fresh Maine seafood at slope-side restaurants, from lobster rolls to clam chowder, alongside hearty meals. Quaint boutiques feature local crafts and top-tier ski gear, adding to the authentic experience. With dining options from the base to the summit, Maine's resorts provide the perfect balance of winter sports and New England flavors."
},
"special_facts": [
    "Maine companies were among the first to create skis and ski boots in the United States",
    "Maine has produced several Olympic athletes, and its ski resorts have hosted various national and international competitions",
    "Several Maine ski resorts prioritize family-oriented activities and programs",
    "Sugarloaf is Maine's largest ski resort and features the highest skiable peak in the state, with an elevation of 4,237 feet"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 5,
    "name": "New York",
    "image": "ny-page.jpg",
    "detail_image": "dest-ny.jpg",
    "title": "Ski New York",
    "resorts": [
    "Whiteface Mountain",
    "Gore Mountain",
    "Hunter Mountain",
    "Windham Mountain",
    "Mount Peter",
    "Belleayre Mountain"
],
"slopes": {
    "description": "New York's ski slopes offer a diverse range of experiences, from the challenging terrains of Whiteface Mountain, with the highest vertical drop in the East, to the family-friendly trails at Mount Peter. Resorts like Hunter and Gore Mountain provide well-groomed runs and scenic views, making them ideal for all skill levels. With a mix of powdery trails and well-maintained conditions, skiers can enjoy everything from exhilarating descents to gentle glades."
},
"ski_season": {
    "description": "New York's ski season typically runs from late November to early April, providing ample time for winter sports enthusiasts to hit the slopes. With consistent snowfall and advanced snowmaking technology, resorts like Whiteface and Gore Mountain ensure excellent skiing conditions throughout the season. Peak times, especially around the holidays and February, see the mountains bustling with skiers and snowboarders. "
},
"shopping_restaurants": {
    "description": "New York's ski resorts offer a unique blend of shopping and dining experiences that elevate any winter adventure. Visitors can meander through quaint shops filled with ski essentials, artisanal crafts, and locally made goods, perfect for finding that special memento or gift. The dining scene is equally diverse, with options ranging from casual eateries serving comfort food like chili and burgers to elegant restaurants showcasing gourmet dishes, including fresh seafood and farm-to-table specialties. Many resorts also feature après-ski lounges where guests can unwind by the fire, enjoy live music, and indulge in handcrafted cocktails or hot drinks."
},
"special_facts": [
    "New York is home to Whiteface Mountain, which hosted the 1980 Winter Olympics and is known for its challenging runs and impressive vertical drop",
    "Many of New York’s ski resorts are within a few hours' drive from major urban centers like New York City and Albany",
    "New York ski resorts are equipped with advanced snowmaking technology, ensuring excellent conditions even during less snowy winters",
    "New York offers numerous cross-country skiing trails, particularly in the Adirondacks"
],
"activities": [
    "Ice Skating",
    "Winter Festivals",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 6,
    "name": "Canada",
    "image": "canada-page.jpg",
    "detail_image": "dest-canada.jpg",
    "title": "Ski Canada",
    "resorts": [
    "Whistler Blackcomb",
    "Mont Tremblant",
    "Jasper Ski Resort",
    "Blue Mountain Resort",
    "Big White Ski Resort",
    "Mount Baker",
    "Kicking Horse Mountain Resort"
],
"slopes": {
    "description": "Canada's ski slopes are renowned for their breathtaking beauty and diverse terrain, catering to skiers and snowboarders of all skill levels. From the challenging verticals of Whistler Blackcomb in British Columbia to the picturesque trails of Banff and Lake Louise in the Rockies, the country boasts over 200 ski resorts. Many slopes are famous for their exceptional powder snow, with resorts like Revelstoke and Big White offering some of the best conditions in North America. Whether you’re gliding down groomed runs, exploring backcountry terrain, or enjoying stunning alpine views, Canada's ski slopes provide an unforgettable winter experience."
},
"ski_season": {
    "description": "Ski season in Canada typically runs from late November through April, offering a lengthy window for winter sports enthusiasts to enjoy the slopes. With consistently cold temperatures and abundant snowfall, ski resorts across the country, from British Columbia to Quebec, create ideal conditions for skiing and snowboarding. Each region boasts its unique charm, with breathtaking mountain scenery and a variety of terrains to explore. Popular resorts like Whistler Blackcomb and Banff see bustling activity during peak holiday periods, while quieter mid-week days provide a more relaxed atmosphere."
},
"shopping_restaurants": {
    "description": "Canada’s ski resorts are a treasure trove of shopping and dining experiences that complement the thrill of winter sports. Visitors can browse through boutique shops and local markets, where they’ll find everything from the latest ski gear to handcrafted souvenirs that capture the spirit of the region. Culinary offerings are equally enticing, with a variety of eateries ranging from casual bistros dishing up classic comfort foods to upscale restaurants that serve innovative dishes made with fresh, local ingredients. Many resorts also provide inviting après-ski spots, where guests can relax with a warm beverage or a creative cocktail while enjoying live entertainment."
},
"special_facts": [
    "Canada is home to some of the largest and most famous ski resorts in the world, including Whistler Blackcomb",
    "Canada has hosted the Winter Olympics twice, in Calgary (1988) and Vancouver (2010)",
    "In addition to downhill skiing, Canada offers extensive opportunities for snowshoeing and cross-country skiing",
    "Skiing in Canada often provides opportunities to see unique wildlife, such as elk and deer"
],
"activities": [
    "Heli-Skiing and Cat Skiing",
    "Snowshoeing",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 7,
    "name": "California",
    "image": "california-page.jpg",
    "detail_image": "california.jpg",
    "title": "Ski California",
    "resorts": [
    "Mammoth Mountain",
    "Sugar Bowl",
    "Bear Valley",
    "Mt. Baldy",
    "Snow Valley"
],
"slopes": {
    "description": "From the expansive, powder-filled runs of Mammoth Mountain to the scenic, beginner-friendly slopes at Big Bear Lake, there's something for everyone. Lake Tahoe resorts boast long, groomed trails with stunning lake views, while Kirkwood is known for its challenging, expert-level runs and deep powder. Whether you prefer gentle slopes for a relaxed day on the mountain or steep, thrilling descents."
},
"ski_season": {
    "description": "Ski season in California typically runs from late November through April, with the best conditions often found from January to March. The state experiences a mix of weather patterns, resulting in a variety of snow conditions. In the Sierra Nevada mountains, resorts like Mammoth Mountain receive abundant snowfall, often exceeding 400 inches annually, providing excellent powder days. In contrast, areas like Lake Tahoe may experience a mix of powder and sunny days, leading to corn snow as the season progresses. The milder temperatures and sunny skies in Southern California resorts, such as Big Bear Lake, make for a pleasant skiing experience, though they can result in faster melting and shorter seasons."
},
"shopping_restaurants": {
    "description": "California ski resorts offer a vibrant selection of shopping and dining options, ensuring visitors can enjoy both après-ski relaxation and unique local experiences. At resorts like Mammoth Mountain and Lake Tahoe, you'll find charming boutiques selling everything from high-quality ski gear to handcrafted souvenirs. Dining options range from casual eateries serving comfort food, such as burgers and pizzas, to upscale restaurants featuring seasonal and locally sourced dishes. While prices can vary, expect to pay a premium for dining in resort areas, particularly at fine dining establishments where a meal can be quite expensive. Accessibility is generally good, with many restaurants and shops located within walking distance of ski lifts or conveniently situated in base villages."
},
"special_facts": [
    "Mammoth Mountain is one of the highest ski resorts in California, with an elevation of over 11,000 feet",
    "California's ski resorts can experience significant weather variations, ranging from sunny days to heavy snowstorms",
    "California played a significant role in the evolution of snowboarding, with the sport gaining popularity in the 1980s at resorts like Bear Mountain",
    "Several California ski resorts are committed to sustainability and environmental stewardship"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
},
{
    "_id": 8,
    "name": "Washington",
    "image": "washington-page.jpg",
    "detail_image": "washington.jpg",
    "title": "Ski Washington",
    "resorts": [
    "Crystal Mountain Resorts",
    "Stevens Pass",
    "Mount Baker Ski Area",
    "49 Degrees North",
    "White Pass",
    "Loup Loup Ski Bowl"
],
"slopes": {
    "description": "Washington's ski slopes offer a diverse array of terrain, from the expansive runs at Crystal Mountain to the powder-laden trails at Mount Baker. The state's ski resorts typically experience a mix of weather conditions, with the Cascade Mountains often receiving significant snowfall, making for excellent powder skiing. The season generally runs from late November to early April, with the best conditions found from January to March. Skiers can expect a variety of snow types, ranging from light, fluffy powder to heavier, wetter snow, particularly in the lower elevations."
},
"ski_season": {
    "description": "The state's ski resorts, nestled in the Cascade Mountains, enjoy substantial snowfall, averaging over 400 inches annually at many locations, particularly at Mount Baker. This abundant snow provides excellent powder days, appealing to skiers and snowboarders of all skill levels. While the weather can vary significantly—from sunny bluebird days to snowy storms—Washington’s mountains ensure a reliable winter playground, offering everything from groomed trails to thrilling off-piste adventures."
},
"shopping_restaurants": {
    "description": "Washington ski resorts provide a vibrant array of shopping and dining options for guests looking to enhance their winter experience. At popular spots like Mount Baker and White Pass, you’ll discover cozy shops offering ski apparel, equipment, and unique souvenirs that capture the essence of the Pacific Northwest. Dining venues range from casual diners to elegant restaurants, many featuring local flavors and seasonal ingredients. After a day on the slopes, guests can savor delicious meals, including hearty chili, fresh seafood, and decadent desserts, all set against breathtaking mountain backdrops."
},
"special_facts": [
    "Many of Washington's ski resorts, including Snoqualmie Pass and Stevens Pass, are just a short drive from Seattle",
    "Washington is home to the first ski resort in the United States, Stevens Pass, which opened in 1937",
    "Washington has a strong ski culture, with many local ski clubs and organizations promoting winter sports and providing resources for skiers of all levels",
    "Many ski resorts in Washington are located near local breweries and distilleries"
],
"activities": [
    "Ice Skating",
    "Snowshoeing",
    "Snowmobiling",
    "Cross-Country Skiing",
    "Sledding and Tubing"
]
}
];*/

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/locations", async (req,res) => {
    const locations = await Location.find();
    res.send(locations);
});

app.get("/api/locations/:id", async (req,res) => {
    const location = await Location.findOne({_id: id });
    res.send(location);
});

app.post("/api/locations", upload.single("img"), async (req, res) => {
    const result = validateLocation(req.body);
  
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
      return;
    }
  
    const location = new Location ({
      name: req.body.name,
    });
  
    if (req.file) {
      location.image = req.file.filename;
    }
  
    const newLocation = await location.save();
    res.send(newLocation);
  });

  app.put("/api/locations/:id", upload.single("img"), async (req,res) => {
    const result = validateLocation(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    let fieldsToUpdate = {
    name: req.body.name
    };

    if (req.file) {
        fieldsToUpdate.image = req.file.filename;
    }

    const wentThrough = await Location.updateOne(
        { _id: req.params.id },
        fieldsToUpdate
    );

    const updatedLocation = await Location.findOne({ _id: req.params.id });
    res.send(updatedLocation);
  });
  
  app.delete("/api/locations/:id", async (req,res)=>{
    console.log("im in");
    console.log(req.params.id);
    const location = await Location.findByIdAndDelete(req.params.id);
    res.send(location);
  });

const validateLocation = (location) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
    });
    return schema.validate(location);
}

app.listen(3001, () => {
    console.log("Listening....");
});