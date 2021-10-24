export default {
    formatSparkline(sparkline: number[]) {
        return sparkline.map((data, index) => ({ x: index, y: data }));
    },
};
