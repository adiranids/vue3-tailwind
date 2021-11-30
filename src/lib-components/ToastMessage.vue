<template>
    <div v-bind="$attrs" :class="typeClass">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props:{
        type:{
            type: String,
            validator: (propValue: string)=>{
                return ['error', 'success', 'normal'].indexOf(propValue) > -1
            },
            default: 'normal'
        }
    },
    setup(props){
        const typeClass = computed(() => {
            if(props.type == 'error')
            return 'text-red-500'
            else if(props.type =="success")
            return 'text-green-500'
            else if(props.type == "normal")
            return 'text-base'
        })

        return {
            typeClass
        }
    }
})
</script>
