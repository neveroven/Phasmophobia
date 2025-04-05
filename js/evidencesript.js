let Evidence=
[
    {
        "Name":"EMF Level 5",
        "Discription":"EMF Level 5 readings are detected using an EMF Reader. These high levels of electromagnetic field activity indicate the presence of a ghost. Players need to place the EMF Reader near potential ghost activity spots and wait for it to spike to level 5.",
        "Ghosts": "Ghosts: Goryo, Jinn, Myling, Obake, Oni, Raiju, Shade, Spirit, The Twins, Wraith",
        "ImgEv": "../Pix/itemsimg/4.png"
    },
    {
        "Name":"Ultraviolet",
        "Discription":"Fingerprints can be found using a UV Light. These prints are left behind by certain types of ghosts on surfaces they interact with, such as doors, windows, or light switches.",
        "Ghosts": "Ghosts: Banshee, Demon, Goryo, Hantu, Jinn, Myling, Obake, Phantom, Poltergeist, The Mimic",
        "ImgEv": "../Pix/itemsimg/1.png"
    },
    {
        "Name":"Ghost Writing",
        "Discription":"Ghost Writing appears in the form of words or phrases written in Ghost Writing Books. These books need to be placed in areas of suspected ghost activity. The ghost will interact with the book, leaving behind written messages.",
        "Ghosts": "Ghosts: Demon, Deogen, Mare, Moroi, Myling, Poltergeist, Revenant, Shade, Spirit, Thaye",
        "ImgEv": "../Pix/itemsimg/2.png"
    },
    {
        "Name":"Freezing Temperatures",
        "Discription":"Freezing Temperatures are detected using a Thermometer. A significant drop in temperature, often below freezing, indicates the presence of a ghost. Players need to monitor the thermometer for sudden drops.",
        "Ghosts": "Ghosts: Demon, Hantu, Jinn, Moroi, Oni, Onryo, Revenant, Shade, The Mimic, The Twins, Yurei",
        "ImgEv": "../Pix/itemsimg/5.png"
    },
    {
        "Name":"D.O.T.S Projector",
        "Discription":"D.O.T.S Projector is a type of evidence in Phasmophobia, used to determine which ghost is haunting a location. It is detected by placing a D.O.T.S Projector in close proximity of a ghost, and allowing it to pass through it.",
        "Ghosts": "Ghosts: Banshee, Deogen, Goryo, Oni, Phantom, Raiju, Thaye, Wraith, Yokai, Yurei",
        "ImgEv": "../Pix/itemsimg/6.webp"
    },
    {
        "Name":"Ghost Orb",
        "Discription":"Ghost Orbs are visible using a Video Camera. These orbs appear as small, glowing spheres of light that float around the area. Players need to set up the video camera and monitor the feed for orbs.",
        "Ghosts": "Ghosts: Banshee, Hantu, Mare, Obake, Onryo, Raiju, Revenant, Thaye, Yokai, Yurei",
        "ImgEv": "../Pix/itemsimg/7.webp"
    },
    {
        "Name":"Spirit Box",
        "Discription":"The Spirit Box is used to communicate with ghosts. Players ask questions and listen for ghostly responses through the device. The ghost may respond with words or phrases that can be heard through the Spirit Box.",
        "Ghosts": "Ghosts: Deogen, Mare, Moroi, Onryo, Phantom, Poltergeist, Spirit, The Mimic, The Twins, Wraith, Yokai",
        "ImgEv": "../Pix/itemsimg/3.png"
    }
]
const NameEvidence = document.getElementById("NameEvidence")
const DisEvidence = document.getElementById("DisEvidence")
const GhostsEvidence = document.getElementById("GhostsEvidence")
const ImgEvidence = document.getElementById("ImgEvidence")

function SelectEvidence (index)
{
    const Evid = Evidence[index]
    NameEvidence.textContent = Evid.Name
    DisEvidence.textContent = Evid.Discription
    GhostsEvidence.textContent = Evid.Ghosts
    ImgEvidence.setAttribute('src', Evid.ImgEv)
}