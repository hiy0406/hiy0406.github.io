// [숙제12] 인문학 데이터 시각화
// 0000-00000 김인문

// Q1
fetch("/data/sillok.json")
    .then(response => response.json())
    .then(records => {
        const data = records;
        drawChart(data);
    });

function drawChart(rows) {
    const labels = rows.map(r => r.king);
    const counts = rows.map(r => r.volumes);

    const canvas = document.querySelector("#q1-chart");
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{ label: "권수", data: counts, backgroundColor: "rgba(54, 162, 235, 0.6)"}],
        },
        options: {
            plugins: {
                title: {display: true, text: "조선왕조실록 왕대별 권수"},
                legend: {display: true},
            },
            scales: {
                y: { beginAtZero: true, title: {display: true, text: "권수"}},
                x: {title: {display: true, text: "왕대"}},
            },
        },
    });
}

// Q2
// fetch(”/data/nobel-literature.csv”)
// .then(response => response.text())
// .then(csv => {
// ...
// });