<template>
  <div class="chats-container">
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
 </div>
</template>

<script>
import Message from '~/components/Message'

export default {
 components: {
   Message
 }
}
</script>


<style >
.chats-container {
 padding: 16px;
}

.chat-container {
 display: flex;
 padding: 8px;
}

.thumbnail-container {
 margin-right: 16px;
}

.thumbnail-container img {
 width: 50px;
 height: 50px;
 border-radius: 10px;
}

.user-name {
 font-weight: bold;
}

</style>