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
     {
        label: 'Priority, Low to High',
        value: 'PRIORITY_ASC',
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
     },
     PRIORITY_ASC: {
        field: 'priority',
        order: 'asc'
     }
  }
}
