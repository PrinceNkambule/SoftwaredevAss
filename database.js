const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// Create table
db.serialize(() => {
    db.run("CREATE TABLE data (value TEXT)");
});

function saveData(data) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare("INSERT INTO data (value) VALUES (?)");
        stmt.run(data, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
        stmt.finalize();
    });
}

function surveys(dataform) {
    
                let totalsurveys = 0;
                for (const survey of surveys){
                    if(survey.dataform== dataform){
                        totalsurveys++;
                    }
                }
                
                 
                return(totalsurveys);
            }
       
    


//functions 11

function averageage(dataform) {
    
                let totalAge = 0
                let totalresponses = 0;

                for(const respondent of dataform){
                    if(respondent.dataform === dataform){
                        totalAge += respondent.age;
                        totalresponses++;
                    }
                }
                if(totalresponses === 0){
                    return 0;
                }
                return totalAge/ totalresponses;
            }
        

function maxage(dataform) {
    
                let maxAge = -Infinity;

                for(const respondent of dataform){
                    if(respondent.dataform === dataform){
                        const dob = new Date(respondent.dob);
                        const age = calcAge(dob);
                        if(age > maxAge) {
                            maxAge = age;
                        }
                    }
                }
                return maxAge === -Infinity ?0 : maxAge;
            }
        

function minage() {
    
                let minAge = -Infinity;

                for(const respondent of dataform){
                    if(respondent.dataform === dataform){
                        const dob = new Date(respondent.dob);
                        const age = calcAge(dob);
                        if(age < minAge) {
                            minAge = age;
                        }
                    }
                }
                return minAge === Infinity ?0 : minAge;
            }
            
        

function pizzapercent() {
    
                let totalRespondents = 0;
    let pizzaCount = 0;

    for (const respondent of respondentData) {
        if (respondent.formId === formId) {
            totalRespondents++;
            if (respondent.checkboxAnswers.includes('Pizza')) {
                pizzaCount++;
            }
        }
    }

    if (totalRespondents === 0) {
        return 0; // Return 0 to avoid division by zero error
    }

    return (pizzaCount / totalRespondents) * 100;
}

        
    


function pastapercent(dataform) {
    
                let totalRespondents = 0;
                let pastaCount = 0;
            
                for (const respondent of dataform) {
                    if (respondent.formId === formId) {
                        totalRespondents++;
                        if (respondent.checkboxAnswers.includes('Pasta')) {
                            pastaCount++;
                        }
                    }
                }
            
                if (totalRespondents === 0) {
                    return 0; // Return 0 to avoid division by zero error
                }
            
                return (pizzaCount / totalRespondents) * 100;
            }
            
           
        
    


function papandworsperc(dataform) {
   
            
                let totalRespondents = 0;
                let papworsCount = 0;
            
                for (const respondent of dataform) {
                    if (respondent.formId === formId) {
                        totalRespondents++;
                        if (respondent.checkboxAnswers.includes('Pap_and_Wors')) {
                            papworsCount++;
                        }
                    }
                }
            
                if (totalRespondents === 0) {
                    return 0; // Return 0 to avoid division by zero error
                }
            
                return (papworsCount / totalRespondents) * 100;
            }
            
        

function averagerating1(dataform) {
   
                let totalRatings = 0;
    let totalRespondents = 0;

    for (const respondent of respondentData) {
        if (respondent.formId === formId && respondent.likeMovies && typeof respondent.movieRating === 'number') {
            totalRatings += respondent.movieRating;
            totalRespondents++;
        }
    }

    if (totalRespondents === 0) {
        return 0; // Return 0 to avoid division by zero error
    }

    return totalRatings / totalRespondents;
}

function averagerating2(dataform) {
   
                let totalRatings = 0;
    let totalRespondents = 0;

    for (const respondent of respondentData) {
        if (respondent.formId === formId && respondent.likeradio && typeof respondent.radio === 'number') {
            totalRatings += respondent.radio;
            totalRespondents++;
        }
    }

    if (totalRespondents === 0) {
        return 0; // Return 0 to avoid division by zero error
    }

    return totalRatings / totalRespondents;
}


function averagerating3(dataform) {
   
                let totalRatings = 0;
    let totalRespondents = 0;

    for (const respondent of respondentData) {
        if (respondent.formId === formId && respondent.likeeat && typeof respondent.eat === 'number') {
            totalRatings += respondent.eat;
            totalRespondents++;
        }
    }

    if (totalRespondents === 0) {
        return 0; // Return 0 to avoid division by zero error
    }

    return totalRatings / totalRespondents;
}
        

function averagerating4(dataform) {
    
                let totalRatings = 0;
    let totalRespondents = 0;

    for (const respondent of respondentData) {
        if (respondent.formId === formId && respondent.likeTv && typeof respondent.Tv === 'number') {
            totalRatings += respondent.Tv;
            totalRespondents++;
        }
    }

    if (totalRespondents === 0) {
        return 0; // Return 0 to avoid division by zero error
    }

    return totalRatings / totalRespondents;
}
        



module.exports = { saveData,surveys,averageage,maxage,minage,pizzapercent,pastapercent,papandworsperc, averagerating1,averagerating2,averagerating3,averagerating4 };
