const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let lowerCase = tutorials.map(t => t.toLowerCase())
  let split = lowerCase.map(t => t.split(' '))
  let s = split.map(function(s){
    s.map(function(st){
      st.charAt(0).toUpperCase() + st.substring(1)
    }).join(' ')
  })
}
