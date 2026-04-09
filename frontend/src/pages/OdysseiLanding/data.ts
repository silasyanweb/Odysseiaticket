/**
 * Centralized data store for Odysseia Open Air landing page.
 * This file serves as the default state. The values can be overridden via localStorage for live updates in the Admin Panel.
 */

export interface Excursion {
  id: string;
  city: string;
  state: string;
  status: 'DISPONÍVEL' | 'VAGAS LIMITADAS' | 'ESGOTADO';
  departureTime: string;
  location: string;
  price: string;
  whatsappNumber: string;
  isActive: boolean;
}

export interface DJ {
  id: string;
  name: string;
  genre: string;
  time: string;
  img: string;
  position?: 'object-top' | 'object-center' | 'object-bottom';
  scUrl: string;
  instagramUrl?: string;
  isConfirmed: boolean;
}

export interface GalleryEdition {
  id: string;
  title: string;
  year: string;
  cover: string;
  photos: string[];
}

export interface TicketTier {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  status: 'EM BREVE' | 'LOTE ATUAL' | 'ESGOTADO' | 'DISPONÍVEL';
  features: string[];
  link: string;
  highlighted?: boolean;
  isActive: boolean;
}

export interface OdysseiaData {
  general: {
    eventTitle: string;
    countdownDate: string; // ISO string
    aboutTitle: string;
    aboutDescription: string[];
    videoUrl: string;
    aboutMedia: {
      type: 'video' | 'image';
      url: string;
      position: string;
    };
  };
  lineup: DJ[];
  gallery: GalleryEdition[];
  excursions: Excursion[];
  tickets: TicketTier[];
}

export const DEFAULT_DATA: OdysseiaData = {
  general: {
    eventTitle: 'ODYSSEIA OPEN AIR',
    countdownDate: '2026-10-10T20:00:00Z',
    aboutTitle: 'ODYSSEIA OPEN AIR',
    aboutDescription: [
      'Em sua 5ª edição, a Odysseia reafirma sua essência como uma PVT de psytrance realizada em Cruz das Almas, no interior da Bahia, fortalecendo a cena local e valorizando DJs que constroem essa jornada com identidade e verdade. Inspirado na Odisseia de Homero, o evento transforma a rave em uma travessia sensorial: assim como na obra, a experiência é guiada por descoberta, intensidade, mistério e conexão com o desconhecido.',
      'Entre natureza, pista e atmosfera, cada edição convida o público a viver sua própria jornada como quem atravessa territórios simbólicos, enfrenta o inesperado e encontra, na música, um lugar de pertencimento.'
    ],
    videoUrl: '/Golden_symbol_of_202603262047.mp4',
    aboutMedia: {
      type: 'video',
      url: '/Golden_symbol_of_202603262047.mp4',
      position: 'center'
    }
  },
  lineup: [
    {
      id: 'macedo',
      name: 'MACEDO',
      genre: 'PROGRESSIVE / PSYTECHNO',
      time: '',
      img: 'https://instagram.fval1-1.fna.fbcdn.net/v/t51.82787-15/587277690_18067024754528362_4754021684688367976_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc3ODIxNzA0NzY3NTcwMjMwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzMifQ%3D%3D&_nc_ohc=0v6EOCqOPEYQ7kNvwHhOSLJ&_nc_oc=AdoJZJV5P-mA6rqOcdzXRKh8zxzAbhC4HJ85HmtnI85GhrtSGoIHRQ28fEaKk0fKF2E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fval1-1.fna&_nc_gid=SWupsgmm9flEfIR9rNl_xg&_nc_ss=7a32e&oh=00_Af1DhdekV-NS0IY9NadjjESxqMZWK_0Pp3CNiXnxQFQQQw&oe=69DB9626',
      position: 'object-top',
      scUrl: 'https://soundcloud.com/macedobr/macedo-live-maze-a-delic-full-set-psytechnopsytrance',
      instagramUrl: 'https://www.instagram.com/macedobr/',
      isConfirmed: true
    },
    ...Array.from({ length: 16 }).map((_, index) => ({
      id: `unconfirmed-${index}`,
      name: 'A Confirmar',
      genre: 'Acesso Restrito',
      time: '',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_YsmN-ebI7Bc97Tg60-n1pNlVhCnkUClLw7dXd7-1f1v8H7SGSv5-TFD0PbTFckj0h52-wsdCNUsM6c77-RiynKt_RJsoG93SS07-AfjiNiDC3d5UANgF-A24hn09KxnUva8oUoqz0o8e5hVdNFswcjOtutMBPJRV38GkWUvFeMwH8X42LfWDCtg-JSygzsai2uP6EK3unq225Fx9FsQHFQ1dWLeXrI1Ir2iEh9gOuK8jFPFawxmnMkgNgz-0-t6Zk3gkjnMgCvlZ',
      position: 'object-center' as const,
      scUrl: '',
      isConfirmed: false
    }))
  ],
  gallery: [
    {
      id: 'ed1',
      title: 'Edição I',
      year: '2021',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe_5ysMY7JM7CdntWoNiRxq3V42pPRB7-TrCD8ZvWBUbTN-CMHF6Gm3963zaObE2CCHIn48Rcm4hC-IbU-VD-L3bCftMQa-b_09a1rE0oRnBsrR5jwVxQrBfba8lRkD0lwhLpaxPCGW989G9wMd_y13fZb2tcMqomXhHrvM2XUT2f3Y7Qja-KDtdZqX-2za3h9GlRFhnUe35lZ31TL--2VNukoMUZmpu8eJ-nFHKLpQQqzfp1XOzw_sASeulHGY2zmN4BIvdLnLF72',
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCe_5ysMY7JM7CdntWoNiRxq3V42pPRB7-TrCD8ZvWBUbTN-CMHF6Gm3963zaObE2CCHIn48Rcm4hC-IbU-VD-L3bCftMQa-b_09a1rE0oRnBsrR5jwVxQrBfba8lRkD0lwhLpaxPCGW989G9wMd_y13fZb2tcMqomXhHrvM2XUT2f3Y7Qja-KDtdZqX-2za3h9GlRFhnUe35lZ31TL--2VNukoMUZmpu8eJ-nFHKLpQQqzfp1XOzw_sASeulHGY2zmN4BIvdLnLF72',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAijKypXoVty-AxAw2xgztDEkXK50Ms0szy51alQFMnjDB-m-5N6S71AYpxcXpszKqFCb7PCSruQSOQKKsxt0D6NBYCQ3-zjI_23iwpQ865Gey35ZB8ZKkr53xsbzdhp4lbQV5KlDJMjQbiUbW7S7eLeZcj7SGLjTme5zPKLJy1OuqtRJQIU139nUnz5DYwB0q3V29rP9KSVi3R_gBCEdcEz7pS1FnDq-Y5e20iHlq7Lov8xg8su3TsKvHv1zA2LlMcuvuE9iNmxAB2'
      ]
    },
    {
      id: 'ed2',
      title: 'Edição II',
      year: '2022',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAijKypXoVty-AxAw2xgztDEkXK50Ms0szy51alQFMnjDB-m-5N6S71AYpxcXpszKqFCb7PCSruQSOQKKsxt0D6NBYCQ3-zjI_23iwpQ865Gey35ZB8ZKkr53xsbzdhp4lbQV5KlDJMjQbiUbW7S7eLeZcj7SGLjTme5zPKLJy1OuqtRJQIU139nUnz5DYwB0q3V29rP9KSVi3R_gBCEdcEz7pS1FnDq-Y5e20iHlq7Lov8xg8su3TsKvHv1zA2LlMcuvuE9iNmxAB2',
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAijKypXoVty-AxAw2xgztDEkXK50Ms0szy51alQFMnjDB-m-5N6S71AYpxcXpszKqFCb7PCSruQSOQKKsxt0D6NBYCQ3-zjI_23iwpQ865Gey35ZB8ZKkr53xsbzdhp4lbQV5KlDJMjQbiUbW7S7eLeZcj7SGLjTme5zPKLJy1OuqtRJQIU139nUnz5DYwB0q3V29rP9KSVi3R_gBCEdcEz7pS1FnDq-Y5e20iHlq7Lov8xg8su3TsKvHv1zA2LlMcuvuE9iNmxAB2'
      ]
    },
    {
      id: 'ed3',
      title: 'Edição III',
      year: '2023',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiUjV-Jit-a4z_9D5Nis2-V-eO5EosIeByqOayC_K3Yh-vun197p4zG5H9IBy_L6x-B58T1mCqZ5j_S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0H3X7eM1X_T3zsoH_Z3H-G1i_H2i-S0',
      photos: []
    },
    {
      id: 'ed4',
      title: 'Edição IV',
      year: '2024',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_YsmN-ebI7Bc97Tg60-n1pNlVhCnkUClLw7dXd7-1f1v8H7SGSv5-TFD0PbTFckj0h52-wsdCNUsM6c77-RiynKt_RJsoG93SS07-AfjiNiDC3d5UANgF-A24hn09KxnUva8oUoqz0o8e5hVdNFswcjOtutMBPJRV38GkWUvFeMwH8X42LfWDCtg-JSygzsai2uP6EK3unq225Fx9FsQHFQ1dWLeXrI1Ir2iEh9gOuK8jFPFawxmnMkgNgz-0-t6Zk3gkjnMgCvlZ',
      photos: []
    }
  ],
  excursions: [
    {
      id: '1',
      city: 'São Paulo',
      state: 'SP',
      status: 'VAGAS LIMITADAS',
      departureTime: 'Saída: 10:00 (Sexta-feira)',
      location: 'Metrô Barra Funda',
      price: 'R$ 150,00',
      whatsappNumber: '5511999999999',
      isActive: true
    },
    {
      id: '2',
      city: 'Campinas',
      state: 'SP',
      status: 'DISPONÍVEL',
      departureTime: 'Saída: 12:30 (Sexta-feira)',
      location: 'Rodoviária de Campinas',
      price: 'R$ 110,00',
      whatsappNumber: '5511999999999',
      isActive: true
    },
    {
      id: '3',
      city: 'Rio de Janeiro',
      state: 'RJ',
      status: 'DISPONÍVEL',
      departureTime: 'Saída: 22:00 (Quinta-feira)',
      location: 'Novo Rio',
      price: 'R$ 280,00',
      whatsappNumber: '5521999999999',
      isActive: true
    }
  ],
  tickets: [
    {
      id: 'tier1',
      title: '1º Lote',
      subtitle: 'Early Bird Spirits',
      price: 'R$ 150',
      status: 'ESGOTADO',
      features: [],
      link: '#',
      highlighted: false,
      isActive: true
    },
    {
      id: 'tier2',
      title: '2º Lote',
      subtitle: '',
      price: 'R$ 180',
      status: 'LOTE ATUAL',
      features: [
        'Acesso aos 2 dias de evento',
        'Área de Camping Standard',
        'Água free no Chillout'
      ],
      link: 'http://localhost:8123/event/1/ody-teste-local',
      highlighted: true,
      isActive: true
    },
    {
      id: 'tier3',
      title: 'Combo VIP',
      subtitle: 'Divine Experience',
      price: 'R$ 320',
      status: 'DISPONÍVEL',
      features: [
        'Backstage Access',
        'Banheiros Privativos Luxo',
        'Pulseira RFID Cashless'
      ],
      link: 'http://localhost:8123/event/1/ody-teste-local',
      highlighted: false,
      isActive: true
    }
  ]
};
