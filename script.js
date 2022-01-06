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
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 205, 30)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
  }]
};

// var options = {
//     title: { 
//         display: true, text: "Cycle Time", fontSize: "24", fontFamily: "'Roboto', sans-serif"
//     }
// }

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
                }
                
                
            },
        },
        // cutout: 50
    }
};

const myChart = new Chart(
  document.getElementById('cycleTime').getContext('2d'), 
  config
);

/////////////////// Chart two/////////////////////////////////

const stackData = {
        labels: [""],
        
        datasets: [{
            data: [727],
            backgroundColor: "rgba(63,103,126,1)",
            hoverBackgroundColor: "rgba(50,90,100,1)",
             barThickness: 20,
             borderRadius: 200
            },{
                data: [238],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)",
                barThickness: 20,
                borderRadius: 200

            },{
                data: [1238],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)",
                barThickness: 20,
                borderRadius: 200
            },
            {
                data: [1238],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)",
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


/////////////////////////// Bar Chart ///////////////////////
// setup 
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

    // config 
    const timeConfig = {
      type: 'bar',
      data: timeData,
      options: {
          layout: {
            // padding: 20
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

    // render init block
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