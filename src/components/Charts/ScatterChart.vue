<script>
    import { Scatter } from 'vue-chartjs'

    export default {
        name:'scatter-chart',
        extends: Scatter,
        props: ['chartdata', 'options'],
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style>
</style>
