const colors = [
    {
        id: 1,
        name: 'Красный',
        price: 1000,
        value: '#ff0000'
    },
    {
        id: 2,
        name: 'Бежевый',
        price: 1000,
        value: '#d6c3b0'
    },
    {
        id: 3,
        name: 'Белый',
        price: null,
        value: '#ffffff'
    },
    {
        id: 4,
        name: 'Черный',
        price: null,
        value: '#000000'
    },
]

const materials = [
    {
        id: 1,
        name: 'МДФ',
        price: null,
        colors: [3, 4, 2]
    },
    {
        id: 2,
        name: 'ЛДСП',
        price: null,
        colors: [3, 4, 1]
    },
    {
        id: 3,
        name: 'Пластик',
        price: null,
        colors: [3, 4]
    },
    {
        id: 4,
        name: 'Шпон',
        price: null,
        colors: [3, 4]
    },
    {
        id: 5,
        name: 'Эмаль',
        price: null,
        colors: [3, 4]
    },
]

const thickness = [
    {
        id: 1,
        name: 'Толщина 28 мм',
        price: null,
    },
    {
        id: 2,
        name: 'Толщина 38 мм',
        price: null,
    },
]

const edges = [
    {
        id: 1,
        name: 'Кромка 0,4мм',
        price: null,
    },
    {
        id: 2,
        name: 'Кромка 2мм (только лицевые части)',
        price: 2000,
    },
    {
        id: 3,
        name: 'Кромка 2мм (все видимые детали)',
        price: 3000,
    },
]

const products = [
    {
        id: 1, 
        name: 'Комод Шайн 23 глянцевый BMS',
        width: 1604,
        height: 732,
        depth: 500,
        price: 27990,
        discount: 0,
        selectedWidth: [
            {
                id: 1,
                name: 1204
            },
            {
                id: 2,
                name: 1304
            },
            {
                id: 3,
                name: 1404
            },
            {
                id: 4,
                name: 1504
            },
            {
                id: 5,
                name: 1604
            },
            {
                id: 6,
                name: 1704
            },
            {
                id: 7,
                name: 1804
            },
            {
                id: 8,
                name: 1904
            },
            {
                id: 9,
                name: 2004
            }
        ],
        selectedHeight: [
            {
                id: 1,
                name: 332
            },
            {
                id: 2,
                name: 432
            },
            {
                id: 3,
                name: 532
            },
            {
                id: 4,
                name: 632
            },
            {
                id: 5,
                name: 732
            },
            {
                id: 6,
                name: 832
            },
            {
                id: 7,
                name: 932
            },
            {
                id: 8,
                name: 1032
            },
            {
                id: 9,
                name: 1132
            }
        ],
        selectedDepth: [
            {
                id: 1,
                name: 300
            },
            {
                id: 2,
                name: 400
            },
            {
                id: 3,
                name: 500
            },
            {
                id: 4,
                name: 600
            },
            {
                id: 5,
                name: 700
            },
        ],
        description: 'Комод Шайн 23 глянцевый BMS – низкая широкая модель, которая станет отличной альтернативой громоздкому шкафу. Современная модель с просторной столешницей  поможет стильно расположить предметы декора, а для одежды, аксессуаров и домашних мелочей предусмотрены большие и малые выдвижные ящики и распашные отделения. Светлые глянцевые фасады сделают помещение зрительно легче и без труда впишутся в любой интерьер. Купить комод Шайн 23 глянцевый BMS вы сможете в нашем интернет магазине быстро и просто.',
        images : [
            {
                id: 1,
                name: 'Комод 1',
                src: './pages/Configurator/images/287d30efbfd1ac17d2c4cdb4929dcd2f.jpg',
                alt: 'Комод 1',
            },
        ],
        objects: [
            {
                id: 1,
                displayName: 'Фасад',
                name: 'facade',
                materials: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                displayName: 'Корпус',
                name: 'carcass',
                materials: [1, 2],
            },
            {
                id: 3,
                displayName: 'Кромка',
                name: 'edge',
                materials: null,
            },
            {
                id: 4,
                displayName: 'Задняя стенка',
                name: 'backWall',
                materials: null,
            },
            {
                id: 5,
                displayName: 'Обратная сторона материала',
                name: 'reverseSideMaterial',
                materials: null,
            },
        ]
    }
]