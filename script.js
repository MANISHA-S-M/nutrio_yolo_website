window.onload = function () {
    const form = document.getElementById('nutritionForm');
    const ctx = document.getElementById('nutritionChart').getContext('2d');
    const graphModal = document.getElementById('graphModal');
    const mainContent = document.getElementById('mainContent');
    const closeBtn = document.getElementById('closeGraph');
    let nutritionChart;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const carbs = parseFloat(document.getElementById('carbs').value);
      const proteins = parseFloat(document.getElementById('proteins').value);
      const fat = parseFloat(document.getElementById('fat').value);
      const calories = parseFloat(document.getElementById('calories').value);
  
      const data = {
        labels: ['Carbs (g)', 'Proteins (g)', 'Fat (g)', 'Calories'],
        datasets: [{
          label: 'Nutrition Breakdown',
          data: [carbs, proteins, fat, calories],
          backgroundColor: ['#4db6ac', '#81c784', '#ffb74d', '#e57373'],
          borderColor: '#555',
          borderWidth: 1
        }]
      };
  
      const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      if (nutritionChart) {
        nutritionChart.destroy();
      }
  
      // Show modal and blur background
      graphModal.style.display = 'flex';
      mainContent.classList.add('blur');
  
      // Draw chart
      nutritionChart = new Chart(ctx, config);
    });
  
    // Close modal on button click
    closeBtn.addEventListener('click', () => {
      graphModal.style.display = 'none';
      mainContent.classList.remove('blur');
    });
  
    // Also close modal if user clicks outside the graph box
    graphModal.addEventListener('click', (e) => {
      if (e.target === graphModal) {
        graphModal.style.display = 'none';
        mainContent.classList.remove('blur');
      }
    });
  };
  