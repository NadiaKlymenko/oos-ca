export const searchForm = {
  name: {
    input: 'form#filters input[id=name]'
  },
  city: {
    input: 'form#filters input[id=city]'
  },
  submitBtn: 'form#filters button[type=submit]',
  clearBtn: 'form#filters button[type=button]'
};

export const cardDesk = {
  card: {
    container: ({ uuid = '', column } = {}) => 
      `${column ? `[data-test="column-${column}"]`: ''} [data-test^="crew-member-card-${uuid}"]`, 
    nextBtn: (params) => `${cardDesk.card.container(params)} [data-test="next-btn"]`,
    prevBtn: (params) => `${cardDesk.card.container(params)} [data-test="prev-btn"]`
  }
}
