import { Chart } from "chart.js";
const ChartGrafico = document.getElementById("Chart");
const Celulares = ["Samsung", "Huawei", "Iphone"];
const precio = [132761, 112634, 249576];

const GraficoChart = new Chart(grafico, {
  type: "bar",
  data: {
    labels: Celulares,
    datasets: [
      {
        label: "Precio Promedio",
        data: precio,
        backgroundColor: ["white", "red", "green"],
      },
    ],
    borderColor: ["black", "black", "black"],
    borderWidth: 1.5,
  },
});
