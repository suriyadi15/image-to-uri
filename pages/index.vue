<template>
  <div class="container mx-auto">
    <h1 class="text-center text-2xl font-bold tracking-tight sm:text-3xl mb-4">
      Drag and drop or paste images here to get URI
    </h1>

    <img class="w-full h-64 object-contain" :src="imageSource" alt="" />

    <p class="overflow-x-auto">{{ imageURL }}</p>
  </div>
</template>

<script>
import { onPasteImage } from '@/utils/paste-image'
import { imageToURL } from '@/utils/image-util'

export default {
  name: 'IndexPage',
  data: () => ({
    imageURL: 'asdas d',
    imageSource: null,
  }),

  mounted() {
    onPasteImage((image) => this.handleImageClipboard(image))
  },

  methods: {
    async handleImageClipboard(image) {
      const imageURL = await imageToURL(image)
      this.imageSource = imageURL
      this.imageURL = imageURL
    },
  },
}
</script>
