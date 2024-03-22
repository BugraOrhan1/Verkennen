function create_button(type) {  
    // genereer een button met overeenkomstige classes en attributes
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn')
    button.classList.add(type);
    button.onclick = proccess_button_click;

    // genereer een icoon
    let icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add(type);

    // maak een if die de specifieke classes toevoegd adhv type
    if (type == 'fire') {
        button.classList.add('btn-danger');
        icon.classList.add('fa-fire');
    }else if (type == 'ice'){
        button.classList.add('btn-info');
        icon.classList.add('fa-snofflake-o');

    }else if (type == 'lightning'){
        button.classList.add('btn-warning');
        icon.classList.add('fa-bolt');
    }

    // voeg icoon en tekst aan de button
    button.appendChild(icon)
    button.innerHTML += ' head';

    // voeg button toe aan de hydra
    hydra.appendChild(button)
}

function proccess_button_click(){
    // maak een if om te kijken welke 2 buttons je moet genereren
    if (this.classList.contains('fire')){
        create_button('ice');
        create_button('lightning'); 
    }
    // verwijder de geklikte button
    this.remove();}

create_button('fire');
create_button('ice');
create_button('lightning');