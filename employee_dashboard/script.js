const chart=document.querySelector("#chart").getContext('2d')

// create new chart

new Chart(chart,{
    type: 'pie',
    data:{
       labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV'],

       datasets: [
        {
            label: 'BTC',
            data: [0,3537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(2, 205, 86)',
                'rgb(255, 2, 86)',
                'rgb(255, 205, 8)',
                'rgb(155, 105, 86)',
                'rgb(55, 105, 6)',
                'rgb(45, 05, 86)',
                'rgb(35, 35, 86)',
                'rgb(15, 56, 186)',
                'rgb(25, 05, 286)',
              ],
            borderWidth: 2

        },
        // {
        //     label: 'ETH',
        //     data: [31500, 41000, 88800, 26000, 46000, 36684, 32698, 5000, 3000, 18656, 24832,36844],
        //     borderColor: 'blue',
        //     borderWidth: 2

        // }
    ]
    },
    options:{
        responsive: true
    }
})

//sidebar hide show

const menubtn=document.querySelector('#menu-btn');
const closebtn=document.querySelector('#close-btn');
const sidebar=document.querySelector('aside');

menubtn.addEventListener('click', () =>{
    sidebar.style.display="block";
})

closebtn.addEventListener('click', () =>{
    sidebar.style.display="none";
})


// change theame

const themebtn=document.querySelector('.theme-btn');

themebtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');

    themebtn.querySelector('span:last-child').classList.toggle('active');
})