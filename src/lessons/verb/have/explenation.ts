/// <reference path='../../../../typings/tsd.d.ts' />
const b = '<br />';
const html = ''
    + b + 'Two forms: <b>have</b> and <b>has</b>'
    + b + 'I have'
    + b + 'you have'
    + b + 'he, she, it has'
    + b + 'we have'
    + b + 'you have'
    + b + 'they have'
    + b + ''
    + b + '<b>Have</b> and <b>has</b> often come with <b>got</b>'
    + b + 'I have = I have <u>got</u>'
    + b + 'He has = he has <u>got</u>'
    + b + 'The meaning remains the same'
    + b + ''
    + b + '<b>Have</b> often come with <b>some, any, no</b> and <b>one</b>'
    + b + 'Have you got <u>any</u> money?'
    + b + 'Yes, I have (got) <u>some</u>.'
    + b + 'No, I have not got <u>any</u>.'
    + b + ''
    + b + 'Have you got <u>any</u> books?'
    + b + 'Yes, I have (got) <u>some</u>.'
    + b + 'No, I have not got <u>any</u>.'
    + b + ''
    + b + 'Have you got <u>a</u> car?'
    + b + 'Yes, I have (got) <u>one</u>.'
    + b + 'No, I have not got <u>one</u>.'
    + b + ''
    + b + 'Negation of Noun Phrases with <b>not</b>'
    + b + '<b>I have <u>not</u> got any money.</b>'
    + b + ''
    + b + 'Negation of Verb Phrases with <b>no</b>'
    + b + '<b>I have <u>no</u> money.</b>'
    + b + ''
    + b + ''

var checkHTML = function(html: string) {
    var doc = document.createElement('div');
    doc.innerHTML = html;
    return (doc.innerHTML === html);
}

export = {
    html: html
};
  