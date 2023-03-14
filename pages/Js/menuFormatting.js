const data = await fetch('./Js/menu.json').then(res => res.json());

function appendSubTitle(tag,parent,content,id,classAs){
    const CreateElmnt = document.createElement(tag);
    CreateElmnt.innerHTML = content;
    CreateElmnt.id = id
    CreateElmnt.classList.add(classAs);
    parent.appendChild(CreateElmnt);
    return CreateElmnt;
}

for (const [key, value] of Object.entries(data)) {

    const mainSquare = document.createElement("div");
    mainSquare.classList.add('col-sm-10', 'col-md-6', 'col-lg-5', 'col-xl-4', 'frame', 'menu-list');

    appendSubTitle("h2",mainSquare,key);
    const mainFrame = appendSubTitle("ul",mainSquare,'','breakfast','menu-backgrounds');


    for (const [name, content] of Object.entries(value)) {
        const item = document.createElement('li');
        item.innerHTML = name;
        mainFrame.appendChild(item);

        const price = document.createElement('span');
        price.innerHTML = '$'+content.price;
        item.appendChild(price);
    }

    document.getElementById("menuHolder").appendChild(mainSquare);
}