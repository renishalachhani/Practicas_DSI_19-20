<template>
  <div v-on:click="highlight" v-on:dblclick="popup" class="ims" :style="{background: color}">
    <img :src="require(`@/assets/icons/${icon}`)" />
    <h2 class="texto" :style="{color: writing}" >{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Win311Icon',
  props: {
    name: String
  },
  data: function () {
    return {
      icon: this.name + '.png',
      color: '',
      clicked: false,
      writing: '',
      selected: name
    }
  },
  methods: {
    popup: function () {
      confirm('Open ' + this.name)
    },
    highlight: function () {
      if (this.clicked === false) {
        this.writing = 'white'
        this.color = 'darkblue'
        this.clicked = true
        return {
          '--writing': this.writing,
          '--color': this.color
        }
      } else {
        this.color = ''
        this.writing = ''
        this.clicked = false
        return {
          '--writing': this.writing,
          '--color': this.color
        }
      }
    }
  }
}
</script>

<style>
.ims{
  height: 70px;
  width: 80px;
  font-size: 10px;
  color: #404040;
  cursor: pointer;
}

</style>
