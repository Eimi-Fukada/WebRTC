<template>
  <div>
    <video
      :srcObject="localStream"
      autoplay
      muted
      playsinline
      class="video"
      style="background-color: aquamarine"
    />
    <video
      :srcObject="remoteStream"
      autoplay
      muted
      playsinline
      class="video"
      style="background-color: bisque"
    />
    <input v-model="inputValue" placeholder="confirm your peerid" />
    <button @click="startConnect" class="btn">开始</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Peer from 'peerjs'

const peerRef = ref<Peer>()
const peerId = ref<string>('')
const inputValue = ref<string>('')

const localStream = ref<MediaStream>()
const remoteStream = ref<MediaStream>()

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
  const peer = new Peer()
  peerRef.value = peer
  peerRef.value.on('open', (id) => {
    console.log('id===', id)
    peerId.value = id
  })
  peerRef.value.on('call', (call) => {
    console.log('Incoming call:', call)
    call.answer(localStream.value)
    call.on('stream', (stream) => {
      remoteStream.value = stream
    })
  })
}

const startConnect = async () => {
  const userStream = await getUserMedia()
  localStream.value = userStream
  if (inputValue.value && peerRef.value) {
    const call = peerRef.value.call(inputValue.value, userStream)
    call.on('stream', (stream) => {
      remoteStream.value = stream
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
