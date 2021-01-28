<template>
  <div :style="pos"  class="win">
      <div class="tit">
        {{ theme }}
        <div id="arrow">&#x25BC;</div>
        <div v-on:click="hide" id="ex">&#10005;</div>
        <div  id="minus">&#8722;</div>

      </div>
      <div class="help">
        <div id="set">Settings</div>
        <div id="he">Help</div>
      </div>
      <div class="container">
        <WinIcon v-for="(n, i) in this.images" :name="images[i]" :key="i"></WinIcon>
      </div>
    <div class="inside">{{ message }}</div>
  </div>
</template>

<script>
import WinIcon from '../components/Win311Icon'

export default {
  name: 'Win311Window',
  components: {
    WinIcon
  },
  data: function () {
    return {
      hid: ''
    }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    side: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: false
    },
    images: {
      type: Array,
      required: true
    }
  },
  computed: {
    pos () {
      return {
        '--side': this.side,
        '--position': this.position,
        '--hide': this.hid
      }
    }
  },
  methods: {
    hide: function () {
      this.hid = 'hidden'
    }
  }
}
</script>

<style src="./Win311Window.css" >

</style>
