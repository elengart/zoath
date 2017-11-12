module.exports = {
    sortSelectOptions:[
     {
        label: 'Featured',
        value: 'FEATURED'
     },
     {
        label: 'Name, Ascending',
        value: 'NAME_ASC',
     },
     {
        label: 'Name, Descending',
        value: 'NAME_DESC',
     },
  ],

  sortOptions: {
     FEATURED: {},
     NAME_ASC: {
        field: 'name',
        order: 'asc'
     },
     NAME_DESC: {
        field: 'name',
        order: 'desc'
     }
  }
}
