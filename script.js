let getProfession = () => {

    let display = document.getElementById("display");

    let professions = ["doctor", "mechanical engineer", "teacher","pepper seller",
    "nurse","eleran","tailor", "olosho", "baker", "accountant", "manager"
    ,"footballer","fisherman","scammer","hawker","ritualist","pastor","imam"
    ,"content creator","bricklayer","neurosurgeon","architect","marketer","farmer",
    "lawyer","dentist","artist","painter","dispatch rider","electrician","programmer",
    "hacker","gateman","actor/actress","barber","gardener","shit packer","shoe maker",
    "carpenter","whatsapp group admin", "jobless fellow","clerk","cleaner","slave",
    "soldier","sailor","taxi-driver","fast-food attendant","caterer","cook","photographer",
    "nanny","constructor worker","firefighter","waiter","truckdriver","civil servant",
    "welder","trader","telephone operator","gas filler","talkative","food seller",
    "typist","physicist","software engineer","electrical engineer", "building engineer",
    "chemical engineer","agricultural engineer","aerospace engineer","consultant",
    "biomedical engineer","hardware engineer","marine engineer","geologist","petroleum engineer",
    "nuclear engineer","production engineer","hitman","assasin","dancer","armed robber",
    "pornstar","politician","drug trafficker","phone repairer","murderer",
    "police","phone engineer","course instructor","hindu priest","ML developer",
    "blockchain engineer","investment banker","date scientist","economist",
    "food scientist","manufacturer","musician","stupid person"
];

    display.value==""
    ?
    alert("wetin dey sup put your name nah")
    :
    ran = professions[Math.floor(Math.random()*professions.length)];
    output = `${display.value} you are going to be a/an ${ran}`;
    confirm(output);

}