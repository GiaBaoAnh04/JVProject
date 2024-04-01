const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'đồng/ngày',
      data: [12, 19, 3, 5, 2, 3, 50],
      borderWidth: 0,
      backgroundColor: [ "#A6998C",]
    }]
  },
  options: {
    responsive: true,
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom:0,
        },
    },
  }
});