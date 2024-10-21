document.addEventListener('DOMContentLoaded', function() {
    // Task Progress Chart
    new Chart(document.getElementById('progressChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Not Started'],
            datasets: [{
                data: [5, 3, 2],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(249, 115, 22, 0.7)'
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(249, 115, 22, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Task Progress'
                }
            }
        }
    });

    // Tasks by Category Chart
    new Chart(document.getElementById('categoryChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Development', 'Design', 'Marketing', 'Research'],
            datasets: [{
                label: 'Number of Tasks',
                data: [4, 2, 3, 1],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(236, 72, 153, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(249, 115, 22, 0.7)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(236, 72, 153, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(249, 115, 22, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Tasks by Category'
                }
            }
        }
    });
});