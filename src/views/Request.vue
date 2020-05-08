<template>
<div>
    <div class="options">
        <div class="stones">
        <h3 class="text-2xl text-center">Stones</h3>
        <ul id="stonesList">
            <li @click="moveToChosen(stones, index)" class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Diamond</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Emerald</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Sapphire</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Ruby</li>
        </ul>
        </div>
        <div>
        <h3 class="text-2xl text-center">Accessory</h3>
        <ul id="accessoryList">
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Ring</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Earring</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Bracelet</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Necklace</li>
        </ul>
        </div>
        <div>
        <h3 class="text-2xl text-center">Cut</h3>
        <ul id="cutList">
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Round Brilliant Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Princess Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Marquise Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Cushion Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Emerald Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Radiant Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Pear Shaped</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Oval Cut</li>
            <li class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-yellow-500">Asscher Cut</li>
        </ul>
        </div>
    </div>
    <div class="chosen" v-if="totalChosen>0">
        <h3 class="text-2xl text-center">Chosen options:</h3>
        <ul id="chosenList">
            <li v-for="(chosen, index) in chosenList" :key="index"
            class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer">
            {{chosen}}
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Request",
        data() {
            return {
                chosenList: []
            }
        },
        computed: {
            totalChosen() {
                return this.chosenList.length; 
            }
        },
        methods: {
            moveToChosen(options, index) {
                this.chosenList.push(options);
                this.stoneslist.splice(index, 1);
            }
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
</style>