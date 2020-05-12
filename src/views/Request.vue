<template>
<div>
    <div class="options">
        <div class="stones" v-if="totalStones>3">
        <h3 class="text-2xl text-center">Stones</h3>
        <ul>
            <li v-for="(stones, index) in stonesList" :key="index"
            @click="moveToChosen(stones, index)"
            class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">
            {{stones}}
            </li>
        </ul>
        </div>
        <div class="accessory" v-if="totalAccessories>3">
        <h3 class="text-2xl text-center">Accessory</h3>
        <ul>
            <li v-for="(accessories, index) in accessoryList" :key="index"
            @click="moveToChosen2(accessories, index)"
            class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">
            {{accessories}}
            </li>
        </ul>
        </div>
        <div class="cut" v-if="totalCuts>8">
        <h3 class="text-2xl text-center">Cut</h3>
        <ul>
            <li v-for="(cuts, index) in cutList" :key="index"
            @click="moveToChosen3(cuts, index)"
            class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">
            {{cuts}}
            </li>
        </ul>
        </div>
    </div>
    <div class="chosen" v-if="totalChosen>0">
        <h3 class="text-2xl text-center">Chosen options:</h3>
        <ul id="chosenList">
            <li v-for="(chose, index) in chosenList" :key="index"
            class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer">
            {{chose}}
            </li>
        </ul>
        <router-link class="justify-center items-center flex bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to="/login">Submit</router-link>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Request",
        data() {
            return {
                option: "",
                stones: "",
                chosenList: [],
                stonesList: [
                "Diamond",
                "Ruby",
                "Sapphire",
                "Emerald"],
                accessoryList: [
                  "Ring",
                  "Earring",
                  "Bracelet",
                  "Necklace"
                ],
                cutList: [
                  "Round Brilliant Cut",
                  "Princess Cut",
                  "Marquise Cut",
                  "Cushion Cut",
                  "Emerald Cut",
                  "Radiant Cut",
                  "Pear Shaped",
                  "Oval Cut",
                  "Asscher Cut"
                ]
            }
        },
        computed: {
            totalChosen() {
                return this.chosenList.length; 
            },
            totalStones() {
              return this.stonesList.length;
            },
            totalAccessories() {
              return this.accessoryList.length;
            },
            totalCuts() {
              return this.cutList.length;
            },
        },
        methods: {
            moveToChosen(stones, index) {
                this.chosenList.push(stones);
                this.stonesList.splice(index, 1);
            },
            moveToChosen2(accessory, index) {
                this.chosenList.push(accessory);
                this.accessoryList.splice(index, 1);
            },
            moveToChosen3(cut, index) {
                this.chosenList.push(cut);
                this.cutList.splice(index, 1);
            },
        },
}
</script>

<style lang="scss" scoped>
.container{
    display: table;
    table-layout: fixed;
    margin-top: 10px;
}
ul{
    display: table-cell;
}
