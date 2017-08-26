//is this sentence asking a question?

const isQuestion = function(ts) {
  //if it has a question mark..
  let endPunct = ts.endPunctuation();
  if (/\?/.test(endPunct) === true) {
    return true;
  }
  //try to actually figure this out without a question-mark
  if (ts.has('#QuestionWord')) {
    return true;
  }
  //
  //is it, do you - start of sentence
  if (ts.has('^(do|does|did|is|was) #Noun')) {
    return true;
  }

  let clauses = ts.match('*').splitAfter('#Comma');
  //is wayne gretskzy alive
  if (clauses.has('(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$')) {
    return true;
  }
  // //do you...
  // if (clauses.has('(do|does) (it|#Pronoun)')) {
  //   return true;
  // }
  return false;
};
module.exports = isQuestion;
