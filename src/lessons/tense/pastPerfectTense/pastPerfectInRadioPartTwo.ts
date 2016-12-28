import { RawData } from '../../../types';
import { TypeId, id, space, multi, getNameFemale } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.radio];
const title = "Past Perfect Tense";
const info = 'Build the correct sentence in Past Perfect Tense.';
const lessons: RawData[] = [
    /*   {
           id: id(common), title, explenation, info,
           name: " " + space + " .",
           correct: [""],
           incorrect: [""]
       }*/
]

/*
Todo -> the read team (had, have) (win won) make this sentences!
She	had	given
 
        If I had known you were ill, I would have visited you.
 
 
I didn't want to go to the movies with my friends because I had seen the film already.
John said that he had never eaten sushi before.

 

Positive sentences
      They had visited a doctor.
       
      
       
      The film had started before we reached cinema.
Negative sentences
      They had not visited a doctor.

      I had not finished my work last year.
     
     
Interrogative sentences
     
      Had it rained heavily last month?
 
 Long forms	Contracted forms
.	I'd ridden the bike.
You had ridden the bike.	You'd ridden the bike.
He had ridden the bike.	He'd ridden the bike..

 I had played handball.	I'd played handball.
You had played handball.	You'd played handball.
He had played handball.	He'd played handball.

I had not played handball.
I'd not played handball.
I hadn't played handball.
You had not played handball.	You'd not played handball.
You hadn't played handball.
He had not played handball.	He'd not played handball.
He hadn't played handball.

Had I played handball?	There are no contracted forms.
Had you played handball?
Had he played handball?




I didn't know who he was. I had never seen him before.
"Mary wasn't at home when I arrived." / "Really? Where had she gone?"


For example, imagine that you arrive at the station at 9:15am. The stationmaster says to you:

"You are too late. The train has left."
Later, you tell your friends:

""
We often use the Past Perfect in reported speech after verbs like: said, told, asked, thought, wondered

Look at these examples:



.
I wondered if I had been there before.
I asked them why they had not finished.
*/
export {
    title,
    lessons,
}



