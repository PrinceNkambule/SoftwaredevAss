document.getElementById('dataform').addEventListener('submit', async function(event) {
    event.preventDefault();

    const names = document.getElementById('names').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const numbers = document.getElementById('numbers').value;

    const Pizza = document.getElementById('Pizza').checked ? 'Yes' : 'No';
    const Pasta = document.getElementById('Pasta').checked ? 'Yes' : 'No';
    const Pap_and_Wors = document.getElementById('Pap_and_Wors').checked ? 'Yes' : 'No';
    const Other = document.getElementById('Other').checked ? 'Yes' : 'No';

    const Strongly_agree = document.getElementById('Strongly_agree').checked ? 'Yes' : 'No';
    const Agree = document.getElementById('Agree').checked ? 'Yes' : 'No';
    const Neutral = document.getElementById('Neutral').checked ? 'Yes' : 'No';
    const Disagree = document.getElementById('Disagree').checked ? 'Yes' : 'No';
    const Strongly_Disagree = document.getElementById('Strongly_Disagree').checked ? 'Yes' : 'No';

    
    //Send data to the server
    const response = await fetch('/submit',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: names, email, dob, numbers, Pizza, Pasta, Pap_and_Wors, Other, Strongly_agree, Agree, Neutral, Disagree, Strongly_Disagree })
    });
   
    const resultspage = await response.json();
    localStorage.setItem('Total number of surveys: ',resultspage.surveys,'average age: ',resultspage.averageage,'Oldest person who parcitipated in survey: ',resultspage.maxage,'Youngest person who parcitipated in survey: ',resultspage.minage,
        'Percentage of people who like Pizza: ',resultspage.pizzapercent, 'Percentage of people who like Pasta: ',resultspage.pastapercent, 'Percentage of people who like Pap and Wors: ',resultspage.papandworsperc,
        'People who like to watch movies: ',resultspage.averagerating,'People who like to listen to radio : ',resultspage.averagerating,'People who like to eat out: ',resultspage.averagerating,'People who like to watch Tv : ',resultspage.averagerating

    );
    document.getElementById('names','email','dob','numbers','Pizza','Pasta','Pap_and_Wors','Other','Strongly_agree','Agree','Neutral','Disagree','Strongly_Disagree').value=''; //clear input field
    
});

document.getElementById('Submit').addEventListener('click', function() {
    window.location.href = 'resultspage.html';
});

if(window.location.pathname.endsWith('resultspage.html')) {
    const surveys = localStorage.getItem(surveys);
    const averageage = localStorage.getItem(averageage);
    const maxage = localStorage.getItem(maxage);
    const minage = localStorage.getItem(minage);

    const pizzapercent = localStorage.getItem(pizzapercent);
    const pastapercent = localStorage.getItem(pastapercent);
    const papandworsperc = localStorage.getItem(papandworsperc);
    

    const averagerating1 = localStorage.getItem(averagerating1);
    const averagerating2 = localStorage.getItem(averagerating2);
    const averagerating3 = localStorage.getItem(averagerating3);
    const averagerating4 = localStorage.getItem(averagerating4);
    
    document.getElementById(resultsContent).innerText = 'Total number of surveys: ${surveys}'
    document.getElementById(resultsContent).innerText = 'Average Age : ${averageage}'
    document.getElementById(resultsContent).innerText = 'Oldest person who parcitipated in survey : ${maxage}'
    document.getElementById(resultsContent).innerText = 'Youngest person who parcitipated in survey : ${minage}'
    document.getElementById(resultsContent).innerText = 'Percentage of people who like Pizza : ${pizzapercent}'
    document.getElementById(resultsContent).innerText = 'Percentage of people who like Pasta : ${pastapercent}'
    document.getElementById(resultsContent).innerText = 'Percentage of people who like Pap and Wors : ${papandworsperc}'
    document.getElementById(resultsContent).innerText = 'People who like to watch movies : ${averagerating1}'
    document.getElementById(resultsContent).innerText = 'People who like to listen to radio : ${averagerating2}'
    document.getElementById(resultsContent).innerText = 'People who like to eat out : ${averagerating3}'
    document.getElementById(resultsContent).innerText = 'People who like to watch Tv : ${averagerating4}'



    if (names.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (dob.trim() === '' || numbers.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (Pizza.trim() === '' || Pasta.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (Pap_and_Wors.trim() === '' || Other.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (Strongly_agree.trim() === '' || Agree.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (Neutral.trim() === '' || Disagree.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (Strongly_Disagree.trim() === ''){
        alert('Please fill in all fields');
        return;
    }

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    })
}

    
