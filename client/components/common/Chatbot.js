import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
  return (
    <div>
      <ChatBot
        headerTitle="Yi's butler"
        floating
        recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: 'Hello, what up?',
            trigger: '2'
          },
          {
            id: '2',
            options: [
              {
                value: 1,
                label: 'Good',
                trigger: 'feelinggood'
              },
              {
                value: 2,
                label: 'Not good',
                trigger: 'feelingbad'
              }
            ]
          },
          {
            id: 'feelinggood',
            message: `I am glad to know, is there anything i can help you with? `,
            trigger: 'options'
          },
          {
            id: 'feelingbad',
            message: `I am so sorry to hear that, but have no fear, you're in the right place. How may i help?`,
            trigger: 'options'
          },
          {
            id: 'options',
            options: [
              {
                value: 1,
                label: 'Know more about YI',
                trigger: 'myInfoBefore'
              },
              {
                value: 2,
                label: "Know more about YI's skill sets",
                trigger: 'skillSetBefore'
              },
              {
                value: 3,
                label: "Know more about Yi's hobbies",
                trigger: 'hobbiesBefore'
              }
            ]
          },
          {
            id: 'myInfoBefore',
            message: 'Sure, just a moment',
            trigger: 'info'
          },
          {
            id: 'skillSetBefore',
            message: 'Sure, just a moment',
            trigger: 'skills'
          },
          {
            id: 'hobbiesBefore',
            message: 'Sure, just a moment',
            trigger: 'hobbies'
          },
          {
            id: 'info',
            message:
              'I was born in 1996, turnning 22 years old, studying software engineering in Haagahelia UAS, Finland',
            trigger: 'anythingMoreBefore'
          },
          {
            id: 'skills',
            message:
              'i am comfortable working with both front-end and back-end techs like React, React Native, Node.js etc, check the CV, you donkey! ',
            trigger: 'anythingMoreBefore'
          },
          {
            id: 'hobbies',
            message: 'I like country music...',
            trigger: 'anythingMoreBefore'
          },
          {
            id: 'anythingMoreBefore',
            message:
              "Is there anything else i can help you with? Type the number 1 to see a list of options, type 'no' to end our conversation",
            trigger: 'anythingMore'
          },
          {
            id: 'anythingMore',
            user: true,
            trigger: ({ value, steps }) => {
              if (value === '1') {
                return 'options';
              } else if (value.toLowerCase() === 'no') {
                return 'end';
              } else {
                return 'loop';
              }
            }
          },
          {
            id: 'loop',
            message:
              'oops..It seems you type the wrong command, wanna try again? ',
            trigger: 'anythingMore'
          },
          {
            id: 'end',
            message: 'Thank you so much, make sure you come back again',
            end: true
          }
        ]}
      />
    </div>
  );
};

export default Chatbot;
