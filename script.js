// Chart 1 Dougnut

const labels = [
    '4hrs Coding',
    '8hrs Code Review',
    '1hr QA Review',
    '3hrs Idle Time',
    '1hr Deployment',
];

const data = {
  labels: [
    '4hrs Coding',
    '8hrs Code Review',
    '1hr QA Review',
    '3hrs Idle Time',
    '1hr Deployment',
  ],
  datasets: [{
      label: 'My First Dataset',
      data: [4, 8, 1, 3, 1],
      backgroundColor: [
          'rgb(49, 242, 145)',
          'rgb(54, 162, 235)',
          'rgb(4, 5, 19)',
          'rgb(242, 49, 49)',
          'rgb(128, 0, 128)'
        ],
        hoverOffset: 4,
  }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    boxWidth: 12,
                font: {
                    size: 10
                    }

                }
                
                
            },
        },
    }
};

const myChart = new Chart(
  document.getElementById('cycleTime').getContext('2d'), 
  config
);

/////////////////// Chart two Straight Bar/////////////////////////////////

const stackData = {
        labels: [""],
        
        datasets: [{
            label: "work",
            data: [25],
            backgroundColor: "rgb(49, 242, 145)",
             barThickness: 20,
             borderRadius: 200
            },{
                label: "rework",
                data: [15],
                backgroundColor: "rgb(49, 219, 242)",
                barThickness: 20,
                borderRadius: 200

            },{
                label: "refactor",
                data: [40],
                backgroundColor: "rgb(4, 5, 19)",
                barThickness: 20,
                borderRadius: 200
            },
            {
                label: "Bug",
                data: [20],
                backgroundColor: "rgb(242, 49, 49)",
                barThickness: 20,
                borderRadius: 200
            }
            ]
    }



const stackConfig = {

    tooltips: {
        enabled: false
    },



  type: 'bar',
  data: stackData,
  options: {
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: {
      legend: {
          position: "bottom",
          labels: {
                    boxWidth: 12,
                    font: {
                    size: 10
                    }
                }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        scaleLabel:{
                display:false
            },
            ticks: {
                    display: false
                },
        grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false,

        }
    },

    y: {
        stacked: true,
        ticks: {
                    display: false
                },
        grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false,
        }

      }
    }
  }
};

const myStackChart = new Chart(
  document.getElementById('workBreakdown').getContext('2d'), 
  stackConfig
);


/////////////////////////// Multiple Bar Chart ///////////////////////
    const timeData = {
      labels: [
    'Coding',
    'Code Review',
    'QA Review',               

  ],
  datasets: [{
      
      data: [4.5, 1.5, 2],
      backgroundColor: [
          'rgb(242, 241, 241)',
        ],
        hoverOffset: 4,
        barThickness: 30,
        borderRadius: 5
    },
    {
        data: [2, 4, 4],
        backgroundColor: [
            'rgb(123, 196, 123)',
            
        ],
        hoverOffset: 4,
        barThickness: 30,
        borderRadius: 5

  }]
    };

    const timeConfig = {
      type: 'bar',
      data: timeData,
      options: {
          layout: {
            font: 5
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                    display: false
                },
            grid: {
                drawBorder: false,
                drawOnChartArea: false,
                display: false,
            }
        },
        x: {
            grid: {
                display: false,
                drawOnChartArea: false
            }
            
          }
        },
        plugins: {
            legend: {
                display: false,                
            },
        },
      }
    };

    Chart.defaults.font.size = 10;

    const myBarChart = new Chart(
      document.getElementById('timebreakdown'),
      timeConfig
    );


    /////////////// Open Nav /////////////////////
let menu_toggle = document.getElementById('menu-toggle');
menu_toggle.addEventListener('click', () => {
	document.getElementById('sidebar_2').classList.add('show_sidebar_2');
});

let menu_toggle_2 = document.getElementById('menu-toggle-2');
menu_toggle_2.addEventListener('click', () => {
	document.getElementById('sidebar_2').classList.remove('show_sidebar_2');
});