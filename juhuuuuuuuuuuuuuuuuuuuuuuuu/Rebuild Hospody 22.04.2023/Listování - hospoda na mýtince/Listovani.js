const informations = [
    {
      id: 1,
      name: 'Vepřový řízek s bramborem', // název pokrmu
      img: "https://c3.primacdn.cz/sites/default/files/styles/landscape_large/public/1f06fbe7/2943755-import_1gltzG.jpeg?itok=iupWVWuy&c=def_cloudinary",// link na obrázek
      text: "Vepřový řízek s bramborem je klasické německé jídlo, které představuje obalený a osmažený vepřový řízek podávaný s vařenými nebo pečenými brambory. Tento vydatný a chutný pokrm je oblíbenou volbou k obědu nebo večeři.",// popis jídla
    },
    {
        id: 2,
        name: 'Tousty s lososem', // název pokrmu
        img: 'https://d50-a.sdn.cz/d_50/c_img_G_B/ODROl.jpeg?fl=cro,0,0,1333,1000%7Cres,1200,,1%7Cjpg,80,,1',// link na obrázek
        text: "Topinky s lososem jsou chutným a snadno připravitelným pokrmem, který se skládá z uzeného nebo uzeného lososa na plátku opečeného chleba. Často se podává se smetanovým sýrem, kapary a plátky červené cibule. Tento pokrm je ideální k snídani, pozdní snídani nebo jako svačina.",// popis jídla
      },
      {
        id: 3,
        name: 'Rajská omáčka s knedlíkem', // název pokrmu
        img: 'https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/192255674_343755297169332_1775209605836841045_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ea8nzxnHKu0AX9prByb&_nc_ht=scontent.fprg5-1.fna&oh=00_AfDt4P3yiAi4VvAM2laQh2PGIpiIdnwc9oONYAQWiDyZ8g&oe=6447BE5F',// link na obrázek
        text: "Rajčatová omáčka s knedlíky je lahodný a uklidňující pokrm, který se skvěle hodí k vydatnému jídlu. Knedlíky se připravují z mouky, vajec a mléka a vaří se v rajčatové omáčce, dokud nejsou měkké a nadýchané. Rajčatová omáčka se připravuje z rajčat, cibule, česneku a bylinek a podle chuti se dochucuje solí a pepřem.",// popis jídla
      },
      {
        id: 4,
        name: 'Těstoviny s rajčaty a parmazánem', // název pokrmu
        img: 'https://images.aktin.cz/recipe-cover/cover-desktop/testoviny-s-kremovou-rajcatovou-omackou-a-mozzarellou?v=1659943457',// link na obrázek
        text: "Těstoviny s rajčatovým pestem a parmazánem jsou jednoduchým, ale chutným pokrmem. Těstoviny se uvaří al dente a poté se smíchají s lahodným rajčatovým pestem ze sušených rajčat, česneku a bazalky. Pokrm je zakončen posypáním strouhaným parmezánem, který těstovinám dodá oříškovou a slanou chuť.",// popis jídla
      },
      {
        id: 5,
        name: 'Lívance se sirupem', // název pokrmu
        img: 'https://kuchynelidlu.cz/productFiles/7095/1132x637-76bb33249292-kw-41-blog-1-960x540-3.jpg',// link na obrázek
        text: "Palačinky se sirupem jsou klasickým snídaňovým pokrmem, který si oblíbilo mnoho lidí. Palačinky se připravují z mouky, vajec, mléka a prášku do pečiva a pečou se dozlatova. Palačinky se přelijí sirupem, který se obvykle vyrábí z javoru, a vytvoří tak sladkou a lahodnou snídaňovou pochoutku.",// popis jídla
      },
      {
        id: 6,
        name: 'Makrela s citrónem a omáčkou', // název pokrmu
        img: 'https://thumbs.dreamstime.com/b/grilled-sea-fish-lemon-stone-slate-background-close-up-grilled-sea-fish-lemon-stone-slate-background-close-up-133652870.jpg',// link na obrázek
        text: "Makrela s citronem a omáčkou je lahodný a zdravý pokrm, který je ideální pro lehké a chutné jídlo. Makrela je ochucená solí a pepřem a poté se smaží na pánvi do křupava a dozlatova. Omáčka se připraví z citronové šťávy, olivového oleje, česneku a bylinek a přelije se přes makrelu, aby jí dodala jasnou a pikantní chuť.",// popis jídla
      },
  ];
// Obrázky, názvy a popisky
const ObrazekJidla = document.getElementById('Jidlo-img');
const NazevJidla = document.getElementById('Nazev-jidla');
const PopisJidla = document.getElementById('Popis-jidla');

const zpetBtn = document.querySelector('.zpet-btn');
const dalsiBtn = document.querySelector('.dal-btn');

let currentItem = 0;

function VypisInformace() { //funkce která bere dané informace ze const informations podle ID//
  const item = informations[currentItem];
  ObrazekJidla.src = item.img;
  NazevJidla.textContent = item.name;
  PopisJidla.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', VypisInformace);

dalsiBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > informations.length - 1) {
    currentItem = 0;
  }
  VypisInformace();
});

zpetBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = informations.length - 1;
  }
  VypisInformace();
});

