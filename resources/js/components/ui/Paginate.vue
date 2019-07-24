<template>
    <div>
        <ul class="d-flex list-unstyled border border-grey rounded w-auto font-sans overflow-hidden mb-0">
            <li>
                <a href="" class="d-block border-right border-grey px-3 py-2" :class="{'bg-primary text-white': prevUrl != null, 'cursor-not-allowed text-grey-dark' : prevUrl == null}" @click.prevent="prevPage()">Prev</a>
            </li> 
            <li>
                <a href="" class="d-block px-3 py-2" :class="{'bg-primary text-white': nextUrl != null, 'cursor-not-allowed text-grey-dark' : nextUrl == null}" @click.prevent="nextPage()">Next</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        prevUrl: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null,
            default: null
        },
        nextUrl: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null,
            default: null
        },
        clickHandler: {
            type: Function,
            default: () => { }
        }
    }, 
    
    methods: {
        pageNumber(page)
        {
            return page.split(/[page= ]+/).pop() 
        },

        prevPage() {
            if (this.prevUrl == null) return

            let number = this.pageNumber(this.prevUrl) 
            this.$emit('input', number)
            this.clickHandler(number)
        },
        nextPage() {
            if (this.nextUrl == null) return

            let number = this.pageNumber(this.nextUrl) 
            this.$emit('input', number)
            this.clickHandler(number)
        },
    }
}
</script> 
<style scoped>
a {
    text-decoration: none;
}
</style>


