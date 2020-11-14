import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    hosts = [
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
            name: 'John Sanchez',
            bio: 'John is journalist with extrem profesionalism and always in the seek of truth. Her main goal is informing their peers',
            social: [
                {
                    id: 1,
                    type: 'twitter',
                    url: 'https://twitter.com/mobilethemes_'
                },
                {
                    id: 2,
                    type: 'linkedin',
                    url: 'https://linkedin.com/mobilethemes_'
                },
                {
                    id: 3,
                    type: 'web',
                    url: 'https://gumroad.com/mobile_themes'
                }
            ]
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
            name: 'Lisa Martinez',
            bio: 'Lisa is journalist with extrem profesionalism and always in the seek of truth. Her main goal is informing their peers',
            social: [
                {
                    id: 1,
                    type: 'twitter',
                    url: 'https://twitter.com/mobilethemes_'
                },
                {
                    id: 2,
                    type: 'linkedin',
                    url: 'https://linkedin.com/mobilethemes_'
                },
                {
                    id: 3,
                    type: 'web',
                    url: 'https://gumroad.com/mobile_themes'
                }
            ]
        }
    ];

    episodes = [
        {
            id: 25,
            number: '25',
            title: 'John Sena is in da house',
            date: 'Sept 25, 2019',
            duration: '25:00'
        },
        {
            id: 24,
            number: '24',
            title: 'John Sena is in da house',
            date: 'Sept 20, 2019',
            duration: '25:00'
        }, {
            id: 23,
            number: '23',
            title: 'John Sena is in da house',
            date: 'Sept 15, 2019',
            duration: '25:30'
        }, {
            id: 22,
            number: '22',
            title: 'John Sena is in da house',
            date: 'Sept 10, 2019',
            duration: '35:00'
        }
    ];

    shows = [
        {
            id: 1,
            stream: 'https://s2.mexside.net/8020/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_rmi_2017.jpg',
            name: 'Radio México Internacional',
            hours: 'Mondays at 7:30PM',
            description: 'Emisora virtual por internet. Música tradicional y de fusión. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 2,
            stream: 'https://s2.mexside.net/8016/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/Opus.jpg',
            name: 'Opus 94',
            hours: 'Mondays at 7:30PM',
            description: 'XHIMER, 94.5 FM. Música clásica y de concierto. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 3,
            stream: 'https://s2.mexside.net/8002/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/Reactor-1.jpg',
            name: 'Reactor',
            hours: 'Mondays at 7:30PM',
            description: 'Rock en inglés y español. Ciudad de México',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 4,
            stream: 'https://s2.mexside.net/8022/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_interferencia_2018.jpg',
            name: 'Interferencia',
            hours: 'Mondays at 7:30PM',
            description: 'Emisora virtual por Internet Mezcla alternativa, territorio indie, psicodelia y nuevos beats. Ciudad de México',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 5,
            stream: 'https://s2.mexside.net/8014/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/Horizonte-2.jpg',
            name: 'Horizonte',
            hours: 'Mondays at 7:30PM',
            description: 'XHIMR, 107.9 FM. Jazz. Ciudad de México',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 6,
            stream: 'https://s2.mexside.net/8026/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_ciudadana660_2020.jpg',
            name: 'Ciudadana 660',
            hours: 'Mondays at 7:30PM',
            description: 'XEDTL, 660 AM. Música del mundo. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 7,
            stream: 'https://s2.mexside.net/8028/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/Radio-710-1.jpg',
            name: 'Radio 710',
            hours: 'Mondays at 7:30PM',
            description: 'XEMP 710 AM. Banda / mariachi / norteña / grupera. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 8,
            stream: 'https://s2.mexside.net/8024/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/xeb_amarillo-1-1024x512.jpg',
            name: 'La B Grande de México',
            hours: 'Mondays at 7:30PM',
            description: 'XEB, 1220 AM. Bolero / balada en español. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 9,
            stream: 'https://s2.mexside.net/8030/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_tropicalisima_2018.jpg',
            name: 'Tropicalísima 13-50',
            hours: 'Mondays at 7:30PM',
            description: 'XEQK, 1350 AM. Salsa / cumbia / merengue. Ciudad de México.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 10,
            stream: 'https://s2.mexside.net/8054/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/09_yucatan_fm_2017.jpg',
            name: 'Yucatán FM',
            hours: 'Mondays at 7:30PM',
            description: 'XHYUC, 92.9 FM. Música regional. Mérida, Yucatán.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 11,
            stream: 'https://s2.mexside.net/8038/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/10_cvr_estereo_istmo_2017.jpg',
            name: 'Estéreo Istmo',
            hours: 'Mondays at 7:30PM',
            description: 'XHSCO, 96.3 FM. Multiperfil / Noticias. Salina Cruz, Oaxaca.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 12,
            stream: 'https://s2.mexside.net/8036/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_fusion_2018.jpg',
            name: 'Fusión',
            hours: 'Mondays at 7:30PM',
            description: 'XHUAN 102.5 FM – 102.5 HD 1. Jazz / Noticias. Tijuana, Baja California.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 13,
            stream: 'https://s2.mexside.net/8044/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_orbita_2017.jpg',
            name: 'Órbita',
            hours: 'Mondays at 7:30PM',
            description: 'XHUAR, 106.7 FM – 106.7 HD 1. Rock / Noticias. Ciudad Juárez, Chihuahua.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 14,
            stream: 'https://s2.mexside.net/8050/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/Radio-Imer.jpg',
            name: 'Radio IMER',
            hours: 'Mondays at 7:30PM',
            description: 'XEMIT 540 AM – XHEMIT 107.9 FM. Multiperfil / Noticias. Comitán de Domínguez, Chiapas.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 15,
            stream: 'https://s2.mexside.net/8052/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_lapopular_2019.jpg',
            name: 'La Popular',
            hours: 'Mondays at 7:30PM',
            description: 'XHCAH, 89.1 FM. Noticias, música mexicana y Marimba. Cacahoatán, Chiapas.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 16,
            stream: 'https://s2.mexside.net/8056/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_la_fq_2019.jpg',
            name: 'La FQ',
            hours: 'Mondays at 7:30PM',
            description: 'XHFQ, 103.1 FM – 103.7 HD 1. Multiperfil / Noticias. Cananea, Sonora.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 17,
            stream: 'https://s2.mexside.net/8034/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_radiolagarto_2019.jpg',
            name: 'Radio Lagarto',
            hours: 'Mondays at 7:30PM',
            description: 'XHCHZ, 107.9 FM. Multiperfil / Noticias. Chiapa de Corzo, Chiapas.',
            host_by: this.hosts,
            episodes: this.episodes,
        },
        {
            id: 18,
            stream: 'https://s2.mexside.net/8010/stream',
            image: 'https://www.imer.mx/wp-content/uploads/sites/36/cvr_radioazul_2019.jpg',
            name: 'Radio Azul',
            hours: 'Mondays at 7:30PM',
            description: 'XHLAC, 99.7 FM. Multiperfil / Noticias. Lázaro Cárdenas, Michoacán.',
            host_by: this.hosts,
            episodes: this.episodes,
        }
    ];
    constructor() { }

    getHosts() {
        return this.hosts;
    }

    getHostsById(id: number) {
        return this.hosts.find((data: any) => data.id === id);
    }
    getShows() {
        return this.shows;
    }

    getShowsById(id: number) {
        return this.shows.find((data: any) => data.id === id);
    }

}
