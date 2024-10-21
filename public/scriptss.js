Chart.register(ChartDataLabels);
        
document.addEventListener('DOMContentLoaded', function() {
    // Sales Trend Chart
    new Chart(document.getElementById('salesChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Sales Trend'
                },
                datalabels: {
                    color: '#333',
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round
                }
            }
        }
    });

    // Product Categories Chart
    new Chart(document.getElementById('categoriesChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Electronics', 'Clothing', 'Food', 'Books'],
            datasets: [{
                data: [30, 25, 20, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateRotate: true,
                animateScale: true
            },
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Sales by Category'
                },
                datalabels: {
                    color: '#fff',
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(2)+"%";
                        return percentage;
                    }
                }
            }
        }
    });

    // Monthly Revenue Chart
    new Chart(document.getElementById('revenueChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Revenue'
                },
                datalabels: {
                    color: '#fff',
                    anchor: 'center',
                    align: 'center',
                    formatter: Math.round
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});