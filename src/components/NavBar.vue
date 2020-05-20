<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img class="h-8 mr-4" src="fpLogos.jpg" alt="Logo" />
    <router-link to="/">
    <span class="font-semibold text-xl tracking-tight">Mel's Designs</span>
    </router-link>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <router-link v-if="user" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-'#FBC02D' mr-4" to="/request">
        Request a quote
      </router-link>
      <router-link v-if="user" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-'#FBC02D' mr-4" to="/requestcheck">
        Check your request
      </router-link>
      <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green mr-4" to="/about">
        About
      </router-link>
      <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white" to="/stores">
        Stores
      </router-link>
    </div>
    <div>
      <router-link 
      v-if="!user"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0"
      to="/login"
      >Login</router-link
      >
      <button 
      v-if="user"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
      @click="logout"
      >Logout</button
      >
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "VarBar",
  computed: {
    user() {
      return this.$store.getters.getUser 
    }
  },
  methods: {
    logout() {
      this.$firebase.auth().signOut()
      this.$store.dispatch("setUser", "")
      this.$store.push("/")      
    }
  }
};
</script>