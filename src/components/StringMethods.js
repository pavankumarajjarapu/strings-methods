import React from "react";

function StringMethods() {
  let quoteOfTheDay = "Youre love make me strong. hates makes me unstoppable.";
  return (
    <div>
      <h1>SRTING_METHODS</h1>
      <button
        onClick={() => {
          console.log(quoteOfTheDay);
          console.log(quoteOfTheDay.toUpperCase());
        }}
      >
        uppercase
      </button>
      <button
        onClick={() => {
          console.log(quoteOfTheDay);
          console.log(quoteOfTheDay.toLocaleLowerCase());
        }}
      >
        Lowercase
      </button>
      <button
        onClick={() => {
          const quote1 =
            "The only way to do great work is to love what you do. - Steve Jobs";
          const quote2 =
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill";
          console.log(quote1);
          console.log(quote2);
          console.log(quote1.concat(quote2));
          console.log(`^^^ ${quote1} |||${quote2} ^^^`);
        }}
      >
        Concate
      </button>
      <button
        onClick={() => {
          let quote3 =
            "        You can do anything, but not everything. - Anonymous          ";
          console.log(`*****${quote3}*****`);
          console.log(`*****${quote3.trimStart()}*****`);
        }}
      >
        Trim-start
      </button>
      <button
        onClick={() => {
          let quote4 =
            "        You don’t have to be great to start, but you have to start to be great. - Zig Ziglar       ";
          console.log(`*****${quote4}*****`);
          console.log(`*****${quote4.trimEnd()}*****`);
        }}
      >
        Trim-End
      </button>
      <button
        onClick={() => {
          let quote5 =
            "     The starting point of all achievement is desire. - Napoleon Hill      ";
          console.log(`*****${quote5}*****`);
          console.log(`*****${quote5.trim()}*****`);
        }}
      >
        Trim
      </button>
      <button
        onClick={() => {
          let quote6 =
            "Today’s accomplishments were yesterday’s impossibilities.-Robert H. Schuller";
          console.log(quote6);
          console.log(quote6.padStart(100, "$"));
        }}
      >
        Pad-Strat
      </button>
      <button
        onClick={() => {
          let name = "pavan";
          console.log(name.padEnd(20, "!"));
          console.log(name.length);
        }}
      >
        pad-End
      </button>
      <button
        onClick={() => {
          let quote7 =
            "A person should not be too honest. Straight trees are cut first and honest people are screwed first. ---->";
          console.log(quote7.repeat(10));
        }}
      >
        Repeat
      </button>
      <button
        onClick={() => {
          let story =
            " Ram, a diligent businessman, expanded his empire tirelessly. Ram's strategies, Ram's decisions—success followed Ram. In every venture, Ram's ambition fueled Ram's rise to prosperity and respect.";
          console.log(story);
          console.log(story.replace("Ram", "Sam"));
        }}
      >
        Replace
      </button>
      <button
        onClick={() => {
          let story =
            " Ram, a diligent businessman, expanded his empire tirelessly. Ram's strategies, Ram's decisions—success followed Ram. In every venture, Ram's ambition fueled Ram's rise to prosperity and respect.";
          console.log(story);
          console.log(story.replaceAll("Ram", "bheem"));
          console.log(story.replaceAll("Ram", story[1]));
        }}
      >
        Replace-all
      </button>
      <button
        onClick={() => {
          const dialogue1 =
            "My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.";
          console.log(dialogue1);
          console.log(dialogue1.split(","));
          console.log(dialogue1.split(" "));
        }}
      >
        Split
      </button>
      <button
        onClick={() => {
          let quote8 = "Dream big and dare to fail.";
          console.log(quote8);
          console.log(quote8.slice(14, 19));
          console.log(quote8.slice(14));
        }}
      >
        slice
      </button>
      <button
        onClick={() => {
          let quote9 =
            "The only way to do great work is to love what you do. - Steve Jobs";
          console.log(quote9);
          console.log(quote9.substring(19));
        }}
      >
        subString
      </button>
      <button
        onClick={() => {
          let quote10 =
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson";
          console.log(quote10);
          console.log(quote10.substr(22, 16));
        }}
      >
        substr
      </button>
      <button
        onClick={() => {
          let quote11 =
            "Don't let yesterday take up too much of today. - Will Rogers";
          console.log(quote11);
          console.log(quote11.le);
        }}
      >
        length
      </button>
      <button
        onClick={() => {
          let quote12 =
            "Creativity is intelligence having fun. - Albert Einstein";
          console.log(quote12);
          console.log(quote12.at(0));
          console.log(quote12[1]);
        }}
      >
        at
      </button>
      <button
        onClick={() => {
          let alphabets = "abcdefghijklmnopqrstuvxyz";

          for (let i = 0; i < alphabets.length; i++) {
            console.log(`${alphabets[i]}------>${alphabets.charCodeAt(i)}`);
          }
        }}
      >
        Charcodeat
      </button>
      <button
        onClick={() => {
          let name = "pavan";
          console.log(name);
          console.log(name.charAt(0));
        }}
      >
        charAt
      </button>
      <button
        onClick={() => {
          for (let i = 3077; i < 3150; i++) {
            console.log(String.fromCharCode(i));
          }
        }}
      >
        fromCharCode
      </button>
      <button
        onClick={() => {
          let mobileNumber = "+918945786287";
          console.log(mobileNumber);
          console.log(mobileNumber.startsWith("+91"));
        }}
      >
        starts-With
      </button>
      <button
        onClick={() => {
          let mail = "crazyHubb@gmail.com";
          console.log(mail);
          console.log(mail.endsWith("mail.com"));
        }}
      >
        Ends-With
      </button>
      <button
        onClick={() => {
          let name1 = "pavan Kumar";
          console.log(name1);
          console.log(name1.indexOf("a"));
          console.log(name1.indexOf("h"));
        }}
      >
        index-of
      </button>
      <button
        onClick={() => {
          let name1 = "pavan Kumar";
          console.log(name1);
          console.log(name1.lastIndexOf("a"));
          console.log(name1.lastIndexOf("h"));
        }}
      >
        lastindex-of
      </button>
      <button
        onClick={() => {
          let tesla =
            "Nikola Tesla, a visionary inventor and electrical engineer, pioneered alternating current (AC) electricity. His genius foresaw wireless communication and renewable energy, yet he faced challenges, leaving behind a legacy of innovation and mystery.";
          console.log(tesla);
          console.log(tesla.search("tesla"));
          console.log(tesla.search("Tesla"));
          console.log(tesla.search(/tesla/i));
        }}
      >
        search-of
      </button>
      {/* <button
        onClick={() => {
          let name = "";
          let make="pavan"
          for (let i = 95; i < 120; i++) {
            if (i == 97 || i == 112 || i == 110 || i == 118) {
              console.log(String.fromCharCode(i));
              name = name+(String.fromCharCode(i));
            }
          }
          console.log(name);
        }}
      >
        name_making
      </button> */}
      {/* <button onClick={() => {}}></button>
      <button onClick={() => {}}></button> */}
    </div>
  );
}

export default StringMethods;
