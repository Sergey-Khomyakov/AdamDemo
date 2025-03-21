$(document).ready(function() {
    OrgChart.templates.orgChild = Object.assign ( { },OrgChart.templates.ana);
    OrgChart.templates.orgHeader = Object.assign ( { },OrgChart.templates.ana);
    OrgChart.templates.orgChild.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#fff" filter="url(#isla-shadow)" stroke-width="0" stroke="#aeaeae" rx="7" ry="7"></rect>'
    OrgChart.templates.orgChild.defs = '' ;
    OrgChart.templates.orgChild.name = `<foreignobject class="node" x="10" y="70" width="220" height="100">{val}</foreignobject>`;
    OrgChart.templates.orgChild.fio = `<foreignobject class="node" x="55" y="20" width="220" height="50">{val}</foreignobject>`;
    OrgChart.templates.orgChild.img = `<foreignobject class="node" x="10" y="20" width="36" height="36">{val}</foreignobject>`;

    OrgChart.templates.orgHeader.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="url(#myGradient)" filter="url(#isla-shadow)" stroke-width="0" stroke="#aeaeae" rx="7" ry="7"></rect>'
    OrgChart.templates.orgHeader.defs = '<linearGradient id="myGradient" gradientTransform="rotate(20)"> <stop offset="30%" stop-color="#2d73ff" /> <stop offset="80%" stop-color="#1D4F9B" /> </linearGradient>' ;
    OrgChart.templates.orgHeader.name = `<foreignobject class="node" x="10" y="70" width="220" height="100">{val}</foreignobject>`;
    OrgChart.templates.orgHeader.fio = `<foreignobject class="node" x="55" y="20" width="220" height="50">{val}</foreignobject>`;
    OrgChart.templates.orgHeader.img = `<foreignobject class="node" x="10" y="20" width="36" height="36">{val}</foreignobject>`;

    OrgChart.SEARCH_PLACEHOLDER = "Поиск";

    let chart = new OrgChart("#tree", {
        tags: {
            "orgChild": {
                template: "orgChild"
            },
            "orgHeader": {
                template: "orgHeader"
            },
        },
        nodeMouseClick: OrgChart.action.none,
        nodes: [
            { id: 1, tags: ["orgHeader"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/gendir.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance; color:#fff;'>Александр Руковедов</p>", name: "" },
            { id: 2, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-17.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Никита Зайцев</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Административно-финансовая дирекция</p>" },
            { id: 3, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-1.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Георгий Пономарёв</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по связям с общественностью</p>" },
            { id: 4, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-2.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Полина Петрова</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по качеству удовлетворенности клиента</p>" },
            { id: 5, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-3.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Глеб Комаров</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция внешней логистики</p>" },
            { id: 6, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-4.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Иван Семёнов</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция завода</p>" },
            { id: 7, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-5.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Антон Герасимов</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Административная дирекция</p>" },
            { id: 8, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-6.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Аделия Кузьмина</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Коммерческая дирекция</p>" },
            { id: 9, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-7.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Денис Андреев</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по человеческим ресурсам</p>" },
            { id: 10, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-8.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Вероника Новикова</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по взаимодействию с гос. органами и корпоративным связям</p>" },
            { id: 11, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-9.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Марьяна Соловьёва</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по информационным технологиям</p>" },
            { id: 12, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-10.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Кристина Тарасова</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция безопасности</p>" },
            { id: 13, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-11.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Мадияр Макаров</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по продукту и международным проектам</p>" },
            { id: 14, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-2.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Игорь Степанов</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по инженерии</p>" },
            { id: 15, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-13.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Елисей Ильин</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по закупкам</p>" },
            { id: 16, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-14.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Дмитрий Лебедев</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция комплаенса, внутреннего аудита и рисков</p>" },
            { id: 17, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-15.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Даниил Новиков</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Аппарат генерального директора</p>" },
            { id: 18, pid: 1, tags: ["orgChild"], img: "<img style='width: 36px; height: 36px; object-fit:cover; border-radius: 100%;' src='./img/people/Avatar-1.png'/>", fio: "<p style='font-size: 14px; line-height: 100%; text-wrap-style: balance;'>Алексей Голубев</p>", name: "<p style='font-size: 12px; line-height: 100%; text-align: center; text-wrap-style: balance;'>Дирекция по правовым вопросам</p>" },
        ],
        nodeBinding: {
            name: "name",
            fio: "fio",
            img: "img"
        },
    });
});