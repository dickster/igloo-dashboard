<script>
    import { Line } from 'vue-chartjs'

    export default {
        name:'basic-chart',
        extends: Line,
        props: ['chartdata', 'options'],
        mounted () {
            this.renderChart(this.chartdata, this.options)
        },

    }
</script>

<style>
</style>
