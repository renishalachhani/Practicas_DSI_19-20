<template>
  <div :style="pos"  class="wind">
      <div class="titu">
        {{ theme }}
        <div id="arrow">&#x25BC;</div>
        <div v-on:click="hide" id="ex">&#10005;</div>
        <div  id="minus">&#8722;</div>
      </div>
      <div class="cont">
        <div><h5 class="wel">C:\></h5></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'terminal',
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

<style >

.wind {
  background-color: lightgrey;
  border: 4px solid lightgrey;
  width: 600px;
  height: 350px;
  margin-left: var(--side);
  margin-top: var(--position);
  visibility: var(--hide);
}

.titu{
  background-color: lightgrey;
  color: black;
  font-size: 20px;
  line-height: 30px;
  width: 600px;
  height: 30px;
}

#arrow{
  float: right;
  color: black;
  width: 30px;
  height: 31px;
  font-size: 25px;
  background: lightgrey;
  display: inline-block;
  cursor: pointer;
}
#minus {
  float: left;
  color: black;
  width: 30px;
  height: 31px;
  font-size: 35px;
  background: lightgrey;
  display: inline-block;
  cursor: pointer;
}

#ex {
  float: left;
  color: black;
  width: 30px;
  height: 31px;
  font-size: 25px;
  background: lightgrey;
  display: inline-block;
  cursor: pointer;
}

.help {
  width: 598px;
  height: 30px;
  border-bottom: solid 2px black;
  background-color: white;
}

h5 {
  margin-top: 10px;
  font-size: 15px;
  width: 45px;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3.5s steps(10, end),
  blink .75s step-end infinite;
  border-right: 1px solid white;
}

@keyframes typing {
  from { width: 0}
  to { width: 40% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: white; }
}

.cont {
  background-color: black;
  height: 290px;
  width: 590px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  color: white;
  padding: 4px;
  font-family: Lucida Console;
}

</style>
