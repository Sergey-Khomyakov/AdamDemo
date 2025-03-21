$(document).ready(function() {
    OrgChart.templates.myTemplate = Object.assign ( { },OrgChart.templates.ana);
    //OrgChart.templates.myTemplate.size = [ 200 , 200 ]; 
    //OrgChart.templates.myTemplate.node = ' <circle cx="100" cy="100" r="100" fill="#4D4D4D" stroke-width="1" stroke="#aeaeae"> </circle>';
    OrgChart.templates.myTemplate.defs = ' ' ;
    OrgChart.templates.myTemplate.ripple = {
        radius: 100,
        color: "#e6e6e6",
        rect: null
    };
    OrgChart.templates.myTemplate.ripple = {
        radius: 0,
        color: "none",
        rect:null
    };

    OrgChart.templates.myTemplate.field_0 = 
    `<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>`;

    OrgChart.templates.myTemplate.field_1 = 
        `<text style="font-size: 16px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>`;
        
    OrgChart.templates.myTemplate.img_0 =
        `<clipPath id="ulaImg"><circle cx="100" cy="150" r="40"></circle></clipPath>
        <image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80"></image>`;

    let chart = new OrgChart("#tree", {
        template: "myTemplate",
        nodeTemplate: function(data) {
            return `
                <div class="title" style="color:black;">${data.name}</div>
            `;
        },
        nodes: [
            { id: 1, name: "Александр Руковедов" },
            { id: 2, pid: 1, name: "Никита Зайцев" },
            { id: 3, pid: 1, name: "Peter Stevens" }
        ]  
    });
});