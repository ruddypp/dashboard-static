document.addEventListener('DOMContentLoaded', function() {
    // Sales Overview Chart
    new Chart(document.getElementById('salesChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Sales'
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
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Sales by Category'
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
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Revenue'
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


