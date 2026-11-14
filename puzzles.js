// Middle Ground — the daily star maps.
// Each day has 5 pairs. Each pair: [word 1, word 2, answers]
// Answers are grouped by tier, separated by "|", easiest first:
//   Satellite (10) | Moon (25) | Comet (50) | Nebula (75) | Supernova (100)
// Inside a tier, answers are separated by commas. Plurals match automatically (wave = waves).
// To add your own answer, just add it to the tier you think fits.

export const PUZZLES = [
// ---- Day 1
[
  ["Ocean","Desert","sand,water,hot,dry,wave,salt|dune,vast,wind,horizon,heat,blue,empty|storm,camel,erosion,shell,fossil,nomad|mirage,thirst,expanse,seabed,wilderness|fata morgana,ship of the desert,dead sea"],
  ["Clock","Heart","beat,tick,time,rhythm,pulse|hand,face,ticking,second,stop|pendulum,alarm,pace,tock,count,timing|metronome,ticker,stopwatch|tin man"],
  ["Snow","Sugar","white,crystal,powder,flake,sweet|icing,frosting,sprinkle,melt,fluffy,dust|cone,granule,glaze,flurry,cotton candy|pea,maple,candy floss|snap pea,taffy"],
  ["Bee","Hospital","sting,needle,busy,buzz,allergy|nurse,worker,shift,swelling,epipen|stinger,emergency,swarm,anaphylaxis,buzzer|manuka,venom,colony|drone"],
  ["Ship","Bottle","message,model,sea,float,glass,water|cork,launch,champagne,cargo,rum|wreck,pirate,mast,christening,sail,neck|tweezers,miniature,hobby|flotsam"],
],
// ---- Day 2
[
  ["Moon","Cheese","round,yellow,full,crater,hole|white,phase,swiss,wheel,slice|wallace,mouse,cow,myth,legend|wensleydale,gromit,green cheese|crescent roll"],
  ["Fire","Dragon","hot,flame,breath,burn,smoke|red,heat,scale,blaze,inferno|cave,spark,ember,lava,lizard,fly|phoenix,ash,salamander,chinese new year|komodo,snapdragon"],
  ["Library","Cave","quiet,dark,silent,book,echo|shelf,stack,dust,old,history|hermit,explore,archive,knowledge,hidden|treasure,scroll,secret,lantern,bat|dead sea scrolls,plato"],
  ["Penguin","Waiter","tuxedo,black,white,suit,bow tie|formal,waddle,serve,fish,tray|uniform,bow,tie,dinner,elegant|tails,coattail,emperor|batman,oswald"],
  ["Volcano","Soda","eruption,explode,fizz,bubble,pop|lava,gas,pressure,burst,overflow|mentos,science project,baking soda,foam,shake|vinegar,magma,carbon dioxide,geyser|pompeii,diet coke"],
],
// ---- Day 3
[
  ["King","Chess","crown,queen,castle,throne,royal,piece|rule,power,game,board,check,checkmate|knight,bishop,pawn,win,move,strategy|kingdom,palace,command,lead|tactic,battle"],
  ["Rain","Umbrella","wet,water,drop,cloud,storm,cover|dry,shelter,open,shower,weather,grey|drizzle,puddle,coat,hood,rainy day,raincoat|wind,forecast,splash|singing,mary poppins"],
  ["Coffee","Morning","wake up,cup,breakfast,caffeine,mug,energy|early,alarm,hot,drink,start,tired|sunrise,brew,latte,espresso,routine,toast|newspaper,yawn,commute|jolt,ritual"],
  ["Spider","Internet","web,net,online,crawl,link,network|site,www,surf,connect,thread,catch|bug,virus,mouse,click,silk,trap|crawler,bot,worldwide|dark web,spider man"],
  ["Gold","Pirate","treasure,coin,chest,map,rich,ship|loot,bury,ring,earring,jewel,steal|island,booty,money,sea,captain,x|doubloon,plunder,parrot,hook|galleon,blackbeard"],
],
// ---- Day 4
[
  ["Apple","Teacher","school,red,desk,gift,fruit,class|lesson,student,pupil,classroom,learn,teach|core,bite,healthy,knowledge,pie,lunch|polish,computer,eve,newton|teacher's pet,big apple"],
  ["Ice","Diamond","cold,clear,shine,sparkle,cube,hard|crystal,rock,frozen,bright,glitter,cool|ring,cut,glass,white,pure,expensive|carat,jewel,transparent,frost|bling,ice ice baby"],
  ["Tree","Book","leaf,page,paper,wood,branch,read|bark,root,trunk,story,cover,green|forest,leaves,chapter,library,family,grow|spine,pulp,log,ring|novel,fiction"],
  ["Cat","Pyramid","egypt,sphinx,pharaoh,ancient,mummy,desert|god,temple,sand,cleopatra,nile,tomb|statue,triangle,gold,worship,curse,history|bastet,hieroglyph,goddess,king|anubis,ra"],
  ["Rocket","Firework","launch,explode,boom,sky,fly,fire|bang,space,blast,spark,light,smoke|countdown,fuse,flame,loud,night,bright|gunpowder,trail,celebration,new year|bottle rocket,liftoff"],
],
// ---- Day 5
[
  ["Baby","Bottle","milk,feed,drink,cry,formula,small|nipple,warm,sip,hungry,newborn,mom|burp,bib,diaper,night,nurse,lid|infant,teat,crib,juice|sippy cup,pacifier"],
  ["Shark","Lawyer","bite,teeth,suit,money,court,sue|aggressive,fin,predator,attack,hunt,smell|jaw,blood,danger,ruthless,smart,greedy|loan,tank,tooth,fee|loan shark,great white"],
  ["Rose","Thorn","red,flower,prick,sharp,pain,stem|petal,love,garden,pink,bush,pretty|bud,bloom,cut,valentine,romance,blood|beauty,poke,bleed,hurt|sleeping beauty,thorny"],
  ["Star","Hollywood","famous,fame,movie,film,actor,celebrity|walk of fame,shine,bright,sign,red carpet,rich|oscar,award,tv,sky,spotlight,glamour|camera,director,premiere,autograph|a list,hills"],
  ["Mountain","Ladder","climb,top,high,step,up,peak|height,summit,tall,steep,fall,goal|rope,hike,rung,reach,ascent,view|sky,difficult,altitude,success|everest,career"],
],
// ---- Day 6
[
  ["Banana","Lemon","yellow,fruit,peel,sour,sweet,juice,smoothie,tree,tropical|slice,fresh,healthy,vitamin,market,shop,bright,curve|monkey,lemonade,split,pie,citrus,squeeze|bunch,zest,potassium,acid|minion,tart"],
  ["Snow","Milk","white,cold,drink,winter,cow,glass|pure,ice,fridge,cream,soft,frozen,cereal,cookie|snowman,bottle,carton,flake,melt,shake|calcium,dairy,blizzard,powder|milky way,frost"],
  ["Fire","Sun","hot,heat,burn,bright,light,yellow,orange,warm,red|flame,glow,shine,fire,sunburn,summer,day,sky|star,energy,camp,smoke,sweat,danger|solar,blaze,lava,inferno|phoenix,helios"],
  ["Cat","Dog","pet,animal,tail,fur,paw,cute,friend,home|meow,bark,play,food,vet,collar,leash,toy|chase,whisker,puppy,kitten,sleep,cuddle|fight,rescue,adopt,bowl|garfield,snoopy"],
  ["Car","Bicycle","wheel,ride,road,drive,travel,seat,tire,fast|pedal,engine,gear,brake,helmet,traffic,park,street|chain,horn,bell,speed,race,trip|garage,license,lane,commute|tour de france,formula one"],
],
// ---- Day 7
[
  ["Pizza","Burger","food,cheese,fast food,eat,lunch,dinner,tasty,hot|tomato,sauce,meat,bread,delivery,junk food,restaurant,order|fries,slice,bun,ketchup,party,friday|pepperoni,mcdonald's,onion,combo|domino's,big mac"],
  ["Rain","Shower","water,wet,drop,splash,cold,warm,clean,cloud|bath,wash,soap,storm,pour,drip,umbrella,towel|puddle,head,bathroom,weather,hair,sing|drizzle,steam,downpour,spray|baby shower,april showers"],
  ["Book","Phone","read,screen,page,text,story,words,learn,school|chat,message,app,news,library,call,write,game|novel,ebook,kindle,word,letter,touch|contact,notebook,facebook,address|phone book,kindle"],
  ["Moon","Star","night,sky,space,shine,bright,light,dark,twinkle|planet,galaxy,astronaut,dream,wish,sleep,lunar,glow|crescent,shooting star,sun,telescope,orbit,silver|constellation,universe,cosmos,nasa|twinkle twinkle,goodnight moon"],
  ["Bee","Butterfly","fly,wing,flower,insect,garden,spring,pollen,bug|honey,nectar,colorful,yellow,buzz,summer,small,pretty|caterpillar,hive,sting,meadow,stripe,flutter|pollinate,monarch,antenna,queen|metamorphosis,bumblebee"],
],
// ---- Day 8
[
  ["Ice cream","Cake","sweet,dessert,birthday,party,chocolate,vanilla,cream,sugar|candle,cold,cone,frosting,slice,scoop,treat,yummy|sprinkles,strawberry,bakery,fridge,celebrate,spoon|sundae,cherry,layer,wedding|ice cream cake,baskin robbins"],
  ["Ocean","Swimming pool","water,swim,blue,wet,wave,splash,dive,deep|summer,beach,salt,chlorine,float,towel,lifeguard,sun|goggles,shark,fish,tan,cool,swimsuit|surf,diving board,lane,snorkel|olympics,michael phelps"],
  ["Teacher","Doctor","help,job,school,hospital,care,learn,student,patient|smart,coat,office,teach,heal,class,clinic,work|degree,nurse,exam,test,book,advice|university,profession,lesson,checkup|dr,professor"],
  ["Bread","Cheese","sandwich,food,toast,eat,yellow,breakfast,slice,lunch|butter,pizza,bake,grill,cheddar,melt,mouse,mold|crust,wine,dairy,baguette,loaf,burger|grilled cheese,toastie,fondue,croissant|cheese toast,cheese on toast"],
  ["Tiger","Lion","cat,big cat,wild,jungle,roar,animal,zoo,predator|stripe,mane,king,orange,claw,teeth,strong,hunt|africa,india,fierce,brave,pride,meat|safari,circus,cub,savannah|liger,simba"],
],
// ---- Day 9
[
  ["Coffee","Tea","drink,hot,cup,morning,mug,caffeine,cafe,brew|milk,sugar,warm,break,energy,kettle,bag,leaf|bean,green,black,latte,espresso,biscuit|steam,herbal,mocha,breakfast|starbucks,earl grey"],
  ["Chair","Bed","sit,sleep,rest,furniture,wood,soft,comfy,home|room,pillow,lie,cushion,leg,relax,nap,sofa|bedroom,table,blanket,frame,lazy,tired|mattress,couch,armchair,stool|throne,hammock"],
  ["Apple","Orange","fruit,juice,round,healthy,red,tree,sweet,fresh|peel,eat,snack,vitamin,seed,orchard,market,citrus|apple pie,pie,slice,bite,smoothie,basket|fruit salad,grove,vitamin c,core|apples and oranges,big apple"],
  ["Shoe","Sock","foot,feet,wear,pair,walk,clothes,lace,step|run,sneaker,cotton,leather,smell,left,right,toe|boot,heel,sandal,closet,warm,laundry|slipper,ankle,stocking,insole|nike,adidas"],
  ["Football","Basketball","ball,sport,game,team,play,score,player,win|goal,net,court,field,kick,throw,coach,fan|match,league,shoot,jersey,whistle,stadium|nba,world cup,dribble,referee|messi,lebron"],
],
// ---- Day 10
[
  ["Pen","Pencil","write,draw,paper,school,ink,lead,note,desk|sharp,eraser,colour,color,office,sketch,homework,letter|blue,black,pocket,cap,signature,sharpener|marker,crayon,stationery,notebook|ballpoint,graphite"],
  ["Rain","Snow","weather,cold,cloud,fall,water,wet,winter,storm|umbrella,drop,flake,white,grey,sky,forecast,melt|puddle,boots,coat,ice,slush,season|hail,sleet,blizzard,drizzle|precipitation,april"],
  ["Lion","King","crown,royal,leader,power,strong,rule,throne,brave|jungle,pride,gold,roar,queen,boss,proud,mane|kingdom,simba,palace,castle,army,heart|lion king,mufasa,majesty,courage|richard,lionheart"],
  ["Phone","Computer","screen,internet,app,game,email,type,online,call|keyboard,mouse,laptop,charge,battery,wifi,click,text|apple,google,technology,video,camera,password|download,update,software,windows|iphone,mac"],
  ["Ice","Glass","cold,clear,cube,drink,water,break,cool,transparent|slippery,window,shine,crack,frozen,smooth,sharp,shatter|cup,freeze,lemonade,cocktail,juice,straw|frost,crystal,mirror,reflect|on the rocks,icy"],
],
// ---- Day 11
[
  ["Doctor","Nurse","hospital,help,care,patient,sick,medicine,health,heal|uniform,clinic,injection,needle,check,coat,emergency,ambulance|bandage,pill,shift,surgery,mask,scrubs|stethoscope,ward,prescription,vaccine|er,grey's anatomy"],
  ["Sand","Sugar","white,grain,sweet,beach,small,tiny,pour,crystal|brown,desert,castle,dessert,cake,bucket,granule,sprinkle|candy,cookie,glass,salt,shake,spoon|hourglass,dune,cube,powder|sandpaper,brown sugar"],
  ["Cloud","Sheep","white,fluffy,soft,cotton,sky,wool,round,puffy|count,sleep,dream,farm,field,float,rain,grey|lamb,shepherd,grass,blue,weather,herd|cumulus,shearing,storm,meadow|counting sheep,cloud nine"],
  ["Clock","Watch","time,hour,minute,second,tick,hand,wall,wrist|alarm,late,early,face,number,battery,gold,gift|tock,timer,digital,schedule,morning,deadline|rolex,smartwatch,stopwatch,dial|big ben,apple watch"],
  ["Fish","Bird","animal,swim,fly,water,sky,nest,egg,sea|fin,wing,tail,scale,feather,pet,cage,tank|ocean,tree,lake,beak,river,food|seagull,penguin,flying fish,parrot|duck,pelican"],
],
// ---- Day 12
[
  ["Hat","Shoe","wear,head,foot,clothes,fashion,style,shop,size|cap,sneaker,boot,sun,rain,winter,summer,leather|hood,sock,heel,top hat,brand,cowboy|scarf,glove,jacket,closet|horseshoe,fedora"],
  ["Volcano","Mountain","high,tall,rock,climb,peak,top,big,hill|lava,fire,smoke,snow,hot,erupt,ash,island|hike,cliff,earth,stone,crater,view|everest,range,magma,summit|vesuvius,fuji"],
  ["Ship","Plane","travel,trip,fly,sail,ride,vacation,pilot,captain|sea,sky,ocean,airport,port,ticket,passenger,engine|cruise,boat,wing,cabin,crew,deck|cargo,jet,anchor,runway|titanic,boeing"],
  ["Candy","Chocolate","sweet,sugar,treat,dessert,yummy,snack,brown,bar|kids,halloween,shop,gift,box,wrapper,teeth,dentist|lollipop,gum,cookie,cake,milk,valentine|cocoa,caramel,toffee,easter|willy wonka,m&m"],
  ["Bread","Butter","toast,breakfast,slice,knife,spread,yellow,soft,warm|bake,sandwich,jam,food,milk,cow,loaf,dairy|honey,bakery,cream,salt,margarine,bun|croissant,popcorn,peanut butter,pancake|bread and butter,butterfly"],
],
// ---- Day 13
[
  ["Penguin","Polar bear","cold,ice,snow,white,arctic,antarctica,animal,winter|fish,swim,zoo,black,fur,freeze,cute,south|north,igloo,glacier,iceberg,seal,climate|pole,blizzard,frozen,tundra|happy feet,coca cola"],
  ["Hamburger","Hot dog","food,bun,fast food,meat,ketchup,mustard,bbq,lunch|grill,bread,fries,eat,sausage,cheese,picnic,stand|onion,pickle,relish,party,summer,sauce|cookout,diner,cart,fair|mcdonald's,nathan's"],
  ["Spoon","Fork","eat,food,kitchen,table,metal,silver,cutlery,dinner|knife,plate,bowl,soup,meal,dish,lunch,eating|scoop,stab,salad,cereal,pasta,drawer|utensil,chopsticks,spork,dining|silverware,flatware"],
  ["Sun","Beach","hot,summer,sand,holiday,vacation,swim,tan,warm|sunscreen,towel,wave,ocean,sea,relax,bright,umbrella|sunglasses,palm tree,shell,sunburn,surf,ice cream|sunset,tropical,island,heat|bikini,lifeguard"],
  ["Tree","Flower","plant,green,grow,leaf,garden,nature,seed,root|water,soil,sun,spring,branch,petal,forest,park|bloom,pollen,bee,blossom,stem,rose|oak,bud,orchard,bouquet|cherry blossom,photosynthesis"],
],
// ---- Day 14
[
  ["Guitar","Piano","music,play,instrument,song,sound,note,band,concert|string,key,keyboard,chord,lesson,tune,rock,melody|singer,guitarist,pianist,practice,loud,soft|acoustic,electric,grand,classical|beethoven,jimi hendrix"],
  ["Cow","Goat","milk,farm,animal,grass,horn,cheese,moo,field|barn,eat,hay,meat,dairy,village,leather,herd|farmer,kid,calf,goat cheese,beard,graze|milking,ranch,pasture,udder|greatest of all time,ox"],
  ["Bus","Train","travel,ride,ticket,station,seat,passenger,driver,public|stop,city,route,transport,commute,school,late,fast|track,wheel,window,rail,crowd,metro|subway,timetable,conductor,schedule|choo choo,double decker"],
  ["Soup","Tea","hot,warm,drink,bowl,cup,steam,liquid,sick|spoon,water,boil,winter,cozy,cold,herb,lemon|chicken,ginger,mint,honey,kettle,stove|broth,soothing,healing,green|chicken soup,comfort"],
  ["Baby","Puppy","cute,small,cry,play,sleep,cuddle,love,young|tiny,soft,new,milk,diaper,toy,crawl,care|bark,adorable,family,blanket,bottle,ball|newborn,innocent,teeth,nap|puppy love,bundle of joy"],
],
// ---- Day 15
[
  ["Ice cream","Snow","cold,white,winter,freeze,frozen,ice,cool,melt|cone,scoop,flake,snowman,vanilla,soft,dessert,sweet|brain freeze,storm,chill,shiver,sledge,ball|blizzard,frost,igloo,sundae|dairy queen,snow cone"],
  ["Mouse","Elephant","animal,big,small,tiny,huge,grey,trunk,tail|cheese,ear,scared,afraid,zoo,africa,squeak,peanut|circus,jungle,fear,run,heavy,light|dumbo,mickey,ivory,rodent|elephant and mouse,jerry"],
  ["Hospital","School","building,learn,teacher,doctor,nurse,student,patient,bed|class,ward,lesson,book,care,help,bell,uniform|exam,test,lunch,clinic,principal,emergency|campus,graduate,surgery,cafeteria|grey's anatomy,high school"],
  ["Milk","Cookie","dunk,dip,snack,sweet,chocolate chip,santa,glass,treat|white,cow,bake,oven,crumb,cold,kids,night|oreo,sugar,dairy,breakfast,cupcake,jar|christmas,cookie monster,grandma,bedtime|milk and cookies,chips ahoy"],
  ["Sea","Sky","blue,big,wide,wave,cloud,bird,fish,water|ocean,horizon,deep,high,sun,boat,wind,storm|air,swim,fly,beach,sunset,endless|seagull,reflection,infinite,breeze|big blue,azure"],
],
// ---- Day 16
[
  ["Rose","Heart","love,red,valentine,romance,gift,pink,kiss,date|flower,beauty,pretty,couple,wedding,card,feel,beat|petal,thorn,emoji,chocolate,sweetheart,poem|bouquet,crush,passion,forever|heartbreaker,rose petal"],
  ["Pizza","Pasta","italian,italy,food,cheese,tomato,sauce,dinner,restaurant|chef,eat,oven,olive oil,garlic,basil,spaghetti,slice|parmesan,mozzarella,lasagna,noodle,flour,carb|rome,naples,pesto,marinara|mamma mia,margherita"],
  ["Bat","Owl","night,fly,dark,bird,wing,animal,sleep,cave|tree,nocturnal,halloween,moon,eye,hunt,quiet,hoot|vampire,mouse,bug,feather,forest,scary|echolocation,wise,spooky,insect|batman,hedwig"],
  ["King","Queen","crown,royal,throne,palace,castle,rule,kingdom,gold|prince,princess,power,chess,card,jewel,crown jewels,england|marry,wife,husband,royalty,royal family,lady|monarch,majesty,coronation,court|elizabeth,charles"],
  ["Train","Car","travel,ride,drive,road,track,wheel,engine,fast|seat,trip,journey,ticket,passenger,station,traffic,speed|horn,fuel,rail,petrol,commute,tunnel|motor,steam,toy,garage|thomas,toyota"],
],
// ---- Day 17
[
  ["Spider","Ant","bug,insect,small,leg,legs,tiny,crawl,creepy|web,colony,hill,eight,six,black,garden,house|scary,bite,queen,nest,sugar,picnic|arachnid,tarantula,worker,tunnel|spider man,ant-man"],
  ["Bridge","Road","cross,car,drive,travel,river,traffic,way,path|street,highway,toll,bus,walk,map,city,build|tunnel,lane,sign,truck,connect,journey|asphalt,concrete,motorway,route|golden gate,route 66"],
  ["Kite","Plane","fly,sky,air,wind,high,wing,cloud,up|string,pilot,tail,float,airport,soar,glide,blue|paper,travel,beach,park,ticket,bird|aviation,jet,altitude,runway|wright brothers,red baron"],
  ["Cheese","Mouse","yellow,hole,trap,eat,small,squeak,smell,cat|cheddar,swiss,rat,hungry,steal,kitchen,cartoon,tiny|cracker,crumb,mice,mousetrap,nibble,pizza|tom and jerry,brie,mozzarella,gouda|jerry,stuart little"],
  ["Chef","Kitchen","cook,food,knife,oven,stove,recipe,restaurant,dinner|apron,hat,pan,pot,spoon,taste,fire,chop|menu,boil,fry,bake,meal,spice|sous chef,master chef,ingredient,gordon ramsay|ratatouille,hell's kitchen"],
],
// ---- Day 18
[
  ["Egg","Chicken","farm,bird,hen,breakfast,eat,food,lay,fry|chick,yolk,nest,feather,omelette,shell,meat,cluck|which came first,boil,hatch,coop,rooster,scramble|egg roll,poultry,fried,protein|kfc,easter"],
  ["Dog","Wolf","howl,bark,pack,animal,fur,tail,teeth,wild|bite,grey,forest,pet,hunt,moon,paw,run|loyal,husky,cousin,growl,night,smell|canine,predator,alpha,fang|werewolf,lassie"],
  ["Lemon","Lime","sour,citrus,fruit,green,yellow,juice,squeeze,drink|slice,tart,zest,acid,lemonade,vitamin c,fresh,cocktail|peel,tea,soda,tree,sharp,wedge|mojito,margarita,tangy,key lime pie|sprite,7up"],
  ["Tooth","Brush","clean,teeth,toothpaste,dentist,morning,night,smile,white|mouth,bristle,brush teeth,floss,minty,wash,bathroom,cavity|toothbrush,hair,comb,paint,gum,fresh|hygiene,enamel,electric,braces|tooth fairy,colgate"],
  ["Snake","Worm","long,crawl,slither,dirt,ground,thin,animal,grass|soil,garden,bird,rain,hole,earth,move,green|scale,venom,fish,bait,hiss,tongue|reptile,earthworm,wiggle,burrow|python,anaconda"],
],
// ---- Day 19
[
  ["Sun","Lamp","light,bright,shine,glow,warm,heat,day,night|yellow,hot,bulb,read,room,energy,switch,lamp shade|sunlight,electric,desk,power,dark,shadow|solar,lantern,beam,illuminate|aladdin,genie"],
  ["Witch","Wizard","magic,spell,wand,hat,potion,broom,cast,cauldron|harry potter,hogwarts,black,owl,cat,book,cloak,witchcraft|halloween,castle,curse,dark,green,school|sorcerer,magician,merlin,enchant|gandalf,hermione"],
  ["Rocket","Spaceship","space,fly,launch,astronaut,nasa,moon,star,mars|blast,orbit,planet,galaxy,alien,ship,sky,fast|countdown,engine,fuel,crew,mission,captain|spacex,shuttle,universe,cosmos|apollo,star wars"],
  ["Cake","Pie","dessert,sweet,bake,oven,slice,sugar,party,birthday|apple,cherry,cream,chocolate,fruit,crust,flour,pastry|birthday cake,pumpkin,thanksgiving,candle,fork,plate|bakery,lemon,frosting,piece|pie chart,piece of cake"],
  ["Tennis","Badminton","racket,net,ball,court,sport,play,game,serve|shuttlecock,match,hit,score,point,swing,player,singles|wimbledon,doubles,smash,tournament,olympic,white|federer,racquet,birdie,rally|serena,nadal"],
],
// ---- Day 20
[
  ["Tiger","Zebra","stripe,stripes,black,orange,wild,animal,zoo,white|jungle,africa,pattern,fast,savannah,predator,prey,run|cat,horse,safari,camouflage,hunt,claw|tiger king,marty,madagascar,grass|tony,tigger"],
  ["Bottle","Cup","drink,water,juice,glass,plastic,pour,milk,coffee|cap,lid,tea,thirsty,sip,holder,baby,wine|bin,recycle,straw,soda,kitchen,table|mug,flask,beverage,refill|sippy cup,world cup"],
  ["Robot","Computer","machine,technology,program,code,ai,smart,metal,future|robotics,science,electric,battery,screen,keyboard,chip,brain|android,data,calculate,automatic,factory,game|artificial intelligence,cyborg,algorithm,processor|wall-e,terminator"],
  ["Desert","Beach","sand,hot,sun,dry,dune,summer,heat,yellow|camel,wave,ocean,sea,palm tree,cactus,thirst,water|shell,towel,holiday,oasis,sahara,storm|mirage,vast,sunburn,coast|dubai,sahara"],
  ["Jacket","Blanket","warm,cold,winter,cover,soft,cozy,wool,wrap|coat,sleep,bed,zip,fleece,fabric,thick,hug|snow,hood,pocket,warmth,cotton,night|duvet,quilt,parka,layer|snuggie,puffer"],
],
// ---- Day 21
[
  ["Grass","Frog","green,jump,pond,garden,field,hop,lawn,nature|wet,rain,water,lily pad,ribbit,croak,leap,small|kermit,toad,bug,fly,swamp,cut|tadpole,meadow,amphibian,prince|kermit the frog,leapfrog"],
  ["Clown","Circus","funny,red nose,laugh,joke,juggle,tent,show,funny face|balloon,makeup,costume,big shoes,crowd,ring,ticket,popcorn|acrobat,elephant,lion,trapeze,colorful,wig|ringmaster,carnival,magic,unicycle|it,ronald mcdonald"],
  ["Pillow","Bed","sleep,soft,night,rest,dream,comfy,nap,tired|blanket,sheet,head,lie,cozy,mattress,feather,white|bedroom,cover,fight,morning,lazy,warm|duvet,pyjamas,bedtime,snooze|pillow fight,goodnight"],
  ["Football","Goal","score,net,kick,ball,team,game,win,keeper|shoot,match,player,field,stadium,fan,cheer,celebrate|penalty,striker,referee,world cup,league,assist|goalkeeper,hat trick,free kick,offside|messi,ronaldo"],
  ["Thunder","Lightning","storm,rain,loud,sky,flash,cloud,bolt,boom|scary,light,weather,dark,electric,night,bright,strike|thor,zeus,danger,power,hurricane,wind|electricity,rumble,thunderstorm,forecast|mcqueen,flash"],
],
// ---- Day 22
[
  ["Popcorn","Movie","cinema,film,snack,butter,salt,theater,watch,night|screen,ticket,seat,dark,soda,date,friends,netflix|trailer,candy,bucket,actor,sofa,weekend|blockbuster,premiere,couch,remote|imax,hollywood"],
  ["Watermelon","Strawberry","fruit,red,sweet,summer,seed,juicy,fresh,green|pink,slice,smoothie,juice,salad,picnic,healthy,cold|ice cream,jam,berry,farm,cream,dessert|vine,patch,shortcake,milkshake|strawberry fields,harry styles"],
  ["Doll","Teddy bear","toy,soft,play,child,kid,cute,gift,hug|girl,boy,bear,plush,bed,stuffed,friend,birthday|barbie,shop,dress,fur,button eye,cuddle|childhood,collector,porcelain,stuffed animal|barbie,winnie the pooh"],
  ["Pirate","Ship","sea,ocean,sail,treasure,captain,boat,flag,water|crew,map,island,gold,parrot,hook,sword,anchor|black flag,plank,storm,wave,deck,mast|skull,cannon,jolly roger,navy|black pearl,jack sparrow"],
  ["Gold","Silver","metal,shiny,money,coin,jewelry,ring,medal,rich|precious,shine,necklace,bar,olympics,prize,expensive,treasure|first,second,watch,earring,mine,bank|bullion,ounce,karat,polish|gold medal,silver lining"],
],
// ---- Day 23
[
  ["Bear","Bee","honey,sweet,hive,yellow,forest,pooh,sting,buzz|black,brown,tree,nature,bumble,sticky,jar,hungry|winnie the pooh,picnic,flower,summer,wild,fur|honeycomb,nectar,grizzly,teddy|pooh,baloo"],
  ["Shark","Whale","ocean,sea,big,swim,fish,water,fin,tail|blue,deep,teeth,grey,huge,giant,dive,wave|jaws,predator,mammal,dolphin,boat,splash|orca,killer whale,plankton,blubber|nemo"],
  ["Paint","Crayon","color,draw,art,picture,paper,kid,school,brush|red,blue,bright,artist,wall,canvas,create,box|rainbow,wax,colouring book,mix,messy,water|palette,sketch,pastel,mural|crayola,picasso"],
  ["Water","Juice","drink,glass,cup,cold,bottle,thirsty,liquid,healthy|orange,apple,fresh,breakfast,ice,pour,fruit,sip|straw,fridge,sugar,lemon,squeeze,refreshing|hydrate,smoothie,beverage,carton|h2o,capri sun"],
  ["Night","Dark","black,sleep,moon,star,sky,shadow,scary,quiet|bed,dream,owl,bat,midnight,late,lamp,cold|ghost,fear,blind,flashlight,candle,night light|darkness,nocturnal,evening,gloomy|batman,nightmare"],
],
// ---- Day 24
[
  ["Horse","Donkey","animal,farm,ride,carry,tail,hoof,run,grey|saddle,barn,ear,hay,farmer,stubborn,donkey ride,kick|shrek,race,field,cart,brown,mane|mule,pony,stable,neigh|eeyore,trojan horse"],
  ["Toothpaste","Soap","clean,wash,bubble,foam,fresh,bathroom,white,morning|brush,mint,shower,smell,hands,teeth,tube,bar|germ,hygiene,shampoo,sink,splash,scrub|lather,colgate,dove,froth|mr clean,suds"],
  ["Island","Boat","sea,ocean,water,sail,beach,palm tree,travel,holiday|wave,fish,swim,captain,trip,sand,sun,shore|pirate,treasure,ferry,anchor,coast,stranded|harbor,lighthouse,castaway,cruise|robinson crusoe,gilligan"],
  ["Lightbulb","Idea","bright,think,smart,light,brain,genius,new,invent|switch,creative,eureka,lamp,glow,clever,solution,plan|flash,brainstorm,shine,electric,thomas edison,problem|inspiration,innovation,lightbulb moment,aha|edison,tesla"],
  ["Chocolate","Coffee","brown,dark,sweet,bitter,hot,drink,bean,cocoa|milk,sugar,cup,cream,mocha,cake,morning,energy|caffeine,dessert,latte,bar,hot chocolate,mug|espresso,brownie,cafe,tiramisu|starbucks,nutella"],
],
// ---- Day 25
[
  ["Wolf","Fox","animal,wild,forest,tail,fur,howl,hunt,red|sly,clever,pack,grey,night,run,fast,smart|cub,den,predator,chicken,ear,teeth|cunning,canine,snow,woods|little red riding hood,fantastic mr fox"],
  ["Mirror","Window","glass,clear,look,see,reflection,view,clean,shine|frame,wall,house,face,light,crack,break,curtain|bathroom,glass pane,open,close,sun,bright|reflect,transparent,shatter,frost|windows,looking glass"],
  ["Bicycle","Horse","ride,saddle,pedal,wheel,legs,fast,travel,race|seat,trot,gallop,road,farm,helmet,kick,brake|tail,chain,stable,park,exercise,carry|cyclist,jockey,stirrup,reins|tour de france,cowboy"],
  ["Party","Wedding","dance,music,cake,celebrate,dress,fun,guest,gift|invitation,food,drink,friends,family,happy,balloon,photo|ring,bride,groom,song,dj,speech|reception,toast,ceremony,suit|honeymoon,bachelor"],
  ["Pencil","Ruler","school,desk,draw,line,measure,math,straight,wood|write,pen,eraser,bag,teacher,homework,sharp,inch|centimeter,geometry,triangle,lesson,test,class|stationery,protractor,compass,graph|pencil case,metre"],
],
// ---- Day 26
[
  ["Rainbow","Crayon","color,colors,red,blue,bright,draw,yellow,green|purple,orange,pink,box,art,kid,pretty,school|rain,sun,sky,paper,wax,picture|spectrum,colourful,shade,crayola|roy g biv,unicorn"],
  ["Oven","Fire","hot,heat,burn,cook,bake,warm,flame,kitchen|bread,pizza,temperature,smoke,stove,dinner,wood,coal|grill,roast,toast,danger,glow,red|furnace,campfire,fireplace,chimney|brick oven,fire alarm"],
  ["Banana","Monkey","yellow,eat,jungle,tree,fruit,peel,food,climb|zoo,tropical,hungry,funny,bunch,ape,swing,smart|jump,tail,africa,minion,cheeky,gorilla|chimp,curious george,donkey kong,king kong|banana split,tarzan"],
  ["Soccer","Basketball","ball,sport,team,game,score,net,goal,play|player,court,field,kick,shoot,throw,coach,fan|jersey,match,referee,whistle,stadium,league|dribble,world cup,nba,olympics|messi,jordan"],
  ["Bread","Toast","breakfast,butter,slice,jam,brown,warm,crunchy,eat|toaster,bake,morning,sandwich,egg,honey,crust,white|french toast,avocado,burnt,cheese,coffee,loaf|grill,cinnamon,crumb,baguette|toastie,garlic bread"],
],
// ---- Day 27
[
  ["Sheep","Goat","farm,animal,wool,grass,horn,field,milk,baa|herd,lamb,kid,cheese,meat,fur,hill,mountain|farmer,shepherd,dog,fence,climb,eat|graze,pasture,shear,mutton|dolly,greatest of all time"],
  ["Car","Truck","drive,road,wheel,engine,vehicle,travel,fast,big|fuel,tire,traffic,driver,parking,license,garage,highway|cargo,delivery,pickup,horn,speed,petrol|diesel,motor,transport,haul|optimus prime,ford"],
  ["Sun","Moon","sky,light,day,night,round,shine,bright,space|star,planet,orbit,earth,sunset,sunrise,glow,yellow|eclipse,full moon,crescent,phase,hot,cold|solar,lunar,tide,horizon|sun and moon,apollo"],
  ["Library","School","book,read,learn,study,quiet,student,teacher,class|desk,homework,exam,shelf,pencil,knowledge,test,lesson|librarian,bell,lunch,bag,notebook,computer|university,education,campus,research|hogwarts,dewey"],
  ["Pumpkin","Halloween","orange,scary,october,costume,candy,carve,ghost,witch|jack o lantern,spooky,seed,pie,trick or treat,night,party,bat|face,candle,patch,autumn,fall,harvest|cinderella,scarecrow,haunted,soup|charlie brown,hocus pocus"],
],
// ---- Day 28
[
  ["Bee","Honey","sweet,yellow,hive,buzz,sting,flower,jar,sticky|bear,nectar,pollen,gold,insect,wax,queen,comb|honeycomb,spring,garden,tea,toast,syrup|beekeeper,worker,colony,manuka|winnie the pooh,bumblebee"],
  ["Tree","Paper","wood,white,write,book,leaf,forest,green,cut|draw,notebook,print,newspaper,pencil,trunk,branch,recycle|pulp,bark,origami,letter,sheet,card|lumber,factory,paper mill,toilet paper|amazon,deforestation"],
  ["Mountain","Snow","white,cold,high,peak,top,winter,ice,climb|ski,snowboard,hike,freeze,view,cliff,storm,frozen|avalanche,alps,everest,glacier,summit,cabin|altitude,yeti,snowcap,blizzard|frozen,swiss alps"],
  ["Sandwich","Burger","bread,lunch,food,meat,cheese,lettuce,tomato,bun|ham,sauce,ketchup,eat,fast food,layer,delicious,picnic|mayo,pickle,onion,toast,chicken,club|subway,mcdonald's,deli,bacon|big mac,blt"],
  ["Pencil","Eraser","write,draw,school,rub,erase,paper,mistake,pink|sharp,lead,homework,desk,rubber,pen,note,sketch|sharpener,clean,correct,delete,grey,exam|stationery,graphite,smudge,test|pencil case,wite-out"],
],
// ---- Day 29
[
  ["Snowman","Carrot","nose,orange,winter,snow,cold,frosty,olaf,hat|scarf,vegetable,button,stick,coal,eye,smile,white|rabbit,eat,frozen,carrot nose,winter fun,melt|christmas,garden,root,build|olaf,frosty the snowman"],
  ["Elephant","Giraffe","tall,big,animal,zoo,africa,safari,wild,long|neck,trunk,grey,yellow,spot,tree,leaf,savannah|ear,tusk,heavy,herd,huge,eat|mammal,jungle,ivory,tallest|dumbo,madagascar"],
  ["Tea","Cake","afternoon,sweet,party,cup,slice,snack,tea party,biscuit|sugar,cream,cookie,cafe,friends,dessert,warm,milk|scone,jam,london,saucer,plate,fork|british,lemon,birthday,cupcake|alice,mad hatter"],
  ["Rain","Tears","water,drop,wet,cry,sad,cloud,eye,fall|storm,grey,face,cheek,emotion,weep,sorrow,wipe|heavy,stream,salty,umbrella,tissue,pain|teardrop,downpour,mourn,heartbreak|tears in rain,purple rain"],
  ["Clock","Alarm","time,wake up,morning,ring,loud,late,early,bed|snooze,hour,minute,phone,school,work,sleep,tick|beep,noise,watch,timer,six,seven|annoying,tired,schedule,deadline|fire alarm,big ben"],
],
// ---- Day 30
[
  ["Fish","Shark","sea,ocean,swim,water,fin,tail,teeth,blue|fish tank,big,small,scale,bite,eat,predator,danger|nemo,dory,jaws,coral,gill,hunt|aquarium,reef,deep sea,school|finding nemo,baby shark"],
  ["Ball","Balloon","round,play,bounce,air,party,kid,toy,red|blow,pop,throw,catch,birthday,colorful,light,float|helium,kick,string,game,fly,sport|inflate,rubber,sphere,beach ball|football,99 red balloons"],
  ["Doctor","Medicine","sick,pill,hospital,health,cure,help,patient,heal|nurse,prescription,pharmacy,ill,fever,cold,flu,tablet|syrup,injection,care,clinic,stethoscope,checkup|vaccine,dose,antibiotic,treatment|paracetamol,doctor who"],
  ["Pyramid","Camel","egypt,desert,sand,hot,ancient,pharaoh,ride,dry|cairo,sphinx,nile,sun,history,travel,hump,tourist|mummy,tomb,giza,stone,water,sahara|bedouin,caravan,triangle,oasis|cleopatra,tutankhamun"],
  ["Soap","Towel","bath,shower,wash,clean,wet,dry,water,bathroom|hands,body,soft,fresh,smell,foam,bubble,hotel|beach,pool,swim,face,rack,sink|lather,cotton,hygiene,spa|bath time,shower gel"],
],
// ---- Day 31
[
  ["Pineapple","Coconut","tropical,fruit,island,beach,palm,sweet,juice,summer|hawaii,yellow,brown,hard,spiky,milk,cocktail,smoothie|pina colada,holiday,tree,hairy,coast,vacation|caribbean,shell,husk,crown|spongebob,pina colada"],
  ["Fork","Knife","cut,eat,food,steak,dinner,table,kitchen,metal|sharp,plate,spoon,cutlery,meal,silver,blade,dish|restaurant,butter,stab,slice,drawer,set|utensil,chopsticks,silverware,carve|knife and fork,swiss army"],
  ["Glasses","Eye","see,look,vision,blind,read,lens,sight,optician|blink,sunglasses,frame,blurry,clear,contact lens,glasses case,doctor|test,nerd,smart,face,nose,ear|eyesight,short sighted,long sighted,monocle|harry potter,clark kent"],
  ["Ocean","Fish","water,swim,sea,blue,deep,wave,salt,shark|fin,tail,scale,nemo,coral,reef,net,boat|fisherman,whale,dolphin,octopus,crab,shell|aquarium,deep sea,seaweed,school|finding nemo,the little mermaid"],
  ["Christmas","Winter","snow,cold,december,santa,gift,tree,holiday,family|snowman,present,light,decoration,sledge,scarf,ice,party|reindeer,elf,carol,stocking,hot chocolate,fireplace|new year,mistletoe,jingle bells,frosty|frozen,polar express"],
],
// ---- Day 32
[
  ["Pizza","Cheese","melt,yellow,mozzarella,slice,italian,food,hot,tomato|cheddar,pepperoni,oven,delivery,dough,crust,sauce,box|parmesan,stretchy,mushroom,olive,party,friday|margherita,stuffed crust,toppings,napoli|domino's,pizza hut"],
  ["Bird","Plane","fly,sky,wing,air,high,cloud,travel,up|feather,engine,pilot,nest,airport,tail,fast,flight|seagull,eagle,jet,glide,soar,landing|migrate,altitude,runway,airline|superman,boeing"],
  ["Rope","Snake","long,thin,twist,coil,tie,climb,curve,hang|knot,brown,green,grass,jungle,venom,hiss,scale|lasso,cowboy,python,jump,pull,tug of war|cobra,anaconda,tightrope,charmer|indiana jones,boa"],
  ["Swing","Slide","playground,park,kid,play,fun,child,go,ride|school,sand,high,low,back,forth,down,up|seesaw,climb,jump,push,chain,fall|recess,water slide,swing set,jungle gym|playtime,monkey bars"],
  ["Hammer","Nail","hit,bang,wood,build,tool,metal,sharp,fix|board,wall,toolbox,carpenter,construction,hang,picture,pound|screw,thumb,ouch,head,steel,workshop|drill,saw,wrench,hardware|thor,nail it"],
],
// ---- Day 33
[
  ["Cookie","Biscuit","sweet,snack,crunchy,bake,chocolate,tea,eat,crumb|sugar,oven,butter,jar,milk,dunk,round,treat|chocolate chip,oreo,flour,grandma,ginger,cream|cracker,shortbread,oatmeal,dough|cookie monster,digestive"],
  ["Car","Plane","travel,engine,drive,fly,trip,seat,fast,wheel|pilot,driver,road,sky,airport,fuel,ticket,window|seatbelt,traffic,speed,crash,holiday,journey|vehicle,petrol,runway,passenger|top gun,formula one"],
  ["Duck","Swan","bird,pond,lake,swim,white,water,feather,wing|quack,beak,bread,park,float,neck,pretty,elegant|duckling,goose,river,fly,graceful,ballet|swan lake,ugly duckling,donald duck,mallard|daffy,ugly duckling"],
  ["Sock","Glove","warm,wool,pair,winter,cold,hand,foot,lost|knit,cotton,soft,finger,toe,wear,clothes,laundry|missing,scarf,hat,mitten,hole,drawer|puppet,thermal,stocking,leather|sock puppet,baseball glove"],
  ["Ice","Fridge","cold,cool,freeze,frozen,water,cube,kitchen,food|freezer,drink,milk,chill,white,door,ice cream,store|magnet,fresh,leftovers,snack,juice,shelf|refrigerator,frost,ice maker,cooler|fridge magnet,frozen"],
],
// ---- Day 34
[
  ["Orange","Carrot","orange,vegetable,fruit,healthy,juice,eat,vitamin,round|sweet,crunchy,rabbit,peel,color,garden,market,salad|soup,smoothie,cake,carrot cake,root,snack|beta carotene,citrus,vitamin c,nose|bugs bunny,snowman"],
  ["Spider","Web","spin,silk,trap,catch,fly,net,bug,eight|leg,creepy,corner,sticky,thin,house,insect,scary|halloween,cobweb,spider man,internet,hairy,dust|tarantula,arachnid,weave,charlotte|charlotte's web,www"],
  ["Bus","School","kid,student,ride,yellow,morning,driver,bag,teacher|stop,late,seat,friend,bell,class,lesson,home|homework,uniform,trip,road,lunch,wait|field trip,timetable,crossing,backpack|magic school bus,school bus"],
  ["Sun","Sunglasses","bright,summer,hot,beach,eye,light,shade,cool|uv,sunny,holiday,glare,protect,sky,dark,fashion|sunscreen,pool,vacation,hat,tan,style|aviator,ray ban,squint,polarized|top gun,men in black"],
  ["Turtle","Snail","slow,shell,small,crawl,green,home,animal,back|garden,hide,pet,old,carry,lazy,patience,steady|race,rabbit,hare,leaf,tortoise,turtle neck|slime,pond,reptile,hard|ninja turtles,gary"],
],
// ---- Day 35
[
  ["Teacher","Student","school,class,learn,lesson,book,teach,study,exam|homework,desk,grade,test,board,pen,classroom,question|answer,university,college,bag,principal,smart|education,lecture,graduate,knowledge|harry potter,dumbledore"],
  ["Rain","Rainbow","color,sky,sun,cloud,storm,weather,wet,arc|bright,drop,umbrella,after,beautiful,light,red,blue|pot of gold,seven,spring,shine,puddle,arch|unicorn,leprechaun,spectrum,drizzle|over the rainbow,roy g biv"],
  ["Pirate","Treasure","gold,map,chest,ship,island,captain,dig,sea|coin,x,hidden,bury,parrot,sword,hook,rich|jewel,ocean,sail,loot,cave,secret|treasure hunt,booty,plunder,galleon|treasure island,jack sparrow"],
  ["Mouse","Keyboard","computer,click,type,desk,screen,laptop,key,mouse pad|cable,wire,button,office,game,cursor,scroll,wireless|letter,usb,typing,gaming,space bar,enter|qwerty,trackpad,hotkey,shortcut|logitech,ctrl"],
  ["Strawberry","Cherry","red,fruit,sweet,small,juice,summer,pie,cake|seed,stem,jam,berry,pick,cream,smoothie,milkshake|pink,ice cream,tart,sundae,cocktail,blossom|cheesecake,lollipop,heart,orchard|cherry on top,strawberry fields"],
],
// ---- Day 36
[
  ["Ghost","Skeleton","scary,halloween,dead,bone,white,spooky,boo,costume|night,grave,haunt,fear,horror,dark,creepy,bones|skull,spirit,cemetery,zombie,castle,body|graveyard,undead,afterlife,phantom|casper,jack skellington"],
  ["Camera","Phone","photo,picture,selfie,screen,video,lens,zoom,flash|record,take,snap,instagram,memory,click,smile,battery|tiktok,film,memory card,battery,gallery,filter|pixel,shutter,photographer,album|iphone,kodak"],
  ["Jungle","Forest","tree,green,wild,animal,nature,leaf,wood,dark|lion,tiger,monkey,bird,river,rain,adventure,explore|vine,path,lost,bear,deer,camp|rainforest,amazon,tarzan,mowgli|jungle book,robin hood"],
  ["Juice","Smoothie","drink,fruit,healthy,fresh,cold,glass,orange,apple|banana,strawberry,blender,breakfast,straw,sweet,vitamin,cup|mango,yogurt,milk,ice,blend,green|detox,kale,protein,shake|jamba juice,innocent"],
  ["Car","Racing","fast,speed,drive,track,win,engine,race,road|driver,formula,wheel,crash,helmet,flag,lap,fuel|f1,pit stop,trophy,turbo,tire,finish|grand prix,nascar,ferrari,checkered flag|lightning mcqueen,fast and furious"],
],
// ---- Day 37
[
  ["Wind","Kite","fly,sky,blow,air,high,breeze,string,park|tail,cloud,soar,beach,summer,float,colorful,day|storm,up,paper,windy,spin,gust|hurricane,tornado,wind chime,windmill|mary poppins,charlie brown"],
  ["Cat","Lion","cat,whisker,claw,tail,roar,meow,big,paw|mane,feline,jungle,pet,king,fur,hunt,teeth|kitten,cub,yellow,purr,zoo,africa|pride,predator,wild,jump|garfield,simba"],
  ["Cake","Candle","birthday,party,wish,blow,light,celebrate,fire,flame|age,sweet,dessert,gift,song,count,happy,cream|frosting,wax,match,surprise,anniversary,number|make a wish,celebration,decoration,smoke|happy birthday,birthday cake"],
  ["Ocean","Sand","beach,wave,water,sea,summer,swim,shell,sun|blue,yellow,salt,castle,shore,tide,holiday,towel|crab,bucket,footprint,surf,seagull,warm|coast,dune,island,bay|beach day,sandcastle"],
  ["Robot","Alien","space,future,metal,green,strange,machine,ufo,science fiction|planet,laser,ship,invade,monster,film,cartoon,toy|beep,mars,spaceship,eyes,android,cyborg|extraterrestrial,galaxy,technology,sci-fi|et,r2-d2"],
],
// ---- Day 38
[
  ["Bee","Wasp","sting,buzz,yellow,black,fly,insect,stripe,ouch|hive,nest,honey,summer,garden,flower,pain,wing|queen,worker,swarm,picnic,scary,danger|pollen,hornet,allergy,colony|bumblebee,yellowjacket"],
  ["Frog","Fish","water,pond,swim,green,lake,jump,river,wet|fin,tail,egg,tadpole,scale,bug,fly,splash|gill,net,pet,aquarium,lily pad,frog legs|amphibian,croak,stream,swamp|kermit,nemo"],
  ["Ice","Skate","cold,winter,rink,glide,slide,frozen,lake,snow|hockey,figure skating,spin,fall,blade,boot,smooth,olympics|pond,shoe,skateboard,penguin,slip,dance|zamboni,triple axel,skater,frozen lake|frozen,disney on ice"],
  ["Lamp","Candle","light,dark,glow,night,bright,room,fire,flame|bulb,wax,switch,warm,read,table,shade,wick|electric,lighter,match,smoke,dinner,romantic|lantern,flashlight,chandelier,torch|aladdin,genie"],
  ["Bread","Bakery","bake,oven,flour,dough,fresh,smell,warm,loaf|baker,cake,shop,morning,croissant,bun,roll,slice|sandwich,yeast,butter,pastry,donut,cookie|baguette,sourdough,muffin,crust|french,boulangerie"],
],
// ---- Day 39
[
  ["Dragon","Dinosaur","big,scary,old,monster,tail,wing,fire,scale|giant,claw,teeth,roar,extinct,egg,green,fly|t rex,fossil,legend,myth,cave,story|lizard,reptile,jurassic,fantasy|godzilla,jurassic park"],
  ["Rain","Cloud","grey,sky,storm,water,drop,weather,wet,dark|thunder,umbrella,fall,sun,white,fluffy,cold,wind|rainy,puddle,forecast,drizzle,blue,lightning|cumulus,downpour,monsoon,mist|silver lining,cloud nine"],
  ["Pizza","Party","food,friends,slice,birthday,fun,eat,cheese,box|music,delivery,celebrate,dance,night,cake,soda,game|movie,friday,weekend,pepperoni,balloon,share|sleepover,guests,invite,snacks|pizza party,domino's"],
  ["Chair","Table","furniture,wood,sit,leg,kitchen,dinner,desk,home|room,eat,meal,office,four legs,set,dining,lamp|family,homework,plate,cloth,stool,sofa|ikea,bench,furniture store,restaurant|round table,musical chairs"],
  ["Sun","Summer","hot,warm,bright,holiday,beach,swim,sunny,tan|vacation,ice cream,sunscreen,pool,heat,sky,light,shine|sunglasses,picnic,camp,barbecue,sweat,june|july,august,sunshine,heatwave|endless summer,sunburn"],
],
// ---- Day 40
[
  ["Banana","Apple","fruit,eat,healthy,sweet,peel,snack,tree,yellow|red,green,pie,juice,vitamin,lunch,fresh,core|smoothie,bunch,basket,orchard,bite,market|potassium,fiber,tropical,crunchy|apple pie,banana split"],
  ["Owl","Night","dark,moon,hoot,sleep,bird,star,eye,tree|wise,quiet,nocturnal,hunt,fly,awake,sky,shadow|night owl,forest,mouse,feather,late,midnight|nightfall,moonlight,silent,owl eyes|hedwig,goodnight"],
  ["Hat","Head","wear,cap,top,hair,cover,sun,cool,fashion|style,crown,helmet,warm,winter,summer,baseball cap,brain|top hat,cowboy hat,beanie,hood,scarf,think|fedora,sombrero,beret,wig|sorting hat,hat trick"],
  ["Ladder","Stairs","climb,up,down,step,steps,high,top,floor|house,building,fall,rung,roof,tall,go up,climb up|elevator,escalator,attic,basement,wood,metal|staircase,stepladder,landing,railing|stairway to heaven,snakes and ladders"],
  ["Shoe","Boot","foot,wear,walk,leather,lace,heel,feet,pair|run,size,shop,step,winter,rain,mud,cowboy|sneaker,sole,sandal,hiking,fashion,brand|footwear,timberland,ugg,rubber|puss in boots,nike"],
],
// ---- Day 41
[
  ["Phone","Letter","message,write,send,call,talk,text,mail,post|stamp,envelope,friend,news,read,words,contact,reply|email,chat,postman,paper,hello,address|communication,penpal,postcard,dear|love letter,phone call"],
  ["Cupcake","Muffin","bake,sweet,small,cake,breakfast,blueberry,chocolate,oven|frosting,sprinkle,party,cup,bakery,paper,treat,snack|vanilla,coffee,morning,icing,cream,dessert|batter,banana,birthday,cherry|muffin top,cupcake wars"],
  ["Bird","Nest","egg,tree,branch,baby,fly,chick,home,feather|twig,leaf,build,sing,mom,spring,hatch,straw|robin,eagle,worm,high,hide,family|nesting,flight,wing,birdhouse|empty nest,angry birds"],
  ["Football","Stadium","crowd,fan,match,game,cheer,ticket,team,goal|seat,field,grass,score,player,loud,chant,sing|flag,scarf,goalkeeper,referee,league,win|world cup,champions league,kickoff,anthem|wembley,camp nou"],
  ["Milk","Cow","farm,white,drink,moo,dairy,grass,cheese,field|barn,milkshake,cream,butter,fresh,calf,farmer,bucket|glass,cereal,spot,udder,yogurt,breakfast|pasture,herd,calcium,dairy farm|chocolate milk,milky way"],
],
// ---- Day 42
[
  ["Grapes","Wine","purple,red,green,vine,fruit,drink,juice,bottle|glass,bunch,france,italy,sweet,sour,raisin,farm|vineyard,cheese,party,dinner,barrel,cork|harvest,winery,champagne,tasting|bacchus,napa"],
  ["Lightning","Electricity","power,energy,shock,bolt,flash,spark,bright,light|storm,electric,danger,current,wire,battery,charge,zap|thunder,static,plug,volt,lamp,sky|tesla,power line,generator,circuit|benjamin franklin,pikachu"],
  ["Chocolate","Easter","egg,bunny,sweet,candy,spring,basket,hunt,rabbit|gift,kids,sunday,april,chick,hide,treat,cocoa|holiday,church,family,yellow,ribbon,wrapper|easter egg,hot cross bun,cadbury,lindt|easter bunny,egg hunt"],
  ["Kangaroo","Rabbit","jump,hop,ear,tail,animal,fast,legs,cute|australia,pouch,baby,grass,carrot,field,bounce,run|joey,bunny,jumping,fluffy,brown,grey|marsupial,burrow,boxing,easter|roo,bugs bunny"],
  ["Desert","Cactus","hot,dry,sand,green,sun,spike,thorn,water|prickly,sharp,plant,heat,camel,thirsty,dune,arizona|mexico,flower,succulent,needle,rain,sahara|saguaro,oasis,arid,tumbleweed|texas,road runner"],
],
// ---- Day 43
[
  ["Ice cream","Ice cube","cold,frozen,freeze,ice,cool,melt,summer,water|drink,cone,scoop,fridge,freezer,sweet,glass,chill|lemonade,dessert,vanilla,tray,clear,white|brain freeze,cooler,frost,popsicle|ice ice baby,on the rocks"],
  ["Pig","Mud","dirty,farm,pink,messy,brown,wet,roll,oink|barn,dirt,rain,splash,bath,boots,smell,field|piglet,puddle,snout,tail,hot,cool|pigsty,swamp,hog,muddy|peppa pig,babe"],
  ["Sun","Flower","yellow,bright,grow,summer,plant,garden,petal,warm|sunflower,seed,green,spring,light,pretty,bee,field|bloom,stem,leaf,vase,rose,daisy|photosynthesis,pollen,bouquet,meadow|van gogh,tulip"],
  ["Boat","Fish","water,sea,lake,ocean,river,swim,net,float|fishing,fisherman,rod,catch,hook,sail,wave,fin|captain,dock,bait,deep,tuna,salmon|harbor,trawler,anchor,fishing boat|jaws,old man and the sea"],
  ["Clock","Tower","tall,time,big ben,high,london,bell,old,city|ring,hour,building,stone,church,castle,top,view|minute,landmark,famous,climb,chime,face|clocktower,steeple,turret,belfry|big ben,elizabeth tower"],
],
// ---- Day 44
[
  ["Tent","Camping","outdoor,nature,forest,sleep,night,fire,camp,trip|sleeping bag,stars,lake,hike,bag,family,friends,cold|campfire,marshmallow,bear,mountain,adventure,flashlight|backpack,woods,lantern,picnic|scouts,boy scouts"],
  ["Tomato","Ketchup","red,sauce,fries,burger,food,eat,bottle,sweet|hot dog,pasta,pizza,salad,vegetable,fruit,squeeze,sauce bottle|heinz,mayo,mustard,chips,dip,fast food|vine,salsa,paste,soup|heinz,sriracha"],
  ["Train","Station","ticket,travel,platform,wait,railway,track,arrive,leave|passenger,commute,city,late,crowd,bag,map,clock|subway,metro,conductor,whistle,bench,sign|underground,timetable,carriage,departure|grand central,king's cross"],
  ["Ring","Wedding","marry,gold,love,diamond,bride,groom,finger,proposal|couple,engagement,ceremony,dress,church,vow,party,kiss|forever,husband,wife,jewel,silver,band|honeymoon,anniversary,engaged,romance|lord of the rings,ring bearer"],
  ["Moon","Night","dark,sky,star,sleep,light,shine,full moon,quiet|bright,owl,dream,wolf,howl,cold,bed,late|crescent,glow,silver,midnight,shadow,calm|lunar,moonlight,nocturnal,evening|goodnight moon,twilight"],
],
// ---- Day 45
[
  ["Witch","Broom","fly,magic,sweep,halloween,clean,stick,spell,black|cat,hat,potion,night,moon,cauldron,dust,floor|harry potter,quidditch,green,ride,wand,scary|broomstick,sweeping,cobweb,spooky|wicked witch,hocus pocus"],
  ["Swim","Pool","water,wet,summer,dive,splash,blue,float,cool|lane,goggles,swimsuit,towel,lifeguard,chlorine,deep,shallow|race,laps,sun,hot,fun,olympics|backstroke,breaststroke,freestyle,water polo|michael phelps,marco polo"],
  ["Sugar","Salt","white,crystal,taste,food,cook,kitchen,grain,shake|sweet,salty,spoon,bake,cake,chips,sea,jar|cube,coffee,tea,pepper,recipe,season|seasoning,shaker,granule,brine|salt and pepper,brown sugar"],
  ["Clock","Phone","time,alarm,screen,hour,minute,check,wake up,morning|call,ring,tick,battery,watch,late,digital,app|timer,notification,wall,night,schedule,number|smartphone,stopwatch,countdown,calendar|apple,big ben"],
  ["Baby","Crib","sleep,bed,small,night,cry,nap,blanket,mom|toy,mobile,soft,nursery,bottle,diaper,lullaby,dream|pillow,teddy,wake,crawl,rock,cozy|infant,newborn,cradle,bassinet|rock a bye baby,lullaby"],
],
// ---- Day 46
[
  ["Bee","Flower","pollen,nectar,honey,spring,garden,yellow,buzz,petal|insect,pretty,bloom,fly,summer,sweet,field,colorful|sunflower,rose,daisy,sting,meadow,hive|pollinate,lavender,tulip,blossom|bumblebee,maya the bee"],
  ["Snow","Ski","winter,cold,mountain,white,slope,sport,ice,holiday|snowboard,boots,poles,lift,jacket,goggles,fall,speed|alps,cabin,hot chocolate,lodge,powder,downhill|avalanche,resort,chalet,snowplough|olympics,swiss alps"],
  ["Phone","Charger","battery,power,plug,cable,charge,low,full,wire|usb,electric,socket,energy,dead,phone call,screen,wall|wireless,fast charge,adapter,cord,percent,night|power bank,lightning,type c,outlet|iphone,samsung"],
  ["Ocean","Whale","big,blue,deep,sea,swim,water,huge,giant|blue whale,splash,tail,fish,wave,dive,song,mammal|orca,shark,dolphin,ship,spout,krill|humpback,blubber,migration,plankton|free willy"],
  ["Bread","Sandwich","lunch,slice,eat,food,cheese,ham,toast,butter|lettuce,tomato,mayo,bake,white,brown,picnic,school|jam,peanut butter,tuna,egg,chicken,club|baguette,deli,subway,crust|blt,club sandwich"],
],
// ---- Day 47
[
  ["Cat","Mouse","chase,catch,hunt,cheese,small,tail,whisker,run|squeak,meow,trap,hole,pet,grey,hungry,play|tom and jerry,fast,cartoon,hide,jump,claw|rodent,predator,pounce,mice|jerry,tom"],
  ["Hot chocolate","Fireplace","warm,cozy,winter,cold,hot,fire,cup,night|marshmallow,blanket,christmas,snow,mug,home,family,relax|wood,cream,sweet,sofa,socks,cocoa|crackle,chimney,whipped cream,cabin|hygge,santa"],
  ["Teeth","Dentist","brush,smile,white,mouth,clean,toothpaste,pain,check|floss,filling,cavity,drill,chair,candy,sugar,braces|tooth,gum,doctor,scary,mirror,open|molar,enamel,x ray,toothache|tooth fairy,colgate"],
  ["Book","Library","read,shelf,quiet,story,borrow,page,study,librarian|novel,author,card,return,school,learn,knowledge,silent|chapter,table,computer,newspaper,magazine,desk|catalog,fiction,dewey,reading room|harry potter,belle"],
  ["Coffee","Cup","drink,hot,mug,morning,cafe,tea,caffeine,milk|sugar,spoon,handle,cream,latte,espresso,break,warm|saucer,steam,starbucks,paper cup,lid,refill|barista,cappuccino,mocha,brew|cup of joe,world cup"],
],
// ---- Day 48
[
  ["Shirt","Pants","clothes,wear,dress,fashion,cotton,button,pocket,iron|jeans,belt,size,shop,laundry,school,uniform,office|t-shirt,shorts,suit,sleeve,leg,zip|wardrobe,outfit,trousers,collar|smarty pants,fancy pants"],
  ["Pencil","Paper","write,draw,school,sketch,note,homework,white,lead|eraser,sharpen,book,desk,art,test,line,page|notebook,letter,list,doodle,drawing,math|stationery,graphite,origami,sheet|pencil case,paper plane"],
  ["Tiger","Cat","stripe,orange,claw,tail,whisker,purr,big cat,paw|jungle,pet,meow,roar,hunt,cute,fierce,feline|kitten,cub,zoo,wild,fur,eye|predator,stripes,bengal,pounce|tigger,garfield"],
  ["Volcano","Fire","hot,lava,burn,smoke,red,orange,flame,heat|erupt,ash,danger,mountain,glow,explode,magma,rock|eruption,inferno,crater,destroy,island,dragon|pompeii,vesuvius,blaze,sulfur|mount doom,ring of fire"],
  ["Bicycle","Helmet","ride,safety,head,protect,wheel,pedal,road,bike|cycle,crash,fall,strap,race,speed,mountain,park|scooter,motorbike,skateboard,knee pad,traffic,lock|cyclist,tour de france,bmx,gear|bmx,lance armstrong"],
],
// ---- Day 49
[
  ["Turkey","Thanksgiving","dinner,family,november,food,eat,feast,bird,holiday|pumpkin pie,stuffing,potato,gravy,thankful,table,oven,roast|parade,football,pilgrim,harvest,autumn,fall|cranberry,leftovers,drumstick,wishbone|macy's,gobble"],
  ["Car","Garage","park,house,door,drive,repair,fix,mechanic,tool|oil,engine,tire,keys,wheel,home,storage,night|bike,spare,workshop,petrol,wash,service|driveway,car wash,toolbox,jack|garage sale,auto shop"],
  ["Night","Sleep","bed,dark,dream,tired,pillow,moon,rest,star|late,blanket,yawn,quiet,pajamas,snore,nap,owl|nightmare,insomnia,lullaby,bedtime,midnight,lamp|slumber,snooze,sleepwalk,midnight snack|goodnight,sweet dreams"],
  ["Panda","Zebra","black,white,black and white,animal,zoo,cute,stripe,wild|china,africa,bamboo,bear,horse,grass,fur,spot|pattern,fat,run,eat,kungfu panda,lazy|endangered,savannah,safari,cub|kung fu panda,marty"],
  ["Salt","Pepper","spice,cook,shaker,kitchen,food,table,season,white|black,taste,dinner,grind,salty,spicy,meal,restaurant|steak,soup,egg,chips,fries,sneeze|seasoning,grinder,flavor,herbs|salt and pepper,dr pepper"],
],
// ---- Day 50
[
  ["Tree","Bird","nest,branch,leaf,sing,fly,green,wood,forest|egg,feather,park,high,wing,spring,nature,sky|robin,owl,parrot,eagle,bark,trunk|chirp,birdhouse,woodpecker,canopy|angry birds,tweet"],
  ["Pizza","Oven","hot,bake,cook,cheese,dough,heat,slice,fire|wood,stone,kitchen,crust,italian,pizza oven,temperature,melt|chef,delivery,box,restaurant,toppings,tomato|brick oven,peel,napoli,margherita|domino's,pizza hut"],
  ["Spider","Halloween","scary,web,spooky,black,costume,creepy,october,night|pumpkin,witch,ghost,bat,decoration,fear,candy,trick or treat|hairy,leg,skeleton,haunted house,cobweb,party|tarantula,black widow,arachnophobia,monster|spider man,charlotte"],
  ["Clock","Calendar","time,date,day,month,year,week,hour,minute|schedule,plan,wall,deadline,late,early,appointment,birthday|alarm,today,tomorrow,holiday,event,meeting|agenda,diary,countdown,reminder|new year,leap year"],
  ["Gift","Birthday","present,party,cake,wrap,surprise,box,ribbon,candle|celebrate,friend,family,toy,card,balloon,happy,wish|bow,paper,age,song,invite,fun|wrapping paper,gift card,surprise party,thank you|happy birthday,present"],
],
// ---- Day 51
[
  ["Juice","Orange","fruit,drink,citrus,squeeze,fresh,breakfast,vitamin c,sweet|glass,cold,healthy,peel,morning,pulp,sour,tree|carton,smoothie,lemon,apple,cup,fridge|tropicana,mandarin,tangerine,zest|oj,florida"],
  ["Bear","Honey","sweet,sticky,yellow,pooh,bee,hive,jar,forest|eat,brown,tree,gold,winnie,teddy,claws,hungry|picnic,grizzly,paw,sugar,syrup,cave|honeycomb,hibernate,nectar,beehive|winnie the pooh,paddington"],
  ["Night","Star","sky,dark,shine,bright,moon,twinkle,light,space|wish,dream,shooting star,sleep,galaxy,planet,constellation,glow|telescope,universe,astronomy,owl,quiet,midnight|north star,milky way,starry night,cosmos|van gogh,twinkle twinkle"],
  ["Hand","Glove","finger,wear,warm,winter,cold,palm,hold,five|leather,cover,wool,pair,thumb,mitten,protect,soft|boxing,baseball,doctor,rubber,clean,kitchen|knit,fit,grip,snowball|michael jackson,oven glove"],
  ["Snake","Lizard","reptile,scale,tail,tongue,crawl,green,desert,cold|egg,skin,sun,rock,grass,slither,fast,bite|venom,hiss,jungle,gecko,chameleon,iguana|cold-blooded,python,komodo,cobra|komodo dragon,anaconda"],
],
// ---- Day 52
[
  ["Hospital","Ambulance","emergency,sick,help,doctor,nurse,siren,fast,hurt|accident,patient,bed,stretcher,red cross,injury,call,911|white,van,light,heart,rush,blood|paramedic,er,first aid,medic|grey's anatomy,999"],
  ["Pencil","Crayon","draw,color,school,kid,art,paper,write,picture|sharp,lead,wax,box,sketch,bright,eraser,desk|rainbow,colouring book,sharpener,red,blue,green|crayola,graphite,pastel,doodle|crayola,colouring pencil"],
  ["Sun","Sunflower","yellow,bright,summer,flower,tall,seed,light,warm|grow,garden,field,face,petal,green,sky,hot|van gogh,bee,stem,snack,oil,turn|photosynthesis,ukraine,bloom,golden|van gogh,helianthus"],
  ["Mud","Rain","wet,dirty,brown,puddle,splash,water,boots,messy|storm,pig,soil,ground,dirt,slip,field,garden|cloud,grey,umbrella,jump,football,worm|monsoon,swamp,muddy,drizzle|peppa pig,mud pie"],
  ["Brush","Paint","art,color,painter,canvas,wall,picture,draw,create|artist,red,blue,palette,stroke,wet,bucket,roller|water,mix,house,room,picasso,decorate|oil,acrylic,watercolor,easel|bob ross,van gogh"],
],
// ---- Day 53
[
  ["Fire","Firefighter","hot,water,hose,truck,red,emergency,brave,hero|smoke,rescue,burn,flame,helmet,ladder,alarm,save|station,siren,danger,extinguish,uniform,axe|fire truck,engine,dalmatian,boots|fireman sam,911"],
  ["Apple","Tree","fruit,red,green,leaf,branch,orchard,grow,pick|seed,root,trunk,juice,pie,autumn,fall,farm|newton,gravity,basket,eden,shade,spring|cider,harvest,blossom,ladder|big apple,apple pie"],
  ["Owl","Book","wise,read,smart,study,learn,night,library,school|knowledge,glasses,quiet,story,page,student,teacher,wisdom|feather,hoot,author,bookworm,nocturnal,smart owl|scholar,literature,encyclopedia,reading|hedwig,winnie the pooh"],
  ["Shark","Teeth","sharp,bite,jaws,ocean,danger,scary,white,mouth|predator,fin,blood,swim,hunt,eat,great white,rows|dentist,smile,fish,attack,biting,strong|hammerhead,megalodon,apex,tooth|jaws,baby shark"],
  ["Train","Track","rail,ride,travel,station,fast,line,long,metal|wheel,steam,engine,ticket,passenger,whistle,cross,bridge|tunnel,signal,speed,toy,model,carriage|railway,locomotive,junction,freight|thomas,choo choo"],
],
// ---- Day 54
[
  ["Chocolate","Milk","brown,sweet,drink,dairy,cow,cocoa,hot,glass|bar,cold,cream,shake,kids,breakfast,mug,white|hot chocolate,milkshake,cereal,dessert,cookie,cake|nesquik,mocha,cadbury,swiss|chocolate milk,milky way"],
  ["Garden","Flower","grow,plant,bloom,petal,green,rose,spring,water|seed,soil,sun,bee,butterfly,pretty,colorful,smell|daisy,tulip,sunflower,vase,gardener,hose|bouquet,pollen,greenhouse,blossom|secret garden,eden"],
  ["Kite","Bird","fly,sky,wind,high,wing,tail,soar,air|string,feather,cloud,glide,free,spring,beach,blue|eagle,hawk,colorful,float,summer,park|flight,altitude,breeze,soaring|kite runner,angry birds"],
  ["Snowman","Winter","snow,cold,white,carrot,scarf,hat,ice,december|frozen,olaf,build,button,stick,christmas,coal,melt|snowball,mitten,sled,snowflake,frost,holiday|blizzard,igloo,frosty,snow angel|frosty,let it snow"],
  ["Baby","Diaper","change,wet,cry,nappy,small,bottom,clean,mom|smell,baby powder,wipes,newborn,toddler,bag,night,sleep|bottle,crib,poop,pee,pampers,rash|infant,nursery,stroller,pacifier|pampers,huggies"],
],
// ---- Day 55
[
  ["Sea","Shell","beach,ocean,sand,shell,shore,wave,water,salt|crab,pearl,collect,pretty,hear,ear,sound,spiral|snail,turtle,clam,oyster,conch,tide|coral,mollusk,seashore,necklace|she sells seashells,the little mermaid"],
  ["Football","Kick","ball,goal,score,shoot,foot,boot,penalty,game|player,team,field,free kick,pass,run,strong,net|corner,striker,soccer,match,world cup,goalkeeper|bicycle kick,volley,header,cleat|messi,ronaldo"],
  ["Rabbit","Carrot","orange,eat,ear,bunny,hop,vegetable,garden,cute|crunch,green,farm,pet,easter,fast,jump,field|bugs bunny,snack,root,tail,white,fluffy|burrow,lettuce,hutch,whiskers|bugs bunny,peter rabbit"],
  ["Glasses","Book","read,eye,see,study,smart,nerd,page,library|lens,frame,word,story,learn,school,teacher,student|reading glasses,author,novel,bookworm,desk,light|optician,literature,bifocals,spectacles|harry potter,belle"],
  ["Ice","Hockey","cold,rink,skate,puck,stick,goal,winter,team|frozen,sport,game,canada,helmet,fight,score,glide|zamboni,goalie,net,fast,slide,boots|nhl,stanley cup,olympics,arena|wayne gretzky,mighty ducks"],
],
// ---- Day 56
[
  ["Coffee","Bean","brown,roast,grind,cup,drink,bag,dark,morning|seed,plant,farm,brew,machine,smell,cafe,caffeine|espresso,latte,grinder,arabica,jar,green|robusta,barista,colombia,brazil|jelly bean,mr bean"],
  ["Fish","Water","swim,ocean,sea,lake,river,wet,blue,pond|fin,tail,gill,tank,bowl,bubble,deep,splash|aquarium,fishing,net,salmon,goldfish,wave|current,stream,coral,reef|nemo,dory"],
  ["Cow","Grass","green,eat,farm,field,moo,milk,graze,meadow|barn,farmer,fence,hay,sun,summer,grow,ground|cheese,beef,calf,herd,spot,bell|pasture,ranch,lawn,clover|moo,the cow jumped over the moon"],
  ["Pillow","Feather","soft,white,light,sleep,bed,fluffy,cozy,comfortable|bird,dream,pillow fight,down,float,tickle,cushion,cloud|duck,goose,duvet,nap,quill,fall|plume,downy,pillowcase,stuffing|feather pillow,light as a feather"],
  ["Bus","Driver","drive,ride,road,seat,ticket,passenger,stop,route|wheel,city,traffic,school,horn,uniform,license,job|late,wait,map,fare,station,commute|transport,timetable,conductor,depot|magic school bus,bus driver"],
],
// ---- Day 57
[
  ["Popcorn","Cotton candy","sweet,fair,carnival,snack,sugar,pink,movie,treat|circus,butter,salt,fluffy,kids,party,stand,bag|candy floss,stick,caramel,fun,park,soft|amusement park,funfair,kettle corn,machine|county fair,disneyland"],
  ["Sun","Shadow","light,dark,shade,day,bright,shape,sunny,follow|tree,wall,hot,ground,afternoon,morning,tall,small|sundial,silhouette,noon,umbrella,black,copy|eclipse,shady,peter pan,reflection|peter pan,groundhog day"],
  ["Doctor","Hospital","sick,patient,nurse,help,care,health,bed,medicine|emergency,ambulance,surgery,clinic,check,heal,white,coat|ward,doctor's office,injection,x ray,pill,mask|stethoscope,er,prescription,surgeon|grey's anatomy,house"],
  ["Rain","Puddle","wet,water,splash,jump,boots,mud,drop,storm|reflection,street,umbrella,grey,cloud,kid,fall,ground|duck,raincoat,dirty,road,slip,muddy|downpour,drizzle,peppa pig,wellies|peppa pig,singing in the rain"],
  ["Map","Compass","direction,north,south,east,west,travel,find,lost|road,route,guide,adventure,hike,explore,path,treasure|pirate,gps,island,mountain,world,plan|navigation,needle,magnet,atlas|indiana jones,dora"],
],
// ---- Day 58
[
  ["Bread","Jam","toast,breakfast,sweet,spread,butter,strawberry,sandwich,knife|fruit,jar,red,morning,slice,sticky,sugar,honey|peanut butter,raspberry,scone,tea,picnic,school|marmalade,jelly,preserve,croissant|pb&j,paddington"],
  ["Lion","Zoo","animal,cage,wild,roar,king,africa,keeper,visit|mane,tiger,elephant,monkey,ticket,kid,feed,meat|safari,giraffe,zebra,cub,bear,penguin|enclosure,zookeeper,exhibit,habitat|madagascar,the lion king"],
  ["Flower","Vase","water,pretty,table,rose,bouquet,glass,gift,decoration|petal,stem,tulip,color,fresh,smell,home,kitchen|daisy,lily,sunflower,window,birthday,love|arrangement,florist,ceramic,porcelain|mother's day,valentine"],
  ["Winter","Coat","cold,warm,snow,wear,jacket,wool,scarf,zip|hood,glove,hat,boots,rain,wind,ice,snowman|december,thick,pocket,fur,frost,button|parka,puffer,overcoat,layers|north face,puffer jacket"],
  ["Moon","Rocket","space,launch,astronaut,fly,nasa,landing,sky,star|orbit,crater,earth,mission,night,blast,travel,fast|apollo,flag,gravity,spaceship,suit,helmet|lunar,countdown,module,armstrong|apollo 11,tintin"],
],
// ---- Day 59
[
  ["Soap","Bubble","wash,clean,foam,bath,water,pop,shower,suds|blow,round,float,hands,shiny,rainbow,lather,dish|bubble bath,soap bar,shampoo,duck,kid,froth|detergent,laundry,wand,fizz|soap opera,bubble gum"],
  ["Tiger","Jungle","wild,stripe,orange,tree,green,hunt,roar,animal|hide,predator,big cat,dangerous,river,forest,monkey,vine|india,bengal,shere khan,claw,teeth,night|rainforest,camouflage,stalk,prey|the jungle book,shere khan"],
  ["Paper","Plane","fly,fold,air,throw,wing,sky,school,white|origami,glide,class,launch,pilot,airport,ticket,crash|dart,toy,travel,window,flight,boarding|aerodynamics,jet,landing,runway|paper plane,wright brothers"],
  ["Egg","Breakfast","morning,fry,boil,toast,eat,yolk,bacon,omelette|scramble,food,chicken,pan,coffee,juice,bread,cook|benedict,sunny side up,pancake,cereal,plate,table|brunch,poached,frittata,hash brown|eggs benedict,full english"],
  ["Basketball","Hoop","ball,net,shoot,basket,score,jump,throw,court|game,team,sport,player,dunk,point,orange,tall|nba,dribble,rebound,three pointer,jersey,coach|slam dunk,free throw,layup,backboard|michael jordan,lebron"],
],
// ---- Day 60
[
  ["Fireworks","New year","celebrate,party,midnight,countdown,night,sky,bang,boom|light,colorful,december,january,cheer,kiss,resolution,champagne|bright,loud,friends,family,dance,music|fresh start,new beginning,times square,sparkler|auld lang syne,dubai"],
  ["Mouse","Trap","cheese,catch,snap,small,hole,house,kitchen,squeak|cat,rat,bait,steal,tail,run,spring,wood|danger,tom and jerry,grey,pest,clever,escape|mousetrap,rodent,pest control,trick|tom and jerry,stuart little"],
  ["Birthday","Party","cake,balloon,gift,present,candle,celebrate,friends,fun|music,dance,happy,surprise,invite,games,family,song|sweets,hat,ice cream,clown,wish,decoration|celebration,pinata,confetti,cupcake|happy birthday,surprise party"],
  ["Penguin","Ice","cold,snow,white,black,arctic,antarctica,slide,winter|fish,swim,iceberg,frozen,glacier,south pole,waddle,cute|igloo,polar,blizzard,seal,huddle,egg|emperor,tuxedo,colony,frost|happy feet,pingu"],
  ["Garden","Gardener","plant,flower,grow,water,seed,soil,dig,green|tree,grass,hose,rake,spade,weed,cut,bloom|vegetable,fruit,sun,glove,wheelbarrow,greenhouse|pruning,compost,hedge,lawn mower|secret garden,green thumb"],
],
];
