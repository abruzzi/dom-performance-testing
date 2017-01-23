<template>
    <div>
        <card v-for="item in items" v-bind:item="item">
        </card>
    </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'cards',
  data () {
    return {
        items: []
    }
  },
  mounted () {
    var self = this;
    this.$http.get('/static/data/cards.json').then((response) => {
        self.items = response.data;
      }, (error) => {
        console.log(JSON.stringify(error));
      });
  },
  components: {
    Card
  }
}
</script>