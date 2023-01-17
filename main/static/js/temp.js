//multiple skills

var count = 1;
            var radioCount = 2;
            var totalRadioCount = 2;
            var questionRadioCount = "2";
            var totalQuestionCount = 1;
            var latestQuestionID = 1;
            var questionRadioCountArray = [[1, 2]];
            var counta = 1;
            var radioCounta = 2;
            var totalRadioCounta = 2;
            var questionRadioCounta = "2";
            var totalQuestionCounta = 1;
            var latestQuestionIDa = 1;
            var questionRadioCountArraya = [[1, 2]];
            function addQuestion(targetval) {
                if(targetval=="skills")
                {
                    count++;
                    totalQuestionCount++;
                    latestQuestionID++;
                    radioCount = 1;
                    totalRadioCount++;
                    updateCountOnForm(count, "QuestionCount");
                    latestQuestionID = Math.max(latestQuestionID, totalQuestionCount);
                }
                else
                {
                    counta++;
                    totalQuestionCounta++;
                    latestQuestionIDa++;
                    radioCounta = 1;
                    totalRadioCounta++;
                    updateCountOnForm(counta, "QuestionCounta");
                    latestQuestionID = Math.max(latestQuestionIDa, totalQuestionCounta);
                }
                const questionDiv = document.createElement('div');
                const individualQuestion = document.createElement('div');
                const question = document.createElement('input');
                question.setAttribute('type', 'text');
                const deleteButton = document.createElement('a');
                deleteButton.setAttribute('class', 'btn delete_button');
                const deleteIcon = document.createElement('i');
                deleteButton.setAttribute('class', 'fa fa-close fa-2x');
                if(targetval=="skills")
                {
                    questionDiv.setAttribute('id', `sq${totalQuestionCount}`);
                    questionDiv.setAttribute('class', `single_question${totalQuestionCount} Ques col-6`);
                    individualQuestion.setAttribute('class', 'individualQuestion');
                    question.setAttribute('class', 'form-control specialInputQuestions');
                    question.setAttribute('placeholder', 'Skill');
                    question.setAttribute('id', `question${totalQuestionCount}`);
                    question.setAttribute('name', `skill`);
                    deleteButton.setAttribute('id', `${totalQuestionCount}`);
                    deleteButton.setAttribute('onclick', 'deleteQuestion(this.id, "sq")');
                }
                else
                {
                    questionDiv.setAttribute('id', `eq${totalQuestionCounta}`);
                    questionDiv.setAttribute('class', `single_question${totalQuestionCounta}a Ques`);
                    individualQuestion.setAttribute('class', 'individualQuestiona');
                    question.setAttribute('class', 'form-control specialInputQuestionsa');
                    question.setAttribute('placeholder', 'Experience (Role, company, timespan)');
                    question.setAttribute('id', `question${totalQuestionCounta}a`);
                    question.setAttribute('name', `experience`);
                    deleteButton.setAttribute('id', `${totalQuestionCounta}`);
                    deleteButton.setAttribute('onclick', 'deleteQuestion(this.id, "eq")');
                }
                deleteButton.appendChild(deleteIcon);
                individualQuestion.appendChild(question);
                individualQuestion.appendChild(deleteButton);
                questionDiv.appendChild(individualQuestion);
                var quest;
                if(targetval=="skills")
                {
                    updateRadioCountOnForm(totalRadioCount, "radioCount");
                    quest=document.getElementById('questioneer');
                    questionRadioCountArray.push([totalQuestionCount, radioCount]);
                    rdc(questionRadioCountArray, "rdc");
                }
                else
                {
                    updateRadioCountOnForm(totalRadioCounta, "radioCounta");
                    quest=document.getElementById('questioneera');
                    questionRadioCountArraya.push([totalQuestionCounta, radioCounta]);
                    rdc(questionRadioCountArraya, "rdca");
                }
                quest.appendChild(questionDiv);
            }
            function updateCountOnForm(count, targetval) {
                var countKeeper = document.getElementById(targetval);
                countKeeper.value = count; 
            }
            function updateRadioCountOnForm(totalRadioCount, targetval) {
                var countKeeper = document.getElementById(targetval);
                countKeeper.value = totalRadioCount; 
            }
            function rdc(questionRadioCountArray, targetval) {
                var questionRadioCountString = document.getElementById(targetval);
                questionRadioCountString.value = questionRadioCountArray;
            }
            function deleteQuestion(questionID, targetval) {
                var classNameOfQuestionToRemove = targetval + questionID;
                const element = document.getElementById(classNameOfQuestionToRemove);
                element.remove();
                questionID = parseInt(questionID);
                var firstArray = [];
                var firstArraya = [];
                if(targetval=="sq")
                {
                    count--;
                    updateCountOnForm(count, "QuestionCount");
                    totalRadioCount = totalRadioCount - radioCount;
                    updateRadioCountOnForm(totalRadioCount, "radioCount");
                    if (questionID == totalQuestionCount) {
                        totalQuestionCount--;
                    }
                    for (var i = 0; i < questionRadioCountArray.length; i++) {
                        firstArray.push(questionRadioCountArray[i][0]);
                    }
                    var index = firstArray.indexOf(questionID);
                    questionRadioCountArray.splice(index, 1);
                    latestQuestionID = parseInt(questionRadioCountArray[questionRadioCountArray.length-1][0]);
                    var double = questionRadioCountArray.pop();
                    double.push(radioCount);
                    questionRadioCountArray.push(double);
                    rdc(questionRadioCountArray, "rdc");
                }
                else
                {
                    counta--;
                    updateCountOnForm(count, "QuestionCounta");
                    totalRadioCounta = totalRadioCounta - radioCounta;
                    updateRadioCountOnForm(totalRadioCount, "radioCounta");
                    if (questionID == totalQuestionCounta) {
                        totalQuestionCounta--;
                    }
                    for (var i = 0; i < questionRadioCountArraya.length; i++) {
                        firstArraya.push(questionRadioCountArraya[i][0]);
                    }
                    var indexa = firstArraya.indexOf(questionID);
                    questionRadioCountArraya.splice(indexa, 1);
                    latestQuestionID = parseInt(questionRadioCountArraya[questionRadioCountArraya.length-1][0]);
                    var doublea = questionRadioCountArraya.pop();
                    doublea.push(radioCounta);
                    questionRadioCountArraya.push(doublea); 
                    rdc(questionRadioCountArray, "rdca");
                }
            }

        //     <div class="form-group fg_2">
        //     <input style="border: none; display: none;" id="QuestionCount" name="question_count" value=1>
        //     <input style="border: none; display: none;" id="radioCount" name="radio_count" value=2>
        //     <input style="border: none; display: none;" id="rdc" name="rdc">
        //     <section class="questionInput" class="container">
        //         <div id="questioneer" class="row">
        //             <div id="sq1" class="single_question1 Ques col-6">
        //                 <div class="individualQuestion">
        //                     <input class="form-control specialInputQuestions" type="text" placeholder="Skill" name="skill" id="question1">
        //                 </div>
        //             </div>
        //         </div>
        //         <button type="button" id="addQuestions" class="btn btn-primary" onclick="addQuestion('skills')" style="margin: 20px 20px">+</button>
        //     </section>
        // </div>
        // <div class="form-group fg_2">
        //     <input style="border: none; display: none;" id="QuestionCounta" name="question_counta" value=1>
        //     <input style="border: none; display: none;" id="radioCounta" name="radio_counta" value=2>
        //     <input style="border: none; display: none;" id="rdca" name="rdca">
        //     <section class="questionInputa" class="container">
        //         <div id="questioneera" class="row">
        //             <div id="eq1" class="single_question1a Ques">
        //                 <div class="individualQuestiona">
        //                     <input class="form-control specialInputQuestionsa" type="text" placeholder="Experience (Role, company, timespan)" name="experience" id="question1a">
        //                 </div>
        //             </div>
        //         </div>
        //         <button type="button" id="addQuestionsa" class="btn btn-primary" onclick="addQuestion('experience')" style="margin: 20px 20px">+</button>
        //     </section>
        // </div>