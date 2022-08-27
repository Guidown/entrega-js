import Chart from "chart.js";
const ctx = document.getElementById("myChart").getContext("2d");
const Celulares = ["Samsung", "Huawei", "Iphone"];
const precio = [132761, 112634, 249576];

const myChart = new Chart(ctx, {
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
