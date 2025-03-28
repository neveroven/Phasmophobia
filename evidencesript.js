let Evidence=
[
    {
        "Name":"EMF Level 5",
        "Discription":"EMF Level 5 readings are detected using an EMF Reader. These high levels of electromagnetic field activity indicate the presence of a ghost. Players need to place the EMF Reader near potential ghost activity spots and wait for it to spike to level 5.",
        "Ghosts": "Goryo, Jinn, Myling, Obake, Oni, Raiju, Shade, Spirit, The Twins, Wraith",
        "ImgEv": "itemsimg/EMF_5_0.3.1.2.webp"
    },
    {
        "Name":"Ultraviolet",
        "Discription":"Fingerprints can be found using a UV Light. These prints are left behind by certain types of ghosts on surfaces they interact with, such as doors, windows, or light switches.",
        "Ghosts": "Banshee, Demon, Goryo, Hantu, Jinn, Myling, Obake, Phantom, Poltergeist, The Mimic",
        "ImgEv": "itemsimg/Fingerprints_3.webp"
    },
    {
        "Name":"",
        "Discription":"",
        "Ghosts": "",
        "ImgEv": ""
    },
    {
        "Name":"",
        "Discription":"",
        "Ghosts": "",
        "ImgEv": ""
    },
    {
        "Name":"",
        "Discription":"",
        "Ghosts": "",
        "ImgEv": ""
    },
    {
        "Name":"",
        "Discription":"",
        "Ghosts": "",
        "ImgEv": ""
    },
    {
        "Name":"",
        "Discription":"",
        "Ghosts": "",
        "ImgEv": ""
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