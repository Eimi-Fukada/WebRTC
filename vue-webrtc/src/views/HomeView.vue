<template>
  <div>
    <video
      v-for="(item, index) in streams"
      :key="index"
      :srcObject="item"
      autoplay
      muted
      playsinline
      class="video"
    />
    <button @click="startConnect" class="btn">开始</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Peer from 'peerjs'

const peer = ref<Peer>()
const peerId = ref<string>('')
const streams = ref<MediaStream[]>([])
const remoteStreams = ref<MediaStream[]>([])

const getUserMedia = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    return stream
  } catch (err) {
    console.error('Error accessing media devices.', err)
    throw err
  }
}

const initPeer = () => {
  peer.value = new Peer({
    host: 'localhost',
    port: 3000,
    path: '/mypeer',
    debug: 2
  })

  // peer.value.on('open', (id) => {
  //   console.log('id==', id)
  //   peerId.value = id
  // })

  // peer.value.on('connection', (connection) => {
  //   console.log('connection==', connection)
  // })

  // peer.value.on('call', (call) => {
  //   console.log('call==', call)
  //   call.answer(streams.value[0])
  //   call.on('stream', (remoteStream) => {
  //     remoteStreams.value = remoteStreams.value.concat(remoteStream)
  //     streams.value = [...streams.value, ...remoteStreams.value]
  //   })
  // })
}

const startConnect = async () => {
  const userSteam = await getUserMedia()
  streams.value = streams.value.concat(userSteam)
  console.log('====', userSteam)
  if (peerId.value) {
    const call = peer.value?.call(peerId.value, userSteam)
    call?.on('error', (error) => {
      console.log('call error', error)
    })
  }
}

onMounted(() => {
  initPeer()
})
</script>

<style scoped>
.video {
  width: 300px;
  height: 300px;
}
.btn {
  display: block;
}
</style>
