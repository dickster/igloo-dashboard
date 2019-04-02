<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
      >
        <md-table-cell md-label="column1">{{ item.a}}</md-table-cell>
        <md-table-cell md-label="column2">{{ item.b}}</md-table-cell>
        <md-table-cell md-label="column3">{{ item.c}}</md-table-cell>
        <md-table-cell md-label="column4">{{ item.d}}</md-table-cell>
        <md-table-cell md-label="column5">{{ item.e}}</md-table-cell>
        <md-table-cell md-label="column6">{{ item.f}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      selected: [],
      users: []
    };
  },
    mounted() {
      this.users = []
        let i = 0
        for (i=0;i<20;i++) {
            this.users.push({
                a:Math.random()*100,
                b:Math.random()*100,
                c:Math.random()*100,
                d:Math.random()*100,
                e:Math.random()*100,
                f:Math.random()*100,
            })
        }
    },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
