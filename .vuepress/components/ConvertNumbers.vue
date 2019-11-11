<template>
    <div class="color-component">
        <div>
            Decimal: <input type="text" v-model="inputValue" >
        </div>
        <div>
            <div class="output">Hex: {{hex}}</div>
            <div class="output">Binary: {{binary}}</div>
            <div class="output">Base36: {{base36}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            initialValue: Number
        },
        data() {
            return {
                inputValue: this.$props.initialValue,
            }
        },
        computed: {
            hex() {
                return Number(this.inputValue).toString(16)
            },
            binary() {
                return Number(this.inputValue).toString(2)
            },
            base36() {
                return Number(this.inputValue).toString(36)
            },

        }
    }

</script>
<style lang="stylus" scoped>
    .color-component {
        border: 5px solid $borderColor;
        background-color: $textColor;
        border-radius: 1rem;
        color: white;
        display: flex;

        & > div {
            padding:2rem;
        }

        input {
            padding: 0.5rem;
            border-radius: 1rem;
        }
    }
</style>
