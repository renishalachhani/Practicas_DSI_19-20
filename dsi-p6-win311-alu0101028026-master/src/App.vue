<template>
  <div id="app">
    <WinIcon v-for="(n, i) in this.md" :name="md[i]" :key="i" />
    <WinWindow theme="Control Panel" side="200px" position="0px" :images= "panel" />
    <WinWindow theme="Application" side="100px" position="-80px" message="Select app to open..." :images="appl" />
    <terminal theme="Terminal" side="700px" position="-300px" />
  </div>
</template>

<script>
import WinWindow from './components/Win311Window.vue'
import WinIcon from './components/Win311Icon.vue'
import terminal from './components/Terminal.vue'

export default {
  name: 'App',
  components: {
    WinWindow,
    WinIcon,
    terminal
  },
  data: function () {
    return {
      panel: ['calendar', 'charmap', 'clipboard', 'colors', 'desktop', 'keyboard', 'cd', 'fonts', 'international', 'programs'],
      appl: ['paintbrush', 'calc', 'write', 'notepad', 'clock'],
      md: ['msdos']
    }
  }
}
</script>

<style>

body {
  background-color: #24c0a4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
