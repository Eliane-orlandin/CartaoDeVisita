export const PROFILE = {
  NAME: 'Patricia Paz',
  ROLE: 'Micropigmentadora',
  INSTAGRAM: 'patriciapaz_bufalari',
  WHATSAPP: '11961144999', //Apenas números: DDD + Número do celular
  PHONE: '(11) 2295-6495',
};

export const BUSINESS = {
  NAME: 'Stella Cabeleireiros',
  ADDRESS: 'Rua Tuiuti, 2036, Tatuapé, São Paulo, Brasil',
};

export const CARDINFO = `
Contato ${PROFILE.NAME}
Telefone ${PROFILE.PHONE}
Endereço https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.ADDRESS)}
Instagram https://www.instagram.com.br/${PROFILE.INSTAGRAM}
WhatsApp: https://wa.me/55${PROFILE.WHATSAPP}
`;
